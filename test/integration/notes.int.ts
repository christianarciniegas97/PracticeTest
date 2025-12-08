import { NotesApi } from "../../apis/notesApi"

describe("Notes module", () =>{
    const notesApi = new NotesApi()
    
    test("create new notes", async () =>{
        const res = await notesApi.postCreateNewNote();
        expect(res.body.data).toHaveProperty("title")
        expect(res.body.data).toHaveProperty("description")
        expect(res.body.data).toHaveProperty("category")
        console.log(`${res.body.data.description} - ${res.body.data.title}`)
    })
})