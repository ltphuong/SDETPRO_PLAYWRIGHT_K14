import LoginPage from './LoginPage';

export default class LoginTestFlow {
    private username: string = '';
    private password: string = '';

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    login(loginPage: LoginPage, username: string): void {
        loginPage.login(this.username, this.password)
    }
}