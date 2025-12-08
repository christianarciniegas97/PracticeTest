import * as request from "supertest"
import { url } from "../data/data";

export class Auth {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  async login(): Promise<string> {
    const res = await request(url.user)
      .post("/login") 
      .type("form")
      .send({ email: this.email, password: this.password });

    if (res.status !== 200 && res.status !== 201) {
      throw new Error(`Login failed: ${res.status}`);
    }

    const token = res.body?.token ?? res.body?.data?.token;
    if (!token) throw new Error("No token found in login response");

    return token;
  }
}