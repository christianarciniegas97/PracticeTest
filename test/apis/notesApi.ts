import * as  request from "supertest";
import { url } from "../data/data";
import { UsersApi } from "./usersApi";


export class NotesApi {

    async postCreateNewNote(){
        const token = await UsersApi.getToken()

        return request(url.notes)
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