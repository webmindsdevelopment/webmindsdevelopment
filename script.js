document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('escrita');
    const textContent = textElement.getAttribute('data-text') || ''; // Pega o texto do atributo data-text
    const interval = 100;
    let i = 0;
  
    function typeWriter() {
      if (i < textContent.length) {
        textElement.innerHTML += textContent.charAt(i);
        i++;
        setTimeout(typeWriter, interval);
      }
    }
  
    typeWriter();
  });
  