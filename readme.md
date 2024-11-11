# spiiri challenge - battle of dragons

My solution to the Spiiri tech challenge.

Implemented as React SPA with Fastify backend and a SQLite / Prisma database.

## running solution

To run the solution execute the following instructions in separate terminals

1. `cd database && npm ci && npm run build`
2. `cd server && npm ci && npm start`
3. `cd client && npm ci && npm start`

The solution should now be available at `http://localhost:3000`

## challenge requirements

* user can **select** two (out of several) **dragons**
* selected dragons start at 100 **health**
* user can make selected dragons do **rounds** of battle
* each round makes both dragons loose health, based on other dragons **strength** and a **random** factor
* battle ends when one (or both) dragon is at **zero or below** health
* health loss should be calculated on the backend

### bonus requirements

* fetch and display battle **history**
* calculate and display battle **outcome probability** 

## solution api design

Backend api needs the following endpoints

GET `allDragons` - returns all possible dragons

POST `startBattle` - locks in dragon selection and starts battle

POST `cancelBattle` - discard battle session and unlock dragon selection

POST `fightRound` - calculate and subtract health from each dragon

### bonus endpoints

GET `getBattleHistory` - returns list of completed battles

GET `predictBattle` - calculates and returns battle outcome probability

## tech choices

To rapidly spin up a stack, the following choices are made for tech stack

### frontend 

react, with nextjs and react-query

### backend

fastify

### database

sqlite, with prisma


