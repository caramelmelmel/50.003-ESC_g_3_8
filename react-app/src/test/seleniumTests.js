const { promisify } = require('util')
const sleep = promisify(setTimeout)

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const routes = [
    "/dashboard-staff",
    "/audits-staff",
    "/tenant-staff",
    "/reports-staff",
    "/see-updates",
    "/resolved-audits",
    "/ongoing-audits",
];

// driver.get("http://localhost:3000");
// for (var i = 0; i < routes.length; i ++) {
//     var link = "http://localhost:3000" + routes[i];
//     console.log(link);
//     driver.navigate().to(link);
//     console.log("Sleeping");
//     sleep(5000).then(() => {
//         //do stuff
//         console.log("Sleep finished");
//       })
// }
for (var i = 0; i < routes.length; i ++) {
    routes[i] = "http://localhost:3000" + routes[i];
}

for (var i = 0; i < routes.length; i++) {
    // var link = "http://localhost:3000" + routes[i];
    driver.navigate().to(routes[i]).then(function(){
        driver.sleep(2000);
    })

    // console.log(routes[i]);
    // driver.navigate().to(routes[i]);
    
    // .then(d => d.get(routes[i]))
    // .then(() => driver.wait(2000))
    // .then(() => driver.quit())
}

    
// driver.get('http://localhost:3000').then(function(){
// driver.findElement(webdriver.By.name('q')).sendKeys('webdriver\n').then(function(){
//     driver.getTitle().then(function(title) {
//       console.log(title)
//       if(title === 'webdriver - Google Search') {
//          console.log('Test passed');
//       } else {
//          console.log('Test failed');
//       }
//      driver.quit();
//     });
//   });
// });