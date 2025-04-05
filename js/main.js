// Main JavaScript for Shubhodeep's Portfolio - CUDA-inspired Theme

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize terminal
    initTerminal();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize code animation
    initCodeAnimation();
    
    // Initialize status bar
    initStatusBar();
});

// Scroll animations
function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Initial check for elements in viewport
    checkFadeElements();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkFadeElements);
    
    function checkFadeElements() {
        const triggerBottom = window.innerHeight * 0.8;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Terminal functionality
function initTerminal() {
    const terminalButton = document.querySelector('.terminal-button');
    const terminalOverlay = document.querySelector('.terminal-overlay');
    const terminalClose = document.querySelector('.terminal-close');
    const terminalInput = document.querySelector('.terminal-input');
    const terminalBody = document.querySelector('.terminal-body');
    
    // Terminal commands and responses
    const commands = {
        help: {
            description: 'Display available commands',
            action: () => {
                return `
<span class="code-comment">/* Available commands */</span>
<span class="cuda-qualifier">__device__</span> <span class="code-type">struct</span> <span class="code-function">Command</span> {
  <span class="code-type">char*</span> name;
  <span class="code-type">char*</span> description;
};

<span class="cuda-qualifier">__constant__</span> Command commands[] = {
  {<span class="code-string">"help"</span>,          <span class="code-string">"Display this help message"</span>},
  {<span class="code-string">"about"</span>,         <span class="code-string">"Display information about Shubhodeep"</span>},
  {<span class="code-string">"skills"</span>,        <span class="code-string">"List technical skills"</span>},
  {<span class="code-string">"experience"</span>,    <span class="code-string">"Show work experience"</span>},
  {<span class="code-string">"projects"</span>,      <span class="code-string">"List notable projects"</span>},
  {<span class="code-string">"research"</span>,      <span class="code-string">"Show research publications"</span>},
  {<span class="code-string">"contact"</span>,       <span class="code-string">"Display contact information"</span>},
  {<span class="code-string">"cuda"</span>,          <span class="code-string">"Show CUDA code example"</span>},
  {<span class="code-string">"resume"</span>,        <span class="code-string">"Download resume"</span>},
  {<span class="code-string">"clear"</span>,         <span class="code-string">"Clear the terminal"</span>},
  {<span class="code-string">"exit"</span>,          <span class="code-string">"Close the terminal"</span>}
};`;
            }
        },
        about: {
            description: 'Display information about Shubhodeep',
            action: () => {
                return `
<span class="cuda-directive">__host__ __device__</span> <span class="code-type">class</span> <span class="code-function">ShubhodeepMitra</span> {
<span class="code-type">private:</span>
  <span class="code-type">char*</span> role;
  <span class="code-type">char*</span> company;
  <span class="code-type">char*</span> focus[3];

<span class="code-type">public:</span>
  <span class="code-function">ShubhodeepMitra</span>() {
    role = <span class="code-string">"Software Engineer II"</span>;
    company = <span class="code-string">"Marqeta"</span>;
    focus[0] = <span class="code-string">"Distributed Systems"</span>;
    focus[1] = <span class="code-string">"Backend Development"</span>;
    focus[2] = <span class="code-string">"AI/ML Systems"</span>;
  }

  <span class="code-type">void</span> <span class="code-function">getEducation</span>() {
    <span class="code-keyword">return</span> <span class="code-string">"MS in Computer Science with Thesis, Arizona State University"</span>;
  }

  <span class="code-type">void</span> <span class="code-function">getLocation</span>() {
    <span class="code-keyword">return</span> <span class="code-string">"Bay Area, California"</span>;
  }
};

<span class="code-comment">// I'm a software developer with a passion for building scalable and resilient infrastructure.</span>
<span class="code-comment">// Currently focused on building high-performance, scalable backend systems and AI/ML infrastructure.</span>
`;
            }
        },
        skills: {
            description: 'List technical skills',
            action: () => {
                return `
<span class="cuda-qualifier">__constant__</span> <span class="code-type">char*</span> skills[] = {
  <span class="code-string">"Java"</span>,
  <span class="code-string">"C/C++"</span>,
  <span class="code-string">"Python"</span>,
  <span class="code-string">"Go"</span>,
  <span class="code-string">"AWS"</span>,
  <span class="code-string">"Kubernetes"</span>,
  <span class="code-string">"Docker"</span>,
  <span class="code-string">"React.js"</span>,
  <span class="code-string">"Spring Boot"</span>,
  <span class="code-string">"MongoDB"</span>,
  <span class="code-string">"PostgreSQL"</span>,
  <span class="code-string">"Redis"</span>,
  <span class="code-string">"LLM"</span>,
  <span class="code-string">"RAG"</span>
};

<span class="code-comment">// Programming Languages: Java, C/C++, Bash, Python (NumPy, pandas), Go, Linux/Unix Programming</span>
<span class="code-comment">// Skills: SpringBoot, ReactJS, Redux, MapReduce, LLM, RAG, Kafka, Docker, REST, Ansible, AWS, GraphQL, PyTorch, Terraform, Kubernetes, SQL, PostgreSQL, Redis, MongoDB, Firebase, Git, GitHub, DataDog, gdb, ElasticSearch, PGvector</span>
`;
            }
        },
        experience: {
            description: 'Show work experience',
            action: () => {
                return `
<span class="cuda-directive">__global__</span> <span class="code-type">void</span> <span class="code-function">getExperience</span>() {
  <span class="code-type">struct</span> <span class="code-function">Job</span> {
    <span class="code-type">char*</span> title;
    <span class="code-type">char*</span> company;
    <span class="code-type">char*</span> period;
    <span class="code-type">char*</span> description[4];
  };

  Job jobs[3];
  
  jobs[0].title = <span class="code-string">"Software Developer 2"</span>;
  jobs[0].company = <span class="code-string">"Marqeta, Bay Area, USA"</span>;
  jobs[0].period = <span class="code-string">"November 2024 - Present"</span>;
  jobs[0].description[0] = <span class="code-string">"Building scalable and available infrastructure for network systems"</span>;
  jobs[0].description[1] = <span class="code-string">"Collaborating cross-functionally to migrate load-balancing infrastructure from F5 to Envoy Proxy"</span>;
  jobs[0].description[2] = <span class="code-string">"Supporting mission-critical financial systems"</span>;

  jobs[1].title = <span class="code-string">"Graduate Research Assistant (Distributed Systems)"</span>;
  jobs[1].company = <span class="code-string">"EMITLab ASU, Tempe, USA"</span>;
  jobs[1].period = <span class="code-string">"December 2022 - July 2024"</span>;
  jobs[1].description[0] = <span class="code-string">"Led developments of scalable ML infrastructure to support scaling of large machine learning models, optimizing data pipelines and concurrent workflows on AWS"</span>;
  jobs[1].description[1] = <span class="code-string">"Improved parallel processing and automated ML workload deployments using Ansible on AWS EC2 clusters"</span>;
  jobs[1].description[2] = <span class="code-string">"Revamped in-memory graph data structures and integrated local caching mechanisms, reducing MongoDB calls by over 50,000"</span>;
  jobs[1].description[3] = <span class="code-string">"Built an interactive data visualization platform with React.js and Next.js to summarize and analyze multi-variate time series"</span>;

  jobs[2].title = <span class="code-string">"Software Engineer 2"</span>;
  jobs[2].company = <span class="code-string">"Hewlett Packard Enterprise (HPE), Bangalore, India"</span>;
  jobs[2].period = <span class="code-string">"July 2018 - July 2022"</span>;
  jobs[2].description[0] = <span class="code-string">"Led development efforts in C/C++ for critical networking components, including internal-VLAN, L3 counters, Netdev, and Ofproto"</span>;
  jobs[2].description[1] = <span class="code-string">"Redesigned multicast protocols, IGMP and MLD to integrate real-time packet flow monitoring"</span>;
  jobs[2].description[2] = <span class="code-string">"Developed CLI infrastructure for L2 protocols, VLAN Translation and Multi-Zone User-Based Tunneling"</span>;
  jobs[2].description[3] = <span class="code-string">"Engineered test automation suite for all development work, achieving 98% code coverage"</span>;
}
`;
            }
        },
        projects: {
            description: 'List notable projects',
            action: () => {
                return `
<span class="cuda-qualifier">__device__</span> <span class="code-type">struct</span> <span class="code-function">Project</span> {
  <span class="code-type">char*</span> name;
  <span class="code-type">char*</span> description;
  <span class="code-type">char*</span> tech[3];
};

<span class="cuda-qualifier">__constant__</span> Project projects[] = {
  {
    <span class="code-string">"AI Agent for Personalized K–12 Tutoring"</span>,
    <span class="code-string">"Built an AI agent combining Gemini, Tavus AI, and a RAG pipeline to deliver 1-on-1 human-like video tutoring with adaptive feedback, retrieving curriculum-aligned content."</span>,
    {<span class="code-string">"LLM"</span>, <span class="code-string">"RAG"</span>, <span class="code-string">"Gemini"</span>}
  },
  {
    <span class="code-string">"ColumnarDB"</span>,
    <span class="code-string">"Designed a Columnar Database system in Java with features including BitMap and BTree indexing, compressed BitMap, Columnar Joins, Columnar Sort, Scan, and Delete."</span>,
    {<span class="code-string">"Java"</span>, <span class="code-string">"Databases"</span>, <span class="code-string">"Indexing"</span>}
  },
  {
    <span class="code-string">"Image Retrieval and Recommendation"</span>,
    <span class="code-string">"Designed and built an end-to-end image retrieval and recommendation system with 92% accuracy, leveraging vector embeddings, dimensionality reduction, Personalized PageRank, and LSH."</span>,
    {<span class="code-string">"Vector Embeddings"</span>, <span class="code-string">"PageRank"</span>, <span class="code-string">"LSH"</span>}
  },
  {
    <span class="code-string">"Elastic Face Recognition Service"</span>,
    <span class="code-string">"Developed a scalable face recognition service using AWS EC2, S3, DynamoDB, and SQS, achieving 98% accuracy in facial recognition from video streams."</span>,
    {<span class="code-string">"AWS"</span>, <span class="code-string">"DynamoDB"</span>, <span class="code-string">"SQS"</span>}
  },
  {
    <span class="code-string">"Scalable Aesthetic-Preserving Face De-Identification"</span>,
    <span class="code-string">"Created a Kotlin Android app employing an ML-kit and openCV foundation to detect individuals in photograph backgrounds through face recognition."</span>,
    {<span class="code-string">"Kotlin"</span>, <span class="code-string">"ML-kit"</span>, <span class="code-string">"OpenCV"</span>}
  },
  {
    <span class="code-string">"Live Video Streaming Application"</span>,
    <span class="code-string">"Architected and implemented a high-performance live video streaming application in Go and WebRTC, optimizing for low latency and scalability."</span>,
    {<span class="code-string">"Go"</span>, <span class="code-string">"WebRTC"</span>, <span class="code-string">"Streaming"</span>}
  }
};
`;
            }
        },
        research: {
            description: 'Show research publications',
            action: () => {
                return `
<span class="cuda-directive">#include</span> <span class="code-string">"research.cuh"</span>

<span class="cuda-qualifier">__device__</span> <span class="code-type">struct</span> <span class="code-function">Publication</span> {
  <span class="code-type">char*</span> title;
  <span class="code-type">char*</span> venue;
  <span class="code-type">char*</span> abstract;
  <span class="code-type">char*</span> link;
};

<span class="cuda-qualifier">__constant__</span> Publication publications[] = {
  {
    <span class="code-string">"Pancommunity: Non-Monolithic Complex Epidemic and Pandemic Modeling"</span>,
    <span class="code-string">"SSRN, 2024"</span>,
    <span class="code-string">"The PanCommunity project investigates the impact of testing, preventative measures, and vaccines on community response and resilience during epidemics."</span>,
    <span class="code-string">"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4655113"</span>
  },
  {
    <span class="code-string">"DataStorm-EM: Exploration of Alternative Timelines within Continuous-Coupled Simulation Ensembles"</span>,
    <span class="code-string">"arXiv, 2024"</span>,
    <span class="code-string">"This paper presents the DataStorm-EM platform for data and model-driven simulation ensemble management, optimization, analysis, and exploration."</span>,
    <span class="code-string">"https://arxiv.org/abs/2407.14571"</span>
  },
  {
    <span class="code-string">"Visual Summarization of Multi-Variate Time Series"</span>,
    <span class="code-string">"ProQuest, 2024"</span>,
    <span class="code-string">"This research focuses on developing methods for visually summarizing multi-variate time series data, enabling more effective analysis and interpretation of complex temporal datasets."</span>,
    <span class="code-string">"https://search.proquest.com/openview/34ec8880f8c510c2eff60e1a2f3a1c7d/1"</span>
  },
  {
    <span class="code-string">"Novel TLS Signature Extraction for Malware Detection"</span>,
    <span class="code-string">"IEEE Conference, 2020"</span>,
    <span class="code-string">"This paper presents a solution to identify the presence of malware in a network flow from the initial unencrypted Client Hello packet of TLS handshake."</span>,
    <span class="code-string">"https://ieeexplore.ieee.org/document/9198590"</span>
  },
  {
    <span class="code-string">"Smart Wheelchair using IOV"</span>,
    <span class="code-string">"IJCEA, 2018"</span>,
    <span class="code-string">"This paper aims to develop a wheelchair that can move autonomously using the Internet of Vehicles (IOV)."</span>,
    <span class="code-string">"https://www.ijcea.com/wp-content/uploads/2018/08/ICRTCST-2018-201.pdf"</span>
  }
};
`;
            }
        },
        contact: {
            description: 'Display contact information',
            action: () => {
                return `
<span class="cuda-kernel">__global__</span> <span class="code-type">void</span> <span class="code-function">contactMe</span>(<span class="code-type">char*</span> message) {
  <span class="code-type">char*</span> email = <span class="code-string">"smitra27@asu.edu"</span>;
  <span class="code-type">char*</span> location = <span class="code-string">"Bay Area, California"</span>;
  <span class="code-type">char*</span> social[] = {
    <span class="code-string">"https://github.com/shubhodeepMitra"</span>,
    <span class="code-string">"https://linkedin.com/in/shubhodeep-mitra"</span>,
    <span class="code-string">"https://twitter.com/TheShubhodeep"</span>
  };
  
  <span class="code-comment">// I'm currently open to new opportunities.</span>
  <span class="code-comment">// Whether you have a question or just want to say hi, I'll try my best to get back to you!</span>
}
`;
            }
        },
        resume: {
            description: 'Download resume',
            action: () => {
                // Create a download link for the resume
                const link = document.createElement('a');
                link.href = 'ShubhodeepMitra_resume.pdf';
                link.download = 'ShubhodeepMitra_resume.pdf';
                link.target = '_blank';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                return `
<span class="code-comment">/* Initiating download of ShubhodeepMitra_resume.pdf... */</span>
<span class="code-function">downloadFile</span>(<span class="code-string">"ShubhodeepMitra_resume.pdf"</span>);

<span class="code-comment">// If the download doesn't start automatically, you can download the resume from:</span>
<span class="code-comment">// https://shubhodeepmitra.github.io/ShubhodeepMitra_resume.pdf</span>
`;
            }
        },
        cuda: {
            description: 'Show CUDA code example',
            action: () => {
                return `
<span class="code-comment">/* Matrix multiplication example using CUDA */</span>
<span class="cuda-directive">#include</span> <span class="code-string">&lt;stdio.h&gt;</span>

<span class="cuda-directive">__global__</span> <span class="code-type">void</span> <span class="code-function">matrixMul</span>(<span class="code-type">float</span>* A, <span class="code-type">float</span>* B, <span class="code-type">float</span>* C, <span class="code-type">int</span> N) {
  <span class="code-comment">// Calculate row and column index</span>
  <span class="code-type">int</span> row = blockIdx.y * blockDim.y + threadIdx.y;
  <span class="code-type">int</span> col = blockIdx.x * blockDim.x + threadIdx.x;
  
  <span class="code-comment">// Check if within matrix bounds</span>
  <span class="code-keyword">if</span> (row < N && col < N) {
    <span class="code-type">float</span> sum = 0.0f;
    <span class="code-keyword">for</span> (<span class="code-type">int</span> i = 0; i < N; i++) {
      sum += A[row * N + i] * B[i * N + col];
    }
    C[row * N + col] = sum;
  }
}

<span class="code-type">int</span> <span class="code-function">main</span>() {
  <span class="code-type">int</span> N = 1024;
  <span class="code-type">size_t</span> size = N * N * <span class="code-keyword">sizeof</span>(<span class="code-type">float</span>);
  
  <span class="code-comment">// Allocate host memory</span>
  <span class="code-type">float</span>* h_A = (<span class="code-type">float</span>*)<span class="code-function">malloc</span>(size);
  <span class="code-type">float</span>* h_B = (<span class="code-type">float</span>*)<span class="code-function">malloc</span>(size);
  <span class="code-type">float</span>* h_C = (<span class="code-type">float</span>*)<span class="code-function">malloc</span>(size);
  
  <span class="code-comment">// Allocate device memory</span>
  <span class="code-type">float</span>* d_A, *d_B, *d_C;
  <span class="code-function">cudaMalloc</span>((<span class="code-type">void</span>**)&d_A, size);
  <span class="code-function">cudaMalloc</span>((<span class="code-type">void</span>**)&d_B, size);
  <span class="code-function">cudaMalloc</span>((<span class="code-type">void</span>**)&d_C, size);
  
  <span class="code-comment">// Copy data to device</span>
  <span class="code-function">cudaMemcpy</span>(d_A, h_A, size, cudaMemcpyHostToDevice);
  <span class="code-function">cudaMemcpy</span>(d_B, h_B, size, cudaMemcpyHostToDevice);
  
  <span class="code-comment">// Define grid and block dimensions</span>
  <span class="code-type">dim3</span> threadsPerBlock(16, 16);
  <span class="code-type">dim3</span> numBlocks(N / threadsPerBlock.x, N / threadsPerBlock.y);
  
  <span class="code-comment">// Launch kernel</span>
  <span class="code-function">matrixMul</span><<<numBlocks, threadsPerBlock>>>(d_A, d_B, d_C, N);
  
  <span class="code-comment">// Copy result back to host</span>
  <span class="code-function">cudaMemcpy</span>(h_C, d_C, size, cudaMemcpyDeviceToHost);
  
  <span class="code-comment">// Free memory</span>
  <span class="code-function">cudaFree</span>(d_A);
  <span class="code-function">cudaFree</span>(d_B);
  <span class="code-function">cudaFree</span>(d_C);
  <span class="code-function">free</span>(h_A);
  <span class="code-function">free</span>(h_B);
  <span class="code-function">free</span>(h_C);
  
  <span class="code-keyword">return</span> 0;
}`;
            }
        },
        clear: {
            description: 'Clear the terminal',
            action: () => {
                terminalBody.innerHTML = '';
                return '';
            }
        },
        exit: {
            description: 'Close the terminal',
            action: () => {
                closeTerminal();
                return '';
            }
        }
    };
    
    // Open terminal
    terminalButton.addEventListener('click', () => {
        terminalOverlay.style.display = 'flex';
        terminalInput.focus();
        
        // Initial welcome message
        addTerminalOutput(`<span class="code-comment">/* Welcome to Shubhodeep's Terminal Portfolio! */</span>`, 'response');
        addTerminalOutput(`<span class="code-comment">/* Type "help" to see available commands */</span>`, 'response');
        
        // Update status bar
        updateStatusBar('NORMAL', 'terminal.cu', 1, 0);
    });
    
    // Close terminal
    terminalClose.addEventListener('click', closeTerminal);
    
    function closeTerminal() {
        terminalOverlay.style.display = 'none';
        terminalBody.scrollTop = terminalBody.scrollHeight;
        
        // Reset status bar to current section using the same improved detection
        const scrollPosition = window.scrollY + 80; // Add offset to account for header height
        
        // Find the section that is currently in view
        const sections = document.querySelectorAll('section');
        let currentSection = 'home'; // Default to home
        
        let maxVisibleHeight = 0;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionId = section.getAttribute('id');
            
            // Skip if section has no id
            if (!sectionId) return;
            
            // Calculate how much of the section is visible in the viewport
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(window.innerHeight, rect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            
            // If this section has more visible area than previous max, it's the current section
            if (visibleHeight > maxVisibleHeight) {
                maxVisibleHeight = visibleHeight;
                currentSection = sectionId;
            }
        });
        
        updateStatusBar('NORMAL', `${currentSection}.cu`, 1, 0);
    }
    
    // Handle terminal input
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            
            if (command) {
                // Display command
                addTerminalOutput(command, 'command');
                
                // Process command
                processCommand(command);
                
                // Clear input
                terminalInput.value = '';
                
                // Update status bar - INSERT mode
                updateStatusBar('INSERT', 'terminal.cu', terminalBody.querySelectorAll('.terminal-output').length + 1, 0);
            }
        } else if (e.key === 'Escape') {
            // Simulate Vim behavior - switch to NORMAL mode
            updateStatusBar('NORMAL', 'terminal.cu', terminalBody.querySelectorAll('.terminal-output').length + 1, 0);
        } else if (e.key === 'i' && e.ctrlKey) {
            // Simulate Vim behavior - switch to INSERT mode
            updateStatusBar('INSERT', 'terminal.cu', terminalBody.querySelectorAll('.terminal-output').length + 1, 0);
        }
    });
    
    function processCommand(command) {
        if (command.trim() === '') {
            return;
        }
        
        // Add command to terminal
        addTerminalOutput(`<span class="terminal-prompt">visitor@shubhodeep-portfolio:~$</span> <span class="terminal-command">${command}</span>`, 'command');
        
        // Process command
        const cmd = command.toLowerCase().trim();
        
        if (commands[cmd]) {
            const output = commands[cmd].action();
            addTerminalOutput(output, 'response');
            
            // Special case for resume command - it will trigger a download
            if (cmd === 'resume') {
                const link = document.createElement('a');
                link.href = 'ShubhodeepMitra_resume.pdf';
                link.download = 'ShubhodeepMitra_resume.pdf';
                link.target = '_blank';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } else {
            addTerminalOutput(`Command not found: ${command}. Type 'help' to see available commands.`, 'response');
        }
    }
    
    function addTerminalOutput(text, type) {
        const outputElement = document.createElement('div');
        outputElement.className = 'terminal-output';
        
        if (type === 'command') {
            outputElement.innerHTML = '<span class="terminal-prompt">visitor@shubhodeep-portfolio:~$</span> <span class="terminal-command">' + text + '</span>';
        } else {
            outputElement.innerHTML = '<span class="terminal-response">' + text + '</span>';
        }
        
        terminalBody.appendChild(outputElement);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
}

// Helper function to detect the current section
function getCurrentSection() {
    // Add a buffer to account for header height and some additional space
    const scrollPosition = window.scrollY + 100; 
    const windowHeight = window.innerHeight;
    const viewportBottom = scrollPosition + windowHeight * 0.5; // Consider section visible when it's in the middle of viewport
    
    // Find the section that is currently in view
    const sections = document.querySelectorAll('section');
    let currentSection = 'home'; // Default to home
    let smallestDistance = Infinity;
    
    // For debugging
    console.log("Scroll position:", scrollPosition);
    console.log("Viewport bottom:", viewportBottom);
    console.log("Sections found:", sections.length);
    
    // First pass: check if any section is directly in view (scroll position within section bounds)
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        if (!sectionId) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // For debugging
        console.log(`Section ${sectionId}: top=${sectionTop}, bottom=${sectionBottom}, height=${sectionHeight}`);
        
        // If the scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sectionId;
            console.log(`Found current section (direct match): ${currentSection}`);
            smallestDistance = 0; // This is a direct match, can't get better
        } 
        // If we haven't found a direct match, track the section closest to the viewport center
        else if (smallestDistance !== 0) {
            // Calculate distance from viewport center to section center
            const sectionCenter = sectionTop + sectionHeight / 2;
            const viewportCenter = scrollPosition + windowHeight / 2;
            const distance = Math.abs(sectionCenter - viewportCenter);
            
            if (distance < smallestDistance) {
                smallestDistance = distance;
                currentSection = sectionId;
                console.log(`New closest section: ${currentSection} (distance: ${distance})`);
            }
        }
    });
    
    // Special handling for bottom of page (contact section)
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    
    // If we're near the bottom of the page, assume we're in the contact section
    if (scrollPosition + windowHeight > documentHeight - 100) {
        currentSection = 'contact';
        console.log("Near bottom of page, setting section to contact");
    }
    
    console.log("Final current section:", currentSection);
    return currentSection;
}

