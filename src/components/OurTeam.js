import regina from "../images/team/regina.png";
import justin from "../images/team/justin.png";
import sam from "../images/team/sam.png";
import rana from "../images/team/rana.png";

import TeamMember from "./TeamMember";

const teamMembers = [
  {
    image: regina,
    name: "Regina Donovan",
    location: "Atlanta, GA",
    email: "reginadonovan191@gmail.com",
    linkedin: "https://www.linkedin.com/in/rg-donovan/",
    github: "https://github.com/rgdonovan",
    website: ""
  },
  {
    image: justin,
    name: "Justin Lo",
    location: "Vancouver, BC",
    email: "justinkevinhl@gmail.com",
    linkedin: "https://www.linkedin.com/in/justinkevinheilo/",
    github: "https://github.com/justinnnlo",
    website: ""
  },
  {
    image: sam,
    name: "Sam Clark",
    location: "Dallas, TX",
    email: "clarksam19@gmail.com",
    linkedin: "https://www.linkedin.com/in/sam-clark-dev/",
    github: "https://github.com/clarksam19",
    website: "https://samclark.dev/",
  },
  {
    image: rana,
    name: "Rana Deeb",
    location: "San Francisco, CA",
    email: "ranadeeb92@gmail.com",
    linkedin: "www.linkedin.com/in/rana-deeb/",
    github: "github.com/ranadeeb92",
    website: "www.ranadeeb.dev"
  }
];

function OurTeam() {
  return (
    <div id="our-team" className="flex flex-col px-4 bg-gray-900 text-gray-300 text-2xl">
      <div className="px-4 py-16 max-w-7xl xl:max-w-none xl:w-11/12 mx-auto">
        <div className="">
          <h2 className="font-extrabold text-white text-5xl leading-9">Meet our team</h2>
          <p className="mt-8 w-8/12">
            We are currently looking for opportunities. If you liked what you
            saw and want to talk more, please reach out!
          </p>
        </div>
        <ul className="mt-14 flex flex-col gap-4 md:flex-row md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-x-8 md:gap-y-12">
          {teamMembers.map((member, idx) => <TeamMember {...member} key={idx} />)}
        </ul>
      </div>
    </div>
  );
}

export default OurTeam;
