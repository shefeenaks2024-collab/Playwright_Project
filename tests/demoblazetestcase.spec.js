const{test,expect}=require('@playwright/test')         //import playwright package

test.beforeEach(async({page})=>
{
    await page.goto('https://www.demoblaze.com/')
}
)
//testcase 1-Sign Up -> Enter Data -> Click Sign Up
test('Sign up ',async({page})=>
{
   
    await page.locator('#signin2').click()
    await page.pause()
    await page.locator('#sign-username').fill("shefeenaks")
     await page.pause()
    await page.locator('#sign-password').fill("shefeena1234")
     await page.pause()
   

    page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
        await dialog.accept()
    })
await page.locator('//button[text()="Sign up"]').click()


}
)
// 2. Sign Up -> Enter Data -> Click Close

test('sign up and click close',async({page})=>
{

await page.locator('#signin2').click()
    await page.locator('#sign-username').fill("shefeenaks")
     await page.pause()
    await page.locator('#sign-password').fill("shefeena1234")
     await page.pause()
    await page.locator('//button[text()="Close"]').nth(1).click()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/')


}
)

//3.testcase 3-Login with valid credentials
test('Login with valid credentials',async({page})=>
{

    await page.locator('#login2').click()
     await page.pause()
    await page.locator('#loginusername').fill("shefeena")
     await page.pause()
    await page.locator('#loginpassword').fill("shefeena123")
     await page.pause()
    await page.locator('//button[text()="Log in"]').click()
     await page.pause()
    
    await expect(page.getByText('Welcome shefeena')).toBeVisible()

})

//4.Verify login with invalid username and valid password
test('Login with invalid username and valid password',async({page})=>
{

    await page.locator('#login2').click()
     await page.pause()
    await page.locator('#loginusername').fill("shefe")
     await page.pause()
    await page.locator('#loginpassword').fill("shefeena123")
     await page.pause()
   
    page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
        await expect(dialog.message()).toContain('User does not exist')
        await dialog.accept()
    })
    
 await page.locator('//button[text()="Log in"]').click()
 //await expect(page).toHaveURL('https://www.demoblaze.com/')
})

//5.Verify login with valid username and invalid password
test('Login with valid username and invalid password',async({page})=>
{

    await page.locator('#login2').click()
     await page.pause()
    await page.locator('#loginusername').fill("shefeena")
     await page.pause()
    await page.locator('#loginpassword').fill("shefeena")
     await page.pause()

    page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
         await expect(dialog.message()).toContain('Wrong password.')
        await dialog.accept()
    })
    await page.locator('//button[text()="Log in"]').click()
    //await expect(page).toHaveURL('https://www.demoblaze.com/')
})

