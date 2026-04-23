import { BasePage } from "./BasePage";




export class CoursePage extends BasePage{
    /**
     *  @param {import("@playwright/test").Page}  page
     */
    constructor(page){
        super(page);
        this.page=page;
        // this.manage=this.page.locator("//*[@class='nav-menu-item-manage']//span");
        this.manage=this.page.getByText("Manage",{exact:true});
        this.manageCourse=this.page.getByAltText("manage course");
        this.addNewCourse = this.page.getByText("Add New Course ");
       this.uploadImage=this.page.locator("//input[@id='thumbnail']");
       this.courseName=this.page.locator("//input[@id='name']");
       this.desc=this.page.locator("//*[@id='description']");
       this.instructor=this.page.locator("//*[@id='instructorNameId']");
       this.price=this.page.locator("//*[@id='price']");
       this.permanent=this.page.locator("//*[@id='isPermanent']");
        this.category=this.page.getByAltText("select category");
        this.categoryItem = this.page.locator("//*[@class='menu-items']//button[text()='Java']")
        this.saveBtn = this.page.getByText("Save");

    }

    async clickOnSaveBtn(){
        await this.saveBtn.click();
    }

    async selectCategory(){
        await this.categoryItem.click();
    }

    async clickOnCategory(){
        await this.category.click();
    }

    async typeCourseName(name){
        await this.courseName.fill(name);
    }

    async typeDescriptionName(name){
        await this.desc.fill(name);
    }

    async typeInstructorName(name){
        await this.instructor.fill(name);
    }

    async typePrice(name){
        await this.price.fill("");
        await this.price.fill(name);
    }

    async checkPermanet(){
        await this.permanent.click();
    }

    async clickOnManageMenu()
    {
        await this.manage.hover();
    }

    async clickOnManageCourses(){
        await this.manageCourse.click();
    }

    async clickOnCreateCourseBtn(){
        await this.addNewCourse.click();
    }

    async uploadFile(filePath){
        await this.uploadImage.setInputFiles(filePath);
    }
}