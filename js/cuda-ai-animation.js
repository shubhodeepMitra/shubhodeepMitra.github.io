// 3D CUDA and AI Vector Animation
// Using Three.js to create a visual representation of CUDA parallel processing and AI

// Initialize variables
let scene, camera, renderer, gridHelper;
let particles = [];
let cubes = [];
let lines = [];
let neuralNetworkNodes = [];
let neuralNetworkConnections = [];
let animationFrame;
let isAnimating = true;

// Colors from Moonlight theme
const colors = {
    background: 0x1e2030,
    gridLines: 0x2f334d,
    cuda: 0x82aaff,
    ai: 0xc3e88d,
    highlight: 0xffc777,
    accent: 0xff757f
};

// Initialize the animation
function initAnimation() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(colors.background);
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    camera.position.y = 10;
    camera.position.x = 0;
    camera.lookAt(0, 0, 0);
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add renderer to the animation container
    const container = document.getElementById('cuda-ai-animation');
    if (container) {
        // Clear any existing content
        container.innerHTML = '';
        container.appendChild(renderer.domElement);
        
        // Add grid helper for visual reference
        gridHelper = new THREE.GridHelper(100, 20, colors.gridLines, colors.gridLines);
        gridHelper.position.y = -10;
        scene.add(gridHelper);
        
        // Create CUDA kernel representation
        createCudaKernel();
        
        // Create AI neural network representation
        createNeuralNetwork();
        
        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 20, 15);
        scene.add(directionalLight);
        
        // Handle window resize
        window.addEventListener('resize', onWindowResize);
        
        // Start animation loop
        animate();
    }
}

// Create CUDA kernel representation with grid/block structure
function createCudaKernel() {
    // Create a grid of cubes to represent CUDA threads
    const gridSize = 5;
    const blockSize = 1.2;
    const spacing = 2;
    
    // Create thread blocks
    for (let x = -gridSize; x <= gridSize; x += spacing) {
        for (let z = -gridSize; z <= gridSize; z += spacing) {
            // Create a block of threads
            const block = new THREE.Group();
            
            // Create threads within the block
            for (let bx = -1; bx <= 1; bx++) {
                for (let bz = -1; bz <= 1; bz++) {
                    const geometry = new THREE.BoxGeometry(blockSize * 0.4, blockSize * 0.4, blockSize * 0.4);
                    const material = new THREE.MeshPhongMaterial({ 
                        color: colors.cuda,
                        transparent: true,
                        opacity: 0.8,
                        emissive: colors.cuda,
                        emissiveIntensity: 0.2
                    });
                    
                    const cube = new THREE.Mesh(geometry, material);
                    cube.position.set(
                        bx * blockSize * 0.5,
                        -5,
                        bz * blockSize * 0.5
                    );
                    
                    // Store original position for animation
                    cube.userData = {
                        originalY: -5,
                        phase: Math.random() * Math.PI * 2,
                        speed: 0.02 + Math.random() * 0.03
                    };
                    
                    block.add(cube);
                    cubes.push(cube);
                }
            }
            
            // Position the block in the grid
            block.position.set(x, 0, z);
            scene.add(block);
        }
    }
    
    // Add data flow particles
    for (let i = 0; i < 100; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 8, 8);
        const material = new THREE.MeshPhongMaterial({ 
            color: colors.highlight,
            emissive: colors.highlight,
            emissiveIntensity: 0.5
        });
        
        const particle = new THREE.Mesh(geometry, material);
        
        // Random starting position
        particle.position.x = (Math.random() - 0.5) * 40;
        particle.position.y = -10 + Math.random() * 5;
        particle.position.z = (Math.random() - 0.5) * 40;
        
        // Store velocity for animation
        particle.userData = {
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.2,
                Math.random() * 0.2,
                (Math.random() - 0.5) * 0.2
            )
        };
        
        scene.add(particle);
        particles.push(particle);
    }
}

