import dummyData from "../dummyData.json";
import { Link, useParams } from "react-router-dom";
import { Divider, Button, Box } from "@mui/material";

const LearnMore = () => {
  const { id } = useParams();
  const idNum = Number(id);

  return (
    <div className="learn-more" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {dummyData.requests.map(
        (item) =>
          item.ID === idNum && (
            <div key={item.ID} className="learn-more-container" style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
              <img src={item.ImageSrc} alt="" style={{ width: '100%', maxWidth: '300px', height: 'auto', marginLeft: "10px" }} />
              <h1>{item.Name}</h1>
              {item.Category && <h1>{item.Category}</h1>}
              {item.Current_Inventory && <h1>{"Quantity Needed: " + item.Current_Inventory}</h1>}
              {((item.Gender && <h1>{item.Gender}</h1>) || (item.Type && <h1>{"Type: " + item.Type}</h1>))}
              {((item.Age && <h1>{item.Age}</h1>) || (item.Season && <h1>{item.Season}</h1>))}
            </div>
          )
      )}
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Link to="/Home/Requests" style={{ textDecoration: 'none' }}>
          <Button variant="contained" className="back-button">
            Back
          </Button>
        </Link>
        <Button variant="contained" className="donate-button">
          Donate
        </Button>
      </Box>
    </div>
  );
};

export default LearnMore;
