import logo from "../images/logo/logo_side.svg";
import icon from "../images/logo/Lodge_graphic_color.svg";
import { Link } from "react-router-dom";

const Docs = () => {
  const linkStyle = "text-cyan font-bold";

  return (
    <div className="flex flex-col text-raisin text-xl h-screen">
      <header className="sticky align-middle top-0 bg-white flex py-1.5 pl-2 items-center border-b border-gray-200">
        <Link to="/"><img src={icon} alt="The lodge icon" className="w-14 p-2" /></Link>
        <h4 className="font-bold text-lg ml-4 mt-4 self-center">Lodge Overview</h4>
      </header>
      <div className="flex flex-col md:flex-row">
        <nav className="hidden md:block md:w-9/12 border-r border-gray-300">
          <ul className="text-gray-600">
            <li className="m-2 p-1.5 pl-6 rounded bg-gray-100 hover:text-cyan">
              <a href="#">Introduction</a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col items-center">
          <img src={logo} alt="The lodge logo" className="p-24 mx-auto" />
          <main className="px-6 pb-12 flex flex-col">
            <div>
              <h1 className="text-4xl font-bold my-8">Overview</h1>
              <p className="leading-9">Tapestry is an open source orchestration framework for the deployment of user entity data pipelines. It allows users to easily configure and launch an end-to-end data pipeline hosted on Amazon Web Services. Our automated solution combines best-in-class tools to create a warehouse-centric data stack, offering built-in data ingestion, transformation, and newly emerging data syncing (also known as "reverse ETL") technologies. Our inclusion of a reverse ETL component solves the "last mile" problem by providing the ability to operationalize collected user data in near real time.</p>
              <Link to="/" className="block my-8 text-cyan">Read our case study for more information about user data pipelines and to learn how we built Lodge.</Link>
            </div>
            <div className="text-right border border-gray-300 rounded-lg p-4 w-56 self-end">
              <p className="text-md mb-1">Next</p>
              <a href="#" className={linkStyle}>Prerequisites</a>
            </div>
          </main>
        </div>
      </div>
      <footer className="bg-raisin px-6 md:px-24 text-white h-96">
        <h6 className="font-bold my-8">Lodge Resources</h6>
        <a className="block my-2">Github</a>
        <Link to="/"><p className="block pb-8">Case Study</p></Link>
      </footer>
    </div>

  );
}

export default Docs;
