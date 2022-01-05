function CaseStudyNav() {
  const linkStyle = "flex items-center my-4";
  const subSectionStyle = "ml-8";
  const textStyle = "inline text-raisin text-lg";
  const navStyle = "sticky xl:flex xl:self-start xl:w-1/5 xl:top-16 right-20 bg-white border-gray-100 border-r-2 p-4 pl-14 h-screen overflow-y-auto";

  return (
    <aside id="sideNav" className={`${navStyle} translate-x transform transition duration-700 hidden h-0`}>
      <ul className="list-outside list-disc text-yellowgreen text-3xl items-center">
        {/* <!-- Section 1 --> */}
        <li data-section="section-1">
          <a href="#section-1" className={linkStyle}>
            <p className={textStyle}>Lodge Introduction</p>
          </a>
        </li>

        {/* <!-- Section 2 --> */}
        <li data-section="section-2">
          <a className={linkStyle} href="#section-2">
            <div>
              <p className={textStyle}>Lodge Use Case</p>
            </div>
          </a>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <a className={linkStyle} href="#section-2-1">
            <div>
              <p className={textStyle}>Boardwalk</p>
            </div>
          </a>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <a className={linkStyle} href="#section-2-2">
            <div>
              <p className={textStyle}>Monolith to Microservices</p>
            </div>
          </a>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <a className={linkStyle} href="#section-2-3">
            <div>
              <p className={textStyle}>Debugging Microservices</p>
            </div>
          </a>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <a className={linkStyle} href="#section-2-4">
            <div>
              <p className={textStyle}>Observability</p>
            </div>
          </a>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <a className={linkStyle} href="#section-2-5">
            <div>
              <p className={textStyle}>Time-Series Data</p>
            </div>
          </a>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <a className={linkStyle} href="#section-2-6">
            <div>
              <p className={textStyle}>Bursty Traffic</p>
            </div>
          </a>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <a className={linkStyle} href="#section-2-7">
            <div>
              <p className={textStyle}>Summary</p>
            </div>
          </a>
        </li>

        {/* <!-- Section 3 --> */}
        <li data-section="section-3" className="">
          <a className={linkStyle} href="#section-3">
            <div>
              <p className={textStyle}>Existing Solutions</p>
            </div>
          </a>
        </li>
        <li data-section="section-3" className={subSectionStyle}>
          <a className={linkStyle} href="#section-3-1">
            <div>
              <p className={textStyle}>Buying a Solution</p>
            </div>
          </a>
        </li>
        <li data-section="section-3" className={subSectionStyle}>
          <a className={linkStyle} href="#section-3-2">
            <div>
              <p className={textStyle}>Operating a Solution</p>
            </div>
          </a>
        </li>
        <li data-section="section-3" className={subSectionStyle}>
          <a className={linkStyle} href="#section-3-3">
            <div>
              <p className={textStyle}>Where Lodge Fits In</p>
            </div>
          </a>
        </li>

        {/* <!-- Section 4 --> */}
        <li data-section="section-4">
          <a className={linkStyle} href="#section-4">
            <div>
              <p className={textStyle}>Lodge Architecture</p>
            </div>
          </a>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <a className={linkStyle} href="#section-4-1">
            <div>
              <p className={textStyle}>Overview</p>
            </div>
          </a>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <a className={linkStyle} href="#section-4-2">
            <div>
              <p className={textStyle}>Components</p>
            </div>
          </a>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <a className={linkStyle} href="#section-4-3">
            <div>
              <p className={textStyle}>Filebeat for Collection and Shipping</p>
            </div>
          </a>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <a className={linkStyle} href="#section-4-4">
            <div>
              <p className={textStyle}>Kafka for Buffering</p>
            </div>
          </a>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <a className={linkStyle} href="#section-4-5">
            <div>
              <p className={textStyle}>Logstash for Parsing and Indexing</p>
            </div>
          </a>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <a className={linkStyle} href="#section-4-6">
            <div>
              <p className={textStyle}>Elasticsearch and Amazon S3 for Storage</p>
            </div>
          </a>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <a className={linkStyle} href="#section-4-7">
            <div>
              <p className={textStyle}>Kibana for Querying and Visualization</p>
            </div>
          </a>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <a className={linkStyle} href="#section-4-8">
            <div>
              <p className={textStyle}>Lodge Dashboard for Everything Else</p>
            </div>
          </a>
        </li>

        {/* <!-- Section 5 --> */}
        <li data-section="section-5">
          <a className={linkStyle} href="#section-5">
            <div>
              <p className={textStyle}>Using Lodge</p>
            </div>
          </a>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <a className={linkStyle} href="#section-5-1">
            <div>
              <p className={textStyle}>Deploying Lodge</p>
            </div>
          </a>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <a className={linkStyle} href="#section-5-2">
            <div>
              <p className={textStyle}>Viewing the Deployment</p>
            </div>
          </a>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <a className={linkStyle} href="#section-5-3">
            <div>
              <p className={textStyle}>Shipping Logs</p>
            </div>
          </a>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <a className={linkStyle} href="#section-5-4">
            <div>
              <p className={textStyle}>Viewing Logs</p>
            </div>
          </a>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <a className={linkStyle} href="#section-5-5">
            <div>
              <p className={textStyle}>Re-Indexing Logs from S3 Archive</p>
            </div>
          </a>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <a className={linkStyle} href="#section-5-6">
            <div>
              <p className={textStyle}>Managing Kafka Cluster</p>
            </div>
          </a>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <a className={linkStyle} href="#section-5-7">
            <div>
              <p className={textStyle}>Component Review</p>
            </div>
          </a>
        </li>

        {/* <!-- Section 6 --> */}
        <li data-section="section-6">
          <a className={linkStyle} href="#section-6">
            <div>
              <p className={textStyle}>Designing and Building Lodge</p>
            </div>
          </a>
        </li>
        <li data-section="section-6" className={subSectionStyle}>
          <a className={linkStyle} href="#section-6-1">
            <div>
              <p className={textStyle}>Kafka</p>
            </div>
          </a>
        </li>
        <li data-section="section-6" className={subSectionStyle}>
          <a className={linkStyle} href="#section-6-2">
            <div>
              <p className={textStyle}>Amazon S3</p>
            </div>
          </a>
        </li>
        <li data-section="section-6" className={subSectionStyle}>
          <a className={linkStyle} href="#section-6-3">
            <div>
              <p className={textStyle}>Bastion Host</p>
            </div>
          </a>
        </li>
        {/* <!-- Section 7 --> */}
        <li data-section="section-7">
          <a className={linkStyle} href="#section-7">
            <div>
              <p className={textStyle}>Implementation Challenge</p>
            </div>
          </a>
        </li>
        <li data-section="section-7" className={subSectionStyle}>
          <a className={linkStyle} href="#section-7-1">
            <div>
              <p className={textStyle}>Resolving Circular Dependencies</p>
            </div>
          </a>
        </li>

        {/* <!-- Section 8 --> */}
        <li data-section="section-8">
          <a className={linkStyle} href="#section-8">
            <div>
              <p className={textStyle}>Future Work</p>
            </div>
          </a>
        </li>
      </ul>
    </aside >
  );
}

export default CaseStudyNav;