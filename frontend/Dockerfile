FROM node:15-alpine3.10 as build-stage

RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

ARG BACKEND_BUILD_TIME_URL=menilek.tech
# ARG BACKEND_BUILD_TIME_URL=0.0.0.0
ENV REACT_APP_BACKEND_URL=$BACKEND_BUILD_TIME_URL 

COPY package.json /usr/src/frontend/
COPY package-lock.json /usr/src/frontend/
RUN npm install -g npm@latest
RUN npm install --save --legacy-peer-deps
# RUN npm i react react-dom react-scripts -g

COPY . /usr/src/frontend/

# EXPOSE 3000

# CMD ["npm", "start"]

RUN npm run build

FROM nginx:1.19-alpine

COPY --from=build-stage /usr/src/frontend/build/ /usr/share/nginx/html

COPY --from=build-stage /usr/src/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build --tag frontend .
# docker run --publish 80:80 --detach --name ff frontend
# docker stop ff
# docker rm ff
# docker ps