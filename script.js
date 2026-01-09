// Dashboard JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

function initializeDashboard() {
    // Initialize chart animations
    animateChartBars();

    // Initialize interactive elements
    initializeSearch();
    initializeNavigation();
    initializeChartInteractions();
    initializeCategories();

    // Update current date in filters
    updateDateFilters();
}

// Animate chart bars on load
function animateChartBars() {
    const chartBars = document.querySelectorAll('.chart-bar');

    chartBars.forEach((bar, index) => {
        const targetHeight = bar.style.height;
        bar.style.height = '0%';

        setTimeout(() => {
            bar.style.transition = 'height 0.6s ease-out';
            bar.style.height = targetHeight;
        }, index * 100);
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-bar input');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterOrders(searchTerm);
        });
    }
}

// Filter orders based on search term
function filterOrders(searchTerm) {
    const orderRows = document.querySelectorAll('.orders-table tr');

    orderRows.forEach(row => {
        const customerName = row.querySelector('.order-customer span');
        if (customerName) {
            const text = customerName.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    });
}

// Navigation functionality
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (!this.classList.contains('active') && this.closest('.nav-menu')) {
                e.preventDefault();

                // Remove active class from all nav items in menu
                const menuItems = document.querySelectorAll('.nav-menu .nav-item');
                menuItems.forEach(navItem => navItem.classList.remove('active'));

                // Add active class to clicked item
                this.classList.add('active');
            }
        });
    });
}

// Chart interactions
function initializeChartInteractions() {
    const chartBars = document.querySelectorAll('.chart-bar');
    const chartHighlight = document.querySelector('.chart-highlight');

    chartBars.forEach((bar, index) => {
        bar.addEventListener('mouseenter', function() {
            // Calculate approximate value based on height
            const height = parseInt(this.style.height);
            const maxValue = 62345;
            const value = Math.round((height / 100) * maxValue);

            if (chartHighlight) {
                chartHighlight.textContent = `$${value.toLocaleString()}`;
                chartHighlight.style.opacity = '1';
            }

            // Highlight effect
            this.style.opacity = '0.7';
        });

        bar.addEventListener('mouseleave', function() {
            // Reset to default highest month value
            if (chartHighlight) {
                chartHighlight.textContent = '$62,345';
            }

            this.style.opacity = '1';
        });
    });
}

// Category interactions
function initializeCategories() {
    const categoryItems = document.querySelectorAll('.category-item');

    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Update date filters with current date context
function updateDateFilters() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // You can dynamically update the year in date filters if needed
    const dateFilters = document.querySelectorAll('.date-filter span');
    dateFilters.forEach(filter => {
        if (filter.textContent.includes('2024')) {
            filter.textContent = filter.textContent.replace('2024', currentYear);
        }
    });
}

// Smooth scroll animations
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add loading states
function showLoading(element) {
    element.style.opacity = '0.5';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Simulate data refresh
function refreshDashboardData() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        setTimeout(() => {
            showLoading(card);

            setTimeout(() => {
                hideLoading(card);
            }, 500);
        }, index * 100);
    });
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Re-calculate chart heights or other responsive elements if needed
        console.log('Window resized - recalculating layouts');
    }, 250);
});

// Add notification badge animation
function animateNotificationBadge() {
    const notificationBtn = document.querySelector('.header-actions .btn-icon:last-child');

    if (notificationBtn) {
        setInterval(() => {
            notificationBtn.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                notificationBtn.style.animation = '';
            }, 500);
        }, 10000); // Pulse every 10 seconds
    }
}

// Initialize tooltips
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.position = 'absolute';
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
        });

        element.addEventListener('mouseleave', function() {
            const tooltips = document.querySelectorAll('.tooltip');
            tooltips.forEach(t => t.remove());
        });
    });
}

// Export functionality for reports
function exportReport(format) {
    console.log(`Exporting report in ${format} format...`);
    // Implement export logic here
    alert(`Export feature would generate a ${format} report`);
}

// Print report functionality
document.addEventListener('DOMContentLoaded', function() {
    const printBtn = document.querySelector('.header-actions .btn-icon');
    if (printBtn && printBtn.textContent.includes('Print')) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) {
            searchInput.focus();
        }
    }

    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});

// Simulate real-time updates
function simulateRealTimeUpdates() {
    setInterval(() => {
        // Update sales numbers with small random changes
        const totalRevenue = document.querySelector('.stat-value');
        if (totalRevenue) {
            const currentValue = parseInt(totalRevenue.textContent.replace(/[$,]/g, ''));
            const change = Math.floor(Math.random() * 1000) - 500;
            const newValue = currentValue + change;

            // Animate the change
            animateValue(totalRevenue, currentValue, newValue, 1000);
        }
    }, 30000); // Update every 30 seconds
}

// Animate number changes
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;

        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }

        element.textContent = `$${Math.floor(current).toLocaleString()}`;
    }, 16);
}

// Initialize everything
setupSmoothScrolling();
animateNotificationBadge();

// Console message
console.log('%c Dashboard Loaded Successfully! ', 'background: #9AE382; color: #1C4B41; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c Keyboard Shortcuts: ', 'font-weight: bold; font-size: 14px;');
console.log('  Ctrl/Cmd + K: Focus search');
console.log('  Ctrl/Cmd + P: Print report');
