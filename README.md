📘 Taxes Table UI — Frontend Assignment

This project is a simple React application that displays tax records in a table using @tanstack/react-table.
Users can view the data, edit a record, and update it through the provided API.

🚀 Features

Fetches data from Taxes API and Countries API

Displays table with:

Name

Entity

Gender

Request Date

Country

Edit Action

Edit Modal to update Name and Country

Saves updates using PUT API

Clean and simple UI based on the provided Figma design

Date formatting + clean gender formatting

Handles missing entity values

🛠️ Tech Used

React + Vite

@tanstack/react-table

Axios

Simple CSS styling

📡 APIs

Taxes:
https://685013d7e7c42cfd17974a33.mockapi.io/taxes

Countries:
https://685013d7e7c42cfd17974a33.mockapi.io/countries

▶️ How to Run

Install packages

npm install


Start project

npm run dev


Open browser

http://localhost:5173/

📁 Main Files
src/
  components/
    DataTable.jsx
    EditModal.jsx
    columns.jsx
  pages/
    Home.jsx
  api/api.js
  styles/table.css
  
  🎯 Summary

This project fulfills all assignment requirements:

Table built using TanStack

Fetch + display API data

Edit modal with update functionality

Clean, easy-to-use UI
