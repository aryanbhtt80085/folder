FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000   # ✅ ADD THIS

CMD ["node", "app.js"]
