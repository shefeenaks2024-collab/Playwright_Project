const { test, expect } = require('@playwright/test')
const validdata = require('../testdata/login.json')
const loginpage = require('../Page/loginpage')
const signoutpg = require('../Page/signout')
const signout = require('../Page/signout')




test('login with valid credential and logout', async ({ page }) => {


  let loginobj = new loginpage(page)
  await loginobj.accessurl()
  await loginobj.clickOnLogin()
  await loginobj.enterUserName(validdata.username)
  await loginobj.enterPassword(validdata.password)
  await loginobj.clickLoginButton()
await loginobj.clickLoginButton()
 // let logoutobj = await loginobj.clickLoginButton()

  let logoutobj=new signout(page)
   await logoutobj.logout()

  //await logoutobj.logout()

  await expect(page.locator('#signin2')).toBeVisible()
})