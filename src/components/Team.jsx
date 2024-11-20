import React, { useState } from "react";
import TeamCard from "./Teamcard";

const Modal = ({ isOpen, onClose, data, onNavigate }) => {
  if (!isOpen || !data) return null;

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#222",
    color: "white",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    width: "800px",
    height:"500px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    gap:"5px",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  };

  const visibleModalStyle = {
    ...modalStyle,
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "15px",
    right: "25px",
    fontSize: "28px",
    cursor: "pointer",
    color: "white",
  };

  const navButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "20px",
    color: "white",
    background: "rgba(255, 255, 255, 0.1)",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    padding: "10px",
    zIndex: 1001,
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={visibleModalStyle}>
        <span style={closeButtonStyle} onClick={onClose}>
          &times;
        </span>
        <button
          style={{ ...navButtonStyle, left: "-50px" }}
          onClick={() => onNavigate("prev")}
        >
          &#8249;
        </button>
        <button
          style={{ ...navButtonStyle, right: "-50px" }}
          onClick={() => onNavigate("next")}
        >
          &#8250;
        </button>
        <img
          src={data.image}
          alt={`${data.name}'s avatar`}
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            marginBottom: "15px",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
            border:"2px solid white"
          }}
        />
        <h2 style={{ textAlign: "center" }}>{data.name}</h2>
        <p style={{ textAlign: "center", fontSize: "19px" }}>{data.role}</p>
        <p style={{ textAlign: "center", fontSize: "17px", color: "#aaa" }}>
          This is a placeholder description for {data.name}.
        </p>
      </div>
    </>
  );
};

