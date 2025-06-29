<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'menu-open': isMobileMenuOpen }">
    <!-- Animated Background -->
    <div class="navbar-bg"></div>
    
    <div class="navbar-container">
      <!-- Logo Section -->
      <div class="logo-section">
        <router-link to="/" class="logo" @click="closeMobileMenu">
          <div class="logo-icon">
            <div class="logo-dot"></div>
            <div class="logo-ring"></div>
          </div>
          <span class="logo-text">Sina Neak</span>
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <ul class="nav-menu desktop-menu">
        <li class="nav-item" v-for="item in navItems" :key="item.path">
          <router-link 
            :to="item.path" 
            class="nav-link"
            @click="closeMobileMenu"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-text">{{ item.name }}</span>
            <div class="nav-indicator"></div>
          </router-link>
        </li>
      </ul>

      <!-- Action Buttons -->
      <div class="navbar-actions">
        <!-- Theme Toggle -->
        <button class="action-btn theme-toggle" @click="toggleTheme" title="Toggle Theme">
          <div class="theme-icon">
            <span v-if="isDarkMode">🌙</span>
            <span v-else>☀️</span>
          </div>
        </button>

        <!-- Language Toggle -->
        <button class="action-btn language-toggle" @click="toggleLanguage" title="Change Language">
          <span class="language-text">{{ currentLanguage }}</span>
        </button>

        <!-- Download CV -->
        <button class="action-btn cv-download" @click="downloadCV" title="Download CV">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>

        <!-- Mobile Menu Toggle -->
        <button 
          class="mobile-menu-toggle" 
          @click="toggleMobileMenu"
          :class="{ 'active': isMobileMenuOpen }"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-menu" :class="{ 'active': isMobileMenuOpen }">
      <div class="mobile-menu-content">
        <div class="mobile-menu-header">
          <div class="mobile-logo">
            <div class="logo-icon">
              <div class="logo-dot"></div>
              <div class="logo-ring"></div>
            </div>
            <span class="logo-text">Sina Neak</span>
          </div>
          <p class="mobile-subtitle">Full-Stack Developer</p>
        </div>

        <ul class="mobile-nav-list">
          <li class="mobile-nav-item" v-for="(item, index) in navItems" :key="item.path">
            <router-link 
              :to="item.path" 
              class="mobile-nav-link"
              @click="closeMobileMenu"
              :style="{ '--delay': index * 0.1 + 's' }"
            >
              <span class="mobile-nav-icon">{{ item.icon }}</span>
              <span class="mobile-nav-text">{{ item.name }}</span>
              <span class="mobile-nav-arrow">→</span>
            </router-link>
          </li>
        </ul>

        <div class="mobile-menu-footer">
          <div class="mobile-actions">
            <button class="mobile-action-btn" @click="downloadCV">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </button>
            <div class="mobile-theme-language">
              <button class="mobile-theme-btn" @click="toggleTheme">
                <span v-if="isDarkMode">🌙</span>
                <span v-else>☀️</span>
              </button>
              <button class="mobile-language-btn" @click="toggleLanguage">
                {{ currentLanguage }}
              </button>
            </div>
          </div>
          
          <div class="mobile-contact">
            <p>📧 sina.neak@email.com</p>
            <p>📱 +855 12 345 678</p>
            <p>📍 Phnom Penh, Cambodia</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      class="mobile-menu-overlay" 
      :class="{ 'active': isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>

    <!-- Progress Bar -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDarkMode = ref(true)
const currentLanguage = ref('EN')
const scrollProgress = ref(0)

const navItems = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'About', path: '/about', icon: '👨‍💻' },
  { name: 'Projects', path: '/projects', icon: '🚀' },
  { name: 'Skills', path: '/skills', icon: '⚡' },
  { name: 'Contact', path: '/contact', icon: '📧' }
]

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  
  isScrolled.value = scrollTop > 50
  scrollProgress.value = (scrollTop / docHeight) * 100
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : 'auto'
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  // You can emit an event or use a store to handle theme changes globally
}

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'EN' ? 'KH' : 'EN'
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/sina-neak-resume.pdf'
  link.download = 'Sina_Neak_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.95), rgba(26, 26, 46, 0.95));
  transition: all 0.3s ease;
}

