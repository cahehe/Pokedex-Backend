FROM node:10.16.0
WORKDIR /home/calculator-backend
COPY . .
#In order to use the nodemon command, we need to install it.
RUN npm install -g nodemon 
RUN npm install
ENTRYPOINT [ "nodemon","./src/app.ts" ]
EXPOSE 5000