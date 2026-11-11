// Case studies shown on the zigzag. Generated from the full portfolio's src/data/projects.ts;
// images are optimized copies in public/cases (1100px main, 320px thumb).
export interface CaseImage { main: string; thumb: string }
export interface CaseBlock {
  title: string;
  paragraphs?: string[];
  items?: string[];
  lists?: { intro: string; items: string[] }[];
  closing?: string;
}
export interface CaseDiagram {
  title: string;
  // nodes and links sit on a grid: odd columns/rows hold nodes, even ones hold the connectors between them
  nodes: { name: string; notes: string[]; kind?: 'auto' | 'human'; col: number; row: number }[];
  links: { label: string; dir: 'right' | 'down' | 'up'; col: string; row: number }[];
}
export interface CaseAbout { label: string; text: string }
export interface CaseData {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  liveUrl?: string;
  metrics: { value: string; label: string }[];
  blocks: CaseBlock[];
  images: CaseImage[];
  diagram?: CaseDiagram;
  // optional company/project intro that replaces "What I built" on the case card
  about?: CaseAbout;
}

export const cases: CaseData[] = [
  {
    "id": "gotaris",
    "diagram": {
      "title": "How the platform works",
      "nodes": [
        {
          "name": "AI reports",
          "kind": "auto",
          "notes": [
            "Generated automatically",
            "Every week"
          ],
          "col": 1,
          "row": 1
        },
        {
          "name": "Approval",
          "kind": "human",
          "notes": [
            "A person reviews",
            "and approves publishing"
          ],
          "col": 3,
          "row": 1
        },
        {
          "name": "CMS",
          "notes": [
            "8 cryptocurrencies",
            "12+ parameters",
            "Weekly archive, 1 year"
          ],
          "col": 5,
          "row": 1
        },
        {
          "name": "Memberstack",
          "notes": [
            "Login",
            "Gated content",
            "Stripe subscriptions"
          ],
          "col": 1,
          "row": 3
        },
        {
          "name": "Client",
          "notes": [
            "State handling",
            "Period comparisons",
            "Dashboards"
          ],
          "col": 5,
          "row": 3
        }
      ],
      "links": [
        {
          "label": "draft",
          "dir": "right",
          "col": "2",
          "row": 1
        },
        {
          "label": "publish",
          "dir": "right",
          "col": "4",
          "row": 1
        },
        {
          "label": "content",
          "dir": "down",
          "col": "5",
          "row": 2
        },
        {
          "label": "access",
          "dir": "right",
          "col": "2 / 5",
          "row": 3
        }
      ]
    },
    "title": "GOTARIS — Crypto Analysis Platform",
    "subtitle": "A subscription-based crypto analysis platform.",
    "tags": [
      "Webflow",
      "Memberstack",
      "Stripe",
      "GSAP",
      "8 cryptos analyzed",
      "12+ parameters",
      "1-year archive",
      "Period comparison",
      "Blog",
      "Auth & payments",
      "Gated content",
      "Custom logic"
    ],
    "description": "Built a subscription-based crypto analysis platform from scratch, including advanced CMS architecture, authentication, paid access, user dashboards and custom functionality.",
    "liveUrl": "https://www.gotaris.de/",
    "metrics": [
      {
        "value": "8",
        "label": "Cryptocurrencies"
      },
      {
        "value": "12+",
        "label": "Evaluation parameters"
      },
      {
        "value": "~1 year",
        "label": "Weekly historical analysis"
      },
      {
        "value": "Monthly / yearly",
        "label": "Subscriptions"
      }
    ],
    "blocks": [
      {
        "title": "Overview",
        "paragraphs": [
          "I developed the entire platform from the provided design and later implemented its redesign.",
          "The project combines membership, subscriptions, protected content, complex CMS architecture and custom JavaScript."
        ]
      },
      {
        "title": "Challenge",
        "paragraphs": [
          "The main technical challenge was building a scalable CMS architecture for cryptocurrency analysis and its historical archive.",
          "The platform covers 8 cryptocurrencies. Each analysis contains evaluation across 12+ parameters together with an overall assessment, market dynamics and general analysis.",
          "Weekly reports are stored in an archive containing approximately one year of historical analysis for every supported cryptocurrency."
        ]
      },
      {
        "title": "Key features",
        "paragraphs": [
          "Users can create an account and log in, manage their profile, purchase monthly or yearly subscriptions and access a protected member dashboard.",
          "The platform includes crypto news, current analyses, historical reports, subscription information and premium content."
        ]
      },
      {
        "title": "Development",
        "items": [
          "Webflow implementation from scratch",
          "Later redesign implementation",
          "Complex CMS architecture",
          "Memberstack authentication",
          "User accounts and profiles",
          "Monthly and yearly subscriptions",
          "Stripe payments through Memberstack",
          "Protected dashboard",
          "Premium content",
          "Crypto news",
          "Analysis archive",
          "Custom JavaScript",
          "Responsive development",
          "GSAP interactions and animation"
        ]
      }
    ],
    "images": [
      {
        "main": "/cases/gotaris/main-0.webp",
        "thumb": "/cases/gotaris/thumb-0.webp"
      },
      {
        "main": "/cases/gotaris/main-1.webp",
        "thumb": "/cases/gotaris/thumb-1.webp"
      },
      {
        "main": "/cases/gotaris/main-2.webp",
        "thumb": "/cases/gotaris/thumb-2.webp"
      },
      {
        "main": "/cases/gotaris/main-3.webp",
        "thumb": "/cases/gotaris/thumb-3.webp"
      },
      {
        "main": "/cases/gotaris/main-4.webp",
        "thumb": "/cases/gotaris/thumb-4.webp"
      }
    ]
  },
  {
    "id": "marketer-ux",
    "title": "Marketer UX — Agency Website Redesign",
    "subtitle": "A digital agency website that I maintained, developed and technically owned throughout nearly three years of working with the company.",
    "tags": [
      "Webflow",
      "JavaScript",
      "GSAP",
      "10+ CMS collections",
      "60+ unique pages",
      "Custom logic",
      "Multi-step forms",
      "SEO",
      "Performance optimization"
    ],
    "description": "Implemented a major website redesign and provided nearly three years of ongoing development and technical support, including CMS architecture, custom interactions, multi-step forms, technical SEO and performance optimization.",
    "liveUrl": "https://www.marketer-ux.com/",
    "metrics": [
      {
        "value": "5–10 → ~80",
        "label": "Mobile performance: before → after"
      },
      {
        "value": "~50 → 95–100",
        "label": "Desktop performance: before → after"
      }
    ],
    "blocks": [
      {
        "title": "Overview",
        "paragraphs": [
          "I was the primary developer responsible for the website during my entire time at Marketer UX.",
          "While the original website was not initially built by me, I implemented major parts of its redesign and continued developing, maintaining and optimizing the website over the following years.",
          "My work covered development, CMS architecture, GSAP interactions, forms, technical SEO, performance optimization and ongoing technical support."
        ]
      },
      {
        "title": "Redesign Implementation",
        "paragraphs": [
          "During the redesign, I rebuilt and implemented several major parts of the website from the provided designs, including:"
        ],
        "items": [
          "navigation",
          "footer",
          "two different case study templates",
          "industry overview",
          "individual industry pages",
          "additional supporting components and sections"
        ],
        "closing": "I was responsible for translating the finished designs into responsive, production-ready Webflow implementations."
      },
      {
        "title": "CMS Architecture",
        "paragraphs": [
          "I worked extensively with the website’s CMS architecture, improving existing structures and building new ones where needed.",
          "The website included multiple interconnected content systems such as:"
        ],
        "items": [
          "case studies",
          "glossary",
          "videos",
          "testimonials",
          "industry content",
          "multi-reference relationships",
          "reusable CMS-driven content"
        ],
        "closing": "A significant part of the work involved keeping these systems structured and maintainable as the website continued to grow."
      },
      {
        "title": "Motion & Interactions",
        "paragraphs": [
          "I implemented GSAP-based motion throughout the redesign and ongoing development, including:"
        ],
        "items": [
          "scroll-driven animations",
          "text reveals",
          "parallax",
          "staggered animations",
          "pinned interactions",
          "marquees",
          "custom transitions",
          "interactive UI behaviour"
        ]
      },
      {
        "title": "Forms",
        "paragraphs": [
          "I developed custom JavaScript functionality around forms, including multi-step forms and additional form processing logic."
        ]
      },
      {
        "title": "Technical SEO",
        "paragraphs": [
          "I handled technical SEO work across the website, including:"
        ],
        "items": [
          "structured data",
          "canonical URLs",
          "redirects",
          "metadata",
          "sitemap",
          "semantic HTML",
          "alt text",
          "technical cleanup"
        ]
      },
      {
        "title": "Performance Optimization",
        "paragraphs": [
          "One of the largest technical improvements was website performance.",
          "Before optimization: Mobile: 5–10. Desktop: ~50.",
          "After optimization: Mobile: ~80. Desktop: 95–100.",
          "The improvements included optimization of:"
        ],
        "items": [
          "fonts",
          "video loading",
          "JavaScript and third-party scripts",
          "images",
          "general asset loading strategy"
        ]
      },
      {
        "title": "Long-term Ownership",
        "paragraphs": [
          "Beyond individual redesign tasks, I was responsible for the website’s ongoing development and support for nearly three years.",
          "This included estimating tasks, discussing technical solutions with the team, implementing changes, debugging issues and maintaining the website as requirements evolved."
        ]
      }
    ],
    "images": [
      {
        "main": "/cases/marketer-ux/main-0.webp",
        "thumb": "/cases/marketer-ux/thumb-0.webp"
      },
      {
        "main": "/cases/marketer-ux/main-1.webp",
        "thumb": "/cases/marketer-ux/thumb-1.webp"
      },
      {
        "main": "/cases/marketer-ux/main-2.webp",
        "thumb": "/cases/marketer-ux/thumb-2.webp"
      },
      {
        "main": "/cases/marketer-ux/main-3.webp",
        "thumb": "/cases/marketer-ux/thumb-3.webp"
      },
      {
        "main": "/cases/marketer-ux/main-4.webp",
        "thumb": "/cases/marketer-ux/thumb-4.webp"
      }
    ]
  },
  {
    "id": "beste-bau",
    "title": "Beste Bau — Real Estate Platform",
    "subtitle": "A real estate website built from scratch in Webflow, with structured CMS listings, property filtering, GSAP interactions and technical SEO.",
    "tags": [
      "Webflow",
      "CMS listings",
      "Property filtering",
      "GSAP",
      "Multi-step forms",
      "SEO"
    ],
    "description": "Built a real estate website from scratch with a structured CMS for property listings, advanced property filtering, GSAP interactions, multi-step forms, technical SEO and pre-launch optimization.",
    "liveUrl": "https://www.bestebau.de/",
    "metrics": [],
    "blocks": [
      {
        "title": "Overview",
        "paragraphs": [
          "I built the website from scratch based on the provided design and was responsible for the full technical implementation.",
          "The project combines CMS structures for property listings, property filtering, custom animations, multi-step forms, technical SEO and pre-launch preparation."
        ]
      },
      {
        "title": "CMS Architecture",
        "paragraphs": [
          "I worked with multiple CMS collections and structured content systems for property listings and other dynamic content.",
          "I was responsible for building and maintaining the CMS architecture required for the real estate data and its relationships."
        ]
      },
      {
        "title": "Property Filtering",
        "paragraphs": [
          "I implemented advanced property filtering using Finsweet Filters across the real estate interfaces."
        ]
      },
      {
        "title": "Motion & Interactions",
        "paragraphs": [
          "I implemented GSAP interactions including:"
        ],
        "items": [
          "navbar animations",
          "scroll-based transitions",
          "color changes",
          "reveal animations",
          "interface transitions"
        ]
      },
      {
        "title": "Forms",
        "paragraphs": [
          "I also implemented multi-step forms for lead generation and project inquiries."
        ]
      },
      {
        "title": "Technical SEO",
        "paragraphs": [
          "I handled technical SEO work including:"
        ],
        "items": [
          "structured data",
          "canonical URLs",
          "redirects",
          "metadata",
          "sitemap setup",
          "semantic HTML",
          "alt text",
          "technical cleanup"
        ]
      },
      {
        "title": "Performance & Pre-launch",
        "paragraphs": [
          "I worked on performance optimization and technical pre-launch preparation, including asset, script and page-load optimization."
        ]
      }
    ],
    "images": [
      { "main": "/cases/beste-bau/main-0.webp", "thumb": "/cases/beste-bau/thumb-0.webp" },
      { "main": "/cases/beste-bau/main-1.webp", "thumb": "/cases/beste-bau/thumb-1.webp" },
      { "main": "/cases/beste-bau/main-2.webp", "thumb": "/cases/beste-bau/thumb-2.webp" },
      { "main": "/cases/beste-bau/main-3.webp", "thumb": "/cases/beste-bau/thumb-3.webp" },
      { "main": "/cases/beste-bau/main-4.webp", "thumb": "/cases/beste-bau/thumb-4.webp" }
    ]
  },
  {
    "id": "immobest",
    "title": "ImmoBest — Real Estate Platform",
    "subtitle": "A real estate website built from scratch in Webflow, with a custom backend that keeps its CMS in sync with Propstack.",
    "tags": [
      "Webflow",
      "TypeScript",
      "Node.js",
      "Vercel",
      "Propstack API",
      "Webhooks",
      "Cron jobs",
      "Property filtering",
      "SEO"
    ],
    "description": "Built a real estate website from scratch, including a custom Propstack-to-Webflow CMS synchronization system (webhooks, smart updates and a weekly full sync), property filtering, GSAP interactions and technical SEO.",
    "metrics": [],
    "blocks": [
      {
        "title": "Overview",
        "paragraphs": [
          "I built the website from scratch based on the provided design and was responsible for the full technical implementation.",
          "The main technical challenge was a custom backend that synchronizes real estate data from Propstack into the Webflow CMS, next to property filtering, custom animations, multi-step forms and technical SEO."
        ]
      },
      {
        "title": "Propstack Integration",
        "paragraphs": [
          "For one of the platforms, the main technical challenge was building a reliable one-way synchronization system from Propstack to Webflow CMS.",
          "I developed the backend using TypeScript and Node.js and deployed it on Vercel."
        ],
        "lists": [
          {
            "intro": "The synchronization architecture included:",
            "items": [
              "immediate updates via webhooks",
              "scheduled checks for changed data",
              "weekly forced full synchronization",
              "automatic CMS updates when changes were detected"
            ]
          },
          {
            "intro": "The integration synchronized:",
            "items": [
              "availability",
              "prices",
              "property details",
              "images",
              "videos",
              "3D virtual tours",
              "related metadata"
            ]
          }
        ]
      },
      {
        "title": "CMS Architecture",
        "paragraphs": [
          "I worked with multiple CMS collections and structured content systems for property listings and other dynamic content.",
          "I was responsible for building and maintaining the CMS architecture required for the real estate data and its relationships."
        ]
      },
      {
        "title": "Property Filtering",
        "paragraphs": [
          "I implemented advanced property filtering using Finsweet Filters across the real estate interfaces."
        ]
      },
      {
        "title": "Motion & Interactions",
        "paragraphs": [
          "I implemented GSAP interactions including:"
        ],
        "items": [
          "navbar animations",
          "scroll-based transitions",
          "color changes",
          "reveal animations",
          "interface transitions"
        ]
      },
      {
        "title": "Forms",
        "paragraphs": [
          "I also implemented multi-step forms for lead generation and project inquiries."
        ]
      },
      {
        "title": "Technical SEO",
        "paragraphs": [
          "I handled technical SEO work including:"
        ],
        "items": [
          "structured data",
          "canonical URLs",
          "redirects",
          "metadata",
          "sitemap setup",
          "semantic HTML",
          "alt text",
          "technical cleanup"
        ]
      },
      {
        "title": "Performance & Pre-launch",
        "paragraphs": [
          "I worked on performance optimization and technical pre-launch preparation, including asset, script and page-load optimization."
        ]
      }
    ],
    "images": [
      { "main": "/cases/immobest/main-0.webp", "thumb": "/cases/immobest/thumb-0.webp" },
      { "main": "/cases/immobest/main-1.webp", "thumb": "/cases/immobest/thumb-1.webp" },
      { "main": "/cases/immobest/main-2.webp", "thumb": "/cases/immobest/thumb-2.webp" },
      { "main": "/cases/immobest/main-3.webp", "thumb": "/cases/immobest/thumb-3.webp" },
      { "main": "/cases/immobest/main-4.webp", "thumb": "/cases/immobest/thumb-4.webp" }
    ],
    "liveUrl": "https://www.immobest.de/",
    "diagram": {
      "title": "How the data gets to the website",
      "nodes": [
        {
          "name": "Propstack",
          "notes": [
            "Availability",
            "Prices",
            "Property details",
            "Images and videos"
          ],
          "col": 1,
          "row": 1
        },
        {
          "name": "Backend",
          "notes": [
            "TypeScript, Node.js",
            "Deployed on Vercel",
            "One-way sync"
          ],
          "col": 3,
          "row": 1
        },
        {
          "name": "CMS",
          "notes": [
            "Webflow CMS",
            "Property listings",
            "Updated automatically"
          ],
          "col": 5,
          "row": 1
        },
        {
          "name": "Triggers",
          "kind": "auto",
          "notes": [
            "Webhook on every change",
            "Smart check for changed data",
            "Forced full sync once a week"
          ],
          "col": 3,
          "row": 3
        },
        {
          "name": "Client",
          "notes": [
            "Property filtering",
            "Multi-step forms",
            "GSAP interactions"
          ],
          "col": 5,
          "row": 3
        }
      ],
      "links": [
        {
          "label": "data",
          "dir": "right",
          "col": "2",
          "row": 1
        },
        {
          "label": "sync",
          "dir": "right",
          "col": "4",
          "row": 1
        },
        {
          "label": "trigger",
          "dir": "up",
          "col": "3",
          "row": 2
        },
        {
          "label": "content",
          "dir": "down",
          "col": "5",
          "row": 2
        }
      ]
    }
  },
  {
    "id": "victory-zx",
    "title": "Victory ZX — Industrial Corporate Website",
    "subtitle": "A large corporate website for a German fire safety and industrial gas systems company with an extensive product catalog and technical content structure.",
    "tags": [
      "Webflow",
      "GSAP",
      "Finsweet",
      "International industrial group",
      "20+ unique pages",
      "3+ CMS collections",
      "3 product catalogs",
      "Product filtering"
    ],
    "description": "Built the website from scratch as the sole developer, including complex CMS architecture, three product systems, product filtering, custom JavaScript, GSAP interactions, multi-step forms and technical SEO.",
    "liveUrl": "https://www.victoryzx.de/",
    "metrics": [],
    "blocks": [
      {
        "title": "Overview",
        "paragraphs": [
          "I built the website from scratch based on the provided design and was the sole developer responsible for the full technical implementation.",
          "The project included a large CMS structure, multiple product catalogs, product filtering, custom JavaScript, GSAP interactions, multi-step forms, technical SEO and pre-launch preparation."
        ]
      },
      {
        "title": "Product Architecture",
        "paragraphs": [
          "One of the main parts of the project was the CMS architecture for three different product systems:"
        ],
        "items": [
          "fire extinguishers",
          "gas cylinders",
          "valves"
        ],
        "closing": "Each product type required its own structured CMS setup, templates, references and technical specifications. The website also includes supporting CMS collections for authors, categories, blog content and other reusable content."
      },
      {
        "title": "Product Filtering",
        "paragraphs": [
          "I implemented custom product filtering logic together with Finsweet to make large product catalogs easier to browse.",
          "The filtering system works across technical product properties and structured CMS data."
        ]
      },
      {
        "title": "CMS Architecture",
        "paragraphs": [
          "The project includes multiple interconnected CMS collections with reference and multi-reference relationships.",
          "The architecture had to support:"
        ],
        "items": [
          "products",
          "product categories",
          "technical specifications",
          "authors",
          "blog content",
          "downloadable resources",
          "reusable content structures"
        ]
      },
      {
        "title": "Motion & Interactions",
        "paragraphs": [
          "I implemented GSAP and JavaScript interactions across the site, including:"
        ],
        "items": [
          "sliders",
          "marquees",
          "hover interactions",
          "reveal animations",
          "navigation interactions",
          "additional custom interface behaviour"
        ]
      },
      {
        "title": "Forms",
        "paragraphs": [
          "I implemented multi-step forms for product inquiries and lead generation."
        ]
      },
      {
        "title": "Technical SEO",
        "paragraphs": [
          "I handled technical SEO across the project, including:"
        ],
        "items": [
          "structured data",
          "canonical URLs",
          "redirects",
          "metadata",
          "sitemap",
          "semantic HTML",
          "alt text",
          "technical cleanup"
        ]
      },
      {
        "title": "Client Collaboration",
        "paragraphs": [
          "I participated in client calls throughout the project and consulted on technical setup, implementation approaches and the best solutions for different requirements."
        ]
      },
      {
        "title": "Pre-launch & QA",
        "paragraphs": [
          "I handled technical QA and pre-launch preparation across the website, including responsive testing, CMS validation and final production checks."
        ]
      },
      {
        "title": "Development",
        "paragraphs": [
          "My responsibilities included:"
        ],
        "items": [
          "Webflow development from scratch",
          "CMS architecture",
          "three product CMS systems",
          "reference and multi-reference structures",
          "product templates",
          "product filtering",
          "custom JavaScript",
          "Finsweet",
          "GSAP animations",
          "sliders and marquees",
          "hover interactions",
          "multi-step forms",
          "responsive development",
          "technical SEO",
          "QA",
          "pre-launch preparation",
          "client communication and technical consulting"
        ]
      }
    ],
    "images": [
      {
        "main": "/cases/victory-zx/main-0.webp",
        "thumb": "/cases/victory-zx/thumb-0.webp"
      },
      {
        "main": "/cases/victory-zx/main-1.webp",
        "thumb": "/cases/victory-zx/thumb-1.webp"
      },
      {
        "main": "/cases/victory-zx/main-2.webp",
        "thumb": "/cases/victory-zx/thumb-2.webp"
      },
      {
        "main": "/cases/victory-zx/main-3.webp",
        "thumb": "/cases/victory-zx/thumb-3.webp"
      },
      {
        "main": "/cases/victory-zx/main-4.webp",
        "thumb": "/cases/victory-zx/thumb-4.webp"
      }
    ],
    "about": {
      "label": "About the company",
      "text": "Victory ZX is an international industrial group from Germany, specialising in fire safety and industrial gas systems. Its range covers fire extinguishers, gas cylinders and valves, backed by an extensive technical product catalog."
    }
  },
  {
    "id": "relounge",
    "title": "reLounge — Medical Technology",
    "subtitle": "A multilingual website for a medical technology company focused on therapy, recovery and professional healthcare applications.",
    "tags": [
      "Webflow",
      "JavaScript",
      "GSAP",
      "3 languages",
      "10 CMS collections",
      "35+ unique pages",
      "Proximity search",
      "SEO",
      "Landing pages"
    ],
    "description": "Rebuilt most of the website in Webflow based on the provided designs, including core pages, CMS systems, multilingual content, advanced animations and a custom proximity-based location finder with map integration.",
    "liveUrl": "https://www.reloungeclub.com/en",
    "metrics": [],
    "blocks": [
      {
        "title": "Overview",
        "paragraphs": [
          "I implemented the provided redesign in Webflow, rebuilding most of the existing website’s pages from scratch.",
          "As the sole developer responsible for implementation, I handled the technical website structure, CMS architecture, responsive development, motion, multilingual content and technical SEO."
        ]
      },
      {
        "title": "CMS Architecture",
        "paragraphs": [
          "The website includes multiple CMS-driven systems for:"
        ],
        "items": [
          "Blog",
          "Locations",
          "Partners",
          "Glossary",
          "additional reusable content collections"
        ],
        "closing": "The goal was to keep a large amount of content structured, scalable and easy to manage across different page types and languages."
      },
      {
        "title": "Location Finder",
        "paragraphs": [
          "One of the key technical features I built was a custom proximity-based location search.",
          "Users can enter a city or postal code, and the system resolves that location through an external geocoding service, compares it against provider locations and returns the nearest results.",
          "The matching locations are then shown directly on the map.",
          "The proximity logic and matching system were implemented with custom JavaScript rather than relying on a ready-made Webflow solution."
        ]
      },
      {
        "title": "Motion & Interactions",
        "paragraphs": [
          "I implemented a broad range of motion and interaction patterns across the website, including:"
        ],
        "items": [
          "scroll-driven animations",
          "parallax effects",
          "staggered reveals",
          "text animations",
          "sliders",
          "marquees",
          "interactive transitions",
          "custom UI interactions"
        ]
      },
      {
        "title": "Multilingual Development",
        "paragraphs": [
          "The website was implemented across multiple languages, including English and German, while maintaining the same design system, content structure and CMS logic across localized versions."
        ]
      },
      {
        "title": "Technical SEO",
        "paragraphs": [
          "I also handled technical SEO work across the website, including:"
        ],
        "items": [
          "metadata",
          "canonical URLs",
          "redirects",
          "structured data",
          "semantic HTML",
          "alt text",
          "sitemap-related setup",
          "technical cleanup"
        ]
      },
      {
        "title": "Development",
        "paragraphs": [
          "My responsibilities included:"
        ],
        "items": [
          "rebuilding most pages from scratch",
          "implementing the provided designs",
          "Webflow development",
          "CMS architecture",
          "custom JavaScript",
          "custom proximity search logic",
          "geocoding integration",
          "map-based location results",
          "GSAP animations",
          "responsive development",
          "Finsweet",
          "multilingual implementation",
          "technical SEO",
          "smaller third-party integrations"
        ]
      }
    ],
    "images": [
      {
        "main": "/cases/relounge/main-0.webp",
        "thumb": "/cases/relounge/thumb-0.webp"
      },
      {
        "main": "/cases/relounge/main-1.webp",
        "thumb": "/cases/relounge/thumb-1.webp"
      },
      {
        "main": "/cases/relounge/main-2.webp",
        "thumb": "/cases/relounge/thumb-2.webp"
      },
      {
        "main": "/cases/relounge/main-3.webp",
        "thumb": "/cases/relounge/thumb-3.webp"
      },
      {
        "main": "/cases/relounge/main-4.webp",
        "thumb": "/cases/relounge/thumb-4.webp"
      }
    ]
  }
];
