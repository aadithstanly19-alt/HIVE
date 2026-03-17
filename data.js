// data.js - Centralized Course Content Database

const coursesData = {
  cs: {
    id: 'cs',
    title: 'Computer Science',
    icon: '💻',
    modules: [
      {
        id: 1, title: 'Network Basics', icon: '🌐', desc: 'An introduction to how the internet actually works. Covering the basics of IP addresses, routers, packets, and how computers communicate across the globe.', video: 'https://www.youtube.com/embed/_IOZ8_cPgu8', pdf: 'pdf/network_basics_notes (1).pdf',
        flashcards: [
          { q: 'What is an IP address?', a: 'A unique numerical label assigned to each device on a network, used to identify and locate it. IPv4 uses 32-bit addresses (e.g. 192.168.1.1), while IPv6 uses 128-bit addresses.' },
          { q: 'What is the difference between TCP and UDP?', a: 'TCP (Transmission Control Protocol) is connection-oriented, guarantees delivery and order. UDP (User Datagram Protocol) is connectionless, faster but does not guarantee delivery — used for streaming and gaming.' },
          { q: 'What does DNS stand for and what does it do?', a: 'Domain Name System. It translates human-readable domain names (e.g. google.com) into IP addresses that computers can use to find each other.' },
          { q: 'What is a subnet mask?', a: 'A 32-bit number that divides an IP address into network and host portions. It determines which part of the IP address identifies the network vs the individual device.' },
          { q: 'What is the OSI model?', a: 'A 7-layer conceptual framework for network communication: Physical, Data Link, Network, Transport, Session, Presentation, Application. It standardizes how data travels across a network.' },
        ],
        quiz: [
          { q: 'How many bits are in an IPv4 address?', options: ['16 bits', '32 bits', '64 bits', '128 bits'], correctIndex: 1 },
          { q: 'Which protocol guarantees packet delivery and ordering?', options: ['UDP', 'ICMP', 'TCP', 'ARP'], correctIndex: 2 },
          { q: 'What does DNS primarily do?', options: ['Encrypts network traffic', 'Assigns IP addresses dynamically', 'Translates domain names to IP addresses', 'Routes packets between networks'], correctIndex: 2 },
          { q: 'How many layers does the OSI model have?', options: ['4', '5', '6', '7'], correctIndex: 3 },
          { q: 'Which layer of the OSI model does an IP address operate at?', options: ['Physical', 'Data Link', 'Network', 'Transport'], correctIndex: 2 },
        ]
      },
      {
        id: 2, title: 'System Design', icon: '⚡', desc: 'Core principles of designing scalable, highly-available distributed systems. Topics include load balancing, horizontal vs vertical scaling, and CAP theorem.', video: 'https://www.youtube.com/embed/bUZXWq7_v2o', pdf: 'pdf/system_design_client_server.pdf',
        flashcards: [
          { q: 'What is horizontal scaling vs vertical scaling?', a: 'Horizontal scaling (scale out) adds more machines to a pool. Vertical scaling (scale up) increases the power (CPU, RAM) of an existing machine. Horizontal is generally preferred for large-scale systems.' },
          { q: 'What is a load balancer?', a: 'A server that distributes incoming network traffic across multiple backend servers to ensure no single server bears too much load, improving availability and responsiveness.' },
          { q: 'What does the CAP theorem state?', a: 'A distributed system can only guarantee 2 of 3 properties at once: Consistency (every read gets the latest write), Availability (every request gets a response), and Partition Tolerance (system works despite network splits).' },
          { q: 'What is a CDN?', a: 'Content Delivery Network — a geographically distributed group of servers that caches static content close to users, reducing latency and load on the origin server.' },
          { q: 'What is the difference between stateful and stateless architectures?', a: 'Stateful servers remember client data between requests (e.g. sessions stored in memory). Stateless servers treat each request independently — state is stored externally (DB, cache), making them easier to scale.' },
        ],
        quiz: [
          { q: 'What does "horizontal scaling" mean?', options: ['Adding more CPU to one server', 'Adding more RAM to one server', 'Adding more servers to a pool', 'Upgrading the network bandwidth'], correctIndex: 2 },
          { q: 'What is the primary purpose of a load balancer?', options: ['Store user session data', 'Distribute traffic across multiple servers', 'Encrypt data in transit', 'Cache static content globally'], correctIndex: 1 },
          { q: 'The CAP theorem states a distributed system can guarantee at most how many of its 3 properties simultaneously?', options: ['1', '2', '3', 'All 3 with eventual consistency'], correctIndex: 1 },
          { q: 'What does CDN stand for?', options: ['Central Data Node', 'Content Delivery Network', 'Cached Domain Name', 'Core Distribution Node'], correctIndex: 1 },
          { q: 'Which architecture is generally easier to scale horizontally?', options: ['Stateful', 'Stateless', 'Monolithic', 'Synchronous'], correctIndex: 1 },
        ]
      },
      {
        id: 3, title: 'Databases', icon: '💾', desc: 'Deep dive into relational (SQL) vs non-relational (NoSQL) databases, ACID properties, sharding, replication strategies, and choosing the right DB for the job.', video: 'https://www.youtube.com/embed/ztHopE5Wnpc', pdf: 'pdf/dbms_notes.pdf',
        flashcards: [
          { q: 'What are ACID properties?', a: 'Atomicity (transactions are all-or-nothing), Consistency (data is always valid), Isolation (concurrent transactions don\'t interfere), Durability (committed data persists even after failure).' },
          { q: 'What is database sharding?', a: 'Horizontal partitioning of data across multiple database instances (shards). Each shard holds a subset of the data, allowing the system to scale beyond a single machine\'s limits.' },
          { q: 'What is the difference between SQL and NoSQL databases?', a: 'SQL databases are relational, use structured schemas and tables, and excel at complex queries. NoSQL databases (document, key-value, graph, column) are schema-flexible and optimized for scale, speed, or specific data models.' },
          { q: 'What is database indexing?', a: 'A data structure (e.g. B-tree, hash) that speeds up data retrieval by allowing the DB to find rows without scanning the entire table. Trade-off: faster reads, slower writes and more storage.' },
          { q: 'What is database replication?', a: 'Copying data from one database server (master/primary) to one or more others (replicas). Provides high availability, fault tolerance, and allows read traffic to be distributed across replicas.' },
        ],
        quiz: [
          { q: 'What does the "A" in ACID stand for?', options: ['Authorization', 'Atomicity', 'Asynchronous', 'Availability'], correctIndex: 1 },
          { q: 'What is database sharding?', options: ['Encryption of database files', 'Vertical partitioning of tables', 'Horizontal partitioning across multiple instances', 'Backing up data to the cloud'], correctIndex: 2 },
          { q: 'Which type of database is best for highly structured data with complex queries?', options: ['Key-Value store', 'Document DB', 'Graph DB', 'Relational SQL DB'], correctIndex: 3 },
          { q: 'What is the main trade-off of adding a database index?', options: ['Slower reads, faster writes', 'Faster reads, slower writes + more storage', 'Less storage, faster writes', 'No trade-offs'], correctIndex: 1 },
          { q: 'What is the purpose of database replication?', options: ['To compress data', 'To shard data horizontally', 'To provide high availability and fault tolerance', 'To encrypt the database'], correctIndex: 2 },
        ]
      },
      {
        id: 4, title: 'Caching', icon: '🚀', desc: 'Strategies for minimizing latency using in-memory data stores like Redis and Memcached, CDN architectures, and cache invalidation policies.', video: 'https://www.youtube.com/embed/j6xxBsFzEw4', pdf: 'pdf/caching_notes.pdf',
        flashcards: [
          { q: 'What is a cache and why is it used?', a: 'A cache is a high-speed data storage layer that stores a subset of data (typically temporary) so future requests for that data are served faster than from the primary data source.' },
          { q: 'What is cache invalidation and why is it hard?', a: 'Cache invalidation is the process of removing or updating stale cached data. It\'s hard because distributed caches may hold copies across many nodes, and knowing exactly when data is "stale" requires coordination.' },
          { q: 'What are common cache eviction policies?', a: 'LRU (Least Recently Used) — evicts the item unused for the longest time. LFU (Least Frequently Used) — evicts the least accessed item. FIFO — evicts the oldest item regardless of usage. TTL — evicts after a set time.' },
          { q: 'What is the difference between Redis and Memcached?', a: 'Both are in-memory key-value stores. Redis supports richer data types (lists, sets, sorted sets, hashes), persistence, pub/sub, and Lua scripting. Memcached is simpler and can be faster for pure caching use cases.' },
          { q: 'What is a cache-aside (lazy loading) strategy?', a: 'The application first checks the cache. On a miss, it fetches from the database, stores the result in cache, and returns it. The cache only contains data that has been requested — reducing memory waste.' },
        ],
        quiz: [
          { q: 'What is the primary benefit of caching?', options: ['Increased storage capacity', 'Reduced latency for frequently accessed data', 'Better data security', 'Easier database management'], correctIndex: 1 },
          { q: 'Which eviction policy removes the item that was accessed least recently?', options: ['FIFO', 'LFU', 'LRU', 'TTL'], correctIndex: 2 },
          { q: 'Which supports richer data types: Redis or Memcached?', options: ['Memcached', 'Redis', 'Both are identical', 'Neither supports complex types'], correctIndex: 1 },
          { q: 'In a cache-aside strategy, what happens on a cache miss?', options: ['The request fails', 'Data is fetched from DB and stored in cache', 'A default value is returned', 'The cache is cleared'], correctIndex: 1 },
          { q: 'Why is cache invalidation considered hard?', options: ['It requires a restart of the server', 'Distributed caches may hold stale copies across many nodes', 'It deletes all data permanently', 'It only works with SQL databases'], correctIndex: 1 },
        ]
      },
      {
        id: 5, title: 'Message Queues', icon: '📫', desc: 'Decoupling services using asynchronous communication patterns with tools like Kafka and RabbitMQ to ensure reliable data delivery and event-driven architecture.', video: 'https://www.youtube.com/embed/oUJbuFMyBDk', pdf: 'pdf/message_queue_notes.pdf',
        flashcards: [
          { q: 'What is a message queue and why is it useful?', a: 'A message queue is a form of asynchronous service-to-service communication. Producers send messages to a queue; consumers read them when ready. It decouples services, buffers load spikes, and enables retry logic.' },
          { q: 'What is the difference between Kafka and RabbitMQ?', a: 'Kafka is a distributed event streaming platform designed for high-throughput, durable, ordered log storage — great for event sourcing. RabbitMQ is a traditional message broker with flexible routing, better for task queues.' },
          { q: 'What is a dead-letter queue (DLQ)?', a: 'A special queue where messages that cannot be processed (e.g. after too many retries or due to errors) are sent instead of being lost. Useful for debugging and reprocessing failed messages.' },
          { q: 'What is the pub/sub messaging pattern?', a: 'Publish-Subscribe: publishers send messages to a topic, and all subscribers of that topic receive a copy. Unlike point-to-point queues, multiple consumers can receive the same message independently.' },
          { q: 'What does "at-least-once" delivery mean?', a: 'A guarantee that every message will be delivered one or more times. Messages might be duplicated on retry, so consumers must be idempotent (processing the same message twice has no unintended side effects).' },
        ],
        quiz: [
          { q: 'What is the main purpose of a message queue?', options: ['To store user passwords', 'To decouple services via async communication', 'To cache database queries', 'To manage server configuration'], correctIndex: 1 },
          { q: 'Which tool is better suited for high-throughput event streaming?', options: ['RabbitMQ', 'Redis', 'Kafka', 'Memcached'], correctIndex: 2 },
          { q: 'What is a Dead-Letter Queue (DLQ)?', options: ['A queue for VIP messages', 'A queue for unprocessable/failed messages', 'A queue that auto-deletes after 24h', 'A backup database'], correctIndex: 1 },
          { q: 'In pub/sub, how many subscribers receive a published message?', options: ['Only one', 'None unless requested', 'All subscribers of that topic', 'A random subset'], correctIndex: 2 },
          { q: '"At-least-once" delivery means consumers must be:', options: ['Fast', 'Idempotent', 'Synchronous', 'Single-threaded'], correctIndex: 1 },
        ]
      },
      {
        id: 6, title: 'Microservices', icon: '🧩', desc: 'Breaking down monoliths into independent deployable microservices, handling inter-service communication (gRPC/REST), and API Gateways.', video: 'https://www.youtube.com/embed/CdnBwgPRyIE', pdf: 'pdf/microservices_notes.pdf',
        flashcards: [
          { q: 'What is a microservices architecture?', a: 'An approach where an application is built as a collection of small, independently deployable services, each running its own process and communicating via APIs. Each service owns its own data and business logic.' },
          { q: 'What is an API Gateway?', a: 'A server that acts as the single entry point for all client requests. It routes requests to the appropriate microservice, handles authentication, rate limiting, SSL termination, and can aggregate responses.' },
          { q: 'What is the difference between gRPC and REST?', a: 'REST uses HTTP/1.1 with JSON — human-readable, widely supported, but verbose. gRPC uses HTTP/2 with Protocol Buffers — faster binary serialization, strongly typed contracts, built-in streaming, better for inter-service calls.' },
          { q: 'What is the circuit breaker pattern?', a: 'A design pattern that detects when a downstream service is failing and "trips" to stop sending requests to it, preventing cascade failures. After a timeout, it allows limited requests through to test recovery.' },
          { q: 'What is service discovery in microservices?', a: 'The mechanism by which services automatically find and communicate with each other without hardcoded addresses. Tools like Consul, Eureka, or Kubernetes DNS dynamically register and resolve service locations.' },
        ]
      },
      {
        id: 7, title: 'Security', icon: '🔒', desc: 'Implementing robust security postures, TLS/SSL termination, OAuth/JWT authentication flows, rate limiting, and protecting against common vulnerabilities (DDoS, XSS, CSRF).', video: 'https://www.youtube.com/embed/inWWhr5tnEA', pdf: 'pdf/data_privacy_security_notes.pdf',
        flashcards: [
          { q: 'What is the difference between authentication and authorization?', a: 'Authentication verifies who you are (e.g. login with password). Authorization determines what you are allowed to do (e.g. can this user access this resource?). AuthN comes before AuthZ.' },
          { q: 'How does JWT (JSON Web Token) work?', a: 'A JWT is a signed token containing a header, payload (claims like user ID, roles), and signature. The server signs it with a secret; clients send it with requests. The server verifies the signature without needing a DB lookup.' },
          { q: 'What is a Cross-Site Scripting (XSS) attack?', a: 'An attacker injects malicious scripts into a trusted website, which then runs in the victim\'s browser. Prevented by escaping user input, using Content Security Policy (CSP), and avoiding innerHTML with untrusted data.' },
          { q: 'What is CSRF and how is it prevented?', a: 'Cross-Site Request Forgery tricks an authenticated user\'s browser into making unwanted requests. Prevention: use CSRF tokens (a unique, secret value verified server-side) or the SameSite cookie attribute.' },
          { q: 'What is TLS and what does it protect against?', a: 'Transport Layer Security encrypts data in transit between client and server. It protects against eavesdropping (man-in-the-middle attacks) and ensures the server\'s identity via certificates signed by a Certificate Authority.' },
        ]
      },
      {
        id: 8, title: 'Prompt Eng.', icon: '🤖', desc: 'Techniques for effectively conversing with LLMs: zero-shot vs few-shot prompting, chain-of-thought, system prompts, and mitigating hallucinations.', video: 'https://www.youtube.com/embed/_ZvnD73m40o', pdf: 'pdf/prompt_engineering_notes.pdf',
        flashcards: [
          { q: 'What is zero-shot prompting?', a: 'Asking an LLM to perform a task without providing any examples. The model relies entirely on its pre-trained knowledge. Effective for simple, well-defined tasks the model has seen during training.' },
          { q: 'What is few-shot prompting?', a: 'Providing the LLM with a few input-output examples in the prompt before asking your question. This guides the model\'s format and reasoning style, significantly improving output quality for structured tasks.' },
          { q: 'What is chain-of-thought (CoT) prompting?', a: 'Encouraging the LLM to show its reasoning step-by-step before giving the final answer (e.g. "Let\'s think step by step"). This dramatically improves performance on complex reasoning and math problems.' },
          { q: 'What is a system prompt?', a: 'An instruction given to an LLM at the start of a conversation (often hidden from the user) that sets the model\'s persona, constraints, and behavior for the entire session. Used to customize the model\'s role.' },
          { q: 'What is hallucination in LLMs and how can it be mitigated?', a: 'Hallucination is when an LLM confidently generates factually incorrect information. Mitigations include Retrieval-Augmented Generation (RAG), asking the model to cite sources, instructing it to say "I don\'t know", and grounding prompts with real data.' },
        ]
      },
      {
        id: 9, title: 'Agents', icon: '🧠', desc: 'Building autonomous AI systems that iterate, plan, use external tools, and manage long-term memory to solve complex multi-step problems.', video: 'https://www.youtube.com/embed/F8NKVhkZZWI', pdf: 'pdf/ai_agents_notes.pdf',
        flashcards: [
          { q: 'What is an AI agent?', a: 'An autonomous system that perceives its environment, uses an LLM as its reasoning core, decides on actions, executes them via tools or APIs, and iterates until a goal is achieved — without constant human intervention.' },
          { q: 'What is the ReAct prompting framework?', a: 'ReAct (Reasoning + Acting) interleaves the model\'s thoughts (reasoning) and actions (tool calls) in a loop. The model reasons about what to do, acts, observes the result, then reasons again — enabling multi-step problem solving.' },
          { q: 'What types of memory can an AI agent have?', a: 'In-context memory (within the prompt window), external memory (vector DBs for long-term retrieval), episodic memory (logs of past interactions), and procedural memory (fine-tuned behaviors or cached workflows).' },
          { q: 'What is tool use in the context of AI agents?', a: 'The ability of an agent to call external functions or APIs — like web search, code execution, database queries, or file I/O — to gather information or take actions beyond what the LLM knows internally.' },
          { q: 'What is a multi-agent system?', a: 'A system where multiple specialized AI agents collaborate, each handling a sub-task. An orchestrator agent delegates work to sub-agents (e.g. a planner, a coder, a reviewer), enabling complex parallel workflows.' },
        ]
      },
    ]
  },
  pharmacy: {
    id: 'pharmacy',
    title: 'Pharmacy',
    icon: '💊',
    modules: [
      { id: 1, title: 'Pharmacology 101', icon: '🔬', desc: 'Introduction to how drugs interact with biological systems, including pharmacodynamics and pharmacokinetics.', video: '' },
      { id: 2, title: 'Human Anatomy', icon: '🦴', desc: 'The fundamental systems of the human body, serving as the biological foundation for understanding drug targets.', video: '' },
      { id: 3, title: 'Pharmacy Law & Ethics', icon: '⚖️', desc: 'Navigating the regulatory landscape of pharmaceuticals, FDA approvals, and ethical dispensing of controlled substances.', video: '' },
      { id: 4, title: 'Medicinal Chemistry', icon: '🧪', desc: 'The design, development, and synthesis of pharmaceutical drugs on a molecular level.', video: '' },
      { id: 5, title: 'Therapeutics', icon: '🩺', desc: 'The application of pharmacology and disease knowledge to optimize patient treatment outcomes and manage chronic conditions.', video: '' },
      { id: 6, title: 'Compounding', icon: '⚗️', desc: 'The art and science of creating personalized medications for patients whose needs are not met by commercially available drugs.', video: '' },
      { id: 7, title: 'Clinical Trials', icon: '📊', desc: 'Understanding the phases of clinical research, blinding methods, and biostatistics involved in proving drug efficacy.', video: '' },
      { id: 8, title: 'Toxicology', icon: '☠️', desc: 'The study of adverse effects of chemicals on living organisms, determining lethal doses, and administering antidotes.', video: '' },
      { id: 9, title: 'Modern Biologics', icon: '🧬', desc: 'Exploring next-generation pharmaceuticals including monoclonal antibodies, gene therapy, and mRNA vaccines.', video: '' }
    ]
  },
  accounting: {
    id: 'accounting',
    title: 'Accounting',
    icon: '📈',
    modules: [
      { id: 1, title: 'Accounting Principles', icon: '💵', desc: 'The foundation of double-entry bookkeeping, the matching principle, and the accounting equation: Assets = Liabilities + Equity.', video: '' },
      { id: 2, title: 'Financial Statements', icon: '🧾', desc: 'How to prepare and interpret the three core statements: Income Statement, Balance Sheet, and Cash Flow Statement.', video: '' },
      { id: 3, title: 'Managerial Acct.', icon: '🏢', desc: 'internal reporting for decision making. Covering cost-volume-profit analysis, budgeting, and variance analysis.', video: '' },
      { id: 4, title: 'Taxation Basics', icon: '📝', desc: 'An overview of personal and corporate tax structures, deductions, credits, and compliance requirements.', video: '' },
      { id: 5, title: 'Auditing', icon: '🔎', desc: 'The process of objectively evaluating financial records for accuracy and adherence to Generally Accepted Accounting Principles (GAAP).', video: '' },
      { id: 6, title: 'Corporate Finance', icon: '💹', desc: 'Time value of money, capital budgeting (NPV, IRR), and determining the optimal capital structure for a business.', video: '' },
      { id: 7, title: 'Payroll & HR', icon: '🤝', desc: 'Managing employee compensation, withholding taxes, benefits administration, and labor cost tracking.', video: '' },
      { id: 8, title: 'Forensic Acct.', icon: '🕵️', desc: 'Investigating financial fraud, tracing illicit funds, and preparing testimony for legal proceedings.', video: '' },
      { id: 9, title: 'Fintech & Automation', icon: '🤖', desc: 'How AI, RPA, and modern ERP systems are revolutionizing modern accounting practices and reducing manual data entry.', video: '' }
    ]
  }
};
