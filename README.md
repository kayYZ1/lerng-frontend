
# LERNG - Frontend

Lerng is a platform that allows users to learn Linux for free through interactive courses, quizzes, and learning paths. This repository hosts the backend for the Lerng application, handling core logic, data management, user authentication, and communication with the frontend and database.


## Features

- **User Authentication & Authorization**: Secure sign-up, login, password recovery, and user roles.
- **Course Management**: CRUD operations for courses, including course creation, editing, and deletion(soon) by instructors.
- **Interactive Learning**: Users can follow learning paths with lessons, quizzes, and challenges.
- **Progress Tracking**: Store user progress from quizes and sum it up per course.
- **Search & Filtering**: Search and filter for specific courses.
- **Admin Dashboard**: Manage users, courses, and reports (admin privileges required).


## Demo

https://lerng.netlify.app/




## Tech Stack

**Client:** React, Redux-Toolkit-Query, Vitest, MUI/Joy, Cloudinary



## Environment Variables

**Cloudinary**

`VITE_UPLOAD_PRESET`

`VITE_UPLOAD_PRESET_COURSE`

`VITE_API_URL`

**Production and development api url**

`VITE_PROD_URL`

`VITE_DEV_URL`
## Run Locally

Clone the project

```bash
  git clone https://github.com/kayYZ1/lerng-frontend.git
```

Go to the project directory

```bash
  cd lerng-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Running Tests

To run tests, run the following command. 

Currently covering only reset/forgot password forms.

```bash
  npm run test
```

