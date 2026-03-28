# Quasar App (news-interview)

A Quasar Project

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## API Mocking with MSW
Because `newsapi.org` causes CORS errors when fetched directly from browsers in production, this project uses Mock Service Worker (MSW) to intercept all API requests to `newsapi.org/v2/everything` inside the browser locally or in production, returning a static mocked JSON response.

**To modify the mocked JSON response:**
1. Open `src/mocks/handlers.ts`.
2. Update the JSON payload returned by `HttpResponse.json({...})`.
3. Save changes. 

Note: MSW is initialized globally before the boot sequence of Quasar via `src/boot/msw.ts`. The service worker file `mockServiceWorker.js` is kept in the `public/` directory so Vercel can serve it alongside production static assets.
