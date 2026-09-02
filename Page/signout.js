class signout{
    constructor(page)
    {
        this.page=page
        this.logoutfield=page.locator('#logout2')

    }
    async logout()
    {
        await this.logoutfield.click()
        return this
    }
}
module.exports=signout