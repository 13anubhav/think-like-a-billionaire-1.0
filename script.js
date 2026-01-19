
        function copyPrompt(button, promptId) {
            const promptText = document.getElementById(promptId).innerText;
            
            // Fallback copy method for better compatibility
            const textArea = document.createElement('textarea');
            textArea.value = promptText;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                
                if (successful) {
                    // Change button state
                    button.classList.add('copied');
                    button.innerHTML = '✅ Copied!';
                    
                    // Show toast notification
                    const toast = document.getElementById('toast');
                    toast.classList.add('show');
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        button.classList.remove('copied');
                        button.innerHTML = '📋 Copy';
                    }, 2000);
                    
                    // Hide toast after 3 seconds
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 3000);
                } else {
                    throw new Error('Copy command failed');
                }
            } catch (err) {
                document.body.removeChild(textArea);
                
                // Try modern Clipboard API as fallback
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(promptText).then(() => {
                        // Change button state
                        button.classList.add('copied');
                        button.innerHTML = '✅ Copied!';
                        
                        // Show toast notification
                        const toast = document.getElementById('toast');
                        toast.classList.add('show');
                        
                        // Reset button after 2 seconds
                        setTimeout(() => {
                            button.classList.remove('copied');
                            button.innerHTML = '📋 Copy';
                        }, 2000);
                        
                        // Hide toast after 3 seconds
                        setTimeout(() => {
                            toast.classList.remove('show');
                        }, 3000);
                    }).catch(() => {
                        alert('Copied to clipboard!\n\n' + promptText);
                    });
                } else {
                    alert('Copied to clipboard!\n\n' + promptText);
                }
            }
        }
    



        for(let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            document.body.appendChild(particle);
        }