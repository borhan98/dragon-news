import { Link } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {

  const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const checkbox = form.get('checkbox');
        console.log(name, photo, email, password, checkbox);

        createUser(email, password)
        .then(res => {
          console.log(res.user);
          updateUserProfile(name, photo)
          .then(() => {
            console.log('Profile Updated');
          })
          .catch(err => {
            console.log(err.message);
          })
        })
        .catch(err => {
          console.log(err.message);
        })
    }

  return (
    <div className="flex flex-col items-center bg-[#F3F3F3]">
        <Navbar />
      <div className="bg-white p-14 w-3/5">
        <h3 className="text-3xl font-semibold text-center pb-12 border-b">
          Register Your Account
        </h3>
        <div className="w-full">
          <div className="card">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input w-full bg-[#F3F3F3] rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo URL"
                  className="input w-full bg-[#F3F3F3] rounded-md"
                  required
                />
              </div>
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
              <div className="mt-4 flex gap-2 items-center">
                <input type="checkbox" name="checkbox" id="checkbox"/>
                <label htmlFor="checkbox">Accept Terms & Conditions</label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="py-3 rounded-md bg-[#403F3F] text-white"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="text-center">Already have an account? <Link to={"/login"} className="text-[#F8605D]">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
