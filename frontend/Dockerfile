FROM node:15-alpine as build-stage

RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

ARG BACKEND_BUILD_TIME_URL=menilek.tech
ENV REACT_APP_BACKEND_URL=$BACKEND_BUILD_TIME_URL 

COPY package.json /usr/src/frontend/
COPY yarn.lock /usr/src/frontend/
RUN yarn install

COPY . /usr/src/frontend

# EXPOSE 3000

RUN yarn run build

# CMD ["yarn", "start"]

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