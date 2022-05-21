/** @format */

export type PostType = {
	contributors: string[];
	id: string;
	likes: number;
	src: string;
	title: string;
	comments: string[]
};

export type DataState = {
	posts: PostType[];
	loading: boolean;
	error: [boolean, string];
};