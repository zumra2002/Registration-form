# 📝 Two-Step Registration Form (React + Node.js + MongoDB)

This project is a two-step user registration form built with **React** on the frontend and **Node.js/Express + MongoDB** on the backend.

It was developed for the **Frontend Intern Assessment** at **ZDATA Innovation**, following all given requirements including:
- Responsive UI
- Step-based form navigation
- Client-side validation
- API integration
- Environment configuration
- Clean and modular code structure

---

## 📁 Folder Structure

Registration-form/
├── frontend/ # React frontend
│ ├── .env
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── services/
│ │ └── utils/
│ └── README.md
├── backend/ # Node.js + Express backend
│ ├── .env
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ └── register.js
│ └── server.js

## ⚙️ Project Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/registration-form.git
cd registration-form
2. Frontend Setup (React)

cd frontend
npm install
Create a .env file inside /frontend with the following:

env
REACT_APP_API_BASE_URL=http://localhost:5000

Run the frontend:
npm start

3. Backend Setup (Node.js + MongoDB)
cd ../backend
npm install
Create a .env file inside /backend with the following:

env
PORT=5000
MONGO_URI=mongodb://localhost:27017/registration-form

Run the backend server:
node server.js

