export type Categories = 'designsystems' | 'color';

export type Article = {
	title: string;
	slug: string;
	description: string;
	date: string;
	update: string;
	categories: Categories[];
};
