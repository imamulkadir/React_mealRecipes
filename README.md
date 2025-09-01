# 🍽️ React Meal Recipes

A modern, responsive React application that allows users to explore and discover delicious recipes from around the world. Built with React Router for navigation and integrated with TheMealDB API for recipe data.

## ✨ Features

- **Recipe Discovery**: Browse through a vast collection of meals from TheMealDB API
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Recipe Details**: View detailed information about each meal including ingredients and instructions
- **Modern UI**: Clean and intuitive user interface built with Tailwind CSS
- **Navigation**: Seamless navigation between different sections using React Router
- **Mobile Menu**: Collapsible navigation menu for mobile devices

## 🛠️ Technologies Used

### Core Technologies

- **React 19.1.1** - Modern React with latest features
- **React Router DOM 7.8.2** - Client-side routing and navigation
- **Vite 7.1.2** - Fast build tool and development server

### Styling & UI

- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS processing

### Development Tools

- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript Support** - Type definitions for React

### Additional Libraries

- **LocalForage** - Offline data storage
- **Match Sorter** - Fuzzy string matching
- **Sort By** - Array sorting utilities

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/imamulkadir/React_mealRecipes.git
   cd React_mealRecipes
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── components/
│   ├── Contact/
│   │   └── Contact.jsx          # Contact page component
│   ├── Footer/
│   │   └── Footer.jsx           # Footer component
│   ├── Home/
│   │   └── Home.jsx             # Home page with hero section
│   ├── Layout/
│   │   └── Layout.jsx           # Main layout wrapper
│   ├── Meal/
│   │   └── Meal.jsx             # Individual meal card component
│   ├── MealDetails/
│   │   └── MealDetails.jsx      # Detailed meal view
│   ├── Meals/
│   │   └── Meals.jsx            # Meals listing page
│   └── Navbar/
│       └── Navbar.jsx           # Navigation component
├── assets/
│   └── react.svg               # React logo
├── App.jsx                     # Main App component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles
```

## 🎯 Key Features Explained

### 1. **Routing System**

The application uses React Router v7 with a nested routing structure:

- **Layout Route**: Wraps all pages with Navbar and Footer
- **Home Route**: Landing page with hero section
- **Meals Route**: Displays all available meals with data loading
- **Meal Details Route**: Shows detailed information for individual meals
- **Contact Route**: Contact information page

### 2. **Data Loading**

- Uses React Router's `loader` function for data fetching
- Integrates with TheMealDB API for recipe data
- Implements proper error handling and loading states

### 3. **Responsive Design**

- Mobile-first approach with Tailwind CSS
- Responsive grid layouts for meal cards
- Collapsible mobile navigation menu
- Adaptive typography and spacing

### 4. **Component Architecture**

- **Layout Component**: Provides consistent page structure
- **Navbar Component**: Responsive navigation with mobile menu
- **Meal Components**: Reusable card components for meal display
- **Home Component**: Landing page with feature highlights

## 🎨 UI/UX Features

### Navigation

- **Sticky Navigation**: Navbar stays at top during scroll
- **Active Link Styling**: Visual feedback for current page
- **Mobile Menu**: Hamburger menu for smaller screens
- **Smooth Transitions**: CSS transitions for better user experience

### Meal Display

- **Card Layout**: Clean card design for meal presentation
- **Image Optimization**: Proper image sizing and aspect ratios
- **Hover Effects**: Interactive elements with hover states
- **Grid System**: Responsive grid for optimal viewing

### Home Page

- **Hero Section**: Engaging welcome message and description
- **Feature Highlights**: Three-column layout showcasing benefits
- **Call-to-Action**: Clear navigation to meals section

## 🔧 API Integration

The application integrates with **TheMealDB API**:

- **Base URL**: `https://www.themealdb.com/api/json/v1/1/`
- **Endpoints Used**:
  - `search.php?s=` - Get all meals
  - `lookup.php?i={id}` - Get meal details by ID

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 React Hooks Used

- **useState**: Managing local component state (menu toggle, count)
- **useNavigate**: Programmatic navigation between routes
- **useLoaderData**: Accessing data from React Router loaders

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Imamul Kadir**

- GitHub: [@imamulkadir](https://github.com/imamulkadir)
- Repository: [React_mealRecipes](https://github.com/imamulkadir/React_mealRecipes)

## 🙏 Acknowledgments

- **TheMealDB** for providing the recipe API
- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool

## 📞 Contact

For any questions or suggestions, please reach out through the contact page or create an issue on GitHub.

---

⭐ **Star this repository if you found it helpful!**
