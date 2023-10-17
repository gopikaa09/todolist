let inputform = document.forms[0];
let taskinput = document.getElementById("taskinput");
let listtask = document.getElementsByTagName("ul")[0];
let tasksarray = [];

let showingtask = () => {
  listtask.innerHTML = "";
  tasksarray.forEach((value, index) => {
    let li_task = document.createElement("li");
    li_task.innerText = value;
    li_task.style.margin="5px"

    let done_btn = document.createElement("button");
    done_btn.innerText = "Done";
    done_btn.innerHTML='<i class="fa fa-check-square-o"></i>'
    done_btn.style.margin="5px"
    done_btn.addEventListener("click", () => {
      li_task.style.textDecoration = "line-through";
    });

    let delete_button = document.createElement("button");
    delete_button.innerHTML='<i class="fa fa-trash"></i>'
    delete_button.style.margin="5px"
    delete_button.addEventListener("click", () => {
      tasksarray.splice(index, 1);
      showingtask();
    });
    let edit_button = document.createElement("button");
    edit_button.innerHTML = '<i class="fa fa-edit"></i>';
    edit_button.style.margin="5px"
    edit_button.addEventListener("click", () => {
      let update_task = prompt("Enter new task", value);
      if (update_task != "") {
        tasksarray[index] = update_task;
        showingtask();
      }
    });

    li_task.appendChild(edit_button);
    li_task.appendChild(done_btn);
    li_task.appendChild(delete_button);
    listtask.appendChild(li_task);
  });
};

inputform.addEventListener("submit", (event) => {
  event.preventDefault();

  let taskvalue = taskinput.value;
  console.log(taskvalue);
  if (taskvalue === "") {
    alert("Please enter your task");
    return;
  }

  tasksarray.push(taskvalue);
  taskinput.value = "";
  listtask.style.display="block"
  console.log(tasksarray);
  showingtask();
});
