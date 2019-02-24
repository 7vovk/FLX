const empty = 0;
const one = 1;
const max = 10;
const enter = 13;
let check = getCl('chk');
let inp = document.forms['inputForm'];
let tl = document.forms['tasksList'];

function getId(id) {
    return document.getElementById(id);
}
function getCl(cl) {
    return document.getElementsByClassName(cl);
}

//Check if input empty
inp.addAction.addEventListener('keyup', checkIfEmpty);
function checkIfEmpty() {

    if (inp.addAction.value.length === empty) {
        inp.addBtn.disabled = true;
    } else {
        inp.addBtn.disabled = false;
    }
}

//Add task:
inp.addEventListener('keypress', function (event) {
    if (event.keyCode === enter) {
        event.preventDefault();
        inp.addBtn.click(addAct);
    }
});

inp.addBtn.addEventListener('click', addAct);
function addAct() {

    getId('tasksList').innerHTML += '<div class="task" draggable="true">\n<label>\n' +
        '<input type="checkbox" class="chk" name="chk">\n' +
        '<i class="material-icons unchecked">check_box_outline_blank</i>\n' +
        '<i class="material-icons checked">check_box</i>\n</label>\n<p>' + inp.addAction.value + '</p>\n' +
        '<label>\n<input type="checkbox" class="rmv" name="rmv">\n' +
        '<i class="material-icons remove">delete</i>\n</label>\n</div>';
    inp.addAction.value = '';
    inp.addBtn.disabled = true;

    for (let i = 0; i < tl.chk.length; i++) {
        if (check[i].style.pointerEvents === 'none') {
            check[i].checked = true;
        } else if (check[i].checked) {
            check[i].style.pointerEvents = 'none';
        }
        let elems = document.querySelectorAll('#tasksList .task');
        [].forEach.call(elems, dragNDropHandlers);
    }
    if (getId('tasksList').children.length === max) {
        inp.addAction.placeholder = '';
        getId('info').style.visibility = 'visible';
        inp.addAction.disabled = true;
        inp.addBtn.disabled = true;
    }

}


//Remove task:
tl.addEventListener('change', removeAct);
function removeAct() {

    let rmv = tl.rmv;
    let task = getCl('task');
    let remove = getCl('remove');

    for (let i = 0; i < remove.length; i++) {
        if (remove.length === one) {
            rmv.parentNode.parentNode.remove(task);
        } else if (remove.length <= max) {
            if (rmv[i].checked) {
                rmv[i].parentNode.parentNode.remove(task[i]);
            }
            getId('info').style.visibility = 'hidden';
            inp.addAction.disabled = false;
            inp.addAction.placeholder = 'Add New Action';
        }
    }
    return false;
}

//Check checkboxes
tl.addEventListener('change', checkChkbx);
function checkChkbx() {

    if (tl.children.length === empty) {
        return false;
    } else {
        for (let i = 0; i < tl.chk.length; i++) {
            if (check[i].style.pointerEvents === 'none') {
                if (getId('tasksList').children.length === max) {
                    inp.addAction.placeholder = '';
                    getId('info').style.visibility = 'visible';
                    inp.addAction.disabled = true;
                    inp.addBtn.disabled = true;
                }
                check[i].checked = true;
            } else if (check[i].checked) {
                if (getId('tasksList').children.length === max) {
                    inp.addAction.placeholder = '';
                    getId('info').style.visibility = 'visible';
                    inp.addAction.disabled = true;
                    inp.addBtn.disabled = true;
                }
                check[i].style.pointerEvents = 'none';
            }
        }
    }
}

//Drag and drop
function dragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
}

let dragElem = null;

function dragStart(e) {

    dragElem = this;
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function drop(e) {

    if (dragElem !== this) {
        dragElem.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    for (let i = 0; i < tl.chk.length; i++) {
        if (check[i].style.pointerEvents === 'none') {
            check[i].checked = true;
        } else if (check[i].checked) {
            check[i].style.pointerEvents = 'none';
        }
    }
    return false;
}

function dragNDropHandlers(elem) {
    elem.addEventListener('dragstart', dragStart, false);
    elem.addEventListener('dragover', dragOver, false);
    elem.addEventListener('drop', drop, false);
}