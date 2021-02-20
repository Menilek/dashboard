FROM node:15-alpine as build-stage

RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

COPY package.json /usr/src/frontend/
COPY yarn.lock /usr/src/frontend/
RUN yarn install

COPY . /usr/src/frontend

EXPOSE 3000

CMD ["yarn", "start"]

# RUN yarn run build

# FROM nginx:1.19-alpine

# COPY --from=build-stage /usr/src/frontend/build/ /usr/share/nginx/html

# COPY --from=build-stage /usr/src/frontend/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# docker build --tag frontend .
# docker run --publish 3000:3000 --detach --name ff frontend
# docker stop ff
# docker rm ff
# docker ps