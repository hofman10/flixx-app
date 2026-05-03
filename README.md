# 🎬 Flixx - Movie & TV Show Discovery App

A modern, responsive web application for discovering popular movies and TV shows using The Movie Database (TMDB) API. Built with vanilla JavaScript demonstrating clean architecture, modular code organization, and best practices for frontend development.

## 🌐 Live Demo

**[View Live Demo](https://flixx-movie-search.netlify.app/)**

## ✨ Features

- 🎥 **Browse Popular Content** - View trending movies and TV shows
- 🔍 **Advanced Search** - Search functionality with pagination support
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎡 **Dynamic Slider** - Now playing movies carousel with Swiper.js
- 📊 **Detailed Information** - Comprehensive movie/show details including ratings, budget, cast
- ⭐ **User Ratings** - Display TMDB ratings and vote averages
- 🎨 **Modern UI** - Clean interface with smooth animations and transitions
- 🚀 **Performance Optimized** - Lazy loading images, error handling, loading states

## 🛠️ Technologies Used

### Frontend

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)** - Modular architecture with ES6 modules
  - Async/Await for API calls
  - Destructuring and template literals
  - Arrow functions
  - Module imports/exports

### Libraries & APIs

- **[TMDB API](https://www.themoviedb.org/documentation/api)** - Movie and TV show data
- **[Swiper.js](https://swiperjs.com/)** - Touch slider functionality
- **[Font Awesome](https://fontawesome.com/)** - Icon library

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A TMDB API key (free)
- Local web server (optional but recommended)

### Installation

1. **Clone or download the repository**

   ```bash
   git clone [your-repo-url]
   cd flixx-app
   ```

2. **Get your TMDB API key**
   - Visit [The Movie Database](https://www.themoviedb.org/)
   - Create a free account
   - Navigate to Settings → API
   - Request an API key
   - Copy your API Key (v3 auth)

3. **Configure the API key**
   - Open `js/config/api.config.js`
   - Replace the existing API key with yours:

   ```javascript
   export const API_CONFIG = {
     apiKey: "YOUR_API_KEY_HERE",
     // ...
   };
   ```

4. **Launch the application**

   **Option A: Using Python**

   ```bash
   # Python 3
   python -m http.server 8000
   ```

   **Option B: Using Node.js**

   ```bash
   npx serve
   ```

   **Option C: Using VS Code**
   - Install the "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

5. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🎯 Key Features Demonstrated

### Professional Code Architecture

✅ **Modular Design** - Separation of concerns with clear file organization  
✅ **ES6 Modules** - Import/export for better code organization  
✅ **Service Layer** - Dedicated API service for all HTTP requests  
✅ **Component Pattern** - Reusable UI components  
✅ **Utility Functions** - DRY principle with shared helpers

### Modern JavaScript Practices

✅ **Async/Await** - Clean asynchronous code  
✅ **Error Handling** - Try/catch blocks and user feedback  
✅ **JSDoc Comments** - Professional code documentation  
✅ **Constants Management** - Centralized configuration  
✅ **Code Reusability** - Utility functions to avoid duplication

### UI/UX Best Practices

✅ **Loading States** - Spinner during API calls  
✅ **Error Handling** - User-friendly error messages  
✅ **Responsive Design** - Mobile-first approach  
✅ **Accessibility** - ARIA labels and semantic HTML  
✅ **SEO Optimized** - Meta descriptions and Open Graph tags  
✅ **Lazy Loading** - Images load on demand  
✅ **Smooth Scrolling** - Enhanced user experience

## 🔒 Security Notes

⚠️ **API Key Security**: The current implementation has the API key in the source code for development purposes. For production:

1. Move API key to environment variables
2. Use a backend proxy to hide the key
3. Never commit `.env` files to version control

## 🚀 Performance Optimizations

- ✅ Lazy loading images with `loading="lazy"`
- ✅ Async script loading with `defer`
- ✅ CSS custom properties for efficient styling
- ✅ Font preconnections for faster loading
- ✅ Minimal external dependencies

## 🧪 Future Enhancements

- [ ] Implement local storage for favorites
- [ ] Add movie trailers with YouTube API
- [ ] Include cast information with photos
- [ ] Add filter and sort options
- [ ] Implement infinite scroll
- [ ] Add dark/light mode toggle
- [ ] Create PWA with offline support
- [ ] Add TypeScript for type safety

## 📝 Code Quality

### Best Practices Implemented

- ✅ Descriptive variable and function names
- ✅ Comprehensive JSDoc comments
- ✅ Consistent code formatting
- ✅ Error handling throughout
- ✅ No console.log in production code
- ✅ Semantic HTML5 elements
- ✅ BEM-like CSS naming conventions
- ✅ Mobile-first responsive design

## 🤝 Contributing

This is a portfolio project, but suggestions and improvements are welcome!
