# Express x Postgres RestAPI CRUD

## Table of Contents
+ [About](#about)
+ [Getting Started](#getting_started)
+ [Usage](#usage)
+ [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>
[Express](https://expressjs.com/en/starter/installing.html) is one of the most popular web frameworks for Node.js that supports routing, middleware, view system… Sequelize is a promise-based Node.js ORM that supports the dialects for PostgreSQL, MySQL, SQL Server… In this tutorial, I will show you step by step to build Node.js Restful CRUD API using Express, Sequelize with PostgreSQL database.

You should install PostgreSQL in your machine first. The installation instructions can be found at Official PostgreSQL installation [manual](https://www.postgresql.org/docs/9.3/tutorial-install.html).

Complete [tutorial](https://bezkoder.com/node-express-sequelize-postgresql/#Nodejs_Rest_CRUD_API_overview)

### API Available
```
/api/tutorials: GET, POST, DELETE
/api/tutorials/:id: GET, PUT, DELETE
/api/tutorials/published: GET
```

## Getting Started <a name = "getting_started"></a>
To starting an run this project, please view one of the following installation guides.

### Prerequisites
- install [nodejs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- install [npm](https://docs.npmjs.com/cli/install)
- isntall [postgresql](https://www.postgresql.org/docs/9.3/tutorial-install.html) 

### Installing

To get started with the app, clone the repo and then install the needed

Clone the repo

```
git clone git@github.com:NaofalMufid/ExpressPostgresApi.git
```

move to project directory

```
cd ExpressPostgresApi
```

install package
```
npm install
```
create database postgres and setting database on config/db.config.js

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

```
node server.js
```
