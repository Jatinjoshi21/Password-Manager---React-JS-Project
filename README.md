# Password Manager (Client)

A lightweight React + Vite password manager UI for storing and managing site credentials in the browser.

## Features

- Add credentials for website, username, and password
- Save entries locally using `localStorage`
- Show/hide password field while editing
- Edit or delete saved password entries
- Copy site URL, username, or password with one click
- Notifications powered by `react-toastify`
- Responsive UI built with Tailwind CSS

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Toastify
- UUID for unique entry identifiers

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn available

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. Enter the website name or URL.
2. Enter the associated username.
3. Enter the password.
4. Click **Save Password**.
5. Your saved entries appear in the table below.
6. Use **Edit**, **Delete**, or **Copy** actions as needed.

## Notes

- Saved passwords are stored only in the browser's `localStorage`.
- This client does not include backend encryption or server-side storage.
- For production use, add secure encryption and a backend service.

## Project Structure

- `src/App.jsx` — top-level layout component
- `src/components/manager.jsx` — main password manager logic and UI
- `src/components/navbar.jsx` — navigation header
- `src/components/footer.jsx` — footer component

## Scripts

- `npm run dev` — start development server
- `npm run build` — build production bundle
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## License

This project is provided as-is.
