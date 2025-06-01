export function formatDate(date: string | Date) {
	if (typeof date === 'string') {
		// Parse and pad year-month-day format
		const [year, month, day] = date.split('-');
		const paddedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
		date = new Date(`${paddedDate}T12:00:00`);
	}

	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(date);
}
