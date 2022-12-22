let item, clonedItem, totalCost, sumi;
onmousedown = function (e) {
    item = e.target.closest(".item");
    if (item && !item.classList.contains("clone")) {
        placed = false;
        totalCost = document.getElementById("totalCost");
        sumi = document.getElementById("sumi");
        clonedItem = item.cloneNode(true);
        clonedItem.ondragstart = function (e) {e.preventDefault();}
        clonedItem.classList.add("clone");
        clonedItem.style.position = "absolute";
        document.body.append(clonedItem);
        moveAt(event.clientX, event.clientY);
    }
}

function moveAt(pageX, pageY) {
    clonedItem.style.left = pageX - clonedItem.offsetWidth / 2 + 'px';
    clonedItem.style.top = pageY - clonedItem.offsetHeight / 2 + 'px';
}
onmousemove = function (e) {if (clonedItem && !placed) moveAt(e.pageX, e.pageY);}
onmouseup = function (e) {
    if (clonedItem && !placed) {
        if (placeable) {
            clonedItem.getElementsByTagName("img")[0].remove();
            clonedItem.classList.remove("item");
            totalCost.innerHTML = parseInt(totalCost.innerHTML) + parseInt(clonedItem.getElementsByClassName("cost")[0].innerHTML) + "$";
            clonedItem.style.position = "static";
            sumi.append(clonedItem);
            placed = true;
        } 
        else clonedItem.remove();
    }
}
let placeable = false,
    placed = false;
