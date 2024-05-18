//Toolbar position

// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.querySelector('.container');
//     // const toolbar1 = document.getElementById('toolbar1');
//     toolbar1.style.top = div1.offsetTop + 'px';
//     container.addEventListener('click', function(event) {
//         if (event.target.closest('content')) {
//             const toolbar1 = document.getElementById('toolbar1');
//             toolbar1.style.top = event.target.offsetTop + 'px'; // Move toolbar to the clicked div
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const toolbar1 = document.getElementById('toolbar1');

    container.addEventListener('click', function(event) {
        const clickedDiv = event.target.closest('.content');
        if (clickedDiv) {
            const toolbarTop = toolbar1.getBoundingClientRect().top;
            const divTop = clickedDiv.getBoundingClientRect().top;
            const toolbarOffset = divTop - toolbarTop;
            toolbar1.style.top = (toolbar1.offsetTop + toolbarOffset) + 'px'; // Update the toolbar position relative to the clicked div
        }
    });
});

//Generate new Question
function addDiv() {
    const newDiv = document.createElement('div');
    newDiv.className = 'content';
    const divCount = document.querySelectorAll('.content').length;
    const newDivId = `div${divCount + 1}`; // Generate a unique ID for the new div
    newDiv.id = newDivId;
    
    newDiv.innerHTML = `
    <!-- Question -->
    <div class="bg-gray-700 p-4 rounded-lg">
       <h1 id="questionTitle" class="text-white font-bold text-2xl mb-2">
          Question ${divCount}
       </h1>
       <form>
          <div class="mb-2">
             <label for="question" class="block mb-2 text-white text-base font-semibold">
                Add question
             </label>
             <textarea id="question" rows="4" class="bg-gray-700 border text-white text-base rounded-lg outline-none h-20 block w-full p-2.5" placeholder="Question goes here"></textarea>
          </div>
          <div class="inline-flex rounded-md shadow-sm" role="group">
             <button type="button" class="inline-flex items-center px-2 py-2 text-sm font-medium text-white" onclick="makeBold()">
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#ffffff" d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"/></svg>
             </button>
             <button type="button" class="inline-flex items-center px-2 py-2 text-sm font-medium text-white" onclick="makeItalic()">
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#ffffff" d="M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"/></svg>
             </button>
             <button type="button" class="inline-flex items-center px-2 py-2 text-sm font-medium text-white" onclick="makeUnderline()">
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"/></svg>
             </button>
             <button type="button" class="inline-flex items-center px-2 py-2 text-sm font-medium text-white" onclick="toggleDiv()">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
             </button>
          </div>
          <div id="dropzone-container" class="hidden mt-2">
             <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-500">
                   <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" viewBox="0 0 640 512"><path fill="#ffffff" d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                         <p class="my-2 text-sm text-white dark:text-gray-400"><span class="font-semibold">
                            Click to upload</span> or drag and drop
                         </p>
                         <p class="text-xs text-white dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                         </p>
                   </div>
                   <input id="dropzone-file" type="file" class="hidden" />
                </label>
             </div>
          </div>
       </form>
    </div>
    <div class="bg-gray-700 p-4 -mt-3 rounded-b-lg mb-4">
       <h2 class="text-white font-bold text-xl mb-2">
          Answers
       </h2>
       <form id="answers-form">
          <div id="answers-container">
             <div class="flex items-center mb-4">
                <input id="disabled-radio-1" type="radio" value="1" name="correct-answer" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="disabled-radio-1" class="ms-2 text-sm font-medium text-gray-400 w-10/12">
                   <input type="text" name="answers[]" rows="4" class="bg-gray-700 border border-gray-500 text-white text-base rounded-lg outline-none h-auto block w-full p-2.5" placeholder="Answer goes here">
                </label>
                <button type="button" onclick="removeAnswer(1)" class="text-gray-500 hover:text-red-500 ml-2 focus:outline-none">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                   </svg>
                </button>
             </div>
          </div>
          <button type="button" onclick="addAnswer()" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg">
             Add Answer
             </button>
          <button type="button" onclick="defineCorrectAnswer()" class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg ml-4">
             Choose Correct Answer
          </button>
       </form>
    </div>
    `;

    const container = document.querySelector('.container');
    container.appendChild(newDiv);
}

//Delete chosen question
function deleteDiv(event) {
    const divs = document.querySelectorAll('.content');
    const toolbarTop = document.getElementById('toolbar1').getBoundingClientRect().top;

    divs.forEach((div, index) => {
        const divTop = div.getBoundingClientRect().top;
        if (Math.abs(toolbarTop - divTop) < 5 && index !== 0) { // Exclude the first div from deletion
            div.remove(); // Remove the corresponding div
        }
    });

    // Update the text content of the remaining divs excluding the first div
    const updatedDivs = document.querySelectorAll('.content');
    updatedDivs.forEach((div, index) => {
        
        if (index !== 0) {
            const h1Tag = div.querySelector('#questionTitle');
            if (h1Tag !==0) {
                h1Tag.textContent = `Question ${index}`
            }
        }
    });
}


function moveUp(event) {
    const divs = document.querySelectorAll('.content');
    const toolbarTop = document.getElementById('toolbar1').getBoundingClientRect().top;

    divs.forEach((div, index) => {
        const divTop = div.getBoundingClientRect().top;
        if (Math.abs(toolbarTop - divTop) < 5 && index !== 0) { // Exclude the first div
            const prevDiv = divs[index - 1];
            if (prevDiv) {
                div.parentNode.insertBefore(div, prevDiv); // Move the div up
                updateDivTextContent(div, prevDiv);
            }
        }
    });
}

function moveDown(event) {
    const divs = document.querySelectorAll('.content');
    const toolbarTop = document.getElementById('toolbar1').getBoundingClientRect().top;

    for (let i = divs.length - 1; i >= 0; i--) {
        const div = divs[i];
        const divTop = div.getBoundingClientRect().top;
        if (Math.abs(toolbarTop - divTop) < 5 && i !== divs.length - 1 && i !== 0) { // Exclude the last and first div
            const nextDiv = divs[i + 1];
            if (nextDiv) {
                div.parentNode.insertBefore(nextDiv, div); // Move the div down
                updateDivTextContent(div, nextDiv);
            }
        }
    }
}

function updateDivTextContent() {
    const updatedDivs = document.querySelectorAll('.content');
    updatedDivs.forEach((div, index) => {
        if (index !== 0) {
            div.textContent = `${index}`; 
        }
    });
}