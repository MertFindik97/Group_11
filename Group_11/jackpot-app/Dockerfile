# 1. Use the official Node.js image
FROM node:18-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the project files
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Expose port and start app
EXPOSE 3000
CMD ["npm", "start"]
