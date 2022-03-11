import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import userAPI from "../services/users";
import { UserContext } from "../contexts/UserContext";
import productAPI from "../services/products";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { user } = useContext(UserContext);
  const { username } = useParams();

  useEffect(() => {
    userAPI.get(username).then((user) => {
      console.log(user.user);
      setProfile(user.user);
    });
  }, []);

  return (
    <>
      <div>Hi {profile.username}!</div>
    </>
  );
};

export default Profile;
