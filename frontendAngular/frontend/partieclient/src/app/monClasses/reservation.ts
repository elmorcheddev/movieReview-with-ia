import { CalandrierMovie } from "./CalandrierMovie";
import { Client } from "./Client";
import { Films } from "./films";

export class Reservation {

    id: number;
    date: string;
    films: Films
    utilisateurs: Client;
}

