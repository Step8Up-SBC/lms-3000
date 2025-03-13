# LMS3000

LMS3000 is a modern Learning Management System built with **React** for the frontend and a **Sequelize/Node/MySQL** backend. This application provides a robust platform for managing courses, students, and instructors efficiently.

## Features

- **React-powered frontend** for a dynamic user experience
- **Sequelize ORM** for seamless database interactions
- **MySQL backend** for efficient data storage
- **Node.js server** for handling API requests
- **Full-stack integration** with streamlined development workflow

## Installation

Follow these steps to install and set up LMS3000 locally:

### 1. Clone the Repository

```sh
git clone https://github.com/Step8Up-SBC/lms-3000.git
cd LMS3000
```

### 2. Create the Database

Open a terminal and enter MySQL:

```sh
mysql -u root -p
```

Enter your MySQL password when prompted, then create the database by running:

```sh
source server/db/schema.sql;
quit;
```

### 3. Install Dependencies

Run the following command in the root directory to install dependencies for both server and client:

```sh
npm install
```

### 4. Set up Environment Variables

copy .env.example files in the client and server folders, to cerate .env files. In the server folder, change your MySQL password

### 5. Seed the Database (Optional)

If you want to populate the database with sample data, run:

```sh
npm run seed
```

### 6. Start the Application

Run the following command to start the development server:

```sh
npm run dev
```

The application should now be running locally.

## Usage

- Open your browser and navigate to `http://localhost:5173` to access the LMS3000 application.
- Explore features such as course management, student enrollment, and instructor assignments.
- The Sequelize/NodeJS backend can be accessed via `http://localhost:3001`

## Contributing

Feel free to submit issues and pull requests to improve LMS3000. Contributions are welcome!

## License

This project is licensed under the **MIT License**.

---

Happy Learning! 🎓🚀
