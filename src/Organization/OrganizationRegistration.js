const OrganizationRegistration = ({ activeUser }) => {
  return (
    <div className="OrganizationRegistration">
      <form className="create">
        <h2>{activeUser} Registration</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="register">Register</button>
      </form>
    </div>
  );
};

export default OrganizationRegistration;
