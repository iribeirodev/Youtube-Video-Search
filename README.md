# YTSearch
A Node JS REST API for searching videos on Youtube platform.

## Usage
- Clone the project.
- Install the dependencies in the local node_modules folder.
- Execute the following to build it locally
````
$ npm run build
````
- Run it locally
````
$ npm run build:run
````

## API call
`
curl --location --request POST 'http://localhost:5000/ytvideos' \
--header 'Content-Type: application/json' \
--data-raw '{
    "criteria": "Bolsonaro"
}'
`
