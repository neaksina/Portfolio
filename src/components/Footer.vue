 <template>
  <footer class="footer">
    <!-- Dynamic Background -->
    <div class="footer-bg">
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
        <div class="orb orb-4"></div>
      </div>
      
      <div class="floating-particles">
        <div class="particle" v-for="i in 20" :key="i" :style="{ 
          '--delay': i * 0.2 + 's',
          '--x': Math.random() * 100 + '%',
          '--y': Math.random() * 100 + '%'
        }"></div>
      </div>
      
      <div class="code-rain">
        <div class="code-line" v-for="i in 8" :key="i" :style="{ '--delay': i * 0.5 + 's' }">
          {{ codeSnippets[i % codeSnippets.length] }}
        </div>
      </div>
    </div>

    <div class="footer-container">
      <!-- Hero Stats Section -->
      <div class="hero-stats">
        <div class="stats-header">
          <h2 class="stats-title">
            <span class="title-gradient">My Journey</span>
            <span class="title-accent">In Numbers</span>
          </h2>
          <p class="stats-subtitle">Crafting digital experiences with passion and precision</p>
        </div>
        
        <div class="stats-showcase">
          <div class="stat-card" v-for="(stat, index) in enhancedStats" :key="stat.label" 
               :style="{ '--delay': index * 0.1 + 's' }">
            <div class="stat-card-inner">
              <div class="stat-icon-container">
                <div class="stat-icon-bg"></div>
                <span class="stat-icon">{{ stat.icon }}</span>
              </div>
              <div class="stat-content">
                <div class="stat-number">{{ animatedStats[stat.label] || 0 }}</div>
                <div class="stat-label">{{ stat.label }}</div>
                <div class="stat-description">{{ stat.description }}</div>
              </div>
              <div class="stat-progress">
                <div class="progress-bar" :style="{ width: (animatedStats[stat.label] / stat.max * 100) + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Footer Grid -->
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-column brand-column">
          <div class="brand-section">
            <div class="brand-logo">
              <div class="logo-container">
                <div class="logo-rings">
                  <div class="ring ring-1"></div>
                  <div class="ring ring-2"></div>
                  <div class="ring ring-3"></div>
                </div>
                <div class="logo-center">
                  <span class="logo-text">S</span>
                </div>
              </div>
              <div class="brand-info">
                <h3 class="brand-name">Sina Neak</h3>
                <p class="brand-title">Full-Stack Developer</p>
              </div>
            </div>
            
            <p class="brand-description">
              Passionate about creating innovative web solutions that bridge the gap between 
              design and functionality. Based in Cambodia, working globally.
            </p>
            
            <div class="brand-highlights">
              <div class="highlight-item">
                <span class="highlight-icon">🎯</span>
                <span class="highlight-text">3+ Years Experience</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">🌍</span>
                <span class="highlight-text">Global Clients</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">⚡</span>
                <span class="highlight-text">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Column -->
        <div class="footer-column">
          <h4 class="column-title">
            <span class="title-icon">🧭</span>
            Navigation
          </h4>
          <ul class="footer-links">
            <li><router-link to="/" class="footer-link">
              <span class="link-icon">🏠</span>
              <span class="link-text">Home</span>
              <span class="link-arrow">→</span>
            </router-link></li>
            <li><router-link to="/about" class="footer-link">
              <span class="link-icon">👨‍💻</span>
              <span class="link-text">About</span>
              <span class="link-arrow">→</span>
            </router-link></li>
            <li><router-link to="/projects" class="footer-link">
              <span class="link-icon">🚀</span>
              <span class="link-text">Projects</span>
              <span class="link-arrow">→</span>
            </router-link></li>
            <li><router-link to="/skills" class="footer-link">
              <span class="link-icon">⚡</span>
              <span class="link-text">Skills</span>
              <span class="link-arrow">→</span>
            </router-link></li>
            <li><router-link to="/contact" class="footer-link">
              <span class="link-icon">📧</span>
              <span class="link-text">Contact</span>
              <span class="link-arrow">→</span>
            </router-link></li>
          </ul>
        </div>

        <!-- Services Column -->
        <div class="footer-column">
          <h4 class="column-title">
            <span class="title-icon">🛠️</span>
            Services
          </h4>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">
              <span class="link-icon">🌐</span>
              <span class="link-text">Web Development</span>
              <span class="link-arrow">→</span>
            </a></li>
            <li><a href="#" class="footer-link">
              <span class="link-icon">📱</span>
              <span class="link-text">Mobile Apps</span>
              <span class="link-arrow">→</span>
            </a></li>
            <li><a href="#" class="footer-link">
              <span class="link-icon">🎨</span>
              <span class="link-text">UI/UX Design</span>
              <span class="link-arrow">→</span>
            </a></li>
            <li><a href="#" class="footer-link">
              <span class="link-icon">⚙️</span>
              <span class="link-text">API Development</span>
              <span class="link-arrow">→</span>
            </a></li>
            <li><a href="#" class="footer-link">
              <span class="link-icon">💡</span>
              <span class="link-text">Consulting</span>
              <span class="link-arrow">→</span>
            </a></li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="footer-column contact-column">
          <h4 class="column-title">
            <span class="title-icon">📞</span>
            Get In Touch
          </h4>
          
          <div class="contact-cards">
            <div class="contact-card" @click="openContactModal('email')">
              <div class="contact-icon">📧</div>
              <div class="contact-info">
                <div class="contact-label">Email</div>
                <div class="contact-value">sina.neak@email.com</div>
              </div>
              <div class="contact-action">→</div>
            </div>
            
            <div class="contact-card" @click="openContactModal('phone')">
              <div class="contact-icon">📱</div>
              <div class="contact-info">
                <div class="contact-label">Phone</div>
                <div class="contact-value">+855 12 345 678</div>
              </div>
              <div class="contact-action">→</div>
            </div>
            
            <div class="contact-card" @click="openContactModal('location')">
              <div class="contact-icon">📍</div>
              <div class="contact-info">
                <div class="contact-label">Location</div>
                <div class="contact-value">Phnom Penh, Cambodia</div>
              </div>
              <div class="contact-action">→</div>
            </div>
          </div>
          
          <!-- Social Media -->
          <div class="social-section">
            <h5 class="social-title">Follow My Journey</h5>
            <div class="social-grid">
              <a href="#" class="social-btn github">
                <span class="social-icon">🐙</span>
                <span class="social-label">GitHub</span>
              </a>
              <a href="#" class="social-btn linkedin">
                <span class="social-icon">💼</span>
                <span class="social-label">LinkedIn</span>
              </a>
              <a href="#" class="social-btn twitter">
                <span class="social-icon">🐦</span>
                <span class="social-label">Twitter</span>
              </a>
              <a href="#" class="social-btn instagram">
                <span class="social-icon">📸</span>
                <span class="social-label">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="newsletter-section">
        <div class="newsletter-content">
          <div class="newsletter-header">
            <h3 class="newsletter-title">
              <span class="newsletter-icon">📬</span>
              Stay Updated
            </h3>
            <p class="newsletter-description">
              Get notified about new projects, articles, and exciting updates. 
              Join the community of developers and designers!
            </p>
          </div>
          
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <div class="form-group">
              <input 
                v-model="newsletterEmail" 
                type="email" 
                placeholder="Enter your email address"
                class="newsletter-input"
                required
              />
              <button type="submit" class="newsletter-submit" :disabled="isSubscribing">
                <span v-if="!isSubscribing" class="submit-content">
                  <span class="submit-text">Subscribe</span>
                  <span class="submit-icon">🚀</span>
                </span>
                <span v-else class="submit-loading">
                  <div class="loading-spinner"></div>
                  <span>Subscribing...</span>
                </span>
              </button>
            </div>
            
            <div v-if="subscriptionMessage" class="subscription-feedback" :class="{ 'success': subscriptionSuccess }">
              <span class="feedback-icon">{{ subscriptionSuccess ? '✅' : '❌' }}</span>
              <span class="feedback-text">{{ subscriptionMessage }}</span>
            </div>
          </form>
        </div>
      </div>

      <!-- Technology Stack -->
      <div class="tech-section">
        <h3 class="tech-title">
          <span class="tech-icon">⚡</span>
          Built With Modern Technologies
        </h3>
        <div class="tech-carousel">
          <div class="tech-track">
            <div class="tech-item" v-for="tech in technologies" :key="tech.name">
              <div class="tech-logo">{{ tech.icon }}</div>
              <span class="tech-name">{{ tech.name }}</span>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="tech-item" v-for="tech in technologies" :key="tech.name + '-dup'">
              <div class="tech-logo">{{ tech.icon }}</div>
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright-section">
            <p class="copyright-text">
              © {{ currentYear }} <span class="brand-highlight">Sina Neak</span>. All rights reserved.
            </p>
            <p class="made-with">
              Made with <span class="heart">❤️</span> in <span class="location">Cambodia</span>
            </p>
          </div>
          
          <div class="footer-actions">
            <button @click="scrollToTop" class="action-btn scroll-btn" title="Back to Top">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18,15 12,9 6,15"/>
              </svg>
            </button>
            
            <button @click="downloadCV" class="action-btn cv-btn" title="Download CV">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>Download CV</span>
            </button>
          </div>
          
          <div class="legal-links">
            <a href="#" class="legal-link">Privacy Policy</a>
            <a href="#" class="legal-link">Terms of Service</a>
            <a href="#" class="legal-link">Sitemap</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Contact Button -->
    <div class="floating-contact">
      <button @click="toggleContactMenu" class="contact-fab" :class="{ 'active': showContactMenu }">
        <span class="fab-icon">💬</span>
      </button>
      
      <div class="contact-menu" :class="{ 'active': showContactMenu }">
        <a href="mailto:sina.neak@email.com" class="contact-option email">
          <span class="option-icon">📧</span>
          <span class="option-label">Email</span>
        </a>
        <a href="tel:+85512345678" class="contact-option phone">
          <span class="option-icon">📱</span>
          <span class="option-label">Call</span>
        </a>
        <a href="#" class="contact-option whatsapp">
          <span class="option-icon">💬</span>
          <span class="option-label">WhatsApp</span>
        </a>
        <router-link to="/contact" class="contact-option form" @click="closeContactMenu">
          <span class="option-icon">📝</span>
          <span class="option-label">Contact Form</span>
        </router-link>
      </div>
    </div>

    <!-- Contact Modal -->
    <div v-if="activeModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button @click="closeModal" class="modal-close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        
        <div class="modal-body">
          <div v-if="activeModal === 'email'" class="modal-section">
            <div class="modal-icon">📧</div>
            <h3 class="modal-title">Email Contact</h3>
            <p class="modal-description">Ready to start your project? Send me an email!</p>
            <div class="modal-actions">
              <a href="mailto:sina.neak@email.com" class="modal-btn primary">Send Email</a>
              <button @click="copyToClipboard('sina.neak@email.com')" class="modal-btn secondary">Copy Email</button>
            </div>
          </div>
          
          <div v-if="activeModal === 'phone'" class="modal-section">
            <div class="modal-icon">📱</div>
            <h3 class="modal-title">Phone Contact</h3>
            <p class="modal-description">Let's discuss your project over a call!</p>
            <div class="modal-actions">
              <a href="tel:+85512345678" class="modal-btn primary">Call Now</a>
              <button @click="copyToClipboard('+855 12 345 678')" class="modal-btn secondary">Copy Number</button>
            </div>
          </div>
          
          <div v-if="activeModal === 'location'" class="modal-section">
            <div class="modal-icon">📍</div>
            <h3 class="modal-title">Location</h3>
            <p class="modal-description">Based in Phnom Penh, working with clients worldwide</p>
            <div class="location-details">
              <p><strong>Address:</strong> 371, Sensok, Phnom Penh, Cambodia</p>
              <p><strong>Timezone:</strong> GMT+7 (ICT)</p>
              <p><strong>Availability:</strong> Mon-Fri, 9AM-6PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue'

