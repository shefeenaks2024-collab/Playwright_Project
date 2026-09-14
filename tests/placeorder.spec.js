const { test, expect } = require('@playwright/test')
const validdata = require('../testdata/login.json')
const loginpage = require('../Page/loginpage')
const placeorderpage = require('../Page/placeorderpage')





//7.Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup
test(' Login and add product tocart', async ({ page }) => {
  let logobj = new loginpage(page)
  await logobj.accessurl()
  await logobj.clickOnLogin()
  await logobj.enterUserName(validdata.username)
  await logobj.enterPassword(validdata.password)
  const placeorder = await logobj.clickLoginButton()
  await placeorder.clearcart()
  await placeorder.selectProduct('Samsung galaxy s6')


  page.on('dialog', async dialog => {
    await page.pause()
    console.log(dialog.message())
    await expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
  })
  await placeorder.addToCart()

})
// 8.Login  -> Select a product under Phones-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
test('login and add product from phone  to cart and purchase', async ({ page }) => {

  let logobj1 = new loginpage(page)
  await logobj1.accessurl()
  await logobj1.clickOnLogin()
  await logobj1.enterUserName(validdata.username)
  await logobj1.enterPassword(validdata.password)
  const placeorder = await logobj1.clickLoginButton()
  await placeorder.clearcart()
  await placeorder.selectphoneCategory()
  await placeorder.selectProduct('Nokia lumia 1520')       //select category?

  page.on('dialog', async dialog => {
    await page.pause()
    console.log(dialog.message())
    // await expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
  })
  await placeorder.addToCart()

  await placeorder.clickCart()
  await placeorder.place_Order()
  await placeorder.enterDetails()
  await placeorder.clickOnPurchase()

  await expect(page.getByText('Thank you for your purchase!')).toBeVisible();



}
)
//9.Login with valid credentials -> Select a product under Monitors-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
test('login and add product  from Monitors  to cart and purchase', { timeout: 60000 }, async ({ page }) => {
  let logobj2 = new loginpage(page)
  await logobj2.accessurl()
  await logobj2.clickOnLogin()

  await logobj2.enterUserName(validdata.username)
  await logobj2.enterPassword(validdata.password)

  const placeorder = await logobj2.clickLoginButton()

  await placeorder.clearcart()
  await placeorder.selectMonitorCategory()

  await placeorder.selectProduct('Apple monitor 24')

  page.on('dialog', async dialog => {
    await page.pause()
    console.log(dialog.message())
    // await expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
  })
  await placeorder.addToCart()
  await placeorder.clickCart()
  await placeorder.place_Order()
  await placeorder.enterDetails()
  await placeorder.clickOnPurchase()

  await expect(page.getByText('Thank you for your purchase!')).toBeVisible();



}
)