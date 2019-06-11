import { Component } from '@angular/core';

//decorator for the class
//metadata object for component includes metadata properties:
// selector and template
@Component({
  selector: 'mw-app', //Selects an HTML "app" tag
  //template: `
  //<h1>My App</h1>
  //<p>Keeping track of the media I want to watch.</p>
  //` //Fills innerhtml of target element - inline template example
  //
  templateUrl: 'app/app.component.html', //Fills innerhtml of target element
  /*styles: [`
    h1 { color: #ffffff; }
    .description {
      font-style: italic;
      color: green;
    }
    `, //can enter styles as one string or array of strings
    `
    .description {
      font-weight: bold;
    }
  `],*/
  styleUrls: ['app/app.component.css'] //Array of string paths to CSS files
})
//the class for the component
//export enables import by other components (including the app)
export class AppComponent{}
