document.addEventListener('DOMContentLoaded', function() {
    // Enhanced Intro Animation Controller with MUCH FASTER animations
    class IntroAnimation {
        constructor() {
            this.overlay = document.getElementById('intro-overlay');
            this.letterItems = document.querySelectorAll('.letter-item');
            this.cursor = document.getElementById('cursor');
            this.mainContent = document.getElementById('main-content');
            this.currentLetterIndex = 0;
            this.morphDelay = 300; // Much faster morphing
            this.totalAnimationTime = 3000; // Reduced total time
        }

        async start() {
            // Add matrix rain to intro
            this.createIntroMatrixRain();
            

    // Certification Tabs controller
    class CertificationTabs {
        constructor() {
            this.tabs = document.querySelectorAll('.cert-tab');
            this.contents = document.querySelectorAll('.cert-content');
            this.commandEl = document.getElementById('cert-command');
            this.typingTimer = null;
            this.init();
        }

        init() {
            this.tabs.forEach(tab => tab.addEventListener('click', () => this.switchTab(tab)));
        }

        switchTab(tab) {
            const category = tab.dataset.category;
            const command = tab.dataset.command || '';

            // toggle active on tabs
            this.tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // show content
            this.contents.forEach(c => c.classList.toggle('active', c.dataset.category === category));

            // update command with simple type effect
            if (this.commandEl) this.typeCommand(command);
        }

        typeCommand(text) {
            if (!this.commandEl) return;
            clearInterval(this.typingTimer);
            const el = this.commandEl;
            el.textContent = '';
            let i = 0;
            this.typingTimer = setInterval(() => {
                if (i >= text.length) { clearInterval(this.typingTimer); return; }
                el.textContent += text[i++];
            }, 20);
        }
    }

    // instantiate tabs if cert tabs present
    setTimeout(() => { try { if (document.querySelectorAll('.cert-tab').length) new CertificationTabs(); } catch(e){} }, 500);
            // Wait for initial display
            await this.delay(400);
            
            // Show cursor first
            this.cursor.classList.add('show');
            await this.delay(200);
            
            // Start morphing letters one by one with FAST cursor movement
            for (let i = 0; i < this.letterItems.length; i++) {
                await this.moveCursorToLetter(i);
                await this.morphLetter(i);
                await this.delay(this.morphDelay);
            }
            
            // Move cursor to final position quickly
            await this.delay(150);
            
            // Wait a moment to show completed name
            await this.delay(800);
            
            // Move name to top and fade out letters/cursor
            await this.moveNameToTopAndFadeOut();
            
            // Show ASCII art after name is moved/faded
            await this.showAsciiArt();
            
            // Wait a bit more, then fade out quickly
            await this.delay(1200);
            this.fadeOut();
        }

        async moveCursorToLetter(index) {
            return new Promise((resolve) => {
                const letterItem = this.letterItems[index];
                const rect = letterItem.getBoundingClientRect();
                const cursorRect = this.cursor.getBoundingClientRect();
                
                // Calculate movement - much faster
                const deltaX = rect.right - cursorRect.left + 20;
                
                this.cursor.style.transform = `translateX(${deltaX * index}px)`;
                this.cursor.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)'; // Much faster
                
                setTimeout(resolve, 100); // Reduced wait time
            });
        }

        async morphLetter(index) {
            return new Promise((resolve) => {
                const letterItem = this.letterItems[index];
                
                // Add intensive glitch effect
                this.addAdvancedGlitchEffect(letterItem);
                
                // Start morphing faster
                setTimeout(() => {
                    letterItem.classList.add('morphing');
                }, 50);
                
                setTimeout(resolve, 300); // Faster resolve
            });
        }

        addAdvancedGlitchEffect(element) {
            const letter = element.querySelector('.letter');
            const icon = element.querySelector('.icon');
            const originalText = letter.textContent;
            const glitchChars = ['█', '▓', '▒', '░', '▀', '▄', '■', '▪', '▫', '◊', '◦', '▣', '◈'];
            let glitchCount = 0;
            const maxGlitches = 3; // Reduced glitches for speed
            
            // Add RGB split effect
            element.style.textShadow = '2px 0 #ff0000, -2px 0 #00ffff';
            
            const glitchInterval = setInterval(() => {
                if (glitchCount >= maxGlitches) {
                    letter.textContent = originalText;
                    element.style.textShadow = '';
                    clearInterval(glitchInterval);
                    return;
                }
                
                // Random glitch character
                const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
                letter.textContent = randomChar;
                icon.style.opacity = Math.random() > 0.5 ? '0' : '0.5';
                
                // Random position shift
                element.style.transform = `translate(${(Math.random() - 0.5) * 6}px, ${(Math.random() - 0.5) * 6}px)`;
                
                setTimeout(() => {
                    letter.textContent = originalText;
                    element.style.transform = '';
                    icon.style.opacity = '';
                }, 40); // Faster glitch recovery
                
                glitchCount++;
            }, 60); // Faster glitch intervals
        }

        async moveNameToTopAndFadeOut() {
            return new Promise((resolve) => {
                const letterContainer = document.querySelector('.letter-container');
                const cursor = this.cursor;
                
                // Use CSS animation for smooth transition
                letterContainer.style.animation = 'nameToTop 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
                
                // Fade out cursor
                cursor.style.transition = 'opacity 0.6s ease-out';
                cursor.style.opacity = '0';
                
                // After animation, set final state
                setTimeout(() => {
                    letterContainer.style.transform = 'translateY(-200px) scale(0.7)';
                    letterContainer.style.opacity = '0.1';
                    cursor.style.opacity = '0';
                    resolve();
                }, 800);
            });
        }

        async showAsciiArt() {
            return new Promise((resolve) => {
                // Create ASCII art container
                const asciiContainer = document.createElement('div');
                asciiContainer.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-family: 'Courier New', monospace;
                    font-size: 8px;
                    line-height: 8px;
                    color: #00ff41;
                    text-shadow: 0 0 10px #00ff41;
                    white-space: pre-wrap;
                    text-align: center;
                    opacity: 0;
                    z-index: 15;
                    max-width: 95vw;
                    max-height: 95vh;
                    overflow: hidden;
                    transform-origin: center center;
                    will-change: opacity, transform;
                    backface-visibility: hidden;
                    -webkit-font-smoothing: antialiased;
                `;

                // ASCII art stored as string literal - complete image
                const asciiLines = [
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠁⠠⠀⠉⠋⢉⣉⠭⠉⠉⡙⡻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠂⠉⠄⠍⠀⠆⠀⠈⠉⠀⠀⠀⠀⠉⠈⠐⠬⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠠⠄⠁⠂⠉⠩⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⣀⣴⣶⣶⣾⣾⣿⣷⣷⣶⣶⣶⣶⣦⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠇⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡂⠆⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡝⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⠀⠀⠀⣸⠟⠉⠁⠀⠈⠉⠉⠙⠛⢿⣿⣿⣿⣿⣿⠿⠏⠛⠛⠉⠊⠙⠛⠻⣿⡇⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⠀⠀⠀⠃⢠⣤⣤⣴⣶⣤⣄⣀⣀⣱⣿⣧⣽⣇⠀⠀⠀⠀⢀⣀⣀⣀⣀⠀⠈⢿⡀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⠀⠀⣸⢰⣾⠟⠩⠅⠒⠂⠀⠀⠹⣿⣿⣿⣿⣧⠑⠶⠊⠉⠉⠉⠉⢙⠻⢷⠆⠻⣇⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⢀⣿⣿⣯⣄⡤⠄⠀⠠⠀⠀⣠⣼⣿⣿⣿⣿⣿⣦⣠⣀⡀⠀⠀⠀⢄⣀⣀⣤⣿⡀⠀⠀⠀⢺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣷⣶⣿⣾⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣶⣶⣾⣿⣿⣿⣿⣧⠀⠀⣰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⣸⣿⣿⣿⣿⣿⣿⣿⣿⡿⣡⣷⣾⣿⣿⣿⣏⡻⠿⣇⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢰⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⡿⠉⠛⠻⣿⣾⠟⠛⠁⠈⠀⣿⡟⣿⣿⣻⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠈⠀⠀⠀⠀⠀⣠⣶⣿⡌⢿⣼⢿⣷⣝⣿⣿⣿⣿⠇⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠁⠀⠀⠛⠟⢿⣷⡈⢿⣟⢿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢹⣿⣿⣿⣿⣿⣿⠋⠉⠀⠀⠀⢰⣿⠿⠶⠿⣬⡉⢢⠀⠉⢻⡹⣿⣦⣹⣿⣿⣿⣿⢃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡸⣿⣿⣿⣿⣿⡏⠀⠀⠒⠋⣀⣀⣀⣀⣀⣀⣀⢀⣀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⡏⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⣿⠀⢓⣦⣼⣿⣿⣿⣿⡿⣿⣏⢆⣩⣧⣶⣀⣼⣿⣿⣿⣿⣿⣿⢃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⢿⣿⣿⣿⣿⣶⣿⣿⣿⣿⠛⠛⠛⠀⠋⠘⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣎⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣠⣤⣤⣤⣍⡺⣿⣟⣿⣿⣿⣿⣿⡿⠁⢲⠭⠭⠍⣭⣩⢭⠭⠭⠭⠭⠙⠛⣛⣛⣛⡛⢛⣛⣛⠿⠿⢿",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢨⡟⠇⠋⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢡⠀⠘⢣⠀⠱⣄⠀⠄⠀⢀⠆⠠⠄⣠⣾⢧⣿⣾⣶⡈⠀⠹⣿⣦",
                    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠀⠀⢸⣇⠀⠀⠀⠈⠙⠿⢿⠟⠛⢿⠿⢿⣏⠻⣿⣿⣿⡟⢿⣿⣿⠟⣴⣿⡀⠀⢸⠀⠀⣿⡆⡄⠀⠀⠀⠀⣽⣿⠏⠈⢸⠉⠙⠻⠂⠀⠘⡟",
                    "⣿⣿⡿⠿⠿⠿⠋⡉⠀⠀⠀⠀⠀⠀⠀⠘⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠈⠙⠉⣋⣴⣿⣿⣿⠃⡀⠸⠀⢠⡟⣻⡁⠚⠀⠀⣴⣿⠃⠀⢠⢫⣾⡀⠀⠀⠀⠀⢃",
                    "⣍⣠⠀⣖⡶⠒⠈⠀⠀⠀⠀⠀⢀⠀⠀⠀⠘⣿⣿⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣾⣿⣿⣿⠟⠁⠠⠁⠀⢠⢻⢰⡵⣷⠀⠀⠀⣿⡏⡄⠀⠈⠻⠿⣿⡄⠀⠀⠀⠈",
                    "⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠐⡀⠀⢹⣿⣿⣿⣦⣄⡀⠀⠀⠀⠀⠀⣀⡤⣔⣿⣿⣿⣿⣿⡿⣡⠆⠐⠁⠀⣰⣿⡇⠄⢡⠇⠀⠀⢰⣿⣇⡇⠀⠀⠀⠀⠈⢿⣄⠀⠀⠀",
                    "⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠱⣄⠀⢿⣿⣿⣿⣿⣿⣷⣶⣶⣿⣿⣿⣷⣿⣿⣿⣿⡟⠃⠊⠁⠀⠀⠀⢶⣿⣻⣿⡏⠘⠀⠀⠐⢺⣿⣿⠙⢶⡄⡄⠀⠀⠂⢻⣷⡀⠀",
                    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠀⢰⡇⠀⠀⠀⠈⠙⠦⠈⣙⡛⠿⠿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠁⠀⠀⠀⠀⠀⠀⢸⣿⣿⡟⣿⠃⠃⠀⠀⣾⣿⣿⠋⠇⣸⣧⣃⠀⠀⠰⣾⣿⣷⡀",
                    "⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠑⠒⠀⠑⠚⠂⠒⠀⠀⠀⠀⠀⠀⡠⠐⠀⠀⢸⣾⠛⠻⣿⡏⠀⠀⠀⣼⣿⣿⠋⠀⠀⢸⡏⡙⠀⠀⢀⣹⣿⣿⡇",
                    "⠀⠀⠀⠀⠀⠀⢠⠎⠀⠀⠀⣿⣷⣤⣀⡀⠀⠀⠀⠀⠰⠢⢤⣀⡀⢀⣀⠀⠀⣤⣄⠰⡖⢀⣐⠎⠁⠀⠀⢘⣼⡏⠀⠐⣿⠁⠀⠀⠘⣿⣿⡃⠀⠀⠀⣿⡁⠃⠀⠀⠈⣿⣿⣿⣏",
                    "⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⢰⣿⣿⣿⣿⣷⣤⠀⠀⠀⠀⠀⠀⠈⢿⣶⣼⣊⠙⠀⣉⠄⣳⡟⠉⠀⠀⠀⢠⢰⣿⡇⠀⣾⡏⠀⠀⠀⢴⣿⣻⣧⠀⠀⠀⡼⡇⠄⠀⠀⠀⢙⣿⣿⣿",
                    "⠀⠀⠀⡀⠀⣼⣿⠀⠀⠀⢲⣼⣿⣿⣿⣿⣿⣷⡄⢀⡀⠀⠀⠀⠈⠙⣿⣧⠀⣠⣽⣷⡾⠃⠀⠀⠀⠀⠸⣿⠇⠀⠐⣿⡇⠃⠀⠀⣹⣿⣿⣿⠀⠀⠀⠹⣧⠁⠀⠀⠀⠀⠹⣿⣿",
                    "⠀⣠⣾⠁⣰⣾⡿⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡀⠀⠀⠀⠀⠘⠃⠀⣍⣻⡿⠁⠀⠀⠀⠀⠀⢐⡟⠀⠈⣾⣿⡁⠀⠀⠀⢰⣿⣿⣿⣀⠀⠀⠀⢹⡄⠀⠀⠀⠀⠀⠹⣿",
                    "",
                    "    ╔═══════════════════════════════════════════╗",
                    "    ║  [ ANJAI S - CYBERSECURITY ENTHUSIAST ] ║",
                    "    ╚═══════════════════════════════════════════╝"
                ];

                asciiContainer.textContent = asciiLines.join('\n');
                this.overlay.appendChild(asciiContainer);

                // Add enhanced glow animation keyframes
                this.addAsciiStyles();

                // Use a simple, smooth animation with hardware acceleration
                setTimeout(() => {
                    asciiContainer.style.animation = 'asciiSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
                }, 50);

                // Add subtle pulse after entrance
                setTimeout(() => {
                    asciiContainer.style.animation = 'asciiSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards, asciiPulse 4s ease-in-out infinite';
                }, 850);

                setTimeout(resolve, 1200);
            });
        }

        addAsciiStyles() {
            if (!document.querySelector('#ascii-glow-styles')) {
                const style = document.createElement('style');
                style.id = 'ascii-glow-styles';
                style.textContent = `
                    @keyframes asciiSlideIn {
                        0% { 
                            opacity: 0; 
                            transform: translate(-50%, -50%) scale(0.8);
                            filter: blur(2px);
                        }
                        100% { 
                            opacity: 1; 
                            transform: translate(-50%, -50%) scale(1);
                            filter: blur(0px);
                        }
                    }
                    
                    @keyframes asciiPulse {
                        0%, 100% { 
                            text-shadow: 0 0 10px #00ff41;
                        }
                        50% { 
                            text-shadow: 0 0 15px #00ff41, 0 0 25px #00ff41;
                        }
                    }
                    
                    @keyframes asciiGlow {
                        0% { 
                            opacity: 0; 
                            transform: translate(-50%, -50%) scale(0.9); 
                        }
                        100% { 
                            opacity: 1; 
                            transform: translate(-50%, -50%) scale(1); 
                        }
                    }
                    
                    @keyframes nameToTop {
                        0% {
                            transform: translateY(0) scale(1);
                            opacity: 1;
                        }
                        100% {
                            transform: translateY(-200px) scale(0.7);
                            opacity: 0.2;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        }

        createIntroMatrixRain() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                opacity: 0.15;
                z-index: 1;
            `;
            
            this.overlay.appendChild(canvas);
            
            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            
            const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";
            const matrixArray = matrix.split("");
            const fontSize = 16;
            const columns = canvas.width / fontSize;
            const drops = [];
            
            for (let x = 0; x < columns; x++) {
                drops[x] = Math.random() * -100;
            }
            
            const draw = () => {
                ctx.fillStyle = 'rgba(5, 5, 5, 0.04)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.fillStyle = '#00ff41';
                ctx.font = fontSize + 'px JetBrains Mono';
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#00ff41';
                
                for (let i = 0; i < drops.length; i++) {
                    const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                    
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i] += 1.5; // Faster drop speed
                }
            };
            
            const interval = setInterval(draw, 30); // Faster matrix animation
            
            // Stop after intro
            setTimeout(() => {
                clearInterval(interval);
                canvas.remove();
            }, 4000);
        }

        fadeOut() {
            this.overlay.classList.add('fade-out');
            
            setTimeout(() => {
                this.overlay.style.display = 'none';
                this.mainContent.classList.add('show');
                
                // Start other animations
                this.startMainAnimations();
            }, 300); // Faster fade out
        }

        delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        startMainAnimations() {
            // Initialize all main page animations
            new ParticleSystem();
            new MatrixBackground();
            new Navigation();
            new ScrollAnimations();
            new TerminalEffects();
            new SkillsAnimations();
            new ProjectsAnimations();
            new StatsCounter();
            new GlitchEffects();
            new HolographicEffects();
            new FastCursorFollower(); // Enhanced cursor following
        }
    }

    // MUCH FASTER Particle System
    class ParticleSystem {
        constructor() {
            this.container = document.getElementById('particles-background');
            this.particles = [];
            this.maxParticles = 60; // More particles
            this.init();
        }

        init() {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.container.appendChild(this.canvas);
            
            this.resize();
            window.addEventListener('resize', () => this.resize());
            
            this.createParticles();
            this.animate();
        }

        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        createParticles() {
            for (let i = 0; i < this.maxParticles; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 1.5, // Faster movement
                    speedY: (Math.random() - 0.5) * 1.5,
                    opacity: Math.random() * 0.5 + 0.2,
                    color: `rgba(0, 255, 65, ${Math.random() * 0.5 + 0.2})`
                });
            }
        }

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            this.particles.forEach((particle, index) => {
                // Update position with faster movement
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Wrap around screen
                if (particle.x < 0) particle.x = this.canvas.width;
                if (particle.x > this.canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = this.canvas.height;
                if (particle.y > this.canvas.height) particle.y = 0;
                
                // Draw particle
                this.ctx.globalAlpha = particle.opacity;
                this.ctx.fillStyle = particle.color;
                this.ctx.shadowBlur = 10;
                this.ctx.shadowColor = particle.color;
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Draw connections with better performance
                this.particles.slice(index + 1).forEach((otherParticle) => {
                    const distance = Math.sqrt(
                        Math.pow(particle.x - otherParticle.x, 2) + 
                        Math.pow(particle.y - otherParticle.y, 2)
                    );
                    
                    if (distance < 120) { // Slightly larger connection range
                        this.ctx.globalAlpha = (120 - distance) / 120 * 0.15;
                        this.ctx.strokeStyle = 'rgba(0, 255, 65, 0.2)';
                        this.ctx.lineWidth = 1;
                        this.ctx.beginPath();
                        this.ctx.moveTo(particle.x, particle.y);
                        this.ctx.lineTo(otherParticle.x, otherParticle.y);
                        this.ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(() => this.animate());
        }
    }

    // Enhanced Fast Cursor Follower
    class FastCursorFollower {
        constructor() {
            this.cursor = document.createElement('div');
            this.cursorDot = document.createElement('div');
            this.mouse = { x: 0, y: 0 };
            this.cursorPos = { x: 0, y: 0 };
            this.dotPos = { x: 0, y: 0 };
            this.speed = 0.25; // Much faster following speed
            this.dotSpeed = 0.15; // Faster dot speed
            this.init();
        }

        init() {
            // Main cursor
            this.cursor.style.cssText = `
                position: fixed;
                width: 30px;
                height: 30px;
                background: rgba(0, 255, 65, 0.1);
                border: 2px solid rgba(0, 255, 65, 0.5);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: all 0.05s ease;
                mix-blend-mode: difference;
            `;
            
            // Trailing dot
            this.cursorDot.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: #00ff41;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                box-shadow: 0 0 10px #00ff41;
            `;
            
            document.body.appendChild(this.cursor);
            document.body.appendChild(this.cursorDot);
            
            document.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
            });
            
            document.addEventListener('mousedown', () => {
                this.cursor.style.transform = 'scale(0.8)';
                this.cursor.style.background = 'rgba(0, 255, 65, 0.3)';
            });
            
            document.addEventListener('mouseup', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.background = 'rgba(0, 255, 65, 0.1)';
            });
            
            // Hide default cursor
            document.body.style.cursor = 'none';
            
            this.animate();
        }

        animate() {
            // Much faster cursor following
            this.cursorPos.x += (this.mouse.x - this.cursorPos.x) * this.speed;
            this.cursorPos.y += (this.mouse.y - this.cursorPos.y) * this.speed;
            
            // Faster dot following
            this.dotPos.x += (this.mouse.x - this.dotPos.x) * this.dotSpeed;
            this.dotPos.y += (this.mouse.y - this.dotPos.y) * this.dotSpeed;
            
            this.cursor.style.left = this.cursorPos.x - 15 + 'px';
            this.cursor.style.top = this.cursorPos.y - 15 + 'px';
            
            this.cursorDot.style.left = this.dotPos.x - 4 + 'px';
            this.cursorDot.style.top = this.dotPos.y - 4 + 'px';
            
            requestAnimationFrame(() => this.animate());
        }
    }

    // Matrix Background Effect with better performance
    class MatrixBackground {
        constructor() {
            this.createMatrixCanvas();
        }

        createMatrixCanvas() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                opacity: 0.02;
            `;
            
            document.body.appendChild(canvas);
            
            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            
            const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()|\\[]{}";
            const matrixArray = matrix.split("");
            const fontSize = 12;
            const columns = canvas.width / fontSize;
            const drops = [];
            
            for (let x = 0; x < columns; x++) {
                drops[x] = Math.random() * -100;
            }
            
            const draw = () => {
                ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.fillStyle = '#00ff41';
                ctx.font = fontSize + 'px JetBrains Mono';
                
                for (let i = 0; i < drops.length; i++) {
                    if (Math.random() > 0.98) {
                        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                    }
                    
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i] += 0.8; // Slightly faster
                }
            };
            
            setInterval(draw, 80); // Faster updates
        }
    }

    // Enhanced Navigation with faster transitions
    class Navigation {
        constructor() {
            this.navLinks = document.querySelectorAll('.nav-link');
            this.sections = document.querySelectorAll('section[id]');
            this.init();
        }

        init() {
            // Add click listeners to navigation links
            this.navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const targetId = link.getAttribute('href');
                    if (targetId && targetId.startsWith('#')) {
                        const sectionId = targetId.substring(1);
                        this.smoothScrollToSection(sectionId);
                    }
                });
            });

            this.highlightCurrentSection();
        }

        smoothScrollToSection(sectionId) {
            const targetElement = document.getElementById(sectionId);
            if (!targetElement) {
                console.warn(`Section with id "${sectionId}" not found`);
                return;
            }
            
            const nav = document.querySelector('.nav');
            const navHeight = nav ? nav.offsetHeight : 80;
            const elementTop = targetElement.offsetTop;
            const offsetPosition = elementTop - navHeight - 20;
            
            // Much faster smooth scroll
            window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: 'smooth'
            });
            
            this.addNavigationFeedback(targetElement);
        }

        addNavigationFeedback(element) {
            const originalBoxShadow = element.style.boxShadow;
            element.style.transition = 'box-shadow 0.2s ease-out';
            element.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.4)';
            
            setTimeout(() => {
                element.style.boxShadow = originalBoxShadow;
            }, 1500); // Faster feedback
        }

        highlightCurrentSection() {
            const observerOptions = {
                threshold: 0.3,
                rootMargin: '-100px 0px -50% 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        
                        this.navLinks.forEach(link => {
                            link.classList.remove('active');
                        });
                        
                        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    }
                });
            }, observerOptions);

            this.sections.forEach(section => {
                observer.observe(section);
            });
        }
    }

    // Faster Scroll Animations
    class ScrollAnimations {
        constructor() {
            this.init();
        }

        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        
                        if (entry.target.classList.contains('skill-category')) {
                            this.animateSkillCategory(entry.target);
                        }
                        if (entry.target.classList.contains('project-card')) {
                            this.animateProjectCard(entry.target);
                        }
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            const elements = document.querySelectorAll('.section, .card, .project-card, .skill-category');
            elements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`; // Faster stagger
                observer.observe(element);
            });
        }

        animateSkillCategory(element) {
            const items = element.querySelectorAll('.skill-list li, .skill-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 50); // Faster item animations
            });
        }

        animateProjectCard(element) {
            const techs = element.querySelectorAll('.tech-tag');
            techs.forEach((tech, index) => {
                setTimeout(() => {
                    tech.style.opacity = '1';
                    tech.style.transform = 'scale(1)';
                }, index * 30); // Faster tech tag animations
            });
        }
    }

    // Enhanced Terminal Effects
    class TerminalEffects {
        constructor() {
            this.init();
        }

        init() {
            this.addTypewriterEffects();
            this.addTerminalCursors();
            this.addCodeScrolling();
        }

        addTypewriterEffects() {
            const typewriterElements = document.querySelectorAll('.typewriter');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.dataset.typed) {
                        entry.target.dataset.typed = 'true';
                        this.typeText(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            typewriterElements.forEach(element => {
                observer.observe(element);
            });
        }

        typeText(element) {
            const text = element.textContent;
            element.textContent = '';
            element.style.width = '0';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    element.style.width = 'auto';
                    i++;
                } else {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                    }, 1000);
                }
            }, 50); // Faster typing
        }

        addTerminalCursors() {
            const terminalLines = document.querySelectorAll('.terminal-line');
            terminalLines.forEach((line, index) => {
                setTimeout(() => {
                    const cursor = document.createElement('span');
                    cursor.textContent = '▋';
                    cursor.style.cssText = `
                        animation: blink 0.8s infinite;
                        margin-left: 2px;
                        color: var(--cyber-neon-green);
                    `;
                    line.appendChild(cursor);
                }, Math.random() * 500 + 200); // Faster cursor appearance
            });
        }

        addCodeScrolling() {
            const codeBackgrounds = document.querySelectorAll('.code-background');
            const codeSnippets = [
                'function learnCybersecurity() {\n  while(learning) {\n    practice();\n    experiment();\n    grow();\n  }\n}',
                'import sys\nfrom learning import *\ntarget = "cybersecurity"\npayload = "hands_on_practice"\nlearn(target, payload)',
                'nmap -sS learning.local\ngobuster dir -u http://learn.local -w /basic/wordlists/common.txt',
                '# Learning approach\nsudo apt update\nsudo apt install learning-tools\npractice --hands-on --experimental'
            ];
            
            codeBackgrounds.forEach(bg => {
                const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                bg.textContent = snippet.repeat(15);
            });
        }
    }

    // Enhanced Skills Animations with faster progress bars
    class SkillsAnimations {
        constructor() {
            this.init();
        }

        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBars = entry.target.querySelectorAll('.progress-fill');
                        const progressMinis = entry.target.querySelectorAll('.progress-fill-mini');
                        
                        progressBars.forEach((bar, index) => {
                            setTimeout(() => {
                                const width = bar.dataset.width || 75;
                                bar.style.width = width + '%';
                            }, index * 100); // Faster stagger
                        });
                        
                        progressMinis.forEach((bar, index) => {
                            setTimeout(() => {
                                const width = bar.dataset.width || 75;
                                bar.style.width = width + '%';
                            }, index * 100);
                        });
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.skill-category, .stat-item').forEach(category => {
                observer.observe(category);
            });
        }
    }

    // Enhanced Projects Animations
    class ProjectsAnimations {
        constructor() {
            this.init();
        }

        init() {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    this.addHoverEffects(card);
                });
                
                card.addEventListener('mouseleave', () => {
                    this.removeHoverEffects(card);
                });
            });
        }

        addHoverEffects(card) {
            const title = card.querySelector('.project-title');
            if (title && Math.random() > 0.7) {
                this.glitchText(title);
            }
            
            card.style.transform = 'translateY(-8px) rotateX(2deg)';
        }

        removeHoverEffects(card) {
            card.style.transform = '';
        }

        glitchText(element) {
            const originalText = element.textContent;
            const glitchChars = ['█', '▓', '▒', '░', '▀', '▄'];
            let glitchCount = 0;
            
            const glitchInterval = setInterval(() => {
                if (glitchCount >= 2) { // Faster glitch
                    element.textContent = originalText;
                    clearInterval(glitchInterval);
                    return;
                }
                
                const randomIndex = Math.floor(Math.random() * originalText.length);
                const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
                
                const glitchedText = originalText.substring(0, randomIndex) + 
                                   randomChar + 
                                   originalText.substring(randomIndex + 1);
                
                element.textContent = glitchedText;
                element.style.color = Math.random() > 0.5 ? '#ff0080' : '#00d4ff';
                
                setTimeout(() => {
                    element.textContent = originalText;
                    element.style.color = '';
                }, 30); // Faster recovery
                
                glitchCount++;
            }, 60);
        }
    }

    // Stats Counter Animation with data-suffix support
    class StatsCounter {
        constructor() {
            this.stats = document.querySelectorAll('.stat-value, .counter');
            this.init();
        }

        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.dataset.animated) {
                        entry.target.dataset.animated = 'true';
                        
                        if (entry.target.classList.contains('counter')) {
                            const target = parseInt(entry.target.dataset.target);
                            const suffix = entry.target.dataset.suffix || '';
                            if (!isNaN(target)) {
                                this.animateCounter(entry.target, target, suffix);
                            }
                        } else {
                            this.animateStatValue(entry.target);
                        }
                    }
                });
            }, { threshold: 0.5 });

            this.stats.forEach(stat => {
                observer.observe(stat);
            });
        }

        animateCounter(element, finalValue, suffix = '') {
            const duration = 1500; // Faster counting
            const startTime = Date.now();
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                
                const currentValue = Math.floor(finalValue * easeOutQuart);
                element.textContent = currentValue.toLocaleString() + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    // Ensure final value is set
                    element.textContent = finalValue.toLocaleString() + suffix;
                }
            };
            
            animate();
        }

        animateStatValue(element) {
            const finalValue = element.textContent;
            
            if (finalValue.includes('Top')) {
                this.animatePercentage(element, finalValue);
            } else if (finalValue.includes(',')) {
                this.animateNumber(element, parseInt(finalValue.replace(/,/g, '')));
            } else if (finalValue.includes('days')) {
                this.animateNumber(element, parseInt(finalValue), ' days');
            } else {
                const numericValue = parseInt(finalValue);
                if (!isNaN(numericValue)) {
                    this.animateNumber(element, numericValue);
                }
            }
        }

        animatePercentage(element, finalValue) {
            const percentage = parseInt(finalValue.match(/\d+/)[0]);
            const duration = 1500;
            const startTime = Date.now();
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                
                const currentValue = Math.floor(percentage * easeOutQuart);
                element.textContent = `Top ${currentValue}%`;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            animate();
        }

        animateNumber(element, finalValue, suffix = '') {
            const duration = 1500;
            const startTime = Date.now();
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                
                const currentValue = Math.floor(finalValue * easeOutQuart);
                element.textContent = currentValue.toLocaleString() + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            animate();
        }
    }

    // Enhanced Glitch Effects
    class GlitchEffects {
        constructor() {
            this.init();
        }

        init() {
            const glitchElements = document.querySelectorAll('.glitch-hover');
            
            glitchElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    this.triggerGlitch(element);
                });
            });
        }

        triggerGlitch(element) {
            const originalColor = element.style.color;
            const colors = ['#ff0080', '#00d4ff', '#bf00ff', '#00ff41'];
            
            let glitchCount = 0;
            const glitchInterval = setInterval(() => {
                if (glitchCount >= 2) { // Faster glitch
                    element.style.color = originalColor;
                    element.style.textShadow = '';
                    clearInterval(glitchInterval);
                    return;
                }
                
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                element.style.color = randomColor;
                element.style.textShadow = `2px 0 ${randomColor}, -2px 0 ${randomColor}`;
                
                setTimeout(() => {
                    element.style.color = originalColor;
                    element.style.textShadow = '';
                }, 30);
                
                glitchCount++;
            }, 60);
        }
    }

    // Enhanced Holographic Effects with faster response
    class HolographicEffects {
        constructor() {
            this.init();
        }

        init() {
            const holographicCards = document.querySelectorAll('.holographic-card');
            
            holographicCards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    this.updateHolographicEffect(card, e);
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = '';
                    card.style.background = '';
                });
            });
        }

        updateHolographicEffect(card, event) {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -8; // Slightly more dramatic
            const rotateY = (x - centerX) / centerX * 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            
            const hue = (x / rect.width) * 60 + 120;
            const lightness = 5 + (y / rect.height) * 10;
            card.style.background = `
                linear-gradient(135deg, 
                    hsla(${hue}, 100%, ${lightness}%, 0.1), 
                    rgba(0, 255, 65, 0.05)
                ),
                rgba(17, 17, 17, 0.9)
            `;
        }
    }

    // Updated Console Easter Egg
    class ConsoleEasterEgg {
        constructor() {
            this.init();
        }

        init() {
            console.log('%c      ██████╗██╗   ██╗██████╗ ███████╗██████╗ ███████╗███████╗ ██████╗', 'color: #00ff41; font-family: monospace; font-size: 12px;');
            console.log('%c     ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝', 'color: #00ff41; font-family: monospace; font-size: 12px;');
            console.log('%c     ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝███████╗█████╗  ██║     ', 'color: #00ff41; font-family: monospace; font-size: 12px;');
            console.log('%c     ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗╚════██║██╔══╝  ██║     ', 'color: #00ff41; font-family: monospace; font-size: 12px;');
            console.log('%c     ╚██████╗   ██║   ██████╔╝███████╗██║  ██║███████║███████╗╚██████╗', 'color: #00ff41; font-family: monospace; font-size: 12px;');
            console.log('%c      ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝', 'color: #00ff41; font-family: monospace; font-size: 12px;');
            console.log('%c', '');
            console.log('%c🎯 Welcome to Anjai\'s Cybersecurity Learning Journey! 🎯', 'color: #00ff41; font-size: 16px; font-family: monospace; font-weight: bold;');
            console.log('%c⚡ UPDATED: Humble learning approach with accurate skill descriptions! ⚡', 'color: #00d4ff; font-family: monospace;');
            console.log('%c📊 CORRECTED: Programming skills reflect basic level, no web dev claims', 'color: #00d4ff; font-family: monospace;');
            console.log('%c🎯 REFRAMED: TryHackMe achievements show learning progress, not expertise', 'color: #00d4ff; font-family: monospace;');
            console.log('%c────────────────────────────────────────────────────────', 'color: #333; font-family: monospace;');
            console.log('%cAvailable Commands:', 'color: #00d4ff; font-family: monospace; font-weight: bold;');
            console.log('%c  anjai.contact()     - Get contact information', 'color: #888; font-family: monospace;');
            console.log('%c  anjai.skills()      - List learning journey skills', 'color: #888; font-family: monospace;');
            console.log('%c  anjai.stats()       - Show TryHackMe learning progress', 'color: #888; font-family: monospace;');
            console.log('%c  anjai.projects()    - List experimental projects', 'color: #888; font-family: monospace;');
            console.log('%c  anjai.certifications() - Show learning goals', 'color: #888; font-family: monospace;');
            console.log('%c  anjai.hack()        - Try to hack (spoiler: still learning) 😉', 'color: #888; font-family: monospace;');
            console.log('%c────────────────────────────────────────────────────────', 'color: #333; font-family: monospace;');
            
            window.anjai = {
                contact: () => {
                    console.log('%c📧 Email: anjai0600@gmail.com', 'color: #00ff41; font-family: monospace;');
                    console.log('%c🔗 LinkedIn: linkedin.com/in/anjai-s', 'color: #00ff41; font-family: monospace;');
                    console.log('%c💻 GitHub: github.com/Anjai7', 'color: #00ff41; font-family: monospace;');
                    console.log('%c🎯 TryHackMe: tryhackme.com/p/AnjaiS', 'color: #00ff41; font-family: monospace;');
                },
                skills: () => {
                    console.log('%c🔐 Cybersecurity Learning: Basic Linux admin, intro web security, network recon basics', 'color: #00ff41; font-family: monospace;');
                    console.log('%c💻 Programming: Python (basic scripting), C (fundamental concepts), Bash (basic automation)', 'color: #00ff41; font-family: monospace;');
                    console.log('%c🌐 Networking: Basic UDP/TCP understanding, P2P concepts through experimentation', 'color: #00ff41; font-family: monospace;');
                    console.log('%c🤖 AI & CV: OpenCV basics, YOLO integration (hands-on learning), Raspberry Pi setup', 'color: #00ff41; font-family: monospace;');
                },
                stats: () => {
                    console.log('%c🎯 TryHackMe Global Rank: Top 4% (learning dedication!)', 'color: #00ff41; font-family: monospace;');
                    console.log('%c⚡ Total Points: 62,422 (from completed learning rooms)', 'color: #00ff41; font-family: monospace;');
                    console.log('%c🏆 Badges Earned: 21 (learning milestones)', 'color: #00ff41; font-family: monospace;');
                    console.log('%c🔥 Current Streak: 52 days (consistent learning!)', 'color: #00ff41; font-family: monospace;');
                    console.log('%c📚 Rooms Completed: 103 (hands-on practice)', 'color: #00ff41; font-family: monospace;');
                    console.log('%c🎖️ Handle: AnjaiS | [0x9][MAGE]', 'color: #00ff41; font-family: monospace;');
                },
                projects: () => {
                    console.log('%c🚀 AFTP: UDP file transfer protocol (experimental/vibe coding approach)', 'color: #00ff41; font-family: monospace;');
                    console.log('%c🔐 Anonymous P2P Chat: WebRTC experimentation and learning', 'color: #00ff41; font-family: monospace;');
                    console.log('%c👁️ Blind Assistant: AI learning project with mentor guidance', 'color: #00ff41; font-family: monospace;');
                    console.log('%c💼 Employee Dashboard: Learning web development through practice', 'color: #00ff41; font-family: monospace;');
                    console.log('%c📝 CTF Write-ups: Documenting learning journey and problem-solving', 'color: #00ff41; font-family: monospace;');
                },
                certifications: () => {
                    console.log('%c✅ Completed: TryHackMe Pathways, Google IT Support', 'color: #00ff41; font-family: monospace;');
                    console.log('%c🎯 LEARNING GOAL: eJPT - Structured penetration testing fundamentals', 'color: #00d4ff; font-family: monospace;');
                    console.log('%c🛡️ LEARNING GOAL: CEH - Broad ethical hacking knowledge development', 'color: #00d4ff; font-family: monospace;');
                    console.log('%c📚 Focus: Formalizing learning through practical certifications', 'color: #66ff66; font-family: monospace;');
                },
                hack: () => {
                    console.log('%c🚨 LEARNING DETECTED! 🚨', 'color: #ff4444; font-family: monospace; font-weight: bold;');
                    console.log('%c[SYSTEM] Student mode active... still learning!', 'color: #ff8800; font-family: monospace;');
                    console.log('%c[SYSTEM] Tracing hands-on experiments...', 'color: #ff8800; font-family: monospace;');
                    setTimeout(() => {
                        console.log('%c[SYSTEM] Just kidding! But I am passionate about learning! 😄', 'color: #00ff41; font-family: monospace;');
                        console.log('%cFor learning opportunities and collaboration, contact me!', 'color: #00ff41; font-family: monospace;');
                    }, 1500);
                },
                journey: () => {
                    console.log('%cWelcome to my learning journey!', 'color: #00ff41; font-family: monospace;');
                    console.log('%cEvery expert was once a beginner. Every pro was once an amateur. 🌱', 'color: #00ff41; font-family: monospace;');
                }
            };
        }
    }

    // Enhanced Performance Monitor
    class PerformanceMonitor {
        constructor() {
            this.startTime = performance.now();
            this.init();
        }

        init() {
            window.addEventListener('load', () => {
                const loadTime = performance.now() - this.startTime;
                console.log(`%c⚡ UPDATED Portfolio initialized in ${loadTime.toFixed(2)}ms`, 'color: #00ff41; font-family: monospace; font-weight: bold;');
                console.log(`%c🔧 ${document.querySelectorAll('*').length} DOM elements rendered`, 'color: #66ff66; font-family: monospace;');
                console.log(`%c🎨 Cyberpunk effects with humble, accurate content loaded`, 'color: #66ff66; font-family: monospace;');
                console.log(`%c🚀 Custom cursor with enhanced following enabled`, 'color: #66ff66; font-family: monospace;');
                console.log(`%c📊 Learning journey stats display with corrected descriptions`, 'color: #66ff66; font-family: monospace;');
                console.log(`%c✅ Content updated: Humble approach, accurate skills, learning focus`, 'color: #66ff66; font-family: monospace;');
            });

            let scrollTicking = false;
            window.addEventListener('scroll', () => {
                if (!scrollTicking) {
                    requestAnimationFrame(() => {
                        this.updateScrollProgress();
                        scrollTicking = false;
                    });
                    scrollTicking = true;
                }
            });
        }

        updateScrollProgress() {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
        }
    }

    // Initialize everything with enhanced features
    function initializePortfolio() {
        const introAnimation = new IntroAnimation();
        introAnimation.start();
        
        new ConsoleEasterEgg();
        new PerformanceMonitor();
        
        // Enhanced keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !document.getElementById('intro-overlay').classList.contains('fade-out')) {
                introAnimation.fadeOut();
            }
            
            if (e.code === 'Space' && e.ctrlKey) {
                e.preventDefault();
                document.body.style.animationPlayState = 
                    document.body.style.animationPlayState === 'paused' ? 'running' : 'paused';
                console.log('%cAnimations ' + (document.body.style.animationPlayState === 'paused' ? 'paused' : 'resumed'), 'color: #00ff41; font-family: monospace;');
            }
        });
        
        // Enhanced scroll progress indicator
        const scrollIndicator = document.createElement('div');
        scrollIndicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #00ff41, #00d4ff, #bf00ff);
            z-index: 10001;
            transition: width 0.05s ease;
            box-shadow: 0 0 10px currentColor;
        `;
        document.body.appendChild(scrollIndicator);
        
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollIndicator.style.width = Math.max(0, Math.min(100, scrollPercent)) + '%';
        });
    }

    // Start the updated cybersecurity learning portfolio
    initializePortfolio();
});
