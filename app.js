const selenium = require("selenium-webdriver");
const By = selenium.By;


const driver = new selenium.Builder().forBrowser("chrome").build();



const url = "https://www.linkedin.com/login";
driver.get(url);
const userName = driver.findElement(By.xpath("/html/body/div/main/div/form/div/input"));
userName.sendKeys("kutskonstantin@yandex.com");
const passWord = driver.findElement(By.xpath("//*[@id='password']"));
passWord.sendKeys("gQD-Jx3-sk5-gMN");
driver.findElement(By.css('button')).submit();


//const query = process.argv.slice(2).join(' ');

// getting the name from title:
//let title = driver.getTitle();
//let leadName = title.value_.substring(0, title.value_.length - 11); // from title 'Lisa Barnett | Linkedin' cutting off " | Linkedin"


const locators = {
    //leadByTitle: By.xpath(`//button[@aria-label="Connect with ${leadName}"]`),
    leadConnect: By.css('div#profile-content button'),
    addText: By.css('textarea'),
    sendInvite: By.xpath(`//button[@aria-label="Send invitation"]`),
    //closeAddWindow: By.id('artdeco-modal-outlet').findElement(By.css('button')).click()

}

//driver.findElement(By.xpath(`//button[@aria-label="Connect with ${leadName}"]`)).click(); // spot aria-label with the name
//driver.findElement(By.css('textarea')).sendKeys('Hello, Im Konstantin from Pinion Software. We provide outsourcing services on wide range of technologies, lets be in touch!'); // fill the textarea under Connect
//driver.findElement(By.xpath(`//button[@aria-label="Send invitation"]`)).click();

const leads = [
    'https://www.linkedin.com/in/alex-slonimski-71692a147/',
    'https://www.linkedin.com/in/fblin/',
    'https://www.linkedin.com/in/zavodenko/',
    'https://www.linkedin.com/in/glebich/',
    'https://www.linkedin.com/in/thekonst/',
    'https://www.linkedin.com/in/mikaeldia/'
];

leads.forEach(element => {
    driver.get(element);
    driver.findElement(locators.leadConnect).click();
    driver.findElement(By.css('textarea')).sendKeys('Hello, Im Konstantin from Pinion Software. We provide outsourcing services on wide range of technologies, lets be in touch!');
    driver.findElement(By.id('artdeco-modal-outlet')).findElement(By.css('button')).click();

});