# e2ejs - Example - Step Custom

## To Get Started

### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
   npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

### Run Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build
```

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```

### HTML Reports

Currently this project has been integrated with [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter), which is generated in the `reports` folder when you run `npm test`.
They can be customized according to user's specific needs.