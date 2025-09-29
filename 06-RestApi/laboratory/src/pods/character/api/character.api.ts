import { Character } from "./character.api-model";

const API_URL = "http://localhost:3000/api/character";

export const getCharacter = async (id: string): Promise<Character> => {
	const response = await fetch(`${API_URL}/${id}`);
	if (!response.ok) {
		throw new Error(`Error fetching character: ${response.statusText}`);
	}
	return response.json();
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
	const response = await fetch(`${API_URL}/${character.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(character),
	});
	return response.ok;
};
