import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'

test('test', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('naicoQAsuper@mailinator.com', 'Password@123')
  // await page.goto('https://opeekab2cqa.b2clogin.com/opeekab2cqa.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1a_signin_signup_frp&response_type=token%20id_token&client_id=1108c96c-8377-4cd6-ae89-9b303f5eab37&state=eFdESEtOd2RiZHFRWGNCWmlJUmlvcENQTFpmMEhkVi1weXhKbXpBTFdreTV6&redirect_uri=https%3A%2F%2Fqa-login.p-cis.com%2F&scope=openid%20profile%20https%3A%2F%2Fopeekab2cqa.onmicrosoft.com%2Fapi%2Fopeeka.read&nonce=eFdESEtOd2RiZHFRWGNCWmlJUmlvcENQTFpmMEhkVi1weXhKbXpBTFdreTV6');
  // await page.getByPlaceholder('Email Address').click();
  // await page.getByPlaceholder('Email Address').fill('naicoQAsuper@mailinator.com');
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill('Password@123');
  // await page.getByRole('button', { name: 'Sign in' }).click();
});