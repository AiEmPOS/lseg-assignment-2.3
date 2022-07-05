const puppeteer = require("puppeteer");

const argument = process.argv.slice(2)[0];
const url = "https://codequiz.azurewebsites.net/";

async function scrape(input) {
    input = input.toLowerCase();
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();

    await page.goto(url);
    await page.click("input[type=button]");
    const tableHandle = await page.waitForSelector("table")
    const tableHtml = await page.evaluate((element) => element.innerText, tableHandle);
    
    browser.close();

    const token = tableHtml.split(/\s/);
    if(input === "B-INCOMESSF".toLocaleLowerCase()){
        console.log(token[7]);
    }else if(input === "BM70SSF".toLocaleLowerCase()){
        console.log(token[12]);
    }else if(input === "BEQSSF".toLocaleLowerCase()){
        console.log(token[17]);
    }else if(input === "B-FUTURESSF".toLocaleLowerCase()){
        console.log(token[22]);
    }
}
scrape(argument);
