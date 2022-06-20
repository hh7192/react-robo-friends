import React, {useEffect, useState} from "react";
import "./Profile.css";
import {useParams} from "react-router-dom";
import NotFound from "../../components/notfound/NotFound";
import {getUserById} from "../../getUsers";
import Loading from "../../components/loading/Loading";

const Profile = () => {
  // FETCHING DATA
  const [user, setUser] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [hasFound, setHasFound] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => {
        if (response.status >= 400) {
          setHasFound(false);
        }
        return response.json();
      })
      .then((data) => {
        return setUser(data), setIsLoad(true);
      });
  }, []);

  // GETTING EVERY USER BY ID FROM USERS ARRAY
  const params = useParams();
  const paramsId = Number(params.id);
  const thisUser = getUserById(user, paramsId);

  if (!isLoad)
    return (
      <div>
        <Loading />
      </div>
    );
  else if (!hasFound) return <NotFound />;
  else {
    return (
      <div className='profileContainer'>
        <div className='profileBox'>
          <div className='imgBox'>
            <img
              src={`https://robohash.org/${paramsId}?set=set2&size=200x200`}
            />
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
  }
};

export default Profile;
