<template>
  <section class="about">
    <!-- Animated Background -->
    <div class="bg-elements">
      <div class="floating-code">
        <span class="code-snippet" v-for="(code, index) in codeSnippets" :key="index" :style="{ '--delay': index * 0.5 + 's' }">
          {{ code }}
        </span>
      </div>
      <div class="geometric-shapes">
        <div class="shape triangle"></div>
        <div class="shape circle"></div>
        <div class="shape square"></div>
        <div class="shape hexagon"></div>
      </div>
    </div>

    <div class="about-container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-label">Get to know me</span>
        <h2 class="section-title">
          <span class="title-word">About</span>
          <span class="title-word highlight">Me</span>
        </h2>
      </div>

      <!-- Netflix-style Cards Grid -->
      <div class="netflix-grid">
        <!-- Profile Card -->
        <div class="netflix-card profile-netflix-card" @click="expandCard('profile')">
          <div class="card-image">
            <!-- <img src="/public/img/profile.jpg" alt="Sina Neak" class="profile-bg" /> -->

            <div class="card-overlay">
              <div class="profile-content">
                <div class="profile-avatar">
                              <img src="/public/img/profile.jpg" alt="Sina Neak" class="profile-bg" />

                </div>
                <h3 class="card-title">Sina Neak</h3>
                <p class="card-subtitle">Full-Stack Developer</p>
                <div class="status-badge">
                  <div class="status-dot"></div>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-info">
            <h4>Professional Profile</h4>
            <p>Passionate developer from Cambodia crafting digital experiences</p>
            <div class="card-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">PHP</span>
              <span class="tag">MySQL</span>
            </div>
          </div>
        </div>

        <!-- Skills Card -->
        <div class="netflix-card skills-netflix-card" @click="expandCard('skills')">
          <div class="card-image">
            <div class="skills-visual">
              <div class="skill-bars">
                <div class="skill-bar" v-for="skill in skills.slice(0, 4)" :key="skill.name">
                  <div class="skill-progress" :style="{ width: skill.level + '%', backgroundColor: skill.color }"></div>
                </div>
              </div>
            </div>
            <div class="card-overlay">
              <div class="skills-content">
                <h3 class="card-title">Technical Skills</h3>
                <p class="card-subtitle">Core Technologies & Expertise</p>
              </div>
            </div>
          </div>
          <div class="card-info">
            <h4>Skills & Technologies</h4>
            <p>Modern web development stack with 3+ years experience</p>
            <div class="card-tags">
              <span class="tag">Frontend</span>
              <span class="tag">Backend</span>
              <span class="tag">Database</span>
            </div>
          </div>
        </div>

        <!-- Journey Card -->
        <div class="netflix-card journey-netflix-card" @click="expandCard('journey')">
          <div class="card-image">
            <div class="journey-visual">
              <div class="timeline-preview">
                <div class="timeline-dot" v-for="item in journey" :key="item.year"></div>
              </div>
            </div>
            <div class="card-overlay">
              <div class="journey-content">
                <h3 class="card-title">My Journey</h3>
                <p class="card-subtitle">From Student to Professional</p>
              </div>
            </div>
          </div>
          <div class="card-info">
            <h4>Career Timeline</h4>
            <p>Evolution from computer science to full-stack development</p>
            <div class="card-tags">
              <span class="tag">2020-2024</span>
              <span class="tag">Growth</span>
              <span class="tag">Learning</span>
            </div>
          </div>
        </div>

        <!-- CV Card -->
        <div class="netflix-card cv-netflix-card" @click="expandCard('cv')">
          <div class="card-image">
            <div class="cv-visual">
              <div class="document-icon">📄</div>
              <div class="download-stats">
                <div class="stat">
                  <span class="stat-number">2.4</span>
                  <span class="stat-label">MB</span>
                </div>
              </div>
            </div>
            <div class="card-overlay">
              <div class="cv-content">
                <h3 class="card-title">Resume</h3>
                <p class="card-subtitle">Download or View Online</p>
              </div>
            </div>
          </div>
          <div class="card-info">
            <h4>Professional Resume</h4>
            <p>Complete portfolio and experience overview</p>
            <div class="card-tags">
              <span class="tag">PDF</span>
              <span class="tag">Updated</span>
              <span class="tag">Download</span>
            </div>
          </div>
        </div>

        <!-- Stats Card -->
        <div class="netflix-card stats-netflix-card" @click="expandCard('stats')">
          <div class="card-image">
            <div class="stats-visual">
              <div class="stats-grid-preview">
                <div class="stat-item" v-for="stat in stats" :key="stat.label">
                  <div class="stat-icon">{{ stat.icon }}</div>
                  <div class="stat-value">{{ stat.value }}</div>
                </div>
              </div>
            </div>
            <div class="card-overlay">
              <div class="stats-content">
                <h3 class="card-title">Achievements</h3>
                <p class="card-subtitle">Numbers That Matter</p>
              </div>
            </div>
          </div>
          <div class="card-info">
            <h4>Key Statistics</h4>
            <p>Projects completed, coffee consumed, and success rate</p>
            <div class="card-tags">
              <span class="tag">Projects</span>
              <span class="tag">Success</span>
              <span class="tag">Growth</span>
            </div>
          </div>
        </div>

        <!-- Values Card -->
        <div class="netflix-card values-netflix-card" @click="expandCard('values')">
          <div class="card-image">
            <div class="values-visual">
              <div class="values-icons">
                <div class="value-icon" v-for="value in values.slice(0, 4)" :key="value.title">
                  {{ value.icon }}
                </div>
              </div>
            </div>
            <div class="card-overlay">
              <div class="values-content">
                <h3 class="card-title">Core Values</h3>
                <p class="card-subtitle">What Drives Me Forward</p>
              </div>
            </div>
          </div>
          <div class="card-info">
            <h4>Philosophy & Values</h4>
            <p>Innovation, quality, collaboration, and continuous learning</p>
            <div class="card-tags">
              <span class="tag">Innovation</span>
              <span class="tag">Quality</span>
              <span class="tag">Growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Full-Screen Modal -->
    <div v-if="expandedCard" class="fullscreen-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button @click="closeModal" class="close-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <!-- Profile Modal Content -->
        <div v-if="expandedCard === 'profile'" class="modal-section">
          <div class="modal-header">
            <h2>Professional Profile</h2>
          </div>
          <div class="modal-body">
            <div class="profile-details">
              <div class="profile-image-large">
                <img src="/public/img/profile.jpg" alt="Sina Neak" />
              </div>
              <div class="profile-info-detailed">
                <h3>Sina Neak</h3>
                <p class="title">Full-Stack Developer</p>
                <p class="location">📍 Phnom Penh, Cambodia</p>
                <p class="description">
                  I'm a dedicated full-stack developer from Cambodia, passionate about crafting digital experiences 
                  that make a difference. With a strong foundation in both frontend and backend technologies, 
                  I bring ideas to life through clean, efficient code.
                </p>
                <div class="contact-info">
                  <div class="contact-item">📧 neaksina752@email.com</div>
                  <div class="contact-item">📱 +855 969780938</div>
                  <div class="contact-item">🌐 github.com/neaksina</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Modal Content -->
        <div v-if="expandedCard === 'skills'" class="modal-section">
          <div class="modal-header">
            <h2>Technical Skills</h2>
          </div>
          <div class="modal-body">
            <div class="skills-detailed">
              <div class="skill-item-detailed" v-for="skill in skills" :key="skill.name">
                <div class="skill-header">
                  <div class="skill-icon-large" :style="{ backgroundColor: skill.color }">
                    {{ skill.icon }}
                  </div>
                  <div class="skill-info-detailed">
                    <h4>{{ skill.name }}</h4>
                    <div class="skill-level-detailed">
                      <div class="skill-bar-large">
                        <div class="skill-progress-large" :style="{ width: skill.level + '%', backgroundColor: skill.color }"></div>
                      </div>
                      <span class="skill-percentage-large">{{ skill.level }}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Journey Modal Content -->
        <div v-if="expandedCard === 'journey'" class="modal-section">
          <div class="modal-header">
            <h2>My Journey</h2>
          </div>
          <div class="modal-body">
            <div class="journey-detailed">
              <div class="timeline-detailed">
                <div class="timeline-item-detailed" v-for="item in journey" :key="item.year">
                  <div class="timeline-dot-large"></div>
                  <div class="timeline-content-detailed">
                    <div class="timeline-year-large">{{ item.year }}</div>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CV Modal Content -->
        <div v-if="expandedCard === 'cv'" class="modal-section">
          <div class="modal-header">
            <h2>Resume & CV</h2>
          </div>
          <div class="modal-body">
            <div class="cv-detailed">
              <div class="cv-preview-large">
                <div class="cv-document-large">
                  <div class="cv-header-large">
                    <div class="cv-icon-large">📄</div>
                    <div class="cv-info-large">
                      <h3>Sina_Neak_Resume.pdf</h3>
                      <p>2.4 MB • Updated Today</p>
                    </div>
                  </div>
                  <div class="cv-actions-large">
                    <button @click="downloadCV" class="cv-btn-large download">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Download PDF
                    </button>
                    <button @click="viewCV" class="cv-btn-large view">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      View Online
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Modal Content -->
        <div v-if="expandedCard === 'stats'" class="modal-section">
          <div class="modal-header">
            <h2>Key Statistics</h2>
          </div>
          <div class="modal-body">
            <div class="stats-detailed">
              <div class="stats-grid-large">
                <div class="stat-card-large" v-for="stat in stats" :key="stat.label">
                  <div class="stat-icon-large">{{ stat.icon }}</div>
                  <div class="stat-number-large">{{ animatedStats[stat.label] || 0 }}</div>
                  <div class="stat-label-large">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Values Modal Content -->
        <div v-if="expandedCard === 'values'" class="modal-section">
          <div class="modal-header">
            <h2>Core Values</h2>
          </div>
          <div class="modal-body">
            <div class="values-detailed">
              <div class="values-grid-large">
                <div class="value-card-large" v-for="value in values" :key="value.title">
                  <div class="value-icon-large">{{ value.icon }}</div>
                  <h4>{{ value.title }}</h4>
                  <p>{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CV Modal (separate) -->
    <div v-if="showCVModal" class="cv-modal-overlay" @click="closeCVModal">
      <div class="cv-modal" @click.stop>
        <div class="cv-modal-header">
          <h3>Sina Neak - Resume</h3>
          <button @click="closeCVModal" class="close-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="cv-modal-content">
          <div class="cv-full-preview">
            <div class="cv-page">
              <div class="cv-page-header">
                <h1>Sina Neak</h1>
                <p class="cv-subtitle">Full-Stack Web Developer</p>
                <div class="cv-contact-info">
                  <div class="contact-item">
                    <span>📧 neaksina752@gmail.com</span>
                  </div>
                  <div class="contact-item">
                    <span>📱 +855 969780938</span>
                  </div>
                  <div class="contact-item">
                    <span>📍 Phnom Penh, Cambodia</span>
                  </div>
                  <div class="contact-item">
                    <span>🌐 github.com/sinaneak</span>
                  </div>
                </div>
              </div>

              <div class="cv-section">
                <h3>Professional Summary</h3>
                <p>Dedicated full-stack developer with 2+ years of experience creating responsive, dynamic, and accessible web applications. Specialized in Vue.js, JavaScript, PHP, and MySQL with a passion for clean code and user-centered design.</p>
              </div>

              <div class="cv-section">
                <h3>Technical Skills</h3>
                <div class="skills-categories">
                  <div class="skill-category">
                    <strong>Frontend:</strong> Vue.js, JavaScript (ES6+), HTML5, CSS3, SCSS, Bootstrap, Responsive Design
                  </div>
                  <div class="skill-category">
                    <strong>Backend:</strong> PHP, Node.js, RESTful APIs, MySQL, Database Design
                  </div>
                  <div class="skill-category">
                    <strong>Tools & Others:</strong> Git, GitHub, Figma, AWS, Jira, Agile Methodology
                  </div>
                </div>
              </div>

              <div class="cv-section">
                <h3>Experience</h3>
                <div class="experience-item">
                  <div class="experience-header">
                    <h4>Full-Stack Developer</h4>
                    <span class="experience-date">2024 - Present</span>
                  </div>
                  <p class="experience-company">Freelance & Contract Work</p>
                  <ul class="experience-list">
                    <li>Developed and maintained 15+ web applications using Vue.js and PHP</li>
                    <li>Implemented responsive designs improving mobile user experience by 40%</li>
                    <li>Collaborated with cross-functional teams using Agile methodologies</li>
                    <li>Optimized database queries resulting in 30% faster page load times</li>
                  </ul>
                </div>
              </div>

              <div class="cv-section">
                <h3>Education</h3>
                <div class="education-item">
                  <div class="education-header">
                    <h4>Computer Science</h4>
                    <span class="education-date">2024 - 2025</span>
                  </div>
                  <p class="education-school"> Passerelles Numeriques Cambodia</p>
                </div>
              </div>

              <div class="cv-section">
                <h3>Key Projects</h3>
                <div class="project-item">
                  <h4>VC1 Investment Platform</h4>
                  <p>Comprehensive venture capital platform with real-time analytics and portfolio management</p>
                  <div class="project-tech">Technologies: JavaScript, PHP, MySQL, Bootstrap, AWS</div>
                </div>
                <div class="project-item">
                  <h4>Smart Note Taker App</h4>
                  <p>Intelligent note-taking application with AI-powered organization and real-time collaboration</p>
                  <div class="project-tech">Technologies: Vue.js, JavaScript, IndexedDB, WebRTC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cv-modal-footer">
          <button @click="downloadCV" class="modal-download-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

const animatedStats = reactive({})
const showCVModal = ref(false)
const expandedCard = ref(null)

const codeSnippets = [
  'const developer = "Sina Neak"',
  'function createAwesome() { }',
  '<template>',
  'SELECT * FROM projects',
  'npm install creativity',
  'git commit -m "Amazing"',
  'Vue.createApp({})',
  'echo "Hello World"'
]

const stats = [
  { icon: '🚀', label: 'Projects', value: 25 },
  { icon: '⭐', label: 'GitHub Stars', value: 150 },
  { icon: '☕', label: 'Cups of Coffee', value: 1000 },
  { icon: '🎯', label: 'Success Rate', value: 98 }
]

const journey = [
  {
    year: '2020',
    title: 'Started Computer Science',
    description: 'Began my journey in computer science and programming fundamentals'
  },
  {
    year: '2022',
    title: 'Web Development Focus',
    description: 'Specialized in full-stack web development with Vue.js and PHP'
  },
  {
    year: '2023',
    title: 'Professional Projects',
    description: 'Started working on real-world applications and client projects'
  },
  {
    year: '2024',
    title: 'Advanced Development',
    description: 'Mastering modern frameworks and cloud technologies'
  }
]

const skills = [
  { name: 'Vue.js', level: 90, icon: '⚡', color: '#4FC08D' },
  { name: 'JavaScript', level: 85, icon: '🟨', color: '#F7DF1E' },
  { name: 'PHP', level: 80, icon: '🐘', color: '#777BB4' },
  { name: 'MySQL', level: 75, icon: '🗄️', color: '#4479A1' },
  { name: 'CSS/SCSS', level: 88, icon: '🎨', color: '#1572B6' },
  { name: 'Git', level: 82, icon: '📝', color: '#F05032' }
]

const values = [
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Always seeking creative solutions and staying updated with latest technologies'
  },
  {
    icon: '🎯',
    title: 'Quality',
    description: 'Writing clean, maintainable code with attention to detail and best practices'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Working closely with teams and clients to achieve shared goals'
  },
  {
    icon: '📚',
    title: 'Learning',
    description: 'Continuously improving skills and embracing new challenges'
  }
]