.navbar.scrolled .navbar-bg {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.98), rgba(26, 26, 46, 0.98));
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Logo Section */
.logo-section {
  z-index: 10;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-dot {
  width: 12px;
  height: 12px;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  border-radius: 50%;
  position: relative;
  z-index: 2;
  animation: logoPulse 2s ease-in-out infinite;
}

.logo-ring {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 2px solid rgba(79, 195, 247, 0.3);
  border-radius: 50%;
  animation: logoRotate 8s linear infinite;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Desktop Navigation */
.desktop-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-weight: 500;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(79, 195, 247, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  background: rgba(79, 195, 247, 0.1);
  transform: translateY(-2px);
  color: #4fc3f7;
}

.nav-link.router-link-active {
  background: linear-gradient(45deg, rgba(79, 195, 247, 0.2), rgba(129, 199, 132, 0.2));
  color: #4fc3f7;
  box-shadow: 0 4px 15px rgba(79, 195, 247, 0.3);
}

.nav-icon {
  font-size: 1.1rem;
}

.nav-text {
  font-size: 0.95rem;
}

.nav-indicator {
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link.router-link-active .nav-indicator {
  width: 80%;
}

/* Action Buttons */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 10;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.action-btn:hover {
  background: rgba(79, 195, 247, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(79, 195, 247, 0.3);
}

.theme-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.action-btn:hover .theme-icon {
  transform: rotate(180deg);
}

.language-toggle {
  width: auto;
  padding: 0 12px;
  border-radius: 20px;
}

.language-text {
  font-size: 0.8rem;
  font-weight: 600;
}

.cv-download svg {
  width: 18px;
  height: 18px;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-line {
  width: 25px;
  height: 2px;
  background: #ffffff;
  margin: 3px 0;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 999;
  overflow-y: auto;
}

.mobile-menu.active {
  right: 0;
}

.mobile-menu-content {
  padding: 80px 30px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
}

.mobile-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

.mobile-subtitle {
  color: #4fc3f7;
  margin: 0;
  font-size: 1rem;
  opacity: 0.8;
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
}

.mobile-nav-item {
  margin-bottom: 8px;
  opacity: 0;
  transform: translateX(50px);
  animation: slideInRight 0.5s ease forwards;
  animation-delay: var(--delay);
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 20px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 15px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 8px;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background: linear-gradient(45deg, rgba(79, 195, 247, 0.2), rgba(129, 199, 132, 0.2));
  border-color: rgba(79, 195, 247, 0.3);
  transform: translateX(10px);
}

.mobile-nav-icon {
  font-size: 1.3rem;
  width: 25px;
  text-align: center;
}

.mobile-nav-text {
  flex: 1;
  font-size: 1.1rem;
  font-weight: 500;
}

.mobile-nav-arrow {
  font-size: 1.2rem;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover .mobile-nav-arrow {
  opacity: 1;
  transform: translateX(5px);
}

.mobile-menu-footer {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.mobile-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 20px;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  color: #ffffff;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-action-btn:hover {
  background: linear-gradient(45deg, #81c784, #4fc3f7);
  transform: translateY(-2px);
}

.mobile-action-btn svg {
  width: 18px;
  height: 18px;
}

.mobile-theme-language {
  display: flex;
  gap: 10px;
}

.mobile-theme-btn,
.mobile-language-btn {
  flex: 1;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-theme-btn:hover,
.mobile-language-btn:hover {
  background: rgba(79, 195, 247, 0.2);
  border-color: rgba(79, 195, 247, 0.3);
}

.mobile-contact {
  color: #ffffff;
  opacity: 0.8;
  font-size: 0.9rem;
  line-height: 1.6;
}

.mobile-contact p {
  margin: 5px 0;
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 998;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Scroll Progress */
.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #4fc3f7, #81c784);
  transition: width 0.1s ease;
  z-index: 10;
}

/* Animations */
@keyframes logoPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes logoRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 15px 30px;
  }
  
  .desktop-menu {
    gap: 4px;
  }
  
  .nav-link {
    padding: 10px 16px;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 15px 20px;
  }
  
  .desktop-menu {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .action-btn:not(.mobile-menu-toggle) {
    display: none;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 12px 15px;
  }
  
  .mobile-menu {
    max-width: 100%;
  }
  
  .mobile-menu-content {
    padding: 70px 20px 20px;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
}
</style>