// Importing the necessary libraries and components
import React from "react"; // Importing the React library, used for creating React components
import { Form } from "antd"; // Importing the 'Form' component from the 'antd' library, a UI component library for React
import Button from "../../components/Button"; // Importing a custom 'Button' component from a relative file path
import { Link } from "react-router-dom"; // Importing the 'Link' component from 'react-router-dom', used for navigation in React applications

// Defining the 'Register' functional component
function Register() {
  // Callback function for form submission
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  // JSX code representing the UI of the 'Register' component
  return (
    // Outer container for the entire UI, applying styles for centering content and setting a background color
    <div className="flex justify-center h-screen items-center bg-primary">
      {/* Card-like container for the registration form, applying padding and setting width */}
      <div className="card p-3 w-400">
        {/* Heading for the registration form */}
        <h1 className="text-xl mb-1">BookMyMovie - REGISTER</h1>
        {/* Horizontal line to separate the heading from the form */}
        <hr />

        {/* Ant Design 'Form' component used for creating the registration form */}
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          {/* Form field for user's name */}
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            {/* Text input field for the user's name */}
            <input type="text" />
          </Form.Item>

          {/* Form field for user's email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            {/* Text input field for the user's email */}
            <input type="email" />
          </Form.Item>

          {/* Form field for user's password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            {/* Text input field for the user's password */}
            <input type="password" />
          </Form.Item>

          {/* Container for the 'REGISTER' button and the login link */}
          <div className="flex flex-col mt-2 gap-1">
            {/* Custom 'Button' component for user registration */}
            <Button fullWidth title="REGISTER" type="submit" />

            {/* 'Link' component for navigation to the login page */}
            <Link to="/login" className="text-primary">
              Already have an account? Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

// Exporting the 'Register' component as the default export
export default Register;