const expandCard = (cardType) => {
  expandedCard.value = cardType
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  expandedCard.value = null
  document.body.style.overflow = 'auto'
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = 'https://www.canva.com/design/DAGrvcpifyM/Mwu5Cf83QRrcYUf1zyXnRg/view?utm_content=DAGrvcpifyM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h28a57dcb65' // Updated to match your file name
  link.download = 'SinaNeak(CV).pdf' // Updated to match your file name
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const viewCV = () => {
  showCVModal.value = true
}

const closeCVModal = () => {
  showCVModal.value = false
}

const animateStats = () => {
  stats.forEach(stat => {
    let current = 0
    const target = stat.value
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      animatedStats[stat.label] = Math.floor(current)
    }, 30)
  })
}

onMounted(() => {
  animateStats()
})
</script>

<style scoped>
.about {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #29b4bd 50%, #1b826f 100%);
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

.floating-code {
  position: absolute;
  width: 100%;
  height: 100%;
}

.code-snippet {
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.1);
  animation: floatCode 15s linear infinite;
  animation-delay: var(--delay);
}

.code-snippet:nth-child(1) { top: 10%; left: 5%; }
.code-snippet:nth-child(2) { top: 20%; right: 10%; }
.code-snippet:nth-child(3) { top: 60%; left: 8%; }
.code-snippet:nth-child(4) { top: 80%; right: 15%; }
.code-snippet:nth-child(5) { top: 30%; left: 70%; }
.code-snippet:nth-child(6) { top: 70%; right: 60%; }
.code-snippet:nth-child(7) { top: 15%; left: 40%; }
.code-snippet:nth-child(8) { top: 85%; left: 30%; }

