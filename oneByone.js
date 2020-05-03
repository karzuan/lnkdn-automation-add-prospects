const selenium = require("selenium-webdriver");
const By = selenium.By;
const driver = new selenium.Builder().forBrowser("chrome").build();

const leads = [
    'https://www.linkedin.com/in/alex-slonimski-71692a147/',
    'https://www.linkedin.com/in/fblin/',
    'https://www.linkedin.com/in/zavodenko/',
    'https://www.linkedin.com/in/nicholasmalcolm1/',
    'https://www.linkedin.com/in/glebich/',
    'https://www.linkedin.com/in/thekonst/',
    'https://www.linkedin.com/in/mikaeldia/'
];

const url = leads[0];
driver.get(url);