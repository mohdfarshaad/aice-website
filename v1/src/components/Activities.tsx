import { useEffect } from "react";

const Activities = () => {
  const activities = [
    {
      icon: "⚡",
      title: "Technical Workshops and Hackathons",
      description:
        "Hands-on learning experiences with cutting-edge technologies",
    },
    {
      icon: "🎤",
      title: "Industry Expert Talks and Panel Discussions",
      description:
        "Direct interaction with industry professionals and thought leaders",
    },
    {
      icon: "🏆",
      title: "Coding Competitions and Project Expos",
      description: "Showcase your skills and compete with fellow developers",
    },
    {
      icon: "🔗",
      title: "Open Source and Community Projects",
      description:
        "Collaborate on meaningful projects that impact the community",
    },
    {
      icon: "💼",
      title: "Soft Skills and Career Development Sessions",
      description:
        "Prepare for your professional journey with essential life skills",
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
          ".activity-card",
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: "#activities",
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
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Activities
          </h2>
          <p className="text-xl text-gray-600">
            What we do to achieve our goals
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="activity-card bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{activity.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;