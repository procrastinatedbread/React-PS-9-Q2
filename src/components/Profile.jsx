import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

const Profile = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <div>
      <img src={profile.img} alt="" height="200px" width="200px" />
      <p>{profile.name}</p>
      <p>{profile.bio}</p>
    </div>
  );
};
export default Profile;