//6. Verify login with invalid username and invalid password
test('Login with invalid username and invalid password',async({page})=>
{
 await page.locator('#login2').click()
  await page.pause()
    await page.locator('#loginusername').fill("shefeena32")
     await page.pause()
    await page.locator('#loginpassword').fill("shef09")
     await page.pause()
    page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
         await expect(dialog.message()).toContain('User does not exist')
        await dialog.accept()
    })
    await page.locator('//button[text()="Log in"]').click()
   
}
)
// 7.Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup
test(' Login and add product tocart',async({page})=>
{
    await page.locator('#login2').click()
     await page.pause()
    await page.locator('#loginusername').fill("shefeena")
     await page.pause()
    await page.locator('#loginpassword').fill("shefeena123")
     await page.pause()
    await page.locator('//button[text()="Log in"]').click()
     await page.pause()
     await page.locator('//a[text()="Samsung galaxy s6"]').click()
     await page.pause()
     await page.locator('//a[text()="Add to cart"]').click()
     await page.pause()
     page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
         await expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

})
// 8.Login  -> Select a product under Phones-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
test('login and add product from phone  to cart and purchase',async({page})=>
{
    await page.locator('#login2').click()
     await page.pause()
    await page.locator('#loginusername').fill("shefeena")
     await page.pause()
    await page.locator('#loginpassword').fill("shefeena123")
     await page.pause()
    await page.locator('//button[text()="Log in"]').click()
     await page.pause()

     await page.locator('//a[text()="Phones"]').click()
     await page.pause()
     await page.locator('//a[text()="Samsung galaxy s6"]').click()
     await page.pause()
     await page.locator('//a[text()="Add to cart"]').click()
     await page.pause()
     page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
         await expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
        })

        await page.locator('//a[text()="Cart"]').click()
        await page.locator('//button[text()="Place Order"]').click()
        await page.locator('//input[@id="name"]').fill("shefeena ks")
        await page.locator('//input[@id="country"]').fill("India")
        await page.locator('//input[@id="city"]').fill("Cochin")
        await page.locator('//input[@id="card"]').fill('543234')
        await page.locator('//input[@id="month"]').fill("January")
        await page.locator('//input[@id="year"]').fill("2026")
        await page.locator('//button[text()="Purchase"]').click()
       await expect(page.getByText('Thank you for your purchase!')).toBeVisible();



}
)
//9.Login with valid credentials -> Select a product under Monitors-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
test('login and add product  from Monitors  to cart and purchase',async({page})=>
{
    await page.locator('#login2').click()
     await page.pause()
    await page.locator('#loginusername').fill("shefeena")
     await page.pause()
    await page.locator('#loginpassword').fill("shefeena123")
     await page.pause()
    await page.locator('//button[text()="Log in"]').click()
     await page.pause()
     await page.locator('//a[text()="Monitors"]').click()
     await page.pause()
     await page.locator('//a[text()="Apple monitor 24"]').click()
     await page.pause()
     await page.locator('//a[text()="Add to cart"]').click()
     await page.pause()
     page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
         await expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
        })

        await page.locator('//a[text()="Cart"]').click()
        await page.locator('//button[text()="Place Order"]').click()
        await page.locator('//input[@id="name"]').fill("shefeena ks")
        await page.locator('//input[@id="country"]').fill("India")
        await page.locator('//input[@id="city"]').fill("Cochin")
        await page.locator('//input[@id="card"]').fill('543234')
        await page.locator('//input[@id="month"]').fill("January")
        await page.locator('//input[@id="year"]').fill("2026")
        await page.locator('//button[text()="Purchase"]').click()
       await expect(page.getByText('Thank you for your purchase!')).toBeVisible();



}
)
//10.Login with valid credentials -> Logout
test('login with valid credential and logout',async({page})=>
{
    await page.locator('#login2').click()
     await page.pause()
    await page.locator('#loginusername').fill("shefeena")
     await page.pause()
    await page.locator('#loginpassword').fill("shefeena123")
     await page.pause()
    await page.locator('//button[text()="Log in"]').click()
     await page.pause()
      await expect(page.getByText('Welcome shefeena')).toBeVisible()
     await page.locator('#logout2').click()
     await page.waitForTimeout(3000)
     await expect (page.locator('#signin2')).toBeVisible()
})



test('Verify Product Details',async({page})=>

    {
        await page.locator('#login2').click()
    await page.locator('#loginusername').fill("shefeena")
    await page.locator('#loginpassword').fill("shefeena123")
    await page.locator('//button[text()="Log in"]').click()
        await expect(page.getByText('Welcome shefeena')).toBeVisible()
    await page.locator('//a[text()="Samsung galaxy s6"]').click()
     await expect(page.locator('//h2[text()="Samsung galaxy s6"]')).toBeVisible()
     await expect(page.locator('//h3[text()="$360"]')).toBeVisible()
    await expect(page.locator('p').filter({ hasText: 'The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420' })).toBeVisible()
    
    }
)

test.only('Remove Product From Cart',async({page})=>
{
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill("shefeena")
    await page.locator('#loginpassword').fill("shefeena123")
    await page.locator('//button[text()="Log in"]').click()

    await page.pause()
    await page.locator('//a[text()="Monitors"]').click()
    await page.pause()
    await page.locator('//a[text()="ASUS Full HD"]').click()
    await page.pause()
    
    page.on('dialog',async dialog=>
        {
        await page.pause()
        console.log(dialog.message())
         await expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
        })
    await page.locator('//a[text()="Add to cart"]').click()
    await page.pause()

    await page.locator('//a[text()="Cart"]').click()
    await page.pause()
    await page.locator('//a[text()="Delete"]').click()
}


)