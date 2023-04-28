const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const prioritySelect = document.getElementById('priority');
const saveButton = document.getElementById('save');
const list = document.getElementById('todoList');

saveButton.addEventListener('click', function () {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const priority = prioritySelect.value;
    const li = document.createElement('li');
    const buttonDelete = document.createElement('button');
    const buttonImg = document.createElement('img');
    const checkbox = document.createElement('input');

    if (title === '') {
        return;
    }
    if (description === '') {
        return;
    }

    li.innerText = title + ' ' + description;
    buttonImg.src = 'https://cdn-icons-png.flaticon.com/512/216/216658.png';

    buttonDelete.appendChild(buttonImg);
    buttonDelete.addEventListener('click', function () {
        if (!li.classList.contains('done')) {
            return;
        }
        li.remove();
    });

    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        li.classList.toggle('done')
    });

    li.appendChild(buttonDelete);
    li.classList.add(priority);
    li.appendChild(checkbox);
    list.appendChild(li);

    titleInput.value = '';
    descriptionInput.value = '';
});

