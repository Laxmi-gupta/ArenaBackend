# Arena Backend Assignment

## Tech Stack
- Node.js
- Express
- Prisma
- PostgreSQL
- JWT
- Zod

## Setup Instructions

1. Clone repository
2. Install dependencies
   npm install

3. Create .env file:
   DATABASE_URL=your_db_url
   JWT_SECRET=your_secret

4. Run migrations:
   npx prisma migrate dev

5. Start server:
   npm run dev

## APIs Implemented

### User Module
- Register
- Login
- Get Profile

### Arena Module
- Create Arena
- List Arenas
- Get Arena by ID
- Join Arena
