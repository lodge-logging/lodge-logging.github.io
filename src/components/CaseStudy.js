import CaseStudyNav from "./CaseStudyNav";
import monolithDiagram from "../images/diagrams/monolith.jpeg";
import microserviceDiagram from "../images/diagrams/microservice.jpeg";
import fireGif from "../images/diagrams/fireGif.gif";
import monolithSSH from "../images/diagrams/monolith-ssh.gif";
import microserviceSSH from "../images/diagrams/microservice-ssh.gif";
import logsAggregated from "../images/diagrams/logsAggregated.png";
import logsNormalized from "../images/diagrams/logsNormalized.png";
import timeSeries from "../images/diagrams/timeseries.gif";
import burstyLogs from "../images/diagrams/bursty-logs.gif";
import buyingOptions from "../images/diagrams/buying-options.png";
import loggingSolutions from "../images/diagrams/logging-solutions.png";
import elasticStack from "../images/diagrams/elastic-stack.png";
import overview from "../images/diagrams/overview.png";
import components from "../images/diagrams/components.png";
import filebeat from "../images/diagrams/filebeat.png";
import kafka from "../images/diagrams/kafka.png";
import logstash from "../images/diagrams/logstash.png";
import s3 from "../images/diagrams/s3.png";
import restore from "../images/diagrams/restore.png";
import kibana from "../images/diagrams/kibana.png";
import dashboard from "../images/diagrams/dashboard.png";
import awsConsole from "../images/diagrams/lodge-aws-console.gif";
import logstashOverwhelmed from "../images/diagrams/logstash-no-broker.gif";
import bufferingOptions from "../images/diagrams/buffering-options.png";
import kafkaInAction from "../images/diagrams/kafka-logstash-in-action.gif";
import elasticsearchCluster from "../images/diagrams/ES-cluster.png";
import circularDependencies from "../images/diagrams/circular-dependencies.png";
import dependencyStages from "../images/diagrams/dependency-stages.png";
import zookeeperDependencies from "../images/diagrams/zookeeper-dependencies.png";
import componentReview from "../images/diagrams/component-review.png";

