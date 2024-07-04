import { RoleUtilisateur } from "./RoleUtilisateur";

export class Client {
        id:number;
	    nom:string;
	    prenom:string;
  	    username:string;
		etat:boolean
	    password:string;
	    roles :RoleUtilisateur[];
}