import PropTypes from "prop-types";
import { FaShareAlt } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const { _id, title, details, image_url, author } = news;
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-[#F3F3F3] p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <figure className="w-12 h-12 rounded-full overflow-hidden">
            <img src={author?.img} alt="" />
          </figure>
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <span>{author.published_date}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <a href="#">
            <BiBookmark />
          </a>
          <a href="#">
            <FaShareAlt />
          </a>
        </div>
      </div>
      <div className="p-4">
        <h2>{title}</h2>
        <figure className="my-4">
          <img src={image_url} alt="Thumbnai Photo" />
        </figure>
        <p>{details.slice(0, 200)}...</p>
        {/* <p className="text-justify">{readMore ? `${details.slice(0, 200)}...` : details}</p> */}
        <Link to={`/newsDetail/${_id}`}>
          <button className="text-[#FF8C47]">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default News;

News.propTypes = {
  news: PropTypes.object.isRequired,
};
