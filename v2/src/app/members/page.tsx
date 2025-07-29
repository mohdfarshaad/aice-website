import Image from "next/image";

export default function Members() {
  const aiceMembers = [
    {
      team: "AICE EXECUTIVE COMMITTEE",
      members: [
        {
          name: "Thoukheer",
          role: "Staff Advisor",
          image: "members/thoukheer.jpg",
        },
        { name: "Rasheed", role: "Secretary", image: "members/rasheed.jpg" },
        {
          name: "Muhsin",
          role: "Joint Secretary",
          image: "members/muhsin.jpg",
        },
        { name: "Rohan", role: "Treasurer", image: "members/rohan.jpeg" },
      ],
    },
    {
      team: "Content Team",
      members: [
        { name: "Sanith Krishnan", role: "Lead", image: "members/sanith.jpg" },
        { name: "Adwaith", role: "Member", image: "members/adwaith.jpg" },
        { name: "Samjas", role: "Member", image: "members/samjas.jpg" },
        { name: "Ajsal", role: "Member", image: "members/ajsal.jpg" },
      ],
    },
    {
      team: "Creative Team",
      members: [
        { name: "Jishad", role: "Lead", image: "members/jishad.jpg" },
        { name: "Sudharshan", role: "Member", image: "members/sudharshan.jpg" },
        {
          name: "Shamil Mubarak",
          role: "Member",
          image: "members/shamil-mubarak.jpg",
        },
        { name: "Rayyan", role: "Member", image: "members/rayyan.jpg" },
      ],
    },
    {
      team: "Technical Team",
      members: [
        { name: "Nihal", role: "Lead", image: "members/nihal.jpg" },
        { name: "Sufiyan", role: "Member", image: "members/sufiyan.jpg" },
        { name: "Fuad Sanin", role: "Member", image: "members/fuad.jpeg" },
        { name: "Ammar Khais", role: "Member", image: "members/ammar.jpg" },
      ],
    },
    {
      team: "Newsletter Team",
      members: [
        { name: "Hussain", role: "Lead", image: "members/hussain.jpg" },
        { name: "Shamrin", role: "Member", image: "members/shamrin.jpg" },
        { name: "Niranjana", role: "Member", image: "members/niranjana.jpg" },
        { name: "Famrin", role: "Member", image: "members/famrin.jpg" },
      ],
    },
    {
      team: "Publicity Team",
      members: [
        { name: "Sreenath", role: "Lead", image: "members/sreenath.jpg" },
        { name: "Sinan", role: "Member", image: "members/sinan.jpg" },
        { name: "Rajih", role: "Member", image: "members/rajih.jpg" },
        { name: "Rinsha", role: "Member", image: "members/rinsha.jpg" },
        { name: "Shamil", role: "Member", image: "members/shamil.jpeg" },
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
              {team.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    {/* Replace with real image src later */}
                    <Image
                      src={`/images/${member.image}`}
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
