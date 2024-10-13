import React from "react";

const Button = (props) => {
  const { children = "default", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="overflow-y-auto h-48 w-72 flex flex-col gap-y-2 p-3 bg-white rounded-lg shadow-md">
        <Button variant="bg-blue-700">Login</Button>
        <Button variant="bg-slate-700">Logout</Button>
        <Button variant="bg-green-700">Sign Up</Button>
        <Button variant="bg-purple-700">Profile</Button>
        <Button variant="bg-yellow-700">Settings</Button>
      </div>
    </div>
  );
}

export default App;
