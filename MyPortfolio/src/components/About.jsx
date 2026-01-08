import Section from "./Section";

const About = () => {
    return (
        <Section id="about" className="bg-secondary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                    I am a results-oriented Software Engineer with a deep understanding of core computer science principles and a passion for building scalable, efficient systems. My journey in tech is driven by a curiosity to solve complex problems and a commitment to writing clean, maintainable code.
                </p>
                <p>
                    With strong foundations in <strong>C, Java, and Python</strong>, I have expanded my expertise to modern web technologies, specializing in the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js). I don't just write code; I design solutions that bridge the gap between user needs and technical feasibility.
                </p>
                <p>
                    Beyond traditional development, I am actively exploring the intersection of <strong>Artificial Intelligence</strong> and software engineering, integrating LLMs and ML models into practical applications. I believe in continuous learning and adapting to the ever-evolving tech landscape to deliver high-quality software products.
                </p>
            </div>
        </Section>
    );
};

export default About;
