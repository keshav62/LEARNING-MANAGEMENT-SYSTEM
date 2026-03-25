📚 Full-Stack LMS Platform (MERN + Clerk + Stripe)

A scalable Learning Management System (LMS) that enables educators to create and manage courses while allowing students to enroll, purchase, and track learning progress. The platform includes secure authentication, real-time course progress tracking, video-based learning, and integrated payments.

🚀 Features
👨‍🎓 Student Features
Browse and search courses
View course details and curriculum
Secure course purchase via Stripe
Watch course lectures with video player
Track course progress
Rate purchased courses
View enrolled courses dashboard
👨‍🏫 Educator Features
Upgrade role from student to educator
Add and manage courses
Upload course thumbnails and lecture content
View enrolled students
Track earnings and analytics via dashboard
🌐 Platform Features
Responsive UI with modern design
Secure authentication and user management
Course filtering and search
Video-based learning experience
Payment integration
Course rating and feedback system
🛠 Tech Stack
Frontend
React.js (Vite) – Fast frontend development environment
Tailwind CSS – Modern responsive UI styling
React Router – Client-side routing
React Player – Video streaming support (YouTube embeds)
Quill Editor – Rich text editor for course descriptions
react-simple-star-rating – Course rating system
rc-progress – Course progress indicators
humanize-duration – Human-readable time display
Backend
Node.js
Express.js – REST API development
Database
MongoDB – Stores users, courses, enrollments, and progress
Authentication
Clerk – Secure authentication and user management
Payment Integration
Stripe (Test Mode) – Secure course purchases
Media Storage
Cloudinary – Image storage and management
🏗 System Architecture
Frontend (React + Vite)
        │
        │ REST APIs
        ▼
Backend (Node.js + Express)
        │
        ▼
MongoDB Database
        │
        ├── Clerk Authentication
        ├── Stripe Payments
        └── Cloudinary Media Storage
📂 Project Structure
LMS-Platform
│
├── client
│   ├── components
│   ├── pages
│   ├── context
│   └── assets
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── config
│
├── package.json
└── README.md
📡 API Endpoints
👨‍🏫 Educator Routes
Method	Endpoint	Description
GET	/educator/update-role	Upgrade user role to educator
POST	/educator/add-course	Add a new course
GET	/educator/courses	Get courses created by educator
GET	/educator/dashboard	Get educator dashboard statistics
GET	/educator/enrolled-students	Get enrolled students data

Example:

educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse);
educatorRouter.get('/courses', protectEducator, getEducatorCourse);
educatorRouter.get('/dashboard', protectEducator, educatorDashboardData);
educatorRouter.get('/enrolled-students', protectEducator, getEnrolledStudentsData);
📚 Course Routes
Method	Endpoint	Description
GET	/course/all	Fetch all available courses
GET	/course/:id	Fetch specific course details

Example:

courseRouter.get('/all', getAllCourses);
courseRouter.get('/:id', getCourseId);
👨‍🎓 User Routes
Method	Endpoint	Description
GET	/user/data	Get user profile data
GET	/user/enrolled-courses	Get courses enrolled by user
POST	/user/purchase	Purchase a course
POST	/user/update-course-progress	Update course progress
POST	/user/get-course-progress	Fetch user course progress
POST	/user/add-rating	Add course rating

Example:

userRouter.get('/data', getUserData);
userRouter.get('/enrolled-courses', userEnrolledCourses);
userRouter.post('/purchase', purchaseCourse);
userRouter.post('/update-course-progress', updateUserCourseProgress);
userRouter.post('/get-course-progress', getUserCourseProgress);
userRouter.post('/add-rating', addUserRating);
💳 Payment Flow (Stripe)
User selects a course.
Frontend sends purchase request.
Backend creates Stripe checkout session.
User completes payment via Stripe.
Upon success:
Course is added to user enrollments.
Access to lectures is unlocked.
📊 Course Progress Tracking
Each lecture completion updates user progress.
Progress percentage calculated dynamically.
Displayed using progress bars (rc-progress).
⭐ Course Rating System
Students can rate courses after enrollment.
Ratings stored in MongoDB.
Average ratings displayed on course cards.
🔐 Authentication

Authentication is handled via Clerk, providing:

Secure login/signup
Session management
User profile handling
Ready-to-use UI components
📷 Media Handling

Course thumbnails and assets are uploaded to Cloudinary, enabling:

Fast CDN delivery
Image optimization
Secure cloud storage
⚙️ Installation
Install Dependencies

Backend

cd server
npm install

Frontend

cd client
npm install
Run Application

Backend

npm run server

Frontend

npm run dev
📈 Future Improvements
Course quizzes and assignments
Certificate generation
Live classes using WebRTC
Instructor revenue analytics
Admin dashboard
👨‍💻 Author

Keshav Singh


⭐ If you like this project

Give the repository a ⭐ on GitHub!
