import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    
    userLogin(email, password)
    .then(() => {
      console.log('User Logged in successfully');
      navigate(location?.state ? location.state : '/');
    })
    .catch(err => {
      console.log(err.message);
    })
  };
  return (
    <div className="flex flex-col items-center bg-[#F3F3F3]">
      <Navbar />
      <div className="bg-white p-14 w-3/5">
        <h3 className="text-3xl font-semibold text-center pb-12 border-b">
          Login Your Account
        </h3>
        <div className="w-full">
          <div className="card">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Email address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input w-full bg-[#F3F3F3] rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input bg-[#F3F3F3] rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="py-3 rounded-md bg-[#403F3F] text-white"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">
              Don&#39;t have an account?{" "}
              <Link to={"/register"} className="text-[#F8605D]">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
