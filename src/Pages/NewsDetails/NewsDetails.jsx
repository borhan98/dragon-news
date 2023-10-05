import { useLoaderData, useParams } from "react-router-dom";
import Header from "../SharedPages/Header/Header";
import RightSite from "../SharedPages/RightSide/RightSite";
import Navbar from "../SharedPages/Navbar/Navbar";

const NewsDetails = () => {
    const { id } = useParams();
    const allNews = useLoaderData();
    const newsToShow = allNews.filter(news => id === news._id );
    const { image_url, title, details } = newsToShow[0];
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
                <div className="md:col-span-2 lg:col-span-3">
                    <h3 className="text-2xl font-semibold mb-6">Dragon news</h3>
                    <div className="border p-4 rounded-xl">
                        <figure>
                            <img src={image_url} alt="News Picture" />
                        </figure>
                        <h3 className="text-2xl text-bold my-4">{title}</h3>
                        <p>{details}</p>
                    </div>
                </div>
                <div>
                    <RightSite />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;