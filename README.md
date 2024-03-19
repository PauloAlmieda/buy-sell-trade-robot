## Dev Environment  ##

## run
The command "npm run dev" start dev enviroment using nodemon to 
listen files changes and restart server

## husky eslint
will be necessary run "npx husky init" in your dev enviroment to init 
husky hooks. 
its hooks will run pre-commit in all commit operations. This pre-commit operation 
will analyze all changes in your commit and it will return an error if some change 
break away from the norm established in eslint configuration

## test with jest
to run test run "npm run test" 
this comand will be run within pre-commit from husky hook
this way, ensure that an specified test run in all commit operation too



### What is this repository for? ###

This repository where is the axio test, an application that is an API REST
built in nodejs with typescript using express framework to manage requests.

currenctly this API have 2 endpoints:
  api/v1/buy-bitcoin  -> to buy bitcoin
  
  api/v1/sell-bitcoin  -> to sell bitcoin

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###
  ## in moment I building the docker compose to this app so shortly will be necessary only docker compose installed in system 
  
The application use enviroment variables to operation so use the .env.example how template to fill your .env file

For this application run correctly, will be necessary nodejs installed in your system

Test application using insomnia in POST method
 "http://localhost:3000/api/v1/buy-bitcoin"  when run "npm run dev" the application will run in PORT 3000 so this the path but may be "http://0.0.0.0:3000/api/v1/buy-bitcoin  too
 
 
 "http://localhost:3000/api/v1/sell-bitcoin"  when run "npm run dev" the application will run in PORT 3000 so this the path but may be "http://0.0.0.0:3000/api/v1/sell-bitcoin  too
 
The payload to make request :
-> herders request: Content-Type: "application/json"
-> body params: "quantity" is an required param, its mean the quantity for sell or buy
-> body params: "type" is an required param, its mean type transaction
-> body params: "symbol" is an required param, its mean coin simbol


### Contribution guidelines ###
Thanks for the binance Doc
 -->  https://testnet.binance.vision/

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact