# Wayfare - Airbnb Clone

Wayfare is a full-stack web application inspired by Airbnb, allowing users to discover, list, and review properties. Built with Node.js, Express, MongoDB, and EJS, it features user authentication, image uploads, interactive maps, and a robust review system.

## Live Demo
[Live Link Placeholder] - *Replace with your deployed app link*

## Key Features

* **User Authentication:** Secure signup, login, and logout functionalities using Passport.js.
* **Property Listings:** Complete CRUD (Create, Read, Update, Delete) operations for property listings. Only listing owners can edit or delete their properties.
* **Image Uploads:** Seamless image uploading and storage integration using Multer and Cloudinary.
* **Reviews & Ratings:** Users can leave reviews and ratings on properties they've visited.
* **Interactive Maps:** Real-time geolocation and interactive maps for each property listing powered by Mapbox.
* **Data Validation:** Robust server-side data validation using Joi to ensure data integrity.
* **Session Management:** Secure user sessions stored in MongoDB using `connect-mongo`.
* **Flash Messages:** Intuitive user feedback with flash messages for success and error notifications.

## Tech Stack Used

### Frontend
* **HTML5 & CSS3**
* **JavaScript (ES6+)**
* **EJS (Embedded JavaScript templating)** - View Engine
* **Bootstrap / Custom CSS** - For responsive design (if applicable)
* **Mapbox GL JS** - Interactive maps

### Backend
* **Node.js** - Runtime environment
* **Express.js** - Web framework for routing and middleware
* **MongoDB & Mongoose** - NoSQL database and Object Data Modeling (ODM)
* **Passport.js** - Authentication middleware

### Tools & Services
* **Cloudinary** - Cloud image storage
* **Mapbox** - Geocoding API
* **Joi** - Schema description and data validation
* **dotenv** - Environment variable management

## Folder Structure

```text
📁 8. Airbnb
├── 📁 config/          # Database and external service configurations
├── 📁 controllers/     # Route logic and business operations (MVC architecture)
├── 📁 data/            # Seed data or static JSON files
├── 📁 middlewares/     # Custom Express middlewares (auth, error handling)
├── 📁 models/          # Mongoose schemas (Listing, User, Review)
├── 📁 public/          # Static assets (CSS, JS, images)
├── 📁 routes/          # Express route definitions
├── 📁 utils/           # Utility functions and custom error classes
├── 📁 views/           # EJS templates and layouts
│   ├── 📁 includes/    # Partials (navbar, footer)
│   ├── 📁 layouts/     # Boilerplate templates
│   ├── 📁 listings/    # Listing-related views
│   └── 📁 users/       # Authentication-related views
├── 📄 .env             # Environment variables (not in version control)
├── 📄 index.js         # Entry point of the application
├── 📄 package.json     # Project dependencies and scripts
└── 📄 README.md        # Project documentation
```

## How to Run it Locally

Follow these steps to get a local copy up and running on your machine.

### Prerequisites
Make sure you have the following installed:
* [Node.js](https://nodejs.org/) (v14 or higher recommended)
* [MongoDB](https://www.mongodb.com/) (running locally, or use a MongoDB Atlas URI)
* [Cloudinary Account](https://cloudinary.com/) (for image uploads)
* [Mapbox Account](https://www.mapbox.com/) (for maps)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd "8. Airbnb"
   ```

2. **Install all NPM dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory of your project. You will need to obtain API keys from Cloudinary and Mapbox, and set up your MongoDB connection.
   
   Add the following variables to your `.env` file:
   ```env
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_mapbox_public_token
   DB_URL=mongodb://127.0.0.1:27017/wayfare  # Or your MongoDB Atlas URL
   SECRET=your_super_secret_session_key
   ```

4. **(Optional) Seed the Database:**
   If you have a seed script (e.g., in the `data/` or `utils/` folder), you can run it to populate initial data.
   ```bash
   # Example: node data/seed.js 
   ```

5. **Start the server:**
   ```bash
   node index.js
   # or if you use nodemon: nodemon index.js
   ```

6. **View in Browser:**
   Open your web browser and navigate to:
   ```text
   http://localhost:8080
   ```
   *(Check your `index.js` file if your port is set to a different number, like 3000)*

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the ISC License.
