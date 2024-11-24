FROM node:20-alpine

EXPOSE 80

WORKDIR /home/

ARG TOKEN_PAT_DEPLOY
ARG URL_REPOSITORY

ENV TOKEN_PAT_DEPLOY ${TOKEN_PAT_DEPLOY}
ENV URL_REPOSITORY ${URL_REPOSITORY}

RUN apk update \
    && apk add --no-cache git \
    && git clone "https://${TOKEN_PAT_DEPLOY}@github.com/${URL_REPOSITORY}" portfolio \
    && rm -rf /var/cache/apk/*

WORKDIR /home/portfolio

RUN  npm install \
     && npm run build

CMD ["npm", "start"]