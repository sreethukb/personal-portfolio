const typewriter = document.getElementById('typewriter');
        const words = ["I'm Sreethu K Binu."];
        let charIndex = 0;
        let wordIndex = 0;
        let isDeleting = false;
    
        const type = () => {
          const currentWord = words[wordIndex % words.length];
          const fullText = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
          typewriter.innerHTML = fullText;
          charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    
          if (!isDeleting && fullText === currentWord) {
            isDeleting = true;
            setTimeout(type, 1500);
          } else if (isDeleting && fullText === '') {
            isDeleting = false;
            wordIndex++;
            setTimeout(type, 500);
          } else {
            setTimeout(type, isDeleting ? 100 : 200);
          }
        };
    
        type();
    
        // Cleanup function
        return () => {
          clearTimeout();
        };