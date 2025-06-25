import './Skills.css';

const skillSet = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express.js","Figma", "C", "C++", "Python", "SQL"];

export default function Skills() {
    return (
        <div>
            <section className="skills" id="skills">
            <h2 className="section-title skills-title">Skills</h2>

            <div className="skills-grid">
                {skillSet.map((skill, index) => (
                <div key={index} className="skill-circle">
                    {skill}
                </div>
                ))}
            </div>
            </section>
        </div>
    )
}
