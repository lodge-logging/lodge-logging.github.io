import emailIcon from "../images/icons/email.svg";
import websiteIcon from "../images/icons/website.svg";
import githubIcon from "../images/icons/github.svg";
import linkedinIcon from "../images/icons/linkedin.svg";

function TeamMember({ image, name, location, email, linkedin, github, website }) {
  return (
    <li className="flex flex-col bg-gray-800 rounded-xl py-9 px-4 text-center">
      <img className="mx-auto h-48 w-48 rounded-full xl:w-56 xl:h-56 lazy" src={image} alt="" />
      <div>
        <div>
          <h3 className="text-white mt-9">{name}</h3>
          <p className="text-green-300 my-3">{location}</p>
        </div>
        <ul className="bg-white-100 mx-auto mt-6 flex w-48 justify-between items-center">
          <li>
            <a href={email}><img className="w-8" src={emailIcon} /></a>
          </li>
          <li>
            <a href={linkedin}><img className="w-6" src={linkedinIcon} /></a>
          </li>
          <li>
            <a href={github}><img className="w-8" src={githubIcon} /></a>
          </li>
          <li>
            <a href={website}><img className="w-8" src={websiteIcon} /></a>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default TeamMember;