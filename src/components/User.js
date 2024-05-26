import React from "react";
// ce composant affiche les informations d'un utilisateur
const User = ({name,username,email,website}) => {
  return (
    <div className="card w-96 bg-primary text-primary-content m-5">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>@{username}</p>
        <p>{email}</p>
        <div className="card-actions justify-end">
          <button className="btn">{website}</button>
        </div>
      </div>
    </div>
  );
};

export default User;
