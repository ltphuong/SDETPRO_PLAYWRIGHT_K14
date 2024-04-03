import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage {
    private readonly USERNAME_SEL = '';
    private readonly PASSWORD_SEL = '';
    private readonly LOGIN_BTN = '';

    inputUserName(username: string): void {
        console.log(`Interacting with locator ${this.USERNAME_SEL}`);
    }

    inputPassword(password: string): void {
        console.log(`Interacting with locator ${this.PASSWORD_SEL}`);
    }

    clickOnLoginBtn(): void {
        console.log(`Interacting with locator ${this.LOGIN_BTN}`);
    }
}