exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.username_textbox = page.getByPlaceholder('Email Address')
        this.password_textbox = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Sign in' })
    }
    async gotoLoginPage() {
        await this.page.goto('https://qa-login.p-cis.com/')
    }
    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

    }
}