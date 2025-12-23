🎬 VideoTube

A full-stack video sharing platform inspired by YouTube, built with React.js, Node.js, Express.js, MongoDB, Cloudinary, JWT, and Tailwind CSS.
Users can upload, watch, like/dislike, subscribe, and manage their videos in a seamless and responsive interface.


📸 Screenshots

![Login Page](./assets/screenshot(867).png)


![Video Watch Page](./Assets/Screenshot%20(868).png)

![Upload Video Page](./Assets/Screenshot%20(869).png)

![Like Page](./Assets//Screenshot%20(870).png)

![Playlist Page](./Assets/Screenshot%20(871).png)

![playlist Page](./Assets/Screenshot%20(872).png)

![user profile page](./Assets//Screenshot%20(873).png)

![user information page](./Assets/Screenshot%20(874).png)



📌 Features

🔐 Authentication & Authorization

Secure login and registration with JWT.

Logout and session management.

👤 User Management

Update profile details, avatar, and cover image (stored on Cloudinary).

View and manage personal watch history.

📹 Video Management

Upload videos to Cloudinary.

Play videos with interactive controls.

Like, dislike, and comment on videos.

📺 Subscriptions

Subscribe/unsubscribe to creators.

Manage subscribed channels.

🎨 UI/UX

Built with React.js and styled using Tailwind CSS.

Responsive design for desktop and mobile.

🛠️ Tech Stack
Frontend

⚛️ React.js

🎨 Tailwind CSS

🌐 Axios

Backend

🚀 Node.js & Express.js

🗄️ MongoDB (Mongoose ORM)

☁️ Cloudinary (media storage)

🔑 JWT (Authentication)

⚙️ Installation & Setup

Follow these steps to run the project locally:

1️⃣ Clone the Repository
git clone https://github.com/UttamYadav-DGI/VideoTube.git
cd VideoTube

2️⃣ Install Dependencies

Backend

cd server
npm install


Frontend

cd client
npm install

3️⃣ Setup Environment Variables

Create a .env file inside the server directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4️⃣ Run the Application

Backend

cd server
npm run dev


Frontend

cd client
npm run dev


Open http://localhost:5173/ in your browser 🚀

📂 Project Structure
VideoTube/
│── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Pages (Home, Video, Auth, Profile, etc.)
│   │   ├── context/      # State management (Auth, User, Video)
│   │   ├── utils/        # Helper functions
│   │   └── App.jsx       # Main app file
│
│── server/               # Node.js backend
│   ├── models/           # Mongoose models (User, Video, Subscription, etc.)
│   ├── routes/           # Express routes
│   ├── controllers/      # Business logic
│   ├── middlewares/      # Authentication, Error handling
│   └── index.js          # Entry point
│
└── README.md



🚀 Future Enhancements

⏯️ Video playlists support

📝 Comment replies & threaded discussions

📡 Live streaming integration

🌙 Dark/Light mode toggle

🤝 Contributing

Contributions are always welcome!

Fork the repo 🍴

Create a new branch (feature/YourFeature)

Commit your changes (git commit -m "Add new feature")

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request 🎉

📄 License

This project is licensed under the MIT License – you are free to use, modify, and distribute it.

✨ Made with ❤️ by Uttam Yadav
