FROM node:10.14

RUN ls -la

COPY . /code
WORKDIR /code
RUN npm ci
