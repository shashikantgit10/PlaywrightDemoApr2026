import {test as base,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js";
import { CoursePage } from "../pages/CoursePage.js";


const test=base.extend({

    loginPage: async ({page}, use) => {

        console.log("Running Fixture For Test");
        
        const loginPage = new LoginPage(page);

        // whatever you write before use will be executed before each test
        await use(loginPage)

        // whatever you write after use will be executed after each test

    },

    loggedInUser: async ({page}, use) => {

        console.log("Running Fixture For Test");
        
        const loginPage = new LoginPage(page);

        loginPage.goto()

        loginPage.enterEmail("admin@gmail.com");

        loginPage.enterPassword("admin@123")

        loginPage.clickOnLoginButton()

        // whatever you write before use will be executed before each test
        await use(loginPage)

        // whatever you write after use will be executed after each test

    },

    coursePage: async ({page}, use) => {

        console.log("Running Fixture For Course page test");
        
        const coursePage = new CoursePage(page);

        // whatever you write before use will be executed before each test
        await use(coursePage)

        // whatever you write after use will be executed after each test

    }


});

export{test,expect}