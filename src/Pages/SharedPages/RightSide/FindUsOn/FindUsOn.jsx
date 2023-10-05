import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Find Us On</h3>
      <div className="border rounded-lg">
        <a href="#" className="flex gap-2 items-center pl-4 py-3 border-b w-full">
          <span className="text-[#0666FD] bg-gray-300 p-2 rounded-full"><FaFacebook /></span>
          Facebook
        </a>
        <a href="#" className="flex gap-2 items-center pl-4 py-3 border-b w-full">
          <span className="text-[#58A7DE] bg-gray-300 p-2 rounded-full"><FaTwitter /></span>
          Twitter
        </a>
        <a href="#" className="flex gap-2 items-center pl-4 py-3 border-b w-full">
          <span className="text-[#EE9994] bg-gray-300 p-2 rounded-full"><FaInstagram /></span>
          Instagram
        </a>
      </div>
    </div>
  );
};

export default FindUsOn;
