// ─────────────────────────────────────────────────────────────────────────────
// publications-data.js  —  Single source of truth for all publication entries.
//
// To add, edit or remove a paper, only edit this file.
// Both publications.html and index.html read from this data automatically.
//
// Fields:
//   year     {number}    Publication year
//   title    {string}    Paper title (HTML entities allowed, e.g. &amp;)
//   authors  {Array}     [{name, isMe?}]  isMe:true highlights Huang K
//   type     {string[]}  Any of: "first", "coauthor", "journal", "conference"
//   venue    {string}    Short venue key (used for data-venue filter attribute)
//   tags     {Array}     [{text, cls}]  badge text + CSS class
//   links    {Array}     [{text, href}] action links; href:"#" = no external link
//   selected {boolean}   true → also shown in index.html Selected Publications
// ─────────────────────────────────────────────────────────────────────────────

const PUBLICATIONS = [
  {
    year: 2026,
    title: "Monkey See, Monkey Break? Study of Rule-Breaking Imitation in Virtual Crowds",
    authors: [
      { name: "Huang K", isMe: true }, { name: "Yin T" },
      { name: "Ponton J L" }, { name: "et al." }
    ],
    type: ["first", "journal"],
    venue: "tvcg",
    tags: [
      { text: "IEEE Transactions on Visualization and Computer Graphics 2026", cls: "venue" },
      { text: "SCI Q1", cls: "q1" },
      { text: "CCF A",  cls: "ccfa" }
    ],
    links: [
      { text: "Paper", href: "files/publications/pdf/IEEEVR26__VR_Crowd_Rule_breaking_Imitation.pdf" },
      { text: "DOI", href: "https://doi.org/10.1109/TVCG.2026.3679141" }
    ],
    selected: true
  },

  {
    year: 2026,
    title: "Multi-Perception Crowd: Learning to Combine Entity and Implicit Perception for Diverse Crowd Simulation",
    authors: [
      { name: "Huang K", isMe: true }, { name: "Argudo O" },
      { name: "Ding G" }, { name: "Pelechano N" }
    ],
    type: ["first", "journal"],
    venue: "tvcg",
    tags: [
      { text: "IEEE Transactions on Visualization and Computer Graphics 2026", cls: "venue" },
      { text: "SCI Q1", cls: "q1" },
      { text: "CCF A",  cls: "ccfa" }
    ],
    links: [
      { text: "Paper", href: "files/publications/pdf/Multi_Perception_Crowd_RL__TVCG_.pdf" },
      { text: "DOI", href: "https://doi.org/10.1109/TVCG.2026.3707675" }
    ],
    selected: true
  },

  {
    year: 2025,
    title: "Generating Natural Pedestrian Crowds by Learning Real Crowd Trajectories through a Transformer-Based GAN",
    authors: [
      { name: "Yan D" }, { name: "Ding G" },
      { name: "Huang K", isMe: true }, { name: "Huang T" }
    ],
    type: ["coauthor", "journal"],
    venue: "vc",
    tags: [
      { text: "The Visual Computer 2025", cls: "venue" },
      { text: "SCI Q2", cls: "q2" }
    ],
    links: [
      { text: "Paper", href: "files/publications/pdf/Generating%20natural%20pedestrian%20crowds%20by%20learning%20real%20crowd%20trajectories%20through%20a%20transformer-based.pdf" },
      { text: "DOI", href: "https://doi.org/10.1007/s00371-024-03385-4" }
    ],
    selected: false
  },

  {
    year: 2025,
    title: "Research on Modeling and Simulation of Collective Mechanical Props Performance Behavior",
    authors: [
      { name: "He L" }, { name: "Huang K", isMe: true },
      { name: "Yan D" }, { name: "Tang R" }, { name: "Ding G" }
    ],
    type: ["coauthor", "journal"],
    venue: "jss",
    tags: [
      { text: "Journal of System Simulation 2025", cls: "venue" },
      { text: "EI", cls: "ei" }
    ],
    links: [
      { text: "Paper", href: "files/publications/pdf/%E7%BE%A4%E4%BD%93%E6%9C%BA%E6%A2%B0%E9%81%93%E5%85%B7%E8%A1%A8%E6%BC%94%E8%A1%8C%E4%B8%BA%E5%BB%BA%E6%A8%A1%E4%B8%8E%E4%BB%BF%E7%9C%9F%E7%A0%94%E7%A9%B6.pdf" },
      { text: "DOI", href: "https://doi.org/10.16182/j.issn1004731x.joss.23-1065" }
    ],
    selected: false
  },

  {
    year: 2024,
    title: "Choreographing Multi-Degree of Freedom Behaviors in Large-Scale Crowd Simulations",
    authors: [
      { name: "Huang K", isMe: true }, { name: "Ding G" },
      { name: "Yan D" }, { name: "Tang R" },
      { name: "Huang T" }, { name: "Pelechano N" }
    ],
    type: ["first", "journal"],
    venue: "cg",
    tags: [
      { text: "Computers &amp; Graphics 2024", cls: "venue" },
      { text: "SCI Q2", cls: "q2" }
    ],
    links: [
      { text: "Paper", href: "files/publications/pdf/Choreographing%20multi-degree%20of%20freedom%20behaviors%20in%20large-scale%20crowd%20simulations.pdf" },
      { text: "DOI", href: "https://doi.org/10.1016/j.cag.2024.104051" }
    ],
    selected: true
  },

  {
    year: 2024,
    title: "Stylized Crowd Formation Transformation through Spatiotemporal Adversarial Learning",
    authors: [
      { name: "Yan D" }, { name: "Huang K", isMe: true },
      { name: "Zhang L" }, { name: "Ding G" }
    ],
    type: ["coauthor", "journal"],
    venue: "ais",
    tags: [
      { text: "Advanced Intelligent Systems 2024", cls: "venue" },
      { text: "SCI Q1", cls: "q1" }
    ],
    links: [
      { text: "Paper", href: "files/publications/pdf/Stylized%20crowd%20formation%20transformation%20through%20spatiotemporal%20adversarial%20learning.pdf" },
      { text: "DOI", href: "https://doi.org/10.1002/aisy.202300563" }
    ],
    selected: false
  },

  {
    year: 2024,
    title: "Enhanced Crowd Dynamics Simulation with Deep Learning and Improved Social Force Model",
    authors: [
      { name: "Yan D" }, { name: "Ding G" },
      { name: "Huang K", isMe: true }, { name: "Bai C" },
      { name: "He L" }, { name: "Zhang L" }
    ],
    type: ["coauthor", "journal"],
    venue: "electronics",
    tags: [
      { text: "Electronics 2024", cls: "venue" },
      { text: "SCI Q2", cls: "q2" }
    ],
    links: [
      { text: "Paper", href: "files/publications/pdf/Enhanced%20crowd%20dynamics%20simulation%20with%20deep%20learning%20and%20improved%20social%20force%20model.pdf" },
      { text: "DOI", href: "https://doi.org/10.3390/electronics13050934" }
    ],
    selected: false
  },

  {
    year: 2022,
    title: "Multithreshold Image Segmentation and Computer Simulation Based on Interactive Processing System",
    authors: [
      { name: "Dong L" }, { name: "Ding G" },
      { name: "Yan D" }, { name: "Huang K", isMe: true }
    ],
    type: ["coauthor", "journal"],
    venue: "mis",
    tags: [
      { text: "Mobile Information Systems 2022", cls: "venue" }
    ],
    links: [
      { text: "Paper", href: "#" },
      { text: "DOI", href: "https://doi.org/10.1155/2022/8091701" }
    ],
    selected: false
  }
];
