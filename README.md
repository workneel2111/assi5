# Product Explorer - React API Project

This is a simple React application built for a college assignment. The main goal of this project is to practice fetching data from a real-world API using a custom hook, while handling things like loading states and potential network errors gracefully.

## Features
- **Live Data**: Fetches real product data from the Platzi Fake Store API.
- **Custom Hook**: Uses a reusable `useFetch` hook to keep the logic clean.
- **Loading States**: Shows a clear message while the data is being downloaded.
- **Error Handling**: Displays a user-friendly error message if the API is down or the request fails.
- **Request Cancellation**: Uses `AbortController` to cancel pending requests if the component unmounts.

## The `useFetch` Hook
I created a custom hook called `useFetch.js` to handle the API logic. It manages three pieces of state:
1. **Data**: Stores the JSON response from the API.
2. **Loading**: A boolean that tracks if the fetch is still in progress.
3. **Error**: Stores any error messages if something goes wrong.

I used `useCallback` to wrap the fetching function so it doesn't get re-created every time the component re-renders. I also included an `AbortController` to make sure that if a user navigates away before the fetch finishes, the request is cancelled to prevent memory leaks.

## Why Loading and Error Handling?
In a real app, the internet isn't always perfect. If we don't handle the **Loading** state, the screen might just look blank and broken to the user. Similarly, if there is an **Error** (like a 404 or a server crash), we need to tell the user what happened instead of letting the app just crash silently.

## Technologies Used
- **React**: For building the UI components.
- **Vite**: For a fast development environment and build tool.
- **CSS**: Simple, custom styling for the product cards.
- **ESLint**: To keep the code clean and follow best practices.

## How to Run Locally

1. Clone this repository to your machine.
2. Open your terminal in the project folder.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the link provided in the terminal (usually `http://localhost:5173`) to see the app.

## Folder Structure
```text
src/
 ├── component/
 │    ├── ProductList.jsx  # Displays the products
 │    └── ProductList.css  # Styles for the list
 ├── hooks/
 │    └── useFetch.js     # Logic for fetching data
 ├── App.jsx              # Main entry point
 └── main.jsx             # React DOM rendering
```

## What I Learned
Through this project, I learned:
- How to create a **Custom Hook** to reuse logic across different parts of an app.
- How to use `useEffect` and `useCallback` together properly.
- The importance of cleaning up side effects using `AbortController`.
- How to manage complex UI states (Data vs. Loading vs. Error) based on API responses.

---
*Developed as part of my React learning journey.*

