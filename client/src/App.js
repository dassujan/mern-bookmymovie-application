// Import necessary components from the 'react-router-dom' library for routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import individual page components from their respective files
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

// Import CSS stylesheets to apply styles to the application
import "./stylesheets/alignments.css";
import "./stylesheets/sizes.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/custom.css";
import "./stylesheets/theme.css";

// Define the main functional component 'App' that represents the application
function App() {
  // Return the JSX code for the component
  return (
    <div>
      {/* Wrap the entire application with 'BrowserRouter' to enable routing */}
      <BrowserRouter>
        {/* Define the routes for the application using 'Routes' component */}
        <Routes>
          {/* Define the route for the home page. When the path is '/', render the 'Home' component */}
          {/* ProtectedRoute is a custom component that checks if the user is logged in and redirects to the login page if not */}
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />

          {/* Define the route for the login page */}
          {/* When the path is '/login', render the 'Login' component */}
          <Route path='/login' element={<Login />} />

          {/* Define the route for the registration page */}
          {/* When the path is '/register', render the 'Register' component */}
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Export the 'App' component as the default export of this file
export default App;