# Blogger — World of Writers 📝

A lightweight blogging web app where you can write, edit, and delete posts — all from the browser. Built as a backend fundamentals project using Node.js and Express, with EJS for server-side templating.

---

## Tech Stack

- **Node.js** — Runtime environment
- **Express.js** — Web framework and routing
- **EJS** — Server-side HTML templating
- **CSS** — Custom styling

> Posts are stored in-memory (a plain array) — no database is used. Data resets on server restart.

---

## Features

- ✍️ Create blog posts with a title and content
- 🏠 Homepage displays all published posts
- 🛠️ Edit any existing post in-place
- 🗑️ Delete posts instantly
- 🔄 Auto-redirects after every action to keep the UI in sync

---

## How It Works

1. The Express server serves the homepage (`/`) with all current posts rendered via EJS.
2. Clicking **Create Post** navigates to a form at `/posts` (GET) — submitting it sends a POST request that pushes the new post (with a timestamp-based ID) into the `posts` array.
3. Each post card on the homepage has **Edit** and **Delete** buttons linked by the post's unique ID.
4. **Edit** (`/edit/:id`) renders a pre-filled form — submitting it updates the matching post in the array and redirects home.
5. **Delete** (`/delete/:id`) filters the post out of the array and redirects home.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the server
node index.js

# Open in browser
http://localhost:3000
```
