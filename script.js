// ========== CONFIG ==========
const CONFIG = {
    appName: 'NotificacionesQR',
    whatsappNumber: '573003060003',
    whatsappMessage: 'Hola, quiero activar NotificacionesQR en mi negocio'
}

// Apply config to all WhatsApp links
const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.href = waUrl
})

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