const newsletterEmail = ref('')
const isSubscribing = ref(false)
const subscriptionMessage = ref('')
const subscriptionSuccess = ref(false)
const showContactMenu = ref(false)
const activeModal = ref(null)
const animatedStats = reactive({})

const codeSnippets = [
  'const developer = "Sina Neak"',
  'function createAwesome() { }',
  '<template>',
  'SELECT * FROM success',
  'npm install passion',
  'git commit -m "Excellence"',
  'Vue.createApp({})',
  'echo "Innovation"'
]

const currentYear = computed(() => new Date().getFullYear())

// Enhanced stats with only 10 projects
const enhancedStats = [
  { 
    icon: '🚀', 
    label: 'Projects', 
    value: 10, 
    max: 15,
    description: 'Completed Successfully'
  },
  { 
    icon: '⭐', 
    label: 'GitHub Stars', 
    value: 85, 
    max: 100,
    description: 'Community Recognition'
  },
  { 
    icon: '☕', 
    label: 'Coffee Cups', 
    value: 500, 
    max: 1000,
    description: 'Fuel for Coding'
  },
  { 
    icon: '🎯', 
    label: 'Success Rate', 
    value: 98, 
    max: 100,
    description: 'Client Satisfaction'
  }
]

const technologies = [
  { name: 'Vue.js', icon: '⚡' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'PHP', icon: '🐘' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Git', icon: '📝' },
  { name: 'Netlify', icon: '🚀' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Bootstrap', icon: '🅱️' }
]

const subscribeNewsletter = async () => {
  if (!newsletterEmail.value) return
  
  isSubscribing.value = true
  
  setTimeout(() => {
    subscriptionSuccess.value = true
    subscriptionMessage.value = 'Welcome aboard! You\'ll receive updates about new projects and insights.'
    newsletterEmail.value = ''
    isSubscribing.value = false
    
    setTimeout(() => {
      subscriptionMessage.value = ''
    }, 5000)
  }, 2000)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/sina-neak-resume.pdf'
  link.download = 'Sina_Neak_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const toggleContactMenu = () => {
  showContactMenu.value = !showContactMenu.value
}

const closeContactMenu = () => {
  showContactMenu.value = false
}

const openContactModal = (type) => {
  activeModal.value = type
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  activeModal.value = null
  document.body.style.overflow = 'auto'
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const animateStats = () => {
  enhancedStats.forEach(stat => {
    let current = 0
    const target = stat.value
    const increment = target / 60
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      animatedStats[stat.label] = Math.floor(current)
    }, 25)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats()
        observer.unobserve(entry.target)
      }
    })
  })
  
  const statsElement = document.querySelector('.hero-stats')
  if (statsElement) {
    observer.observe(statsElement)
  }
})
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 70%, #0f3460 100%);
  position: relative;
  overflow: hidden;
  margin-top: 120px;
}

