import { expect, Locator, Page } from "@playwright/test";
import { url } from "../data/data";


export class RegisterPage{

    page : Page
    readonly confirmatedPasswordInput : Locator;
    readonly sucessfullyRegisterText : Locator;
    readonly errorUsernameText : Locator;

    constructor(page : Page){
        this.page = page
        this.confirmatedPasswordInput = page.locator(`input[name="confirmPassword"]`);
        this.sucessfullyRegisterText = page.getByText('Successfully registered, you');
        this.errorUsernameText = page.getByText('Invalid username. Usernames')
    }

    async goToRegisterPage(){
        await this.page.goto(url.register, {waitUntil:"domcontentloaded"})
    }

    async ramdonUser (){
        const letter = "abcdefghijklmnñopqrstuvwxyz";
        let user = "";
        
        for( let i = 0 ; i < 10; i++){
            user += letter.charAt(Math.floor(Math.random() * letter.length))
        }
        console.log(`user is: ${user}`)
        return user
    }
    
    async confirmatedPasswordOnInput(pass : string){
        await this.confirmatedPasswordInput.fill(pass)
    }

    async validateRigisterAlert(){
        await expect(this.sucessfullyRegisterText).toBeVisible()
    }

    async validateErrorAlertForUsername(){
        await expect(this.errorUsernameText).toBeVisible()
    }

}