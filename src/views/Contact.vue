<template>
  <section class="contact">
    <!-- Animated Background -->
    <div class="bg-elements">
      <div class="floating-elements">
        <div class="floating-element" v-for="i in 8" :key="i" :style="{ '--delay': i * 0.5 + 's' }">
          {{ contactIcons[i % contactIcons.length] }}
        </div>
      </div>
      <div class="geometric-shapes">
        <div class="shape circle-1"></div>
        <div class="shape circle-2"></div>
        <div class="shape triangle"></div>
        <div class="shape square"></div>
      </div>
    </div>

    <div class="contact-container">
      <!-- Header Section -->
      <div class="header-section">
        <span class="section-badge">Get In Touch</span>
        <h2 class="title">Contact Me</h2>
        <p class="subtitle">Let's discuss your next project and bring your ideas to life</p>
      </div>

      <!-- Main Content Grid -->
      <div class="contact-grid">
        <!-- Contact Info Cards -->
        <div class="contact-info">
          <div class="info-card location-card" @click="expandCard('location')">
            <div class="card-icon">📍</div>
            <div class="card-content">
              <h3>Location</h3>
              <p>371, Sensok, Phnom Penh</p>
              <span class="card-action">View on Map</span>
            </div>
          </div>

          <div class="info-card email-card" @click="expandCard('email')">
            <div class="card-icon">📧</div>
            <div class="card-content">
              <h3>Email</h3>
              <p>neaksina752@email.com</p>
              <span class="card-action">Send Email</span>
            </div>
          </div>

          <div class="info-card phone-card" @click="expandCard('phone')">
            <div class="card-icon">📱</div>
            <div class="card-content">
              <h3>Phone</h3>
              <p>+855 969780938</p>
              <span class="card-action">Call Now</span>
            </div>
          </div>

          <div class="info-card social-card" @click="expandCard('social')">
            <div class="card-icon">🌐</div>
            <div class="card-content">
              <h3>Social Media</h3>
              <p>Follow my journey</p>
              <span class="card-action">Connect</span>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-section">
          <div class="form-container">
            <div class="form-header">
              <h3>Send me a message</h3>
              <p>I'll get back to you within 24 hours</p>
            </div>

            <form @submit.prevent="send" class="contact-form">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  id="name"
                  v-model="form.name" 
                  placeholder="Enter your full name" 
                  required 
                  :class="{ 'error': errors.name }"
                />
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  id="email"
                  v-model="form.email" 
                  placeholder="Enter your email address" 
                  type="email" 
                  required 
                  :class="{ 'error': errors.email }"
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Select a subject</option>
                  <option value="project">New Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message"
                  v-model="form.message" 
                  placeholder="Tell me about your project or how I can help you..."
                  required 
                  rows="5"
                  :class="{ 'error': errors.message }"
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 2L11 13"/>
                    <polygon points="22,2 15,22 11,13 2,9"/>
                  </svg>
                  Send Message
                </span>
                <span v-else class="loading">
                  <div class="spinner"></div>
                  Sending...
                </span>
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="sent" class="success-message">
              <div class="success-icon">✅</div>
              <h4>Message Sent Successfully!</h4>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Contact Actions -->
      <div class="quick-actions">
        <h3>Quick Actions</h3>
        <div class="actions-grid">
          <a href="mailto:sina.neak@email.com" class="action-btn email-action">
            <div class="action-icon">📧</div>
            <span>Email Me</span>
          </a>
          <a href="tel:+85512345678" class="action-btn phone-action">
            <div class="action-icon">📱</div>
            <span>Call Me</span>
          </a>
           
          <a href="#" class="action-btn calendar-action">
            <div class="action-icon">📅</div>
            <span>Schedule Call</span>
          </a>
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

        <!-- Location Modal -->
        <div v-if="expandedCard === 'location'" class="modal-section">
          <div class="modal-header">
            <div class="modal-icon">📍</div>
            <h2>My Location</h2>
          </div>
          <div class="modal-body">
            <div class="location-details">
              <div class="address-info">
                <h3>Address</h3>
                <p class="address">371, Sensok, Phnom Penh, Cambodia</p>
                <div class="location-features">
                  <div class="feature">
                    <span class="feature-icon">🏢</span>
                    <span>Home Office</span>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">🕒</span>
                    <span>Available Mon-Fri, 9AM-6PM</span>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">🌏</span>
                    <span>GMT+7 Timezone</span>
                  </div>
                </div>
              </div>
              <div class="map-placeholder">
                <div class="map-content">
                  <h4>Interactive Map</h4>
                  <p>Click to view on Google Maps</p>
                  <button class="map-btn">Open in Maps</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Email Modal -->
        <div v-if="expandedCard === 'email'" class="modal-section">
          <div class="modal-header">
            <div class="modal-icon">📧</div>
            <h2>Email Contact</h2>
          </div>
          <div class="modal-body">
            <div class="email-details">
              <div class="email-info">
                <h3>Primary Email</h3>
                <p class="email-address">neaksina752@gmail.com</p>
                <div class="email-features">
                  <div class="feature">
                    <span class="feature-icon">⚡</span>
                    <span>Quick Response (within 24 hours)</span>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">🔒</span>
                    <span>Secure & Professional</span>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">📎</span>
                    <span>File Attachments Welcome</span>
                  </div>
                </div>
                <div class="email-actions">
                  <a href="mailto:sina.neak@email.com" class="email-btn primary">
                    Send Email Now
                  </a>
                  <button @click="copyEmail" class="email-btn secondary">
                    Copy Email Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phone Modal -->
        <div v-if="expandedCard === 'phone'" class="modal-section">
          <div class="modal-header">
            <div class="modal-icon">📱</div>
            <h2>Phone Contact</h2>
          </div>
          <div class="modal-body">
            <div class="phone-details">
              <div class="phone-info">
                <h3>Phone Number</h3>
                <p class="phone-number">+855 969780938</p>
                <div class="phone-features">
                  <div class="feature">
                    <span class="feature-icon">📞</span>
                    <span>Voice Calls Available</span>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">💬</span>
                    <span>WhatsApp & Telegram</span>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">🕒</span>
                    <span>Best time: 9AM - 6PM (GMT+7)</span>
                  </div>
                </div>
                <div class="phone-actions">
                  <a href="tel:+85512345678" class="phone-btn primary">
                    Call Now
                  </a>
                  <a href="#" class="phone-btn secondary">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Modal -->
        <div v-if="expandedCard === 'social'" class="modal-section">
          <div class="modal-header">
            <div class="modal-icon">🌐</div>
            <h2>Social Media</h2>
          </div>
          <div class="modal-body">
            <div class="social-details">
              <div class="social-grid">
                <a href="#" class="social-item github">
                  <div class="social-icon">🐙</div>
                  <div class="social-info">
                    <h4>GitHub</h4>
                    <p>@neaksina</p>
                  </div>
                </a>
                <a href="#" class="social-item linkedin">
                  <div class="social-icon">💼</div>
                  <div class="social-info">
                    <h4>LinkedIn</h4>
                    <p>Sina Neak</p>
                  </div>
                </a>
                <a href="#" class="social-item twitter">
                  <div class="social-icon">🐦</div>
                  <div class="social-info">
                    <h4>Twitter</h4>
                    <p>@sinaneak</p>
                  </div>
                </a>
                <a href="#" class="social-item instagram">
                  <div class="social-icon">📸</div>
                  <div class="social-info">
                    <h4>Facebook</h4>
                    <p>@នាក់ ស៊ីណា</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = ref({ 
  name: '', 
  email: '', 
  subject: '',
  message: '' 
})

