import React from "react";
import "./ourteam.css";
import Person1 from "../../assets/images/person1.png";
import Person2 from "../../assets/images/person2.png";
import Person3 from "../../assets/images/person3.png";
import Person4 from "../../assets/images/person4.png";
import Person5 from "../../assets/images/person5.png";
import Person6 from "../../assets/images/person6.png";

export default function OurTeam() {
  // Массив пар персон
  const teamPairs = [
    { name: "Максим", position: "Administrator", image: Person1 },
    { name: "Максим", position: "Administrator", image: Person2 },
    { name: "Максим", position: "Administrator", image: Person3 },
    { name: "Максим", position: "Administrator", image: Person4 },
    { name: "Максим", position: "Administrator", image: Person5 },
    { name: "Максим", position: "Administrator", image: Person6 }
  ];

  // Формирование блоков ourteam__persons из пар персон
  const renderTeamPairs = () => {
    const pairs: JSX.Element[] = [];
    for (let i = 0; i < teamPairs.length; i += 2) {
      pairs.push(
        <div className="ourteam__persons" key={i}>
          <div className="person-info">
            <img src={teamPairs[i].image} alt={`person${i + 1}`} />
            <div className="person-details">
              <h3 className="person-name">{teamPairs[i].name}</h3>
              <p className="person-position">{teamPairs[i].position}</p>
            </div>
          </div>
          {teamPairs[i + 1] !== undefined && (
            <div className="person-info">
              <img src={teamPairs[i + 1].image} alt={`person${i + 2}`} />
              <div className="person-details">
                <p className="person-name">{teamPairs[i + 1].name}</p>
                <span className="person-position">{teamPairs[i + 1].position}</span>
              </div>
            </div>
          )}
        </div>
      );
    }
    return pairs;
  };

  return (
    <section className="ourteam">
      <div className="ourteam__wrapper">
        <h2 className="ourteam__title">Our team</h2>
        <div className="ourteam__content">{renderTeamPairs()}</div>
      </div>
    </section>
  );
}
