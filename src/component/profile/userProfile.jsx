import "firebase/auth";
import { useUser } from "reactfire";

const UserProfile = () => {
  const user = useUser();
  return (
    <>
      {user.data && (
        <div>
          <p>Hola {user.data?.displayName}</p>
          <p>You're logined in now</p>
        </div>
      )}
    </>
  );
};

export default UserProfile;
