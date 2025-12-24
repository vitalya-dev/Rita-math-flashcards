// Variable to track which card we are currently showing
let currentCardIndex = 0;

// Get references to the HTML elements we need to manipulate
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const counterText = document.getElementById('counter');
const cardElement = document.getElementById('flashcard');

// Function to update the card content based on the current index
function updateCard() {
    // 1. Get the current card data
    const card = flashcardData[currentCardIndex];

    // 2. Update the text on the front and back
    questionText.textContent = card.question;
    answerText.textContent = card.answer;

    // 3. Update the counter (e.g., "1 / 67")
    counterText.textContent = `${currentCardIndex + 1} / ${flashcardData.length}`;

    // 4. Ensure the card is showing the front (remove flip class)
    cardElement.classList.remove('is-flipped');
}

// Function to toggle the flip state
function flipCard() {
    cardElement.classList.toggle('is-flipped');
}

// Function to go to the next card
function nextCard() {
    // Increment index. If we are at the end, loop back to 0.
    if (currentCardIndex < flashcardData.length - 1) {
        currentCardIndex++;
    } else {
        currentCardIndex = 0; // Loop back to start
    }
    updateCard();
}

// Function to go to the previous card
function prevCard() {
    // Decrement index. If we are at 0, loop to the last card.
    if (currentCardIndex > 0) {
        currentCardIndex--;
    } else {
        currentCardIndex = flashcardData.length - 1; // Loop to end
    }
    updateCard();
}

// Initialize the first card when the page loads
updateCard();