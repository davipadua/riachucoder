export interface User {
  id: number;
  name: {firstname: string; lastname: string};
  email: string;
  password: string;
}