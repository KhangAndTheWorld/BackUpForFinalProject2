//Calender for Right side menu
const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});


//Text-funciton
function makeBold() {
    var textarea = document.getElementById("question");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var selectedText = textarea.value.substring(start, end);
    var newText = textarea.value.substring(0, start) + "<b>" + selectedText + "</b>" + textarea.value.substring(end);
    textarea.value = newText;
}

function makeItalic() {
    var textarea = document.getElementById("question");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var selectedText = textarea.value.substring(start, end);
    var newText = textarea.value.substring(0, start) + "<i>" + selectedText + "</i>" + textarea.value.substring(end);
    textarea.value = newText;
}

function makeUnderline() {
    var textarea = document.getElementById("question");
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var selectedText = textarea.value.substring(start, end);
    var newText = textarea.value.substring(0, start) + "<u>" + selectedText + "</u>" + textarea.value.substring(end);
    textarea.value = newText;
}

//Picture uploading
function toggleDiv() {
    var dropzoneDiv = document.getElementById("dropzone-container");
    dropzoneDiv.classList.toggle("hidden");
}

//Answer funcion
function addAnswer() {
    const container = document.getElementById('answers-container');
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('flex', 'items-center', 'mb-4');
    const inputId = container.childElementCount + 1;
    inputContainer.innerHTML = `
        <input id="disabled-radio-${inputId}" type="radio" value="${inputId}" name="correct-answer" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="disabled-radio-${inputId}" class="ms-2 text-sm font-medium text-gray-400 w-10/12">
            <input type="text" name="answers[]" rows="4" class="bg-gray-700 border border-gray-500 text-white text-base rounded-lg outline-none h-auto block w-full p-2.5" placeholder="Answer goes here">
        </label>
        <button type="button" onclick="removeAnswer(${inputId})" class="text-gray-500 hover:text-red-500 ml-2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
    `;
    container.appendChild(inputContainer);
}

function removeAnswer(id) {
    const container = document.getElementById('answers-container');
    const inputContainer = document.getElementById(`disabled-radio-${id}`).closest('.flex');
    container.removeChild(inputContainer);
}

function defineCorrectAnswer() {
    const form = document.getElementById('answers-form');
    const radios = form.elements['correct-answer'];
    let isAnyChecked = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isAnyChecked = true;
            break;
        }
    }
    if (!isAnyChecked) {
        alert('Please select a correct answer!');
        return;
    }

    let correctAnswerValue = '';
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            correctAnswerValue = radios[i].value;
            break;
        }
    }
    console.log('Correct answer is: ', correctAnswerValue);
}

//Dynamic Toolbar
document.addEventListener('DOMContentLoaded', function() {
    const toolbar = document.getElementById('toolbar');
    const questionContainer = document.getElementById('qcontainer');

    function updateToolbarPosition() {
        const rect = questionContainer.getBoundingClientRect();
        toolbar.style.top = rect.top + 'px'; // Align top of toolbar with top of question container
        toolbar.style.left = (rect.left - toolbar.offsetWidth - 10) + 'px'; // Position toolbar to the left of the question container
    }


    updateToolbarPosition(); // Initial position update
    questionContainer.forEach(container => {
        container.addEventListener('click', function() {
            updateToolbarPosition(this); // Update position based on clicked container
        });
    });

    // Initial position update for the first container
    if (questionContainer.length > 0) {
        updateToolbarPosition(questionContainer[0]);
    }
});

function addQuestion() {
    const questionContainer = document.getElementById('qcontainer');
    const newQuestion = questionContainer.cloneNode(true); // Clone the question container
    newQuestion.id = ''; // Remove the id to avoid duplicate IDs
    newQuestion.querySelector('#question').value = ''; // Clear the textarea input for the new question
    questionContainer.parentNode.insertBefore(newQuestion, questionContainer.nextSibling); // Insert the new question after the existing one
}

// Function to delete a question container
function deleteQuestion() {
    const questionContainers = document.querySelectorAll('.question-container');
    if (questionContainers.length > 1) { // Ensure there is more than one question container before removing
        questionContainers[questionContainers.length - 1].remove(); // Remove the last question container
    } else {
        alert('At least one question must remain.');
    }
}