# AckquinetDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code organization

App folder structure splits into 8 groups:

`Animations` - Includes angular animations to keep components nit and clean.

`Components` - All small reusable components. Things like post, comment, spinner, author e.t.c.

`interfaces` - All the interfaces covering all potential data that might be used during development process.

`pages` - So called "routing components" or "page-components". Literraly home-page, post-page and 404-page.

`resolvers` - Includes 2 resolvers that requests for data before entering a page. In case 404 error comes from the server they redirect user to 404 page.

`services` - Contains single service that holds api handling logic.

Furtheremore you may find some styling folder structure inside assets folder:

`_mixins` - Holds 2 mixins. I created them because of work habbit. I expected to you such feature i case I planned to develop this app in the future. I had a problem with images styles from CMS wordpress block and so "max-width" mixing came to the world. :)
`_variables` - Holds common style variables
