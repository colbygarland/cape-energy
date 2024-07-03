FROM node:20 AS build
WORKDIR /app
COPY . .
RUN yarn install && yarn generate

FROM joseluisq/static-web-server:2.32.0 AS sws

FROM scratch

COPY --from=sws /static-web-server /
COPY --from=build /app/.output/public/ /public/

EXPOSE 80

STOPSIGNAL SIGQUIT

ENTRYPOINT ["/static-web-server", "-g", "info", "--log-remote-address"]