const errors = reactive({})
const sent = ref(false)
const isSubmitting = ref(false)
const expandedCard = ref(null)

const contactIcons = ['📧', '📱', '📍', '💬', '🌐', '📅', '✉️', '📞']

const validateForm = () => {
  const newErrors = {}
  
  if (!form.value.name.trim()) {
    newErrors.name = 'Name is required'
  }
  
  if (!form.value.email.trim()) {
    newErrors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    newErrors.email = 'Please enter a valid email'
  }
  
  if (!form.value.message.trim()) {
    newErrors.message = 'Message is required'
  } else if (form.value.message.trim().length < 10) {
    newErrors.message = 'Message must be at least 10 characters'
  }
  
  Object.assign(errors, newErrors)
  return Object.keys(newErrors).length === 0
}

const send = async () => {
  // Clear previous errors
  Object.keys(errors).forEach(key => delete errors[key])
  
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  // Simulate API call
  setTimeout(() => {
    sent.value = true
    isSubmitting.value = false
    form.value = { name: '', email: '', subject: '', message: '' }
    
    setTimeout(() => {
      sent.value = false
    }, 5000)
  }, 2000)
}

const expandCard = (cardType) => {
  expandedCard.value = cardType
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  expandedCard.value = null
  document.body.style.overflow = 'auto'
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('sina.neak@email.com')
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy email:', err)
  }
}
</script>

<style scoped>
.contact {
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

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  animation: floatElement 20s linear infinite;
  animation-delay: var(--delay);
}

.floating-element:nth-child(1) { top: 10%; left: 10%; }
.floating-element:nth-child(2) { top: 20%; right: 15%; }
.floating-element:nth-child(3) { top: 60%; left: 5%; }
.floating-element:nth-child(4) { top: 80%; right: 20%; }
.floating-element:nth-child(5) { top: 30%; left: 80%; }
.floating-element:nth-child(6) { top: 70%; right: 70%; }
.floating-element:nth-child(7) { top: 15%; left: 50%; }
.floating-element:nth-child(8) { top: 85%; left: 40%; }

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
.contact-container {
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

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 60px;
  margin-bottom: 80px;
}

/* Contact Info */
.contact-info {
  display: grid;
  gap: 20px;
}

