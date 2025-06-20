// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://340c56339cd2371aedfccaeb71c54fd2@o4508348409839616.ingest.us.sentry.io/4509532458450944",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
