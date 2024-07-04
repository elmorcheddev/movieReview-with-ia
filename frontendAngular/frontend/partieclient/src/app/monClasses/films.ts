import { CalandrierMovie } from "./CalandrierMovie";
import { Acteur } from "./acteur";
import { Director } from "./director";
import { Genre } from "./genre";

export class Films {
    id: number;
    imageCov: string;
    imageBase:string
    title: string;
    description: string;
    releaseDate: string;
    genre: Genre;
    director: Director;
    acteur: Acteur;
    duree : number
    calandrierMovies:CalandrierMovie[]
}