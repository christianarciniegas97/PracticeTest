import { test as base } from '@playwright/test'
import { LoginPage } from './pages/loginPage.ts'
import { RegisterPage } from './pages/registerPage.ts'

type Fixtures = {
  loginPage: LoginPage,
  registerPage : RegisterPage
}

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
  registerPage: async({page}, use ) => {
    await use( new RegisterPage(page))
  }
})

export { expect } from '@playwright/test';

