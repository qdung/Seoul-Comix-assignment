# Restaurant App

## Technologies

- **Next.js**: Top best choice frontend/fullstack framework.
- **tRPC**: End-to-end typesafe APIs.
- **Prisma**: ORM for Node.js and TypeScript.
- **PostgreSQL**: High speed relational database.

## Local Development

### Prerequisites

- Node.js (v16 or newer)
- PostgreSQL database
- A `.env` file in your project root with the necessary environment variables

### Environment Setup

1. **Install dependencies**

    ```bash
    yarn install
    ```

2. **Configure your environment variables**

    Create a `.env` file in the root:

    ```plaintext
    POSTGRES_URL="YOUR_POSTGRES_URL"
    ```

3. **Run Prisma migrations**

    ```bash
    yarn prisma:init
    yarn seed
    ```

4. **Start the development server**

    ```bash
    yarn dev
    ```

    Visit `http://localhost:3000` to view the app.
