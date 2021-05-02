FROM node:15-alpine3.10 as build-stage

RUN mkdir -p /usr/src/amharic
WORKDIR /usr/src/amharic

COPY package.json /usr/src/amharic/
COPY package-lock.json /usr/src/amharic/
RUN npm install -g npm@latest
RUN npm install --save --legacy-peer-deps
# RUN npm i react react-dom react-scripts -g

COPY . /usr/src/amharic/

EXPOSE 3001

CMD ["npm", "start"]