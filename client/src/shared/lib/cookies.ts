export const getCookie = (): string => {
	const cookieString = document.cookie;

	const tokenIdx = cookieString.indexOf("refreshToken=");

	const token = cookieString
		.substring(tokenIdx + "refreshToken=".length)
		.split(";")[0];

	return token;
};