/* Dynamic Background */
.footer-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.gradient-orbs {
  position: absolute;
  width: 100%;
  height: 100%;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.1;
  animation: orbFloat 20s ease-in-out infinite;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #4fc3f7, #29b6f6);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #81c784, #66bb6a);
  top: 60%;
  right: 15%;
  animation-delay: 5s;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #ffb74d, #ffa726);
  bottom: 20%;
  left: 20%;
  animation-delay: 10s;
}

.orb-4 {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, #f06292, #ec407a);
  top: 30%;
  right: 30%;
  animation-delay: 15s;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(79, 195, 247, 0.6);
  border-radius: 50%;
  left: var(--x);
  top: var(--y);
  animation: particleFloat 15s linear infinite;
  animation-delay: var(--delay);
}

.code-rain {
  position: absolute;
  width: 100%;
  height: 100%;
}

.code-line {
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: rgba(79, 195, 247, 0.1);
  animation: codeRain 12s linear infinite;
  animation-delay: var(--delay);
}

.code-line:nth-child(1) { left: 10%; }
.code-line:nth-child(2) { left: 25%; }
.code-line:nth-child(3) { left: 40%; }
.code-line:nth-child(4) { left: 55%; }
.code-line:nth-child(5) { left: 70%; }
.code-line:nth-child(6) { left: 85%; }
.code-line:nth-child(7) { left: 15%; }
.code-line:nth-child(8) { left: 75%; }

