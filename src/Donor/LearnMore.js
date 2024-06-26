import dummyData from "../dummyData.json";
import SimpleMap from "../Utils/Maps";

import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { useState } from "react";

const LearnMore = ({ setOrgNotificationList, idNum }) => {
  const [inputValue, setInputValue] = useState(""); // State to manage input value
  const [inventory, setInventory] = useState(0);
  const handleInputChange = (event) => {
    const value = event.target.value; // Get the input value
    setInputValue(value); // Update the input value in state
  };
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  // const { id } = useParams();
  // const idNum = card.ID;
  console.log(idNum);
  const handleDonate = () => {
    setIsPopoverVisible(!isPopoverVisible);
    setInventory(inputValue);
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

  // I want to display the donate button only if the input value is greater than 0 and less than the current inventory

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
              {![
                "Blood Donations",
                "Medical Visit",
                "Teaching Classes",
              ].includes(item.Category) ? (
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
              ) : (
                <SimpleMap
                  activeUser={"Donor"}
                  center={{
                    lat: item.Location.latitude,
                    lng: item.Location.longitude,
                  }}
                />
              )}
              <h1>{item.Name}</h1>
              {item.Category && <h1>{item.Category}</h1>}
              {item.Current_Inventory && (
                <h1>
                  {"Quantity Needed: " +
                    parseInt(item.Current_Inventory + -inventory)}{" "}
                </h1>
              )}
              {item.PatientName && <h1>{item.PatientName}</h1>}
              {(item.Gender && <h1>{item.Gender}</h1>) ||
                (item.Type && <h1>{"Type: " + item.Type}</h1>) ||
                (item.Author && <h1>{item.Author}</h1>) ||
                (item.Subject && <h1>{item.Subject}</h1>) ||
                (item.Blood && <h1>{item.Blood}</h1>)}
              {(item.Age && <h1>{item.Age}</h1>) ||
                (item.Season && <h1>{item.Season}</h1>) ||
                (item.Summary && <h1>{item.Summary}</h1>) ||
                (item.NumberofStudents && (
                  <h1>{"Number Of Students: " + item.NumberofStudents}</h1>
                ))}
              {item.HospitalName && <h1>{item.HospitalName}</h1>}
              {(item.HospitalGovernorate && (
                <h1>{item.HospitalGovernorate}</h1>
              )) ||
                (item.TechGovernorate && <h1>{item.TechGovernorate}</h1>) ||
                (item.Language && <h1>{item.Language}</h1>)}
              {(item.HospitalArea && <h1>{item.HospitalArea}</h1>) ||
                (item.TechArea && <h1>{item.TechArea}</h1>) ||
                (item.Edition && <h1>{item.Edition}</h1>)}
              {(item.HospitalAddress && <h1>{item.HospitalAddress}</h1>) ||
                (item.TechAddress && <h1>{item.TechAddress}</h1>)}
              {item.Weight && <h1>{"Weight: " + item.Weight}</h1>}
              {item.CaseDes && <h1>Case Description: {item.CaseDes}</h1>}
              {item.Category !== "Blood Donations" &&
                item.Category !== "Teaching Classes" &&
                item.Category !== "Medical Visit" && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h1 style={{ marginRight: "10px" }}>
                      How many will you donate ?
                    </h1>
                    <input
                      style={{ marginTop: "20px",padding: "5px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      width: "90px",
                      // fontSize: "16px",
                      // outline: "none", 
                    }}
                      type="number"
                      placeholder="Quantity"
                      min={1}
                      max={item.Current_Inventory}
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
            </div>
          )
      )}
      {dummyData.requests.map(
        (item) =>
          item.ID === idNum && (
            <div>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                {/* <Link to="/Home/Requests" style={{ textDecoration: "none" }}>
                  <Button variant="contained" className="back-button">
                    Back
                  </Button>
                </Link> */}
                {item.Category !== "Blood Donations" &&
                  item.Category !== "Teaching Classes" &&
                  item.Category !== "Medical Visit" &&
                  (!item.Current_Inventory ||
                    (item.Current_Inventory &&
                      inputValue > 0 &&
                      inputValue <= item.Current_Inventory)) && (
                    <Link
                      to="/Home/Requests"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        className="donate-button"
                        onClick={handleDonate}
                      >
                        Donate
                      </Button>
                      {isPopoverVisible && <div className="popover">Donation Completed</div>}
                    </Link>
                  )}

                {[
                  "Blood Donations",
                  "Teaching Classes",
                  "Medical Visit",
                ].includes(item.Category) && (
                  <Link to="/Home/Requests" style={{ textDecoration: "none" }}>
                    <Button
                      disabled={
                        (item.Category === "Medical Visit" &&
                          dummyData.DonorSignIn.role === "Teacher") ||
                        (item.Category === "Teaching Classes" &&
                          dummyData.DonorSignIn.role === "Doctor")
                      }
                      variant="contained"
                      className="donate-button"
                      onClick={handleDonate}
                    >
                      Fulfill
                    </Button>
                    {isPopoverVisible && <div className="popover">Case Fulfilled</div>}
                  </Link>
                )}
              </Box>
            </div>
          )
      )}
    </div>
  );
};

export default LearnMore;
