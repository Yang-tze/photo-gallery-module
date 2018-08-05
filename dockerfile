FROM node:10.7.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --production

EXPOSE 3002

CMD [ "npm", "run", "start" ]
