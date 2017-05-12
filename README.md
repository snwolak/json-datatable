# data-table

[Demo](https://snwolak.github.io/data-table/dist/)



# Requirements
* [Babel](http://babeljs.io/)
* [MomentJS](http://momentjs.com/)
* [Materializecss](http://materializecss.com/) However you can modify js files and style table with something else.
* [SASS](https://sass-lang.com/)

# How to use
    
* Import files to your project folder.
* Import Table class from table.js file.
     
```js
import{ Table } from'./table.js';
```

* Create new Table class.
        
```js
new Table(urlToJSONfile, divIdForSearchBar, divIdForTable, divIdForFooter).create();
```
* Modify table styles in table.scss file.
# Setup for this project

    $ npm install
 
    $ npm run dev - development mode
 
    $ npm run build - production
