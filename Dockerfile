FROM node:18-slim AS builder
WORKDIR /app

RUN npm config set registry https://registry.npmjs.org/ && \
    npm config set fetch-retry-maxtimeout 600000

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-slim
WORKDIR /app

RUN npm config set registry https://registry.npmjs.org/ && \
    npm config set fetch-retry-maxtimeout 600000

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN npm ci --omit=dev

EXPOSE 3000
CMD ["npm", "start"]