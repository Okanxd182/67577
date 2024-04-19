// script.js

// Variable to store dragged term
let draggedTerm = null;

// Event listener for terms (buttons)
const terms = document.querySelectorAll('.term');
terms.forEach(term => {
    term.addEventListener('dragstart', (event) => {
        draggedTerm = event.target;
    });
});

// Event listener for images to handle drop
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('dragover', (event) => {
        event.preventDefault(); // Prevent default behavior to allow drop
    });

    item.addEventListener('drop', (event) => {
        event.preventDefault(); // Prevent default behavior to allow drop
        if (draggedTerm) {
            // Clone the dragged button and append it to the image container
            const imageContainer = event.target.querySelector('.image-container');
            const clonedButton = draggedTerm.cloneNode(true);
            clonedButton.removeAttribute('draggable'); // Remove draggable attribute from the cloned button
            clonedButton.classList.remove('term'); // Remove term class from the cloned button
            clonedButton.classList.add('cloned-button'); // Add class for styling
            imageContainer.appendChild(clonedButton);
            draggedTerm.remove(); // Remove the original button
            draggedTerm = null; // Reset dragged term
        }
    });
});
