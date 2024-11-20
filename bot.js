const puppeteer = require('puppeteer'); // Use the full puppeteer package for local testing
const chromium = require('chrome-aws-lambda');
require('dotenv').config();

// Local function to simulate a serverless environment
const bot = async (req, res) => {
    try {
        // Replace with your actual credentials for testing (use .env in production)
        const email = process.env.USER_EMAIL; // Replace with process.env.EMAIL
        const password = process.env.USER_PASSWORD; // Replace with process.env.PASSWORD

        if (!email || !password) {
            console.error("Missing email or password");
            return res.status(500).json({ error: "Missing email or password" });
        }

        // Launch browser in non-headless mode for visualization
        const browser = await puppeteer.launch({
            headless: true, // Production should be headless
            executablePath: await chromium.executablePath,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
            ],
        });

        console.log('Browser launched');

        const page = await browser.newPage();
        await page.goto('https://www.cars.bg/loginpage.php?ref=https://www.cars.bg/carslist.php?open_menu=1');
        console.log('Navigated to login page');

        // Perform login
        await new Promise(resolve => setTimeout(resolve, 2500));
        await page.waitForSelector('.mdc-tab-scroller__scroll-content')
        await page.waitForSelector('#bottomSheetContainer')
        await page.click(`button#businessTab`);

        await page.waitForSelector('input#usernameLoginForm');

        await page.type('input#usernameLoginForm', email);
        await page.type('input[type="password"]', password);

        await page.waitForSelector('form#loginForm', { visible: true });

        await page.keyboard.press('Enter');

        await page.waitForNavigation();

        await page.goto('https://www.cars.bg/my_carlist.php');

        // Navigate to the car list page
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
        return res ? res.status(200).json({ message: 'Bot executed successfully' }) : console.log('Execution finished');
    } catch (error) {
        console.error('Error occurred:', error);
        return res ? res.status(500).json({ error: 'An error occurred while running the bot' }) : console.log('Execution error');
    }
};
