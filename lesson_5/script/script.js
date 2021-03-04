const inputElem = document.getElementById('input');
const btnElem = document.getElementById('btn');
const outputElem = document.getElementById('output');

function readFromLocalStorage(){
	return JSON.parse(localStorage.getItem('todo_list') || '[]');
}

function writeToLocalStorage(array){
	localStorage.setItem('todo_list', JSON.stringify(array))
}

function render(){
	outputElem.innerText = '';

	todo_list.forEach(elem=>{
		const liElem = document.createElement('li');
		liElem.innerText = elem;
		outputElem.appendChild(liElem);
	})
}

function addTodo(){
	const value = inputElem.value;
	todo_list.push(value);
	writeToLocalStorage(todo_list);
	render();
}


const todo_list = readFromLocalStorage();
render();

btn.addEventListener('click', addTodo);