export interface CharacterEntityVm {
	id: number;
	name: string;
	image: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: { name: string; url: string };
	location: { name: string; url: string };
	episode: string[];
	url: string;
	created: string;
	bestSentence: string;
}

export const createEmptyCharacter = (): CharacterEntityVm => ({
	id: 0,
	image: '',
	name: '',
	status: '',
	species: '',
	location: {
		name: '',
		url: '',
	},
	origin: {
		name: '',
		url: '',
	},
	type: '',
	gender: '',
	episode: [],
	url: '',
	created: '',
	bestSentence: '',
});