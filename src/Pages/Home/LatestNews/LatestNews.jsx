import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="bg-[#F3F3F3] flex p-4">
            <button className="bg-[#D72050] py-2 px-4 mr-2 text-white">Latest</button>
            <Marquee speed={90} className="flex items-center">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default LatestNews;