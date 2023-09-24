// Get references to HTML elements
const UserQuestion = document.getElementById('UserQuestion');
const decisionButton = document.getElementById('decisionButton');
const decisionText = document.getElementById('decisionText');

// Add an event listener to the button
decisionButton.addEventListener('click', () => {
    // Get the user's question
    const userQuestion = UserQuestion.value;

    // Check if the question is empty
    if (!userQuestion) {
        decisionText.textContent = 'Please enter a question.';
    } else {
        // random number between 1 and 10
        const randomNum = Math.floor(Math.random() * 10);

        // switch statement to determine the answer
        let answer= ''
        switch (randomNum) {
            case 1:
                answer = 'Yes';
                break;
            case 2:
                answer = 'No';
                break;
            case 3:
                answer = 'How are you?';
                break;
            case 4:
                answer = 'I am good.';
                break;
            case 5:
                answer = 'How`s your life going?';
                break;
            case 6:
                answer = 'Lets do it.';
                break;
            default:
                answer = 'Try again later.';
        }

        // Display the result
        decisionText.textContent = `Question: ${userQuestion}\nAnswer: ${answer}`;
    }
})
