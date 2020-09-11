# Udacity Capstone Front End

This is a Udacity project FrontEnd Nanodegree

## Dendencies

For this project I used a simple system desing called [cssura](https://github.com/claudioacioli/cssura) created for me during the course.

## Setup

To view this project on your local machine please following these instructions:

* Clone this respository:
```bash
git clone https://github.com/claudioacioli/udacity-frontend-capstone
```

* Move to the Repository on your local machine:
```bash
cd udacity-fronten-capstone
```

* Install the requirements:
```bash
npm install
```

* Setup API key

This project use 3 API's:
- [Geonames](http://www.geonames.org) for geolocation.
- [Weatherbit](https://www.weatherbit.io/api) For weather.
- [Pixabay](https://pixabay.com/api/docs/) For images.

For setup that you need create a ```.env``` file in the root folder and then add new environment variables:

```bash
echo API_USERNAME_GEONAMES=you_user_name > .env
echo API_KEY_WETHER_BIT=your_key >> .env
echo API_KEY_PIXABAY=your_key >> .env
```

This is a simple way to do that, but there are a lot of ways, so feel free to do that.

## Running

There are two modes for run this project, following the settings below.

### Development

For running the develpment mode, please following these instructions:

* Start the server:
```bash
npm run start
```

* Start the client:
```bash
npm run build-dev
```

Because we are using the ```webpack-dev-server``` You need these two steps.

### Production

For running the production mode, please following these instructions:

* Make the build:
```bash
npm run build-prod
```

* Start the server:
```bash
npm run start
```


