import LoginPage from  '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page'
import * as assert from 'assert';

describe('Login with correct username and password', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
        MainPage.setWindowSize(1400, 1200);
    });

    it('should login with valid credentials', async () => {
        await MainPage.open();
        await MainPage.openLogin();
        await LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await MainPage.open();

        const headerEmail = await MainPage.getEmail();

        assert.strictEqual(
          headerEmail,
          process.env.LOGIN,
          `Email авторизованного юзера ${headerEmail} не соответствует ожидаемому ${process.env.LOGIN}`,
        );
    });
});
