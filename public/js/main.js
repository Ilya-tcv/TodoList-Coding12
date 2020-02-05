/////////////////////// LA TODO LIST ---------------------------
// Les variables
let input = document.getElementById("input-task")
let ul = document.getElementById("list all")
let body = document.querySelector("body")
let msgErreur = document.getElementsByClassName("error")[0]
let i = 0

// JOLI input
input.placeholder = "Titre de votre memo"
// Bouton ajouter un li
let ajouter = document.getElementById("add-task")
//Anti-refresh form
ajouter.setAttribute("type", "button")

function AddElem() {
  if (input.value != "") {
    // LI & TXT ----------------------------------
    var newLi = document.createElement("li")
    ul.appendChild(newLi)[0]
    let p = document.createElement('span')
    newLi.appendChild(p)
    p.innerText = input.value
    
    // reset l'input
    input.value = ""
    // enlever le message d'erreur s'il est la
    msgErreur.classList.add("display-none")

    // LI STYLES ----------------------------------
    newLi.classList.add('p-x','p-y', 'p-3');
    newLi.style.backgroundColor = 'lightgrey'
    newLi.style.fontSize = "x-large"
    newLi.style.borderRadius = "5px"

    // LI BOUTONS -------------------------------
    // création div & boutons
    var divbtn = document.createElement('div')
    divbtn.setAttribute("class", "display-flex float-right")
    var btnDone = document.createElement('i')
    btnDone.setAttribute("class", "far fa-check-circle p-x text-success")
    var btnRename = document.createElement('i')
    btnRename.setAttribute("class", "fas fa-file-signature p-x text-warning")
    var btnRemove = document.createElement('i')
    btnRemove.setAttribute("class", "fas fa-trash-alt p-x text-danger")
    
    // parent boutons
    divbtn.append(btnDone, btnRename, btnRemove)
    newLi.appendChild(divbtn)

    // fonctionalités boutons------------------------------
      // btnDone -------------------------------------------
    btnDone.addEventListener("click", () =>{
      if (newLi.style.backgroundColor == "lightgrey") {
        newLi.style.backgroundColor = "green"
        newLi.classList.add = "Done"
      } else {
        newLi.style.backgroundColor = "lightgrey"
        newLi.classList.remove = "Done"
      }
    }) 

      // RENAME ------------------------------------------
    btnRename.addEventListener("click", () =>{
        // Création input & mise en place
      var newInput = document.createElement("input")

        // Faire disparaitre l'ancien input
      newInput.value = newLi.innerText
      p.style.display = "none"
      
        // Création nouveau bouton
        var save = document.createElement('i')
        save.setAttribute("class", "fas fa-file-signature p-x text-warning")
      
      //Affichage
      divbtn.style.display ="none"
      newLi.append(newInput, save)
      
      // Deuxième clic save
      save.addEventListener("click", () =>{
        p.innerText = newInput.value
        p.style.display = "inline-block"
        divbtn.style.display = ""
        newLi.removeChild(save)
        newLi.removeChild(newInput)
      })
    })

      // REMOVE ------------------------------------------
    btnRemove.addEventListener("click", () =>{
      newLi.remove()
    }) 
    
  
    /////// ELSE FONCTION PRINCIPALE ----------------
  } else {
    // ajouter le message d'erreur
    msgErreur.classList.remove("display-none")
  }

  // LES FILTRES
    // variables
      let filtres = document.getElementById('filtre')
      let todo = document.getElementsByTagName('button')[1]
      let done = document.getElementsByTagName('button')[2]
      let all = document.getElementsByTagName('button')[3]
  
      // BOUTON A FAIRE
  todo.addEventListener("click", () =>{
  if (newLi.style.backgroundColor == "green") {
    newLi.style.display = "none"
  } else {
    newLi.style.display = ""
  }
})

    // BOUTON FAIT
  done.addEventListener("click", () =>{
    if (newLi.style.backgroundColor != "green") {
      newLi.style.display = "none"
    } else {
      newLi.style.display = ""
    }
  })

     // BOUTON ALL
  all.addEventListener("click", () =>{
    
    newLi.style.display = ""
  })
}

      // BOUTON AJOUT LI ------------------------------------------
    ajouter.addEventListener("click", () => {
      AddElem()
    })

