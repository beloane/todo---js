var todos = [
    {
        id: 0,
        title: 'Todo 0',
        completed: false
    },
    {
        id: 1,
        title: 'Todo 1',
        completed: false
    },
    {
        id: 2,
        title: 'Todo 2',
        completed: false
    },
    {
        id: 3,
        title: 'Todo 3',
        completed: false
    },
    {
        id: 4,
        title: 'Todo 4',
        completed: false
    }


];


loadTodosHtml();

function getTodoItemHtml(item,istrue) {

    var checked = '';

    if (item.completed)
        checked = 'checked';

    return ' <div class="todo"' + ' id="todo-group-' + item.id + '">\n' +
        '        <input ' + checked + ' id="todo-' + item.id + '" type="checkbox" onclick="onCompleted(' + item.id+','+istrue+')">\n' +
        '        <label for="todo-' + item.id + '">' + item.title + '</label>\n' +
        '        <button onclick="deleteTodo(' + item.id + ')">X</button>\n' +
        '    </div>'


}


function deleteTodo(item_id) {

    for (var i = todos.length - 1; i >= 0; i--) {
        if (todos[i].id === item_id) {
            todos.splice(i, 1);
        }
    }
    // todos = todos.filter(function(item) {
    //     return item.id !== item_id
    // })
    loadDeletedAlert();
    loadTodosHtml();
}

function addTodosOnKey(event) {
    if (event.which == 13 || event.keyCode == 13) {
        addTodos();
    }
}

function addTodos() {
    var x = document.getElementById("myText").value;
    if (x === '') {
        loadWarningAlert();
    } else {
        var lastId = todos[todos.length - 1].id;
        todos.push({id: lastId + 1, title: x, completed: false});
        loadTodosHtml();
        loadInfoAlert();
        document.getElementById("myText").value = "";
    }
}

function loadTodosHtml() {

    var html = '';

    todos.forEach(function (item) {
        if (!item.completed) {
            html += getTodoItemHtml(item,true)
        }
    });

    document.querySelector('.notDone').innerHTML = html;

    loadDoneHtml();
}

function loadDoneHtml() {
    var htmlDone = '';

    todos.forEach(function (item) {
        if (item.completed)
            htmlDone += getTodoItemHtml(item,false)
    });

    document.querySelector('.Done').innerHTML = htmlDone;

}

function onCompleted(item_id, isTrue) {
    todos.find(x => x.id === item_id).completed = isTrue;
    loadMovedAlert();
    loadTodosHtml();

}



function loadInfoAlert() {

    document.querySelector('.alerts').innerHTML = getAlertInfo();

}

function loadWarningAlert() {

    document.querySelector('.alerts').innerHTML = getAlertWarning();
}

function loadDeletedAlert() {

    document.querySelector('.alerts').innerHTML = getAlertDeleted();

}

function loadMovedAlert() {

    document.querySelector('.alerts').innerHTML = getAlertMoved();

}

function getAlertInfo() {
    return '<div id="Info">\n' +
        '        <strong>Info!</strong>   New To do added.\n' +
        '    </div>'
}

function getAlertDeleted() {
    return '<div id="Deleted">\n' +
        '        <strong>Danger!</strong>   To do deleted.\n' +
        '    </div>'
}

function getAlertWarning() {
    return '<div id="Warning">\n' +
        '        <strong>Warning!</strong> Nothing to add.\n' +
        '    </div>'
}

function getAlertMoved() {
    return '<div id="Moved">\n' +
        '        <strong>Item moved!</strong> Done list updated.\n' +
        '    </div>'
}


// for (var i=0; i<todos.length;i++)
// {
//     console.log(todos[i])
// }

// for(var i in todos)
// {
//     console.log(todos[i])
// }