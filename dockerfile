FROM node:22.12.0-alpine3.21 AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 4000

CMD [ "yarn", "start"]


# Production step with Nginx
FROM nginx:1.27.2-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
