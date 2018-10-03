# MeasurEyes - BackEnd
Bringing A/B testing metrics and methods from the digital world to physical environments

Back-end for https://github.com/claudialigidkis/measureyes

## Installation
- Fork and clone
- `npm install`
- Add your own .env file with a `SECRET` environment variable

## Database Setup
- Make sure you have PostgreSQL
- Create a database on your local called `measureyes_dev`
- `npm run knex migrate:latest`
- `npm run knex seed:run`

## Route Documentation
https://documenter.getpostman.com/view/4516090/RWgm52AB

## ERD
![ERD]([http://i68.tinypic.com/o6mxe9.png)
