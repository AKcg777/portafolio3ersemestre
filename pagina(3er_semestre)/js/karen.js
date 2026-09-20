// Lineas de codigo C++ a escribir (con sangria limpia)
const codeLines = [
  '<span class="token-keyword">class</span> <span class="token-class">Estudiante</span> {',
  '<span class="token-keyword">public:</span>',
  '  string nombre = <span class="token-string">"Ana Karen"</span>;',
  '  string carrera = <span class="token-string">"Ing. Sistemas"</span>;',
  '  string enfoque = <span class="token-string">"Backend & POO"</span>;',
  '  ',
  '  <span class="token-keyword">void</span> <span class="token-function">metaActual</span>() {',
  '    cout &lt;&lt; <span class="token-string">"Dominar Estructuras"</span>;',
  '  }',
  '};'
];

let lineIndex = 0;
let currentHTML = '';
let hasTyped = false; // Evita que se repita la animacion varias veces

function typeCode() {
  const targetEl = document.getElementById('code-target');
  
  if (targetEl && lineIndex < codeLines.length) {
    // Forzamos al contenedor a adaptar el texto y ocultar cualquier scrollbar
    targetEl.style.whiteSpace = 'pre-wrap';
    targetEl.style.wordBreak = 'break-word';
    
    if (lineIndex > 0) {
      currentHTML += '\n';
    }

    currentHTML += codeLines[lineIndex];
    targetEl.innerHTML = currentHTML;

    lineIndex++;
    setTimeout(typeCode, 180);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Detección de Scroll con IntersectionObserver
  const aboutSection = document.getElementById('sobre-mi');

  if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Se activa cuando el usuario hace scroll y la seccion es visible
        if (entry.isIntersecting && !hasTyped) {
          hasTyped = true;
          setTimeout(typeCode, 300); // Pequeña pausa antes de escribir
        }
      });
    }, { threshold: 0.3 }); // Requiere que al menos el 30% de la seccion sea visible

    observer.observe(aboutSection);
  }

  // 2. Smooth Scroll para la navegacion del menú
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});