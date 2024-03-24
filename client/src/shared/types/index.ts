export type UserSignUp = {
	email: string;
	password: string;
	username: string;
};

export type UserSignIn = {
	email: string;
	password: string;
};

export type RouteChild = {
	children: JSX.Element;
};

export type Course = {
	id: number;
	title: string;
	imageUrl: string;
	created: Date;
};

export type CardItem = {
	id: number;
	title: string;
	img: string;
};

export type UpdateUser = {
	username: string;
	email: string;
}

export type UserData = {
	id: number;
	email: string;
	username: string;
	avatar: string;
	role: string;
}