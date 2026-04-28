export interface Utilisateur {
  id: number;
  nom: string;
  email: string;
  password?: string;
  roleNom: string;
  entreprise: string;
}
