import { expect, Locator, Page } from "@playwright/test";
import { url } from "../data/data";

export class LoginPage {
     page :  Page
     
     readonly usernameInput : Locator;
     readonly passwordInput : Locator;
     readonly submitButton : Locator;
     readonly loginSuccessText : Locator;
     readonly logoutButton : Locator;
     readonly logoutSuccessText : Locator;

    constructor( page : Page){
        this.page = page;
        this.usernameInput = page.locator(`input[name="username"]`);
        this.passwordInput = page.locator(`input[name="password"]`);
        this.submitButton = page.locator(`button[type="submit"]`);
        this.loginSuccessText = page.getByText('You logged');
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
        this.logoutSuccessText = page.getByText('You logged out of the secure');
    }

    async goToLogin(){
        await this.page.goto(url.login, {waitUntil:"domcontentloaded"})
    }

    async completeDataLogin(user:string,pass:string){
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
    }

    async clickToSubmitButton(){
        await this.submitButton.click();
    }

    async validateLogin(){
        await expect(this.loginSuccessText).toBeVisible()
    }

    async validateLogout(){
        await this.logoutButton.click()
        await expect(this.logoutSuccessText).toBeVisible()
    }
}