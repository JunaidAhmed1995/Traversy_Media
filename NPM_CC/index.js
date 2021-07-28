//* NPM commands
//[npm-v || npm --version] to check the installed node version
//[npm || npm help] to get help
//[npm config set init-author-name "nameOfTheAuthor"] to set the default value of author
//[npm config get init-author-name] to get the default value of author
//[npm config delete init-author-name] to delete the default value of author
//[npm init] to initialize the Package.json file with your own values
//[npm init -y || npm init --yes] to initialize the Package.json file with default values
//[npm install (package-name) --save] to save package as dependencies in Package.json file
//? OR
//[npm install --save (package-name)] to save package as dependencies in Package.json file
//[npm install (package-name) --save-dev] to save package as dev-dependencies in Package.json file
//? OR
//[npm install --save-dev (package-name)] to save package as dev-dependencies in Package.json file
//[npm install] it's install both dependencies && dev-dependencies mentioned in Package.json file
//[npm install --production] it's install only dependencies in Package.json file NOT install dev-dependencies
//[npm uninstall/remove/rm (package-name) --save-dev] to remove/uninstall dev-dependencies in Package.json file
//? OR
//[npm uninstall/remove/rm --save-dev (package-name)] to remove/uninstall dev-dependencies in Package.json file
//[npm uninstall/remove/rm (package-name) --save] to remove/uninstall dependencies in Package.json file
//? OR
//[npm uninstall/remove/rm --save (package-name)] to remove/uninstall dependencies in Package.json file
//[npm install (package-name)@{specified-version} --save || --save-dev] to install the specific version
//[npm update (package-name)] to update the package on latest verion available
// let dependecies: { package-name: "^major-v.minor-v.patch" } i.e ^4.17.3
//(^) when you run [npm install] then packages in Package.json with this(^4.17.3) symbol will update only minor version
//(~) when you run [npm install] then packages in Package.json with this(~4.17.3) symbol will update only Patch version
//(*)when you run [npm install] then packages in Package.json with only this(*) symbol will update to latest version by updating all (major-v + minor-v + patch)
//when you run [npm install] then packages in Package.json without any symbol(4.17.3) will install the exact same version
//[npm install -g (package-name)] to install packages globally on your machine
//[npm root -g] it's give path to find the installed global packages on your machine
//[npm uninstall/remove/rm -g (package-name)] to remove package globally
//[npm list] it list-down all the packages in Package.json file
//[npm list --depth{0, 1, ... n}] it list-down packages in Package.json file according to depth defined
