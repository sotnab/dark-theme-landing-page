const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const email = document.getElementById('email')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
   e.preventDefault()
   if (emailRegex.exec(email.value)) {
      email.classList.remove('newsletter_input--error')
      return
   };

   email.classList.add('newsletter_input--error')
})