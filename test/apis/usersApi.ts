import * as  request from "supertest";
import { Auth } from "./auth";
import { users } from "../data/data";

const base_url =  "https://practice.expandtesting.com/notes/api/users"

export class UsersApi {

    static async getToken(){
        const auth = new Auth( users.validUser.email, users.validUser.password);
        const token = await auth.login()
        return token
    }

    async postCreateUsers (){
      return await request(base_url)
        .post("/register")
        .accept("application/json")
        .type("form")
        .send({
            name:"test",
            email: `test${Date.now()}@test.com`, // <-- para evitar duplicados
            password:"123114654"
        })
    };

    async postLogin(){
        return await request(base_url)
        .post("/login")
        .accept("application/json")
        .type("form")
        .send({
            email: users.validUser.email,
            password: users.validUser.password
        })
    };
    
    async getProfile(){
        const token = await UsersApi.getToken()
        return await request(base_url)
        .get("/profile")
        .set("accept", "application/json")
        .set("x-auth-token", token); 
    };

    async pathProfile(){
        const token = await UsersApi.getToken()
        return await request(base_url)
        .patch("/profile")
        .set("accept", "application/json")
        .set("x-auth-token", token)
        .type("form")
        .send({
            name: users.validUser.email,
            phone: users.validUser.phone,
            company: users.validUser.company
        })
    };


}