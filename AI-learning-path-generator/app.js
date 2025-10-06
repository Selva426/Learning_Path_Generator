// AI-Powered Personalized Learning Path Generator - Main JavaScript

// Application Data
const appData = {
  "careers": [
    {
      "id": "software-development",
      "title": "Software Development",
      "description": "Build applications, websites, and software systems",
      "icon": "💻",
      "avgSalary": "$95,000",
      "jobGrowth": "22%",
      "skills": ["Programming", "Problem Solving", "Version Control", "Testing"]
    },
    {
      "id": "data-science",
      "title": "Data Science",
      "description": "Analyze data to extract insights and drive decisions",
      "icon": "📊",
      "avgSalary": "$125,000",
      "jobGrowth": "35%",
      "skills": ["Statistics", "Python/R", "Machine Learning", "Data Visualization"]
    },
    {
      "id": "ai-ml",
      "title": "AI/Machine Learning",
      "description": "Create intelligent systems and algorithms",
      "icon": "🤖",
      "avgSalary": "$140,000",
      "jobGrowth": "40%",
      "skills": ["Deep Learning", "Neural Networks", "TensorFlow", "Mathematics"]
    },
    {
      "id": "cybersecurity",
      "title": "Cybersecurity",
      "description": "Protect systems and data from cyber threats",
      "icon": "🔒",
      "avgSalary": "$115,000",
      "jobGrowth": "28%",
      "skills": ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"]
    },
    {
      "id": "web-development",
      "title": "Web Development",
      "description": "Create websites and web applications",
      "icon": "🌐",
      "avgSalary": "$85,000",
      "jobGrowth": "20%",
      "skills": ["HTML/CSS", "JavaScript", "React/Vue", "Backend Development"]
    },
    {
      "id": "mobile-development",
      "title": "Mobile App Development",
      "description": "Build mobile applications for iOS and Android",
      "icon": "📱",
      "avgSalary": "$105,000",
      "jobGrowth": "25%",
      "skills": ["Swift/Kotlin", "React Native", "UI/UX", "App Store Optimization"]
    },
    {
      "id": "devops",
      "title": "DevOps Engineering",
      "description": "Streamline development and deployment processes",
      "icon": "⚙️",
      "avgSalary": "$120,000",
      "jobGrowth": "30%",
      "skills": ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms"]
    },
    {
      "id": "ux-design",
      "title": "UI/UX Design",
      "description": "Design user-friendly and beautiful interfaces",
      "icon": "🎨",
      "avgSalary": "$90,000",
      "jobGrowth": "18%",
      "skills": ["Design Thinking", "Figma", "User Research", "Prototyping"]
    },
    {
      "id": "product-management",
      "title": "Product Management",
      "description": "Guide product strategy and development",
      "icon": "📋",
      "avgSalary": "$130,000",
      "jobGrowth": "15%",
      "skills": ["Strategy", "Analytics", "Communication", "Agile"]
    },
    {
      "id": "digital-marketing",
      "title": "Digital Marketing",
      "description": "Promote products and brands online",
      "icon": "📈",
      "avgSalary": "$75,000",
      "jobGrowth": "12%",
      "skills": ["SEO/SEM", "Content Marketing", "Analytics", "Social Media"]
    }
  ],
  "learningPaths": {
    "software-development": {
      "phases": [
        {
          "title": "Programming Fundamentals",
          "duration": "8-12 weeks",
          "topics": ["Variables & Data Types", "Control Structures", "Functions", "Object-Oriented Programming"],
          "resources": [
            {"name": "freeCodeCamp", "url": "https://freecodecamp.org", "type": "Free Course", "rating": 4.8},
            {"name": "Codecademy", "url": "https://codecademy.com", "type": "Interactive", "rating": 4.6},
            {"name": "CS50x", "url": "https://cs50.harvard.edu", "type": "University Course", "rating": 4.9}
          ]
        },
        {
          "title": "Web Development Basics",
          "duration": "6-10 weeks",
          "topics": ["HTML/CSS", "JavaScript", "DOM Manipulation", "Responsive Design"],
          "resources": [
            {"name": "MDN Web Docs", "url": "https://developer.mozilla.org", "type": "Documentation", "rating": 4.9},
            {"name": "The Odin Project", "url": "https://theodinproject.com", "type": "Free Curriculum", "rating": 4.7},
            {"name": "Frontend Mentor", "url": "https://frontendmentor.io", "type": "Practice Projects", "rating": 4.5}
          ]
        },
        {
          "title": "Backend Development",
          "duration": "10-14 weeks",
          "topics": ["Server-side Programming", "Databases", "APIs", "Authentication"],
          "resources": [
            {"name": "Node.js Documentation", "url": "https://nodejs.org", "type": "Official Docs", "rating": 4.8},
            {"name": "Express.js Guide", "url": "https://expressjs.com", "type": "Framework Guide", "rating": 4.6},
            {"name": "MongoDB University", "url": "https://university.mongodb.com", "type": "Database Course", "rating": 4.7}
          ]
        },
        {
          "title": "Advanced Concepts",
          "duration": "12-16 weeks",
          "topics": ["Design Patterns", "Testing", "Performance Optimization", "Security"],
          "resources": [
            {"name": "Clean Code", "url": "https://amazon.com/Clean-Code-Handbook", "type": "Book", "rating": 4.8},
            {"name": "Jest Testing", "url": "https://jestjs.io", "type": "Testing Framework", "rating": 4.6},
            {"name": "OWASP", "url": "https://owasp.org", "type": "Security Guide", "rating": 4.9}
          ]
        }
      ]
    },
    "data-science": {
      "phases": [
        {
          "title": "Statistics & Mathematics",
          "duration": "10-14 weeks",
          "topics": ["Descriptive Statistics", "Probability", "Linear Algebra", "Calculus Basics"],
          "resources": [
            {"name": "Khan Academy Statistics", "url": "https://khanacademy.org", "type": "Free Course", "rating": 4.7},
            {"name": "3Blue1Brown", "url": "https://youtube.com/3blue1brown", "type": "Video Series", "rating": 4.9},
            {"name": "Coursera Statistics", "url": "https://coursera.org", "type": "University Course", "rating": 4.6}
          ]
        },
        {
          "title": "Python Programming",
          "duration": "8-12 weeks",
          "topics": ["Python Basics", "NumPy", "Pandas", "Data Manipulation"],
          "resources": [
            {"name": "Python.org Tutorial", "url": "https://python.org", "type": "Official Tutorial", "rating": 4.8},
            {"name": "Pandas Documentation", "url": "https://pandas.pydata.org", "type": "Official Docs", "rating": 4.7},
            {"name": "Kaggle Learn", "url": "https://kaggle.com/learn", "type": "Micro-courses", "rating": 4.6}
          ]
        },
        {
          "title": "Data Analysis & Visualization",
          "duration": "10-12 weeks",
          "topics": ["Exploratory Data Analysis", "Matplotlib", "Seaborn", "Plotly"],
          "resources": [
            {"name": "Matplotlib Tutorials", "url": "https://matplotlib.org", "type": "Official Tutorials", "rating": 4.5},
            {"name": "Seaborn Gallery", "url": "https://seaborn.pydata.org", "type": "Examples", "rating": 4.6},
            {"name": "Plotly Documentation", "url": "https://plotly.com", "type": "Interactive Viz", "rating": 4.7}
          ]
        },
        {
          "title": "Machine Learning",
          "duration": "14-18 weeks",
          "topics": ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Scikit-learn"],
          "resources": [
            {"name": "Scikit-learn User Guide", "url": "https://scikit-learn.org", "type": "Documentation", "rating": 4.8},
            {"name": "Andrew Ng's ML Course", "url": "https://coursera.org/learn/machine-learning", "type": "University Course", "rating": 4.9},
            {"name": "Hands-On ML Book", "url": "https://github.com/ageron/handson-ml2", "type": "Book + Code", "rating": 4.8}
          ]
        }
      ]
    }
  },
  "learningStyles": [
    {"id": "visual", "name": "Visual Learner", "description": "Learn best through images, diagrams, and visual aids"},
    {"id": "auditory", "name": "Auditory Learner", "description": "Learn best through listening and discussion"},
    {"id": "kinesthetic", "name": "Hands-on Learner", "description": "Learn best through practice and doing"},
    {"id": "reading", "name": "Reading/Writing", "description": "Learn best through reading and writing"}
  ],
  "skillLevels": [
    {"id": "beginner", "name": "Beginner", "description": "Little to no experience in this field"},
    {"id": "intermediate", "name": "Intermediate", "description": "Some experience and basic knowledge"},
    {"id": "advanced", "name": "Advanced", "description": "Experienced with strong foundational knowledge"}
  ],
  "timeCommitments": [
    {"id": "part-time", "name": "5-10 hours/week", "description": "Learning alongside other commitments"},
    {"id": "moderate", "name": "15-20 hours/week", "description": "Dedicated but flexible schedule"},
    {"id": "intensive", "name": "25+ hours/week", "description": "Focused, accelerated learning"}
  ]
};

