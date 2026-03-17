// data.js - Centralized Course Content Database

const coursesData = {
  cs: {
    id: 'cs',
    title: 'Computer Science',
    icon: '💻',
    modules: [
      { id: 1, title: 'Network Basics', icon: '🌐', desc: 'An introduction to how the internet actually works. Covering the basics of IP addresses, routers, packets, and how computers communicate across the globe.', video: 'https://www.youtube.com/embed/_IOZ8_cPgu8', pdf: 'pdf/network_basics_notes (1).pdf' },
      { id: 2, title: 'System Design', icon: '⚡', desc: 'Core principles of designing scalable, highly-available distributed systems. Topics include load balancing, horizontal vs vertical scaling, and CAP theorem.', video: 'https://www.youtube.com/embed/bUZXWq7_v2o', pdf: 'pdf/system_design_client_server.pdf' },
      { id: 3, title: 'Databases', icon: '💾', desc: 'Deep dive into relational (SQL) vs non-relational (NoSQL) databases, ACID properties, sharding, replication strategies, and choosing the right DB for the job.', video: 'https://www.youtube.com/embed/ztHopE5Wnpc', pdf: 'pdf/dbms_notes.pdf' },
      { id: 4, title: 'Caching', icon: '🚀', desc: 'Strategies for minimizing latency using in-memory data stores like Redis and Memcached, CDN architectures, and cache invalidation policies.', video: 'https://www.youtube.com/embed/j6xxBsFzEw4', pdf: 'pdf/caching_notes.pdf' },
      { id: 5, title: 'Message Queues', icon: '📫', desc: 'Decoupling services using asynchronous communication patterns with tools like Kafka and RabbitMQ to ensure reliable data delivery and event-driven architecture.', video: 'https://www.youtube.com/embed/oUJbuFMyBDk', pdf: 'pdf/message_queue_notes.pdf' },
      { id: 6, title: 'Microservices', icon: '🧩', desc: 'Breaking down monoliths into independent deployable microservices, handling inter-service communication (gRPC/REST), and API Gateways.', video: 'https://www.youtube.com/embed/CdnBwgPRyIE', pdf: 'pdf/microservices_notes.pdf' },
      { id: 7, title: 'Security', icon: '🔒', desc: 'Implementing robust security postures, TLS/SSL termination, OAuth/JWT authentication flows, rate limiting, and protecting against common vulnerabilities (DDoS, XSS, CSRF).', video: 'https://www.youtube.com/embed/inWWhr5tnEA', pdf: 'pdf/data_privacy_security_notes.pdf' },
      { id: 8, title: 'Prompt Eng.', icon: '🤖', desc: 'Techniques for effectively conversing with LLMs: zero-shot vs few-shot prompting, chain-of-thought, system prompts, and mitigating hallucinations.', video: 'https://www.youtube.com/embed/_ZvnD73m40o', pdf: 'pdf/prompt_engineering_notes.pdf' },
      { id: 9, title: 'Agents', icon: '🧠', desc: 'Building autonomous AI systems that iterate, plan, use external tools, and manage long-term memory to solve complex multi-step problems.', video: 'https://www.youtube.com/embed/F8NKVhkZZWI', pdf: 'pdf/ai_agents_notes.pdf' }
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
