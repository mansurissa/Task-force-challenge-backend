FROM node:12.18.4

RUN mkdir -p /usr/src/task-force
WORKDIR /usr/src/task-force

COPY package.json /usr/src/task-force

RUN npm install
RUN npm install -g nodemon

COPY . /usr/src/task-force

EXPOSE 3000
EXPOSE 3000

CMD [ "npm", "run", "dev" ]