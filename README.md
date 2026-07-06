# GameVault

A personal tracker for video games I want to play, am playing, have finished, or dropped. Built for CSCI 39548 Assignment 4, using React Router, TanStack Query, and Zustand over a json-server backend.

## Features

- **Catalog** (`/`) - browse all games. Search box filters by title and writes the query to the URL (`?q=...`), so refreshing or sharing the link keeps the search.
- **Status filter** (`/list/:status`) - same catalog view, filtered to one status: want, active, done, or dropped. Also has its own search box.
- **Item detail** (`/items/:id`) - shows a single game's info, and lets you change its status, set a 1-5 rating, and write a note. Changing the status updates the screen immediately (optimistic update) and rolls back if the save fails.
- **Nav bar** - links to the catalog, each status filter, and an About page. The active link is highlighted. Also has the theme and density controls.
- **Theme toggle** - switches light/dark mode, persisted across reloads.
- **Density toggle** - comfortable shows a card grid, compact shows a plain list of titles and statuses. Also persisted.
- **404 page** - shown for any unknown route or an item id that doesn't exist.

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router
- TanStack Query
- Zustand (with the `persist` middleware)
- Tailwind CSS v4
- json-server as the backend over `db.json`

## Getting Started

```bash
npm install
npm run server   # terminal A - json-server on :3001
npm run dev      # terminal B - vite on :5173
```

Reset the database to the seed data at any time:

```bash
npm run reset-db
```

## Stretch Features Done

- **Optimistic status updates** - the status `useMutation` uses `onMutate` to write the new status to the cache right away, `onError` to roll back to the previous value if the request fails, and `onSettled` to invalidate and refetch the real data.

## Screenshots

Screenshots to be added before submission.
