 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface UtilisateursData {
  email:string;
  entreprise: string;
  id:number;
  nom:string;
  roleNom: string
}
export interface Utilisateur {
  nom: string;
  email: string;
  password: string;
  role: string;
  entreprise: string;
}
@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private api = "http://localhost:8090/utilisateurs";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.api);
  }

  getById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.api}/${id}`);
  }

  create(data: Utilisateur): Observable<any> {
    return this.http.post(this.api, data);
  }

  update(id: number, data: Utilisateur): Observable<any> {
    return this.http.patch(`${this.api}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}