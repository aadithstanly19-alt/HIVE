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
          { q: 'How many bits are in an IPv4 address?', options: ['16 bits', '32 bits', '64 bits', '128 bits'], correctIndex: 1, difficulty: 'easy' },
          { q: 'What does DNS stand for?', options: ['Data Network Service', 'Domain Name System', 'Digital Node Server', 'Data Node Sync'], correctIndex: 1, difficulty: 'easy' },
          { q: 'Which protocol is connectionless?', options: ['TCP', 'FTP', 'UDP', 'SSH'], correctIndex: 2, difficulty: 'easy' },
          { q: 'Which protocol guarantees packet delivery?', options: ['UDP', 'ICMP', 'TCP', 'ARP'], correctIndex: 2, difficulty: 'medium' },
          { q: 'How many layers does the OSI model have?', options: ['4', '5', '6', '7'], correctIndex: 3, difficulty: 'medium' },
          { q: 'Which OSI layer does an IP address operate at?', options: ['Physical', 'Data Link', 'Network', 'Transport'], correctIndex: 2, difficulty: 'medium' },
          { q: 'What happens when a router receives a packet with TTL=0?', options: ['Forwards it onward', 'Drops it and sends ICMP', 'Stores it in buffer', 'Resets the TTL'], correctIndex: 1, difficulty: 'hard' },
          { q: 'Which subnet mask represents a /26 network?', options: ['255.255.255.0', '255.255.255.192', '255.255.255.128', '255.255.254.0'], correctIndex: 1, difficulty: 'hard' },
          { q: 'In TCP, what does the SYN-ACK step accomplish?', options: ['Terminates the connection', 'Confirms the client SYN and acknowledges', 'Sends data payload', 'Resets the session'], correctIndex: 1, difficulty: 'hard' },
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
          { q: 'What does "horizontal scaling" mean?', options: ['Add CPU to one server', 'Add more RAM', 'Add more servers to the pool', 'Upgrade bandwidth'], correctIndex: 2, difficulty: 'easy' },
          { q: 'What does CDN stand for?', options: ['Central Data Node', 'Content Delivery Network', 'Cached Domain Name', 'Core Distribution Node'], correctIndex: 1, difficulty: 'easy' },
          { q: 'What is the main role of a load balancer?', options: ['Store sessions', 'Distribute traffic across servers', 'Encrypt traffic', 'Cache content'], correctIndex: 1, difficulty: 'easy' },
          { q: 'The CAP theorem guarantees at most how many properties simultaneously?', options: ['1', '2', '3', 'All 3'], correctIndex: 1, difficulty: 'medium' },
          { q: 'Which architecture is easier to scale horizontally?', options: ['Stateful', 'Stateless', 'Monolithic', 'Synchronous'], correctIndex: 1, difficulty: 'medium' },
          { q: 'Which CAP combination is typical for a SQL database?', options: ['CP', 'AP', 'CA', 'None'], correctIndex: 2, difficulty: 'medium' },
          { q: 'In consistent hashing, what happens when a node is removed?', options: ['All keys are re-mapped', 'Only the affected node keys move', 'Hashing stops', 'Cluster fails over'], correctIndex: 1, difficulty: 'hard' },
          { q: 'Which strategy routes requests to minimize response time?', options: ['Round Robin', 'Least Connections', 'IP Hash', 'Random'], correctIndex: 1, difficulty: 'hard' },
          { q: 'A system that sacrifices Consistency for Availability under partition is categorised as?', options: ['CP', 'CA', 'AP', 'PA'], correctIndex: 2, difficulty: 'hard' },
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
          { q: 'What does the "A" in ACID stand for?', options: ['Authorization', 'Atomicity', 'Asynchronous', 'Availability'], correctIndex: 1, difficulty: 'easy' },
          { q: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query Logic', 'Stored Query Layer', 'Sequential Query Link'], correctIndex: 0, difficulty: 'easy' },
          { q: 'What is the purpose of database replication?', options: ['Compress data', 'Shard data', 'High availability and fault tolerance', 'Encrypt the DB'], correctIndex: 2, difficulty: 'easy' },
          { q: 'What is database sharding?', options: ['Encrypting files', 'Vertical partitioning', 'Horizontal partitioning across instances', 'Cloud backup'], correctIndex: 2, difficulty: 'medium' },
          { q: 'What is the main trade-off of adding an index?', options: ['Slower reads, faster writes', 'Faster reads, slower writes + more storage', 'Less storage, faster writes', 'No trade-offs'], correctIndex: 1, difficulty: 'medium' },
          { q: 'Which DB type is best for graph-like relationship traversal?', options: ['Key-Value', 'Document', 'Graph DB', 'Relational'], correctIndex: 2, difficulty: 'medium' },
          { q: 'What is the "I" in ACID (Isolation) designed to prevent?', options: ['Data loss on crash', 'Dirty reads from concurrent transactions', 'Slow writes', 'Unindexed scans'], correctIndex: 1, difficulty: 'hard' },
          { q: 'In eventual consistency, what is guaranteed?', options: ['Immediate consistency after each write', 'All reads always return latest write', 'Given no new updates, all replicas converge', 'No conflicts ever occur'], correctIndex: 2, difficulty: 'hard' },
          { q: 'Which isolation level prevents phantom reads?', options: ['Read Uncommitted', 'Read Committed', 'Repeatable Read', 'Serializable'], correctIndex: 3, difficulty: 'hard' },
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
          { q: 'What is the primary benefit of caching?', options: ['More storage', 'Reduced latency', 'Better security', 'Easier management'], correctIndex: 1, difficulty: 'easy' },
          { q: 'Which in-memory store supports richer data types?', options: ['Memcached', 'Redis', 'Both identical', 'Neither'], correctIndex: 1, difficulty: 'easy' },
          { q: 'What does TTL stand for in caching?', options: ['Time To Live', 'Total Transfer Limit', 'Token To Load', 'Type Transfer Layer'], correctIndex: 0, difficulty: 'easy' },
          { q: 'Which eviction policy removes the item accessed least recently?', options: ['FIFO', 'LFU', 'LRU', 'TTL'], correctIndex: 2, difficulty: 'medium' },
          { q: 'In a cache-aside strategy, what happens on a miss?', options: ['Request fails', 'Fetch from DB, store in cache', 'Return default value', 'Clear cache'], correctIndex: 1, difficulty: 'medium' },
          { q: 'Why is cache invalidation hard?', options: ['Needs server restart', 'Stale copies across distributed nodes', 'Deletes all data', 'SQL-only'], correctIndex: 1, difficulty: 'medium' },
          { q: 'Which pattern pre-warms caches before traffic arrives?', options: ['Cache-aside', 'Write-through', 'Cache warming / eager loading', 'Read-through'], correctIndex: 2, difficulty: 'hard' },
          { q: 'What is a "thundering herd" problem in caching?', options: ['Eviction of hot keys', 'Many requests hit DB simultaneously when cache expires', 'Too many cache writes', 'Hash collision in cache keys'], correctIndex: 1, difficulty: 'hard' },
          { q: 'Which Redis data structure is ideal for rate limiting with sliding windows?', options: ['String', 'Hash', 'Sorted Set', 'List'], correctIndex: 2, difficulty: 'hard' },
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
          { q: 'What is the main purpose of a message queue?', options: ['Store passwords', 'Decouple services via async communication', 'Cache queries', 'Manage config'], correctIndex: 1, difficulty: 'easy' },
          { q: 'What does DLQ stand for?', options: ['Dedicated Live Queue', 'Dead-Letter Queue', 'Delayed Load Queue', 'Data Link Queue'], correctIndex: 1, difficulty: 'easy' },
          { q: 'In pub/sub, how many subscribers receive a published message?', options: ['Only one', 'None', 'All subscribers', 'A random subset'], correctIndex: 2, difficulty: 'easy' },
          { q: 'Which tool is best for high-throughput event streaming?', options: ['RabbitMQ', 'Redis', 'Kafka', 'Memcached'], correctIndex: 2, difficulty: 'medium' },
          { q: '"At-least-once" delivery means consumers must be?', options: ['Fast', 'Idempotent', 'Synchronous', 'Single-threaded'], correctIndex: 1, difficulty: 'medium' },
          { q: 'What is the key difference between Kafka topics and RabbitMQ queues?', options: ['Kafka topics retain messages; RabbitMQ queues remove after delivery', 'No difference', 'RabbitMQ is faster always', 'Kafka is only for databases'], correctIndex: 0, difficulty: 'medium' },
          { q: 'What is the purpose of a consumer group in Kafka?', options: ['Encrypt messages', 'Allow parallel consumption where each partition is read by one consumer', 'Store offsets only', 'Balance producer load'], correctIndex: 1, difficulty: 'hard' },
          { q: 'What does "exactly-once" delivery require?', options: ['Idempotent consumers only', 'Transactional producers and idempotent consumers', 'At-least-once semantics', 'DLQ support'], correctIndex: 1, difficulty: 'hard' },
          { q: 'Which Kafka concept tracks how far a consumer has read?', options: ['Topic', 'Partition', 'Offset', 'Broker'], correctIndex: 2, difficulty: 'hard' },
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
        ],
        quiz: [
          { q: 'In microservices, each service should own its own:', options: ['UI', 'Data and business logic', 'Load balancer', 'DNS entry'], correctIndex: 1, difficulty: 'easy' },
          { q: "What is an API Gateway's main role?", options: ['Store microservice data', 'Single entry point routing requests to services', 'Run ML models', 'Synchronize databases'], correctIndex: 1, difficulty: 'easy' },
          { q: 'Which protocol is commonly used for inter-service communication?', options: ['FTP', 'gRPC', 'SMTP', 'POP3'], correctIndex: 1, difficulty: 'easy' },
          { q: 'Which protocol uses binary serialization and HTTP/2 for inter-service calls?', options: ['REST', 'SOAP', 'GraphQL', 'gRPC'], correctIndex: 3, difficulty: 'medium' },
          { q: 'The circuit breaker pattern primarily helps prevent:', options: ['Data loss', 'Cascade failures', 'Slow DNS lookups', 'Memory leaks'], correctIndex: 1, difficulty: 'medium' },
          { q: 'Which tool is NOT associated with service discovery?', options: ['Consul', 'Eureka', 'Kubernetes DNS', 'Redis Pub/Sub'], correctIndex: 3, difficulty: 'medium' },
          { q: 'What is the "saga pattern" used for?', options: ['Distributed tracing', 'Managing distributed transactions across services', 'API rate limiting', 'Database indexing'], correctIndex: 1, difficulty: 'hard' },
          { q: 'What does the "strangler fig pattern" refer to?', options: ['Killing runaway processes', 'Gradually migrating a monolith to microservices', 'Blocking malicious IPs', 'Data encryption'], correctIndex: 1, difficulty: 'hard' },
          { q: 'In Service Mesh architectures, what acts as the proxy next to the application container?', options: ['API Gateway', 'Load Balancer', 'Sidecar proxy (e.g., Envoy)', 'Ingress Controller'], correctIndex: 2, difficulty: 'hard' },
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
        ],
        quiz: [
          { q: 'Which comes first in a secure system?', options: ['Authorization', 'Authentication', 'Encryption', 'Rate Limiting'], correctIndex: 1, difficulty: 'easy' },
          { q: 'An XSS attack injects malicious scripts into:', options: ['The server database', 'A trusted website viewed by victims', 'DNS records', 'Network packets'], correctIndex: 1, difficulty: 'easy' },
          { q: 'TLS primarily encrypts data:', options: ['At rest', 'In transit between client and server', 'In memory', 'In logs'], correctIndex: 1, difficulty: 'easy' },
          { q: 'Which attribute on a cookie helps prevent CSRF attacks?', options: ['HttpOnly', 'Secure', 'SameSite', 'Expires'], correctIndex: 2, difficulty: 'medium' },
          { q: "A JWT contains three parts. Which part proves it hasn't been tampered with?", options: ['Header', 'Payload', 'Signature', 'Nonce'], correctIndex: 2, difficulty: 'medium' },
          { q: 'What does CORS stand for?', options: ['Cross-Origin Resource Sharing', 'Cross-Original Routing System', 'Centralized Organization Record System', 'Core Object Registry Server'], correctIndex: 0, difficulty: 'medium' },
          { q: 'In OAuth 2.0, what does the client exchange to get an access token?', options: ['Username', 'Authorization Code', 'Session Cookie', 'Private Key'], correctIndex: 1, difficulty: 'hard' },
          { q: 'What is a Time-of-Check to Time-of-Use (TOCTOU) vulnerability?', options: ['A race condition where state changes between checking condition and using result', 'Expired SSL certificates', 'Timezone bugs', 'Brute force attack'], correctIndex: 0, difficulty: 'hard' },
          { q: 'Which hashing algorithm is considered cryptographically insecure for passwords today?', options: ['Argon2', 'bcrypt', 'scrypt', 'MD5'], correctIndex: 3, difficulty: 'hard' },
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
        ],
        quiz: [
          { q: 'Zero-shot prompting means:', options: ['Providing many examples', 'Providing a few examples', 'Providing no examples', 'Providing a system context'], correctIndex: 2, difficulty: 'easy' },
          { q: 'Few-shot prompting is used to:', options: ['Reduce model size', 'Guide output format via examples', 'Speed up inference', 'Remove hallucinations entirely'], correctIndex: 1, difficulty: 'easy' },
          { q: 'What is LLM hallucination?', options: ['When the model runs slowly', 'When the model confidently generates false information', 'When the prompt is too long', 'When the model refuses to answer'], correctIndex: 1, difficulty: 'easy' },
          { q: 'Chain-of-thought prompting improves LLM performance most on:', options: ['Image generation', 'Simple lookup questions', 'Complex reasoning and math', 'Code formatting'], correctIndex: 2, difficulty: 'medium' },
          { q: 'A system prompt is typically:', options: ['Shown prominently to the user', 'Set by the user at any time', "Hidden from the user, setting the model's behavior", 'Used only for training'], correctIndex: 2, difficulty: 'medium' },
          { q: 'What does RAG stand for?', options: ['Random Accuracy Generator', 'Retrieval-Augmented Generation', 'Recurrent Attention Gate', 'Recursive Action Generation'], correctIndex: 1, difficulty: 'medium' },
          { q: 'What is "Temperature" in LLM generation?', options: ['Model heat level', 'Hyperparameter controlling randomness/creativity', 'Number of tokens generated', 'Speed of inference'], correctIndex: 1, difficulty: 'hard' },
          { q: 'What is the difference between Top-k and Top-p sampling?', options: ['Top-k samples from fixed max probability, Top-p samples from fixed number of tokens', 'Top-k samples from fixed number of tokens, Top-p samples from a cumulative probability distribution', 'They are the same', 'Top-k is for images, Top-p for text'], correctIndex: 1, difficulty: 'hard' },
          { q: 'Which prompting technique asks a model to generate multiple reasoning paths and selects the most consistent answer?', options: ['Tree of Thoughts', 'Self-Consistency', 'ReAct', 'Prompt Chaining'], correctIndex: 1, difficulty: 'hard' },
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
        ],
        quiz: [
          { q: "What is the 'core' of an AI agent's reasoning?", options: ['A search engine', 'A large language model (LLM)', 'A rule-based system', 'A relational database'], correctIndex: 1, difficulty: 'easy' },
          { q: 'ReAct stands for:', options: ['Retrieve and Cache', 'Reasoning + Acting', 'React and Execute', 'Recursive Action Tree'], correctIndex: 1, difficulty: 'easy' },
          { q: 'Tool use in AI agents allows them to:', options: ['Run faster', 'Use less memory', 'Call external APIs and functions', 'Eliminate hallucinations'], correctIndex: 2, difficulty: 'easy' },
          { q: 'Which type of memory uses vector databases for long-term retrieval?', options: ['In-context memory', 'Procedural memory', 'External memory', 'Episodic memory'], correctIndex: 2, difficulty: 'medium' },
          { q: 'In a multi-agent system, who typically delegates tasks?', options: ['The user directly', 'A sub-agent', 'The orchestrator agent', 'The database'], correctIndex: 2, difficulty: 'medium' },
          { q: 'What is the main limitation of "in-context" memory?', options: ['Context window token limits', 'Slow retrieval speed', 'Data loss on power failure', 'Requires SQL'], correctIndex: 0, difficulty: 'medium' },
          { q: 'Which framework organizes agents into a loop of Thought -> Action -> Observation?', options: ['Chain of Thought', 'ReAct', 'RAG', 'Self-Reflect'], correctIndex: 1, difficulty: 'hard' },
          { q: 'What is episodic memory in cognitive agent architectures?', options: ['Rules for using tools', 'Memory of past events and interaction history', 'Static knowledge base', 'Current working context'], correctIndex: 1, difficulty: 'hard' },
          { q: 'Which library is commonly used to build graph-based, cyclic multi-agent workflows?', options: ['LangGraph', 'Pandas', 'Express', 'ReactJS'], correctIndex: 0, difficulty: 'hard' },
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
