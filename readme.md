# spiiri challenge - battle of dragons

My solution to the Spiiri tech challenge.

Implemented as React SPA with Fastify backend and a SQLite / Prisma database.

## running solution

To run the solution execute the following instructions in separate terminals

1. `cd database && npm ci && npm run build`
2. `cd server && npm ci && npm start`
3. `cd client && npm ci && npm start`

The solution should now be available at `http://localhost:3000`

## status

I ran out of time after implementing the `startBattle` endpoint. However the full stack up until that points is working as intended.

I also would have liked to add some tests, primarily around the battle logic. Probably using `jest` and `ts-jest`. And at the very end, some e2e testing using `playwright`.

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

// TODO: Not finished

POST `cancelBattle` - discard battle session and unlock dragon selection

// TODO: Not finished

POST `fightRound` - calculate and subtract health from each dragon

### bonus endpoints

// TODO: Not finished

GET `getBattleHistory` - returns list of completed battles

// TODO: Not finished

GET `predictBattle` - calculates and returns battle outcome probability

## tech choices

To rapidly spin up a stack, the following choices are made for tech stack

### frontend 

react, with nextjs and react-query

### backend

fastify

### database

sqlite, with prisma
