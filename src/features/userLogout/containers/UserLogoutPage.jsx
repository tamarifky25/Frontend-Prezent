import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const UserLogoutPage = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default UserLogoutPage;
