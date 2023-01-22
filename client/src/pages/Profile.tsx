import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profile</h1>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Profile;
