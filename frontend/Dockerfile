FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3500
RUN npm run build
CMD ["npm", "run", "start"]