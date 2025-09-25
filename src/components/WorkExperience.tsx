import { Briefcase, GraduationCap, Code, Download } from "lucide-react";
import { Button } from "./ui/button";
import dteLogo from "../assets/dtelogo.png";

const WorkExperience = () => {
  const workExperiences = [
    {
      company: "DTE Energy",
      position: "Software Engineer Intern",
      duration: "Feb. 2025 — Present",
      logoUrl: dteLogo
    },
    {
      company: "Annabel Inc.",
      position: "IT & Systems Engineer", 
      duration: "Aug. 2023 — Feb. 2025",
      logoUrl: "https://gracefoodmarket.net/wp-content/uploads/2020/12/grace-logo.png"
    },
    {
      company: "The Global Tech Experience",
      position: "Software Engineer Intern",
      duration: "May 2023 — Oct. 2023",
      logoUrl: "https://s3.us-west-1.amazonaws.com/images.jumpstart.me/frontend/careers/gca-globe-logo-navy.svg"
    },
  ];

  const education = [
    {
      school: "Wayne State University",
      degree: "B.S. Computer Science",
      duration: "2023 — 2027",
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Wayne_State_Warriors_primary_logo.svg/490px-Wayne_State_Warriors_primary_logo.svg.png?20221030011448"
    },
    {
      school: "South Lyon East High School",
      duration: "2019 — 2023",
      iconUrl: "https://cfunity-school-logos.nfhsnetwork.com/v1/bbb284add3_p952.png"
    }
  ];

  const technical = [
    {
      skill: "Python",
      iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
    },
    {
      skill: "Java",
      iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
    },
    {
      skill: "SQL",
      iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
    },
    {
      skill: "JavaScript",
      iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    },
    {
      skill: "TypeScript",
      iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
    },
    {
      skill: "HTML",
      iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
    },
    {
      skill: "CSS",
      iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
    },
    {
      skill: "Node.js",
      iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
    },
    {
      skill: "Terraform",
      iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Work Section */}
      <div className="rounded-2xl border border-portfolio-border/20 bg-portfolio-bg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-5 h-5 text-portfolio-text-muted" />
          <h3 className="text-lg font-semibold text-portfolio-text">Work</h3>
        </div>
        
        <div className="space-y-1">
          {workExperiences.map((work, index) => (
            <div key={index} className="flex items-center gap-4 rounded-xl px-3 py-2 hover:bg-portfolio-hover/40 transition-colors">
              <div className="w-10 h-10 bg-portfolio-hover rounded-lg flex items-center justify-center overflow-hidden border border-portfolio-border/30">
                {work.logoUrl ? (
                  <img
                    src={work.logoUrl}
                    alt={`${work.company} logo`}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <span className="text-lg">{work.logoUrl}</span>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-portfolio-text">{work.company}</h4>
                <p className="text-sm text-portfolio-text-muted">{work.position}</p>
                <p className="text-xs text-portfolio-text-muted mt-1">{work.duration}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="ghost" className="w-full mt-6 text-portfolio-text hover:bg-portfolio-surface/60 border border-portfolio-border/20">
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </Button>
      </div>

      {/* Education Section */}
      <div className="rounded-2xl border border-portfolio-border/20 bg-portfolio-bg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-5 h-5 text-portfolio-text-muted" />
          <h3 className="text-lg font-semibold text-portfolio-text">Education</h3>
        </div>
        
        <div className="space-y-1">
          {education.map((edu, index) => (
            <div key={index} className="flex items-center gap-4 rounded-xl px-3 py-2 hover:bg-portfolio-hover/40 transition-colors">
              <div className="w-10 h-10 bg-portfolio-hover rounded-lg flex items-center justify-center border border-portfolio-border/30 overflow-hidden">
                {edu.iconUrl ? (
                  <img
                    src={edu.iconUrl}
                    alt={`${edu.school} logo`}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <GraduationCap className="w-6 h-6 text-portfolio-text-muted" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-portfolio-text">{edu.school}</h4>
                <p className="text-sm text-portfolio-text-muted">{edu.degree}</p>
                <p className="text-xs text-portfolio-text-muted mt-1">{edu.duration}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="ghost" className="w-full mt-6 text-portfolio-text hover:bg-portfolio-surface/60 border border-portfolio-border/20">
          <Download className="w-4 h-4 mr-2" />
          Download Transcript
        </Button>
      </div>

      {/* Technical Section */}
      <div className="rounded-2xl border border-portfolio-border/20 bg-portfolio-bg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-5 h-5 text-portfolio-text-muted" />
          <h3 className="text-lg font-semibold text-portfolio-text">Technical</h3>
        </div>
        
        <div className="space-y-1">
          {technical.map((tech, index) => (
            <div key={index} className="flex items-center gap-4 rounded-xl px-3 py-2 hover:bg-portfolio-hover/40 transition-colors">
              <div className="w-10 h-10 bg-portfolio-hover rounded-lg flex items-center justify-center border border-portfolio-border/30 overflow-hidden">
                {tech.iconUrl ? (
                  <img
                    src={tech.iconUrl}
                    alt={`${tech.skill} logo`}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span className="text-lg">{tech.iconUrl}</span>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-portfolio-text">{tech.skill}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;