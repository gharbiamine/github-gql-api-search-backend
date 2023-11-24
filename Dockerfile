FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install --frozen-lockfile
COPY . .

ARG BASE_URL
ARG GITHUB_API_KEY

RUN npm run build
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/ .

EXPOSE 3001
CMD ["npm","run", "start"]