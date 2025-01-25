FROM node:18-slim
WORKDIR /app

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL:-DATABASE_URL="postgresql://printing_ecommerce_shop_jyce_user:HiyEK2e1mKt8TSamLqVwXY6d8Awgl9vC@dpg-cu9tkfin91rc73ce7tlg-a.oregon-postgres.render.com/printing_ecommerce_shop_jyce"}

RUN apt-get update && \
    apt-get install -y openssl netcat-openbsd curl && \
    rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci

COPY prisma/schema.prisma prisma/
RUN npx prisma generate

# Wait for database and then migrate
# CMD ["sh", "-c", "while ! nc -z db 3306; do sleep 1; done && npx prisma migrate dev && node app.js"]

EXPOSE 5000

CMD ["npm", "run", "dev"]

COPY ./entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]