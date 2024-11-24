import React from "react";

const About = () => {
  const quickFacts = [
    { label: "Values", value: "Integrity, Excellence, and Discipline" },
    { label: "Diversity", value: "We celebrate cultural and intellectual diversity." },
    { label: "Subjects", value: "Mathematics, Sciences, Humanities, Languages, and Arts" },
    { label: "Transition to University", value: "100% of our students progress to top universities." },
    { label: "Mean Score", value: "B+ (High Performance) in National Exams" },
    { label: "Enrollment", value: "1,200 students with a capacity of 1,500" }
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Mbita High School</h2>
        <p className="text-lg mb-8">
          Established in 1966, Mbita High School stands as a symbol of academic excellence and character development. Set against the
          picturesque backdrop of Lake Victoria in Homa Bay County, we are proud of our heritage and our commitment to shaping young men
          who excel in both academics and life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="bg-white p-6 shadow-lg rounded-md">
              <h3 className="font-semibold text-xl mb-2">{fact.label}</h3>
              <p>{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
