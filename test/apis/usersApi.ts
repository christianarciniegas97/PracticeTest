import * as  request from "supertest";
import { Auth } from "./auth";
import { users } from "../data/data";
import { url } from "../data/data";


export class UsersApi {

    static async getToken(){
        const auth = new Auth( users.validUser.email, users.validUser.password);
        const token = await auth.login()
        return token
    }

    async postCreateUsers (){
      return await request(url.user)
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
        return await request(url.user)
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
        return await request(url.user)
        .get("/profile")
        .set("accept", "application/json")
        .set("x-auth-token", token); 
    };

    async pathProfile(){
        const token = await UsersApi.getToken()
        return await request(url.user)
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