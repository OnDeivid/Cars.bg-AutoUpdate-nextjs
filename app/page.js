const puppeteer = require('puppeteer')

export default function page() {
    autoUpdate()
    return (
        <div>page</div>
    )
}

const autoUpdate = async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });

        const page = await browser.newPage();

        const endpoint = 'https://www.cars.bg/loginpage.php?ref=https://www.cars.bg/carslist.php?open_menu=1';
        await page.goto(endpoint);
        console.log('Navigated to login page');

        // Perform login
        await new Promise(resolve => setTimeout(resolve, 2500));
        await page.waitForSelector('.mdc-tab-scroller__scroll-content')
        await page.waitForSelector('#bottomSheetContainer')
        await page.click(`button#businessTab`);

        await page.waitForSelector('input#usernameLoginForm');

        await page.type('input#usernameLoginForm', 'dimitar7602');
        await page.type('input[type="password"]', '7602111883Dd');

        await page.waitForSelector('form#loginForm', { visible: true });

        await page.keyboard.press('Enter');

        await page.waitForNavigation();

        await page.goto('https://www.cars.bg/my_carlist.php');

        console.log('Navigated to the car list page');

        // Retrieve the length of the car list
        const itemsLength = await page.evaluate(() => {
            const parentContainer = document.querySelector('div.mdc-layout-grid__inner');
            if (!parentContainer) return 0;
            return parentContainer.querySelectorAll('div[data-item]').length;
        });

        console.log(`Found ${itemsLength} items to process`);

        // Process each car item
        for (let i = 1; i <= itemsLength; i++) {
            console.log(`Processing item ${i}`);
            await page.waitForSelector(`div[data-item="${i}"] a.list-offer`);
            await page.click(`div[data-item="${i}"] a.list-offer`);

            await page.waitForSelector('div#edit_button.navbar-middle');
            await page.click('div#edit_button.navbar-middle');

            await page.waitForSelector('a#publishBtn');
            await page.click('a#publishBtn');

            await page.goto('https://www.cars.bg/my_carlist.php');
            console.log(`Item ${i} processed`);
        }

        console.log('All items processed successfully');

        await browser.close();
        console.log('Browser closed');
    } catch (error) {
        console.error('Error occurred:', error);
    }
}
