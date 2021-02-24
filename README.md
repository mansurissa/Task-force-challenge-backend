# Task Force backend challenge

> This Repo is for Awesomity Lab's task force backend challenge. It is a todo app where a user can create, get all, get one, delete and update todo item, He can register and sign in before accessing todos related endpoints

## Technologies used

- Node js (express)
  - bcrypt
  - jwt
- Mongo Db

  - mongoose as ORM

- markdown for README.md file

---

## How to test it manually

To test this do the following:

1. Clone this repo
1. Move to the directly to the folder it is in
1. do _`npm install`_ to install to install all packeges
1. create _`.env`_ file and put in all environment variables as in _`.env.example`_ file
1. do _`npm run dev`_ to start a server
1. use http clients like Postman to test all endpoints

### To test todos related end points

- goto your host eg: `http://localhost:3000`
- move to `api/users/register`
- use name, email and password to register and
- goto `api/users/signin`and use the same email and password to signin
- after signing in you get a token and use it before accessing todos end points cause they are protected

#### eg:

in Postman: goto headers and add `auth` to equal `Bearer ** token(the one you get after signin **`

# Tests

1. Clone this repo
1. Move to the directly to the folder it is in
1. do _`npm install`_ to install to install all packeges
1. create _`.env`_ file and put in all environment variables as in _`.env.example`_ file
1. do _`npm test`_ to ru alll tests
1. do _`npm run coverage`_ to ru alll tests and check coverage
