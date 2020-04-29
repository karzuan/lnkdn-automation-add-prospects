const selenium = require("selenium-webdriver");
//const driver = new selenium.Builder().forBrowser("chrome").build();
const prompts = require('prompts');
const questions = require('./questions');


/*
const url = "https://www.linkedin.com/login";
driver.get(url);
const By = selenium.By;
const userName = driver.findElement(By.xpath("/html/body/div/main/div/form/div/input"));
userName.sendKeys("username");
const passWord = driver.findElement(By.xpath("//*[@id='password']"));
passWord.sendKeys("12345");
const loginButton = driver.findElement(By.xpath('//*[@id="app__container"]/main/div[2]/form/div[3]/button'));
loginButton.click();
*/

  (async () => {
    const response = await prompts(questions);
   
    // => response => { username, age, about }
    //console.log('your login is ' + response.username + " and pssw is " + response.password );
  })();