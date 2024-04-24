import { AiOutlineHeart } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";

function RegisterButton({ userType, isActive, onClick }) {
  const iconMap = {
    Donor: <AiOutlineHeart />,
    Organization: <BsBuilding />,
  };

  const buttonClass = isActive ? "active-button" : "register-button";

  return (
    <div className="RegisterButton">
      <button className={buttonClass} onClick={onClick}>
        <span className="icon"> {iconMap[userType]} </span>
        <span className="text"> {userType}</span>
      </button>
    </div>
  );
}

const SideNavBar = ({ activeUser, handleRegisterClick }) => {
  return (
    <div className="switch-buttons">
      <RegisterButton
        userType="Donor"
        isActive={activeUser === "Donor"}
        onClick={() => handleRegisterClick("Donor")}
      />
      <RegisterButton
        userType="Organization"
        isActive={activeUser === "Organization"}
        onClick={() => handleRegisterClick("Organization")}
      />
    </div>
  );
};

export default SideNavBar;
