import React from "react";

const TeamCard = ({ name, role, image, onCardClick }) => {
  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    width: "350px",
    height: "300px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };

  const avatarStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "15px",
    border: "3px solid white",
    objectFit: "cover",
    transition: "transform 0.3s",
  };

  const nameStyle = {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const roleStyle = {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "14px",
    margin: "0",
  };

  return (
    <div
      style={cardStyle}
      onClick={onCardClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={image}
        alt={`${name}'s avatar`}
        style={avatarStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <h3 style={nameStyle}>{name}</h3>
      <p style={roleStyle}>{role}</p>
    </div>
  );
};

export default TeamCard;
