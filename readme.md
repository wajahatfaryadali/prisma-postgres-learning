### ORM : Object-Relational Mappin
- is a technique that allows developers to interact with a database using objects instead of writing raw SQL queries. It acts as a bridge between the database and your application, making database operations more convenient and readable.  

- Prisma is a modern ORM for Node.js and TypeScript applications. It simplifies database queries and works well with relational databases like PostgreSQL, MySQL, SQLite, and SQL Server.  

- **Why Use Prisma**
✅ Type Safety – You get auto-completion and error checking in TypeScript.
✅ Easy Migrations – Helps manage database schema changes easily.
✅ Readable Queries – Queries look like JavaScript objects instead of complex SQL.
✅ Supports Multiple Databases – Works with different relational databases.


### just install prisma by following documentation


```
Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)

    Usage

      $ prisma [command]

    Commands

                init   Set up Prisma for your app
            generate   Generate artifacts (e.g. Prisma Client)
                  db   Manage your database schema and lifecycle
             migrate   Migrate your database
              studio   Browse your data with Prisma Studio
            validate   Validate your Prisma schema
              format   Format your Prisma schema
             version   Displays Prisma version info
               debug   Displays Prisma debug info

    Flags

         --preview-feature   Run Preview Prisma commands
         --help, -h          Show additional information about a command

┌──────────────────────────────────────────────────────────────────────────────────────┐
│  Optimize performance through connection pooling and caching with Prisma Accelerate  │
│  and capture real-time events from your database with Prisma Pulse.                  │
│  Learn more at https://pris.ly/cli/pdp                                               │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Examples

      Set up a new Prisma project
      $ prisma init

      Generate artifacts (e.g. Prisma Client)
      $ prisma generate

      Browse your data
      $ prisma studio

      Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
      $ prisma migrate dev

      Pull the schema from an existing database, updating the Prisma schema
      $ prisma db pull

      Push the Prisma schema state to the database
      $ prisma db push

      Validate your Prisma schema
      $ prisma validate

      Format your Prisma schema
      $ prisma format

      Display Prisma version info
      $ prisma version

      Display Prisma debug info
      $ prisma debug

```

## installatino process
- setup package.json
- i express
- i nodemon
- i dotenv
- i prisma
- setup postgres in local machine
- created a new database nameed prisma-learning
- modify the string in .env file
- i prisma client
- create user model
- npx prisma generate dev --name create_user_schema 