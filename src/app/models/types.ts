export interface ICountry {
	flag: string;
	name: string;
	population: number;
	region: string;
	capital: string;
}

export interface ICountryDetails {
	flag: string;
	name: string;
	nativeName: string;
	topLevelDomain: string[];
	population: number;
	currencies: { name: string }[];
	region: string;
	languages: { name: string }[];
	subregion: string;
	capital: string;
	borders: string[];
}
