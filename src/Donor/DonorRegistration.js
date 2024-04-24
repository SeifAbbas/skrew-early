const DonorRegistration = ({ activeUser }) => {
  return (
    <div className="DonorRegistration">
      <form className="create">
        <h2>{activeUser} Registration</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="register">register</button>
      </form>
    </div>
  );
};

export default DonorRegistration;
