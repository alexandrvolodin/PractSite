// Картиночки -->
cin.onclick = function(event) {
      let thumbnail = event.target.closest('a');
      if (!thumbnail) return;
      showThumbnail(thumbnail.href, thumbnail.title);
      event.preventDefault();
    }
    function showThumbnail(href, title) {
      largePic.src = href;
      largePic.alt = title;
    }