import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/UseContext/UseContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="d-flex justify-content-center shadow h-100">
      <div className="mt-5 text-center">
        <img src={user?.photoURL} width="340px" className="rounded" alt="" />
        <h3>Name: {user?.displayName}</h3>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
