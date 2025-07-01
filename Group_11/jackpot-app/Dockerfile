# 1. Use the official Node.js image
FROM node:18-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the project files
COPY . .

# 5. Expose port and start app
EXPOSE 3000

# 6. Use environment variable to determine start command
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then npm run build && npm start; else npm run dev; fi"]
