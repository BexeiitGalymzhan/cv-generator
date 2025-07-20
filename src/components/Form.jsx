import { useState } from "react";
import Person from "./PersonInfo";
import Education from "./Education";
import Experience from "./Experience";
import Resume from "./ResumePaper";
import "../styles/form.css";

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    education: [
      { school: "", degree: "", startDate: "", endDate: "", location: "" },
    ],
    experience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        desc: "",
      },
    ],
  });
  return (
    <>
      <div className="wrapper">
        <div className="info">
          <div className="card">
            <h2>Personal Info</h2>
            <Person
              data={formData.personalInfo}
              onChange={(updated) =>
                setFormData((prev) => ({
                  ...prev,
                  personalInfo: { ...prev.personalInfo, ...updated },
                }))
              }
            />
          </div>
          <div className="card">
            <h2>Education</h2>
            {formData.education.map((edu, index) => (
              <div key={index}>
                <Education
                  data={edu}
                  index={index}
                  onChange={(updated, i) =>
                    setFormData((prev) => {
                      const updatedEducation = [...prev.education];
                      updatedEducation[i] = {
                        ...updatedEducation[i],
                        ...updated,
                      };
                      return { ...prev, education: updatedEducation };
                    })
                  }
                />
                <button
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      education: prev.education.filter((_, i) => i !== index),
                    }))
                  }
                >
                  🗑️
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  education: [
                    ...prev.education,
                    {
                      school: "",
                      degree: "",
                      startDate: "",
                      endDate: "",
                      location: "",
                    },
                  ],
                }));
              }}
            >
              + Education
            </button>
          </div>
          <div className="card">
            <h2>Experience</h2>
            {formData.experience.map((exp, index) => (
              <div key={index}>
                <Experience
                  data={exp}
                  index={index}
                  onChange={(updated, i) =>
                    setFormData((prev) => {
                      const updatedExp = [...prev.experience];
                      updatedExp[i] = {
                        ...updatedExp[i],
                        ...updated,
                      };
                      return { ...prev, experience: updatedExp };
                    })
                  }
                />
                <button
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      experience: prev.experience.filter((_, i) => i !== index),
                    }))
                  }
                >
                  🗑️
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  experience: [
                    ...prev.experience,
                    {
                      company: "",
                      position: "",
                      startDate: "",
                      endDate: "",
                      location: "",
                      desc: "",
                    },
                  ],
                }));
              }}
            >
              + Experience
            </button>
          </div>
        </div>
        <div className="cv">
          <Resume data={formData} />
        </div>
      </div>
    </>
  );
}
