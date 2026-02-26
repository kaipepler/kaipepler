class LightBoxImage extends HTMLElement {
	#dialog = null;
	#image = null;
	#toggle = null;
	#prefersReducedMotion = null;
	#handleToggleClick = null;
	#handleDialogClose = null;
	#viewTransitionAbortController = null;
	#isTransitioning = false;

	get dialog() {
		if (!this.#dialog) {
			this.#dialog = document.getElementById(this.getAttribute('dialog-id'));
		}
		return this.#dialog;
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.#image = this.querySelector('img');
		this.shadowRoot.innerHTML = this.setupToggle();
		this.#toggle = this.shadowRoot.querySelector('button');
		this.#prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		// Bind methods to enable proper cleanup
		this.#handleToggleClick = () => this.handleToggleClick();
		this.#handleDialogClose = () => this.handleDialogClose();

		this.#toggle.addEventListener('click', this.#handleToggleClick);
		this.dialog.addEventListener('click', this.#handleDialogClose);
		this.dialog.addEventListener('cancel', this.#handleDialogClose);
	}

	disconnectedCallback() {
		if (this.#toggle) {
			this.#toggle.removeEventListener('click', this.#handleToggleClick);
		}
		if (this.#dialog) {
			this.#dialog.removeEventListener('click', this.#handleDialogClose);
			this.#dialog.removeEventListener('cancel', this.#handleDialogClose);
		}
		// Clear abort controller if transition is in progress
		if (this.#viewTransitionAbortController) {
			this.#viewTransitionAbortController.abort();
			this.#viewTransitionAbortController = null;
		}
		// Reset view transition name if it persists
		if (this.#image) {
			this.#image.style.removeProperty('view-transition-name');
		}
		// Clear dialog cache to prevent stale references
		this.#dialog = null;
	}

	setupToggle() {
		return `
      <style>
        button {
          all: unset;
          outline: revert;
          display: grid;
          grid-template-areas: "box";
          transition: outline 300ms linear, transform 300ms linear;
        }
        button:focus-visible {
          outline: 4px solid var(--green-11);
          border-radius: 0.5rem;
          transform: scale(1.05);
          overflow: hidden;
        }
        button > * {
          grid-area: box;
        }
        img {
          max-width: 100%;
          height: auto;
          visibility: hidden;
        }
      </style>
      <button aria-label="${this.#image.alt} - Open lightbox">
        ${this.#image.outerHTML}
        <div>
          <slot></slot>
        </div>
      </button>
    `;
	}

	handleToggleClick() {
		if (this.#isTransitioning) return;
		this.moveImage(() => this.moveImageToTarget());
	}

	handleDialogClose() {
		if (this.#isTransitioning) return;
		if (this.#dialog && this.#dialog.contains(this.#image)) {
			this.moveImage(() => this.moveImageBack());
		}
	}

	moveImage(callback) {
		const isChrome = /Chrome/.test(navigator.userAgent);

		if (!document.startViewTransition || this.#prefersReducedMotion || isChrome) {
			callback();
		} else {
			this.handleViewTransition(callback);
		}
	}

	async handleViewTransition(callback) {
		this.#isTransitioning = true;
		this.#viewTransitionAbortController = new AbortController();
		const signal = this.#viewTransitionAbortController.signal;

		try {
			const transition = document.startViewTransition(() => callback());
			this.#image.style.viewTransitionName = 'active-lightbox-image';

			await transition.finished;
		} catch (error) {
			if (error.name !== 'AbortError') {
				console.error('View transition error:', error);
			}
		} finally {
			if (!signal.aborted) {
				this.#image.style.removeProperty('view-transition-name');
			}
			this.#viewTransitionAbortController = null;
			this.#isTransitioning = false;
		}
	}

	moveImageToTarget() {
		this.dialog.append(this.#image);
		this.dialog.showModal();
	}

	moveImageBack() {
		this.append(this.#image);
		this.dialog.close();
	}
}

customElements.define('lightbox-image', LightBoxImage);
