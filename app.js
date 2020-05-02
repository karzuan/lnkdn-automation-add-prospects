const selenium = require("selenium-webdriver");
//const driver = new selenium.Builder().forBrowser("chrome").build();


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

// show list of options
console.log ('( 1 ) - Log In\n( 2 ) - Check the list\n( 3 ) - Specify a message\n( 4 ) - Launch a cycle\n( 5 ) - Report\n( 6 ) - Exit');
// 
//const query = process.argv.slice(2).join(' ');

switch (process.argv.slice(2).join(' ')) {
    case '1':
      console.log('Log In.');
      break;
    case '2':
      console.log('Check the list.');
      break;
    case '3':
      console.log('Specify a message.');
      break;
    case '4':
      console.log('Launch a cycle.');
      break;
    case '5':
      console.log('Report.');
      break;
    case '6':
      console.log('Exit.');
      break;
    default:
      console.log('Sorry, the ' + expr + ' is not the appropriate argument.');
  }
  
  console.log("Is there anything else you'd like?");
