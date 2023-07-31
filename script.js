let body = document.body
let background = document.querySelector('.background')
let iconLIghtMode = document.querySelector('.icon')
let todo = document.querySelector('.todo')
let todoCreate = document.querySelector('#todoCreate')
let todoList = document.querySelector('ul')
let all = document.querySelector('#all')
let active = document.querySelector('#active')
let listItemDups = document.createElement('li')
listItemDups.draggable = true
listItemDups.innerHTML = todoCreate.value
let dups = document.querySelectorAll('.completed')
let list = document.querySelectorAll('li')
let deleteEle = document.createElement('button')
deleteEle.classList.add('deleteBtn')
let deleteBtn = document.querySelector('.deleteBtn')
let itemsLeft = document.querySelector('#itemsLeft')
let clearButton = document.querySelector('.clear')

iconLIghtMode.addEventListener('click', function () {
    iconLIghtMode.classList.toggle('darkMode')
    body.classList.toggle('darkMode')
    background.classList.toggle('darkMode')
    todo.classList.toggle('darkMode')
    if (iconLIghtMode.className === 'icon darkMode') {
        iconLIghtMode.src = 'images/icon-sun.svg'
    } else {
        iconLIghtMode.src = 'images/icon-moon.svg'
    }
})

todoCreate.addEventListener('click', function () {
    if (todoCreate.value.length > 0) {
        let listItemDups = document.createElement('li')
        listItemDups.draggable = true
        listItemDups.innerHTML = todoCreate.value
        todoList.appendChild(listItemDups)
        todoCreate.value = ''
        let list = document.querySelectorAll('li')
        let dups = document.querySelectorAll('.completed')
        itemsLeft.innerHTML = list.length - dups.length
        addEventsDragAndDrop(listItemDups)

        active.addEventListener('click', function () {
            list.forEach(listt => {
                if (listt.className !== 'completed') {
                    listt.style.display = 'flex'
                }
                if (listt.className === 'completed') {
                    listt.style.display = 'none'
                }
            });
        
            if (iconLIghtMode.className === 'icon darkMode') {
                all.style.color = '#5B5E7E'
                active.style.color = '#3A7CFD'
                completed.style.color = '#5B5E7E'
            } else {
                all.style.color = '#9495A5'
                active.style.color = '#3A7CFD'
                completed.style.color = '#9495A5'
            }
        })
        
        all.addEventListener('click', function () {
            list.forEach(listt => {
                listt.style.display = 'flex'
            });
        
            if (iconLIghtMode.className === 'icon darkMode') {
                all.style.color = '#3A7CFD'
                active.style.color = '#5B5E7E'
                completed.style.color = '#5B5E7E'
            } else {
                all.style.color = '#3A7CFD'
                active.style.color = '#9495A5'
                completed.style.color = '#9495A5'
            }
        
        })
        completed.addEventListener('click', function () {
            list.forEach(listt => {
                if (listt.className == 'completed') {
                    listt.style.display = 'flex'
                }
            });
        
            list.forEach(listt => {
                if (listt.className !== 'completed') {
                    listt.style.display = 'none'
                }
            });
        
            if (iconLIghtMode.className === 'icon darkMode') {
                all.style.color = '#5B5E7E'
                active.style.color = '#5B5E7E'
                completed.style.color = '#3A7CFD'
            } else {
                all.style.color = '#9495A5'
                active.style.color = '#9495A5'
                completed.style.color = '#3A7CFD'
            }
        
        })
    }
})

list.forEach(listt => {
    listt.addEventListener('mouseenter', function () {
        listt.append(deleteEle)
    })
    listt.addEventListener('mouseleave', function () {
        deleteEle.remove()
    })
    
});

deleteEle.addEventListener('click', function () {
    let div = this.parentElement
    div.remove()
})

todoList.addEventListener('click', function (e) {
    e.target.classList.toggle('completed')
    if (todoList.className === 'completed') {
        todoList.classList.remove('completed')
    }
    let dups = document.querySelectorAll('.completed')
    let list = document.querySelectorAll('li')
    list.forEach(listt => {
        listt.addEventListener('mouseenter', function () {
            listt.append(deleteEle)
            deleteEle.classList.remove('completed')
        })
        listt.addEventListener('mouseleave', function () {
            deleteEle.remove()
        })
    });
    deleteEle.addEventListener('click', function () {
        let div = this.parentElement
        div.remove()
    })
    itemsLeft.innerHTML = list.length - dups.length
    clearButton.addEventListener('click', function () {
        if (e.target.className === 'completed') {
            dups.forEach(dup => {
                dup.remove(dups.length)
            });
        }
        if (e.target.className !== 'completed') {
            list.forEach(listt => {
                todoList.append(listt)
            });
            dups.forEach(dup => {
                dup.remove(dups.length)
            });
        }
    })
});

clearButton.addEventListener('click', function () {
    list.forEach(listt => {
        if (listt.className === 'completed') {
            dups.forEach(dup => {
                dup.remove(dups.length)
            });
        }

        if (listt.className !== 'completed') {
            todoList.append(listt)
            dups.forEach(dup => {
                dup.remove(dups.length)
            });
        }
    });
})

active.addEventListener('click', function () {
    list.forEach(listt => {
        if (listt.className !== 'completed') {
            listt.style.display = 'flex'
        }
        if (listt.className === 'completed') {
            listt.style.display = 'none'
        }
    });

    if (iconLIghtMode.className === 'icon darkMode') {
        all.style.color = '#5B5E7E'
        active.style.color = '#3A7CFD'
        completed.style.color = '#5B5E7E'
    } else {
        all.style.color = '#9495A5'
        active.style.color = '#3A7CFD'
        completed.style.color = '#9495A5'
    }
})

all.addEventListener('click', function () {
    list.forEach(listt => {
        listt.style.display = 'flex'
    });

    if (iconLIghtMode.className === 'icon darkMode') {
        all.style.color = '#3A7CFD'
        active.style.color = '#5B5E7E'
        completed.style.color = '#5B5E7E'
    } else {
        all.style.color = '#3A7CFD'
        active.style.color = '#9495A5'
        completed.style.color = '#9495A5'
    }

})
completed.addEventListener('click', function () {
    list.forEach(listt => {
        if (listt.className == 'completed') {
            listt.style.display = 'flex'
        }
    });

    list.forEach(listt => {
        if (listt.className !== 'completed') {
            listt.style.display = 'none'
        }
    });

    if (iconLIghtMode.className === 'icon darkMode') {
        all.style.color = '#5B5E7E'
        active.style.color = '#5B5E7E'
        completed.style.color = '#3A7CFD'
    } else {
        all.style.color = '#9495A5'
        active.style.color = '#9495A5'
        completed.style.color = '#3A7CFD'
    }

})
// let dragSrcEl = document.querySelectorAll('li')
function dragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    if (e.target.className === 'completed') {
        e.preventDefault()
    }
};

function dragLeave(e) {
    e.stopPropagation();
}

function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function dragDrop(e) {
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);

}

[].forEach.call(list, function (item) {
    addEventsDragAndDrop(item);
});

itemsLeft.innerHTML = list.length - dups.length
all.style.color = '#3A7CFD'