import dummyData from "../dummyData.json";
import { Link, useParams } from "react-router-dom";
import { Divider, Button, Box } from "@mui/material";

const LearnMore = ({ setOrgNotificationList }) => {
  const { id } = useParams();
  const idNum = Number(id);

  const handleDonate = () => {
    setOrgNotificationList((prevNotifications) => {
      // Find the max ID in the current list
      const maxId = Math.max(
        ...prevNotifications.map((notification) => notification.id)
      );
      // Add a new notification with an ID that is one greater than the max ID
      return [
        ...prevNotifications,
        {
          id: maxId + 1,
          content: "Your donation request was chosen by Joe !!",
          date: "5-5-2024",
        },
      ];
    });
  };

  return (
    <div
      className="learn-more"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {dummyData.requests.map(
        (item) =>
          item.ID === idNum && (
            <div
              key={item.ID}
              className="learn-more-container"
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <img
                src={item.ImageSrc}
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "auto",
                  marginLeft: "10px",
                }}
              />
              <h1>{item.Name}</h1>
              {item.Category && <h1>{item.Category}</h1>}
              {item.Current_Inventory && (
                <h1>{"Quantity Needed: " + item.Current_Inventory}</h1>
              )}
              {(item.Gender && <h1>{item.Gender}</h1>) ||
                (item.Type && <h1>{"Type: " + item.Type}</h1>)}
              {(item.Age && <h1>{item.Age}</h1>) ||
                (item.Season && <h1>{item.Season}</h1>)}
            </div>
          )
      )}
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Link to="/Home/Requests" style={{ textDecoration: "none" }}>
          <Button variant="contained" className="back-button">
            Back
          </Button>
        </Link>
        <Button
          variant="contained"
          className="donate-button"
          onClick={handleDonate}
        >
          Donate
        </Button>
      </Box>
    </div>
  );
};

export default LearnMore;
