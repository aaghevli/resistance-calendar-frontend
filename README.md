# Resistance Calendar

> PRs welcome; seeking all roles

See our [contributing guide](CONTRIBUTING.md) for more information.

*The Resistance Calendar* aims to empower progressive activists by providing a massive central listing of upcoming events. Crowdsourced event submissions are curated by a team of volunteers, while events from allied organizations will be included automatically. Event filters make it easy for people to find events near them. Filtered notifications help people discover new events immediately. 

This is a rebuild of the live website currently found [here](https://www.resistancecalendar.org/).

## About the stack

This repository covers the ReactJS front-end.  Additional parts of the stack can be found on our [organizational page](https://github.com/ResistanceCalendar).

- [API](https://github.com/ResistanceCalendar/resistance-calendar-api)
- [Chrome Plugin](https://github.com/ResistanceCalendar/resistance-calendar-chrome-ext)
- [Facebook Feed](https://github.com/ResistanceCalendar/FacebookFeed)
- [Calendar Watcher](https://github.com/ResistanceCalendar/resistance-cal-watcher)
- [Drupal](https://github.com/ResistanceCalendar/resistance-drupal)

## Getting Started

### Setup

- [Fork the repository](https://help.github.com/articles/fork-a-repo/)
- Clone the project: `git clone git@github.com:ResistanceCalendar/resistance-calendar-frontend.git`
- Change into the directory: `cd resistance-calendar-frontend`

### Install the dependencies

```sh
npm install
```

### Run the test suite

Uses [Jest](https://facebook.github.io/jest/)/[Enzyme](http://airbnb.io/enzyme/)

```sh
npm run test
```

Note: If the following test files are passing, then Jest and Enzyme are working as intended:

- `components\__tests__\TestComponent.js`
- `config\__tests__\testJest.js`

### Run the dev server

```sh
npm run dev
```

This project will run on [http://localhost:3000/](http://localhost:3000/).

## Deploy
Make sure you are Login with [now](zeit.co/now) first

```sh
npm run build && now
```

## Understanding the project

### About the framework

This project utilizes Next.js for server-side rendering.  Additional documentation on Next.js can be found [here](https://zeit.co/blog/next).

>"Next.js gives you a server that extracts the state into an object and then injects the state back in the client. Beyond that it provides a method for 'smart containers', what they call pages that is called getInitialProps which is run both on server and client."

React + Redux works as traditionally expected.

## License

[MIT](LICENSE)
