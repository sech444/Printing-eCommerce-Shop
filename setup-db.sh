#!/bin/bash

echo "Setting up local PostgreSQL database for Printing eCommerce Shop..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Error: Docker is not running. Please start Docker and try again."
    exit 1
fi

# Start PostgreSQL container
echo "Starting PostgreSQL container..."
docker-compose up -d postgres

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
sleep 10

# Check if PostgreSQL is ready
until docker exec printing_ecommerce_postgres pg_isready -U postgres; do
    echo "Waiting for PostgreSQL to be ready..."
    sleep 2
done

echo "PostgreSQL is ready!"

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

# Run database migrations
echo "Running database migrations..."
npx prisma migrate dev --name init

echo "Database setup complete!"
echo "You can now run 'npm run dev' to start your application."
echo ""
echo "To stop the database: docker-compose down"
echo "To view database: npx prisma studio"