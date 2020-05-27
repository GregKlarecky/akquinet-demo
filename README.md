# AckquinetDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Description

Simple post application that lists posts on a homepage. Clicking a post triggers spinner animation that takes user's attention while data is beeing loaded and finally a redirection to the post's info page. If you're tricky and you put wrong url address you'll be taken to 404 page. In case you want to go back to homepage please click `demo` in the upper left corner.

## Installation

run `npm i`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code organization

App folder structure splits into 8 groups:

`Animations` - Includes angular animations to keep components nit and clean.

`Components` - All small reusable components. Things like post, comment, spinner, author e.t.c.

`interfaces` - All the interfaces covering all potential data that might be used during development process.

`pages` - So called "routing components" or "page-components". Literraly home-page, post-page and 404-page.

`resolvers` - Includes 2 resolvers that requests for data before entering a page. In case 404 error comes from the server they redirect user to 404 page.

`services` - Contains a single service that holds api handling logic.

Furtheremore you may find some styling folder structure inside assets folder:

`_mixins` - Holds 2 mixins. I created them because of work habbit. I expected some style patterns to be reused in case I planned to develop this app further. I had a problem with images styles from CMS wordpress block and so "max-width" mixing came to the world. :)
`_variables` - Holds common style variables

## P.S.

Please don't judge if you spot some small gawky css coming from CMS block. I hope you pay attention only to code structure and good practices.
