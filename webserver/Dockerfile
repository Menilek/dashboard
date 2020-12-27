FROM nginx:1.19-alpine

WORKDIR /usr/src/nginx

COPY /usr/src/frontend/build/ /usr/share/nginx/html

COPY /usr/src/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]