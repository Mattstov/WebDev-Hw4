# GameVault

A personal tracker for video games I want to play, am playing, have finished, or dropped. Built for CSCI 39548 Assignment 4.

## Topic

GameVault tracks video games instead of movies or books. Each item has a title, a developer/studio as its creator, a release year, a genre, a status (want / active / done / dropped), an optional 1-5 rating, and an optional note.

## Stack

- React + TypeScript (Vite)
- React Router
- TanStack Query
- Zustand (with persist)
- Tailwind CSS
- json-server as the backend over `db.json`

## Features

- Browse, search (by title, via URL), and filter the catalog by status
- Item detail page with status, rating, and note editing
- Light/dark theme and compact/comfortable density, both persisted across reloads
- 404 page for unknown routes and unknown item ids

## Stretch features done

- Optimistic status updates: changing an item's status on the detail page updates the UI immediately, then rolls back if the request fails.
