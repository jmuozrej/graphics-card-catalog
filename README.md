Before starting the frontend it is necessary to start the server to be able to make the call to the API (graphic-cards-api)

The development is installed in docker

To create docker image, it is necessary to execute the following command

### `docker build -t graphic-cards-catalog .`

Finally, to run docker image, run the following command

### `docker run -p 3001:3000 graphic-cards-catalog`

To access to this application, search the following address in web browser

### `localhost:3001`