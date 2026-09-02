const signout = require("./signout")

class placeorderpage{
    constructor(page)
    {
        this.page=page
        
        this.selectproductfield=page.locator('//a[text()="Samsung galaxy s6"]')
        this.selectphonecategoryfield=page.locator('//a[text()="Phones"]')
        this.selectMonitorcategoryfield=page.locator('//a[text()="Monitors"]')
        this.monitorfield=page.locator('//a[text()="Apple monitor 24"]')

        this.addtocartfield=page.locator('//a[text()="Add to cart"]')
        this.cartfield=page.locator('//a[text()="Cart"]')
        this.placeorderfield=page.locator('//button[text()="Place Order"]')
        this.namefield=page.locator('//input[@id="name"]')
        this.countryfield=page.locator('//input[@id="country"]')
        this.cityfield=page.locator('//input[@id="city"]')
        this.zipcodefield=page.locator('//input[@id="card"]')
        this.monthfield=page.locator('//input[@id="month"]')
        this.yearfield=page.locator('//input[@id="year"]')
        this.purchasefield=page.locator('//button[text()="Purchase"]')



    }
     async selectphoneCategory()
    {
    await this.selectphonecategoryfield.click()
    return this
    }
    async selectProduct()
    {
       
        await this.selectproductfield.click()
        return this
    }
   
    async selectMonitorCategory()
    {
         await this.selectMonitorcategoryfield.click()
         return this 
    }
    async selectMonitorProduct()
    {
        await this.monitorfield.click()
    }
    async addToCart()
    {
        await this.addtocartfield.click()
        return this
    }
    async clickCart()
    {
        await this.cartfield.click()
        return this
    }
    async place_Order()
    {
        await this.placeorderfield.click()
        return this
    }
    async enterDetails()
    {
        await this.namefield.fill("shefeena ks")
        await this.countryfield.fill("India")
        await this.cityfield.fill("Cochin")
        await this.zipcodefield.fill('543234')
        await this.monthfield.fill("January")
        await this.yearfield.fill("2026")
        return this
    }
    async clickOnPurchase()
    {
        await this.purchasefield.click()
        return new signout(this.page)
    }


}
module.exports=placeorderpage