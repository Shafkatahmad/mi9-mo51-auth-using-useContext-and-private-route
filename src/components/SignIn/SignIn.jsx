import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const SignIn = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleSignin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // sign in user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log("ERROR", error.message));
  };
  // console.log("hello");
  return (
    <div className="w-1/2 mx-auto">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl font-bold">Login now!</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignin} className="fieldset">
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="ml-4 mb-4 text-center">
            New to this website? Please{" "}
            <Link className="underline" to="/register">
              Register
            </Link>
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="btn-ghost cursor-pointer"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