.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  opacity: 0.05;
  animation: rotateShape 20s linear infinite;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 43px solid #ffffff;
  top: 20%;
  right: 20%;
}

.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ffffff;
  top: 70%;
  left: 15%;
}

.square {
  width: 40px;
  height: 40px;
  background: #ffffff;
  transform: rotate(45deg);
  top: 30%;
  right: 30%;
}

.hexagon {
  width: 50px;
  height: 28.87px;
  background: #ffffff;
  position: relative;
  top: 60%;
  right: 10%;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 14.43px solid #ffffff;
}

.hexagon:after {
  top: 100%;
  border-top: 14.43px solid #ffffff;
}

/* Main Container */
.about-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-label {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

.title-word {
  display: inline-block;
  margin-right: 20px;
}

.highlight {
  background: linear-gradient(45deg, #ffffff, #cccccc, #ffffff);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

/* Netflix-style Grid */
.netflix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

/* Netflix Card */
.netflix-card {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}

.netflix-card:hover {
  transform: scale(1.05) translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 255, 255, 0.3);
}

.card-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.profile-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.skills-visual,
.journey-visual,
.cv-visual,
.stats-visual,
.values-visual {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #29b4bd, #1b826f);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.skill-bars {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
}

.skill-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease-out;
}

.timeline-preview {
  display: flex;
  gap: 15px;
  align-items: center;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 0.8;
}

.document-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.download-stats {
  display: flex;
  gap: 20px;
}

.stat {
  text-align: center;
  color: #ffffff;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  display: block;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.stats-grid-preview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 80%;
}

.stat-item {
  text-align: center;
  color: #ffffff;
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
}

.values-icons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.value-icon {
  font-size: 3rem;
  text-align: center;
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

.profile-content,
.skills-content,
.journey-content,
.cv-content,
.stats-content,
.values-content {
  text-align: center;
}

.profile-avatar {
  width: 60px;
  height: 60px;
  margin: 0 auto 15px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ffffff;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 5px 0;
}

.card-subtitle {
  font-size: 1rem;
  opacity: 0.8;
  margin: 0 0 15px 0;
}

.status-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #00ff88;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #00ff88;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.card-info {
  padding: 20px;
  color: #ffffff;
}

.card-info h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 10px 0;
}

