const{test,expect}=require('@playwright/test')
const signuppage = require('../Page/signuppage')
//const validdata=require('../testdata/login.json')
const {faker}=require('@faker-js/faker')


test.beforeEach(async({page})=>
{
    await page.goto('https://www.demoblaze.com/')
}
)
//testcase 1-Sign Up -> Enter Data -> Click Sign Up
test('Sign up ',async({page})=>
{
   
    const obj=new signuppage(page)
    //await obj.accessurl()
    await obj.clickSignup()
    const username='user'+Date.now()            //to generate unique username np
    const password='pass'+Date.now()
    console.log(username,password)
    await obj.enterUserName(username)
    await obj.enterPassword(password)
    
    page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
        await dialog.accept()
    })
await obj.clickSignupbutton()
 await expect(page).toHaveURL('https://www.demoblaze.com/')
}
)
// 2. Sign Up -> Enter Data -> Click Close

test('sign up and click close',async({page})=>
{
    const obj1=new signuppage(page)
    await obj1.accessurl()
    await obj1.clickSignup()
    //Genereate random data by faker library

    const username=faker.internet.username()
    const password=faker.internet.password(
        {lenght:10}
    )
    console.log(username,password)

    await obj1.enterUserName(username)
    await obj1.enterPassword(password)
    await obj1.clickClosebutton()

    await expect(page).toHaveURL('https://www.demoblaze.com/')


}
)