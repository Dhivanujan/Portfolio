import Section from "./Section";

const experiences = [
    {
        title: "Software Engineer Intern",
        company: "Tech Solutions Inc.",
        period: "June 2024 - Present",
        description: "Contributed to the development of high-traffic web applications using React and Node.js. Optimized database queries in MongoDB, reducing response times by 30%. Collaborated with cross-functional teams to implement new dashboard features."
    },
    {
        title: "Freelance Full Stack Developer",
        company: "Self-Employed",
        period: "Jan 2023 - May 2024",
        description: "Designed and deployed custom websites for local businesses. Managed end-to-end development lifecycle, from client requirements to deployment on AWS. Implemented SEO best practices improving client visibility."
    },
    {
        title: "Computer Science Student",
        company: "University of Technology",
        period: "2021 - 2025",
        description: "Focusing on Algorithms, Data Structures, and Software Engineering. Active member of the Coding Club and organizer of university hackathons."
    }
];

const Experience = () => {
    return (
        <Section id="experience">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience & Education</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-border last:border-0 pb-8 last:pb-0">
                        {/* Timeline Dot */}
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded inline-block w-fit mt-1 sm:mt-0">{exp.period}</span>
                        </div>
                        <h4 className="text-lg font-medium text-primary mb-2">{exp.company}</h4>
                        <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
