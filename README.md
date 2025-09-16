# next-starter

> A minimal starter kit for Next.js.

Here's the foundation of basically every Next.js project I've ever made, which comes with a considerable amount of boilerplate already written so you can focus on building out your ideas.

## Features

I did my best to include building blocks into this template while keeping things minimal so you can add/or remove things as you desire.

- Next.js 15 (React + TypeScript)
- Tailwind CSS + shadcn/ui
- PostgreSQL + Drizzle ORM
- Self-hosted username-password authentication
- Type safe environment variables
- Object validation with Zod
- Prettier + ESLint

## Getting Started

There aren't many _mandatory_ prerequisites other than **npm**.

1. Download, fork, or template this repository.
2. Download dependencies via `npm i`.
3. Create and populate a `.env.local` file based off of `.env.example`.
4. Push the database schema to your database via `npm run db:push`.
5. Start a local development server via `npm run dev`.

If at any point you want to view/manage the contents of your database, you can do easily through Drizzle Studio via `npm run db:studio`.

You should avoid directly modifying your production database. I tend to use PostgreSQL, and it's really easy to [set up locally with Docker](https://orm.drizzle.team/docs/guides/postgresql-local-setup).

## Going to Production

### Migrations

You're going to want to use database migrations to organize and manage schema changes. You can generate a migration file via `npm run db:generate`.

If at any point you want to delete a migration file, use `npm run db:drop`. **This does not rollback changes to your database, it just safely deletes the SQL migration script.**

Preferably, migrations will run automatically when a pull request is merged. This can be done using GitHub Actions. Depending on how you are hosting your application and database, there may quite a few moving parts to this—I recommend taking the time to research this yourself.


### Authentication

The included user authentication is a minimal username-password implementation that is not intended for production use.

Rate limiting and email verification are features that should be added that will prevent the majority of vulnerabilities, but you may be interested in OAuth.

You can also completely replace the authentication implementation with a hosted alternative, such as Clerk.

## License

Licensed under the [MIT License](LICENSE), Copyright © 2024
