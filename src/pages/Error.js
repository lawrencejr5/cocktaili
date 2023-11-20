import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="error">
      <h2>You are lost my friend</h2>
      <Link to="/">
        <button>Back to homepage....</button>
      </Link>
    </section>
  );
};

export default Error;
