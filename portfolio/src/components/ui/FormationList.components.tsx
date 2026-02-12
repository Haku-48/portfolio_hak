// This is a formation List
import formations from "../../assets/data/formation.json";

function FormationList() {
  return (
    <div className="formation_list">
      <h3>{formations.length == 1 ? "Ma formation" : "Mes formations"}</h3>
      {formations.map((formation) => (
        <div className="formation" key={formation.name}>
          <div>
            <div className="formation_title">
              <span>{formation.name}</span>, <span>{formation.school}</span>
            </div>
            <div className="formation_dates">
              <span>{formation.start}</span> - <span>{formation.end}</span>
            </div>
            <div className="formation_goals">
              <ul>
                {formation.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="formation_place">
              <h4>Lieu : {formation.place}</h4>
              <iframe
                src={formation.map_link_place}
                width="200"
                height="200"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="formation_sentence">{formation.sentence}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default FormationList;
