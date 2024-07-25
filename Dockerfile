FROM node:22 AS build
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM gcr.io/distroless/nodejs22-debian12
COPY --from=build /app/.output/ /app/
EXPOSE 3000
CMD ["/app/server/index.mjs"]