// Global Variables
let currentStep = 1;
let selectedCareer = null;
let userProfile = {};
let generatedPath = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    populateCareers();
    populateFormOptions();
    setupFormHandlers();
    setupSearchAndFilters();
    loadUserData();
    updateFormNavigation(); // Initialize form navigation
}

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href').substring(1);
            showSection(target);
            updateActiveNav(e.target);
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function updateActiveNav(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Career Selection
function populateCareers() {
    const careersGrid = document.getElementById('careersGrid');
    careersGrid.innerHTML = '';
    
    appData.careers.forEach(career => {
        const careerCard = createCareerCard(career);
        careersGrid.appendChild(careerCard);
    });
}

function createCareerCard(career) {
    const card = document.createElement('div');
    card.className = 'career-card clickable';
    card.onclick = () => selectCareer(career);
    
    card.innerHTML = `
        <span class="career-icon">${career.icon}</span>
        <h3 class="career-title">${career.title}</h3>
        <p class="career-description">${career.description}</p>
        <div class="career-stats">
            <div class="career-stat">
                <span class="career-stat-value">${career.avgSalary}</span>
                <span class="career-stat-label">Avg. Salary</span>
            </div>
            <div class="career-stat">
                <span class="career-stat-value">${career.jobGrowth}</span>
                <span class="career-stat-label">Job Growth</span>
            </div>
        </div>
        <div class="career-skills">
            ${career.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
    
    return card;
}

function selectCareer(career) {
    selectedCareer = career;
    userProfile.selectedCareer = career;
    saveUserData();
    
    // Add visual feedback
    document.querySelectorAll('.career-card').forEach(card => {
        card.style.border = '1px solid var(--color-card-border)';
    });
    
    event.currentTarget.style.border = '2px solid var(--color-primary)';
    
    // Auto-advance to personalization
    setTimeout(() => {
        showSection('personalization');
    }, 500);
}

// Form Handling
function populateFormOptions() {
    populateSkillLevels();
    populateLearningStyles();
    populateTimeCommitments();
}

function populateSkillLevels() {
    const container = document.getElementById('skillLevels');
    container.innerHTML = '';
    
    appData.skillLevels.forEach(level => {
        const radioItem = createRadioItem('skillLevel', level);
        container.appendChild(radioItem);
    });
}

function populateLearningStyles() {
    const container = document.getElementById('learningStyles');
    container.innerHTML = '';
    
    appData.learningStyles.forEach(style => {
        const radioItem = createRadioItem('learningStyle', style);
        container.appendChild(radioItem);
    });
}

function populateTimeCommitments() {
    const container = document.getElementById('timeCommitments');
    container.innerHTML = '';
    
    appData.timeCommitments.forEach(commitment => {
        const radioItem = createRadioItem('timeCommitment', commitment);
        container.appendChild(radioItem);
    });
}

function createRadioItem(name, option) {
    const item = document.createElement('label');
    item.className = 'radio-item';
    
    item.innerHTML = `
        <input type="radio" name="${name}" value="${option.id}">
        <div class="radio-content">
            <div class="radio-title">${option.name}</div>
            <div class="radio-description">${option.description}</div>
        </div>
    `;
    
    const radio = item.querySelector('input');
    radio.addEventListener('change', () => {
        document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
            r.closest('.radio-item').classList.remove('selected');
        });
        item.classList.add('selected');
    });
    
    return item;
}

function setupFormHandlers() {
    const form = document.getElementById('personalizationForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generateLearningPath();
    });
}

// Multi-step Form Navigation
function changeStep(direction) {
    const maxSteps = 4;
    const newStep = currentStep + direction;
    
    if (newStep < 1 || newStep > maxSteps) return;
    
    // Hide current step
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
    
    // Show new step
    currentStep = newStep;
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
    
    // Update completed steps
    for (let i = 1; i < currentStep; i++) {
        document.querySelector(`.step[data-step="${i}"]`).classList.add('completed');
    }
    
    // Update navigation buttons
    updateFormNavigation();
}

function updateFormNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (prevBtn) {
        if (currentStep === 1) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }
    }
    
    if (nextBtn) {
        if (currentStep === 4) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
    }
    
    if (submitBtn) {
        if (currentStep === 4) {
            submitBtn.classList.remove('hidden');
        } else {
            submitBtn.classList.add('hidden');
        }
    }
}

// Learning Path Generation
function generateLearningPath() {
    // Show loading
    showLoading();
    
    // Collect form data
    collectFormData();
    
    // Simulate AI processing
    setTimeout(() => {
        createPersonalizedPath();
        hideLoading();
        showSection('learningPath');
    }, 2000);
}

function collectFormData() {
    const formData = new FormData(document.getElementById('personalizationForm'));
    
    // Collect radio button values
    const skillLevel = document.querySelector('input[name="skillLevel"]:checked')?.value;
    const learningStyle = document.querySelector('input[name="learningStyle"]:checked')?.value;
    const timeCommitment = document.querySelector('input[name="timeCommitment"]:checked')?.value;
    
    // Collect checkbox values
    const formats = Array.from(document.querySelectorAll('input[name="format"]:checked'))
                         .map(cb => cb.value);
    
    userProfile = {
        ...userProfile,
        skillLevel,
        learningStyle,
        timeCommitment,
        formats,
        experience: formData.get('experience'),
        timeline: formData.get('timeline'),
        goals: formData.get('goals'),
        interests: formData.get('interests')
    };
    
    saveUserData();
}

function createPersonalizedPath() {
    if (!selectedCareer || !appData.learningPaths[selectedCareer.id]) {
        // Create generic path for careers without detailed data
        generatedPath = createGenericPath(selectedCareer);
    } else {
        generatedPath = appData.learningPaths[selectedCareer.id];
    }
    
    // Personalize based on user profile
    personalizePathBasedOnProfile();
    
    displayLearningPath();
    populateResources();
    updateDashboard();
}

function createGenericPath(career) {
    return {
        phases: [
            {
                title: "Fundamentals",
                duration: "8-12 weeks",
                topics: ["Basic Concepts", "Core Principles", "Industry Overview"],
                resources: [
                    {"name": "Introduction Course", "url": "#", "type": "Free Course", "rating": 4.5},
                    {"name": "Official Documentation", "url": "#", "type": "Documentation", "rating": 4.7},
                    {"name": "Beginner Tutorial", "url": "#", "type": "Tutorial", "rating": 4.3}
                ]
            },
            {
                title: "Practical Skills",
                duration: "10-14 weeks",
                topics: ["Hands-on Practice", "Real-world Projects", "Tools & Technologies"],
                resources: [
                    {"name": "Practice Platform", "url": "#", "type": "Interactive", "rating": 4.6},
                    {"name": "Project-based Course", "url": "#", "type": "Course", "rating": 4.8},
                    {"name": "Community Forum", "url": "#", "type": "Community", "rating": 4.4}
                ]
            },
            {
                title: "Advanced Concepts",
                duration: "12-16 weeks",
                topics: ["Advanced Techniques", "Specialization", "Best Practices"],
                resources: [
                    {"name": "Advanced Course", "url": "#", "type": "Course", "rating": 4.7},
                    {"name": "Expert Blog", "url": "#", "type": "Blog", "rating": 4.5},
                    {"name": "Certification Prep", "url": "#", "type": "Certification", "rating": 4.8}
                ]
            },
            {
                title: "Professional Development",
                duration: "8-12 weeks",
                topics: ["Portfolio Building", "Networking", "Job Preparation"],
                resources: [
                    {"name": "Portfolio Guide", "url": "#", "type": "Guide", "rating": 4.6},
                    {"name": "Interview Prep", "url": "#", "type": "Course", "rating": 4.7},
                    {"name": "Job Board", "url": "#", "type": "Job Board", "rating": 4.5}
                ]
            }
        ]
    };
}

function personalizePathBasedOnProfile() {
    // Adjust duration based on time commitment
    const timeMultiplier = {
        'part-time': 1.5,
        'moderate': 1.0,
        'intensive': 0.7
    };
    
    const multiplier = timeMultiplier[userProfile.timeCommitment] || 1.0;
    
    generatedPath.phases.forEach(phase => {
        const baseDuration = parseInt(phase.duration.split('-')[0]);
        const maxDuration = parseInt(phase.duration.split('-')[1]);
        
        const newMin = Math.ceil(baseDuration * multiplier);
        const newMax = Math.ceil(maxDuration * multiplier);
        
        phase.duration = `${newMin}-${newMax} weeks`;
    });
}

function displayLearningPath() {
    const timeline = document.getElementById('learningTimeline');
    const description = document.getElementById('pathDescription');
    
    description.textContent = `Customized learning path for ${selectedCareer.title} based on your ${userProfile.skillLevel} level and ${userProfile.timeCommitment.replace('-', ' ')} schedule.`;
    
    timeline.innerHTML = '';
    
    generatedPath.phases.forEach((phase, index) => {
        const timelineItem = createTimelineItem(phase, index + 1);
        timeline.appendChild(timelineItem);
    });
}

function createTimelineItem(phase, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    item.innerHTML = `
        <div class="timeline-marker">${index}</div>
        <div class="timeline-content">
            <h3 class="timeline-title">${phase.title}</h3>
            <p class="timeline-duration">Duration: ${phase.duration}</p>
            <div class="timeline-topics">
                ${phase.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
            </div>
            <div class="timeline-resources">
                ${phase.resources.slice(0, 3).map(resource => 
                    `<a href="${resource.url}" class="resource-link" target="_blank">
                        <div class="resource-info">
                            <span class="resource-name">${resource.name}</span>
                            <span class="resource-type">${resource.type}</span>
                        </div>
                        <div class="resource-rating">
                            <span class="stars">${'★'.repeat(Math.floor(resource.rating))}</span>
                            <span>${resource.rating}</span>
                        </div>
                    </a>`
                ).join('')}
            </div>
        </div>
    `;
    
    return item;
}

// Resources Section
function populateResources() {
    const container = document.getElementById('resourcesContainer');
    container.innerHTML = '';
    
    if (generatedPath) {
        generatedPath.phases.forEach(phase => {
            const phaseSection = createPhaseResourceSection(phase);
            container.appendChild(phaseSection);
        });
    }
}

function createPhaseResourceSection(phase) {
    const section = document.createElement('div');
    section.className = 'resource-phase';
    
    section.innerHTML = `
        <h3 class="resource-phase-title">${phase.title}</h3>
        <div class="resource-grid">
            ${phase.resources.map(resource => `
                <div class="resource-card">
                    <div class="resource-header">
                        <a href="${resource.url}" class="resource-title" target="_blank">${resource.name}</a>
                        <div class="resource-rating">
                            <span class="stars">${'★'.repeat(Math.floor(resource.rating))}</span>
                            <span>${resource.rating}</span>
                        </div>
                    </div>
                    <div class="resource-meta">
                        <span>${resource.type}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    return section;
}

// Search and Filter Functionality
function setupSearchAndFilters() {
    const careerSearch = document.getElementById('careerSearch');
    const resourceSearch = document.getElementById('resourceSearch');
    const typeFilter = document.getElementById('typeFilter');
    
    if (careerSearch) {
        careerSearch.addEventListener('input', filterCareers);
    }
    
    if (resourceSearch) {
        resourceSearch.addEventListener('input', filterResources);
    }
    
    if (typeFilter) {
        typeFilter.addEventListener('change', filterResources);
    }
}

function filterCareers() {
    const searchTerm = document.getElementById('careerSearch').value.toLowerCase();
    const careerCards = document.querySelectorAll('.career-card');
    
    careerCards.forEach(card => {
        const title = card.querySelector('.career-title').textContent.toLowerCase();
        const description = card.querySelector('.career-description').textContent.toLowerCase();
        const skills = Array.from(card.querySelectorAll('.skill-tag'))
                           .map(tag => tag.textContent.toLowerCase())
                           .join(' ');
        
        const matches = title.includes(searchTerm) || 
                       description.includes(searchTerm) || 
                       skills.includes(searchTerm);
        
        card.style.display = matches ? 'block' : 'none';
    });
}

function filterResources() {
    const searchTerm = document.getElementById('resourceSearch')?.value?.toLowerCase() || '';
    const typeFilter = document.getElementById('typeFilter')?.value || '';
    
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        const title = card.querySelector('.resource-title').textContent.toLowerCase();
        const type = card.querySelector('.resource-meta').textContent.toLowerCase();
        
        const matchesSearch = title.includes(searchTerm);
        const matchesType = !typeFilter || type.includes(typeFilter.toLowerCase());
        
        card.style.display = (matchesSearch && matchesType) ? 'block' : 'none';
    });
}

// Dashboard and Progress Tracking
function updateDashboard() {
    updateOverallProgress();
    updateCurrentPhase();
    updatePhaseProgress();
    checkAchievements();
}

function updateOverallProgress() {
    const userData = getUserProgress();
    const totalModules = generatedPath ? generatedPath.phases.length : 0;
    const completedModules = userData.completedModules || 0;
    
    const progressPercent = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
    
    document.getElementById('overallProgress').textContent = `${progressPercent}%`;
    document.getElementById('completedModules').textContent = completedModules;
    document.getElementById('totalModules').textContent = totalModules;
    
    // Update progress ring
    const progressRing = document.querySelector('.progress-ring');
    if (progressRing) {
        const degree = (progressPercent / 100) * 360;
        progressRing.style.background = `conic-gradient(var(--color-primary) ${degree}deg, var(--color-border) ${degree}deg)`;
    }
}

function updateCurrentPhase() {
    const userData = getUserProgress();
    const currentPhaseIndex = userData.currentPhase || 0;
    
    if (generatedPath && generatedPath.phases[currentPhaseIndex]) {
        const phase = generatedPath.phases[currentPhaseIndex];
        const phaseElement = document.getElementById('currentPhase');
        
        phaseElement.querySelector('.phase-title').textContent = phase.title;
        
        const progress = userData.phaseProgress?.[currentPhaseIndex] || 0;
        phaseElement.querySelector('.progress-fill').style.width = `${progress}%`;
    }
}

function updatePhaseProgress() {
    const container = document.getElementById('phaseProgressList');
    const userData = getUserProgress();
    
    if (generatedPath) {
        container.innerHTML = '';
        
        generatedPath.phases.forEach((phase, index) => {
            const progress = userData.phaseProgress?.[index] || 0;
            const item = document.createElement('div');
            item.className = 'phase-progress-item';
            
            item.innerHTML = `
                <div class="phase-progress-info">
                    <h4>${phase.title}</h4>
                    <p>Duration: ${phase.duration}</p>
                </div>
                <div class="phase-progress-bar">
                    <div class="phase-progress-fill" style="width: ${progress}%"></div>
                </div>
            `;
            
            // Add click handler for phase completion
            item.addEventListener('click', () => {
                togglePhaseCompletion(index);
            });
            
            container.appendChild(item);
        });
    }
}

function togglePhaseCompletion(phaseIndex) {
    const userData = getUserProgress();
    if (!userData.phaseProgress) userData.phaseProgress = {};
    
    const currentProgress = userData.phaseProgress[phaseIndex] || 0;
    userData.phaseProgress[phaseIndex] = currentProgress === 100 ? 0 : 100;
    
    // Update completed modules count
    const completedCount = Object.values(userData.phaseProgress).filter(p => p === 100).length;
    userData.completedModules = completedCount;
    
    // Update current phase
    userData.currentPhase = Math.min(completedCount, (generatedPath?.phases.length || 1) - 1);
    
    saveUserProgress(userData);
    updateDashboard();
}

function checkAchievements() {
    const userData = getUserProgress();
    const achievements = document.querySelectorAll('.achievement');
    
    // Getting Started achievement
    if (selectedCareer) {
        achievements[0].classList.remove('locked');
        achievements[0].classList.add('unlocked');
    }
    
    // First Module achievement
    if (userData.completedModules >= 1) {
        achievements[1].classList.remove('locked');
        achievements[1].classList.add('unlocked');
    }
    
    // Week Streak achievement (simplified)
    if (userData.completedModules >= 2) {
        achievements[2].classList.remove('locked');
        achievements[2].classList.add('unlocked');
    }
    
    // Phase Complete achievement
    if (userData.completedModules >= (generatedPath?.phases.length || 4)) {
        achievements[3].classList.remove('locked');
        achievements[3].classList.add('unlocked');
    }
}

// Loading States
function showLoading() {
    document.getElementById('loadingOverlay').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.add('hidden');
}

// Data Persistence
function saveUserData() {
    try {
        const data = {
            userProfile,
            selectedCareer,
            generatedPath,
            timestamp: Date.now()
        };
        console.log('Saving user data:', data);
    } catch (error) {
        console.error('Error saving user data:', error);
    }
}

function loadUserData() {
    // Since we can't use localStorage, we'll keep data in memory for the session
    console.log('User data loaded from session');
}

function getUserProgress() {
    // Return mock progress data since we can't use localStorage
    return {
        completedModules: 0,
        currentPhase: 0,
        phaseProgress: {}
    };
}

function saveUserProgress(progressData) {
    console.log('Saving progress:', progressData);
    // In a real app, this would save to localStorage or a backend
}

// Utility Functions
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '☆';
    return stars;
}

function formatDuration(weeks) {
    if (weeks < 4) return `${weeks} weeks`;
    if (weeks < 52) return `${Math.round(weeks / 4)} months`;
    return `${Math.round(weeks / 52)} years`;
}

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or return to home
        showSection('home');
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.career-card, .timeline-item, .dashboard-card').forEach(el => {
        observer.observe(el);
    });
});