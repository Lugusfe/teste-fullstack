FROM node:16-alpine

WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npx prisma migrate deploy
RUN npm run build
RUN chmod 777 -R /usr/app/dist
RUN chmod 777 -R /usr/app/src
CMD ["npm", "run", "start:prod"]