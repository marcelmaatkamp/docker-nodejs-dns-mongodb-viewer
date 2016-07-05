FROM node
MAINTAINER m.maatkamp@gmail.com version: 0.1

# ---
# add libraries
ADD package.json package.json
ADD .sailsrc .sailsrc

RUN npm install -g sails sails-mongo amqp-ts

# ---
# add sources

WORKDIR /data/dnsViewer
COPY dnsViewer /data/dnsViewer

ENTRYPOINT ["sails", "lift"]
