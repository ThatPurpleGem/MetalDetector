// detect.js

// 1. GLOBAL VARIABLE: Stores the last calculated distance.
let lastCalculatedDistance = 0; 
let itemfound = 0;

// 2. Get references to the HTML elements
const targetElement = document.getElementById('target-element');
const resultDisplay = document.getElementById('result');

/**
 * Generates a random integer between 1 (inclusive) and 1000 (inclusive).
 * @returns {number} A random coordinate value.
 */
function getRandomCoordinate() {
    // Generates a number from 0 to 999, and adding 1 shifts the range to 1 to 1000.
    return Math.floor(Math.random() * 1000) + 1;
}

/**
 * Calculates and applies a random position to the target element
 * constrained to a coordinate range of 1px to 1000px.
 */
function placeElementRandomly() {
    // Get random coordinates between 1 and 1000
    const randomX = getRandomCoordinate();
    const randomY = getRandomCoordinate();
    
    // Apply the random position as inline styles
    targetElement.style.left = randomX + 'px';
    targetElement.style.top = randomY + 'px';
}

// 3. Randomize the position immediately after the script loads
placeElementRandomly();

// 4. Event Listener: Fires every time the user clicks anywhere on the document
document.addEventListener('click', function(event) {
    // A. Get the cursor's coordinates (relative to the viewport)
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    // B. Get the target element's position and dimensions
    const rect = targetElement.getBoundingClientRect();

    // C. Calculate the element's center coordinates
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    // D. Apply the distance formula (Pythagorean theorem)
    const deltaX = cursorX - elementCenterX;
    const deltaY = cursorY - elementCenterY;
    
    // Calculate the straight-line distance (hypotenuse)
    const distance = Math.hypot(deltaX, deltaY); 

    // E. UPDATE THE GLOBAL VARIABLE
    lastCalculatedDistance = distance; 

    // F. Update the result display on the screen
    resultDisplay.textContent = `Distance from object: ${lastCalculatedDistance.toFixed(2)} pixels`;
    
    // Optional: Log the global variable's value for debugging
    console.log(`Global Distance Updated: ${lastCalculatedDistance.toFixed(2)}`);
    
    if (lastCalculatedDistance < 75){
    itemfound += 1
    const scoreboard = document.getElementById('score')
    scoreboard.textContent = `Score: ${itemfound}`
    placeElementRandomly();
    }
       
});