import { test } from "../../fixture/base";
import { users } from "../../data/data";

test.beforeEach( async ({registerPage}) => {
    await registerPage.goToRegisterPage()
})

    test("Register success", async({registerPage, loginPage}) => {

        let user = await registerPage.ramdonUser()
        await loginPage.completeDataLogin(
             user,
             users.validUser.password
        )
        await registerPage.confirmatedPasswordOnInput(
            users.validUser.password
        )
        await loginPage.clickToSubmitButton()
        await registerPage.validateRigisterAlert()
    });

    test("Error register", async({registerPage, loginPage}) => {

        await loginPage.completeDataLogin(
             users.dataInvalid.user,
             users.dataInvalid.password
        )
        await registerPage.confirmatedPasswordOnInput(
            users.validUser.password
        )
        await loginPage.clickToSubmitButton()
        await registerPage.validateErrorAlertForUsername()
    });

