// Import necessary dependencies
import { message } from "antd"; // Component for displaying messages or notifications
import React, { useEffect, useState } from "react"; // React hooks for creating functional components and managing state
import { GetCurrentUser } from "../apicalls/users"; // Function to fetch current user's data through an API call
import { useNavigate } from "react-router-dom"; // Hook for programmatic navigation in a React application

// Function component to protect certain routes based on user authentication
function ProtectedRoute({ children }) {
  const navigate = useNavigate(); // Access the navigation function from react-router-dom
  const [user, setUser] = useState(null); // State to store the current user's data or null if not authenticated

  // Function to fetch the current user's data from the server
  const getCurrentUser = async () => {
    try {
      const response = await GetCurrentUser(); // Call the GetCurrentUser API function
      if (response.success) {
        // If API call is successful, set the user state with response data
        setUser(response.data);
      } else {
        // If API call fails, set the user state to null and display an error message
        setUser(null);
        message.error(response.message);
      }
    } catch (error) {
      // If there is an error in the API call, set the user state to null and display the error message
      setUser(null);
      message.error(error.message);
    }
  };

  // useEffect hook to fetch current user data when the component is mounted
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // Check if there is a token stored in the localStorage (user is authenticated)
      getCurrentUser(); // Fetch the current user's data from the server
    } else {
      // If no token is found (user is not authenticated), navigate to the login page
      navigate("/login");
    }
  }, []); // The empty dependency array ensures this effect runs only once after mounting

  // Render the content conditionally based on the user state
  return (
    user && ( // If the user state is not null (user is authenticated)
      <div>
        {user.name} {/* Display the user's name */}
        {children} {/* Render the child elements passed to the component */}
      </div>
    )
  );
}

export default ProtectedRoute; // Export the ProtectedRoute component