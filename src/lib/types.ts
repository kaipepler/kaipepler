export type Categories = 'designsystems' | 'color';

export type Article = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
