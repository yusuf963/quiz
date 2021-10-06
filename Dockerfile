FROM node:14.16 as builder
COPY . /.
RUN apt-get update && apt-get install -y curl 
CMD [ "npm run serve", "./index.js"]

