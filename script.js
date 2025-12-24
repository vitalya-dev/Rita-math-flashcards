// Variable to track which card we are currently showing
let currentCardIndex = 0;

// Get references to the HTML elements we need to manipulate
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const answerImage = document.getElementById('answer-image'); // <--- New reference
const counterText = document.getElementById('counter');
const cardElement = document.getElementById('flashcard');

// Function to update the card content based on the current index
function updateCard() {
    // 1. Get the current card data
    const card = flashcardData[currentCardIndex];

    // 2. Update the text on the front and back
    questionText.textContent = card.question;
    answerText.textContent = card.answer;

    // 3. Check if there is an image
    if (card.image) {
        answerImage.src = card.image;       // Set the image source
        answerImage.style.display = 'block'; // Make it visible
    } else {
        answerImage.style.display = 'none';  // Hide it if no image exists
        answerImage.src = '';                // Clear source
    }

    // 4. Update the counter
    counterText.textContent = `${currentCardIndex + 1} / ${flashcardData.length}`;

    // 5. Ensure the card is showing the front (remove flip class)
    cardElement.classList.remove('is-flipped');
}

// Function to toggle the flip state
function flipCard() {
    cardElement.classList.toggle('is-flipped');
}

// Function to go to the next card
function nextCard() {
    if (currentCardIndex < flashcardData.length - 1) {
        currentCardIndex++;
    } else {
        currentCardIndex = 0;
    }
    updateCard();
}

// Function to go to the previous card
function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
    } else {
        currentCardIndex = flashcardData.length - 1;
    }
    updateCard();
}

// Initialize the first card when the page loads
updateCard();