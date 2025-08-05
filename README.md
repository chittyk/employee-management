# 👩‍💼 Employee Management System

A simple and responsive **Employee Management System** built with:

- 🟦 Node.js
- ⚡ Express.js
- 🌐 MongoDB with Mongoose
- 🎨 Handlebars (hbs)
- 💅 Tailwind CSS

Manage employees with ease – add, view, and delete employee entries from a clean and functional UI.

---

## 🚀 Features

- Add new employees with name, email, and phone number.
- Prevents duplicate entries based on email or phone.
- List all employees in a responsive table layout.
- Delete employee entries.
- Clean and minimal UI using Tailwind CSS.
- MongoDB for fast and reliable storage.

---

## 📸 Demo Preview

> Coming soon: Add screenshots or deploy your project and share a live link here.

---

## 🛠️ Tech Stack

| Tech        | Usage                       |
|-------------|-----------------------------|
| Node.js     | Backend Runtime             |
| Express.js  | Server Framework            |
| MongoDB     | NoSQL Database              |
| Mongoose    | MongoDB ODM                 |
| Handlebars  | Templating Engine           |
| Tailwind CSS| Styling                     |

---

## 📂 Folder Structure

.
├── public/
│ ├── css/
│ │ └── style.css # Tailwind CSS Output
├── views/
│ ├── partials/
│ └── index.hbs # Main Page
├── models/
│ └── employee.js # Mongoose Model
├── routes/
│ └── employeeRoute.js # Express Routes
├── app.js # Main Express App
├── tailwind.config.js # Tailwind Configuration
├── postcss.config.js # PostCSS Config
└── README.md

yaml
Copy
Edit

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/employee-management-system.git
   cd employee-management-system
Install dependencies

bash
Copy
Edit
npm install
Configure Tailwind (if not built)

bash
Copy
Edit
npx tailwindcss -i ./input.css -o ./public/css/style.css --watch
Run the server

bash
Copy
Edit
npm start
🔒 Duplicate Protection
To avoid adding duplicate entries:

The backend checks for existing email or phone number before inserting a new employee.








