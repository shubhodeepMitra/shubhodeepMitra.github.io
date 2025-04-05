// CUDA and AI Vector Art Animation
document.addEventListener('DOMContentLoaded', function() {
    // Get the vector art container
    const vectorArt = document.querySelector('.cuda-vector-art');
    if (!vectorArt) return;
    
    // Create neural network nodes
    const nodeCount = 20;
    for (let i = 0; i < nodeCount; i++) {
        createNode(vectorArt);
    }
    
    // Create connections between nodes
    createConnections(vectorArt);
    
    // Add data flow particles
    addDataFlowParticles(vectorArt);
});

// Create a neural network node
function createNode(container) {
    const node = document.createElement('div');
    node.className = 'node';
    
    // Random position
    const x = Math.random() * 80 + 10; // 10% to 90% of width
    const y = Math.random() * 80 + 10; // 10% to 90% of height
    
    // Random size (smaller nodes for depth effect)
    const size = Math.random() * 6 + 3; // 3px to 9px
    
    // Random color from theme
    const colors = [
        'var(--cuda-blue)',
        'var(--cuda-green)',
        'var(--cuda-orange)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random animation delay
    const delay = Math.random() * 5;
    
    // Apply styles
    node.style.left = `${x}%`;
    node.style.top = `${y}%`;
    node.style.width = `${size}px`;
    node.style.height = `${size}px`;
    node.style.backgroundColor = color;
    node.style.animationDelay = `${delay}s`;
    
    // Add to container
    container.appendChild(node);
    
    // Store position data for connections
    node.dataset.x = x;
    node.dataset.y = y;
    
    return node;
}

// Create connections between nodes
function createConnections(container) {
    const nodes = container.querySelectorAll('.node');
    const connections = [];
    
    // Create SVG element for connections
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.zIndex = '-1';
    svg.style.opacity = '0.2';
    svg.style.pointerEvents = 'none';
    container.appendChild(svg);
    
    // Connect some nodes (not all, to avoid clutter)
    for (let i = 0; i < nodes.length; i++) {
        const node1 = nodes[i];
        
        // Connect to 1-3 other nodes
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        
        for (let j = 0; j < connectionCount; j++) {
            // Find a random node to connect to
            const randomIndex = Math.floor(Math.random() * nodes.length);
            if (randomIndex !== i) {
                const node2 = nodes[randomIndex];
                
                // Calculate distance
                const x1 = parseFloat(node1.dataset.x);
                const y1 = parseFloat(node1.dataset.y);
                const x2 = parseFloat(node2.dataset.x);
                const y2 = parseFloat(node2.dataset.y);
                
                // Only connect if nodes are not too far apart
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (distance < 30) {
                    // Create line
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', `${x1}%`);
                    line.setAttribute('y1', `${y1}%`);
                    line.setAttribute('x2', `${x2}%`);
                    line.setAttribute('y2', `${y2}%`);
                    line.setAttribute('stroke', 'var(--cuda-blue)');
                    line.setAttribute('stroke-width', '0.5');
                    line.setAttribute('stroke-opacity', '0.3');
                    
                    // Add pulsing animation
                    const animateOpacity = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                    animateOpacity.setAttribute('attributeName', 'stroke-opacity');
                    animateOpacity.setAttribute('values', '0.1;0.3;0.1');
                    animateOpacity.setAttribute('dur', '4s');
                    animateOpacity.setAttribute('repeatCount', 'indefinite');
                    
                    line.appendChild(animateOpacity);
                    svg.appendChild(line);
                    connections.push(line);
                }
            }
        }
    }
    
    return connections;
}

// Add data flow particles
function addDataFlowParticles(container) {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        
        // Random starting position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation duration
        const duration = Math.random() * 5 + 3;
        
        // Random color
        const colors = [
            'var(--cuda-blue)',
            'var(--cuda-green)',
            'var(--cuda-orange)',
            'var(--cuda-purple)',
            'var(--cuda-cyan)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random movement pattern
        // Calculate a target position for the particle to move toward
        const moveX = (Math.random() - 0.5) * 200; // -100px to 100px
        const moveY = (Math.random() - 0.5) * 200; // -100px to 100px
        
        // Apply styles
        particle.style.left = `${startX}%`;
        particle.style.top = `${startY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Set custom properties for the movement animation
        particle.style.setProperty('--move-x', `${moveX}px`);
        particle.style.setProperty('--move-y', `${moveY}px`);
        
        container.appendChild(particle);
        
        // Create new particles when animation ends to maintain constant flow
        particle.addEventListener('animationend', function() {
            // Remove old particle
            this.remove();
            
            // Create a new particle
            addSingleParticle(container);
        });
    }
}

// Add a single particle (used for continuous animation)
function addSingleParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'data-particle';
    
    // Random starting position
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3 + 1;
    
    // Random animation duration
    const duration = Math.random() * 5 + 3;
    
    // Random color
    const colors = [
        'var(--cuda-blue)',
        'var(--cuda-green)',
        'var(--cuda-orange)',
        'var(--cuda-purple)',
        'var(--cuda-cyan)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random movement pattern
    const moveX = (Math.random() - 0.5) * 200;
    const moveY = (Math.random() - 0.5) * 200;
    
    // Apply styles
    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
    particle.style.animationDuration = `${duration}s`;
    
    // Set custom properties for the movement animation
    particle.style.setProperty('--move-x', `${moveX}px`);
    particle.style.setProperty('--move-y', `${moveY}px`);
    
    container.appendChild(particle);
    
    // Create new particles when animation ends
    particle.addEventListener('animationend', function() {
        // Remove old particle
        this.remove();
        
        // Create a new particle
        addSingleParticle(container);
    });
}
