import logo from "../images/logo/Lodge_graphic_color.svg";

function Landing() {
  return (
    <div id="landing">
      <div className="h-4/6 flex flex-col justify-center items-center py-20 bg-raisin xl:py-0">
        <div className="w-full h-screen xl:flex">
          <div className="hidden bg-white xl:block bgImageFirst w-6/12 h-screen"></div>
          <img className="xl:hidden w-4/12 max-w-2xl mx-auto mt-12 p-8 pb-16" src={logo} alt="The Lodge logo" />
          <div className="text-center items-center justify-center bg-raisin xl:w-6/12 xl:flex xl:flex-col xl:h-screen">
            <h1 className="text-white text-9xl font-extrabold xl:pt-32">Lodge</h1>
            <p className="light-text text-gray-300 text-3xl leading-snug text-center mt-8 px-8 mx-auto max-w-xl">
              An open-source <span className="text-cyan font-medium">self-managed</span></p>
            <p className="text-yellowgreen font-medium text-3xl leading-snug text-center px-8 mx-auto max-w-xl">logging observability</p>
            <p className="light-text text-gray-300 text-3xl leading-snug text-center font-medium max-w-xl mx-auto px-8">
              framework for small to medium-sized microservice web applications
            </p>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex flex-row h-4/6 bgImageSecond justify-center items-center text-center text-white bg-cyan py-20 z-40">
        <h2 className="text-4xl font-extrabold w-6/12">Ready to Deploy</h2>
        <p className="text-3xl my-10 w-6/12 max-w-full px-6">
        Lodge is an opinionated pre-configuration of open-source tools
          that deploys automatically to the user's AWS account
        </p>
      </div>
      <div className="xl:hidden flex flex-col h-4/6 justify-center items-center text-center text-white bg-cyan py-20 z-40">
        <h2 className="text-4xl font-extrabold">Ready to Deploy</h2>
        <p className="text-3xl my-10 max-w-5xl">
          Lodge is an opinionated pre-configuration of open-source tools
          that deploys automatically to the user's AWS account
        </p>
      </div>
      <div className="hidden xl:flex h-4/6 bgImageThird xl:flex-row xl:bgImageThird flex flex-col justify-center items-center text-center text-white bg-yellowgreen py-20">
        <h2 className="text-4xl font-extrabold w-6/12">Available and Resilient</h2>
        <p className="text-3xl my-10 w-6/12 max-w-full px-6">
        Lodge is optimized for availability in the event of datacenter outages
          and resiliency to sudden bursts in log traffic
        </p>
      </div>
      <div className="xl:hidden flex flex-col h-4/6 justify-center items-center text-center text-white bg-yellowgreen py-20">
        <h2 className="text-4xl font-extrabold">Available and Resilient</h2>
        <p className="text-3xl my-10 max-w-5xl">
          Lodge is optimized for availability in the event of datacenter outages
          and resiliency to sudden bursts in log traffic
        </p>
      </div>
    </div>
  );
}

export default Landing;