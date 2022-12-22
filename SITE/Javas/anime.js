function animate({
    duration,
    draw,
    timing
}) {

    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timeFraction)
        draw(progress);
        if (timeFraction < 1) requestAnimationFrame(animate);
    });
}
elem.onclick = function () {
    animate({
        duration: 1000,
        timing: function (timeFraction) {
            return timeFraction;
        },
        draw: function (progress) {
            elem.style.width = progress * 100 + '%';
        }
    });
};
 var circle = document.querySelector("#circ1e");
 var xPos = 0;
 function animate() {
     xPos += 10;
     circle.style.transform = `translate3d(${xPos}px, 0, 0)`;
     if (Math.abs(xPos) >= 900) xPos = -500;
     requestAnimationFrame(animate);
 }
 animate();
