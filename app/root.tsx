/* eslint-disable filename-rules/match */
import { MetaFunction, LinksFunction, LoaderArgs, json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { GlobalContext } from "./components/global-context";

import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Hocus",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader = async (args: LoaderArgs) => {
  return json({
    csrfToken: args.context.req.csrfToken(),
    gaUserId: args.context.user?.gaUserId ?? void 0,
  });
};

export default function App() {
  const { gaUserId, csrfToken } = useLoaderData<typeof loader>();

  return (
    <GlobalContext.Provider value={{ gaUserId, csrfToken }}>
      <html className="dark h-full" lang="en">
        <head>
          <Meta />
          <Links />
          <link rel="stylesheet" href="/devicon.min.css" />
        </head>
        <body className="h-full dark:bg-gray-800 dark:text-white">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </GlobalContext.Provider>
  );
}
