FROM node:alpine
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
COPY package.json /app/
RUN mkdir node_modules && chown -R node:node /app/node_modules
USER node
RUN npm i
COPY . .
CMD [ "npm", "start"]