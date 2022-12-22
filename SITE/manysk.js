"use strict";

document.addEventListener('DOMContentLoaded', () => {

    // Первое задание 

    const shopCart = document.querySelector('.shop__cart');
    const shopCartDelete = shopCart.querySelector('.shop__cart-delete');
    const shopCartChange = shopCart.querySelector('.shop__cart-change');
    const shopCartSortUp = shopCart.querySelector('.shop__cart-sort-up');
    const shopCartSortDown = shopCart.querySelector('.shop__cart-sort-down');
    const shopCartInner = shopCart.querySelector('.shop__cart-inner');
    const shopProducts = [
        'Стивен Спилберг',
        'Морган Фриман',
        'Харрисон Форд',
        'Роберт Де Ниро',
        'Хлоя Грейс Морец',
        'Вуди Аллен',
        'Клинт Иствуд',
        'Джеймс Франко',
        'Николас Кейдж',
        'Роберт Дауни мл.'
    ];
    // console.log(shopProducts);
//появление элементов списком из массива который описан выше
    shopProducts.forEach(item => {
        let element = document.createElement('div');
        element.classList.add('shop__cart-item');
        element.textContent = item;
        shopCartInner.append(element);
    });

    // Функция по получению рандомного значения
    function getRandomInt(max) {return Math.floor(Math.random() * max);}

    // Изменение одного из элементов на другой
    shopCartChange.addEventListener('click', () => {
        let newItem = shopProducts[getRandomInt(shopProducts.length)];
        shopProducts[getRandomInt(shopProducts.length)] = newItem;
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=shopProducts[cnt];
            cnt+=1;
        });

    });

    // Удаление первого элемента

    shopCartDelete.addEventListener('click', () => {
        if (shopProducts.length!=0){
            shopProducts.splice(0,1);
            shopCart.querySelector('.shop__cart-item').remove();
        }

        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=shopProducts[cnt];
            cnt+=1;
        });
    });

    // ------------------------------------------------------


    // 2 Фильтр
    let filt = [];
    let a = document.querySelectorAll('.filt_elm');
    let i=0;
    let j=0;
    for(i = 0; i < a.length; i++)
        filt.push(a[i].innerHTML);
    filt = filt.map(item => Number(item));
    
    
    let filting = document.getElementById('filting');
    filting.onclick = function () {
        let min = Number(prompt("Введите минимальное число", "0"));
        let max = Number(prompt("Введите максимальное число", "100"));
    
        alert("Полученные диапазон [" + min + "," + max + "]");
    
        let new_filt = filt.filter((a) => {
            if (a >= min && a <= max) return true;
            return false;
        });
    
        let f = document.getElementsByClassName('new_f')
        for(j = 0 ; j < filt.length; j ++){
            f[j].innerHTML = "";
        }
        for(j = 0 ; j < new_filt.length; j ++){
            f[j].innerHTML = new_filt[j];
        }
    }
    // 3 Сортировка на сайте по алфавиту

    shopCartSortUp.addEventListener('click', () => {
        shopProducts.sort();
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=shopProducts[cnt];
            cnt+=1;
        });
    });

    shopCartSortDown.addEventListener('click', () => {
        shopProducts.sort();
        shopProducts.reverse();
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=shopProducts[cnt];
            cnt++;
        });
    });

    // Второе задание 

    const listBlock=document.querySelector('.create-list');

    const list = document.createElement('ul');
    list.classList.add('user-list');
    list.style="text-align: left";
  
    listBlock.append(list);

    while(true){
        let item=prompt("Введите персонажей","");
        if (!item) break;
        let listItem = document.createElement('li');
        listItem.textContent=item;
        list.append(listItem);
    }
    // Третье задание (уведомление)

    const notification=document.querySelector('.notif');
    const notifList=['Советские актеры','Лучшие','Русские актеры','Посредственные'];
    function showNotification(text){
        let notif=document.createElement('div');
        notif.className = 'notification';
        notif.textContent=text;
        notif.style=`
        padding: 10px 20px;
        display: inline-block;
        border: 2px solid black;
        background: linear-gradient(#87dd87, 10%, #d9546b);
        color:#e1eaf2;
        box-shadow: 0 0 30px rgba(173, 10, 35, 0.9);
        `;

        notification.append(notif);
        setTimeout(()=>{notif.remove()},1500);
    }

    setInterval(() => {showNotification(notifList[Math.floor(Math.random()*notifList.length)])}, 3000);

    // Четвертое задание ()

    const area=document.querySelector(".area");
    const pauk=area.querySelector('img');

    pauk.style.top=Math.round(area.clientHeight/2 - pauk.offsetHeight/2) + "px";
    pauk.style.left=Math.round(area.clientWidth/2 - pauk.offsetWidth/2) + "px";
  
    const clickX=document.querySelector('.clickX').querySelector('span');
    const clickY=document.querySelector('.clickY').querySelector('span');

    area.onclick = function(click){
        clickX.textContent=click.clientX;
        clickY.textContent=click.clientY;
    }

});
