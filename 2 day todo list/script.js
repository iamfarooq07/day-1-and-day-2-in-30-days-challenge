const addList = document.getElementById('listAdd');
const inputFeild = document.getElementById('task');
const btn = document.getElementById('addBtn');
const addFrom = document.getElementById('from');

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let editIndex = null;

renderTask();

addFrom.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = inputFeild.value.trim();
    if (!input) {
        return
    }

    if (editIndex !== null) {
        todos[editIndex] = inputFeild.value;
        editIndex = null;
    } else {
        todos.push(input);
    }


    saveTodos();
    renderTask();

    inputFeild.value = "";

})
function renderTask() {

    addList.innerHTML = "";

    todos.forEach((todo) => {
        addList.innerHTML += `  <li class="lists flex justify-between items-center">
                <span class="text-xl sm:text-2xl md:text-3xl font-bold">${todo}</span>
                <div class="flex space-x-1">
                    <i class="fas fa-edit edit text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer"></i>
                    <i class="far fa-trash-alt delete text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer"></i>
                </div>
            </li>`;
    });
};

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

addList.addEventListener('click', (e) => {

    localStorage.setItem("todos", JSON.stringify(todos));

    // console.log(e.target);
    if (e.target.classList.contains('fa-trash-alt')) {
        const li = e.target.closest("li");
        const index = Array.from(addList.children).indexOf(li);
        todos.splice(index, 1);
        renderTask();
        saveTodos();
    }


    if (e.target.classList.contains('edit')) {
        const li = e.target.parentElement.parentElement;
        const span = li.querySelector('span');

        inputFeild.value = span.innerText;

        const child = addList.children;

        for (let i = 0; i < child.length; i++) {

            if (li == child[i]) {
                editIndex = i;
            };
        };

    };
});
