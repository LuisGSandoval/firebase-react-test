import "firebase/auth";
import { useUser } from "reactfire";
import { Nav, NavLink, NavItem } from "reactstrap";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";

const Navigation = () => {
  const user = useUser();
  const fb = useFirebaseApp();

  const logout = () => {
    fb.auth().signOut();
    // .then(() => window.location.reload());
  };

  return (
    <Nav fill>
      <NavItem>
        <NavLink href="#">FireReactBoots</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>{user.data && user.data?.email}</NavLink>
      </NavItem>

      <NavItem>
        <button outline onClick={logout} className="btn btn-secondary">
          log out
        </button>
      </NavItem>
    </Nav>
  );
};

export default Navigation;
