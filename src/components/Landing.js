import logo from "../images/logo/Lodge_landing.svg";
import initGif from "../images/diagrams/install-and-init.gif";
import fullDiagram from "../images/diagrams/full_diagram.png";

function Landing() {
  return (
    <div id="landing" className="text-white">
      <div className="flex flex-col justify-center items-center pt-28 bg-raisin xl:py-0">
        <div className="w-full h-landing xl:h-screen xl:flex">
          <div className="hidden xl:block bg-white bgImageFirst w-1/2" />
          <img className="xl:hidden w-96 mx-auto mt-24" src={logo} alt=" The Lodge logo" />
          <div className="xl:flex xl:flex-col xl:w-1/2 text-center items-center justify-center bg-raisin">
            <h1 className="hidden xl:block text-landing font-extrabold mt-32 -mb-6">Lodge</h1>
            <p className="mt-10 xl:mt-0 light-text text-gray-300 text-3xl leading-snug text-center px-8 mx-auto max-w-xl">
              An <span className="text-cyan font-medium">open-source framework </span>
            </p>
            <p className="light-text text-gray-300 text-3xl leading-snug text-center px-8 mx-auto max-w-xl">
              that provides
              <span className="text-yellowgreen font-medium"> resilient observability </span>
            </p>
            <p className="light-text text-gray-300 text-3xl leading-snug text-center px-8 mx-auto max-w-xl">
              for distributed web applications
            </p>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex h-landing bgImageSecond justify-center items-center text-center bg-cyan py-20">
        <h2 className="text-4xl font-extrabold w-1/2">Ready to Deploy</h2>
        <div className="flex flex-col w-1/2 justify-center mx-6 my-10 px-12">
          <p className="mx-auto text-3xl mb-14 px-4">
            Lodge provides an opinionated pre-configuration of open-source tools
            that deploy automatically to a user's AWS account
          </p>
          <img src={initGif} alt="Lodge initialization gif" className="mx-auto rounded-lg shadow-xl" />
        </div>
      </div>
      <div className="xl:hidden flex flex-col h-landing justify-center items-center text-center bg-cyan py-20 px-12">
        <h2 className="text-4xl font-extrabold">Ready to Deploy</h2>
        <p className="text-3xl my-10 px-16 max-w-5xl">
          Lodge provides an opinionated pre-configuration of open-source tools
          that deploy automatically to a user's AWS account
        </p>
        <img src={initGif} alt="Lodge initialization gif" className="rounded-lg shadow-xl" />
      </div>
      <div className="hidden xl:flex h-landing bgImageThird justify-center items-center text-center bg-yellowgreen py-20">
        <h2 className="text-4xl font-extrabold w-1/2">Available and Resilient</h2>
        <div className="flex flex-col w-1/2 justify-center mx-6 my-10 px-4">
          <p className="mx-auto text-3xl mb-14 px-20">
            Lodge is optimized for <b>availability</b> in the event of datacenter outages,
            and <b>resiliency</b> against sudden bursts in log traffic
          </p>
          <img src={fullDiagram} alt="Lodge diagram" className="mx-auto rounded-lg shadow-xl" />
        </div>
      </div>
      <div className="xl:hidden flex flex-col h-landing justify-center items-center text-center bg-yellowgreen py-20 px-12">
        <h2 className="text-4xl font-extrabold">Available and Resilient</h2>
        <p className="text-3xl my-10 px-16 max-w-5xl">
          Lodge is optimized for <b>availability</b> in the event of datacenter outages,
          and <b>resiliency</b> against sudden bursts in log traffic
        </p>
        <img src={fullDiagram} alt="Lodge initialization gif" className="rounded-lg shadow-xl" />
      </div>
    </div>
  );
}

export default Landing;
