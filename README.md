# docker-nodejs-dns-mongodb

$ docker run -ti --link mongodb:mongodb --link rabbitmq:rabbitmq -e AMQP_URL=amqp://*:*@rabbitmq -e MONGODB_URL=mongodb://mongodb:27017/dns marcelmaatkamp/nodejs-dns-mongodb-viewer

Browse to [http://localhost:1337/](http://localhost:1337/)
