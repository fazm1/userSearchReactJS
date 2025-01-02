import "./userCard.css";
function UserCard(props) {
  const { userItem } = props;
  return (
    <>
      <div className="userCard">
        <img src={userItem.image} className="userImage" />
        <div className="cardContent">
          <p className="username">Usersname: {userItem.username}</p>
          <p className="email">Email: {userItem.email}</p>
          <p className="phone">Phone: {userItem.phone}</p>
        </div>
        <img className="verification" src={userItem.role === "user"? "src/assets/star-solid.svg" : "src/assets/star-solid2.svg"} />
      </div>
    </>
  );
}

export default UserCard;
