import { Helmet } from "react-helmet-async";
import Header from "../SharedPages/Header/Header";
import LeftSide from "../SharedPages/LeftSide/LeftSide";
import Navbar from "../SharedPages/Navbar/Navbar";
import RightSite from "../SharedPages/RightSide/RightSite";
// import DragonNews from "./DragonNews/DragonNews";
import LatestNews from "./LatestNews/LatestNews";
import { useLoaderData } from "react-router-dom";
import News from "./News/News";

const Home = () => {
  const allNews = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Dragon News | Home</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={
            "https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg"
          }
        />
      </Helmet>
      <Header />
      <LatestNews />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-6 mt-6">
        <div className="border-r">
          <LeftSide />
        </div>
        <div className="col-span-2">
          <h3 className="text-2xl font-semibold">Dragon News Home</h3>
          <div className="space-y-4 max-h-screen overflow-scroll">
            {allNews.map((news) => (
              <News key={news._id} news={news} />
            ))}
          </div>
        </div>
        <div className="border">
          <RightSite />
        </div>
      </div>
    </div>
  );
};

export default Home;
