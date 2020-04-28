const selenium = require("selenium-webdriver");
const driver = selenium.Builder().forBrowser("chrome").build();
const url = "https://www.linkedin.com/login";
driver.get(url);