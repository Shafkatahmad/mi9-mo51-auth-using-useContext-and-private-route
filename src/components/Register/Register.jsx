import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  return (
    <div className="w-1/3 mx-auto">
      <div className="">
        <h2 className="text-2xl text-center">Register Now</h2>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className="ml-4 mb-4 text-center">
          Already have an account? Please
          <Link className="underline" to="/signIn">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
