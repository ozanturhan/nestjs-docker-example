FROM node:12.14.0 AS builder
WORKDIR /app

COPY /backend/package.json ./

RUN yarn install

COPY /backend/ ./

RUN yarn build

FROM builder
WORKDIR /app
COPY --from=builder /app ./
