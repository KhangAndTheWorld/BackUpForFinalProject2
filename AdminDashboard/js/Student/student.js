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

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
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


//Table API (delete when using PHP)
// document.addEventListener("DOMContentLoaded", function() {
//     fetch('https://664986254032b1331bee20a8.mockapi.io/fakeapi/student')
//         .then(response => response.json())
//         .then(data => {
//             const tableBody = document.getElementById('tableBody');
//             data.forEach((student, index) => {
//                 const row = document.createElement('tr');
//                 row.setAttribute('id', student.id)
//                 row.className = index % 2 === 0 ? 'even' : 'odd';
//                 row.addEventListener('mouseenter', function() {
//                     this.classList.add('hover:bg-gray-800');
//                 });
//                 // Format the birthday to display only the date part
//                 const formattedBirthday = new Date(student.birthday).toLocaleDateString('en-US');

//                 row.innerHTML = `
//                     <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
//                         ${student.firstName} ${student.lastName}
//                     </th>
//                     <td class="px-4 py-2 text-center uppercase">${student.studentID}</td>
//                     <td class="px-4 py-2 text-center">${student.email}</td>
//                     <td class="px-4 py-2 text-center">${formattedBirthday}</td>
//                     <td class="px-6 py-4 text-center">
//                         <a href="/AdminDashboard/html/Students/studentview.html?id=${student.id}">
//                             <button 
//                             class="text-orange-500 hover:underline font-medium text-sm text-center" type="button">
//                             Edit
//                             </button>
//                         </a>
//                      </td>
//                 `;
//                 tableBody.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// })




