let tasksdiv = document.getElementsByClassName("tasks")[0];
function addtask() {
  let addtask = document.getElementsByTagName("input")[0];
  let gettask = addtask.value;

  if (addtask.value == "") {
    alert("enter task");
  } else {
    let tickmark = document.createElement("img");
    tickmark.setAttribute("src", "./images/cricle.png");
    tickmark.style.width = "30px";
    tickmark.style.margin = "15px 5px 0px";
    tickmark.addEventListener("click", () => {
      tickmark.setAttribute("src", "./images/tickcicle.png");
      creatediv.style.textDecoration = "line-through";
      console.log(valueoftask);
      tickmark.addEventListener("click", () => {
        tickmark.setAttribute("src", "./images/cricle.png");
      });
    });

    let creatediv = document.createElement("span");
    let valueoftask = (creatediv.innerHTML = gettask);
    creatediv.style.backgroundColor = "rgb(221, 223, 89";
    creatediv.style.display = "Inline-block";
    creatediv.style.padding = "10px";
    creatediv.style.width = "200px";
    creatediv.style.margin = "5px 0px";

    let createbtn = document.createElement("button");
    createbtn.innerHTML = "Delete";
    createbtn.style.padding = "10px";
    createbtn.style.backgroundColor = "red";

    let createbr = document.createElement("br");

    tasksdiv.appendChild(tickmark);
    tasksdiv.appendChild(creatediv);
    tasksdiv.appendChild(createbtn);
    tasksdiv.appendChild(createbr);
    tasksdiv.style.padding = "15px";
    tasksdiv.style.backgroundColor = "white";
    createbtn.addEventListener("click", () => {
      creatediv.style.display = "none";
      createbtn.style.display = "none";
      tickmark.style.display = "none";
    });
    addtask.value = "";
  }
}

// function deleteall() {
//   tasksdiv.removeChildChild(tickmark);
//   tasksdiv.removeChildChild(creatediv);
//   tasksdiv.removeChildChild(createbtn);
//   tasksdiv.removeChildChild(createbr);
// }

// let forms=document.forms[0];
// let a=[];
// forms.addEventListener("submit",(event)=>{
//   event.preventDefault();
//   let input1=document.getElementsByTagName("input")[0];
//   let tasks=event.target[0].value;
//   console.log(tasks);
//   if(tasks==""){
//     alert("Enter your task")
//   }else{
//     a.push(tasks)
//   }
//   console.log(a);
//   input1.value="";
//   for(i=0;i<a.length;i++){
//     let listoftask=document.createElement("li");
//     listoftask.innerHTML=a[i];
//     console.log(a[i]);
//     let ulist=document.getElementsByTagName("ul")[0];
//     createdone=document.createElement("button")
//     createdone.innerHTML="Done";
//     createdelete=document.createElement("button");
//     createdelete.innerHTML="Delete";
//     ulist.appendChild(listoftask);
//     listoftask.appendChild(createdone);
//     listoftask.appendChild(createdelete);
//     createdone.addEventListener("click",()=>{
//       listoftask.style.textDecoration="line-through";
//     })
//     createdelete.addEventListener("click",()=>{
//       listoftask.style.display="none";
//     })
//   }

// })
