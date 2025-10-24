import * as  request from "supertest";
import { urls } from "../data/data";
import { UsersApi } from "./usersApi";


export class NotesApi {

    async postCreateNewNote(){
        const token = await UsersApi.getToken()

        return request(urls.url.base)
        .post("/notes")
        .set("accept", "application/json")
        .set("x-auth-token", token )
        .type("form")
        .send({
            title:"Test api",
            description: "this is description",
            category: "Home"
        })

    }


}