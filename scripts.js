document.getElementById('projects__wrapper').addEventListener('wheel', function(e) {
    if (e.deltaY > 0) this.scrollLeft += 20;
    else this.scrollLeft -= 20;
    e.preventDefault();
  });
  