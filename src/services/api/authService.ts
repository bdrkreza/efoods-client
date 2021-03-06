import { IAuthData } from "./../../types";
import requests from "./httpService";

export type userType = { email: string; password: string };

class AuthService {
  login(body: userType): Promise<IAuthData> {
    return requests.post("/auth/login", body);
  }

  logout(): Promise<any> {
    return requests.get(`/auth/login`);
  }
}

export default new AuthService();
