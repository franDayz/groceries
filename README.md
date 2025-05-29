# Grocery List Manager

A simple web application to manage your grocery shopping list, built with Hono.js and Handlebars.

## Features

- Add items to your grocery list
- Responsive design with Bootstrap
- Real-time updates

## Tech Stack

- Hono.js (Web framework)
- Handlebars (Templating)
- Bootstrap (UI)
- TypeScript
- Playwright (E2E Testing)

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Visit http://localhost:3000

## Testing

Run E2E tests:
```bash
npm test
```

## Deployment

This project is configured for deployment on Render.

To deploy:

1. Fork or clone this repository to your GitHub account
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Render will automatically detect the configuration and deploy

The `render.yaml` file contains all necessary deployment configuration.

## Environment Variables

- `PORT`: Port number (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 