/* Main Container */
.footer-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 0;
}

/* Hero Stats Section */
.hero-stats {
  margin-bottom: 100px;
  text-align: center;
}

.stats-header {
  margin-bottom: 60px;
}

.stats-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 0 0 20px 0;
  line-height: 1.2;
}

.title-gradient {
  background: linear-gradient(45deg, #4fc3f7, #81c784, #ffb74d);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease-in-out infinite;
}

.title-accent {
  color: #ffffff;
  display: block;
  margin-top: 10px;
}

.stats-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

.stats-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-card {
  opacity: 0;
  transform: translateY(50px);
  animation: cardSlideUp 0.8s ease forwards;
  animation-delay: var(--delay);
}

.stat-card-inner {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 35px 25px;
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.stat-card-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(79, 195, 247, 0.1), transparent);
  transition: left 0.6s ease;
}

.stat-card:hover .stat-card-inner {
  transform: translateY(-10px);
  border-color: rgba(79, 195, 247, 0.3);
  box-shadow: 0 20px 40px rgba(79, 195, 247, 0.2);
}

.stat-card:hover .stat-card-inner::before {
  left: 100%;
}

.stat-icon-container {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
}

.stat-icon-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(79, 195, 247, 0.2), rgba(129, 199, 132, 0.2));
  border-radius: 50%;
  animation: iconPulse 3s ease-in-out infinite;
}

