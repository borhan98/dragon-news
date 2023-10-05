import qZone1 from "../../../../assets/qZone1.png";
import qZone2 from "../../../../assets/qZone2.png";
import qZone3 from "../../../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-[#F3F3F3] py-4 px-2">
      <h3 className="text-xl font-bold mb-4">Q-Zone</h3>
      <div className="space-y-4">
        <figure>
            <img src={qZone1} alt="" />
        </figure>
        <figure>
            <img src={qZone2} alt="" />
        </figure>
        <figure>
            <img src={qZone3} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Qzone;
