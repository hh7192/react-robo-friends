import React from "react";
import "./Profile.css";
import users from "../../database";
import {useParams} from "react-router-dom";
import NotFound from "../../components/notfound/NotFound";

import {getUserById} from "../../database";

const Profile = () => {
  const params = useParams();
  const paramsId = Number(params.id);

  const thisUser = getUserById(users, paramsId);
  // console.log(thisUser);

  if (!thisUser) return <NotFound />;

  return (
    <div className='profileContainer'>
      <div className='profileBox'>
        <div className='imgBox'>
          <img src={`https://robohash.org/${paramsId}?set=set2&size=200x200`} />
        </div>
        <div className='profileContent'>
          <div className='profileDetails'>
            <h2>
              {thisUser.name} <br />
              <div>Username: {thisUser.username}</div>
              <div>Email: {thisUser.email}</div>
            </h2>
            <div className='profileData'>
              <h3>
                {thisUser.phone}
                <br />
                <span>Phone</span>
              </h3>
              <h3>
                {thisUser.website}
                <br />
                <span>Website</span>
              </h3>
            </div>
            <div className='profileData'>
              <h3>
                {thisUser.address.city}, {thisUser.address.street},{" "}
                {thisUser.address.suite}
                <br />
                <span>Address</span>
              </h3>
              <h3>
                {thisUser.address.zipcode}
                <br />
                <span>Zipcode</span>
              </h3>
            </div>
            <div className='profileData'>
              <h3>
                {thisUser.company.name}
                <br />
                <span>Company</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div className='profileBox'>
<img
  className='avatar'
  src={`https://robohash.org/${paramsId}?set=set2&size=200x200`}
/>
0        <h1>{thisUser.name}</h1>
<div className='userInfo'>
  <span>User Name:</span>
  <h2>{thisUser.username}</h2>
  <h3>{thisUser.email}</h3>
  <h4>{thisUser.address.city}</h4>
  <h4>{thisUser.address.street}</h4>
  <h4>{thisUser.address.suite}</h4>
  <h4>{thisUser.address.zipcode}</h4>
</div>
</div> */
}