.stat-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  z-index: 2;
}

.stat-content {
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #4fc3f7;
}

.stat-description {
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.4;
}

.stat-progress {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #4fc3f7, #81c784);
  border-radius: 2px;
  transition: width 2s ease-out;
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 60px;
  margin-bottom: 80px;
}

.footer-column {
  color: #ffffff;
}

/* Brand Column */
.brand-column {
  padding-right: 40px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.logo-container {
  position: relative;
  width: 70px;
  height: 70px;
}

.logo-rings {
  position: absolute;
  width: 100%;
  height: 100%;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
}

.ring-1 {
  width: 100%;
  height: 100%;
  border-color: rgba(79, 195, 247, 0.3);
  animation: ringRotate 8s linear infinite;
}

.ring-2 {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-color: rgba(129, 199, 132, 0.4);
  animation: ringRotate 6s linear infinite reverse;
}

.ring-3 {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-color: rgba(255, 183, 77, 0.5);
  animation: ringRotate 4s linear infinite;
}

.logo-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 35px;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
}

.brand-name {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0 0 5px 0;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-title {
  font-size: 1.1rem;
  color: #4fc3f7;
  margin: 0;
  opacity: 0.9;
}

.brand-description {
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.8;
  margin: 0 0 30px 0;
}

.brand-highlights {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
}

.highlight-icon {
  font-size: 1.2rem;
}

.highlight-text {
  font-size: 0.95rem;
  font-weight: 500;
}

/* Column Titles */
.column-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 30px 0;
  color: #4fc3f7;
  position: relative;
}

.column-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  border-radius: 2px;
}

.title-icon {
  font-size: 1.3rem;
}

/* Footer Links */
.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-bottom: 15px;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-link:hover {
  background: rgba(79, 195, 247, 0.1);
  border-color: rgba(79, 195, 247, 0.2);
  transform: translateX(8px);
  color: #4fc3f7;
}

