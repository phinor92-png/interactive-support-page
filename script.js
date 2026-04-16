// Support contacts database
const supportContacts = {
    broken: {
        technical: { urgent: [], medium: [], low: [] },
        physical: { urgent: [], medium: [], low: [] },
        network: { urgent: [], medium: [], low: [] },
        security: { urgent: [], medium: [], low: [] },
        data: { urgent: [], medium: [], low: [] }
    },
    notWorking: {
        technical: { urgent: [], medium: [], low: [] },
        physical: { urgent: [], medium: [], low: [] },
        network: { urgent: [], medium: [], low: [] },
        security: { urgent: [], medium: [], low: [] },
        data: { urgent: [], medium: [], low: [] }
    },
    inactive: {
        technical: { urgent: [], medium: [], low: [] },
        physical: { urgent: [], medium: [], low: [] },
        network: { urgent: [], medium: [], low: [] },
        security: { urgent: [], medium: [], low: [] },
        data: { urgent: [], medium: [], low: [] }
    },
    slow: {
        technical: { urgent: [], medium: [], low: [] },
        physical: { urgent: [], medium: [], low: [] },
        network: { urgent: [], medium: [], low: [] },
        security: { urgent: [], medium: [], low: [] },
        data: { urgent: [], medium: [], low: [] }
    },
    other: {
        technical: { urgent: [], medium: [], low: [] },
        physical: { urgent: [], medium: [], low: [] },
        network: { urgent: [], medium: [], low: [] },
        security: { urgent: [], medium: [], low: [] },
        data: { urgent: [], medium: [], low: [] }
    }
};

function setupOptionButtons() {
    // logic to set up option buttons based on context
}

function nextQuestion() {
    // logic to show the next question in the flow
}

function previousQuestion() {
    // logic to show the previous question in the flow
}

function updateStepIndicator(currentStep) {
    // logic to update UI step indicators
}

function showQuestion(question) {
    // logic to display a question
}

function showResults(results) {
    // logic to show results based on user input
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Copied to clipboard');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

function resetForm() {
    // logic to reset the support form
}