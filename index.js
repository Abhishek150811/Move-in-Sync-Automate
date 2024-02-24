const puppeteer = require('puppeteer');

// const username = 'abhishek1508'
// const password = 'AbhishekM1508!'
const username = "Mishra1508"
const password = "abhishekM!1"

const websiteURL = 'https://demoqa.com/login'

const login = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 720, height: 1080 });
  await page.goto(websiteURL);

  await page.waitForSelector('#userName');
  await page.type('#userName', username);
  await page.type('#password', password);
  await page.click('#login');
  await page.waitForNavigation();

  const url = page.url();
  if (url === 'https://demoqa.com/profile') {
    console.log('Login Successful');
  } else {
    console.log('Login Failed');
  }

  await browser.close();
}

login();