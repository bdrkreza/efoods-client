import { IAuthData } from "./../../types";
import requests from "./httpService";

export type userType = { email: string; password: string };

class AuthService {
  signup(body: IAuthData): Promise<IAuthData> {
    return requests.post("/auth/signup", body);
  }

  login(body: userType): Promise<IAuthData> {
    return requests.post("/auth/login", body);
  }

  logout(): Promise<any> {
    return requests.get(`/auth/login`);
  }
}

export default new AuthService();