.link-icon {
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.link-text {
  flex: 1;
  font-weight: 500;
}

.link-arrow {
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.footer-link:hover .link-arrow {
  opacity: 1;
  transform: translateX(3px);
}

/* Contact Cards */
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.contact-card:hover {
  background: rgba(79, 195, 247, 0.1);
  border-color: rgba(79, 195, 247, 0.3);
  transform: translateY(-3px);
}

.contact-icon {
  font-size: 1.5rem;
  width: 30px;
  text-align: center;
}

.contact-info {
  flex: 1;
}

.contact-label {
  font-size: 0.8rem;
  opacity: 0.7;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 3px;
}

.contact-value {
  font-size: 1rem;
  font-weight: 500;
}

.contact-action {
  font-size: 1.2rem;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.contact-card:hover .contact-action {
  opacity: 1;
  transform: translateX(3px);
}

/* Social Section */
.social-section {
  margin-top: 30px;
}

.social-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: #81c784;
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.social-btn:hover {
  background: rgba(79, 195, 247, 0.1);
  border-color: rgba(79, 195, 247, 0.3);
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.1rem;
}

/* Newsletter Section */
.newsletter-section {
  background: linear-gradient(135deg, rgba(79, 195, 247, 0.1), rgba(129, 199, 132, 0.1));
  border: 1px solid rgba(79, 195, 247, 0.2);
  border-radius: 30px;
  padding: 50px 40px;
  margin-bottom: 80px;
  backdrop-filter: blur(20px);
  text-align: center;
}

.newsletter-header {
  margin-bottom: 40px;
}

.newsletter-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 15px 0;
  color: #ffffff;
}

.newsletter-icon {
  font-size: 2.2rem;
}

.newsletter-description {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  color: #ffffff;
  margin: 0;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.newsletter-input {
  flex: 1;
  padding: 18px 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-input:focus {
  outline: none;
  border-color: #4fc3f7;
  background: rgba(79, 195, 247, 0.1);
  box-shadow: 0 0 0 3px rgba(79, 195, 247, 0.1);
}

.newsletter-submit {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 30px;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  color: #ffffff;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.newsletter-submit:hover:not(:disabled) {
  background: linear-gradient(45deg, #81c784, #4fc3f7);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(79, 195, 247, 0.3);
}

.newsletter-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.submit-loading {
  display: flex;
  align-items: center;
  gap: 10px;
}

.loading-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.subscription-feedback {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 20px;
  border-radius: 15px;
  background: rgba(244, 67, 54, 0.1);
  border: 1px solid rgba(244, 67, 54, 0.3);
  color: #f44336;
}

.subscription-feedback.success {
  background: rgba(129, 199, 132, 0.1);
  border-color: rgba(129, 199, 132, 0.3);
  color: #81c784;
}

.feedback-icon {
  font-size: 1.2rem;
}

/* Technology Section */
.tech-section {
  margin-bottom: 80px;
  text-align: center;
}

.tech-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 40px 0;
  color: #ffffff;
}

.tech-icon {
  font-size: 2rem;
}

.tech-carousel {
  overflow: hidden;
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.tech-track {
  display: flex;
  gap: 20px;
  animation: techScroll 30s linear infinite;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 25px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  white-space: nowrap;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(79, 195, 247, 0.1);
  border-color: rgba(79, 195, 247, 0.3);
  transform: translateY(-3px);
}

.tech-logo {
  font-size: 1.5rem;
}

.tech-name {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px 0;
}

.footer-bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
}

.copyright-section {
  text-align: left;
}

.copyright-text {
  margin: 0 0 8px 0;
  font-size: 1rem;
  opacity: 0.8;
}

.brand-highlight {
  color: #4fc3f7;
  font-weight: 600;
}

.made-with {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.7;
}

.heart {
  color: #f06292;
  animation: heartBeat 2s ease-in-out infinite;
}

.location {
  color: #81c784;
  font-weight: 500;
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.scroll-btn {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 45px;
  height: 45px;
  padding: 0;
  justify-content: center;
  border-radius: 50%;
}

.scroll-btn:hover {
  background: rgba(79, 195, 247, 0.2);
  border-color: rgba(79, 195, 247, 0.3);
  transform: translateY(-3px);
}

.cv-btn {
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  color: #ffffff;
}

.cv-btn:hover {
  background: linear-gradient(45deg, #81c784, #4fc3f7);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(79, 195, 247, 0.3);
}

.action-btn svg {
  width: 18px;
  height: 18px;
}

.legal-links {
  display: flex;
  gap: 25px;
}

.legal-link {
  color: #ffffff;
  text-decoration: none;
  opacity: 0.6;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.legal-link:hover {
  opacity: 1;
  color: #4fc3f7;
}

/* Floating Contact */
.floating-contact {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

.contact-fab {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(79, 195, 247, 0.4);
}

.contact-fab:hover {
  background: linear-gradient(45deg, #81c784, #4fc3f7);
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(79, 195, 247, 0.5);
}

.contact-fab.active {
  transform: rotate(45deg);
}

.fab-icon {
  font-size: 1.8rem;
  transition: transform 0.3s ease;
}

.contact-menu {
  position: absolute;
  bottom: 80px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.contact-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.contact-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;
  background: rgba(26, 26, 46, 0.95);
  border: 1px solid rgba(79, 195, 247, 0.3);
  border-radius: 25px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  white-space: nowrap;
}

.contact-option:hover {
  background: rgba(79, 195, 247, 0.2);
  transform: translateX(-5px);
}

.option-icon {
  font-size: 1.2rem;
}

.option-label {
  font-size: 0.9rem;
  font-weight: 500;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border-radius: 25px;
  width: 100%;
  max-width: 500px;
  border: 1px solid rgba(79, 195, 247, 0.2);
  overflow: hidden;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-close svg {
  width: 20px;
  height: 20px;
}

.modal-body {
  padding: 60px 40px 40px;
}

.modal-section {
  text-align: center;
  color: #ffffff;
}

.modal-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 15px 0;
  color: #4fc3f7;
}

.modal-description {
  font-size: 1.1rem;
  opacity: 0.8;
  margin: 0 0 30px 0;
  line-height: 1.6;
}

.modal-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.modal-btn {
  padding: 15px 25px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.modal-btn.primary {
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  color: #ffffff;
}

.modal-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.modal-btn:hover {
  transform: translateY(-2px);
}

.location-details {
  text-align: left;
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.location-details p {
  margin: 10px 0;
  opacity: 0.9;
}

/* Animations */
@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -20px) scale(1.1); }
  50% { transform: translate(-15px, 15px) scale(0.9); }
  75% { transform: translate(15px, 10px) scale(1.05); }
}

@keyframes particleFloat {
  0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

@keyframes codeRain {
  0% { transform: translateY(-100px); opacity: 0; }
  10% { opacity: 0.3; }
  90% { opacity: 0.3; }
  100% { transform: translateY(100vh); opacity: 0; }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes cardSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
}

@keyframes ringRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes techScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-container {
    padding: 60px 30px 0;
  }
  
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  .brand-column {
    grid-column: 1 / -1;
    padding-right: 0;
  }
  
  .stats-showcase {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 40px 20px 0;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .stats-showcase {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .newsletter-section {
    padding: 40px 25px;
  }
  
  .form-group {
    flex-direction: column;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }
  
  .floating-contact {
    bottom: 20px;
    right: 20px;
  }
  
  .contact-fab {
    width: 60px;
    height: 60px;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 30px 15px 0;
  }
  
  .stats-showcase {
    grid-template-columns: 1fr;
  }
  
  .stat-card-inner {
    padding: 25px 20px;
  }
  
  .newsletter-section {
    padding: 30px 20px;
  }
  
  .modal-body {
    padding: 40px 25px 25px;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .tech-item {
    padding: 12px 20px;
  }
}
</style>