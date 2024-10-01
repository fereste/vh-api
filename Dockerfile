FROM node:20

WORKDIR /app
COPY . .

# Install dependencies
RUN npm install

# Expose the port on which the API will run
EXPOSE 3000

# Start the API server
CMD ["node", "index.js"]
