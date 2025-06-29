<template>
  <section class="skills-page">
    <!-- Animated Background -->
    <div class="bg-elements">
      <div class="floating-icons">
        <span class="floating-icon" v-for="(skill, index) in skills" :key="index" :style="{ '--delay': index * 0.3 + 's' }">
          {{ skill.icon }}
        </span>
      </div>
      <div class="geometric-shapes">
        <div class="shape circle-1"></div>
        <div class="shape circle-2"></div>
        <div class="shape triangle"></div>
        <div class="shape square"></div>
      </div>
    </div>

    <div class="skills-container">
      <!-- Header Section -->
      <div class="header-section">
        <span class="section-badge">Technical Expertise</span>
        <h1 class="title">My Skills</h1>
        <p class="subtitle">Technologies I use to build responsive, scalable, and modern websites.</p>
      </div>

      <!-- Netflix-style Skills Grid -->
      <div class="netflix-skills-grid">
        <div 
          class="netflix-skill-card" 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          @click="expandSkill(skill)"
          :style="{ '--index': index }"
        >
          <div class="card-image">
            <div class="skill-visual" :class="getSkillClass(skill.name)">
              <div class="skill-icon-large">{{ skill.icon }}</div>
              <div class="skill-pattern">
                <div class="pattern-dot" v-for="i in 12" :key="i"></div>
              </div>
            </div>
            <div class="card-overlay">
              <div class="skill-content">
                <h3 class="skill-title">{{ skill.name }}</h3>
                <p class="skill-subtitle">{{ skill.category }}</p>
                <div class="skill-level-preview">
                  <div class="level-bar">
                    <div class="level-progress" :style="{ width: skill.level + '%' }"></div>
                  </div>
                  <span class="level-text">{{ skill.level }}%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-info">
            <h4>{{ skill.name }}</h4>
            <p>{{ skill.desc }}</p>
            <div class="skill-tags">
              <span class="tag" v-for="tag in skill.tags" :key="tag">{{ tag }}</span>
            </div>
            <div class="experience-years">
              <span class="years">{{ skill.experience }}</span>
              <span class="years-label">years exp.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Categories -->
      <div class="categories-section">
        <h3 class="categories-title">Skill Categories</h3>
        <div class="categories-grid">
          <div 
            class="category-card" 
            v-for="category in categories" 
            :key="category.name"
            @click="filterByCategory(category.name)"
            :class="{ active: selectedCategory === category.name }"
          >
            <div class="category-icon">{{ category.icon }}</div>
            <h4>{{ category.name }}</h4>
            <span class="skill-count">{{ category.count }} skills</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Full-Screen Skill Modal -->
    <div v-if="expandedSkill" class="fullscreen-skill-modal" @click="closeSkillModal">
      <div class="skill-modal-content" @click.stop>
        <button @click="closeSkillModal" class="close-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div class="skill-modal-header">
          <div class="skill-hero">
            <div class="skill-icon-hero" :class="getSkillClass(expandedSkill.name)">
              {{ expandedSkill.icon }}
            </div>
            <div class="skill-hero-info">
              <h2>{{ expandedSkill.name }}</h2>
              <p class="skill-category-text">{{ expandedSkill.category }}</p>
              <div class="skill-level-detailed">
                <div class="level-bar-large">
                  <div class="level-progress-large" :style="{ width: expandedSkill.level + '%' }"></div>
                </div>
                <div class="level-info">
                  <span class="level-percentage">{{ expandedSkill.level }}%</span>
                  <span class="level-label">Proficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-modal-body">
          <div class="skill-details-grid">
            <div class="skill-description">
              <h3>About This Technology</h3>
              <p>{{ expandedSkill.detailedDesc }}</p>
              
              <div class="skill-features">
                <h4>Key Features & Capabilities</h4>
                <ul>
                  <li v-for="feature in expandedSkill.features" :key="feature">{{ feature }}</li>
                </ul>
              </div>
            </div>

            <div class="skill-stats">
              <h3>Experience Stats</h3>
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-number">{{ expandedSkill.experience }}</div>
                  <div class="stat-label">Years</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">{{ expandedSkill.projects }}</div>
                  <div class="stat-label">Projects</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">{{ expandedSkill.level }}%</div>
                  <div class="stat-label">Proficiency</div>
                </div>
              </div>

              <div class="related-skills">
                <h4>Related Technologies</h4>
                <div class="related-tags">
                  <span class="related-tag" v-for="related in expandedSkill.related" :key="related">
                    {{ related }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-projects">
            <h3>Projects Using {{ expandedSkill.name }}</h3>
            <div class="projects-showcase">
              <div class="project-item" v-for="project in expandedSkill.projects_list" :key="project.name">
                <div class="project-image">
                  <img :src="project.image" :alt="project.name" />
                </div>
                <div class="project-info">
                  <h4>{{ project.name }}</h4>
                  <p>{{ project.description }}</p>
                  <div class="project-tech">
                    <span class="tech-tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const expandedSkill = ref(null)
const selectedCategory = ref('All')

const skills = [
  { 
    name: 'HTML5', 
    icon: '📄', 
    desc: 'Semantic, accessible structure',
    category: 'Frontend',
    level: 95,
    experience: 3,
    projects: 25,
    tags: ['Semantic', 'Accessibility', 'SEO'],
    detailedDesc: 'HTML5 is the latest evolution of the standard that defines HTML. It includes new semantic elements, form controls, and APIs that make web development more powerful and accessible.',
    features: [
      'Semantic elements for better structure',
      'Form validation and new input types',
      'Canvas and SVG support',
      'Local storage capabilities',
      'Geolocation and multimedia APIs'
    ],
    related: ['CSS3', 'JavaScript', 'Accessibility', 'SEO'],
    projects_list: [
      {
        name: 'Portfolio Website',
        description: 'Personal portfolio with semantic HTML structure',
        image: '/placeholder.svg?height=100&width=150',
        technologies: ['HTML5', 'CSS3', 'JavaScript']
      },
      {
        name: 'E-commerce Platform',
        description: 'Online store with accessible forms and structure',
        image: '/placeholder.svg?height=100&width=150',
        technologies: ['HTML5', 'Vue.js', 'PHP']
      },
      {
        name: 'Libray System',
        description: 'Online library to help user easy to read and buy books.',
        image: '/placeholder.svg?height=100&width=150',
        technologies: ['HTML5', 'Vue.js', 'PHP']
      }
    ]
  },
  { 
    name: 'CSS3 & SCSS', 
    icon: '🎨', 
    desc: 'Styled and responsive layouts',
    category: 'Frontend',
    level: 90,
    experience: 4,
    projects: 30,
    tags: ['Responsive', 'Animations', 'Flexbox'],
    detailedDesc: 'CSS3 and SCSS provide powerful styling capabilities with advanced selectors, animations, and preprocessor features for maintainable stylesheets.',
    features: [
      'Flexbox and Grid layouts',
      'CSS animations and transitions',
      'SCSS variables and mixins',
      'Responsive design patterns',
      'Modern CSS features'
    ],
    related: ['HTML5', 'JavaScript', 'Bootstrap', 'Tailwind'],
    projects_list: [
      {
        name: 'Responsive Dashboard',
        description: 'Admin dashboard with complex layouts',
        image: 'https://i.pinimg.com/736x/14/ef/94/14ef945299e6a0d8a6f95e8249550921.jpg',
        technologies: ['SCSS', 'CSS Grid', 'Flexbox']
      }
    ]
  },
  { 
    name: 'JavaScript', 
    icon: '⚙️', 
    desc: 'Dynamic interactivity and logic',
    category: 'Frontend',
    level: 88,
    experience: 3,
    projects: 35,
    tags: ['ES6+', 'DOM', 'Async'],
    detailedDesc: 'Modern JavaScript (ES6+) enables dynamic, interactive web applications with powerful features like async/await, modules, and advanced DOM manipulation.',
    features: [
      'ES6+ syntax and features',
      'Asynchronous programming',
      'DOM manipulation',
      'Event handling',
      'Module system'
    ],
    related: ['Vue.js', 'Node.js', 'TypeScript', 'React'],
    projects_list: [
      {
        name: 'Interactive Web App',
        description: 'Dynamic single-page application',
        image: 'https://i.pinimg.com/736x/54/2c/08/542c0887f1948c4f18741ebd47503fb0.jpg',
        technologies: ['JavaScript', 'HTML5', 'CSS3']
      }
    ]
  },
  { 
    name: 'Vue.js', 
    icon: '🖼️', 
    desc: 'Modern reactive frontend framework',
    category: 'Frontend',
    level: 92,
    experience: 3,
    projects: 20,
    tags: ['Reactive', 'Components', 'SPA'],
    detailedDesc: 'Vue.js is a progressive JavaScript framework for building user interfaces, known for its gentle learning curve and powerful reactivity system.',
    features: [
      'Reactive data binding',
      'Component-based architecture',
      'Virtual DOM',
      'Vue Router for SPAs',
      'Vuex for state management'
    ],
    related: ['JavaScript', 'Nuxt.js', 'Vite', 'Pinia'],
    projects_list: [
      {
        name: 'Task Management App',
        description: 'Full-featured productivity application',
        image: '/placeholder.svg?height=100&width=150',
        technologies: ['Vue.js', 'Vuex', 'Vue Router']
      }
    ]
  },
  { 
    name: 'PHP', 
    icon: '🐘', 
    desc: 'Backend logic and database handling',
    category: 'Backend',
    level: 85,
    experience: 2,
    projects: 18,
    tags: ['Server-side', 'APIs', 'MVC'],
    detailedDesc: 'PHP is a server-side scripting language designed for web development, excellent for building dynamic websites and robust backend systems.',
    features: [
      'Server-side scripting',
      'Database integration',
      'RESTful API development',
      'MVC architecture',
      'Framework ecosystem'
    ],
    related: ['MySQL', 'Laravel', 'Apache', 'Composer'],
    projects_list: [
      {
        name: 'CMS Platform',
        description: 'Content management system',
        image: '/placeholder.svg?height=100&width=150',
        technologies: ['PHP', 'MySQL', 'Bootstrap']
      }
    ]
  },
  { 
    name: 'MySQL', 
    icon: '🗄️', 
    desc: 'Data storage & queries',
    category: 'Database',
    level: 80,
    experience: 2,
    projects: 22,
    tags: ['Relational', 'Queries', 'Optimization'],
    detailedDesc: 'MySQL is a reliable, scalable, and fast relational database management system, perfect for web applications of all sizes.',
    features: [
      'ACID compliance',
      'Complex query optimization',
      'Indexing and performance tuning',
      'Stored procedures and functions',
      'Replication and clustering'
    ],
    related: ['PHP', 'Node.js', 'PostgreSQL', 'MongoDB'],
    projects_list: [
      {
        name: 'E-commerce Database',
        description: 'Complex relational database design',
        image: '/placeholder.svg?height=100&width=150',
        technologies: ['MySQL', 'PHP', 'Indexing']
      }
    ]
  },
  { 
    name: 'Git & GitHub', 
    icon: '🔧', 
    desc: 'Version control & collaboration',
    category: 'Tools',
    level: 87,
    experience: 3,
    projects: 40,
    tags: ['Version Control', 'Collaboration', 'CI/CD'],
    detailedDesc: 'Git and GitHub provide powerful version control and collaboration tools essential for modern software development workflows.',
    features: [
      'Distributed version control',
      'Branch management',
      'Pull requests and code review',
      'GitHub Actions for CI/CD',
      'Issue tracking and project management'
    ],
    related: ['GitLab', 'Bitbucket', 'CI/CD', 'DevOps'],
    projects_list: [
      {
        name: 'Open Source Contributions',
        description: 'Various open source projects',
        image: '/placeholder.svg?height=100&width=150',
        technologies: ['Git', 'GitHub', 'Collaboration']
      }
    ]
  },
  { 
    name: 'Netlify', 
    icon: '🚀', 
    desc: 'Deploying static sites with CI/CD',
    category: 'Deployment',
    level: 82,
    experience: 2,
    projects: 15,
    tags: ['Deployment', 'CDN'],
    detailedDesc: 'Netlify is a modern web development platform that offers continuous deployment, serverless functions, and global CDN for fast, secure websites.',
    features: [
      'Continuous deployment from Git',
      'Global CDN and edge computing',
      'Serverless functions',
      'Form handling and identity',
      'Split testing and analytics'
    ],
    related: ['Vercel', 'GitHub Pages', 'AWS'],
    projects_list: [
      {
        name: 'Portfolio Deployment',
        description: 'Automated deployment pipeline',
        image: '/placeholder.svg?height=100&width=150',
        technologies: ['Netlify', 'Git', 'Vue.js']
      }
    ]
  }
]

const categories = [
  { name: 'All', icon: '🌟', count: skills.length },
  { name: 'Frontend', icon: '🎨', count: skills.filter(s => s.category === 'Frontend').length },
  { name: 'Backend', icon: '⚙️', count: skills.filter(s => s.category === 'Backend').length },
  { name: 'Database', icon: '🗄️', count: skills.filter(s => s.category === 'Database').length },
  { name: 'Tools', icon: '🔧', count: skills.filter(s => s.category === 'Tools').length },
  { name: 'Deployment', icon: '🚀', count: skills.filter(s => s.category === 'Deployment').length }
]

const filteredSkills = computed(() => {
  if (selectedCategory.value === 'All') {
    return skills
  }
  return skills.filter(skill => skill.category === selectedCategory.value)
})

const expandSkill = (skill) => {
  expandedSkill.value = skill
  document.body.style.overflow = 'hidden'
}

const closeSkillModal = () => {
  expandedSkill.value = null
  document.body.style.overflow = 'auto'
}

const filterByCategory = (category) => {
  selectedCategory.value = category
}

const getSkillClass = (skillName) => {
  const classMap = {
    'HTML5': 'html-theme',
    'CSS3 & SCSS': 'css-theme',
    'JavaScript': 'js-theme',
    'Vue.js': 'vue-theme',
    'PHP': 'php-theme',
    'MySQL': 'mysql-theme',
    'Git & GitHub': 'git-theme',
    'Netlify': 'netlify-theme'
  }
  return classMap[skillName] || 'default-theme'
}
</script>

<style scoped>
.skills-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  padding: 60px 20px;
  overflow: hidden;
}

