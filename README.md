# NgxImageButton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development

Run `npm run watch` for a build in watch mode. The application will automatically build dist if you change any of the source files.

### Develop and Preview

Build your project, then navigate to **dist/ngx-image-button** and run `npm link` to generate a global symlink for ngx-image-button.

In your other angular project, add the preserveSymlinks tag in angular.json as in the following example.

```json
"projects.<project-name>.architect.build.options.preserveSymlinks": true
```

It is also interesting to add a new path as shown in the following example.

```json
paths: {
   "ngx-image-button/*": [
      "./node_modules/ngx-image-button/*"
   ],
}
```

And yet in that other angular project you must run `npm link ngx-image-button` and `npm run start` to use this lib locally in your project.

After this point, all changes to this lib will be reflected in projects that reference the global symlink.

Sometimes there may be an error in import, so you will need to delete import from ngx-image-button and import again (it looks like some bug in intelisense or angular engine), and then restart the server again with npm run start in the target project .

## Build

Run `npm run build` to build the projects. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
