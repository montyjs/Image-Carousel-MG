# REI Product Wrapper

> This a clone of the item page on rei.com. This was built with a team during my time at Hack Reactor. We used a SOA and reverse proxy architecture, test driven development, and agile development practices.

## Related Projects
  #### Services
  - https://github.com/montyjs/checkout-tm-service
  - https://github.com/montyjs/jb-description
  #### Proxy Server
  - https://github.com/montyjs/mg-proxy

## Table of Contents

1. [Demo](#Demo)
1. [Technologies](#Technologies)
1. [Production vs Development](#Production-vs-Development-Mode)
1. [Development Usage](#Development-Usage)
1. [Production Usage](#Production-Usage)
1. [Requirements](#requirements)

## Demo

This component was deployed to AWS using RDS and Elastic Beanstalk. [Check it out here!](http://mg-product-wrapper-dev.us-west-2.elasticbeanstalk.com/)

To check out the full application with my cohort-mates' components, [click here!](http://mg-proxy-dev.us-west-2.elasticbeanstalk.com/). 
  - This was served up with a proxy server. To learn more about the proxy server, checkout the [separate proxy repo](https://github.com/montyjs/mg-proxy)


## Technologies

- JavaScript
- React.js
- Sass
- Node.js
- Express
- PostgreSQL
- Jest
- Enzyme
- AWS Relational Database Service
- AWS Elastic Beanstalk

## Production vs Development Mode
  If you are running this repo locally, you will likely want to run this in development mode. You will need to set the NODE_ENV environmental variable to 'development'. 
      -To do this on in OSX or Linux, run `export NODE_ENV=development` in terminal/bash. 
      - To do this in Windows, run `SET NODE_ENV=development` in command prompt. 
      - **Note**: Development mode is set up to run with a local database.
  If you wish to run this repo in production mode, 
      -To do this on in OSX or Linux, run `export NODE_ENV=production` in terminal/bash. 
      - To do this in Windows, run `SET NODE_ENV=production` in command prompt. 
      - **Note**: Development mode is set up to run with a remote database.


## Development Usage
1. In the root directory, run `npm install` to install all packages.
2. Add a .env file and set it up with the following keys value pairs.
  ```
PORT=3001
LOCAL_USER=<YOUR POSTGRES USERNAME>
LOCAL_PASSWORD=<YOUR POSTGRES PASSWORD>
  ```
3. Seed the local database,
  - in package.json, under the seed script, change <YOUR USERNAME HERE> to... your username!
  - run the the seeding script with `npm run seed`
4. Start webpack
  -run `npm run build:dev`
5. In another terminal, star run `npm start`

## Production Usage
1. In the root directory, run `npm install` to install all packages.
2. Add a .env file and set it up with the following keys value pairs.
  ```
PORT=3001
DB_URI=<YOUR CONNECTION STRING>
  ```
3. Run `npm start` to start the server


## Requirements

- Node ^8.11.0
- PostgreSQL *11.20
