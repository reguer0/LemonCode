import { CharacterEntityApi, CharacterListResponse } from './character-collection.api-model';

const API_URL = 'http://localhost:3000/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {

	const response = await fetch(API_URL);
	if (!response.ok) {
		throw new Error(`Error fetching characters: ${response.statusText}`);
	}

	const data: CharacterListResponse = await response.json();
	return data.results;
};
