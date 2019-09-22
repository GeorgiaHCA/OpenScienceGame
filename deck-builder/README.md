# OpenScienceGame Deck Builder

This is a small web-app for building a customised deck of the open science game developed as part 2019 eLife Innovation Sprint.


## Get started

Install the dependencies...

```bash
cd deck-builder
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


## Deploying to the web

### With Heroku

Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) if you haven't already.

Login to your Heroku account by running

```
heroku login
```
To create a new app run (if you're already set up skip this step)

```
heruko create
```

To push changes from `my-branch` to the Heroku app run

```
git push heroku my-branch:master

```

To see if it's worked run

```
heroku open
```
For debugging run

```
heroku logs --tail
```

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
