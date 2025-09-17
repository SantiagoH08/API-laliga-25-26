
# LaLiga Zone Backend

This project is a backend API for visualizing and querying LaLiga player and goalkeeper data, using Node.js, Express, TypeScript, and Supabase.

## Features
- Modular architecture: separate models, controllers, routes, and middleware
- Strong typing with TypeScript
- Flexible search for players and goalkeepers by name, team, and position (accent-insensitive)
- Supabase RPC functions for advanced queries
- Configurable CORS middleware
- Easy integration with different data sources (Supabase, MongoDB, etc.)

## Folder Structure
```
laliga-zone-back/
  src/
    app.ts
    index.ts
    config/
    controllers/
    middleware/
    model/
      global/
      supabase/
    routes/
    types/
  package.json
  tsconfig.json
  .env
```

## Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env` (e.g., Supabase keys)
4. Start the server:
   ```bash
   npm run dev
   # or
   npx ts-node src/index.ts
   ```

## Main Endpoints
- `GET /player?name=&team=&position=`: Search players
- `GET /goalkeeper?name=&team=&position=`: Search goalkeepers

## Customization
- You can easily change the data model in `app.ts` to use Supabase, MongoDB, etc.
- CORS middleware is configured in `src/middleware/cors.ts`

## Requirements
- Node.js >= 18
- Supabase (or your preferred data source)

## Contributing
Pull requests and suggestions are welcome!

## License
MIT
