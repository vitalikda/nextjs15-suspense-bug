export const delay = (ms = 5000) =>
	new Promise((resolve) => setTimeout(resolve, ms));
