# 📘 Project Title
Two-Step Registration Form – React

## 📄 Project Description
A responsive, two-step user registration form built with React for the Frontend Developer Assessment at ZDATA Innovation. The form includes client-side validation, step navigation, and submits data to an API endpoint using Axios.



## ✅ What I Have Done
- Built a two-step registration form with React functional components and Hooks.
- Step 1: Full Name (required), Email (required, format validation), Phone Number (optional).
- Step 2: Password (required, minimum 6 characters), Confirm Password (must match).
- Client-side validations with inline error messages and field highlights.
- Progress indicator for form navigation.
- Disabled "Next" button until all validations in Step 1 pass.
- Used "Submit" button in Step 2 to send data.
- Integrated Axios for form submission to `/api/register`.
- Loaded API base URL from a `.env` file.
- Displayed loading indicator and success message after submission.
- Followed a modular, clean code structure.



## 🛠️ Project Setup Instructions

### 1. Clone the Repository

git clone https://github.com/yourusername/two-step-registration-form.git
cd two-step-registration-form
Create .env File
Create a .env file in the root directory and add your API base URL:


REACT_APP_API_BASE_URL=https://your-api-base.com
🚀 How to Run the App

npm run dev
Then visit:
http://localhost:5000

📂 Folder Structure

/src
│
├── /api           # Axios instance and API requests
├── /components    # Input fields, buttons, progress bar
├── /context       # Form state context
├── /pages         # Step1, Step2, Success components
├── /services      # registerUser API logic
├── /utils         # Validation functions, constants
├── App.jsx        # Main application
└── index.js       # App entry point
.env               # API base URL

 Assumptions & Decisions Made
The backend is expected to support POST /api/register with this payload:


{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "yourpassword"
}
Phone Number is optional.






