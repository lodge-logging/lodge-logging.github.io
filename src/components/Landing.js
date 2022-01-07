import logo from "../images/logo/Lodge_logo_sm_txt.svg";
import initGif from "../images/diagrams/install-and-init.gif";
import fullDiagram from "../images/diagrams/full_diagram.png";

function Landing() {
  return (
    <div id="landing" className="text-white">
      <div className="h-4/6 flex flex-col justify-center items-center pt-28 bg-raisin xl:py-0">
        <div className="w-full xl:h-screen xl:flex">
          <div className="hidden bg-white xl:block bgImageFirst w-6/12 h-screen"></div>
          <img className="xl:hidden w-96 mx-auto mt-8" src={logo} alt=" The Lodge logo" />
          <div className="text-center items-center justify-center bg-raisin pb-24 xl:pb-0 xl:w-6/12 xl:flex xl:flex-col xl:h-screen">
            <h1 className="hidden xl:block text-9xl font-extrabold mt-52">Lodge</h1>
            <p className="light-text text-gray-300 text-3xl leading-snug text-center mt-8 px-8 mx-auto max-w-xl">
              An open-source <span className="text-cyan font-medium">self-managed</span></p>
            <p className="text-yellowgreen font-medium text-3xl leading-snug text-center px-8 mx-auto max-w-xl">logging observability</p>
            <p className="light-text text-gray-300 text-3xl leading-snug text-center font-medium max-w-xl mx-auto px-8">
              framework for small to medium-sized microservice web applications
            </p>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex h-screen bgImageSecond justify-center items-center text-center bg-cyan py-20">
        <h2 className="text-4xl font-extrabold w-1/2">Ready to Deploy</h2>
        <div className="flex flex-col w-1/2 justify-center mx-6 my-10 px-12">
          <p className="mx-auto text-3xl mb-14 px-4">
            Lodge is an opinionated pre-configuration of open-source tools
            that deploys automatically to the user's AWS account
          </p>
          <img src={initGif} alt="Lodge initialization gif" className="mx-auto rounded-lg shadow-xl" />
        </div>
      </div>
      <div className="xl:hidden flex flex-col h-4/6 justify-center items-center text-center bg-cyan py-20 px-12">
        <h2 className="text-4xl font-extrabold">Ready to Deploy</h2>
        <p className="text-3xl my-10 max-w-5xl">
          Lodge is an opinionated pre-configuration of open-source tools
          that deploys automatically to the user's AWS account
        </p>
        <img src={initGif} alt="Lodge initialization gif" className="rounded-lg shadow-xl" />
      </div>
      <div className="hidden xl:flex h-screen bgImageThird justify-center items-center text-center bg-yellowgreen py-20">
        <h2 className="text-4xl font-extrabold w-1/2">Available and Resilient</h2>
        <div className="flex flex-col w-1/2 justify-center mx-6 my-10 px-4">
          <p className="mx-auto text-3xl mb-14 px-16">
            Lodge is optimized for availability in the event of datacenter outages
            and resiliency to sudden bursts in log traffic
          </p>
          <img src={fullDiagram} alt="Lodge diagram" className="mx-auto rounded-lg shadow-xl" />
        </div>
      </div>
      <div className="xl:hidden flex flex-col h-4/6 justify-center items-center text-center bg-yellowgreen py-20 px-12">
        <h2 className="text-4xl font-extrabold">Available and Resilient</h2>
        <p className="text-3xl my-10 max-w-5xl">
          Lodge is optimized for availability in the event of datacenter outages
          and resiliency to sudden bursts in log traffic
        </p>
        <img src={fullDiagram} alt="Lodge initialization gif" className="rounded-lg shadow-xl" />
      </div>
    </div>
  );
}

export default Landing;
