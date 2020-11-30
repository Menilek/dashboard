FROM node:15-alpine as build-stage

RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

ARG BACKEND_BUILD_TIME_URL=0.0.0.0
ENV REACT_APP_BACKEND_URL=$BACKEND_BUILD_TIME_URL 

COPY package.json /usr/src/frontend/
COPY package-lock.json /usr/src/frontend/
RUN npm install

COPY . /usr/src/frontend

# EXPOSE 3000

RUN npm run build

# CMD ["npm", "start"]

FROM nginx:1.19-alpine

COPY --from=build-stage /usr/src/frontend/build/ /usr/share/nginx/html

COPY --from=build-stage /usr/src/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build --tag frontend . 
# docker run --publish 3050:3000 --detach --name ff frontend
# docker stop ff
# docker rm ff