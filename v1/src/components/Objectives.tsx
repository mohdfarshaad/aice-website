import { useEffect } from "react";

const Objectives = () => {
  const objectives = [
    {
      icon: "💡",
      title: "Continuous Learning",
      description:
        "Promote a culture of continuous learning and innovation among students.",
    },
    {
      icon: "🎯",
      title: "Skill Development",
      description:
        "Organize workshops, tech talks, seminars, and coding events for practical learning.",
    },
    {
      icon: "🔬",
      title: "Research & Development",
      description:
        "Support student-led research, open-source contributions, and project development.",
    },
    {
      icon: "🤝",
      title: "Community Building",
      description:
        "Build a strong technical community within the college and beyond.",
    },
  ];

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
          ".objective-card",
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: "#objectives",
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
    <section id="objectives" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Objectives
          </h2>
          <p className="text-xl text-gray-600">What we aim to achieve</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="objective-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{objective.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {objective.title}
              </h3>
              <p className="text-gray-600">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;