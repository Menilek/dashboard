FROM node:15-alpine

RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

COPY package.json /usr/src/frontend/
COPY package-lock.json /usr/src/frontend/
RUN npm install

COPY . /usr/src/frontend

EXPOSE 3000

CMD ["npm", "start"]

# docker build --tag frontend . 
# docker run --publish 3050:3000 --detach --name ff frontend
# docker stop ff
# docker rm ff