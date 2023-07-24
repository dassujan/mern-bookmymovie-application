// Importing the necessary libraries and components
import React from "react"; // Importing the React library, used for creating React components
import { Button } from "antd"; // Importing the 'Button' component from the 'antd' library, a UI component library for React

// Defining the 'Register' functional component
function Register() {
  return (
    // Using JSX to return the component's UI
    <div className="flex justify-center h-screen items-center">
      {/* Rendering the 'Button' component with the type set to "primary" */}
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

// Exporting the 'Register' component as the default export
export default Register;