// Navigation functionality
function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const ideTabs = document.querySelector('.ide-tabs');
    const ideTabItems = document.querySelectorAll('.ide-tab');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        ideTabs.classList.toggle('active');
    });
    
    // IDE tab navigation
    ideTabItems.forEach(tab => {
        tab.addEventListener('click', function(e) {
            // Prevent default if clicking on close button
            if (e.target.classList.contains('close-tab')) {
                e.stopPropagation();
                return;
            }
            
            // Remove active class from all tabs
            ideTabItems.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get section ID from data attribute
            const targetId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            
            // Scroll to section
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
            
            // Update status bar with the section name
            updateStatusBar('NORMAL', `${targetId}.cu`, 1, 0);
            
            // Close mobile menu if open
            ideTabs.classList.remove('active');
        });
        
        // Handle close tab button (just for visual effect, doesn't actually close)
        const closeBtn = tab.querySelector('.close-tab');
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                // Visual feedback only - we don't actually close tabs
                tab.classList.add('closing');
                setTimeout(() => {
                    tab.classList.remove('closing');
                }, 300);
            });
        }
    });
    
    // Update active tab on scroll
    window.addEventListener('scroll', () => {
        // Get current section using our improved detection function
        const currentSection = getCurrentSection();
        
        // Update active tab
        ideTabItems.forEach(tab => {
            const tabSection = tab.getAttribute('data-section');
            if (tabSection === currentSection) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // Update status bar with more accurate line calculation
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        const scrollPosition = window.scrollY;
        
        // Calculate line based on scroll position relative to document height
        const scrollPercentage = Math.min(scrollPosition / (documentHeight - windowHeight), 1);
        const line = Math.floor(scrollPercentage * 100) + 1;
        const col = Math.floor(Math.random() * 80); // Random column for effect
        
        // Update status bar with current section
        updateStatusBar('NORMAL', `${currentSection}.cu`, line, col);
    });
    
    // Experience tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

function closeTerminal() {
    terminalOverlay.style.display = 'none';
    terminalBody.scrollTop = terminalBody.scrollHeight;
    
    // Reset status bar to current section
    const currentSection = getCurrentSection();
    updateStatusBar('NORMAL', `${currentSection}.cu`, 1, 0);
}

// Status bar functionality
function initStatusBar() {
    const modeElement = document.querySelector('.status-bar-left .status-bar-item:first-child span');
    const filenameElement = document.querySelector('.status-bar-right .status-bar-item:first-child span');
    const positionElement = document.querySelector('.status-bar-right .status-bar-item:last-child span');
    
    // Get initial section on page load
    const initialSection = getCurrentSection();
    
    // Initial values
    updateStatusBar('NORMAL', `${initialSection}.cu`, 1, 0);
    
    // The scroll event listener is now handled in the navigation function
    // to avoid duplicate event listeners and ensure consistent behavior
}

// Update status bar content
function updateStatusBar(mode, filename, line, col) {
    const modeElement = document.querySelector('.status-bar-left .status-bar-item:first-child span');
    const filenameElement = document.querySelector('.status-bar-right .status-bar-item:first-child span');
    const positionElement = document.querySelector('.status-bar-right .status-bar-item:last-child span');
    
    modeElement.textContent = mode;
    filenameElement.innerHTML = '<span class="cuda-directive">__device__</span> ' + filename;
    positionElement.textContent = `Ln ${line}, Col ${col}`;
    
    // Change status indicator color based on mode
    const statusIndicator = document.querySelector('.status-indicator');
    
    if (mode === 'NORMAL') {
        statusIndicator.style.backgroundColor = 'var(--cuda-green)'; // Green
    } else if (mode === 'INSERT') {
        statusIndicator.style.backgroundColor = 'var(--cuda-blue)'; // Blue
    } else if (mode === 'VISUAL') {
        statusIndicator.style.backgroundColor = 'var(--cuda-orange)'; // Orange
    }
}

// Code animation in background
function initCodeAnimation() {
    const codeAnimation = document.querySelector('.code-animation');
    const codeSnippets = [
        '<span class="cuda-directive">__global__</span> <span class="code-type">void</span> <span class="code-function">optimizeSystem</span>(<span class="code-type">float</span>* data) { ... }',
        '<span class="cuda-directive">__device__</span> <span class="code-type">class</span> <span class="code-function">DistributedTraining</span> { ... }',
        '<span class="cuda-qualifier">__constant__</span> <span class="code-type">float</span> threshold = 0.75f;',
        '<span class="cuda-directive">#include</span> <span class="code-string">&lt;cuda_runtime.h&gt;</span>',
        '<span class="code-function">cudaMalloc</span>((<span class="code-type">void</span>**)&devicePtr, size);',
        '<span class="code-type">dim3</span> threadsPerBlock(16, 16);',
        '<span class="code-function">kernel</span><<<gridSize, blockSize>>>(d_input, d_output);',
        '<span class="code-function">cudaMemcpy</span>(h_data, d_data, size, cudaMemcpyDeviceToHost);',
        '<span class="cuda-directive">__shared__</span> <span class="code-type">float</span> sharedData[256];',
        '<span class="code-type">int</span> idx = blockIdx.x * blockDim.x + threadIdx.x;',
        '<span class="code-keyword">if</span> (threadIdx.x < 32) { <span class="code-comment">/* warp-level operation */</span> }',
        '<span class="code-function">atomicAdd</span>(&counter, 1);',
        '<span class="cuda-directive">__syncthreads</span>();',
        '<span class="code-type">float</span> result = <span class="code-function">__fdividef</span>(a, b);',
        '<span class="code-function">cudaDeviceSynchronize</span>();',
        '<span class="code-type">cudaError_t</span> error = <span class="code-function">cudaGetLastError</span>();',
        '<span class="code-type">struct</span> <span class="code-function">DeviceProperties</span> props;',
        '<span class="code-function">cudaGetDeviceProperties</span>(&props, 0);',
        '<span class="cuda-directive">__launch_bounds__</span>(256, 4)',
        '<span class="code-type">template</span> <<span class="code-type">typename</span> T> <span class="cuda-directive">__device__</span> T <span class="code-function">max</span>(T a, T b) { <span class="code-keyword">return</span> a > b ? a : b; }'
    ];
    
    // Create initial code lines
    for (let i = 0; i < 15; i++) {
        createCodeLine();
    }
    
    // Continue creating code lines at intervals
    setInterval(createCodeLine, 2000);
    
    function createCodeLine() {
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        
        // Random code snippet
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        codeLine.innerHTML = randomSnippet;
        
        // Random position and animation duration
        const left = Math.random() * 100;
        const animationDuration = 15 + Math.random() * 30;
        
        codeLine.style.left = `${left}%`;
        codeLine.style.animationDuration = `${animationDuration}s`;
        
        codeAnimation.appendChild(codeLine);
        
        // Remove code line after animation completes
        setTimeout(() => {
            codeLine.remove();
        }, animationDuration * 1000);
    }
}
