export interface User {
  id: number;
  username: string;
  passwordHash: string; //brycrpt hash of the password
}
