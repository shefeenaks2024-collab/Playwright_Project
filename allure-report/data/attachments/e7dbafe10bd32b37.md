# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: placeorder.spec.js >> login and add product  from Monitors  to cart and purchase
- Location: tests\placeorder.spec.js:66:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - text:             
  - navigation [ref=f1e2]:
    - link "PRODUCT STORE" [ref=f1e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=f1e6]:
      - listitem [ref=f1e7]:
        - link "Home (current)" [ref=f1e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=f1e9]: (current)
      - listitem [ref=f1e10]:
        - link "Contact" [ref=f1e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e12]:
        - link "About us" [ref=f1e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e14]:
        - link "Cart" [ref=f1e15] [cursor=pointer]:
          - /url: cart.html
      - listitem
      - listitem [ref=f1e16]:
        - link "Log out" [ref=f1e17] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e18]:
        - link "Welcome shefeena" [ref=f1e19] [cursor=pointer]:
          - /url: "#"
      - listitem
    - generic [ref=f1e21]:
      - list [ref=f1e22]:
        - listitem [ref=f1e23] [cursor=pointer]
        - listitem [ref=f1e24] [cursor=pointer]
        - listitem [ref=f1e25] [cursor=pointer]
      - img "Third slide" [ref=f1e28]
      - button "Previous" [ref=f1e29] [cursor=pointer]
      - button "Next" [ref=f1e32] [cursor=pointer]
  - generic [ref=f1e36]:
    - generic [ref=f1e38]:
      - link "CATEGORIES" [ref=f1e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=f1e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=f1e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [active] [ref=f1e42] [cursor=pointer]:
        - /url: "#"
    - generic [ref=f1e43]:
      - generic [ref=f1e44]:
        - generic [ref=f1e46]:
          - link [ref=f1e47] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=f1e48]:
            - heading [level=4] [ref=f1e49]:
              - link "Samsung galaxy s6" [ref=f1e50] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=f1e51]
            - paragraph [ref=f1e52]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=f1e54]:
          - link [ref=f1e55] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=f1e56]:
            - heading [level=4] [ref=f1e57]:
              - link "Nokia lumia 1520" [ref=f1e58] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=f1e59]
            - paragraph [ref=f1e60]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=f1e62]:
          - link [ref=f1e63] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=f1e64]:
            - heading [level=4] [ref=f1e65]:
              - link "Nexus 6" [ref=f1e66] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=f1e67]
            - paragraph [ref=f1e68]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=f1e70]:
          - link [ref=f1e71] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=f1e72]:
            - heading [level=4] [ref=f1e73]:
              - link "Samsung galaxy s7" [ref=f1e74] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=f1e75]
            - paragraph [ref=f1e76]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=f1e78]:
          - link [ref=f1e79] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=f1e80]:
            - heading [level=4] [ref=f1e81]:
              - link "Iphone 6 32gb" [ref=f1e82] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=f1e83]
            - paragraph [ref=f1e84]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=f1e86]:
          - link [ref=f1e87] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=f1e88]:
            - heading [level=4] [ref=f1e89]:
              - link "Sony xperia z5" [ref=f1e90] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=f1e91]
            - paragraph [ref=f1e92]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=f1e94]:
          - link [ref=f1e95] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=f1e96]:
            - heading [level=4] [ref=f1e97]:
              - link "HTC One M9" [ref=f1e98] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=f1e99]
            - paragraph [ref=f1e100]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=f1e102]:
          - link [ref=f1e103] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=f1e104]:
            - heading [level=4] [ref=f1e105]:
              - link "Sony vaio i5" [ref=f1e106] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=f1e107]
            - paragraph [ref=f1e108]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=f1e110]:
          - link [ref=f1e111] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=f1e112]:
            - heading [level=4] [ref=f1e113]:
              - link "Sony vaio i7" [ref=f1e114] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=f1e115]
            - paragraph [ref=f1e116]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=f1e118]:
        - listitem [ref=f1e119]:
          - button "Previous" [ref=f1e120]
        - listitem [ref=f1e121]:
          - button "Next" [ref=f1e122] [cursor=pointer]
  - generic [ref=f1e124]:
    - generic [ref=f1e127]:
      - heading "About Us" [level=4] [ref=f1e128]
      - paragraph [ref=f1e129]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f1e132]:
      - heading "Get in Touch" [level=4] [ref=f1e133]
      - paragraph [ref=f1e134]: "Address: 2390 El Camino Real"
      - paragraph [ref=f1e135]: "Phone: +440 123456"
      - paragraph [ref=f1e136]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f1e140]
  - contentinfo [ref=f1e142]:
    - paragraph [ref=f1e143]: Copyright © Product Store
