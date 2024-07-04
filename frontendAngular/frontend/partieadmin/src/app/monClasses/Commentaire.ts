import { Films } from "./films";
import { Utilisateur } from "./utilisateur";

export class Commentaire{
     id:number;
	 commentaire:string;
	  sentiment:string;
 	   films:Films;
 	  utilisateurs:Utilisateur;
}