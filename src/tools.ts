import * as tools from './tools';

export const getSuuid = () => {
	const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	const length = 6;
	let suuid = '';

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		suuid += characters.charAt(randomIndex);
	}

	return suuid;
}

export const cleanCharactersToAscii = (text: string) => {
	text = tools.replaceAll(text, 'Ü', 'ue');
	text = tools.replaceAll(text, 'ü', 'ue');
	text = tools.replaceAll(text, 'Ö', 'oe');
	text = tools.replaceAll(text, 'ö', 'oe');
	text = tools.replaceAll(text, 'Ä', 'oe');
	text = tools.replaceAll(text, 'ä', 'oe');
	text = tools.replaceAll(text, 'ß', 'ss');
	text = tools.replaceAll(text, ' ', '');
	return text;
}

/**
 * REPLACE ALL OCCURANCES IN A STRING:
 *
 * qstr.replaceAll("This is a tost.", "o", "e");
 *
 * "This is a test."
 */
export const replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};

export const getCurrentPageIdCode = () => {
	const url = tools.getCurrentUrl();
	const parts = url.split('/');
	return parts[parts.length - 1];
}

export const getCurrentUrl = () => {
	return window.location.href;
}