import { test } from "../base";
import { users } from "../data/data";

test.beforeEach( async ({loginPage}) =>{
    await loginPage.goToLogin()
})

test("Login", async({loginPage}) =>{
    await loginPage.completeDataLogin(
        users.validUser.Username,
        users.validUser.PasswordUI
    );
    await loginPage.clickToSubmitButton()
    await loginPage.validateLogin()
})

test("Logout", async({loginPage}) =>{
    await loginPage.completeDataLogin(
        users.validUser.Username,
        users.validUser.PasswordUI
    );
    await loginPage.clickToSubmitButton()
    await loginPage.validateLogout()
})