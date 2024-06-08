document.getElementById('note-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = noteInput.value;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        noteList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    noteList.appendChild(li);

    // Clear the input
    noteInput.value = '';
});
