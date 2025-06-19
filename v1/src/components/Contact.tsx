import { useEffect } from "react";

const Contact = () => {
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
          "#contact",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: "#contact",
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
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Connect with Us
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Stay updated and get involved with AICE
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <p className="text-gray-600">Email us at</p>
                  <a
                    href="mailto:mjpcaice@gmail.com"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    mjpcaice@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🏫</span>
                </div>
                <div>
                  <p className="text-gray-600">Located at</p>
                  <p className="text-lg font-semibold text-gray-800">
                    Majlis Polytechnic College
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;