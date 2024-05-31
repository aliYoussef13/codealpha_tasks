document.getElementById('open-cover').addEventListener('click', function() {
    const cover = document.getElementById('cover');
    const cover2 = document.getElementById('cover2');
    const cover3 = document.getElementById('cover3');
    const cover4 = document.getElementById('cover4');
    const cover5 = document.getElementById('cover5');
    const cover6 = document.getElementById('cover6');
    const container = document.getElementById('container');

    cover.style.transform = 'rotateY(-180deg)';
    setTimeout(() => {
        cover2.style.display = 'none';
        cover3.style.display = 'none';
        cover4.style.display = 'none';
        cover5.style.display = 'none';
        cover6.style.display = 'none';
        container.classList.add('open');
    }, 400); 
});

document.getElementById('close-cover').addEventListener('click', function() {
    const cover = document.getElementById('cover');
    const cover2 = document.getElementById('cover2');
    const cover3 = document.getElementById('cover3');
    const cover4 = document.getElementById('cover4');
    const cover5 = document.getElementById('cover5');
    const cover6 = document.getElementById('cover6');
    const container = document.getElementById('container');

    container.classList.remove('open');
    setTimeout(() => {
        cover.style.transform = 'rotateY(0deg)';
        setTimeout(() => {
            cover2.style.display = 'block';
            cover3.style.display = 'block';
            cover4.style.display = 'flex';
            cover5.style.display = 'block';
            cover6.style.display = 'block';
        }, 450); 
    }, 0);
});

document.getElementById('add-button').addEventListener('click', function() {
    let todoInput = document.getElementById('todo-input');
    let todoText = todoInput.value.trim();

    if (todoText !== '') {
        let li = document.createElement('li');
        li.textContent = todoText;

        let doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', function() {
            li.classList.toggle('done');
        });

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        document.getElementById('todo-list').appendChild(li);

        todoInput.value = '';
        todoInput.focus();
    }
});
