let listOfProducts;

const listContainer = document.querySelector(".listContainer")
const input = document.querySelector(".inputField")

function loadProducts() {
    fetch("listitems.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            listOfProducts = data;
            showList();
        });
}
loadProducts()

const ul = document.createElement("ul")
ul.setAttribute("class", "ulClass")

function showList() {
    ul.innerHTML = ""

    listOfProducts.forEach(product => {

        const li = document.createElement("li")
        li.setAttribute("class", "listItem")

        const trashIcon = document.createElement("i")
        trashIcon.setAttribute("class", "fa-regular fa-trash-can")
        const trash = document.createElement("a")

        trash.setAttribute("class", "trash")
        trash.appendChild(trashIcon)
        
        li.innerHTML = product
        li.appendChild(trash)
        ul.appendChild(li)
        listContainer.appendChild(ul)

        trash.addEventListener("click", () => {
            removeItem()})
    });
    
    
}





function addItem() {

    listOfProducts.push(input.value)
    showList()
    input.value = ""

/*     trash.addEventListener("click", () =>{
        console.log("hej")
    }) */
}

function removeItem() {
    console.log("hej")

}