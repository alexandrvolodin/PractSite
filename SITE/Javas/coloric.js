const links=document.querySelectorAll('.colinc');
    const colorList=['red','green','blue','pink','white','brown', 'gold'];
    links.forEach(link => {link.querySelector('a').style.color=colorList[Math.floor(Math.random()*colorList.length)];});