function CaseStudy() {
  const headerStyle = "section text-3xl font-extrabold mt-14 mb-6";
  const subHeaderStyle = "section text-2xl font-bold mt-16 mb-4";
  const subSubHeaderStyle = "text-xl font-bold mt-12 mb-4";
  const paragraphStyle = "my-5";
  const listDiscStyle = "list-outside list-disc text-gray-300 text-2xl items-center";
  const listNumStyle = "list-outside list-decimal text-2xl items-center";
  const listTextStyle = "inline text-raisin text-xl";
  const listElementStyle = "ml-7";
  const imgStyle = "mx-auto my-8 rounded-lg";
  const linkStyle = "underline text-blue-500";

  return (
    <div className="flex">
      <CaseStudyNav />
      <div id="case-study" className="w-xl-casestudy xl:pt-0">
        <div className="prose ml-6 leading-9 w-10/12 text-left text-gray-700 text-xl">
          <h1 className="mt-24 mb-16 text-6xl font-black">Case Study</h1>
          {/* <!-- Section 1 --> */}
          <h2 id="section-1" data-section="section-1" className={headerStyle}>
            1. Lodge Introduction
          </h2>
          <p className={paragraphStyle}>
            Lodge is an open-source self-managed logging framework for small, distributed applications. Lodge allows users to ship, transform, store, visualize, and monitor their logs.
          </p>
          <p className={paragraphStyle}>
            In this writeup, we're first going to give a brief narrative based on a fictitious company we've invented to outline the ideal use case for Lodge. Then, we will conclude this narrative by comparing existing solutions to the problems it has introduced. Once we've shown where Lodge fits in the context of the existing solutions, we will transition to an overview of Lodge's architecture, followed by some demonstrations of how it works from a user's perspective. The final sections will discuss some of the critical design decisions and an implementation challenge we faced while building Lodge. First, let's start things off with our use case.
          </p>

          {/* <!-- Section 2 --> */}
          <h2 id="section-2" data-section="section-2" className={headerStyle}>
            2. The Need for Observability
          </h2>
          <h3 id="section-2-1" className={subHeaderStyle}>
            2.1 Introducing Boardwalk
          </h3>
          <p className={paragraphStyle}>
            Boardwalk is a small but fast-growing online retailer that sells handcrafted board games. Their product has become a massive hit on social media, which has exponentially increased the traffic on their website. It is an exciting time for Boardwalk, but also a challenging one, since their growth will require a complete overhaul of their architecture.
          </p>
          <p className={paragraphStyle}>
            Boardwalk's monolithic codebase has worked great until now, but its growing user base is demanding an increasing number of new features. Their pace of development needs to keep up, and their architecture needs to facilitate this new pace. To do this, they've decided to break up their monolith and migrate to a microservice architecture.
          </p>

          <h3 id="section-2-2" data-section="section-2" className={subHeaderStyle}>
            2.2 Monolith to Microservices
          </h3>
          <p className={paragraphStyle}>
            In a monolith architecture, the application's business logic is run entirely on one machine. As a result, the application's functional components, or modules, can communicate by simply calling each other's methods.
          </p>
          <img
            src={monolithDiagram}
            alt="monolith diagram"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            For example, suppose a user wants to check out their cart. In that case, they will trigger a request from the webserver to the <code>/checkout</code> endpoint of the app server, which will then call the <code>checkInventory</code>  method of the <code>inventory</code> module, which sends a SQL query to the database, and so on.
          </p>
          <p className={paragraphStyle}>
            A microservice architecture introduces network complexity between these modules:
          </p>
          <img
            src={microserviceDiagram}
            alt="microservice diagram"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            A microservice architecture introduces network complexity between these modules. Now, services must communicate by making API calls over an inherently unreliable network. The 'user checkout' event now begins with a request to the checkout service, which fetches the user's cart contents from its database, then initiates a request to the inventory service to verify that the product is available in its database. This complexity is not just added for fun, though. There are significant benefits gained from using this architecture.
          </p>
          <p className={paragraphStyle}>
            Remember, Boardwalk is aiming to increase development turnover on new features. So if they want to update their checkout service, they can do so independently of the rest of their services. And of course, Boardwalk is growing fast, so now they can accommodate this growth by horizontally scaling these services as needed.
          </p>
          <p className={paragraphStyle}>
            So now the Boardwalk team is set up to focus all their time and engineering effort on new features - right? Well, maybe not; there's a problem. Users are reporting issues with the checkout system. What does the team do?
          </p>
          <h3 id="section-2-3" className={subHeaderStyle}>
            2.3 Debugging microservices
          </h3>
          <p className={paragraphStyle}>
            In their previous architecture, Boardwalk's developers only needed to SSH into their application server and database to examine their application's logs.
          </p>
          <img
            src={monolithSSH}
            alt="SSHing into a monolith"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            Now they have to SSH into multiple instances, analyze their logs, and piece together the entire application state from a series of isolated records.
          </p>
          <img
            src={microserviceSSH}
            alt="SSHing into a microservice"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            For example, is the checkout service running? Is the payment service running? Are they both running, but the network is failing? Fortunately, the number of nodes is low enough that this solution is still viable, but as their application grows, this process will quickly become untenable.
          </p>
          <img src={fireGif} alt="A computer on fire" className={imgStyle} />
          <p className={paragraphStyle}>
            So, the Boardwalk team begins researching a solution. However, it's important to note that users have not stopped using their application and that the backlog of features these users have requested has not suddenly disappeared. Every minute Boardwalk spends finding a solution is time taken away from developing their application.
          </p>

          <h3 id="section-2-4" className={subHeaderStyle}>
            2.4 Observability
          </h3>
          <p className={paragraphStyle}>
            The team soon finds out that their problem has a name:<b> observability. </b>The need for observability is universal across all distributed systems, and the literature devoted to this subject is enormous. The observability solution that fits Boardwalk's use case will require a form of log aggregation. They will need to collect the logs from each individual server in their system and send them to one centralized location.
          </p>
          <img
            src={logsAggregated}
            alt="Aggregated logs"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            This process usually involves installing a collection agent that taps into a machine's log files, detects changes, and sends those changes over the network to another location. By default, these log files contain raw text without much structure; just piling them all in a database as-is is not helpful. The logs need to be searchable.
          </p>
          <p className={paragraphStyle}>
            A mature observability solution should store data in a queryable and visualizable format. SQL databases allow developers to leverage SQL queries to find and analyze logs, eliminating the need to visually scan thousands of lines of text. This process entails dividing up the logs' relevant characteristics, such as the timestamp, the source, and the message, and organizing the tables and columns of the database using these characteristics.
          </p>
          <img
            src={logsNormalized}
            alt="Aggregated, normalized logs"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            Visualization tools can use the data returned from SQL queries to create interactive dashboards summarizing log data and patterns. We now have a path for getting from raw text stored in multiple locations to an interactive dashboard summarizing Boardwalk's data in one location. There is a bit more left to learn about logs, though, before the Boardwalk team can decide on a solution.
          </p>
          <h3 id="section-2-5" className={subHeaderStyle}>
            2.5 Time-Series Data
          </h3>
          <p className={paragraphStyle}>
            The time-series nature of log data is an essential factor to consider. Time-series means that time a log occurs is a primary component in organizing it.
          </p>
          <div className="h-72 overflow-hidden">
            <img
              src={timeSeries}
              alt="timeseries data"
              className="mx-auto -mt-2"
            />
          </div>
          <p className={paragraphStyle}>
            For example, suppose the Boardwalk team needs to diagnose a failure that occurs at 4:30 pm. In that case, they will need access to logs generated in a narrow window of time leading up to and immediately after the event.
          </p>
          <p className={paragraphStyle}>
            Time-series data also has a shelf life. It tends to lose relevance as it ages, so its storage requirements evolve. Generally, quick write and read access are necessary for real-time analysis of recent logs. Whereas Tuesday's logs, for instance, will not need to be written to on Wednesday, and the likelihood of requiring urgent access to logs from a year ago is next to none.
          </p>
          <h3 id="section-2-6" className={subHeaderStyle}>
            2.6 Bursty Traffic
          </h3>
          <p className={paragraphStyle}>
            The other factor to consider is that logs are bursty.
          </p>
          <div className="flex mx-auto justify-center">
            <img src={burstyLogs} alt="a burst of logs" className="-mr-3" />
            <div className="bg-white w-4" />
          </div>
          <p className={paragraphStyle}>
            The other factor to consider is that logs are bursty. While things are running well, logs will tend to generate in a predictably steady stream. However, output can multiply significantly when problems arise. If a logging solution is not prepared to handle such log bursts, it can fail when it is needed most.
          </p>
          <h3 id="section-2-7" className={subHeaderStyle}>
            2.7 Summary
          </h3>

          <ul className={listDiscStyle}>
            <p className={listTextStyle}>
              In summary, the team needs a solution that:
            </p>
            <li className={listElementStyle}>
              <p className={listTextStyle}>Normalizes the logs</p>
            </li>
            <li className={listElementStyle}>
              <p className={listTextStyle}>Collects the logs from all nodes</p>
            </li>
            <li className={listElementStyle}>
              <p className={listTextStyle}>
                Stores the logs in a central location
              </p>
            </li>
            <li className={listElementStyle}>
              <p className={listTextStyle}>Queries and visualizes the logs</p>
            </li>
            <li className={listElementStyle}>
              <p className={listTextStyle}>
                Manages the storage of the logs based on relevance
              </p>
            </li>
            <li className={listElementStyle}>
              <p className={listTextStyle}>Handles bursts of logs</p>
            </li>
          </ul>

          {/* <!-- Section 3 --> */}

          <h2 id="section-3" className={headerStyle}>
            3. Where Lodge Fits In
          </h2>
          <p className={paragraphStyle}>
            The team determines that their options are to buy, operate, or build
            a solution.
          </p>
          <h3 id="section-3-1" className={subHeaderStyle}>
            3.1 Buying A Solution
          </h3>
          <p className={paragraphStyle}>
            Buying is the fastest and simplest solution, but also the costliest.
          </p>
          <img
            src={buyingOptions}
            alt="the logos of existing solutions"
            className={`${imgStyle} w-8/12`}
          />
          <p className={paragraphStyle}>
            There are many comprehensive log management services for purchase, such as{" "}
            <a href="https://logz.io/" className={linkStyle}>
              Logz
            </a>
            ,{" "}
            <a href="https://www.logdna.com/" className={linkStyle}>
              LogDNA
            </a>
            , and{" "}
            <a href="https://www.scalyr.com/" className={linkStyle}>
              Scalyr
            </a>
            . However, their convenience comes with a steep cost and requires sending them potentially sensitive data that is no longer privately owned.
          </p>
          <p className={paragraphStyle}>
            Like most cloud providers, AWS offers a{" "}
            <a
              href="https://docs.aws.amazon.com/cloudtrail/"
              className={linkStyle}
            >
              ready-to-deploy logging pipeline
            </a>{" "}
            consisting of managed services for ingesting, storing, and visualizing logs. This solution allows users to have the convenience of a managed solution while maintaining data ownership, but each component in the pipeline charges per log that passes through it. As log traffic increases, it can be even more expensive than third-party-managed solutions.
          </p>

          <h3 id="section-3-2" className={subHeaderStyle}>
            3.2 Operating A Solution
          </h3>
          <p className={paragraphStyle}>
            Operating entails installing an open-source solution on their infrastructure and maintaining it themselves.
          </p>
          <p className={paragraphStyle}>
            There are multiple open source solutions available, but the one that is by far most widely used is the Elastic Stack, formerly known as the ELK stack. It is comprised of Beats, Logstash, Elasticsearch, and Kibana.
          </p>
          <img
            src={elasticStack}
            alt="The elastic stack"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            There are multiple open source solutions available, but the one that is by far most widely used is the Elastic stack, formerly known as the ELK stack. Beats, Logstash, Elasticsearch, and Kibana, comprise the Elastic Stack. Beats is a lightweight collection and shipping agent. Logstash transforms and indexes the data shipped from Beats into Elasticsearch, a document database whose shards contain instances of the full-text search engine Apache Lucene. This design contrasts the SQL database paradigm we previously outlined when discussing log aggregation in general. Elasticsearch has no tables for data normalization. Instead, there are indexes, which <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/use-elasticsearch-for-time-series-data.html" alt="A link to the Elasticsearch docs" className={linkStyle}>Elastic recommends organizing by timestamp,</a> not log source. That means that Elasticsearch will write logs from all sources generated in a specified time window to the same index. Once the window has elapsed, Elasticsearch will create a new index and no longer write to the old one. No transformation is required to index logs since Elasticsearch stores text, but it does help the readability of the logs to do some formatting before they are stored.
          </p>
          <p className={paragraphStyle}>
            This data stored in Elasticsearch is queried and visualized by Kibana, which uses Elasticsearch's REST API rather than SQL. While SQL-like query syntax is an available feature of Kibana, it uses this REST API under the hood.
          </p>
          <p className={paragraphStyle}>
            The Boardwalk team is able to easily install a small "development mode" version of the Elastic Stack for testing. However, in researching the <a href="https://logz.io/learn/complete-guide-elk-stack/#elk-in-production" alt="A link to an article about configuring the Elastic Stack" className={linkStyle}> next steps required for a production configuration, </a> they found themselves knee-deep in a time-consuming territory of indexes, shards, JVM heaps, garbage collection, multi-availability-zone clusters, grok patterns, and message queues.
          </p>

          <h3 id="section-3-3" className={subHeaderStyle}>
            3.3 Where Lodge fits in
          </h3>
          <p className={paragraphStyle}>
            This configuration complexity leaves the team with a dilemma: they don't have the budget to pay for the convenience of a managed solution, but they don't have the time to figure out how to set up a robust self-managed solution, either. In addition, the team isn't comfortable giving up ownership of data for convenience, either. If they could deploy a viable Elastic stack with a UI that makes the management sensible, they would be prepared to make the trade-off of the added time needed to manage the cluster for the ownership of data and the financial expense saved by not using a managed solution.
          </p>
          <p className={paragraphStyle}>This is where Lodge fits in.</p>
          <img
            src={loggingSolutions}
            alt="solution comparison"
            className={`${imgStyle} -mb-10`}
          />
          <p className={paragraphStyle}>
            Lodge provides an opinionated pre-configuration for the Elastic Stack that allows users to leverage Elastic's benefits while eliminating the engineering overhead of setting up the stack. Lodge does not eliminate the maintenance burden, but provides a UI for facilitating stack maintenance. Lodge uses a managed service for log backup and archiving, simplifying and decreasing storage overheads. Plus, users still get to own their data. The trade-off is that Lodge currently provides pre-configuration for a limited subset of log types, so users needing to ship log types outside the provided Beats configurations will have a bit of extra configuration to do.
          </p>
          <p className={paragraphStyle}>
            Hopefully, this hypothetical use case and existing solutions comparison has given you an understanding of the justification for building Lodge. Next, we will provide a high-level overview of Lodge's architecture and demonstrate how Lodge works.
          </p>

          {/* <!-- Section 4 --> */}

          <h2 id="section-4" className={headerStyle}>
            4. Lodge Architecture
          </h2>
          <h3 id="section-4-1" className={subHeaderStyle}>
            4.1 Overview
          </h3>
          <p className={paragraphStyle}>
            This is what Lodge looks like from a user's perspective on a high level.
          </p>
          <img
            src={overview}
            alt="An overview of Lodge"
            className={`${imgStyle} max-w-xl -mb-8`}
          />
          <p className={paragraphStyle}>
            The user has deployed Lodge on their network. All internal applications can ship logs to the Elastic Stack using Filebeat, a subset of Beats specifically for collecting and forwarding log data. The user can then view these logs from the Lodge Dashboard that deploys with the stack.
          </p>
          <p className={paragraphStyle}>
            Let's zoom in on Lodge and take a closer look at its components.
          </p>
          <h3 id="section-4-2" className={subHeaderStyle}>
            4.2 Components
          </h3>
          <p className={paragraphStyle}>
            Lodge's infrastructure components work together to ship, transform, store, visualize, and monitor log data.
          </p>
          <img
            src={components}
            alt="The components of Lodge"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            Some of these components will be familiar from our previous discussion of the Elastic stack. Lodge uses these and other supporting components. We will cover each component below before demonstrating how Lodge works.
          </p>
          <h3 id="section-4-3" className={subHeaderStyle}>
            4.3 Filebeat for Collection and Shipping
          </h3>
          <p className={paragraphStyle}>
            First, we have Filebeat. It is the shipper that Lodge automatically generates configuration files for and is not part of the Lodge deployment itself. Instead, users of Lodge install these configuration files on their servers to ship their logs.
          </p>
          <img
            src={filebeat}
            alt="Filebeat in the Lodge stack"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            Filebeat is a lightweight shipper for forwarding and centralizing log data. Before Filebeat, Logstash was used both as a data collector and a data transformer. However, due to its implementation in Ruby and dependency on Java Virtual Machine (JVM) to run, Logstash consumed far more memory than necessary when collecting and shipping logs. This overconsumption of memory is why Elastic created Beats. Beats decouple collection and shipping from the parsing and indexing responsibilities of Logstash. Thanks to Beats, users can ship their logs without worrying about their application competing for resources with the collection agent.
          </p>
          <p className={paragraphStyle}>
            Once installed on the user's servers, Filebeat actively monitors the log files specified in its configuration for changes and forwards them to Kafka for ingestion into the Lodge pipeline.

          </p>
          <h3 id="section-4-4" className={subHeaderStyle}>
            4.4 Kafka for Buffering
          </h3>
          <p className={paragraphStyle}>
            Next, we have Kafka, the first supporting component we will introduce. When problems arise in a production system, logs can surge suddenly, overwhelming an unprepared logging infrastructure precisely when it is needed most. To protect Logstash and Elasticsearch against such data bursts, Lodge incorporates Kafka as a buffering mechanism for the Elastic stack, flattening the curve when spikes in log traffic occur.
          </p>
          <img
            src={kafka}
            alt="Kafka in the Lodge stack"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            Here, Kafka deploys as a cluster. Zookeeper deploys with it to manage the cluster state. We will discuss the why's behind how we configured this cluster in the design decisions section later. For now, just note that Kafka exists to buffer incoming logs for Logstash.
          </p>
          <h3 id="section-4-5" className={subHeaderStyle}>
            4.5 Logstash for Parsing and Indexing
          </h3>
          <p className={paragraphStyle}>
            After Kafka, we have Logstash, a server-side real-time data-processing pipeline that ingests data from multiple sources simultaneously, transforms it, and sends it to a "stash" like Elasticsearch and Amazon S3.
          </p>
          <img
            src={logstash}
            alt="Logstash in the Lodge stack"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            In Lodge's configuration, Logstash ingests log data from specific Kafka topics, performs parsing and transformation, and sends logs to two different storage components: Elasticsearch and Amazon S3.
          </p>
          <h3 id="section-4-6" className={subHeaderStyle}>
            4.6 Elasticsearch and Amazon S3 for Storage
          </h3>
          <p className={paragraphStyle}>
            At the storage layer, we have both Elasticsearch and an Amazon S3 bucket receiving data from Logstash.
          </p>
          <img src={s3} alt="S3 in the Lodge stack" className={imgStyle} />
          <p className={paragraphStyle}>
            S3 supports Elasticsearch by acting as a backup for data currently in Elasticsearch and as a long-term archive for data no longer needed in Elasticsearch. The design decisions section will cover what S3 is and why we use it instead of storing data in Elasticsearch.
          </p>
          <p className={paragraphStyle}>
            In between Elasticsearch and S3, we have Lodge Restore.
          </p>
          <img
            src={restore}
            alt="Lodge Restore in the Lodge stack"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            As mentioned previously, S3 stores data that it no longer needs in Elasticsearch. But what if the user wants access to old data? Lodge Restore is built for this purpose and will retrieve data from S3 and re-index it back into Elasticsearch.
          </p>
          <h3 id="section-4-7" className={subHeaderStyle}>
            4.7 Kibana for Querying and Visualization
          </h3>
          <p className={paragraphStyle}>
            Kibana is the remaining Elastic Stack component we use in Lodge. Kibana is Elastic's UI for interacting with Elasticsearch. In the Elastic Stack, data is stored in Elasticsearch indices and queried through Kibana's API; Kibana itself is stateless. As a result, users can spin up a new server without worrying about losing data should Kibana go down. It also means users can interact with their data without the hassle of managing a separate database.
          </p>
          <img
            src={kibana}
            alt="kibana in the Lodge stack"
            className={imgStyle}
          />
          <h3 id="section-4-8" className={subHeaderStyle}>
            4.8 Lodge Dashboard for Everything Else
          </h3>
          <p className={paragraphStyle}>
            Finally, we have the Lodge Dashboard, which serves as a unified dashboard for using Kibana and Lodge Restore, downloading Filebeat configurations, and managing Kafka and Zookeeper clusters.
          </p>
          <img
            src={dashboard}
            alt="the Lodge dashboard in the Lodge stack"
            className={`${imgStyle} max-w-xl`}
          />

          {/* <!-- Section 5 --> */}

          <h2 id="section-5" className={headerStyle}>
            5. Using Lodge
          </h2>
          <h3 id="section-5-1" className={subHeaderStyle}>
            5.1 Deploying Lodge
          </h3>
          <ul className={listNumStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>First, install the Lodge CLI.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>
                Upon installation, run <code>Lodge init</code> to initialize Lodge and prepare it to deploy on AWS.
              </p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>
                Once initialized, run <code>lodge deploy</code>. This command will take user inputs to finalize configuration and deploy the Lodge infrastructure to either a new AWS VPC or an existing VPC of the user's choice.
              </p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>
                As this is a large, complex deployment, it can take time to finish.
              </p>
            </li>
          </ul>

          <h3 id="section-5-2" className={subHeaderStyle}>
            5.2 Viewing the Deployment
          </h3>
          <p className={paragraphStyle}>
            Lodge deploys onto 15 AWS EC2 instances, which can be
            viewed and interacted with from the AWS console.
          </p>
          <img
            src={awsConsole}
            alt="The aws console, showing Lodge deployed"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            In the AWS console above, we can see that some of the components are deployed in multiple instances and autoscaling groups, with each instance in a different availability zone. We will discuss the design decisions behind these components in the next section. But first, let's see what it looks like to use Lodge.
          </p>

          <h3 id="section-5-3" className={subHeaderStyle}>
            5.3 Shipping Logs
          </h3>
          <p className={paragraphStyle}>
            This sample deployment includes an EC2 instance running an Nginx web server named after our hypothetical use case, Boardwalk. To ship logs from Boardwalk's server to Lodge, we need to install Filebeat and verify the installation's configuration file is at <code>/etc/filebeat/filebeat.yml</code>. Next, we need to remove this file with the command <code>rm /etc/filebeat/filebeat.yml</code> and replace it with the configuration we will generate from the Lodge Dashboard.
          </p>
          <p className={paragraphStyle}>
            In the <em>Shippers</em> section of the dashboard, we first locate the Nginx module and click <em>Download</em> to generate the Filebeat configuration. Then, we can create a Filebeat configuration file for our server with <code>touch /etc/filebeat/filebeat.yml</code> and copy the contents of our generated configuration file to the new <code>filebeat.yml</code>. Finally, we need to apply the new configuration by restarting Filebeat with <code>sudo systemctl restart filebeat.service</code>.

            To confirm that Nginx access logs send successfully to Lodge, we can send a `curl` request to the server.

          </p>
          <p className={paragraphStyle}>
            To confirm that Nginx access logs can send to Lodge,
            we can send a <code>curl</code> request to the server.
          </p>

          <h3 id="section-5-4" className={subHeaderStyle}>
            5.4 Viewing Logs
          </h3>
          <p className={paragraphStyle}>
            To view the Nginx access log that we just generated, we can go to the Kibana tab in the Lodge Dashboard, click on analytics within the embedded Kibana UI, and click Discover. Once in the Discover section, we can create an index pattern and view our logs.
          </p>

          <h3 id="section-5-5" className={subHeaderStyle}>
            5.5 Re-Indexing Logs from S3 Archive
          </h3>
          <p className={paragraphStyle}>
            Lodge Restore is a service available through the Lodge Dashboard that allows users to retrieve archived log data from Amazon S3, re-index it into Elasticsearch, and visualize it in Kibana. First, users define the date range of archived logs they wish to re-index, and click 'Retrieve.' All log files inserted into S3 during the specified time frame will be fetched and listed for review. Once the logs are re-indexed into Elasticsearch, a success message will indicate they are ready to be visualized and queried in Kibana. Lodge also provides the option to download the raw text of individual log files if needed.
          </p>

          <h3 id="section-5-6" className={subHeaderStyle}>
            5.6 Managing Kafka Cluster
          </h3>
          <p className={paragraphStyle}>
            Lodge integrates two open-source cluster management tools into the Lodge dashboard, Kafka Kowl and ZooNavigator. These tools are handy for users wanting more fine-grained control and visibility into one of the most complex parts of Lodge's infrastructure. In addition, users wishing to ship unsupported log types to Lodge will also appreciate these tools during the configuration process.
          </p>

          <h3 id="section-5-7" className={subHeaderStyle}>
            5.7 Component Review
          </h3>
          <p className={paragraphStyle}>
            To summarize Lodge's components, we have: Filebeat for shipping, Kafka for buffering, Logstash for parsing, transforming, and indexing, Elasticsearch and S3 for storing, and the Lodge Dashboard for managing Kafka, re-indexing archived logs back into Elasticsearch from S3, and for using Kibana to query and visualize logs in Elasticsearch.
          </p>
          <img
            src={componentReview}
            alt="component overview"
            className={`${imgStyle}`}
          />
          <h2 id="section-6" className={headerStyle}>
            6. Desigining and Building Lodge
          </h2>
          <p className={paragraphStyle}>
            This final section will cover three design decisions we made and an implementation challenge we faced when building Lodge. The design decisions include adding Kafka, Amazon S3, and a bastion host. The implementation challenge is the resolution of circular dependencies during the automation of Lodge's deployment.
          </p>
          <p className={paragraphStyle}>Let's start with Kafka.</p>

          <h3 id="section-6-1" className={subHeaderStyle}>
            6.1 Kafka
          </h3>
          <h4 className={subSubHeaderStyle}>
            Why a Buffer is Needed in the Elastic Stack
          </h4>
          <p className={paragraphStyle}>
            We've already mentioned that systems can generate large volumes of logs when problems occur. Unfortunately, Logstash instances can only handle so much data before they are overwhelmed, and horizontal scaling doesn't happen instantly. As a result, when log bursts occur, Logstash can drop the logs we need, or worse, can crash and shut down the pipeline's ability to index logs entirely.
          </p>
          <img
            src={logstashOverwhelmed}
            alt="Logstash, overwhelmed"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            <a href="https://www.elastic.co/guide/en/logstash/current/deploying-and-scaling.html" alt="Deploying and scaling Logstash" className={linkStyle}> A standard solution for this problem </a> is to use a data buffer so Logstash can pull log data off the queue at its own pace, regardless of the log generation rate.
          </p>
          <h4 className={subSubHeaderStyle}>Buffering Options</h4>
          <p className={paragraphStyle}>
            There are{" "}
            <a
              className={linkStyle}
              href="https://www.logdna.com/blog/how-to-prevent-log-data-loss-when-using-elastic-search-in-a-production-environment"
            >
              three message queue options
            </a>{" "}
            that we considered for our pipeline:
          </p>
          <img
            src={bufferingOptions}
            alt="A comparison of buffering options"
            className={`${imgStyle} -ml-16`}
          />
          <p className={paragraphStyle}>
            The first was RabbitMQ. RabbitMQ would have been a straightforward to implement, but when enqueuing large amounts of data, its responses to dequeue requests slow down significantly. On the other hand, Redis is an in-memory cache that can read and write enormous amounts of data incredibly quickly. Keeping data in memory allows it to be even faster than Kafka but also makes it less reliable since it does not persist data when it shuts down. We wanted an available, performant, and reliable solution.
          </p>
          <h4 className={subSubHeaderStyle}>Choosing Kafka</h4>
          <dl>
            <p className="mb-2">We chose Kafka for its:</p>
            <div className="flex mb-2">
              <dt className="font-bold inline mr-12">Durability:</dt>
              <dd className="inline">
                Kafka writes data to disk, so if a node crashes, data is not
                lost.
              </dd>
            </div>
            <div className="flex mb-2">
              <dt className="font-bold inline mr-8">Availability:</dt>
              <dd className="inline">
                Kafka replicates data across brokers. If a broker goes down, its data is still accessible.
              </dd>
            </div>
            <div className="flex mb-2">
              <dt className="font-bold inline mr-4">Performance:</dt>
              <dd className="inline">
                Kafka is able to process a very high volume of messages very
                quickly, which makes it able to handle bursts in logs when they
                occur.
              </dd>
            </div>
          </dl>
          <p className={paragraphStyle}>
            Kafka's drawback is that it adds complexity and management overhead to the pipeline.
          </p>
          <img src={kafkaInAction} alt="Kafka in action" className={`${imgStyle} lg:w-3/4`} />
          <p className={paragraphStyle}>
            Lodge's Kafka deployment consists of both a Zookeeper cluster and a Kafka cluster. The Zookeeper cluster handles Kafka's cluster formation and configuration management to allow Kafka to focus on data I/O operations. Kafka and Zookeeper deploy as separate clusters, so they do not compete for resources or affect each other if one of them crashes. Both deploy as three-node clusters over three availability zones (AZs), so the cluster can continue reading and writing data even if an entire AZ goes down. Having three Kafka brokers increases Kafka's performance since data can distribute and Logstash requests can load balance between brokers. Finally, although it would require a significant amount of data to overwhelm these clusters, adding more nodes to this existing cluster is much simpler than attempting to horizontally scale from a single Kafka broker.
          </p>
          <h3 id="section-6-2" className={subHeaderStyle}>
            6.2 Amazon S3
          </h3>
          <p className={paragraphStyle}>
            The other supporting component we will discuss is S3. S3 is a file storage service managed by AWS. Before we talk more about S3, though, let's talk a bit about Elasticsearch.
          </p>
          <h4 className={subSubHeaderStyle}>
            Storing Logs in Elasticsearch
          </h4>
          <p className={paragraphStyle}>
            Elasticsearch has a comprehensive <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/ilm-index-lifecycle.html" alt="The Elasticsearch Index Lifecycle" className={linkStyle}>built-in index lifecycle management system</a> with tiered storage. There are dedicated data node roles for reads and writes, and various specializations within the data role, including search and machine learning optimized roles. The roles we considered using for our cluster were the roles specific to time-series data: hot, warm, cold, and frozen.
          </p>
          <p className={paragraphStyle}>
            The hot tier is where the most computing resources are needed, as this is where new logs are being written to the current index while also being read by Kibana for real-time analysis. Once new logs are no longer writing to an index, Elasticsearch can move the index to the warm tier, where the data is still relevant enough to optimize for reads. Finally, as the data get 'colder,' the indexes get smaller and slower to read, optimizing for storage. As much as we would have enjoyed using this system in our pipeline, it would have required deploying four times the number of servers necessary for our use case. Furthermore, calculating the required SSD instance storage per node was not a decision we wanted to make for our users, as there are too many variables to consider.
          </p>
          <h4 className={subSubHeaderStyle}>Adding S3</h4>
          <p className={paragraphStyle}>
            Instead, we opted to use S3 as both cold storage for older logs and as a backup for new logs. Even though S3 charges storage fees, storing logs as JSON-formatted text files in an S3 bucket is more space and cost-efficient than storing them as JSON documents in Elasticsearch shards using local instance storage. The trade-off is speed, and is why we only want to keep the most recent logs in Elasticsearch and move everything else to S3. If the user needs to see older logs, they must first re-index them into Elasticsearch from S3 using the Lodge-Restore tool in the dashboard. This design also provides a smaller and simpler starting architecture for their Elasticsearch cluster, which we will discuss in more detail next.
          </p>
          <h4 className={subSubHeaderStyle}>Lodge Elastic Cluster</h4>
          <p className={paragraphStyle}>
            Since we decided not to deploy the tiered data node architecture for Elasticsearch, we could start with only two generic data nodes and allow the user to scale from there. Otherwise, we could still follow <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/high-availability.html" alt="High availability recommendations" className={linkStyle}> Elastic's recommendations </a> for designing an available and partition tolerant production cluster.
          </p>
          <img
            src={elasticsearchCluster}
            alt="The elasticsearch cluster"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            Some of the specific recommendations we implemented were as follows:
          </p>
          <p className={paragraphStyle}>
            Separating master-eligible and data node roles to dedicated instances, so the tasks of managing cluster state and disk I/O operations do not compete for resources, and so node roles can scale independently.
          </p>
          <p className={paragraphStyle}>
            Scaling the data nodes horizontally with primary shards in one AZ and replicas in the other. We implemented this by deploying the data nodes in an autoscaling group across both AZs and configuring the cluster to allocate shards across the two AZs.
          </p>
          <p className={paragraphStyle}>
            Using a fixed odd number of master-eligible nodes (Elasticsearch recommends three) and scaling them vertically as the cluster grows. With three master-eligible nodes, only one per AZ requires the resources to perform the master role if elected. The third node can use minimal resources and serve as a tie-breaker if a partition between the AZs and a master election occurs in both halves of the cluster. Should a partition and subsequent master election occur, the cluster half in the AZ with no vote-only node will not elect its master-eligible node as master. Instead, it will go offline until re-establishing connection with the other half, which will remain online during the partition. This configuration allows half of the cluster to stay available while preventing a <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/high-availability-cluster-small-clusters.html" alt="Resilience in small clusters" className={linkStyle}>split-brain scenario</a>, where two nodes containing two different cluster states both think they are the single source of truth for the cluster.
          </p>

          <p className={paragraphStyle}>
            With this architecture in place, users can choose how long they want to have immediate access to their logs from Kibana and delete the data from Elasticsearch once that time has elapsed. Users can rest assured that if they change their minds later, they can always re-index the data back into Elasticsearch for visualization with Kibana.
          </p>

          <h3 id="section-6-3" className={subHeaderStyle}>
            6.3 Bastion Host
          </h3>
          <h4 className={subSubHeaderStyle}> Purpose of a Bastion Host </h4>
          <p className={paragraphStyle}>
            The component we have yet to discuss is the bastion host. The purpose of a bastion host is to serve as a single point of ingress for administrators wanting to SSH into a network. If the network contains private (no ingress) subnets, administrators wanting SSH access to the instances inside the private subnets will need an instance with a public IP in a public subnet to SSH into first, then connect to the private subnet instances from there. Without a bastion host, non-web-facing application services and databases would need to be exposed to ingress from the internet to be maintained, which creates an unnecessary security vulnerability.
          </p>
          <h4 className={subSubHeaderStyle}> Lodge Bastion Host </h4>
          <p className={paragraphStyle}>
            Lodge's architecture follows Kafka and Elasticsearch's best practices by deploying them in private subnets. All Lodge components, including the internet-facing Kibana and Dashboard, only allow SSH access from the bastion host. Unlike a traditional bastion host, though, Lodge's does not allow SSH access. No ports are open in Lodge's bastion host. Instead, Lodge uses AWS Systems Manager to authenticate user access with AWS credentials. This type of connection is called an SSM session, which users can initiate using the Lodge CLI. Once the SSM session has started in the bastion host, users can SSH into the Lodge components without searching for their IPs. For example, to SSH into one of the Kafka brokers from the bastion host, they would enter the command <code>/lodge-connect kafka1</code>. Users can find more complete instructions for connecting to Lodge in the documentation.
          </p>

          {/* <!-- Section 5 --> */}
          <h2 id="section-7" className={headerStyle}>
            7. Implementation Challenges: Resolving Circular Dependencies
          </h2>
          <p className={paragraphStyle}>
            In this final section, we're going to discuss a challenge we faced in resolving circular dependencies while automating Lodge's deployment.
          </p>
          <h3 id="section-7-1" className={subHeaderStyle}>
            Relying on Values Before They Exist
          </h3>
          <p className={paragraphStyle}>
            We used AWS Cloud Development Kit (CDK) to automate Lodge's deployment. CDK is AWS's infrastructure-as-code library that provides a dynamic interface for generating Cloudformation templates, which our team preferred over working with Cloudformation directly.
          </p>
          <img
            src={circularDependencies}
            alt="circular dependencies"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            In a CDK application, values used within the application that are unknown until after the infrastructure deploys - values such as instance IDs or IP addresses - are assigned arbitrary tokens until their real values resolve. If a component is dependent on the resolved token value of another component in the same stack, then its deployment will fail. For example, Logstash requires the IP addresses of the Kafka brokers and the Elasticsearch master-eligible nodes to network with them. Errors will arise if these IPs do not exist when generating Logstash's configuration file.
          </p>
          <h3 id="section-7-2" className={subHeaderStyle}>
            Resolving Values Before Using Them
          </h3>
          <p className={paragraphStyle}>
            The solution to this ordinary type of dependency, where one component is dependent on data from another, is simple: separate the components into deployment stages, and deploy them in the order of their dependencies. For example, Logstash can deploy after Kafka and Elasticsearch once their IP addresses resolve and are accessible. We confront a different type of circular dependency, though, when components deploy in clusters.
          </p>
          <h3 id="section-7-3" className={subHeaderStyle}>
            Relying On Unresolved Values In Clusters
          </h3>
          <p className={paragraphStyle}>
            Lodge deploys Zookeeper, Elasticsearch, and Kafka in clusters. Kafka uses Zookeeper's IPs to configure its formation, so we can resolve its dependencies by staging it after Zookeeper's deployment. Unfortunately, the Zookeeper and Elasticsearch clusters require the IP addresses of each of their nodes to form successfully. So, for the Zookeeper cluster to deploy, AWS must first assign each Zookeeper node's IP address to each other Zookeeper node. Yet, AWS can only know these values after deploying each instance. This double-bind scenario is a circular dependency.
          </p>
          <img
            src={dependencyStages}
            alt="Dependency stages"
            className={`${imgStyle} -my-10`}
          />
          <p className={paragraphStyle}>
            To resolve this circular dependency, we can remove either the configuration's dependency on IPs or the dependency on AWS to generate and assign the IPs. With Elasticsearch, the former is possible since the Elastic team has created <a href="https://www.elastic.co/guide/en/elasticsearch/plugins/current/discovery-ec2.html" alt="Elasticsearch EC2 Discovery Plugin" className={linkStyle}> a plugin specifically for AWS EC2 instances </a> that replaces the need for user-input IPs with node names and fetches the IPs behind the scenes. Our Zookeeper solution requires the latter option.
          </p>
          <h3 id="section-7-4" className={subHeaderStyle}>
            Resolving Values Before Using Them: Zookeeper Edition
          </h3>
          <p className={paragraphStyle}>
            To deploy the Zookeeper cluster, we must first determine the IP address for each node. To do this, we must dynamically generate each IP based on the CIDR block of the subnets that the cluster deploys in. These CIDR blocks are dependent on how Lodge deploys. For a new VPC, we create new subnets within the CIDR block provided by the user and calculate the first available IPs from there. The task is more straightforward than with an existing VPC, as we can assume that it is empty outside the few IPs reserved by AWS.
          </p>
          <img
            src={zookeeperDependencies}
            alt="zookeeper depenencies"
            className={`${imgStyle} -my-10`}
          />
          <p className={paragraphStyle}>
            When deploying Lodge to an existing VPC, the user selects the subnets to deploy in. However, we cannot assume that the subnet is empty and must iterate through the range of IPs in a given CIDR block to verify that each potential IP address is not already assigned. We accomplish this verification using the AWS' 'describe-network-interfaces' API, which can take an IP in the request and return a list of network interfaces attached to the IP in the response. If an IP has a network interface attached to it, the IP is in use. Using these approaches, once we find the IPs we need for Zookeeper, we can assign them to the instances directly and insert them into their configuration before deploying.
          </p>
          <h2 id="section-8" className={headerStyle}>8. Future Work</h2>
          <p className={`${paragraphStyle} mb-24`}>
            We have more work to do on Lodge to make it suitable for more use cases and relieve more of the user's management burden. We'd like to add support for more log types, add monitoring and alerts for Lodge, and implement intelligent autoscaling for Elasticsearch. We'd also like to make Lodge deployable on any cloud environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