```

# Test source

```ts
  1  | const{test,expect}=require('@playwright/test')
  2  | const validdata=require('../testdata/login.json')
  3  | const loginpage = require('../Page/loginpage')
  4  | const placeorderpage=require('../Page/placeorderpage')
  5  | 
  6  | 
  7  | 
  8  | 
  9  | 
  10 | //7.Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup
  11 | test(' Login and add product tocart',async({page})=>
  12 | {
  13 |     let logobj=new loginpage(page)
  14 |    await logobj.accessurl()
  15 |    await logobj.clickOnLogin()
  16 |   await logobj.enterUserName(validdata.username)
  17 |    await logobj.enterPassword(validdata.password)
  18 |    const placeorder=await logobj.clickLoginButton()
  19 |    await placeorder.selectProduct('Samsung galaxy s6')
  20 | 
  21 |      
  22 |      page.on('dialog',async dialog=>
  23 |         {
  24 |         await page.pause()
  25 |         console.log(dialog.message())
  26 |          await expect(dialog.message()).toContain('Product added.')
  27 |         await dialog.accept()
  28 |     })
  29 |     await placeorder.addToCart()
  30 | 
  31 | })
  32 | // 8.Login  -> Select a product under Phones-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
  33 | test('login and add product from phone  to cart and purchase',async({page})=>
  34 | {
  35 | 
  36 |     let logobj1=new loginpage(page)
  37 |    await logobj1.accessurl()
  38 |    await logobj1.clickOnLogin()
  39 |   await logobj1.enterUserName(validdata.username)
  40 |    await logobj1.enterPassword(validdata.password)
  41 |    const placeorder=await logobj1.clickLoginButton()
  42 |    await placeorder.selectphoneCategory()
  43 |    await placeorder.selectProduct('Nokia lumia 1520')       //select category?
  44 | 
  45 |     page.on('dialog',async dialog=>
  46 |         {
  47 |         await page.pause()
  48 |         console.log(dialog.message())
  49 |         // await expect(dialog.message()).toContain('Product added.')
  50 |         await dialog.accept()
  51 |         })
  52 |    await placeorder.addToCart()
  53 | 
  54 |   await placeorder.clickCart()
  55 |    await placeorder.place_Order()
  56 |    await placeorder.enterDetails()
  57 |    await placeorder.clickOnPurchase()
  58 | 
  59 |   await expect(page.getByText('Thank you for your purchase!')).toBeVisible();
  60 | 
  61 | 
  62 | 
  63 | }
  64 | )
  65 | //9.Login with valid credentials -> Select a product under Monitors-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
  66 | test.only('login and add product  from Monitors  to cart and purchase',async({page})=>
  67 | {
  68 |     let logobj2=new loginpage(page)
  69 |    await logobj2.accessurl()
  70 |    await logobj2.clickOnLogin()
  71 |   await logobj2.enterUserName(validdata.username)
  72 |    await logobj2.enterPassword(validdata.password)
  73 |    const placeorder=await logobj2.clickLoginButton()
  74 |    await placeorder.selectMonitorCategory()
> 75 |    await page.waitForTimeout(30000)
     |               ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  76 |    await placeorder.selectProduct('Apple monitor 24')
  77 |    
  78 |      page.on('dialog',async dialog=>
  79 |         {
  80 |         await page.pause()
  81 |         console.log(dialog.message())
  82 |         // await expect(dialog.message()).toContain('Product added.')
  83 |         await dialog.accept()
  84 |         })
  85 |         await placeorder.addToCart()
  86 |         await placeorder.clickCart()
  87 |         await placeorder.place_Order()
  88 |         await placeorder.enterDetails()
  89 |         await placeorder.clickOnPurchase()
  90 | 
  91 |        await expect(page.getByText('Thank you for your purchase!')).toBeVisible();
  92 | 
  93 | 
  94 | 
  95 | }
  96 | )
```