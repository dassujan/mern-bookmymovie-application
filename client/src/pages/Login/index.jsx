// Importing the necessary libraries and components
import React from "react"; // Importing the React library, used for creating React components
import { Form } from "antd"; // Importing the 'Form' component from the 'antd' library, a UI component library for React
import Button from "../../components/Button"; // Importing a custom 'Button' component from a file located at '../../components/Button'
import { Link } from "react-router-dom"; // Importing the 'Link' component from the 'react-router-dom' library, used for navigation in a React application

// Defining the 'LOGIN' functional component
function LOGIN() {
  // Creating a function 'onFinish' that will be called when the form is submitted successfully
  const onFinish = (values) => {
    console.log("Success:", values); // Output the form values to the console
  };

  // Rendering the component's UI using JSX
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      {" "}
      {/* Styling the container div */}
      <div className="card p-3 w-400">
        {" "}
        {/* Styling the login card */}
        <h1 className="text-xl mb-1"> BookMyMovie - LOGIN </h1>{" "}
        {/* Displaying the heading */}
        <hr /> {/* Horizontal line */}
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          {" "}
          {/* Creating a form with a vertical layout */}
          {/* Form item for the 'Email' field */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <input type="email" /> {/* Input field for the email */}
          </Form.Item>
          {/* Form item for the 'Password' field */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password" /> {/* Input field for the password */}
          </Form.Item>
          <div className="flex flex-col mt-2 gap-1">
            {" "}
            {/* Styling the buttons and link in a flex column */}
            <Button fullWidth title="LOGIN" type="submit" />{" "}
            {/* Using the custom 'Button' component with the title "LOGIN" and submit type */}
            <Link to="/register" className="text-primary">
              {" "}
              {/* Creating a link to the registration page */}
              Don't have an account? Register {/* Text content for the link */}
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

// Exporting the 'LOGIN' component as the default export
export default LOGIN;