<template>
  <section class="projects">
    <!-- Section Header -->
    <div class="section-header">
      <div class="header-content">
        <span class="section-label">Portfolio</span>
        <h2 class="section-title">
          <span class="title-line">Featured</span>
          <span class="title-line highlight">Projects</span>
        </h2>
        <p class="section-description">
          Explore my latest work showcasing modern web development, 
          creative design solutions, and innovative user experiences.
        </p>
      </div>
      <div class="header-decoration">
        <div class="decoration-circle"></div>
        <div class="decoration-line"></div>
      </div>
    </div>

    <!-- Filter Tabs -->
    <div class="filter-tabs">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="activeFilter = category"
        :class="['filter-btn', { active: activeFilter === category }]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid">
      <div 
        v-for="(project, index) in filteredProjects" 
        :key="project.id"
        class="project-card"
        :style="{ '--delay': index * 0.1 + 's' }"
        @mouseenter="handleCardHover(index)"
        @mouseleave="handleCardLeave(index)"
      >
        <!-- Project Image -->
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
          <div class="image-overlay">
            <div class="overlay-content">
              <a :href="project.liveLink" target="_blank" class="overlay-btn live-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo
              </a>
              <a :href="project.githubLink" target="_blank" class="overlay-btn github-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
            </div>
          </div>
          <div class="project-status" :class="project.status">
            {{ project.status === 'completed' ? '✓ Completed' : '🚧 In Progress' }}
          </div>
        </div>

        <!-- Project Content -->
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-category">{{ project.category }}</div>
          </div>
          
          <p class="project-description">{{ project.description }}</p>
          
          <!-- Tech Stack -->
          <div class="tech-stack">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="tech-tag"
              :style="{ '--tech-color': getTechColor(tech) }"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Project Stats -->
          <div class="project-stats">
            <div class="stat">
              <span class="stat-icon">⭐</span>
              <span class="stat-value">{{ project.stars || 'N/A' }}</span>
            </div>
            <div class="stat">
              <span class="stat-icon">📅</span>
              <span class="stat-value">{{ project.year }}</span>
            </div>
            <div class="stat">
              <span class="stat-icon">⚡</span>
              <span class="stat-value">{{ project.performance }}</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="project-actions">
            <a :href="project.liveLink" target="_blank" class="action-btn primary">
              <span>View Project</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
            <a :href="project.githubLink" target="_blank" class="action-btn secondary">
              <span>Source Code</span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Hover Effect Background -->
        <div class="card-glow"></div>
      </div>
    </div>

    <!-- Load More Button -->
    <div class="load-more-section" v-if="hasMoreProjects">
      <button class="load-more-btn" @click="loadMoreProjects">
        <span>Load More Projects</span>
        <div class="btn-spinner" v-if="loading"></div>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const activeFilter = ref('All')
const loading = ref(false)
const visibleProjects = ref(6)

const categories = ['All', 'Web Apps','Chatbot Algorithms', 'UX/UI Design', 'Frontend', 'Full Stack', 'Mobile']

