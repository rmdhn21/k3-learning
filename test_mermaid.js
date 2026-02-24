const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Navigate to local server (assumed running on 8089)
    await page.goto('http://localhost:8089');

    // Click chapter 2
    await page.click('div[data-goto="ch2"]');

    // Wait for mermaid to process
    await page.waitForTimeout(1000);

    // Get the contents of the mermaid div
    const svg = await page.evaluate(() => {
        const el = document.querySelector('#ch2 .mermaid');
        return el ? el.innerHTML : 'Not found';
    });

    console.log(svg.substring(0, 500));

    await browser.close();
})();
