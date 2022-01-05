import CaseStudyNav from "./CaseStudyNav";


function CaseStudy() {
  const headerStyle = "text-3xl font-extrabold mt-14 mb-6";
  const subHeaderStyle = "text-2xl font-bold mt-16 mb-4";
  const subSubHeaderStyle = "text-xl font-bold mt-12 mb-4";
  const paragraphStyle = "my-5";
  const discListStyle = "flex flex-col list-disc list-inside leading-10 "; // removed text-gray-300 text-2xl
  const decimalListStyle = "flex flex-col list-decimal list-inside leading-10 ";
  //const textStyle = "inline text-raisin text-xl";

  const linkStyle = "underline text-blue-500";
  // const quoteStyle = "border-l-4 border-grey-200 pl-4 italic text-raisin";
  // const numListStyle = "list-decimal list-inside leading-10";

  return (
    <div className="flex">
      <CaseStudyNav />
      <div className="xl:w-4/5 xl:pt-0">
        <div id="case-study" className="prose ml-6 leading-9 w-10/12 text-left text-gray-700 text-xl">
          <h1 className="mt-24 mb-16 text-6xl font-black">Case Study</h1>
          {/* <!-- Section 1 --> */}
          <h2 id="section-1" className={headerStyle}>1. Lodge Introduction</h2>
          <p className={paragraphStyle}>
            Lodge is an open source, self-managed logging framework for small, distributed applications. Lodge allows users to ship, transform, store, visualize, and monitor their logs.
          </p>
          <p className={paragraphStyle}>
            In this writeup, we’re first going to give a brief narrative based on a fictitious company we’ve invented for the purposes of outlining the ideal use case for Lodge. Then, we will conclude this narrative with a comparison of existing solutions to the problems it has introduced. Once we’ve shown where Lodge fits in the context of the existing solutions, we will transition to an overview of Lodge’s architecture followed by some demonstrations of how it works from a user’s perspective. In the final sections, we will discuss some of the key design decisions we made as well as an implementation challenge we faced while building Lodge. Let’s start things off with our use case.
          </p>

          {/* <!-- Section 2 --> */}
          <h2 id="section-2" className={headerStyle}>2. Lodge Use Case</h2>
          <h3 id="section-2-1" className={subHeaderStyle}>2.1 Boardwalk</h3>
          <p className={paragraphStyle}>
            This is Boardwalk. Boardwalk is a small, but fast-growing online retailer that sells handcrafted board games. Their product has become a huge hit on social media, which has exponentially increased the traffic on their website. This is an exciting time for Boardwalk, but also a challenging time, since their growth will require a complete overhaul of their architecture.
          </p>
          <p className={paragraphStyle}>
            Boardwalk’s monolithic codebase has worked great up until now, but their increasing number of users are demanding an increasing number of new features, so their development pace needs to keep up, and their architecture needs to facilitate this new pace. This is why they’ve decided to break up the monolith, and migrate to a microservice architecture.
          </p>

          <h3 id="section-2-2" className={subHeaderStyle}>2.2 Monolith to Microservices</h3>
          <p className={paragraphStyle}>
            In a monolith architecture, the business logic of the application is run entirely on one machine.
            This means that different functional components, or modules, of the application can communicate by simply calling each other’s methods.
          </p>
          <p className={paragraphStyle}>
            For example, if a user wants to checkout their cart, they will trigger a request from the web server to the <code>/checkout</code> endpoint of the app server, which will then call the <code>checkInventory</code> method of the <code>inventory</code> module, which sends a SQL query to the database, and so on.
          </p>
          <p className={paragraphStyle}>
            A microservice architecture introduces network complexity between these modules. Now, they must communicate by making API calls over an inherently unreliable network.
            The ‘user checkout’ event now begins with a request to the checkout service, which fetches the user’s cart contents from its database, then initiates a request to the inventory service for it to verify that the product is available in its database, and so on.
            This complexity is not just added for fun, though. There are significant benefits gained from using this architecture.
          </p>
          <p>
            Remember, Boardwalk is aiming to increase development turnover on new features. So if they want to update their checkout service, they can do so independently of the rest of the services.
            And of course, Boardwalk is growing fast, so now they can accommodate this growth by horizontally scaling these services as needed.
          </p>
          <p>
            So now the Boardwalk team is set up to focus all their time and engineering effort on new features - right? Well, maybe not; there’s a problem. Users are reporting issues with the checkout system.
            What does the team do?
          </p>
          <h3 id="section-2-3" className={subHeaderStyle}>2.3 Debugging microservices</h3>
          <p className={paragraphStyle}>
            In their previous architecture, all they needed to do was SSH into their application server and maybe their database server to examine the logs. Now, they have to SSH into multiple instances, examine their logs, and try to piece together the entire application state from a series of isolated records. Is the checkout service running? Is the payment service running? Are they both running but the network is failing? Fortunately, the number of nodes is still low enough that it’s possible, but as it increases, they can see that this process will soon become untenable.
          </p>
          <p className={paragraphStyle}>
            So the team begins researching a solution. It’s important to note here, however, that their users have not stopped using their application and the backlog of features these users have requested, including a more streamlined checkout service and a UI for customizing their board game orders, has not suddenly disappeared. They need a solution, but every minute they spend working on it is a minute they are not spending developing the application.
          </p>
          <h3 id="section-2-4" className={subHeaderStyle}>2.4 Observability</h3>
          <p className={paragraphStyle}>
            The team soon finds out that their problem has a name: <b>observability</b>.
            The need for observability is universal across all distributed systems and the literature devoted to this subject is enormous. The type of observability solution that fits Boardwalk’s use case is going to need to involve some sort of log aggregation. That is, they need to collect the logs from all the individual servers in their system and send them to one centralized location.
          </p>
          <p>
            This process usually involves a collection agent that taps into the log files of whatever machine it is installed on, detects changes, and sends those changes over the network to another location. However, they also discover that since these log files contain raw text without much structure, just piling them all in a database as-is is not helpful. The logs need to be searchable.
          </p>
          <p>
            A mature observability solution needs to store the data in a way that it is queryable and visualizable. In SQL database terms, this process would entail dividing up the relevant characteristics of the logs, such as the timestamp, the source, and the message, and organizing the tables and columns of the database using these characteristics. That way, instead of visually scanning through thousands of lines of text, they can leverage all the power of SQL queries to find and analyze the logs they’re looking for. In addition to being searchable, the data returned from these queries can now be fed into a visualization tool to create interactive dashboards. This is the path for getting from raw text stored in multiple locations to an interactive dashboard summarizing all of the data in one location. There is a bit more left to learn about logs, though, before the team can decide on a solution.
          </p>
          <h3 id="section-2-5" className={subHeaderStyle}>2.5 Time-Series Data</h3>
          <p>
            One important factor they need to consider is the time-series nature of log data. This means the time the log occurred is a primary component in organizing it. If the team needs to diagnose a failure that occurs at 4:30pm, they need to see the logs generated in a narrow window of time leading up to and immediately after that time.
          </p>
          <p>
            Furthermore, time-series data has a shelf life. As it ages, it tends to become less and less relevant, so it’s storage requirements evolve over time. The most recent logs need to be both written to and read from disk fast for real-time analysis. Whereas Tuesday’s logs, for instance, will not need to be written to on Wednesday, and the likelihood that the team will need urgent access to logs from a year ago is next to none.
          </p>
          <h3 id="section-2-6" className={subHeaderStyle}>2.6 Bursty Traffic</h3>
          <p>
            The other factor to consider is that logs are bursty. While things are running well, logs tend to be generated in a fairly steady stream. However, when something goes wrong, systems can generate as much as 5 times the normal amount. If a logging solution is not prepared to handle those bursts, it can fail when it is needed most.
          </p>
          <h3 id="section-2-7" className={subHeaderStyle}>2.7 Summary</h3>
          <p className={paragraphStyle}>In summary, the team needs a solution that:</p>
          <ul className={discListStyle + paragraphStyle}>
            <li>Collects the logs from all nodes</li>
            <li>Normalizes the logs</li>
            <li>Stores the logs in a central location</li>
            <li>Queries and visualizes the logs</li>
            <li>Manages the storage of the logs based on relevance</li>
            <li>Handles bursts of logs</li>
          </ul>

          {/* <!-- Section 3 --> */}

          <h2 id="section-3" className={headerStyle}>3. Existing Solutions</h2>
          <p className={paragraphStyle}>
            The team determines that their options are to buy, operate, or build a solution.
          </p>

          <h3 id="section-3-1" className={subHeaderStyle}>3.1 Buying A Solution</h3>
          <p className={paragraphStyle}>
            Buying is the fastest and simplest option, but also the costliest.
          </p>
          <p className={paragraphStyle}>
            There are great log management services in the marketplace such as Logz, LogDNA, and Scalyr. However, their convenience comes with a steep cost and the potentially sensitive data being sent to them is no longer owned by their users.
          </p>
          <p>
            AWS, like most cloud providers, does offer a <a className={linkStyle} href="https://docs.aws.amazon.com/solutions/latest/centralized-logging/overview.html">ready-to-deploy logging pipeline</a> consisting of managed services for ingesting, storing, and visualizing logs. This solution allows users to have the convenience of a managed solution while maintaining data ownership, but each component in the pipeline charges per log that passes through it, which, as log traffic increases, can potentially be even more expensive than the third-party managed solutions.
          </p>

          <h3 id="section-3-2" className={subHeaderStyle}>3.2 Operating A Solution</h3>
          <p className={paragraphStyle}>
            Operating entails installing an open source solution on their own infrastructure and maintaining it themselves.
          </p>
          <p className={paragraphStyle}>
            There are multiple open source solutions available, but the one that is by far the most widely used is the Elastic stack, formerly known as the ELK stack, which stands for Elasticsearch, Logstash, and Kibana. Logstash is used to transform and index the data into Elasticsearch, which is a document database whose shards contain instances of the full-text search engine called Apache Lucene. This design is in contrast to the SQL database paradigm we outlined before when discussing log aggregation in general. There are no tables for data to be normalized into. Instead, there are indexes, which <a className={linkStyle} href="https://www.elastic.co/guide/en/elasticsearch/reference/current/use-elasticsearch-for-time-series-data.html">Elastic recommends organizing by timestamp</a>, not log source. That means that logs from all sources generated in a specified window time will be written to the same index. Then, once the specified time has elapsed, a new index will be created and no more logs will be written to the old one. No transformation is actually required to index the logs, since Elasticsearch stores text, but it does help the readability of the logs to do some formatting before they are stored.
          </p>
          <p className={paragraphStyle}>
            This data stored in Elasticsearch is then queried and visualized by Kibana, which uses Elasticsearch’s REST API, rather than SQL. SQL-like query syntax is an available feature of Kibana, but the REST API is actually what’s being used under the hood.
          </p>
          <p className={paragraphStyle}>
            Logstash, in addition to parsing and indexing data, used to serve as a collection and shipping agent, but the Elastic team has since replaced it with their lighter weight tool Beats. The inclusion of Beats in the ELK stack is why Elastic now refers to it as the Elastic stack, which is the term we will use going forward.
          </p>
          <p className={paragraphStyle}>
            The Boardwalk team was able to easily install and use a small “development mode” stack for testing, but in researching the <a className={linkStyle} href="https://logz.io/learn/complete-guide-elk-stack/#elk-in-production">next steps required for production configuration</a>, they found themselves in a deep and time-consuming territory of indexes, shards, JVM heap and garbage collection, multi-availability-zone clusters, grok patterns, and message queues.
          </p>

          <h3 id="section-3-3" className={subHeaderStyle}>3.3 Where Lodge fits in</h3>
          <p className={paragraphStyle}>
            This configuration difficulty leaves the team with a dilemma: they don’t have the budget to pay for the convenience of a managed solution, but they don’t have the time to figure out how to set up a robust self-managed solution. In addition, they’re not comfortable with giving up ownership of data for the convenience, either. If they could just get a viable Elastic stack deployed with a UI that makes the management sensible, they would be prepared to make the trade-off of the added time needed to manage the cluster for the ownership of data and the financial expense saved by not using a managed solution.
          </p>
          <p className={paragraphStyle}>
            This is where Lodge fits in.
          </p>
          <p className={paragraphStyle}>
            Lodge provides an opinionated pre-configuration for the Elastic stack that allows users to leverage Elastic’s benefits while eliminating the engineering overhead of setting up the stack. Lodge does not eliminate the maintenance burden, but does provide a UI for facilitating stack maintenance. Furthermore, Lodge does use one managed service for log backup and archiving; but this actually both simplifies and even decreases storage cost for reasons we will get into later. Plus, users still get to own their data. The trade-off is that Lodge only provides pre-configuration for a small subset of log types, so users needing to ship other logtypes will not get as streamlined of an experience.
          </p>
          <p className={paragraphStyle}>
            So hopefully this hypothetical use case and existing solutions comparison has given you an understanding of why Lodge was built. Next, we’d like to give a high-level overview of Lodge’s architecture as well as some demos showing how Lodge works.
          </p>

          {/* <!-- Section 4 --> */}

          <h2 id="section-4" className={headerStyle}>4. Lodge Architecture</h2>
          <h3 id="section-4-1" className={subHeaderStyle}>4.1 Overview</h3>
          <p className={paragraphStyle}>
            This is what Lodge looks like from a user’s perspective on a high level. The user has deployed Lodge on their network, so now all the applications in that network can ship logs to the stack using Filebeat, a subset of Beats specifically for collecting and forwarding log data. This user can then view those logs from the Lodge dashboard that is deployed with the stack.
          </p>
          <p className={paragraphStyle}>
            Next, let’s zoom in on Lodge and take a closer look at its individual components.
          </p>

          <h3 id="section-4-2" className={subHeaderStyle}>4.2 Components</h3>
          <p className={paragraphStyle}>
            Lodge’s infrastructure consists of a series of components that work together to ship, transform, store, visualize,  and monitor log data. Some of these components will be familiar from our previous discussion of the Elastic stack. Lodge uses these components as well as some additional supporting ones, all of which we will go over before we demonstrate how Lodge works.
          </p>
          <h3 id="section-4-3" className={subHeaderStyle}>4.3 Filebeat for Collection and Shipping</h3>
          <p className={paragraphStyle}>
            First, we have Filebeat. This component is not actually part of the Lodge deployment, but it is the shipper that Lodge automatically generates configuration files for that the user installs on their servers.
          </p>
          <p className={paragraphStyle}>
            Filebeat is a lightweight shipper for forwarding and centralizing log data. Before Filebeat, Logstash was used both as a data collector as well as a data transformer.  But there was one issue, Logstash required a Java Virtual Machine (JVM) to run. This dependency, combined with its implementation in Ruby, caused Logstash to consume far more memory than necessary just to perform the task of collecting and shipping logs. This overconsumption of memory is why Elastic created Beats. Beats decouples the tasks of collection and shipping from the parsing and indexing that Logstash does. Thanks to Beats, users can ship their logs without having to worry about their applications competing for resources with the collection agent.
          </p>
          <p className={paragraphStyle}>
            Once installed on the user’s servers, Filebeat can actively monitor the log files specified in the configuration for changes and forward them to Kafka for ingestion into the Lodge pipeline.
          </p>
          <h3 id="section-4-4" className={subHeaderStyle}>4.4 Kafka for Buffering</h3>
          <p className={paragraphStyle}>
            Next, we have Kafka. Kafka is the first supporting component we’ve introduced. Logs and log volumes are unpredictable in nature. Following an incident in a production system, logs can suddenly surge and overwhelm an unprepared logging infrastructure precisely when it is needed  most. In order to protect Logstash and Elasticsearch against such data bursts, Lodge has added Kafka to the Elastic stack as a buffering mechanism to flatten the curve when there is a sudden burst in log traffic
          </p>
          <p className={paragraphStyle}>
            Here, Kafka is deployed as a cluster. In order to manage the state of the Kafka cluster, we have Zookeeper deployed with it. We will discuss in more detail later in the design decisions section why we’ve configured the cluster in this way, but for now just note that it’s there to buffer incoming logs for Logstash.
          </p>
          <h3 id="section-4-5" className={subHeaderStyle}>4.5 Logstash for Parsing and Indexing</h3>
          <p className={paragraphStyle}>
            After Kafka we have Logstash. To supplement what was mentioned before about Logstash, Logstash is a server-side real-time data-processing pipeline that ingests data from multiple sources simultaneously, transforms it, and then sends it to a “stash” like Elasticsearch and Amazon S3. In this case, Logstash first ingests log data from specific Kafka topics, performs parsing and transformation, and sends logs to two different storage components in Lodge.
          </p>
          <h3 className={subHeaderStyle}>4.6 Elasticsearch and Amazon S3 for Storage</h3>
          <p className={paragraphStyle}>
            This leads us to the storage layer. Here, in addition to Elasticsearch, we have an Amazon S3 bucket receiving data from Logstash. S3 is supporting Elasticsearch here by acting as a backup for data currently in Elasticsearch as well as long-term archive for data no longer needed in Elasticsearch. What exactly S3 is, and why we are using it instead of just storing data in Elasticsearch, we will also cover in the design decisions section.
          </p>
          <p className={paragraphStyle}>
            In between Elasticsearch and S3, we have Lodge Restore. As we mentioned previously, S3 stores data that is no longer needed in Elasticsearch. But what if the user changes their mind? For that purpose, we built an application to retrieve data from S3 and re-index it back into Elasticsearch.
          </p>
          <h3 id="section-4-6" className={subHeaderStyle}>4.7 Kibana for Querying and Visualization</h3>
          <p className={paragraphStyle}>
            Kibana is the remaining Elastic stack component we use in Lodge. Kibana is Elastic’s UI for interacting with Elasticsearch through its API. Kibana stores its data within Elasticsearch indices, so we can keep Kibana stateless. If the Kibana server goes down, users can simply spin up a new one without worrying about losing data - and this convenience comes without the hassle of managing a separate database.
          </p>
          <h3 className={subHeaderStyle}>4.8 Lodge Dashboard for Everything Else</h3>
          <p className={paragraphStyle}>
            Finally, we have the Lodge Dashboard, which serves as a unified dashboard for using Kibana and Lodge Restore, downloading Filebeat configurations, and managing Kafka and Zookeeper clusters.
          </p>

          {/* <!-- Section 5 --> */}

          <h2 id="section-5" className={headerStyle}>5. Using Lodge</h2>
          <h3 id="section-5-1" className={subHeaderStyle}>5.1 Deploying Lodge</h3>
          <ul className={decimalListStyle}>
            <li>The user installs the Lodge CLI.</li>
            <li>
              Once the installation is done, the user can run <code>lodge init</code> to initialize Lodge and prepare it to be deployed on AWS.
            </li>
            <li>
              Once the initialization is done, the user can run <code>lodge deploy</code>, which after a few questions, it will deploy the entire Lodge infrastructure based on a series of Cloudformation templates that are generated from the Lodge CDK application, onto either a new AWS VPC or an existing VPC of their choice.
            </li>
            <li>
              As this is a large, complex deployment, it may take quite some time to finish.
            </li>
          </ul>

          <h3 id="section-5-2" className={subHeaderStyle}>5.2 Viewing the Deployment</h3>
          <p className={paragraphStyle}>
            Lodge is deployed on a total of 15 AWS EC2 instances that can be viewed and interacted with from the AWS console, if the user wishes to do so. We can see in the AWS console that some of the components are deployed in multiple instances and in autoscaling groups with each instance in a different availability zone. The reasoning behind these design decisions, as well as the component we have not yet introduced, the bastion host, will be discussed in the next section. First, let’s see what it looks like to use Lodge.
          </p>

          <h3 id="section-5-3" className={subHeaderStyle}>5.3 Shipping Logs</h3>
          <p className={paragraphStyle}>
            In this sample deployment, we also included an instance running an Nginx web server that we named after our hypothetical use case, Boardwalk. In order to ship logs from this Boardwalk server to Lodge, we need to install Filebeat on it and verify that the configuration file included with the installation is located at <code>/etc/filebeat/filebeat.yml</code>. We need to remove this file <code>rm /etc/filebeat/filebeat.yml</code> and replace it with the configuration that we will generate from the Lodge Dashboard
          </p>
          <p className={paragraphStyle}>
            In the Shippers section of the dashboard, we need to locate the Nginx module and click ‘Download’ to generate the Filebeat configuration. Then, we can create a Filebeat configuration file for our server <code>touch /etc/filebeat/filebeat.yml</code> and copy the contents of our generated configuration file to the new <code>filebeat.yml</code>. Finally, we need to apply the new configuration by restarting Filebeat <code>sudo systemctl restart filebeat.service</code>.
          </p>
          <p className={paragraphStyle}>
            To test that Nginx access logs are successfully being sent to Lodge, we can send a <code>curl</code> request to the server.
          </p>

          <h3 id="section-5-4" className={subHeaderStyle}>5.4 Viewing Logs</h3>
          <p className={paragraphStyle}>
            To view the Nginx access log that we just generated, we can go to the Kibana tab in the Lodge Dashboard, and click on analytics within the embedded Kibana UI, and then Discover. Once in the Discover section, we can create an index pattern and view our logs.
          </p>

          <h3 id="section-5-5" className={subHeaderStyle}>5.5 Re-Indexing Logs from S3 Archive</h3>
          <p className={paragraphStyle}>
            Another tool available in the Lodge Dashboard is Lodge Restore. Lodge Restore is a service that allows users to retrieve archived log data from Amazon S3 given a specific date range and to re-index the log data back into Elasticsearch to be visualized in Kibana. First, the user defines the start and end date to retrieve the archived logs from S3. Then, upon clicking ‘Retrieve’, all the log files that were inserted into S3 during that time frame will be fetched and listed for the user to review. Once the success message has been shown, it indicates that the logs are re-indexed into Elasticsearch behind the scenes and are ready to be visualized and queried in Kibana. We have also given the user the option to download the raw text of the individual log files, if needed.
          </p>

          <h3 id="section-5-6" className={subHeaderStyle}>5.6 Managing Kafka Cluster</h3>
          <p className={paragraphStyle}>
            In the Lodge dashboard, we have integrated with two existing open source cluster management tools, Kafka Kowl and ZooNavigator. For users wanting more fine-grained control and visibility into one of the most complex parts of the Lodge infrastructure, these tools will be highly useful. Furthermore, users wishing to ship unsupported log types to Lodge will also appreciate these tools during the configuration process.
          </p>

          <h3 id="section-5-7" className={subHeaderStyle}>5.7 Component Review</h3>
          <p className={paragraphStyle}>
            Here is a review of all the Lodge components: Filebeat for shipping logs to Lodge, Kafka for buffering the logs, Logstash for parsing, transforming, and indexing the logs, Elasticsearch and S3 for storing the logs, and the Lodge Dashboard for managing Kafka, re-indexing archived logs back into Elasticsearch from S3, and using Kibana, which is there to query and visualize the logs in Elasticsearch.
          </p>

          <h2 id="section-6" className={headerStyle}>6. Desigining and Building Lodge</h2>
          <p className={paragraphStyle}>
            In this final section, we are going to cover three design decisions we made and an implementation challenge we faced when building Lodge. The design decisions include adding Kafka, Amazon S3, and a bastion host. The implementation challenge is the resolution of circular dependencies during the automation of Lodge’s deployment.
          </p>
          <p>
            Let’s start with Kafka.
          </p>

          <h3 id="section-6-1" className={subHeaderStyle}>6.1 Kafka</h3>
          <h4 className={subSubHeaderStyle}>Why a Buffer is Needed in the Elastic Stack</h4>
          <p className={paragraphStyle}>
            We’ve already mentioned that logs are bursty in nature. That is, when something goes wrong, systems can all of a sudden generate a burst of logs much larger than the normal traffic it generates when everything is running smoothly. Logstash instances can only handle so much data and horizontal scaling doesn’t happen instantly, so when this burst occurs, a large portion of the log data we would want can be lost, or worse, Logstash can crash and shut down the pipeline’s ability to index any logs at all. <a className={linkStyle} href="https://www.elastic.co/guide/en/logstash/current/deploying-and-scaling.html">A common solution for this problem</a> is to use a data buffer so Logstash can pull log data off the end of the queue at its own pace, regardless of the rate at which the logs are generated.
          </p>
          <h4 className={subSubHeaderStyle}>Buffering Options</h4>
          <p className={paragraphStyle}>
            There are three message queue options that we considered for our pipeline. The first is RabbitMQ, which is a simple broker solution. However, when it has to enqueue large amounts of data, its responses to dequeue requests from Logstash slow down considerably. Redis is also an option, since it is an in-memory cache that can read and write enormous amounts of data at an incredible speed. Keeping data in memory allows it to be even faster than Kafka, but also makes it less reliable, since it does not persist data when it shuts down.
          </p>
          <h4 className={subSubHeaderStyle}>Choosing Kafka</h4>
          <ul className={discListStyle + paragraphStyle}>
            We chose Kafka for its:
            <li className={paragraphStyle}><b>Durability:</b> Kafka writes data to disk, so if a node crashes, data is not lost.</li>
            <li className={paragraphStyle}><b>Availability:</b> Kafka replicates data across brokers, so if one broker goes down, its data is still accessible from the other brokers.</li>
            <li className={paragraphStyle}><b>Performance:</b> Kafka is able to process a very high volume of messages very quickly, which makes it able to handle bursts in logs when they occur.</li>
          </ul>

          <h3 id="section-6-2" className={subHeaderStyle}>6.2 Amazon S3</h3>
          <p className={paragraphStyle}>
            The other supporting component we’d like to discuss is S3. S3 is a file storage service managed by AWS. Before we talk more about S3, though, let’s talk a little bit about Elasticsearch.
          </p>
          <h4 className={subSubHeaderStyle}>Storing Logs in Elasticsearch Only</h4>
          <p>
            Elasticsearch has an amazing <a className={linkStyle} href="https://www.elastic.co/guide/en/elasticsearch/reference/current/ilm-index-lifecycle.html">built-in index lifecycle management system</a> with tiered storage. Not only is there a dedicated data node role for reads and writes, but there are various specializations within the data role including search and machine learning optimized roles. The roles we considered using for our cluster were the roles specific to time-series data: hot, warm, cold, and frozen. The hot tier is where the most computing resources are needed, as this is where new logs are being written to the current index while also being read by Kibana for real-time analysis. Once new logs are no longer being written to an index, the index can be moved to the warm tier, where the data is still relevant enough that it still needs to be read fast, so it can be fully optimized for reads. Then, as the tiers get ‘colder’, the indexes get smaller and slower to read, instead optimizing for storage. This system is great, and as much of a pleasure as it would have been to use it in our pipeline, it would have required deploying four times the servers we really needed for our use case. Furthermore, calculating the required SSD instance storage needed per node was not a decision we wanted to make for our users, as there are too many variables.
          </p>
          <h4 className={subSubHeaderStyle}>Adding S3</h4>
          <p>
            Instead, we opted to use S3 as both cold storage for older logs and as a backup for new logs. Even though S3 charges storage fees, storing logs as JSON-formatted text files in an S3 bucket is more space and cost efficient than storing them as JSON documents in Elasticsearch shards using local instance storage. The trade-off is speed. This trade-off is why we only want to keep the most recent logs in Elasticsearch, and move everything else to S3. If the user needs to see older logs, they will have to first re-index them into Elasticsearch from S3 using the Lodge-Restore tool in the dashboard. This design also provides a smaller and simpler starting architecture for their Elasticsearch cluster, which we will discuss in more detail next.
          </p>
          <h4 className={subSubHeaderStyle}>Lodge Elastic Cluster</h4>
          <p>
            Since we decided not to deploy the tiered data node architecture for Elasticsearch, we could start with only two generic data nodes and allow the user to scale from there. Otherwise, we were still able to follow Elastic’s <a className={linkStyle} href="https://www.elastic.co/guide/en/elasticsearch/reference/current/high-availability.html">recommendations</a> for designing an available and partition tolerant production cluster.
          </p>
          <ul className={discListStyle + paragraphStyle}>
            Some of the specific recommendations we implemented were as follows:
            <li className={paragraphStyle}><b>Separating master-eligible and data node roles to dedicated instances</b> so the tasks of managing cluster state and disk I/O operations do not compete for resources and they can scale independently.</li>
            <li className={paragraphStyle}><b>Scaling the data nodes horizontally with primary shards in one AZ and replicas in the other.</b> We implemented this by deploying the data nodes in an autoscaling group across both AZs and configuring the cluster to allocate shards across the two AZs.</li>
            <li className={paragraphStyle}><b>Using a fixed odd number of master-eligible nodes (they recommend three) and scaling them vertically to keep up with the cluster state as it grows.</b> With three master-eligible nodes, only one per AZ requires the resources to perform the master role in the event that it is elected. The third one can use minimal resources and only serve as a tie-breaker in the event of a partition between the AZs and a master election is held in both halves of the cluster. If this partition and subsequent master election occurs, the half of the cluster in the AZ with no vote-only node will not elect its master-eligible node as master, and instead, will go offline until a connection is established with the other half, which will remain online during the partition. This configuration allows half of the cluster to remain available, while preventing a <a className={linkStyle} href="https://www.elastic.co/guide/en/elasticsearch/reference/current/high-availability-cluster-small-clusters.html">split-brain scenario</a>, where there are two nodes containing two different cluster states that both think they are the single source of truth for the cluster.</li>
          </ul>
          <p className={paragraphStyle}>With this architecture in place, users are able to choose how long they want to have immediate access to their logs from Kibana and delete the data from Elasticsearch once that time has elapsed. They can rest assured knowing that if they change their mind later, they can always re-index the data back into Elasticsearch for visualization with Kibana.</p>

          <h3 id="section-6-3" className={subHeaderStyle}>6.3 Bastion Host</h3>
          <h4 className={subSubHeaderStyle}> Purpose of a Bastion Host </h4>
          <p className={paragraphStyle}>
            The one component we have not yet discussed is the bastion host. The purpose of a bastion host is to serve as a single point of ingress for administrators wanting to SSH into a network. If the network contains private (no ingress) subnets, then administrators wanting SSH access to the instances inside the private subnets will need an instance with a public IP in a public subnet to SSH into first, then connect to the private subnet instances from there. Without a bastion host, non web-facing application services and databases would need to be exposed to ingress from the internet in order to be maintained, which creates an unnecessary security vulnerability.
          </p>
          <h4 className={subSubHeaderStyle}> Lodge Bastion Host </h4>
          <p className={paragraphStyle}>
            Lodge’s architecture follows Kafka and Elasticsearch best practices by deploying them in private subnets. All Lodge components, including the internet-facing Kibana and Dashboard, only allow SSH access from the bastion host. Unlike a traditional bastion host, though, Lodge’s does not allow SSH access to it. In fact, there are no open ports at all in Lodge’s bastion host. Instead, Lodge uses AWS Systems Manager to authenticate user access with AWS credentials. This type of connection is called an SSM session, which users can initiate using the Lodge CLI. Once the SSM session has started in the bastion host, users can SSH into the Lodge components without needing to search for their IPs. For example, to SSH into one of the Kafka brokers from the bastion host, they would simply enter the command <code>/lodge-connect kafka1</code>. More complete instructions for connecting to Lodge can be found in the documentation.
          </p>

          {/* <!-- Section 5 --> */}
          <h2 id="section-7" className={headerStyle}>7. Implementation Challenges</h2>
          <p className={paragraphStyle}>
            In this final section, we’re going to discuss a challenge we faced in resolving circular dependencies while automating Lodge’s deployment.
          </p>
          <h3 id="section-7-1" className={subHeaderStyle}>7.1 Resolving Circular Dependencies</h3>
          <h4 className={subSubHeaderStyle}>Relying on Values that Don't Exist Yet</h4>
          <p>
            For automating Lodge's deployment, we used AWS Cloud Development Kit, or CDK. CDK is AWS’s infrastructure-as-code library that provides a dynamic interface for generating Cloudformation templates which our team preferred over working with Cloudformation directly.
          </p>
          <p>
            In a CDK application, values that are used within the application, but are not actually known until after the infrastructure is deployed - values such as instance IDs or IP addresses -  are assigned arbitrary tokens until their real values are resolved. However, if a component is dependent on the resolved token value of another component in the same stack, then its deployment will fail. For example, Logstash needs the IPs of the Kafka brokers as well as the Elasticsearch master-eligible nodes to network with them. If these IPs do not exist at the time Logstash’s configuration file is generated, then we have a problem.
          </p>
          <h4 className={subSubHeaderStyle}>Resolving Values Before Using Them</h4>
          <p>
            The solution to this ordinary type of dependency, where one component is dependent on data from another, is simple: separate the components into their own deployment stage and deploy them in the order of their dependencies. For instance, Logstash can be deployed after Kafka and Elasticsearch, so their IPs are accessible when it’s time for Logstash to deploy. We’re confronted with a different type of dependency, though, with the components that are deployed in clusters.
          </p>
          <h4 className={subSubHeaderStyle}>Relying On Unresolved Values In Clusters</h4>
          <p>
            These components are Zookeeper and Elasticsearch. Kafka is also deployed in a cluster, but it uses Zookeeper’s IPs to configure its cluster formation, so this dependency can be resolved like Logstash. Zookeeper and Elasticsearch, however, require their own IPs to form their clusters. For Zookeeper, that means every instance in the cluster needs its own IP as well as the IPs of the other two instances. So, in order for Zookeeper to deploy and form a cluster using its IPs, it needs AWS to assign the IPs, which can only happen after the instances have been deployed. This double-bind scenario is a circular dependency.
          </p>
          <p className={paragraphStyle}>
            Our options for resolving this circular dependency are either removing the dependency on IPs in the configuration or removing the dependency on AWS to generate and assign the IPs. With Elasticsearch, the former is possible, since the Elastic team has created <a className={linkStyle} href="https://www.elastic.co/guide/en/elasticsearch/plugins/current/discovery-ec2.html">a plugin specifically for AWS EC2 instances</a> that replaces the need for user-input IPs with node names and fetches the IPs behind the scenes. Our Zookeeper solution requires the latter option.
          </p>
          <h4 className={subSubHeaderStyle}>Resolving Values Before Using Them: Zookeeper Edition</h4>
          <p className={paragraphStyle}>
            For Zookeeper, we need to determine the IPs ourselves before deployment. This means we first need to dynamically generate the IPs based on the CIDR block of the subnets that the cluster is deployed in. Where these CIDR blocks come from depends on how Lodge is deployed. For a new VPC, we create new subnets within the CIDR block provided by the user and calculate the first available IPs from there. The task is simpler than with an existing VPC, as we can assume that it is empty, other than the few IPs reserved by AWS.
          </p>
          <p className={paragraphStyle}>
            For an existing VPC, where the user selects the subnets they want to deploy Lodge in, we have to iterate through the range of IPs in a given CIDR block and verify that each potential IP is not already assigned, since we can no longer assume that the subnet is empty. We accomplish this verification using the AWS ‘describe-network-interfaces’ API, which can take an IP in the request and return a list of network interfaces attached to the IP in the response. If an IP has a network interface attached to it, that means the IP is in use. Using these approaches, once we find the IPs we need for Zookeeper, we can assign them to the instances directly and insert them into their configuration before they deploy.
          </p>
          <h2 className={headerStyle}>8. Future Work</h2>
          <p className={`${paragraphStyle} mb-24`}>
            There’s still more work we have left to do on Lodge to make it suitable for more use cases and relieve more of the user’s management burden. We’d like to start by adding support for more log types. Then, we’d like to add monitoring and alerts for Lodge and implement intelligent autoscaling for Elasticsearch. Finally, we’d like to make Lodge deployable on any cloud environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;