/* Animated Background */
.bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-icons {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-icon {
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  animation: floatIcon 20s linear infinite;
  animation-delay: var(--delay);
}

.floating-icon:nth-child(1) { top: 10%; left: 10%; }
.floating-icon:nth-child(2) { top: 20%; right: 15%; }
.floating-icon:nth-child(3) { top: 60%; left: 5%; }
.floating-icon:nth-child(4) { top: 80%; right: 20%; }
.floating-icon:nth-child(5) { top: 30%; left: 80%; }
.floating-icon:nth-child(6) { top: 70%; right: 70%; }
.floating-icon:nth-child(7) { top: 15%; left: 50%; }
.floating-icon:nth-child(8) { top: 85%; left: 40%; }

.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  opacity: 0.05;
  animation: rotateShape 25s linear infinite;
}

.circle-1 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #4fc3f7;
  top: 20%;
  left: 10%;
}

.circle-2 {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #81c784;
  top: 70%;
  right: 15%;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 70px solid #ffb74d;
  top: 40%;
  right: 30%;
}

.square {
  width: 50px;
  height: 50px;
  background: #f06292;
  transform: rotate(45deg);
  top: 60%;
  left: 70%;
}

/* Main Container */
.skills-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 60px;
}

.section-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(79, 195, 247, 0.1);
  color: #4fc3f7;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(79, 195, 247, 0.3);
}