////////////////// CODE DE BASE -----------------------------
// var form = document.getElementsByTagName('form');
// var ul = document.getElementById('list');
// var inputTask = document.getElementById('input-task');
// var error = document.getElementsByTagName('span');
// 
// var addTask = () => {
  // if(inputTask.value != ""){
    // var newLi = document.createElement('li');
    // newLi.classList.add('newLi','todo','p-x','p-y');
    // newLi.innerHTML = `<div class='row'><div class='col-sm-12'><div class='row'><div class='col-sm-9'><input type="text" class="display-none p-x" value="`+inputTask.value +`"><span class="p-x">`+ inputTask.value + `</span></div> <div class='col-sm-3'><button type='button' class='btn btn-danger'><i class='fas fa-trash'></i></button><button type='button' class='btn btn-warning'><i class='fas fa-pen'></i></button> <button type='button' class='btn btn-success'><i class='fas fa-check'></i></button></div></div></div></div>`;
    // ul.prepend(newLi);
    // inputTask.value = "";
// 
    // 
    // var btnCheck = newLi.querySelector('.fa-check').parentElement;
    // btnCheck.addEventListener('click',() => taskChecked(event.currentTarget));
    // 
    // var btnTrash = newLi.querySelector('.fa-trash').parentElement;
    // btnTrash.addEventListener('click',() => taskTrashed(event.currentTarget));
    // 
    // var btnEdit = newLi.querySelector('.fa-pen').parentElement;
    // btnEdit.addEventListener('click',() => taskEdited(event.currentTarget));
    // error[0].classList.add('display-none');
  // }
  // else{
    // error[0].classList.remove('display-none');
  // }
// };
// 
// var taskEdited = (btn) => {
  // var inputInTask = btn.parentElement.previousElementSibling.children[0];
  // var spanInTask = btn.parentElement.previousElementSibling.children[1];
  // if(inputInTask.value != ""){
// 
    // inputInTask.classList.toggle('display-none');
    // spanInTask.classList.toggle('display-none');
    // inputInTask.focus();
    // 
    // btn.firstElementChild.classList.toggle('fa-pen');
    // btn.firstElementChild.classList.toggle('fa-save');
    // 
    // btn.classList.toggle('btn-warning');
    // btn.classList.toggle('btn-success');
    // spanInTask.innerHTML = inputInTask.value;
    // var lesButtons = Array.from(document.querySelectorAll('button'));
    // lesButtons.forEach(button => {
      // if(button.style.visibility == "hidden"){
        // button.style.visibility = "visible";
        // 
        // lesButtons[0].disabled = false;
      // }else{
        // button.style.visibility="hidden";
        // lesButtons[0].style.visibility="visible";
        // lesButtons[0].disabled = true;
        // btn.style.visibility = "visible";
      // }
      // 
    // });
  // }
  // };
  // 
  // var taskChecked = (btn) => {
    // if (btn.closest('.newLi').classList.contains('todo') || btn.closest('.newLi').classList.contains('deleted') ) {
    // btn.closest('.newLi').classList.remove('todo');
    // btn.closest('.newLi').classList.remove('deleted');
    // btn.closest('.newLi').classList.add('done');
  // }else{
    // btn.closest('.newLi').classList.add('todo');
    // btn.closest('.newLi').classList.remove('done');
  // } 
// };
// var taskTrashed = (btn) => {
  // if (btn.closest('.newLi').classList.contains('todo') || btn.closest('.newLi').classList.contains('done') ) {
    // btn.closest('.newLi').classList.remove('todo')
    // btn.closest('.newLi').classList.remove('done')
    // btn.closest('.newLi').classList.add('deleted')
  // }else{
    // btn.closest('.newLi').classList.add('todo')
    // btn.closest('.newLi').classList.remove('deleted')
  // } 
// };
// 
// form[0].addEventListener('submit',()=>{
  // event.preventDefault();
  // addTask()
// });