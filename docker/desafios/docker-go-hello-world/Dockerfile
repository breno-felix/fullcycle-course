FROM golang:1.21.0-alpine AS build

WORKDIR /app

COPY . .

RUN go build -o server

FROM scratch

COPY --from=build /app/server ./server

ENTRYPOINT ["./server"]