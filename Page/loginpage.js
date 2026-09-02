const placeorderpage = require("./placeorderpage")

class loginpage
{
    constructor(page)
    {
        this.page=page
        this.loginfield=page.locator('#login2')
        this.usernamefield=page.locator('#loginusername')
    this.passwordfield=page.locator('#loginpassword')
    this.loginbuttonfield=page.locator('//button[text()="Log in"]')

    }
    async accessurl()
   {
    await this.page.goto('https://www.demoblaze.com/')
   }

   async clickOnLogin()
   {
     await this.loginfield.click()
     return this
   }
   async enterUserName(username)
{
    await this.usernamefield.fill(username)
    return this
}
async enterPassword(password)
{
    await this.passwordfield.fill(password)
    return this
}
async clickLoginButton()
{
    await this.loginbuttonfield.click()
    return new placeorderpage(this.page)
    
}

}
module.exports=loginpage