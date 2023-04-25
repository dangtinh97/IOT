FROM node:16-alpine as build

WORKDIR /var/www/html
COPY . /var/www/html
RUN npm install -g npm@9.6.5
RUN npm install
CMD ["npm","start"]
EXPOSE 8080
