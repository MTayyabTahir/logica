# Project Dashboard

React app to view projects and add notes.

## Features
- View all projects
- Click on project → popup automatically opens
- Add notes to projects

## Component Structure
- `ProjectList.jsx` - Shows all project cards
- `ProjectCard.jsx` - Single project card component  
- `EditorPanel.jsx` - Modal popup for project details & notes
- `useStores.js` - Zustand store for state management

## State Management
Using **Zustand** store:
- `projects` - List of projects
- `selectedProject` - Currently selected project
- `loading` / `error` - API states
- `fetchProjects()` - GET API call
- `submitNote()` - POST API call

## API Integration (JSON Server)
| Endpoint | Method | Purpose |
|----------|--------|---------|
| `http://localhost:5000/projects` | GET | Fetch all projects |
| `http://localhost:5000/projects/{id}/notes` | POST | Submit note |

## Setup & Run

### 1. Install dependencies
```bash
npm install




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