.card-info p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0 0 15px 0;
  line-height: 1.5;
}

.card-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Full-Screen Modal */
.fullscreen-modal {
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

.modal-content {
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  border-radius: 20px;
  width: 100%;
  max-width: 900px;
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

.modal-section {
  padding: 60px 40px 40px;
  color: #ffffff;
}

.modal-header {
  text-align: center;
  margin-bottom: 40px;
}

.modal-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #29b4bd, #1b826f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modal-body {
  max-width: 800px;
  margin: 0 auto;
}

/* Profile Modal Styles */
.profile-details {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  align-items: start;
}

.profile-image-large {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  border: 3px solid rgba(255, 255, 255, 0.2);
}

.profile-image-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info-detailed h3 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 10px 0;
}

.profile-info-detailed .title {
  font-size: 1.2rem;
  color: #29b4bd;
  margin: 0 0 10px 0;
}

.profile-info-detailed .location {
  font-size: 1rem;
  opacity: 0.8;
  margin: 0 0 20px 0;
}

.profile-info-detailed .description {
  line-height: 1.6;
  margin: 0 0 30px 0;
}

.contact-info {
  display: grid;
  gap: 10px;
}

.contact-item {
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Skills Modal Styles */
.skills-detailed {
  display: grid;
  gap: 25px;
}

.skill-item-detailed {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.skill-icon-large {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.skill-info-detailed {
  flex: 1;
}

.skill-info-detailed h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 15px 0;
}

.skill-level-detailed {
  display: flex;
  align-items: center;
  gap: 15px;
}

.skill-bar-large {
  flex: 1;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.skill-progress-large {
  height: 100%;
  border-radius: 5px;
  transition: width 1s ease-out;
}

.skill-percentage-large {
  font-size: 1.1rem;
  font-weight: 600;
  min-width: 50px;
}

/* Journey Modal Styles */
.journey-detailed {
  max-width: 600px;
  margin: 0 auto;
}

.timeline-detailed {
  position: relative;
  padding-left: 40px;
}

.timeline-detailed::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #29b4bd, #1b826f);
}

.timeline-item-detailed {
  position: relative;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.timeline-dot-large {
  position: absolute;
  left: -47px;
  top: 25px;
  width: 20px;
  height: 20px;
  background: #29b4bd;
  border-radius: 50%;
  border: 4px solid #1a1a1a;
  box-shadow: 0 0 0 4px rgba(41, 180, 189, 0.3);
}

.timeline-year-large {
  font-size: 1.1rem;
  font-weight: 600;
  color: #29b4bd;
  margin-bottom: 10px;
}

.timeline-content-detailed h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 10px 0;
}

.timeline-content-detailed p {
  line-height: 1.6;
  opacity: 0.9;
  margin: 0;
}

/* CV Modal Styles */
.cv-detailed {
  text-align: center;
}

.cv-preview-large {
  max-width: 400px;
  margin: 0 auto;
}

.cv-document-large {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 30px;
}

.cv-header-large {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.cv-icon-large {
  font-size: 3rem;
}

.cv-info-large h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 5px 0;
}

.cv-info-large p {
  opacity: 0.8;
  margin: 0;
}

.cv-actions-large {
  display: flex;
  gap: 15px;
}

.cv-btn-large {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 20px;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.cv-btn-large svg {
  width: 18px;
  height: 18px;
}

.cv-btn-large.download {
  background: linear-gradient(45deg, #29b4bd, #1b826f);
  color: #ffffff;
}

.cv-btn-large.download:hover {
  background: linear-gradient(45deg, #1b826f, #29b4bd);
  transform: translateY(-2px);
}

.cv-btn-large.view {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cv-btn-large.view:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Stats Modal Styles */
.stats-detailed {
  text-align: center;
}

.stats-grid-large {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 600px;
  margin: 0 auto;
}

.stat-card-large {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.stat-icon-large {
  font-size: 3rem;
  margin-bottom: 15px;
}

.stat-number-large {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #29b4bd;
}

.stat-label-large {
  font-size: 1.1rem;
  opacity: 0.8;
}

/* Values Modal Styles */
.values-detailed {
  max-width: 700px;
  margin: 0 auto;
}

.values-grid-large {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.value-card-large {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.value-icon-large {
  font-size: 3rem;
  margin-bottom: 20px;
}

.value-card-large h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  color: #29b4bd;
}

.value-card-large p {
  line-height: 1.6;
  opacity: 0.9;
  margin: 0;
}

/* CV Modal (separate) - keeping existing styles */
.cv-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.cv-modal {
  background: #1a1a1a;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cv-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: #0f0f0f;
}

.cv-modal-header h3 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
}

.cv-modal-content {
  padding: 30px;
  max-height: 60vh;
  overflow-y: auto;
  background: #1a1a1a;
}

.cv-full-preview {
  max-width: 100%;
}

.cv-page {
  background: #ffffff;
  padding: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #000000;
}

.cv-page-header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #000000;
}

.cv-page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 10px 0;
}

.cv-subtitle {
  font-size: 1.2rem;
  color: #333333;
  margin: 0 0 20px 0;
  font-weight: 600;
}

.cv-contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  max-width: 500px;
  margin: 0 auto;
}

.contact-item {
  font-size: 0.9rem;
  color: #666666;
}

.cv-section {
  margin-bottom: 25px;
}

.cv-section h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 15px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e8f0;
}

.cv-section p {
  color: #333333;
  margin: 0 0 15px 0;
}

.skills-categories {
  display: grid;
  gap: 10px;
}

.skill-category {
  color: #333333;
  line-height: 1.6;
}

.skill-category strong {
  color: #000000;
}

.experience-item,
.education-item,
.project-item {
  margin-bottom: 20px;
}

.experience-header,
.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.experience-header h4,
.education-header h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

.experience-date,
.education-date {
  font-size: 0.9rem;
  color: #333333;
  font-weight: 600;
}

.experience-company,
.education-school {
  color: #666666;
  font-style: italic;
  margin: 0 0 10px 0;
}

.experience-list {
  margin: 10px 0 0 20px;
  color: #333333;
}

.experience-list li {
  margin-bottom: 5px;
}

.project-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 5px 0;
}

.project-item p {
  color: #333333;
  margin: 0 0 8px 0;
}

.project-tech {
  font-size: 0.9rem;
  color: #333333;
  font-weight: 500;
}

.cv-modal-footer {
  padding: 20px 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: #0f0f0f;
  text-align: center;
}

.modal-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: linear-gradient(45deg, #29b4bd, #1b826f);
  color: #ffffff;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-download-btn:hover {
  background: linear-gradient(45deg, #1b826f, #29b4bd);
  transform: translateY(-2px);
}

.modal-download-btn svg {
  width: 18px;
  height: 18px;
}

/* Animations */
@keyframes floatCode {
  0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

@keyframes rotateShape {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .netflix-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .profile-details {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
  
  .skill-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .skill-level-detailed {
    justify-content: center;
  }
  
  .timeline-detailed {
    padding-left: 30px;
  }
  
  .timeline-dot-large {
    left: -37px;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 40px 15px;
  }
  
  .netflix-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .modal-section {
    padding: 40px 20px 20px;
  }
  
  .modal-header h2 {
    font-size: 2rem;
  }
  
  .stats-grid-large {
    grid-template-columns: 1fr 1fr;
  }
  
  .values-grid-large {
    grid-template-columns: 1fr;
  }
  
  .cv-actions-large {
    flex-direction: column;
  }
  
  .cv-modal {
    margin: 10px;
  }
  
  .cv-modal-content {
    padding: 20px;
  }
  
  .cv-page {
    padding: 20px;
  }
  
  .cv-contact-info {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .card-image {
    height: 200px;
  }
  
  .card-info {
    padding: 15px;
  }
  
  .modal-content {
    margin: 10px;
  }
  
  .timeline-detailed {
    padding-left: 20px;
  }
  
  .timeline-dot-large {
    left: -27px;
    width: 15px;
    height: 15px;
  }
  
  .timeline-detailed::before {
    left: 10px;
    width: 2px;
  }
}
</style>