.info-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 20px;
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: rgba(79, 195, 247, 0.5);
  background: rgba(79, 195, 247, 0.1);
}

.card-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.card-content {
  flex: 1;
  color: #ffffff;
}

.card-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #4fc3f7;
}

.card-content p {
  margin: 0 0 8px 0;
  opacity: 0.9;
}

.card-action {
  font-size: 0.9rem;
  color: #81c784;
  font-weight: 500;
}

/* Contact Form */
.contact-form-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}

.form-header {
  text-align: center;
  margin-bottom: 30px;
  color: #ffffff;
}

.form-header h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #4fc3f7;
}

.form-header p {
  margin: 0;
  opacity: 0.8;
}

.contact-form {
  display: grid;
  gap: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #ffffff;
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 15px 20px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4fc3f7;
  background: rgba(79, 195, 247, 0.1);
  box-shadow: 0 0 0 3px rgba(79, 195, 247, 0.1);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #f44336;
  background: rgba(244, 67, 54, 0.1);
}

.error-message {
  color: #f44336;
  font-size: 0.8rem;
  margin-top: 5px;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  padding: 18px 30px;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  color: #ffffff;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.submit-btn:hover:not(:disabled) {
  background: linear-gradient(45deg, #81c784, #4fc3f7);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(79, 195, 247, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-btn svg {
  width: 18px;
  height: 18px;
}

.loading {
  display: flex;
  align-items: center;
  gap: 10px;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Success Message */
.success-message {
  background: rgba(129, 199, 132, 0.1);
  border: 1px solid rgba(129, 199, 132, 0.3);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.success-message h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #81c784;
}

.success-message p {
  margin: 0;
  opacity: 0.9;
}

/* Quick Actions */
.quick-actions {
  text-align: center;
  color: #ffffff;
}

.quick-actions h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 30px 0;
  color: #4fc3f7;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 25px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
}

.action-btn:hover {
  transform: translateY(-5px);
  background: rgba(79, 195, 247, 0.1);
  border-color: rgba(79, 195, 247, 0.3);
}

.action-icon {
  font-size: 1.8rem;
}

.action-btn span {
  font-weight: 600;
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
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
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

.modal-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.modal-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  color: #4fc3f7;
}

.modal-body {
  max-width: 700px;
  margin: 0 auto;
}

/* Location Modal */
.location-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.address-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  color: #81c784;
}

.address {
  font-size: 1.2rem;
  margin: 0 0 25px 0;
  line-height: 1.6;
}

.location-features,
.email-features,
.phone-features {
  display: grid;
  gap: 15px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
}

.feature-icon {
  font-size: 1.2rem;
}

.map-placeholder {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.map-content h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #4fc3f7;
}

.map-content p {
  margin: 0 0 20px 0;
  opacity: 0.8;
}

.map-btn {
  padding: 12px 25px;
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.map-btn:hover {
  background: linear-gradient(45deg, #81c784, #4fc3f7);
  transform: translateY(-2px);
}

/* Email Modal */
.email-details {
  text-align: center;
}

.email-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  color: #81c784;
}

.email-address {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 30px 0;
  color: #4fc3f7;
}

.email-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
}

.email-btn {
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.email-btn.primary {
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  color: #ffffff;
}

.email-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.email-btn:hover {
  transform: translateY(-2px);
}

/* Phone Modal */
.phone-details {
  text-align: center;
}

.phone-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  color: #81c784;
}

.phone-number {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 30px 0;
  color: #4fc3f7;
}

.phone-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
}

.phone-btn {
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.phone-btn.primary {
  background: linear-gradient(45deg, #4fc3f7, #81c784);
  color: #ffffff;
}

.phone-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.phone-btn:hover {
  transform: translateY(-2px);
}

/* Social Modal */
.social-details {
  max-width: 500px;
  margin: 0 auto;
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.social-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease;
}

.social-item:hover {
  background: rgba(79, 195, 247, 0.1);
  border-color: rgba(79, 195, 247, 0.3);
  transform: translateY(-3px);
}

.social-icon {
  font-size: 2rem;
}

.social-info h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #4fc3f7;
}

.social-info p {
  margin: 0;
  opacity: 0.8;
  font-size: 0.9rem;
}

/* Animations */
@keyframes floatElement {
  0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 0.1; }
  90% { opacity: 0.1; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

@keyframes rotateShape {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .location-details {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 40px 15px;
  }
  
  .contact-info {
    gap: 15px;
  }
  
  .info-card {
    padding: 20px;
  }
  
  .contact-form-section {
    padding: 30px 20px;
  }
  
  .actions-grid {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  
  .modal-section {
    padding: 40px 20px 20px;
  }
  
  .email-actions,
  .phone-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .info-card {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
  
  .action-btn {
    justify-content: center;
  }
  
  .modal-content {
    margin: 10px;
  }
  
  .social-grid {
    gap: 15px;
  }
  
  .social-item {
    padding: 15px;
  }
}
</style>