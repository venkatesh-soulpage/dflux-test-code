const { webkit } = require("playwright");

(async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Log and continue all network requests
  page.route("**", (route) => {
    console.log(route.request().url());
    route.continue();
  });

  await page.goto("https://dflux-next.vercel.app/");
  const title = await page.title();
  console.log("The title is: " + title);
  await browser.close();
})();

async () => {
  await page.goto("https://dflux-next.vercel.app/");
  const title = await page.title();
  console.log("The title is: " + title);
  const uname = await page.$((xpath = '//input[@name="email"]'));
  await uname.type("sunitha.dayala@soulpageit.com");
  const pwd = await page.$((xpath = '//input[@name="password"]'));
  await pwd.type("Suni@123");
  //await jestPlaywright.debug()
  const login = await page.$((xpath = '//button/span[text()="Login"]'));
  await login.click();
  await page.waitForTimeout(8000);
};
