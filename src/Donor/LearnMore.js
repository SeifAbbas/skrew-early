import dummyData from "../dummyData.json";
import { Link, useParams } from "react-router-dom";
import { Divider } from "@mui/material";

const LearnMore = () => {
  const { id } = useParams();
  const idNum = Number(id);

  return (
    <div className="learn-more">
      {dummyData.requests.map(
        (item) =>
          item.ID === idNum && (
            <>
              <div className="learn-more-container">
                <img src={item.ImageSrc} alt="" />
                <h1>{item.Name}</h1>
                <h1>{item.Category}</h1>
                <h1>{item.Current_Inventory}</h1>
                <h1>{item.Gender || item.Type}</h1>
                <h1>{item.Age || item.Season}</h1>
              </div>
              <Divider component="li" />
            </>
          )
      )}
      <Link to="/Home/Requests">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default LearnMore;
