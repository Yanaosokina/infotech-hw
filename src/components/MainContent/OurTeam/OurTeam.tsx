import Person1 from "assets/images/person1.png";
import Person2 from "assets/images/person2.png";
import Person3 from "assets/images/person3.png";
import Person4 from "assets/images/person4.png";
import Person5 from "assets/images/person5.png";
import Person6 from "assets/images/person6.png";

import "./Ourteam.css";

export function OurTeam() {
  const teamPairs = [
    { name: "Максим", position: "Administrator", image: Person1 },
    { name: "Максим", position: "Administrator", image: Person2 },
    { name: "Максим", position: "Administrator", image: Person3 },
    { name: "Максим", position: "Administrator", image: Person4 },
    { name: "Максим", position: "Administrator", image: Person5 },
    { name: "Максим", position: "Administrator", image: Person6 },
  ];

  const renderTeamPairs = () => {
    const pairs: JSX.Element[] = [];
    for (let i = 0; i < teamPairs.length; i += 2) {
      pairs.push(
        <div className="ourteam__pair" key={i}>
          <div className="ourteam__person">
            <div className="person">
              <img
                className="person__img"
                src={teamPairs[i].image}
                alt={`person${i + 1}`}
              />
              <div className="person__details">
                <h3 className="person__name">{teamPairs[i].name}</h3>
                <p className="person__position">{teamPairs[i].position}</p>
              </div>
            </div>
          </div>
          {teamPairs[i + 1] !== undefined && (
            <div className="ourteam__person">
              <div className="person">
                <img
                  className="person__img"
                  src={teamPairs[i + 1].image}
                  alt={`person${i + 2}`}
                />
                <div className="person__details">
                  <h3 className="person__name">{teamPairs[i + 1].name}</h3>
                  <p className="person__position">
                    {teamPairs[i + 1].position}
                  </p>
                </div>
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
