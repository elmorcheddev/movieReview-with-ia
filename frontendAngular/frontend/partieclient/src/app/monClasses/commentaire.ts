import { Client } from "./Client"
import { Films } from "./films"

export class Commentaire{
    id:number
    commentaire:string
    films:Films
    sentiment:string
    utilisateurs:Client
 }