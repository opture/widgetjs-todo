## A simple [widgetjs](https://github.com/foretagsplatsen/widgetjs) Todo application created as a experiment to familiarize with widgetjs.

### Introduciton
The intention is to create something to familiarize with the library, and to serve as a simple starting point for a project.


## Running the app
``` 
npm i
npm start
``` 

## Structure
The folder structure is as shown below
``` 
- src
 | - documents
   | - [documentWidgetName]
     | - index.js  		//The documentWidget code
	 | - style.less 	//The styling for the component (webpack setup to scope it)
	 | - [any file to support the funtionality of the widget]
 | - less
 | - models
 | - widgets
   | - [widgetFolderByName]
     | - index.js  		//The widget code
	 | - style.less 	//The styling for the component (webpack setup to scope it)
	 | - [any file to support the funtionality of the widget]
```

#### documents
Documents should be considered something that will hold a feature, not necesarily a page-document.
The document should have the main resposnibility to handle the data and also the actions for its childrens. 

#### less
The less folder contains the main application less code.

#### models
This holds the models, models might have a strict connection to a widget, and in that case the model could be kept in the folder of the widget. A model is responsible to take care of the actions that the widget triggers.

#### widgets
Holds the widgets for the applications. Every widgets resides under its own folder and enables you to split the widget into multiple separate files. The emtrypoint has to be index.js though.


