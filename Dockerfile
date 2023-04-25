FROM node:18-alpine as build

WORKDIR /var/www/html
COPY . /var/www/html
npm install -g npm@9.6.5
RUN npm install
CMD ["npm","start"]
EXPOSE 8080
