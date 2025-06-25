import { Calendar, MapPin, Users, Clock } from "lucide-react";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Hub Conference Center",
      attendees: 45,
      description:
        "Deep dive into the latest AI technologies and hands-on ML projects. Perfect for beginners and intermediate developers.",
      status: "upcoming",
      category: "Workshop",
    },
    {
      id: 2,
      title: "Tech Career Fair",
      date: "March 22, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Center",
      attendees: 120,
      description:
        "Connect with top tech companies and explore career opportunities. Bring your resume and network with industry leaders.",
      status: "upcoming",
      category: "Career",
    },
    {
      id: 3,
      title: "Hackathon 2025",
      date: "April 5, 2025",
      time: "48 Hours",
      location: "AICE Headquarters",
      attendees: 80,
      description:
        "48-hour coding challenge with amazing prizes and networking opportunities. Form teams and build innovative solutions.",
      status: "upcoming",
      category: "Competition",
    },
    {
      id: 4,
      title: "Cloud Computing Seminar",
      date: "February 28, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      attendees: 200,
      description:
        "Comprehensive overview of cloud technologies including AWS, Azure, and Google Cloud Platform.",
      status: "completed",
      category: "Seminar",
    },
    {
      id: 5,
      title: "Women in Tech Panel",
      date: "February 14, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Tech University Auditorium",
      attendees: 85,
      description:
        "Inspiring panel discussion featuring successful women leaders in technology sharing their experiences.",
      status: "completed",
      category: "Panel",
    },
  ];

  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "completed");

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-xl text-blue-100">
              Join our exciting events and workshops to enhance your skills and
              network with fellow engineers
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Upcoming
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>

                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{event.attendees} registered</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Past Events
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden opacity-75"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        Completed
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-500 mb-4">{event.description}</p>

                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{event.attendees} attended</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
