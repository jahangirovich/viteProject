FROM node:lts-alpine AS BUILD_IMAGE

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# install dependencies
RUN yarn --frozen-lockfile

COPY . .

# build application
RUN yarn build

# remove development dependencies
RUN npm prune --production

FROM node:lts-alpine
# устанавливаем простой HTTP-сервер для статики
RUN npm install -g http-server

WORKDIR /usr/src/app

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/dist ./dist
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules

EXPOSE 8080

CMD [ "http-server", "dist" ]