.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 20px 0;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  color: #b0bec5;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Netflix Skills Grid */
.netflix-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.netflix-skill-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  animation: cardEntrance 0.6s ease-out;
  animation-delay: calc(var(--index) * 0.1s);
  animation-fill-mode: both;
}

.netflix-skill-card:hover {
  transform: scale(1.05) translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  border-color: rgba(79, 195, 247, 0.5);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.skill-visual {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
}

.skill-visual.html-theme { background: linear-gradient(135deg, #e34f26, #f16529); }
.skill-visual.css-theme { background: linear-gradient(135deg, #1572b6, #33a9dc); }
.skill-visual.js-theme { background: linear-gradient(135deg, #f7df1e, #ffda44); }
.skill-visual.vue-theme { background: linear-gradient(135deg, #4fc08d, #42b883); }
.skill-visual.php-theme { background: linear-gradient(135deg, #777bb4, #8892bf); }
.skill-visual.mysql-theme { background: linear-gradient(135deg, #4479a1, #00758f); }
.skill-visual.git-theme { background: linear-gradient(135deg, #f05032, #bd2c00); }
.skill-visual.netlify-theme { background: linear-gradient(135deg, #00c7b7, #00ad9f); }

.skill-icon-large {
  font-size: 4rem;
  z-index: 2;
  position: relative;
}

.skill-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
  opacity: 0.1;
}

.pattern-dot {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: patternPulse 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 30px 20px 20px;
  color: #ffffff;
}

.skill-content {
  text-align: center;
}

.skill-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 5px 0;
}

.skill-subtitle {
  font-size: 1rem;
  opacity: 0.8;
  margin: 0 0 15px 0;
}

.skill-level-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.level-bar {
  width: 100px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.level-progress {
  height: 100%;
  background: linear-gradient(90deg, #4fc3f7, #81c784);
  border-radius: 2px;
  transition: width 1s ease-out;
}

.level-text {
  font-size: 0.9rem;
  font-weight: 600;
}

.card-info {
  padding: 25px;
  color: #ffffff;
}

.card-info h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #4fc3f7;
}

.card-info p {
  font-size: 1rem;
  opacity: 0.8;
  margin: 0 0 15px 0;
  line-height: 1.5;
}

.skill-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.tag {
  padding: 4px 12px;
  background: rgba(79, 195, 247, 0.1);
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(79, 195, 247, 0.3);
  color: #4fc3f7;
}

.experience-years {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.years {
  font-size: 1.5rem;
  font-weight: 700;
  color: #81c784;
}

.years-label {
  font-size: 0.9rem;
  opacity: 0.7;
}

/* Categories Section */
.categories-section {
  margin-bottom: 60px;
}

.categories-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 30px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.category-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.category-card:hover,
.category-card.active {
  background: rgba(79, 195, 247, 0.1);
  border-color: rgba(79, 195, 247, 0.3);
  transform: translateY(-5px);
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.category-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 5px 0;
}

.skill-count {
  font-size: 0.9rem;
  color: #b0bec5;
}

/* Full-Screen Skill Modal */
.fullscreen-skill-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.skill-modal-content {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border-radius: 20px;
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.close-btn svg {
  width: 20px;
  height: 20px;
}

.skill-modal-header {
  padding: 60px 40px 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-hero {
  display: flex;
  align-items: center;
  gap: 30px;
}

.skill-icon-hero {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
}

.skill-hero-info {
  flex: 1;
  color: #ffffff;
}

.skill-hero-info h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #4fc3f7;
}

.skill-category-text {
  font-size: 1.2rem;
  opacity: 0.8;
  margin: 0 0 20px 0;
}

.skill-level-detailed {
  display: flex;
  align-items: center;
  gap: 20px;
}

.level-bar-large {
  width: 200px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.level-progress-large {
  height: 100%;
  background: linear-gradient(90deg, #4fc3f7, #81c784);
  border-radius: 4px;
  transition: width 1s ease-out;
}

.level-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.level-percentage {
  font-size: 1.5rem;
  font-weight: 700;
  color: #81c784;
}

.level-label {
  font-size: 0.9rem;
  opacity: 0.7;
}

.skill-modal-body {
  padding: 40px;
  color: #ffffff;
}

.skill-details-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.skill-description h3,
.skill-stats h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: #4fc3f7;
}

.skill-description p {
  line-height: 1.6;
  margin-bottom: 25px;
  opacity: 0.9;
}

.skill-features h4,
.related-skills h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  color: #81c784;
}

.skill-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-features li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  opacity: 0.9;
}

.skill-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #81c784;
  font-weight: bold;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 25px;
}

.stat-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #4fc3f7;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.7;
}

.related-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.related-tag {
  padding: 6px 15px;
  background: rgba(129, 199, 132, 0.1);
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid rgba(129, 199, 132, 0.3);
  color: #81c784;
}

.skill-projects {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
}

.skill-projects h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 25px 0;
  color: #4fc3f7;
}

.projects-showcase {
  display: grid;
  gap: 25px;
}

.project-item {
  display: flex;
  gap: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-image {
  width: 150px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info {
  flex: 1;
}

.project-info h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #ffffff;
}

.project-info p {
  opacity: 0.8;
  margin: 0 0 15px 0;
  line-height: 1.5;
}

.project-tech {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tech-tag {
  padding: 4px 10px;
  background: rgba(79, 195, 247, 0.1);
  border-radius: 12px;
  font-size: 0.8rem;
  border: 1px solid rgba(79, 195, 247, 0.3);
  color: #4fc3f7;
}

/* Animations */
@keyframes floatIcon {
  0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 0.1; }
  90% { opacity: 0.1; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

@keyframes rotateShape {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes cardEntrance {
  0% { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes patternPulse {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.2); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .netflix-skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
  }
  
  .skill-details-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .skill-hero {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .skill-level-detailed {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .skills-page {
    padding: 40px 15px;
  }
  
  .netflix-skills-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .skill-modal-header,
  .skill-modal-body {
    padding: 30px 20px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .project-item {
    flex-direction: column;
  }
  
  .project-image {
    width: 100%;
    height: 150px;
  }
}

@media (max-width: 480px) {
  .card-image {
    height: 150px;
  }
  
  .card-info {
    padding: 20px;
  }
  
  .skill-modal-content {
    margin: 10px;
  }
  
  .skill-hero-info h2 {
    font-size: 2rem;
  }
  
  .level-bar-large {
    width: 150px;
  }
}
</style>