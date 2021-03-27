import UserProfile from "./component/profile/userProfile";
import Auth from "./component/auth/Auth";
import Navigation from "./component/Navigation/navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <h1 className="display-1">Firebase + React </h1>
        <UserProfile />
        <Auth />
      </div>
    </>
  );
}

export default App;
