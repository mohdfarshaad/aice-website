import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.gsap) {
        const gsap = window.gsap;

        gsap.fromTo(
          ".hero-title",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
        );

        gsap.fromTo(
          ".hero-description",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
        );

        gsap.fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.9,
            ease: "back.out(1.7)",
          }
        );
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AICE
            </span>
          </h1>

          <h2 className="hero-subtitle text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
            Association of Innovative Computer Engineers
          </h2>

          <p className="hero-description text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A student-led initiative fostering innovation, collaboration, and
            technical excellence among computer engineering students at{" "}
            <strong>Majlis Polytechnic College</strong>
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("about")!
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")!
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
