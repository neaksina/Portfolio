<template>
  <section class="home-hero">
    <!-- Animated background elements -->
    <div class="bg-animation">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
    </div>

    <div class="hero-container">
      <div class="hero-text">
        <div class="text-reveal">
          <h1>
            <span class="greeting">Hi, I'm</span>
            <span class="name-container">
              <span class="name">Sina Neak</span>
              <div class="name-underline"></div>
            </span>
          </h1>
        </div>

        <div class="position-container">
          <h2 class="position">
            <span class="typing-text">Web Developer</span>
            <span class="cursor">|</span>
          </h2>
          <div class="position-accent"></div>
        </div>

        <p class="subtitle">
          <span class="highlight">I build fast, scalable, and secure</span>
          full-stack web applications using
          <span class="tech-tag">Vue.js</span>,
          <span class="tech-tag">Next.js</span>,
          <span class="tech-tag">JavaScript</span>,
          <span class="tech-tag">HTML</span>,
          <span class="tech-tag">CSS</span> on the frontend, and
          <span class="tech-tag">PHP/MySQL/Larevel/Python</span> or
          <span class="tech-tag">Node.js</span> on the backend. I also handle
          deployment and hosting for modern web solutions.
        </p>

        <div class="cta-container">
          <router-link to="/projects" class="btn-primary">
            <span class="btn-text">View My Work</span>
            <div class="btn-bg"></div>
            <div class="btn-shine"></div>
          </router-link>

          <div class="social-links">
            <a href="https://www.linkedin.com/in/sina-neak-b5b92a344/" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                />
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <div class="image-container">
          <div class="image-glow"></div>
          <div class="image-frame">
            <img
              src="/public/img/profile.jpg"
              alt="Sina Neak Profile Photo"
            />
          </div>
          <div class="floating-icons">
            <div class="tech-icon icon-1">⚡</div>
            <div class="tech-icon icon-2">🚀</div>
            <div class="tech-icon icon-3">💻</div>
            <div class="tech-icon icon-4">🎨</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <AboutVue />
  <Projects />
  <Skills />
  <Contact />
 
</template>

<script setup>
import { onMounted } from "vue";
import AboutVue from "./About.vue";
import Projects from "./Project.vue";
import Skills from "./Skills.vue";
import Contact from "./Contact.vue";
 

onMounted(() => {
  // Add scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  document.querySelectorAll(".hero-text, .hero-image").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style scoped>
.home-hero {
  position: relative;
  background: linear-gradient(135deg, #394785 0%, #1e2728 100%);
  padding: 100px 20px;
  min-height: 0vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Animated Background */
.bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  top: 80%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 10%;
  right: 30%;
  animation-delay: 1s;
}

.shape-5 {
  width: 40px;
  height: 40px;
  top: 40%;
  left: 60%;
  animation-delay: 3s;
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
  animation: pulse 4s ease-in-out infinite;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(255, 107, 107, 0.3) 0%,
    transparent 70%
  );
  top: -150px;
  right: -150px;
  animation-delay: 0s;
}

.orb-2 {
  width: 250px;
  height: 250px;
  background: radial-gradient(
    circle,
    rgba(78, 205, 196, 0.3) 0%,
    transparent 70%
  );
  bottom: -125px;
  left: -125px;
  animation-delay: 2s;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(255, 195, 113, 0.3) 0%,
    transparent 70%
  );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 1s;
}

/* Hero Container */
.hero-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
  max-width: 1400px;
  margin: 0 auto;
  animation: slideUp 1s ease-out;
}

/* Hero Text */
.hero-text {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hero-text.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.text-reveal h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
  line-height: 1.2;
}

.greeting {
  display: block;
  font-size: 0.6em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.name-container {
  position: relative;
  display: inline-block;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.name {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
  position: relative;
}

.name-underline {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 0;
  height: 4px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 2px;
  animation: expandWidth 1s ease-out 0.8s both;
}

.position-container {
  position: relative;
  margin: 20px 0 30px;
}

.position {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  margin: 0;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.typing-text {
  position: relative;
}

.cursor {
  animation: blink 1s infinite;
  color: #4ecdc4;
}

.position-accent {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 60px;
  height: 2px;
  background: #4ecdc4;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 40px;
  animation: fadeInUp 0.8s ease-out 1s both;
}

.highlight {
  color: #ffffff;
  font-weight: 600;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 500;
  color: #4ecdc4;
  border: 1px solid rgba(78, 205, 196, 0.3);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(78, 205, 196, 0.2);
  transform: translateY(-1px);
}

/* CTA Container */
.cta-container {
  display: flex;
  align-items: center;
  gap: 30px;
  animation: fadeInUp 0.8s ease-out 1.2s both;
}

.btn-primary {
  position: relative;
  padding: 16px 40px;
  background: transparent;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-text {
  position: relative;
  z-index: 3;
}

.btn-bg {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  transition: left 0.3s ease;
  z-index: 1;
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.6s ease;
  z-index: 2;
}

.btn-primary:hover .btn-bg {
  left: 0;
}

.btn-primary:hover .btn-shine {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Social Links */
.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #4ecdc4;
  transform: translateY(-3px);
}

/* Hero Image */
.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
}

.hero-image.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.image-container {
  position: relative;
  width: 350px;
  height: 350px;
}

.image-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.6;
  animation: rotate 8s linear infinite;
}

.image-frame {
  position: relative;
  width: 100%;
  height: 120%;
  border-radius: 50%;
  padding: 8px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 300% 300%;
  animation: gradientShift 3s ease-in-out infinite;
}

.image-frame img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-container:hover img {
  transform: scale(1.05);
}

/* Floating Tech Icons */
.floating-icons {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.tech-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: floatIcon 4s ease-in-out infinite;
}

.icon-1 {
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.icon-2 {
  bottom: 20%;
  right: 0%;
  animation-delay: 1s;
}

.icon-3 {
  top: 20%;
  left: 0%;
  animation-delay: 2s;
}

.icon-4 {
  bottom: 10%;
  left: 15%;
  animation-delay: 3s;
}

/* Animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes expandWidth {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes floatIcon {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  .cta-container {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .home-hero {
    padding: 80px 20px;
  }

  .hero-container {
    gap: 40px;
  }

  .image-container {
    width: 280px;
    height: 280px;
  }

  .cta-container {
    flex-direction: column;
    gap: 20px;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .btn-primary {
    padding: 14px 30px;
    font-size: 1rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
