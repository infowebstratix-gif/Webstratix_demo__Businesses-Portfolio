// Mock Architectural Project Repository Dataset for Filtering Engines
const projectRepository = [
    { id: 1, title: "Enterprise B2B E-Commerce Engine", category: "E-Commerce", description: "High-concurrency store pipeline with dynamic relational inventory tables.", image: "https://cdn.prod.website-files.com/6375f4b92e6aae93a3d03c2a/6a2280deb495fe353044b117_11%20shopline-enterprise%20b2b.png" },
    { id: 2, title: "Automated Tracking & Delivery Web App", category: "Full-Stack", description: "Role-based dispatching suite running on standard Laravel MVC framework infrastructure.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&h=260" },
    //{ id: 3, title: "Cryptocurrency Metrics & Analytics UI", category: "Frontend", description: "Pixel-perfect real-time dashboards mapping financial data streams flawlessly.", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=400&h=260" },
    { id: 4, title: "Hotel Booking & Property Management Suite", category: "Full-Stack", description: "Direct data transactions optimized via fast MySQL database extensions.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&h=260" },
    { id: 5, title: "Corporate Branding Portfolio Viewport", category: "Frontend", description: "Lightweight fully-responsive corporate layout targeting zero rendering degradation.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=260" }
];

// Document Object Selectors
const portfolioGrid = document.getElementById('portfolioGrid');
const filterButtons = document.querySelectorAll('#portfolioFilters .btn-filter');

// Initialize Dynamic Framework Layout Actions
window.addEventListener('DOMContentLoaded', () => {
    renderPortfolioItems(projectRepository);
    initializeFilterPipeline();
});

// Presentation Grid Component Engine
function renderPortfolioItems(dataset) {
    portfolioGrid.innerHTML = '';
    
    if (dataset.length === 0) {
        portfolioGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fa-solid fa-rectangle-xmark text-muted fs-2 mb-2"></i>
                <p class="text-muted small">No active items mapped under this category taxonomy loop.</p>
            </div>`;
        return;
    }

    dataset.forEach(project => {
        const itemCol = document.createElement('div');
        itemCol.className = 'col-md-6 col-lg-4';
        itemCol.innerHTML = `
            <div class="card project-card h-100 text-white border-0">
                <img src="${project.image}" class="card-img-top" alt="Project Mock Visualization">
                <div class="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                        <div class="mb-2"><span class="badge-category">${project.category}</span></div>
                        <h5 class="fw-bold card-title">${project.title}</h5>
                        <p class="text-muted-custom small mb-4">${project.description}</p>
                    </div>
                    <a href="#" class="text-primary text-decoration-none small fw-semibold tracking-wide d-inline-flex align-items-center gap-1">
                        Analyze Scope Matrix <i class="fa-solid fa-arrow-right fs-7"></i>
                    </a>
                </div>
            </div>`;
        portfolioGrid.appendChild(itemCol);
    });
}

// Portfolio Filtering Pipeline Bindings (FR-1.3 Compliance)
function initializeFilterPipeline() {
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove previous active status highlights
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const selectedCategory = e.target.getAttribute('data-filter');

            if (selectedCategory === 'All') {
                renderPortfolioItems(projectRepository);
            } else {
                const filteredData = projectRepository.filter(item => item.category === selectedCategory);
                renderPortfolioItems(filteredData);
            }
        });
    });
}

// Lead Generation Capture Routing Validation Handler (FR-1.4 Compliance)
function handleFormSubmit() {
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const service = document.getElementById('clientService').value;
    const message = document.getElementById('clientMessage').value;

    // Strict Input Presence Log Validations
    if (!name || !email || !message) {
        alert("Input fields missing from payload. Execution terminated.");
        return;
    }

    // Console Logging Data Payload to simulate secure Database Transaction Entry
    console.log("Transmitting payload array to administrative relational system database...");
    console.log(`Payload Matrix: { Client: "${name}", Email: "${email}", Target Service: "${service}", Message Length: ${message.length} chars }`);

    // Resetting Input Nodes
    document.getElementById('leadCaptureForm').reset();

    // Trigger Success Bootstrap Notification Component
    const toastElement = document.getElementById('successToast');
    const toastInstance = new bootstrap.Toast(toastElement);
    toastInstance.show();
}