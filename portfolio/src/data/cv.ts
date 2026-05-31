export const cv = {
  name: 'Nguyen Viet Quoc Hung',
  title: 'Architectural & Urban Designer · Data Science Researcher',
  tagline:
    'Bridging urban form with digital intelligence — building climate-resilient, data-informed cities.',
  location: 'Ho Chi Minh City, Vietnam',
  phone: '(+84) 935 459 326',
  email: 'nguyenvietquochung4422@gmail.com',

  about: `Highest-scoring Graduation Project in Architectural and Urban Design for Inclusive Smart City at UEH University. Pursuing a dual degree in Data Science to bridge urban form with digital intelligence. Focused on AI Digital Convergence and geospatial analytics to build climate-resilient, data-informed cities.`,

  education: [
    {
      degree: 'Bachelor of Architectural and Urban Design for Inclusive Smart City',
      university: 'University of Economics Ho Chi Minh City (UEH)',
      period: '2022 – 2026',
      note: 'GPA: 3.66 / 4.0 · Graduated with Excellent · Highest-scoring Graduation Project',
      coreKnowledge: [
        'Smart Urbanism: Inclusive Planning, Sustainable Infrastructure, Urban Digital Transformation',
        'Evidence-based Design: Urban Simulation & Parametric Modeling for environmental performance',
        'Spatial Analytics: Spatial MCDA and Least-Cost Path (LCP) for smart heritage and ecological connectivity',
      ],
    },
    {
      degree: 'Bachelor of Data Science (Second Major)',
      university: 'University of Economics Ho Chi Minh City (UEH)',
      period: '2023 – now',
      note: 'Dual-degree programme in progress',
      coreKnowledge: [
        'Computational Foundations: Machine Learning, Statistical Inference, Big Data Analytics',
        'Programming: Python (Pandas, GeoPandas) for large-scale spatial datasets & predictive urban modeling',
        'Digital Convergence: Geospatial Statistics + AI for urban governance and smart mobility',
      ],
    },
  ],

  experience: [
    {
      role: 'Research Intern',
      org: 'Institute of Smart City and Management (ISCM)',
      period: 'Jan 2026 – present',
      description:
        'Support research on Spatial Decision Support Systems (SDSS) for urban planning. Apply Python (Pandas, GeoPandas) to process and visualise urban datasets for regional analysis.',
      projects: [
        {
          name: 'Data Driven & Urban Design (D2UD)',
          detail: 'Public Space (RE)Activation Framework & Support.',
        },
        {
          name: 'Public Space Lab (PSL)',
          detail:
            'Developed strategic frameworks to revitalise iconic urban landmarks — Phan Dinh Phung Park and Turtle Lake (Ho Con Rua) in Ho Chi Minh City.',
        },
      ],
    },
  ],

  awards: [
    {
      rank: '1st Prize',
      competition: 'CTD Scholar — Student Awards 2025',
      project: 'Delineating an Integrated Ecological-Cultural Corridor Network in Hue, Vietnam',
      contribution:
        'Developed the IECCF framework using Spatial MCDA and MCR models to automate heritage connectivity analysis.',
      year: '2025',
    },
    {
      rank: '2nd Prize',
      competition: 'CTD Scholar — Student Awards 2025',
      project: "Gen Z Students' Perception of Mental Health at UEH",
      contribution:
        'Applied quantitative research and statistical analysis to evaluate the impact of educational environments on student well-being.',
      year: '2025',
    },
    {
      rank: '1st Prize',
      competition: 'UEH Young Researchers Award 2025',
      project: 'Place Branding Strategy for the Saigon Riverfront, Thu Duc City',
      contribution:
        'Integrated urban economics with geospatial marketing data to propose an innovative regional branding model.',
      year: '2025',
    },
    {
      rank: '2nd Prize',
      competition: 'UEH Young Researchers Award 2025',
      project: 'Sponge City Concept in Urban Hybrid Garden Design (Thanh Da Area)',
      contribution:
        'Proposed computational flood mitigation solutions through green infrastructure and climate-adaptive design.',
      year: '2025',
    },
  ],

  skills: {
    'AI & Data Science': [
      'Python (Google Colab)',
      'Machine Learning for Spatial Data',
      'Geospatial Statistics',
      'Pandas / GeoPandas',
    ],
    'Computational Design': [
      'Rhino',
      'Grasshopper (Algorithmic Modeling)',
      'Revit',
      'AutoCAD',
    ],
    'Spatial Analysis': [
      'Modern GIS',
      'Spatial MCDA',
      'Least-Cost Path (LCP)',
      'Urban Simulation',
    ],
    'Visual Communication': [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'InDesign',
      'Urban Photography',
    ],
  },

  languages: [
    { lang: 'Vietnamese', level: 'Mother Tongue' },
    { lang: 'English', level: 'Intermediate' },
    { lang: 'Korean', level: 'Basic' },
    { lang: 'French', level: 'Basic' },
    { lang: 'Chinese', level: 'Basic' },
  ],

  extracurricular: [
    {
      title:
        '11th National "Econometrics and Applications Olympiad" Student Scientific Research Competition, 2026',
      detail:
        'National-level student research award for outstanding applications of econometrics and quantitative methods.',
    },
    {
      title: 'Class Monitor & Secretary of the Youth Union',
      detail:
        'Leading class-level administrative operations, coordinating academic and community events, managing student personnel for 3+ years.',
    },
    {
      title: 'Eureka Student Scientific Research Prize 2025',
      detail:
        'Representative of UEH in the national-level interdisciplinary research competition.',
    },
    {
      title: 'International Workshop Week — Avans University (2024)',
      detail:
        'Collaborated in a multidisciplinary international environment to design flood-resilient urban solutions.',
    },
    {
      title: '14th National Architecture Student Festival (2024)',
      detail:
        'Awarded in the Photography category for architectural heritage documentation in Hue.',
    },
    {
      title: 'Thanh Da Workshop: The Hidden Urban Oasis (2024)',
      detail:
        'Conducted figure-ground analysis and Nolli mapping for river-based redevelopment scenarios.',
    },
  ],
} as const
