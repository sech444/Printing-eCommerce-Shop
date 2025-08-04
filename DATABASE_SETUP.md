# Database Setup Guide

## Problem Fixed
The original error occurred because the application was trying to connect to a remote database at `db.prisma.io:5432` which was unreachable. This has been fixed by setting up a local PostgreSQL database for development.

## Quick Setup

### Option 1: Automated Setup (Recommended)
Run the setup script:
```bash
./setup-db.sh
```

### Option 2: Manual Setup

1. **Start PostgreSQL with Docker:**
   ```bash
   docker-compose up -d postgres
   ```

2. **Wait for PostgreSQL to be ready:**
   ```bash
   # Check if PostgreSQL is ready
   docker exec printing_ecommerce_postgres pg_isready -U postgres
   ```

3. **Generate Prisma client:**
   ```bash
   npx prisma generate
   ```

4. **Run database migrations:**
   ```bash
   npx prisma migrate dev --name init
   ```

## Database Configuration

The application now uses a local PostgreSQL database with these settings:
- **Host:** localhost
- **Port:** 5432
- **Database:** printing_ecommerce_db
- **Username:** postgres
- **Password:** password

## Useful Commands

- **Start database:** `docker-compose up -d postgres`
- **Stop database:** `docker-compose down`
- **View database:** `npx prisma studio`
- **Reset database:** `npx prisma migrate reset`
- **Check database status:** `docker exec printing_ecommerce_postgres pg_isready -U postgres`

## Environment Files Updated

Both `.env` and `server/.env` files have been updated to use the local database. The remote database URLs are commented out for reference.

## Switching Back to Remote Database

If you need to use the remote database again, uncomment the remote URLs in the `.env` files and comment out the local database URL.

## Troubleshooting
Not using docker but I'm using vercel database
1. **Docker not running:** Make sure Docker Desktop is started
2. **Port 5432 in use:** Stop any other PostgreSQL instances or change the port in docker-compose.yml
3. **Permission denied:** Make sure the setup script is executable: `chmod +x setup-db.sh`