import { afterEach } from "node:test";
import { test,expect } from "../fixtures/fixture.js";

test.describe("All Login Scenarions",()=>{

    test("Login To Application With Valid Credentials",async function ({loginPage})
    {
        loginPage.goto("https://freelance-learn-automation.vercel.app/login")

        await loginPage.enterEmail("admin@email.com")

        await loginPage.enterPassword("admin@123")

        await loginPage.clickOnLoginButton()

        await loginPage.assertUrlNotContains(/login/)

    })

})


