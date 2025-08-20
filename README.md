# Frontend Task

This is a **React application** created with **Vite**.  
It provides a simple form where users can enter details and submit them to the backend API.  
The data is stored in the database through the backend server, and after submission the frontend shows a **“Form was submitted”** message.

---

## Requirements

- Node.js  
- React (via Vite)  
- Dependencies:
  - axios  
  - bootstrap  

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/naveenreddy1103/frontend-task.git
   cd frontend-task

2. Install dependencies: npm install
   Running the Application:- npm run dev
   By default, Vite will start the app at:http://localhost:5173/
   - When the app runs, it will open the Form page (form.jsx).


⚠️ Important:
If you are running on local server, you must start the backend server first before starting the frontend.

Start backend: npm start (from Backend Tasks Repo
)

Then start frontend: npm run dev


Features

A simple form built with React + Bootstrap
Submits data to backend using Axios
Shows a confirmation message “Form was submitted” after successful submission


Example Flow

1. Run backend (npm start) → starts server at http://localhost:3000.
2. Run frontend (npm run dev) → opens http://localhost:5173.
3. Fill the form and click submit.
4. Data will be sent to backend API (/useform).
5. Backend stores data in MongoDB and responds
6. Frontend shows “Form was submitted” message to the user.































