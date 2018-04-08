//Interface for user object coming FROM server
export interface IUser {
  id: string;
  name: string;
  roles: string[];
  email: string;
}
