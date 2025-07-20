import "../styles/resume.css";

export default function Resume({ data }) {
  return (
    <div className="paper">
      <header>
        <h1>{data.personalInfo.name}</h1>
        <div className="details">
          <span>{data.personalInfo.email} </span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.address}</span>
        </div>
      </header>
      <main>
        {data.education.length > 0 && data.education[0].school !== "" && (
          <h2>Education</h2>
        )}
        {data.education.map((edu, index) => (
          <div key={index} className="entry">
            <div>
              <p>{edu.startDate ? `${edu.startDate} - ${edu.endDate}` : ""}</p>
              <p>{edu.location}</p>
            </div>
            <div>
              <p>
                <b>{edu.school}</b>
              </p>
              <p>{edu.degree}</p>
            </div>
          </div>
        ))}
        {data.experience.length > 0 && data.experience[0].company !== "" && (
          <h2>Professional experience</h2>
        )}

        {data.experience.map((exp, index) => (
          <div key={index} className="entry">
            <div>
              <p>{exp.startDate ? `${exp.startDate} - ${exp.endDate}` : ""}</p>
              <p>{exp.location}</p>
            </div>
            <div>
              <p>
                <b>{exp.company}</b>
              </p>
              <p>{exp.position}</p>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
