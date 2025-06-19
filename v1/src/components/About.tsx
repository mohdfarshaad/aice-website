import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        typeof window !== "undefined" &&
        window.gsap &&
        window.ScrollTrigger
      ) {
        const gsap = window.gsap;
        gsap.registerPlugin(window.ScrollTrigger);

        gsap.fromTo(
          "#about",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: "#about",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About AICE</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>AICE</strong> is a student-led initiative aimed at
              fostering innovation, collaboration, and technical excellence
              among computer engineering students.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to bridge the gap between academic learning and
              industry expectations by creating opportunities for hands-on
              experience, mentorship, and real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;