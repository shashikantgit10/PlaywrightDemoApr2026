import { afterEach } from "node:test";
import { test, expect } from "../fixtures/fixture.js";
import data from "../testdata/createCourseData.json";

test.describe("All Login Scenarions",()=>{

    test("Login To Application With Valid Credentials",async function ({loginPage, coursePage, page})
    {
        loginPage.goto("https://freelance-learn-automation.vercel.app/login")

        await loginPage.enterEmail("admin@email.com")

        await loginPage.enterPassword("admin@123")

        await loginPage.clickOnLoginButton()

        await loginPage.assertUrlNotContains(/login/)

        await coursePage.clickOnManageMenu();

        await coursePage.clickOnManageCourses();

        await coursePage.clickOnCreateCourseBtn();

        await coursePage.uploadFile(data.thumbnail);

        await coursePage.typeCourseName(`${data.courseName}_${Date.now()}`);

        await coursePage.typeDescriptionName(data.description);

        await coursePage.typeInstructorName(data.instructorName);

        await coursePage.typePrice(data.price);

        // await coursePage.checkPermanet();

        await coursePage.clickOnCategory();

        await coursePage.selectCategory();

        await coursePage.clickOnSaveBtn();


        await page.pause();

    })

})


