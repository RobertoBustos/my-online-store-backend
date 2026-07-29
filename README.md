# my-online-store-backend

GraphQL API for the My Online Store portfolio project, built with Apollo Server, Prisma, and PostgreSQL.

## Quickstart

```bash
docker compose up -d
npm install
npx prisma generate
npm run dev
```

The server starts at `http://localhost:4000` (or the port set in `.env`).

## Environment

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

## Other scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the server in watch mode |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled server |
| `npm run typecheck` | Type-check without emitting output |
| `npm run db:verify` | Verify the Prisma connection to the database |