const projects = ref([
  {
    id: 1,
    title: 'Virtual Company I ',
    description: 'This project allowed me to gain real-world experience building a full-stack venture capital platform. I worked on real-time analytics, portfolio management, and investor tools using JavaScript, PHP, and MySQL. Through this, I improved my skills in backend logic, API integration, responsive UI with Bootstrap, and version control with Git and Jira. I also learned how to collaborate in a team, deploy with AWS, and design with Figma following modern, scalable architecture.',

    category: 'Full Stack',
    technologies: ['JavaScript', 'PHP', 'Mysql', 'Git','Jira','Bootstrap', 'Figma','AWS'],
    image: 'https://i.pinimg.com/1200x/93/66/ec/9366ecaeae6fbd19ed44cc0cb537f424.jpg',
    liveLink: 'https://vc1-platform.demo',
    githubLink: 'https://github.com/lymengmeng09/VC1-G04-POS_CoffeeShop_system.git',
    status: 'completed',
    year: '2024',
    stars: '47',
    performance: '98/100'
  },
  {
    id: 2,
    title: 'Smart Note Taker App',
    description: 'An intelligent note-taking application with AI-powered organization, real-time collaboration, and advanced search capabilities. Features markdown support and cloud sync.',
    category: 'Frontend',
    technologies: ['JavaScript', 'HTML/CSS','SASS','Bootsrapt', 'Firbase', 'Git', 'Figma'],
    image: 'https://i.pinimg.com/1200x/8c/7e/da/8c7eda93e5aa16b0c556232e0cb45075.jpg',  
    githubLink: 'https://github.com/sinaneak/smart-notes',
    status: 'completed',
    year: '2024',
    stars: '32',
    performance: '95/100'
  },
  {
    id: 3,
    title: 'E-Commerce OOP System',
    description: 'A robust object-oriented e-commerce system demonstrating advanced OOP principles, design patterns, and clean architecture. Includes inventory management and payment processing.',
    category: 'Full Stack',
    technologies: ['PHP', 'MySQL', 'OOP', 'Design Patterns', 'API'],
    image: 'https://i.pinimg.com/1200x/95/cc/b8/95ccb8d0e06dab70e5cd3fa69531d688.jpg',
    liveLink: 'https://ecommerce-oop.demo',
    githubLink: 'https://github.com/sinaneak/ecommerce-oop',
    status: 'completed',
    year: '2023',
    stars: '28',
    performance: '92/100'
  },
  {
    id: 4,
    title: 'UX/UI Design System',
    description: 'A comprehensive design system with reusable components, design tokens, and documentation. Includes Figma components and CSS framework for consistent user experiences.',
    category: 'UX/UI Design',
    technologies: ['Figma', 'CSS', 'Design Tokens', 'Storybook', 'Documentation'],
    image: 'https://i.pinimg.com/1200x/32/5e/83/325e835dc7dbb293fa370be42fdf2ba8.jpg',
    liveLink: 'https://design-system.demo',
    githubLink: 'https://github.com/sinaneak/design-system',
    status: 'completed',
    year: '2024',
    stars: '15',
    performance: '90/100'
  },
  {
    id: 5,
    title: 'Real-Time Chat Application',
    description: 'A modern chat application with real-time messaging, file sharing, and video calls. Features end-to-end encryption and multi-platform support.',
    category: 'Web Apps',
    technologies: ['Python', 'Github', 'AI', 'Mysql'],
    image: 'https://i.pinimg.com/1200x/2e/02/fa/2e02faf643a360cd71c266c1a54bdf9f.jpg',
    liveLink: 'https://chat-app.demo',
    githubLink: 'https://github.com/sinaneak/chat-app',
    status: 'completed',
    year: '2024',
    stars: '41',
    performance: '96/100'
  },
  {
  id: 6,
  title: 'VC2 - Mobile App- System',
    description: 'A responsive portfolio website optimized for mobile devices with progressive web app features, offline support, and smooth animations.',
    category: 'Mobile',
    technologies: ['Laravel', 'React Navtive', 'Git', 'Jira'],
    image: 'https://i.pinimg.com/736x/55/53/29/555329a8c6f637f665bf9df401841ad9.jpg',
    liveLink: 'https://mobile-portfolio.demo',
    githubLink: 'https://github.com/sinaneak/mobile-portfolio',
  status: 'completed',
    year: '2025',
    stars: '23',
    performance: '94/100'
  }
])

const filteredProjects = computed(() => {
  const filtered = activeFilter.value === 'All' 
    ? projects.value 
    : projects.value.filter(p => p.category === activeFilter.value)
  
  return filtered.slice(0, visibleProjects.value)
})

const hasMoreProjects = computed(() => {
  const totalFiltered = activeFilter.value === 'All' 
    ? projects.value.length 
    : projects.value.filter(p => p.category === activeFilter.value).length
  
  return visibleProjects.value < totalFiltered
})

