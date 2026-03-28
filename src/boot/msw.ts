import { boot } from 'quasar/wrappers';
import { worker } from '../mocks/browser';

export default boot(async () => {
  // Start MSW to intercept API calls so we avoid CORS in production
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
});
