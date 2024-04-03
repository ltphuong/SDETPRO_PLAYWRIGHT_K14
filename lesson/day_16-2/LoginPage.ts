export default abstract class LoginPage {
    abstract inputUserName(username: string): void;
    abstract inputPassword(password: string): void;
    abstract clickOnLoginBtn(): void;

    login(username: string, password: string): void {
        this.inputUserName(username);
        this.inputPassword(password);
        this.clickOnLoginBtn();
    }
}