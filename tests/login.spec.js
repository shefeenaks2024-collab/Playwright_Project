const{test,expect}=require('@playwright/test')
const validdata=require('../testdata/login.json')
const dataset=require('../testdata/invalidlogin.json')
const loginpage = require('../Page/loginpage')

//3.
test('Login with valid credentials',async({page})=>
{

   let loginobj=new loginpage(page)
   await loginobj.accessurl()
   await loginobj.clickOnLogin()
  await loginobj.enterUserName(validdata.username)
   await loginobj.enterPassword(validdata.password)
   const placeorder=await loginobj.clickLoginButton()
    
    await expect(page.getByText('Welcome shefeena')).toBeVisible()

}
)



//4.Verify login with invalid username and valid password
test(`Verify Login with Invalid Username and Valid Password ${dataset[0].username}, ${dataset[0].password}`, async ({ page }) => 
    
{

    let invobj=new loginpage(page)
   await invobj.accessurl()
   await invobj.clickOnLogin()
   await invobj.enterUserName(dataset[0].username)
   await invobj.enterPassword(dataset[0].password)
   
    page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
        await expect(dialog.message()).toContain('User does not exist')
        await dialog.accept()
    })
    
 await invobj.clickLoginButton()
 //await expect(page).toHaveURL('https://www.demoblaze.com/')
})

//5.Verify login with valid username and invalid password
test(`Verify Login with Invalid Username and inValid Password ${dataset[1].username}, ${dataset[1].password}`, async ({ page }) => 
{

    let invobj1=new loginpage(page)
   await invobj1.accessurl()
   await invobj1.clickOnLogin()
   await invobj1.enterUserName(dataset[1].username)
   await invobj1.enterPassword(dataset[1].password)

    

    page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
         await expect(dialog.message()).toContain('Wrong password.')
        await dialog.accept()
    })
    await invobj1.clickLoginButton()
    //await expect(page).toHaveURL('https://www.demoblaze.com/')
})

//6. Verify login with invalid username and invalid password
test(`Login with invalid username and invalid password ${dataset[2].username},${dataset[2].password}`,async({page})=>
{
   let invobj2=new loginpage(page)
   await invobj2.accessurl()
   await invobj2.clickOnLogin()
   await invobj2.enterUserName(dataset[2].username)
   await invobj2.enterPassword(dataset[2].password)
    page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
         await expect(dialog.message()).toContain('User does not exist')
        await dialog.accept()
    })
    
   await invobj2.clickLoginButton()
}
)
