// @ts-check
const { test, expect } = require('@playwright/test');

const home_url = "http://localhost:3000/home";


test('Render home page', async ({ page }) => {
    await page.goto(home_url);
    const pageTitle = await page.locator('h1');
    await expect(pageTitle).toContainText("All Meetups");
});

// eslint-disable-next-line jest/valid-title
test('On click add favorite button should render "1" on the navbar fav counter ', async ({page})=> {
    await page.goto(home_url);
    await page.click("#add-favorite");
    const favoriteCheck = await page.locator(".MainNavigation_badge__c8tBe");
    await expect(favoriteCheck).toContainText("1");
})

test('On click add favorite button text should change to remove favorite', async ({page})=> {
    await page.goto(home_url);
    await page.click("#add-favorite");
    const favoriteRemove = await page.locator("#add-favorite").first();
    await expect(favoriteRemove).toContainText("Remove from favorites");
})

test('On click add favorite and click again remove favorites, favorites meetups counter should be equal to 0', async ({page})=> {
    await page.goto(home_url);
    await page.click("#add-favorite");
    await page.click("#add-favorite");
    const favoriteCheck = await page.locator(".MainNavigation_badge__c8tBe");
    await expect(favoriteCheck).toContainText("0");
})