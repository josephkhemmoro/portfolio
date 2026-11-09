import { ArrowUpRight } from "lucide-react";

const experience = [
  { company: "Siemens", role: "Software Developer Intern", dates: "June 2026 – Present" },
  { company: "Mango", role: "Software Developer Intern", dates: "Jan. 2026 – June 2026" },
  { company: "DTE Energy", role: "Software Developer Intern", dates: "Feb. 2025 – Jan. 2026" },
  { company: "Annabel Inc.", role: "IT & Systems Engineer", dates: "Aug. 2023 – Feb. 2025" },
  { company: "The Global Tech Experience", role: "Software Developer Intern", dates: "May 2023 – Oct. 2023" },
];

export default function WorkExperience() {
  return (
    <section aria-labelledby="experience">
      <h2 className="subsection-title" id="experience">Experience</h2>
      <ul className="experience-list">
        {experience.map(({ company, role, dates }) => (
          <li key={company}>
            <div><h3>{company}</h3><p>{role}</p></div>
            <p>{dates}</p>
          </li>
        ))}
      </ul>
      <p className="education-line">Wayne State University, B.S. Computer Science</p>
      <a className="portfolio-link mt-5" href="mailto:josephkhemmoro@gmail.com?subject=Resume%20request">
        Request my résumé <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
