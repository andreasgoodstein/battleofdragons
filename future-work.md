# battle of dragons - future work

A short doc containing the next steps in functionality and refactoring

## functionality

### missing

> do battle (round)

New endpoint, takes battleId as argument. Calculates new damage. Subtracts damage from health. Evaluates if battle is won, draw, or continues. Updates Battle in db. Returns updated Battle response.

>> Damage calculation
>
> Simple bounded random: generate random number (between 1 - dragon strength). *Could lead to very long battles* 
>
> Random + modifier: generate random number (between 1-20), add dragon strength.

> cancel battle

New endpoint, takes battleId as argument. Removes Battle from database (perhaps with soft delete if necessary). Frontend drops Battle from store and resets session.

### optional

> display battle history

Add new endpoint that returns a list of completed battles from the db (consider adding *pagination*). Create frontend component to display list (consider using an *infinite* scrolling list).  

> display new battle outcome probability

>> Simple Simulation (Brute Force)
>
> Use current battle state as starting conditions. Run **n** number of battles to completion (with **n** being sufficiently high; 1.000-100.000). Display outcome percentages.
>
> Disclaimer: Uses *simulated* history and not *real* history. However those should effectively be the same, making the substitution inconsequential. If the battle resolution mechanic were to change in the future, historic data would be more **incorrect** as a predictor.

>> Analytical Probability (Math)
>
> There might be a way of using an analytical formula to calculate the probability in ~O(1) time. However I do not know enough math to do it.
> Probably something in the direction of what is the probability that (d20 + str1) * n >= health2 before (d20 + str2) * n >= health1

> save battleId in frontend session

Frontend could persist the battleId across sessions, and fetch an ongoing Battle from the backend (through a new endpoint) to resolve that.

## refactoring

> frontend component refactoring

Some frontend components could have their props simplified a bit, however this would couple them tightly to the data stores making them inflexible. Tradeoff between flexibility and simplicity/ease-of-use.

> frontend component library

Perhaps using a third party library like `material-ui` or `ant` could simplify some components for the price of more dependencies.

## additional

### comments

Some more code comments could be added, especially to the frontend components and the backend endpoints.

### testing
 
> unit tests 

Write unit test of the most critical parts of the application, primarily the battle logic. Use `jest` and `ts-jest`.

> e2e tests 

Write end-to-end tests of the application using framework such as `playwright` or `cypres`

### visuals

Frontend components should be updated with better styling. Semantic HTML could also be applied more in the DragonStats.tsx component.
