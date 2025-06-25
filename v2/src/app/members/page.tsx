import Image from "next/image";

export default function Members() {
  const aiceMembers = [
    {
      team: "AICE EXECUTIVE COMMITTEE",
      members: [
        { name: "Thoukheer", role: "Staff Advisor" },
        { name: "Rasheed", role: "Secretary" },
        { name: "Muhsin", role: "Joint Secretary" },
        { name: "Rohan", role: "Treasurer" },
      ],
    },
    {
      team: "Content Team",
      members: [
        { name: "Sanith Krishnan", role: "Lead" },
        { name: "Adwaith", role: "Member" },
        { name: "Samjas", role: "Member" },
        { name: "Ajsal", role: "Member" },
      ],
    },
    {
      team: "Creative Team",
      members: [
        { name: "Jishad", role: "Lead" },
        { name: "Sudharshan", role: "Member" },
        { name: "Shamil Mubarak", role: "Member" },
        { name: "Rayyan", role: "Member" },
      ],
    },
    {
      team: "Technical Team",
      members: [
        { name: "Nihal", role: "Lead" },
        { name: "Sufiyan", role: "Member" },
        { name: "Fuad Sanin", role: "Member" },
        { name: "Ammar Khais", role: "Member" },
      ],
    },
    {
      team: "Newsletter Team",
      members: [
        { name: "Hussain", role: "Lead" },
        { name: "Shamrin", role: "Member" },
        { name: "Niranjana", role: "Member" },
        { name: "Famrin", role: "Member" },
      ],
    },
    {
      team: "Publicity Team",
      members: [
        { name: "Sreenath", role: "Lead" },
        { name: "Sinan", role: "Member" },
        { name: "Rajih", role: "Member" },
        { name: "Rinsha", role: "Member" },
        { name: "Shamil", role: "Member" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          AICE Executive Committee
        </h1>

        {aiceMembers.map((team, teamIdx) => (
          <div key={teamIdx} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              {team.team}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {team.members.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    {/* Replace with real image src later */}
                    <Image
                      src="/images/placeholder.jpeg"
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
