import {
  ArrowRight,
  Calendar,
  Rocket,
  Handshake,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="bg-cover bg-center text-white py-20"
        style={{
          width: "100%",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/mjpc2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Association of Innovative
            <span className="block text-yellow-400">Computer Engineers</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-8">
            Bridging academics and industry through innovation, collaboration,
            and real-world experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              View Events
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* About & Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About AICE
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            AICE is a student-led initiative of the Computer Engineering
            Department at Majlis Polytechnic College. We empower students
            through mentorship, hands-on projects, and professional engagement,
            actively maintained and led by students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lightbulb size={32} className="text-yellow-500" />}
              title="Creative Thinking"
              description="Fostering innovation through projects, discussions, and problem-solving activities."
              bgColor="bg-yellow-100"
            />
            <FeatureCard
              icon={<Handshake size={32} className="text-red-500" />}
              title="Collaboration"
              description="Connecting peers through events and team-based initiatives for shared learning."
              bgColor="bg-red-100"
            />
            <FeatureCard
              icon={<Rocket size={32} className="text-indigo-500" />}
              title="Career Launchpad"
              description="Building real-world skills and industry exposure through training and internships."
              bgColor="bg-indigo-100"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="24" label="Active Members" />
          <StatBox value="50+" label="Events Hosted" />
          <StatBox value="10+" label="Partner Companies" />
          <StatBox value="8" label="Years Strong" />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Don’t miss out on the latest opportunities to grow and connect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              date="March 15, 2025"
              title="AI & ML Workshop"
              description="Explore the latest advancements in Artificial Intelligence and Machine Learning with hands-on guidance."
              gradient="from-blue-500 to-purple-600"
            />
            <EventCard
              date="March 22, 2025"
              title="Tech Career Fair"
              description="Meet top recruiters and learn how to navigate your career journey in tech."
              gradient="from-green-500 to-teal-600"
            />
            <EventCard
              date="April 5, 2025"
              title="Hackathon 2025"
              description="Compete in a 48-hour challenge to build and showcase real-world solutions."
              gradient="from-orange-500 to-red-600"
            />
          </div>

          <div className="mt-10">
            <Link
              href="/events"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// FeatureCard Component
function FeatureCard({
  icon,
  title,
  description,
  bgColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div
        className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// StatBox Component
function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-blue-200">{label}</div>
    </div>
  );
}

// EventCard Component
function EventCard({
  date,
  title,
  description,
  gradient,
}: {
  date: string;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className={`bg-gradient-to-r ${gradient} p-4 text-white`}>
        <div className="flex items-center gap-2 mb-1">
          <Calendar size={18} />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-3">{description}</p>
        <Link
          href="/events"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
