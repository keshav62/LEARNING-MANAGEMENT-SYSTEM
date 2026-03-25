# 📚 Full-Stack LMS Platform (MERN + Clerk + Stripe)

A scalable **Learning Management System (LMS)** that enables educators
to create and manage courses while allowing students to enroll,
purchase, and track their learning progress.

The platform integrates **secure authentication, video-based learning,
progress tracking, and online payments**, providing a complete online
education experience.

------------------------------------------------------------------------

# 🚀 Features

## 👨‍🎓 Student Features

-   Browse and search courses
-   View course details and curriculum
-   Secure course purchase via **Stripe**
-   Watch course lectures with a video player
-   Track course progress
-   Rate purchased courses
-   View enrolled courses dashboard

## 👨‍🏫 Educator Features

-   Upgrade role from student to educator
-   Add and manage courses
-   Upload course thumbnails and lecture content
-   View enrolled students
-   Track earnings and analytics via dashboard

## 🌐 Platform Features

-   Responsive UI with modern design
-   Secure authentication and user management
-   Course filtering and search functionality
-   Video-based learning experience
-   Payment integration with Stripe
-   Course rating and feedback system

------------------------------------------------------------------------

# 🛠 Tech Stack

## Frontend

-   React.js (Vite)
-   Tailwind CSS
-   React Router
-   React Player
-   Quill Editor
-   react-simple-star-rating
-   rc-progress
-   humanize-duration

## Backend

-   Node.js
-   Express.js

## Database

-   MongoDB

## Authentication

-   Clerk

## Payment Integration

-   Stripe

## Media Storage

-   Cloudinary

------------------------------------------------------------------------

# 🏗 System Architecture

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

------------------------------------------------------------------------

# 📂 Project Structure

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

------------------------------------------------------------------------

# 📡 API Endpoints

## 👨‍🏫 Educator Routes

  Method   Endpoint                      Description
  -------- ----------------------------- -----------------------------------
  GET      /educator/update-role         Upgrade user role to educator
  POST     /educator/add-course          Add a new course
  GET      /educator/courses             Get courses created by educator
  GET      /educator/dashboard           Get educator dashboard statistics
  GET      /educator/enrolled-students   Get enrolled students data

Example:

``` javascript
educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse);
educatorRouter.get('/courses', protectEducator, getEducatorCourse);
educatorRouter.get('/dashboard', protectEducator, educatorDashboardData);
educatorRouter.get('/enrolled-students', protectEducator, getEnrolledStudentsData);
```

------------------------------------------------------------------------

## 📚 Course Routes

  Method   Endpoint      Description
  -------- ------------- -------------------------------
  GET      /course/all   Fetch all available courses
  GET      /course/:id   Fetch specific course details

Example:

``` javascript
courseRouter.get('/all', getAllCourses);
courseRouter.get('/:id', getCourseId);
```

------------------------------------------------------------------------

## 👨‍🎓 User Routes

  Method   Endpoint                       Description
  -------- ------------------------------ ------------------------------
  GET      /user/data                     Get user profile data
  GET      /user/enrolled-courses         Get courses enrolled by user
  POST     /user/purchase                 Purchase a course
  POST     /user/update-course-progress   Update course progress
  POST     /user/get-course-progress      Fetch user course progress
  POST     /user/add-rating               Add course rating

Example:

``` javascript
userRouter.get('/data', getUserData);
userRouter.get('/enrolled-courses', userEnrolledCourses);
userRouter.post('/purchase', purchaseCourse);
userRouter.post('/update-course-progress', updateUserCourseProgress);
userRouter.post('/get-course-progress', getUserCourseProgress);
userRouter.post('/add-rating', addUserRating);
```

------------------------------------------------------------------------

# 💳 Payment Flow (Stripe)

1.  User selects a course
2.  Frontend sends purchase request
3.  Backend creates Stripe checkout session
4.  User completes payment via Stripe
5.  Course is added to user enrollments and access is unlocked

------------------------------------------------------------------------

# ⚙️ Installation

## Clone Repository

``` bash
git clone https://github.com/keshav62/LEARNING-MANAGEMENT-SYSTEM.git
```

## Install Dependencies

Backend

``` bash
cd server
npm install
```

Frontend

``` bash
cd client
npm install
```

## Run Application

Backend

``` bash
npm run server
```

Frontend

``` bash
npm run dev
```

------------------------------------------------------------------------

# 👨‍💻 Author
keshav kumar
**Keshav Singh**\
Full‑Stack Developer \| MERN Stack
