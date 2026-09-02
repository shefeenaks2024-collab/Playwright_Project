class signuppage
{
   constructor(page)      //Adding constructor
   {
    this.page=page
    //Add global locators
    this.signupfield=page.locator('#signin2')
    this.usernamefield=page.locator('#sign-username')
    this.passwordfield=page.locator('#sign-password')
    this.signupbuttonfield=page.locator('//button[text()="Sign up"]')
    this.closebuttonfield=page.locator('//button[text()="Close"]').nth(1)

   }
   async accessurl()
   {
    await this.page.goto('https://www.demoblaze.com/')
   }

   async clickSignup()
   {
    await this.signupfield.click()
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
async clickSignupbutton()
{
await this.signupbuttonfield.click()
return this
}
async clickClosebutton()
{
    await this.closebuttonfield.click()
    return this 
}

}
module.exports=signuppage