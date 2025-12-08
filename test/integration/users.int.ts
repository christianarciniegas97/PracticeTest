import { UsersApi } from "../../apis/usersApi";

describe("users apis test", () =>{

    const userApi = new UsersApi()

    test("create users", async () =>{
     const response = await userApi.postCreateUsers()
     expect(response.status).toBe(201)
     expect(response.body.data.id).toBeTruthy()
     expect(response.body.data.email).toBeTruthy();
    });

    test("validate login", async() =>{
        const response = await userApi.postLogin();
        expect(response.statusCode).toBe(200)
    });

    test("get profile", async() =>{
        const res = await userApi.getProfile();
        expect(res.status).toBe(200);
    });

    test("update the user profile", async () =>{
        const res = await userApi.pathProfile();
        expect(res.status).toBe(200);
        expect(res.body.message).toContain("Profile updated successful")
        expect(res.body.data).toHaveProperty("id")
        expect(res.body.data).toHaveProperty("name")
        expect(res.body.data).toHaveProperty("email")
        expect(res.body.data).toHaveProperty("phone")
        expect(res.body.data).toHaveProperty("company")
    });

    
})