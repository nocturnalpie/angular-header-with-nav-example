# HeaderNav

This is an example of a responsive header and nav bar in an angular app.

Responsive elements:
- The sidebar is changed from side mode to over mode as the screen size gets smaller.
- The header shrinks as the screen size gets smaller.
- The menu button is 48x48px to meet the material design touch target size.

---

## Using this in another project
- Add the `layout.scss` into your project. These can be used elsewhere to keep your padding sizes consistent by importing the file into other scss files.
- Add the whole `navigation` directory to your project
- Import `NavigationComponent` into your `AppModule`
- Reference `ml-navigation` (usually from `app.component.html`).

### Navigation Component Parameters: 
| name  | description |
| ----- | ----------- |
| title | The title to display |


---

## Developing this app

Run `npm install` before you run any other commands.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate component|directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
