// ========== CONFIG ==========
const WHATSAPP_NUMBER = '573000000000'
const WHATSAPP_MESSAGE = 'Hola, quiero activar NotificadorQR en mi negocio'

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    })
})

// ========== FADE IN ON SCROLL ==========
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    })
}, { threshold: 0.1 })

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
