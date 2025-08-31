# Image Sharing Backend API

This project is a complete backend implementation for an **image-sharing platform**, similar to Instagram or Pinterest (basic version).  
It demonstrates authentication, authorization, and media-sharing features that are essential for modern social platforms.

## 🚀 Features
- **User Authentication & Authorization**  
  - JWT-based login/signup  
  - Secure password hashing with bcrypt  

- **Content Management**  
  - Upload and manage images with **Multer**  
  - Cloud-based image storage & optimization using **Cloudinary**  
  - Like, dislike, and comment system  
  - Reply to comments  

- **Social Features**  
  - Subscribe/unsubscribe to other users  
  - User profiles with activity feed  

- **Token Handling**  
  - Access tokens & refresh tokens for secure session handling  

- **Advanced Data Handling**  
  - **MongoDB Aggregation Pipelines** for advanced queries and analytics  
  - **Dynamic Data Rendering** for feeds and user activity  
  - **Model Integration** with Mongoose for relational-style data (Users ↔ Posts ↔ Comments)  

## 🛠️ Tech Stack
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- Multer for image upload handling  
- Cloudinary for media storage  
- JWT & bcrypt for authentication  

## 🎯 Purpose
This project was created as part of a **backend learning journey** to practice building scalable REST APIs with real-world features like authentication, media handling, pipelines, and relational data modeling.  
It simulates the backend of a modern **social media platform** where users can upload content, interact socially, and explore dynamic feeds.
