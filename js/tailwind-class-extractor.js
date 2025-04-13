// Function to extract Tailwind classes from HTML elements
function extractTailwindClasses() {
    const classes = new Set();
    
    // Function to process an element
    function processElement(element) {
        // Get all class attributes
        const classAttr = element.getAttribute('class');
        if (classAttr) {
            // Split classes and add to set
            classAttr.split(' ').forEach(cls => {
                if (cls.trim()) {
                    classes.add(cls.trim());
                }
            });
        }
        
        // Process all child elements
        Array.from(element.children).forEach(processElement);
    }
    
    // Start processing from body
    processElement(document.body);
    
    // Convert set to sorted array
    return Array.from(classes).sort();
}

// Function to save classes to a file
function saveClassesToFile(classes) {
    const content = classes.join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tailwind-classes.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Export functions for use in Vue components
window.tailwindUtils = {
    extractClasses: extractTailwindClasses,
    saveClasses: saveClassesToFile
}; 