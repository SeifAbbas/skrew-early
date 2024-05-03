import dummyData from "../dummyData.json";
import { Link, useParams } from "react-router-dom";
import { Divider } from "@mui/material";


const LearnMore = () => {
    const { id } = useParams();
    return ( 
        <div className="learn-more">       
            {dummyData.requests.map((item) => {
                if (item.Category === "Clothes" && item.id === id) {
                    return (
                        <div className="learn-more-container">
                            <img src={item.ImageSrc} alt="" />
                            <h1>{item.Name}</h1>
                            <h1>{item.Category}</h1>
                            <h1>{item.Current_Inventory}</h1>
                            <h1>{item.Gender}</h1>
                            <h1>{item.Age}</h1>
                            <h1>{item.Season}</h1>
    
                        </div>
                    );

                }
                else if (item.Category === "School Supplies" && item.id === id) {
                    return (
                        <div className="learn-more-container">
                            <img src={item.ImageSrc} alt="" />
                            <h1>{item.Name}</h1>
                            <h1>{item.Category}</h1>
                            <h1>{item.Current_Inventory}</h1>
                            <h1>{item.Type}</h1>
    
                        </div>
                    );
                }
                else if (item.Category === "Food" && item.id === id) {
                    return (
                        <div className="learn-more-container">
                            <img src={item.ImageSrc} alt="" />
                            <h1>{item.Name}</h1>
                            <h1>{item.Category}</h1>
                            <h1>{item.Current_Inventory}</h1>
                            <h1>{item.Type}</h1>
    
                        </div>
                    );
                }
                else if (item.Category === "Medical Supplies" && item.id === id) {
                    return (
                        <div className="learn-more-container">
                            <img src={item.ImageSrc} alt="" />
                            <h1>{item.Name}</h1>
                            <h1>{item.Category}</h1>
                            <h1>{item.Current_Inventory}</h1>
                            <h1>{item.Type}</h1>
    
                        </div>
                    );
                }
                else if (item.Category === "Toys" && item.id === id) {
                    return (
                        <div className="learn-more-container">
                            <img src={item.ImageSrc} alt="" />
                            <h1>{item.Name}</h1>
                            <h1>{item.Category}</h1>
                            <h1>{item.Current_Inventory}</h1>
                            <h1>{item.Gender}</h1>
                            <h1>{item.Age}</h1>
                            <h1>{item.Type}</h1>

                        </div>
                    );
                }
                <Divider component="li" />

            })}
            <Link to="/Home/Requests">
                <button className="back-button">Back</button>
            </Link>

</div>
);
};

 
export default LearnMore;