const Team = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const handleNavigate = (direction) => {
    if (direction === "prev") {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setSelectedIndex((prevIndex) =>
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const selectedMember = selectedIndex !== null ? teamMembers[selectedIndex] : null;

  const containerStyle = {
    backgroundColor: "rgba(25, 28, 34, 0.1)",
    padding: "50px 20px",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    maxWidth: "1200px",
    margin: "auto",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "40px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    color: "white",
    fontSize: "28px",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Meet Our Core and Sub-Core Team</h2>
      <div style={cardContainerStyle}>
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            onCardClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <Modal
        isOpen={selectedIndex !== null}
        onClose={closeModal}
        data={selectedMember}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

const teamMembers = [
  {
   name: "Sourabh Kumar Verma",
   role: "President",
   image:"../../public/teamimg/sourabh.jpg"
  },
  {
   name: "Ramannya Srivastava",
   role: "VP of Events",
   image:"../../public/teamimg/ramannya.png"
  },
  {
   name: "Sahas Saxena",
   role: "VP of Projects",
   image:"../../public/teamimg/sahas.jpg"
  },
  {
   name: "Sharmada S",
   role: "Secretary",
   image:"../../public/teamimg/sharmada.webp"
  },
  {
   name: "Lakshay",
   role: "Domain Head of Web Development",
   image:"../../public/teamimg/lakshya.png"
  },
  {
   name: "Manohar R",
   role: "Co-Domain Head of Web Development",
   image:"../../public/teamimg/manohar.png"
  },
  {
   name: "Jain Darshan",
   role: "Co-Domain Head of Web Development",
   image:"../../public/teamimg/darshanjain.jpg"
  },
  {
   name: "Bhuvan CS",
   role: "Domain Head of CP",
   image: "../../public/teamimg/bhuvan.jpeg",
 },
  {
   name: "Rishita",
   role: "Co-Domain Head of CP",
   image: "../../public/teamimg/rishita.jpg",
 },
  {
   name: "Nirmayi",
   role: "Co-Domain Head of CP",
   image: "../../public/teamimg/nirmayi.jpg",
 },
  {
   name: "Divyanshu",
   role: "Co-Domain Head of CP",
   image: "../../public/teamimg/divyanshu.jpg",
 },
  {
   name: "Sooraj Sridhar",
   role: "AI/ML and Data Science",
   image: "../../public/teamimg/sooraj.jpeg",
 },
  {
   name: "Varsha BS",
   role: "AI/ML and Data Science",
   image: "../../public/teamimg/varsha.jpg",
 },
  {
   name: "Sukhi",
   role: "AI/ML and Data Science",
   image: "../../public/teamimg/suki.jpg",
 }, 
  {
   name: "Sirisha M",
   role: "Editorial and PR",
   image: "../../public/teamimg/srisha.jpg",
 },
  {
   name: "Shreya VR",
   role: "Editorial and PR",
   image: "../../public/teamimg/shreya.jpg",
 },
  {
   name: "Prashasthi",
   role: "Editorial and PR",
   image: "../../public/teamimg/prashasti.jpg",  
 },
  {
   name: "Diksha",
   role: "Editorial and PR",
   image: "../../public/teamimg/diksha.jpg",  
 },
  {
   name: "Sumit Sharma",
   role: "Design and Vidio editing",
   image: "../../public/teamimg/sumit.png",  
 },
  {
   name: "Omesh Singh",
   role: "Design and Vidio editing",
   image: "../../public/teamimg/omesh.jpeg",  
 },
  {
   name: "Aum Jadhav",
   role: "Design and Vidio editing",
   image: "../../public/teamimg/aum.png",  
 },
  {
   name: "Ankitha",
   role: "Design and Vidio editing",
   image: "../../public/teamimg2/ankita.jpeg",  
 },
  {
   name: "Bhumika",
   role: "Design and Vidio editing",
   image: "../../public/teamimg2/bhumika.jpg",  
 },
  {
   name: "Chinmayi",
   role: "Design and Vidio editing",
   image: "../../public/teamimg2/chinmayi.jpg",  
 },
  {
   name: "Padmaja",
   role: "Design and Vidio editing",
   image: "../../public/teamimg2/padmaja.jpg",  
 },
  {
   name: "Shwehta BS",
   role: "Event coordinator and management",
   image: "../../public/teamimg/shweta.jpg",  
 },
  {
   name: "Bindhu Sree",
   role: "Event coordinator and management",
   image: "../../public/teamimg/bindushree.jpg",  
 },
  {
   name: "Harshita K",
   role: "Event coordinator and management",
   image: "../../public/teamimg2/harshita.jpeg",  
 },
  {
   name: "Diya Patel",
   role: "Event coordinator and management",
   image: "../../public/teamimg2/diya.jpeg",  
 },
  {
   name: "Harshita B",
   role: "Event coordinator and management",
   image: "../../public/teamimg2/harshita.jpg",  
 },
  {
   name: "Apeksha",
   role: "Marketing",
   image: "../../public/teamimg/apeksha.jpeg",  
 },
  {
   name: "Sheik Noor",
   role: "Marketing",
   image: "../../public/teamimg/sheik.JPG",  
 },
  {
   name: "Aditha Kumar",
   role: "Marketing",
   image: "https://random.imagecdn.app/500/150",    //no image
 },
  {
   name: "Anupam",
   role: "Marketing",
   image: "../../public/teamimg2/anupam.jpg"  
 },
  {
   name: "Prarthana",
   role: "Marketing",
   image: "../../public/teamimg2/parthana.jpg"  
 },
  {
   name: "Ashutosh",
   role: "Marketing",
   image: "../../public/teamimg/ashu.png"  
 },
  {
   name: "Akash Misha",
   role: "Marketing",
   image: "../../public/teamimg2/akash.png"  
 },
  {
   name: "Rachana N",
   role: "Marketing",
   image: "../../public/teamimg2/rachana.jpg"  
 },
  {
   name: "Vishnu Prakash",
   role: "Marketing",
   image: "../../public/teamimg2/vishnu.JPG"  
 },
  {
   name: "Amit",
   role: "Marketing",
   image: "../../public/teamimg2/amit.jpg"  
 },
 
 
 ];
 

export default Team;
