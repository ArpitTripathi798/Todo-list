const addTaskBtn = document.querySelector("button");
const addTaskInput = document.querySelector("input");
const taskList = document.querySelector(".taskList");

addTaskBtn.addEventListener("click", function(event){
    if(addTaskInput.value !== ""){

        // Create a p tag and append it to task list
        let task = document.createElement("p");
        task.innerText = addTaskInput.value;
        taskList.appendChild(task);

        // Create Xmark and append to P tag
        let xmark = document.createElement("i");
        xmark.classList.add('fa-solid', 'fa-xmark', 'delete');
        task.appendChild(xmark);

        addTaskInput.value = "";
    }
})

taskList.addEventListener("click", function(event){
    if(event.target.nodeName === "I"){
        let del = event.target;
        del.parentElement.remove();
    }
    else {
        console.log("Don't Delete Element!");
    }
})