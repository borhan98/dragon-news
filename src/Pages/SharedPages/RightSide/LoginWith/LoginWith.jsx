import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginWith = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Login With</h3>
      <div className="space-y-2">
        <button className="flex gap-2 items-center justify-center w-full rounded-lg py-2 border border-[#5B5B5B] text-[#5B5B5B] duration-300 hover:border-[#3367C8] hover:text-[#3367C8]">
          <FaGoogle />
          Login with Google
        </button>
        <button className="flex gap-2 items-center justify-center w-full rounded-lg py-2 border border-[#5B5B5B] text-[#5B5B5B] duration-300 hover:border-[#3367C8] hover:text-[#3367C8]">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginWith;
