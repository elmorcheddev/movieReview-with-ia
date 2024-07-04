import { Roles } from './Roles';

export class Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  etat: boolean;
  username: string;
  password: string;
  roles: Roles[];
}
