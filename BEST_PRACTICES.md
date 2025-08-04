# 📘 Project Best Practices

## 1. Project Purpose
This is a full-stack printing eCommerce shop built with Next.js 14 (frontend) and Express.js (backend). The application provides a complete online shopping experience with product catalog, shopping cart, wishlist, user authentication, order management, and an admin dashboard. It serves as a business solution for printing services with features like product filtering, search, pagination, and comprehensive order tracking.

## 2. Project Structure

### Frontend (Next.js App Router)
- `app/` - Next.js 14 App Router structure with route groups
  - `(dashboard)/` - Admin dashboard routes (grouped route)
  - `api/` - API routes for frontend operations
  - `actions/` - Server actions
  - Route-based pages: `product/`, `cart/`, `checkout/`, `shop/`, etc.
- `components/` - Reusable React components with barrel exports via `index.ts`
- `app/_zustand/` - Global state management with Zustand
- `lib/` - Utility libraries and configurations
- `utils/` - Helper functions and utilities
- `public/` - Static assets (images, icons, etc.)

### Backend (Express.js)
- `server/` - Separate Express.js backend
  - `controllers/` - Business logic handlers
  - `routes/` - API route definitions
  - `prisma/` - Database schema and migrations
  - `utills/` - Backend utility functions
  - `app.js` - Main server entry point

### Database
- PostgreSQL with Prisma ORM
- Vercel Postgres for both development and production (no Docker)
- Models: Product, Category, User, Customer_order, Image, Wishlist

## 3. Test Strategy
- **Current State**: No formal testing framework implemented
- **Recommended Approach**: 
  - Frontend: Jest + React Testing Library for component tests
  - Backend: Jest + Supertest for API endpoint testing
  - E2E: Playwright or Cypress for critical user flows
  - Database: Separate test database with Prisma migrations

## 4. Code Style

### TypeScript Configuration
- Strict mode enabled with comprehensive type checking
- Path aliases: `@/*` maps to project root
- JSX preservation for Next.js optimization

### Naming Conventions
- **Files**: kebab-case for pages, PascalCase for components
- **Components**: PascalCase (e.g., `ProductItem.tsx`, `AddToCartBtn.tsx`)
- **Functions**: camelCase (e.g., `getAllProducts`, `createProduct`)
- **Variables**: camelCase for local variables, PascalCase for types/interfaces
- **Database**: snake_case for table names, camelCase for Prisma models

### Component Architecture
- Functional components with TypeScript interfaces
- Props interfaces defined inline or exported
- Barrel exports in `components/index.ts` for clean imports
- Server and Client components clearly separated (Next.js 14)

### Error Handling
- Backend: Try-catch blocks with appropriate HTTP status codes
- Frontend: Error boundaries and graceful fallbacks
- Database: Prisma error handling with meaningful messages
- API responses: Consistent error object structure

## 5. Common Patterns

### State Management
- **Zustand**: Global cart state with persistence to sessionStorage
- **Server State**: Direct database queries in Server Components
- **Client State**: React hooks for local component state

### Data Fetching
- **Frontend**: Server Components for initial data, Client Components for interactions
- **Backend**: Prisma queries with proper relations and filtering
- **API Design**: RESTful endpoints with consistent response formats

### Authentication
- NextAuth.js for authentication management
- Role-based access control (user/admin roles)
- Protected routes and API endpoints

### Styling
- Tailwind CSS with custom configuration
- DaisyUI for component library
- Custom color palette with brand colors
- Responsive design patterns

## 6. Do's and Don'ts

### ✅ Do's
- Use TypeScript interfaces for all props and data structures
- Implement proper error handling in all API endpoints
- Use Prisma relations for efficient database queries
- Follow Next.js App Router conventions for file organization
- Use Server Components for data fetching when possible
- Implement proper loading states and error boundaries
- Use environment variables for configuration
- Follow the established naming conventions

### ❌ Don'ts
- Don't mix Server and Client Component logic inappropriately
- Don't expose sensitive data in client-side code
- Don't skip TypeScript type definitions
- Don't hardcode API URLs (use environment variables)
- Don't ignore database foreign key constraints
- Don't skip input validation on both frontend and backend
- Don't commit sensitive environment variables

## 7. Tools & Dependencies

### Frontend Core
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Zustand**: Lightweight state management

### UI Components
- **React Icons**: Icon library
- **Headless UI**: Unstyled accessible components
- **DaisyUI**: Tailwind CSS component library
- **React Slick**: Carousel/slider components

### Backend Core
- **Express.js**: Web framework
- **Prisma**: Database ORM and query builder
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing

### Database & Auth
- **PostgreSQL**: Primary database
- **NextAuth.js**: Authentication solution
- **Vercel Postgres**: Database hosting for both development and production

## 8. Other Notes

### Development Workflow
- Frontend runs on port 3000, backend on port 5000
- Use `npm run dev` for frontend development
- Use `node app.js` for backend development
- Prisma generates client after installation
- Database hosted on Vercel Postgres (no local Docker setup required)

### Deployment Considerations
- Frontend deployed on Vercel with automatic builds
- Backend can be deployed separately or as Vercel API routes
- Database migrations handled through Prisma
- Environment variables must be configured for production

### Performance Optimizations
- Next.js Image component for optimized images
- Server Components for reduced client-side JavaScript
- Pagination implemented for product listings
- Database indexing on frequently queried fields

### Security Measures
- Password hashing with bcryptjs
- CORS configuration for API security
- Environment variable protection
- Input validation and sanitization
- Role-based access control

### LLM Code Generation Guidelines
- Always include TypeScript types for new components
- Follow the established folder structure
- Use existing utility functions and patterns
- Implement proper error handling
- Consider both Server and Client Component requirements
- Use the existing Zustand store for cart operations
- Follow the established API response patterns
- Include proper Prisma relations in database queries