const getTechColor = (tech) => {
  const colors = {
    'Vue.js': '#4FC08D',
    'JavaScript': '#F7DF1E',
    'Node.js': '#339933',
    'PHP': '#777BB4',
    'CSS': '#1572B6',
    'HTML': '#E34F26',
    'PostgreSQL': '#336791',
    'MongoDB': '#47A248',
    'Redis': '#DC382D',
    'AWS': '#FF9900',
    'Figma': '#F24E1E',
    'PWA': '#5A0FC8'
  }
  return colors[tech] || '#6B7280'
}

const handleCardHover = (index) => {
  // Add hover effects
}

const handleCardLeave = (index) => {
  // Remove hover effects
}

const loadMoreProjects = () => {
  loading.value = true
  setTimeout(() => {
    visibleProjects.value += 3
    loading.value = false
  }, 1000)
}

onMounted(() => {
  // Initialize animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card)
  })
})
</script>

<style scoped>
.projects {
  padding: 120px 40px;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.projects::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(78, 205, 196, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

/* Section Header */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
}

.header-content {
  flex: 1;
  max-width: 600px;
}

.section-label {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(78, 205, 196, 0.1);
  color: #4ecdc4;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(78, 205, 196, 0.3);
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
  line-height: 1.2;
}

.title-line {
  display: block;
}

.highlight {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

.section-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 500px;
}

.header-decoration {
  position: relative;
  width: 200px;
  height: 200px;
}

.decoration-circle {
  width: 150px;
  height: 150px;
  border: 2px solid rgba(78, 205, 196, 0.3);
  border-radius: 50%;
  position: absolute;
  top: 25px;
  right: 25px;
  animation: rotate 20s linear infinite;
}

.decoration-line {
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #4ecdc4, transparent);
  position: absolute;
  top: 50%;
  right: 0;
  animation: pulse 2s ease-in-out infinite;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 8px 25px rgba(78, 205, 196, 0.3);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.project-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 0.8s ease-out var(--delay) both;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.project-card:hover .card-glow {
  opacity: 1;
}

.card-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  border-radius: 22px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  filter: blur(10px);
}

/* Project Image */
.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(78, 205, 196, 0.9), rgba(69, 183, 209, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  display: flex;
  gap: 15px;
}

.overlay-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.overlay-btn svg {
  width: 18px;
  height: 18px;
}

.overlay-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.project-status {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.project-status.completed {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.project-status.in-progress {
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

/* Project Content */
.project-content {
  padding: 30px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

.project-category {
  padding: 4px 12px;
  background: rgba(78, 205, 196, 0.1);
  color: #4ecdc4;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(78, 205, 196, 0.3);
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--tech-color, #ffffff);
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

/* Project Stats */
.project-stats {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  padding: 15px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.stat {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.stat-icon {
  font-size: 1rem;
}

.stat-value {
  font-weight: 600;
  color: #ffffff;
}

/* Action Buttons */
.project-actions {
  display: flex;
  gap: 12px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
}

.action-btn svg {
  width: 16px;
  height: 16px;
}

.action-btn.primary {
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  color: #ffffff;
}

.action-btn.primary:hover {
  background: linear-gradient(45deg, #45b7d1, #4ecdc4);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(78, 205, 196, 0.4);
}

.action-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.action-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transform: translateY(-2px);
}

/* Load More Section */
.load-more-section {
  text-align: center;
}

.load-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.load-more-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Animations */
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scaleX(1); }
  50% { opacity: 1; transform: scaleX(1.1); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
  }
  
  .section-header {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 80px 20px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .filter-tabs {
    gap: 8px;
  }
  
  .filter-btn {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .project-content {
    padding: 20px;
  }
  
  .project-stats {
    flex-direction: column;
    gap: 10px;
  }
  
  .overlay-content {
    flex-direction: column;
  }
}
</style>