import FindUsOn from "./FindUsOn/FindUsOn";
import LoginWith from "./LoginWith/LoginWith";
import Qzone from "./Qzone/Qzone";

const RightSite = () => {
    return (
        <div className="p-4 space-y-6 max-h-screen overflow-scroll">
            <LoginWith />
            <FindUsOn />
            <Qzone />
        </div>
    );
};

export default RightSite;