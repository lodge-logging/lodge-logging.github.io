import scrollToElement from "../scripts/scrollToElement";
function CaseStudyNav() {
  const listElementStyle = "my-4 hover:text-cyan";
  const subSectionStyle = "ml-8 my-4 hover:text-cyan";
  const textStyle = "inline text-left text-raisin text-lg hover:text-black";
  const navStyle = "sticky xl:flex xl:self-start xl:w-1/5 xl:top-16 right-20 bg-white border-gray-100 border-r-2 p-4 pl-14 h-screen overflow-y-auto";

  const navigateTo = (elementId) => scrollToElement(elementId, -100);

  return (
    <aside id="sideNav" className={`${navStyle} translate-x transform transition duration-700 hidden h-0`}>
      <ul className="list-outside list-disc text-yellowgreen text-3xl items-center">
        {/* <!-- Section 1 --> */}
        <li data-section="section-1" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-1")}>Lodge Introduction</button>
        </li>
        {/* <!-- Section 2 --> */}
        <li data-section="section-2" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-2")}>Lodge Use Case</button>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-2-1")}>Boardwalk</button>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-2-2")}>Monolith to Microservices</button>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-2-3")}>Debugging Microservices</button>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-2-4")}>Observability</button>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-2-5")}>Time-Series Data</button>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-2-6")}>Bursty Traffic</button>
        </li>
        <li data-section="section-2" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-2-7")}>Summary</button>
        </li>
        {/* <!-- Section 3 --> */}
        <li data-section="section-3" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-3")}>Existing Solutions</button>
        </li>
        <li data-section="section-3" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-3-1")}>Buying a Solution</button>
        </li>
        <li data-section="section-3" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-3-2")}>Operating a Solution</button>
        </li>
        <li data-section="section-3" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-3-3")}>Where Lodge Fits In</button>
        </li>
        {/* <!-- Section 4 --> */}
        <li data-section="section-4" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-4")}>Lodge Architecture</button>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-4-1")}>Overview</button>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-4-2")}>Components</button>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-4-3")}>Filebeat for Collection and Shipping</button>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-4-4")}>Kafka for Buffering</button>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-4-5")}>Logstash for Parsing and Indexing</button>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-4-6")}>Elasticsearch and Amazon S3 for Storage</button>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-4-7")}>Kibana for Querying and Visualization</button>
        </li>
        <li data-section="section-4" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-4-8")}>Lodge Dashboard for Everything Else</button>
        </li>
        {/* <!-- Section 5 --> */}
        <li data-section="section-5" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-5")}>Using Lodge</button>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-5-1")}>Deploying Lodge</button>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-5-2")}>Viewing the Deployment</button>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-5-3")}>Shipping Logs</button>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-5-4")}>Viewing Logs</button>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-5-5")}>Re-Indexing Logs from S3 Archive</button>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-5-6")}>Managing Kafka Cluster</button>
        </li>
        <li data-section="section-5" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-5-7")}>Component Review</button>
        </li>
        {/* <!-- Section 6 --> */}
        <li data-section="section-6" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-6")}>Designing and Building Lodge</button>
        </li>
        <li data-section="section-6" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-6-1")}>Kafka</button>
        </li>
        <li data-section="section-6" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-6-2")}>Amazon S3</button>
        </li>
        <li data-section="section-6" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-6-3")}>Bastion Host</button>
        </li>
        {/* <!-- Section 7 --> */}
        <li data-section="section-7" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-7")}>Implementation Challenge</button>
        </li>
        <li data-section="section-7" className={subSectionStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-7-1")}>Resolving Circular Dependencies</button>
        </li>
        {/* <!-- Section 8 --> */}
        <li data-section="section-8" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-8")}>Future Work</button>
        </li>
        <div className="py-32" />
      </ul>
    </aside>
  );
}
export default CaseStudyNav;
