import { User } from "../models/user.model";

export class Security {
  public static set(user: User, token: string) {
    this.setUser(user);
    this.setToken(token);
  }

  public static setUser(user: User) {
    const data = JSON.stringify(user);
    localStorage.setItem('petshopuser', btoa(data));
  }

  public static setToken(token: string) {
    localStorage.setItem('petshoptoken', token);
  }

  public static getUser(): User {
    const data = localStorage.getItem('petshopuser');
    
    if (!data) {
      return new User();
    }

    return JSON.parse(atob(data));
  }

  public static getToken(): string {
    const data = localStorage.getItem('petshoptoken');

    if (!data) {
      return '';
    }

    return data;
  }

  public static hasToken(): boolean {
    if (this.getToken())
      return true;
    else
      return false;
  }

  public static clear() {
    localStorage.removeItem('petshopuser');
    localStorage.removeItem('petshoptoken');
  }
}