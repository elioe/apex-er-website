'use strict';
const button = document.querySelector('#language');
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en][data-es]').forEach(element => {
    element.innerHTML = element.dataset[lang];
  });
  button.textContent = lang === 'en' ? 'ES' : 'EN';
  button.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
  document.title = lang === 'en' ? 'Apex ER Consulting — Technology that moves you forward' : 'Apex ER Consulting — Tecnología para avanzar';
  document.querySelector('meta[name="description"]').content = lang === 'en' ? 'IT consulting for growing businesses: automation, cloud, SaaS implementation and technology advisory.' : 'Consultoría IT para empresas en crecimiento: automatización, cloud, implementación SaaS y asesoría tecnológica.';
  try { localStorage.setItem('apex-language', lang); } catch (_) {}
}
button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'es' : 'en'));
let saved = 'en';
try { saved = localStorage.getItem('apex-language') || 'en'; } catch (_) {}
setLanguage(saved === 'es' ? 'es' : 'en');
document.querySelector('#year').textContent = new Date().getFullYear();
