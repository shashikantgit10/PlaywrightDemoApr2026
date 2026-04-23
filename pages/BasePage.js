// Common useful method which will be used across all pages mostly playwright method
import {expect} from "@playwright/test"

export class BasePage
{

    /**
     * @param{import("@playwright/test").Page} page
     */

    constructor(page)
    {
        this.page=page
    }

    async refreshApplication()
    {
        await this.page.reload()
    }

    async goBack()
    {
        await this.page.goBack()
    }

    async goForward()
    {
        await this.page.goForward()
    }

    async goto(path)
    {
        await this.page.goto(path)
    }

    getCurrentURL()
    {
        return this.page.url()
    }

    async getCurrentTitle()
    {
        return await this.page.title()
    }

    async assertUrlNotContains(pattern)
    {
        await expect(this.page).not.toHaveURL(pattern)
    }

     async assertUrlContains(pattern)
    {
        await expect(this.page).toHaveURL(pattern)
    }

     /**
     * 
     * @param {import("@playwright/test").Locator} locator 
     * @param {number} timeout 
     */
   
    async waitForVisible(locator,timeout=10000)
    {
        await locator.waitFor({state:"visible",timeout})
    }
}
