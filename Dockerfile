FROM node:18-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY src/ ./src/
COPY public/ ./public/

RUN npm run build

# served with Nginx, see security note in README.md
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
