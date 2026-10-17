// =============================================================
// PORTFOLIO CONFIGURATION — Edit this file to personalize content
// =============================================================

export const config = {
  // ─── Personal ────────────────────────────────────────────
  name: "Akshat Gupta",
  tagline: "Curious by nature. An engineer in the making.",
  shortBio:
    "I'm Akshat Gupta — a computer science student who enjoys understanding how things work, building software that solves problems, and exploring what becomes possible when engineering meets intelligence.",
  email: "", // add your email if desired

  // ─── Education ──────────────────────────────────────────
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    university: "KIIT University",
    location: "Bhubaneswar, Odisha",
    graduation: "Expected May 2027",
  },

  // ─── Social Links (leave empty string to hide) ──────────
  github: "https://github.com/akshatg42",   // update with real URL
  linkedin: "",  // update with real LinkedIn URL

  // ─── Experience ─────────────────────────────────────────
  experience: [
    {
      id: "sail-bsp",
      role: "Software Development Intern",
      org: "Bhilai Steel Plant (SAIL)",
      period: "June 2026",
      description:
        "Developed an inventory raw-material optimization solution using Python and Facebook Prophet forecasting. Built a custom HTML/CSS/JS dashboard to visualize material usage, forecast demand, and support procurement planning.",
      skills: ["Python", "Facebook Prophet", "Forecasting", "JavaScript", "Data Visualization"],
    },
  ],

  // ─── Projects ───────────────────────────────────────────
  projects: [
    {
      id: "research-lens",
      number: "01",
      title: "Research Lens",
      subtitle: "AI Research Paper Analyzer",
      category: "Full-Stack Development · Generative AI · Information Retrieval",
      status: "Built",
      summary:
        "A full-stack application that ingests academic PDFs and website content, retrieves relevant passages using hybrid FAISS + BM25 search, applies reranking, and generates precise answers using a language model.",
      problem:
        "Navigating large volumes of academic literature is time-consuming. Understanding dense papers requires effort that could be partially automated.",
      approach:
        "Built a retrieval-augmented generation pipeline that indexes documents, runs hybrid semantic and keyword search, reranks results for precision, and synthesizes concise LLM-generated answers.",
      tech: ["Python", "LangChain", "FAISS", "BM25", "Sentence Transformers", "FastAPI", "RAG"],
      github: "", // add real URL
      demo: "",   // add real URL
      color: "#7c3aed",
      accentLight: "#a78bfa",
    },
    {
      id: "omniview",
      number: "02",
      title: "OmniView",
      subtitle: "Multi-Agent Debate & Decision System",
      category: "Agentic AI · Software Architecture",
      status: "Built",
      summary:
        "A multi-agent application where an Optimist, a Risk Analyst, and a Moderator each independently analyze a decision, exchange perspectives, and produce a structured final verdict.",
      problem:
        "Complex decisions benefit from multiple perspectives. Single-model outputs lack the nuance of deliberative reasoning.",
      approach:
        "Designed a CrewAI agent orchestration where each agent has a distinct role and analytical lens. The Moderator synthesizes conflicting viewpoints into an actionable conclusion.",
      tech: ["Python", "CrewAI", "LangChain", "Agentic AI", "LLMs"],
      github: "", // add real URL
      demo: "",   // add real URL
      color: "#0891b2",
      accentLight: "#67e8f9",
    },
    {
      id: "raw-material-optimizer",
      number: "03",
      title: "Raw Material Optimizer",
      subtitle: "Forecasting & Inventory Dashboard",
      category: "Software Development · Machine Learning · Forecasting",
      status: "Built — Internship Project",
      summary:
        "An inventory optimization tool developed during my internship at Bhilai Steel Plant. Combines Prophet-based time-series forecasting with a custom-built dashboard for visualizing usage patterns and supporting procurement decisions.",
      problem:
        "Large-scale steel production requires accurate raw-material planning. Manual estimates are error-prone and reactive.",
      approach:
        "Applied Facebook Prophet to historical consumption data to generate forecasts. Built an interactive HTML/CSS/JS dashboard for operations teams to explore trends, compare actuals against forecasts, and plan procurement cycles.",
      tech: ["Python", "Facebook Prophet", "JavaScript", "HTML/CSS", "Data Visualization"],
      github: "",
      demo: "",
      color: "#059669",
      accentLight: "#6ee7b7",
      note: "Visualization uses synthetic illustrative data. Proprietary plant data is not disclosed.",
    },
    {
      id: "stock-predictor",
      number: "04",
      title: "Stock Price Predictor",
      subtitle: "Time-Series Forecasting Application",
      category: "Machine Learning · Time-Series Engineering",
      status: "Built",
      summary:
        "A time-series forecasting application that combines LSTM and SARIMAX models, includes data preprocessing, model evaluation, and a Streamlit interface for exploring predictions interactively.",
      problem:
        "Financial time series are noisy and exhibit multiple seasonalities, making accurate prediction both technically interesting and genuinely hard.",
      approach:
        "Implemented and compared LSTM (deep-learning) and SARIMAX (statistical) approaches, evaluated on standard metrics, and wrapped the result in a Streamlit app that makes the output explorable.",
      tech: ["Python", "TensorFlow", "Keras", "SARIMAX", "Pandas", "NumPy", "Streamlit"],
      github: "", // add real URL
      demo: "",   // add real URL
      color: "#d97706",
      accentLight: "#fcd34d",
    },
  ],

  // ─── Bonus Projects ─────────────────────────────────────
  bonusProjects: [
    {
      id: "movie-recommender",
      title: "Movie Recommendation System",
      category: "NLP · Recommender Systems",
      summary:
        "An NLP-based recommendation engine using TF-IDF vectorization and cosine similarity, served through a FastAPI backend with a Streamlit frontend.",
      tech: ["Python", "TF-IDF", "Cosine Similarity", "FastAPI", "Streamlit"],
      github: "",
      demo: "",
    },
  ],

  // ─── Skills ─────────────────────────────────────────────
  skills: {
    languages: ["Python", "Java", "C", "SQL", "JavaScript"],
    backend: ["FastAPI", "Flask", "REST APIs", "Pydantic"],
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    aiml: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "LangChain",
      "CrewAI",
      "FAISS",
      "Sentence Transformers",
      "Pinecone",
      "RAG",
    ],
    data: ["NumPy", "Pandas", "Time-Series", "Forecasting"],
    tools: ["Git", "GitHub", "Docker", "Google Cloud Platform"],
  },

  // ─── Timeline ───────────────────────────────────────────
  timeline: [
    {
      id: "t1",
      period: "2023",
      title: "The Foundation",
      description:
        "Began B.Tech in Computer Science at KIIT University. Developed fluency in core programming languages and data structures. Started understanding how systems are designed and why software architecture matters.",
      tags: ["C", "Java", "Python", "DSA", "CS Fundamentals"],
    },
    {
      id: "t2",
      period: "2024",
      title: "Into Machine Intelligence",
      description:
        "Explored machine learning and deep learning — from linear models to neural networks. Learned the mathematical foundations of NLP, built early recommendation systems, and developed intuition for data-driven problem solving.",
      tags: ["ML", "Deep Learning", "NLP", "scikit-learn", "TensorFlow"],
    },
    {
      id: "t3",
      period: "2025",
      title: "Building Full Applications",
      description:
        "Moved from isolated experiments to complete applications. Built end-to-end projects with APIs, databases, and user interfaces. Explored RAG pipelines, agentic frameworks, and time-series forecasting.",
      tags: ["FastAPI", "Streamlit", "LangChain", "RAG", "CrewAI", "FAISS"],
    },
    {
      id: "t4",
      period: "2026",
      title: "Real-World Engineering",
      description:
        "Completed a software development internship at Bhilai Steel Plant (SAIL), applying forecasting and dashboard development to an operational problem. Gaining experience in building software that works under real constraints.",
      tags: ["Internship", "Python", "Forecasting", "Dashboard", "SAIL"],
    },
    {
      id: "t5",
      period: "Now",
      title: "Still Becoming",
      description:
        "Continuing to deepen software engineering fundamentals, explore AI/ML systems at scale, and build applications that solve meaningful problems. Every project teaches something the next one will benefit from.",
      tags: ["Software Engineering", "AI Engineering", "Learning", "Building"],
    },
  ],
};