// Create AI neural network representation
function createNeuralNetwork() {
    // Define neural network structure (layers and nodes per layer)
    const layers = 4;
    const nodesPerLayer = [5, 8, 8, 3];
    const layerSpacing = 6;
    const nodeSpacing = 2;
    
    // Create nodes for each layer
    for (let layer = 0; layer < layers; layer++) {
        const nodes = nodesPerLayer[layer];
        const layerX = layer * layerSpacing - (layers * layerSpacing) / 2 + 10;
        
        for (let node = 0; node < nodes; node++) {
            const nodeY = (node - (nodes - 1) / 2) * nodeSpacing + 5;
            
            // Create node geometry
            const geometry = new THREE.SphereGeometry(0.5, 16, 16);
            const material = new THREE.MeshPhongMaterial({ 
                color: colors.ai,
                transparent: true,
                opacity: 0.9,
                emissive: colors.ai,
                emissiveIntensity: 0.3
            });
            
            const nodeObj = new THREE.Mesh(geometry, material);
            nodeObj.position.set(layerX, nodeY, 0);
            
            // Store layer and node info for animations
            nodeObj.userData = {
                layer: layer,
                index: node,
                originalScale: 1,
                pulsePhase: Math.random() * Math.PI * 2
            };
            
            scene.add(nodeObj);
            neuralNetworkNodes.push(nodeObj);
            
            // Connect to previous layer nodes
            if (layer > 0) {
                const prevNodes = nodesPerLayer[layer - 1];
                const prevLayerX = (layer - 1) * layerSpacing - (layers * layerSpacing) / 2 + 10;
                
                for (let prevNode = 0; prevNode < prevNodes; prevNode++) {
                    const prevNodeY = (prevNode - (prevNodes - 1) / 2) * nodeSpacing + 5;
                    
                    // Create connection line
                    const points = [
                        new THREE.Vector3(prevLayerX, prevNodeY, 0),
                        new THREE.Vector3(layerX, nodeY, 0)
                    ];
                    
                    const geometry = new THREE.BufferGeometry().setFromPoints(points);
                    const material = new THREE.LineBasicMaterial({ 
                        color: colors.ai,
                        transparent: true,
                        opacity: 0.3
                    });
                    
                    const line = new THREE.Line(geometry, material);
                    
                    // Store connection info for animations
                    line.userData = {
                        fromLayer: layer - 1,
                        fromNode: prevNode,
                        toLayer: layer,
                        toNode: node,
                        originalOpacity: 0.3,
                        pulsePhase: Math.random() * Math.PI * 2
                    };
                    
                    scene.add(line);
                    neuralNetworkConnections.push(line);
                }
            }
        }
    }
}

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop
function animate() {
    animationFrame = requestAnimationFrame(animate);
    
    if (!isAnimating) return;
    
    // Rotate grid for dynamic effect
    if (gridHelper) {
        gridHelper.rotation.y += 0.002;
    }
    
    // Animate CUDA thread blocks
    cubes.forEach(cube => {
        cube.position.y = cube.userData.originalY + Math.sin(Date.now() * 0.001 + cube.userData.phase) * 0.5;
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });
    
    // Animate data flow particles
    particles.forEach(particle => {
        particle.position.add(particle.userData.velocity);
        
        // Reset particles that go out of bounds
        if (particle.position.y > 10) {
            particle.position.y = -10;
            particle.position.x = (Math.random() - 0.5) * 40;
            particle.position.z = (Math.random() - 0.5) * 40;
        }
        
        // Add some random movement
        particle.userData.velocity.x += (Math.random() - 0.5) * 0.01;
        particle.userData.velocity.z += (Math.random() - 0.5) * 0.01;
        
        // Clamp velocity
        const maxVel = 0.2;
        if (particle.userData.velocity.x > maxVel) particle.userData.velocity.x = maxVel;
        if (particle.userData.velocity.x < -maxVel) particle.userData.velocity.x = -maxVel;
        if (particle.userData.velocity.z > maxVel) particle.userData.velocity.z = maxVel;
        if (particle.userData.velocity.z < -maxVel) particle.userData.velocity.z = -maxVel;
    });
    
    // Animate neural network nodes
    neuralNetworkNodes.forEach(node => {
        const pulse = Math.sin(Date.now() * 0.002 + node.userData.pulsePhase) * 0.2 + 1;
        node.scale.set(pulse, pulse, pulse);
    });
    
    // Animate neural network connections
    neuralNetworkConnections.forEach(connection => {
        const pulse = Math.sin(Date.now() * 0.001 + connection.userData.pulsePhase) * 0.5 + 0.5;
        connection.material.opacity = connection.userData.originalOpacity + pulse * 0.3;
    });
    
    // Slowly rotate camera around the scene
    camera.position.x = Math.sin(Date.now() * 0.0002) * 35;
    camera.position.z = Math.cos(Date.now() * 0.0002) * 35;
    camera.lookAt(0, 0, 0);
    
    // Render the scene
    renderer.render(scene, camera);
}

// Pause animation when not visible
function pauseAnimation() {
    isAnimating = false;
}

// Resume animation when visible
function resumeAnimation() {
    isAnimating = true;
}

// Clean up resources
function disposeAnimation() {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
    
    // Remove event listeners
    window.removeEventListener('resize', onWindowResize);
    
    // Dispose of Three.js objects
    scene = null;
    camera = null;
    renderer = null;
    gridHelper = null;
    particles = [];
    cubes = [];
    lines = [];
    neuralNetworkNodes = [];
    neuralNetworkConnections = [];
}

// Initialize animation when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
        console.error('Three.js is not loaded. Please include the Three.js library.');
        return;
    }
    
    // Initialize the animation
    initAnimation();
    
    // Pause animation when not in viewport to save resources
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resumeAnimation();
            } else {
                pauseAnimation();
            }
        });
    }, { threshold: 0.1 });
    
    const container = document.getElementById('cuda-ai-animation');
    if (container) {
        observer.observe(container);
    }
});
