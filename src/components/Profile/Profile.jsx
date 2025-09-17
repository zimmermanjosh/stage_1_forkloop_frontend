import SideBar from "../SideBar/SideBar.jsx";
import "./Profile.css";

const Profile = ({
  onSelectedCard,
  onCreateModal,
  onEditProfile,
  onSignOut,
  cards,
  onCardLike,
}) => {
  console.log("!!Profile");
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar onEditProfile={onEditProfile} onSignOut={onSignOut} />
      </section>
      <section className="profile__recipes">
        <div className="profile__content">
          <h2>Your Recipe Collection</h2>
          <p>Your saved recipes will appear here once you add some!</p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
