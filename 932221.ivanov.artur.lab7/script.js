function addFigures(type) {
  const count = Math.max(1, parseInt(document.getElementById('count').value) || 1);
  const baseColors = { square: 'red', circle: 'green', triangle: 'blue' };
  const highlight = 'yellow';

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'figure ' + type;

    const size = Math.floor(Math.random() * 80) + 30;

    if (type === 'triangle') {
      const half = Math.floor(size / 2);
      el.style.width = '0';
      el.style.height = '0';
      el.style.borderLeft = `${half}px solid transparent`;
      el.style.borderRight = `${half}px solid transparent`;
      el.style.borderBottom = `${size}px solid ${baseColors[type]}`;
    } else {
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.backgroundColor = baseColors[type];
    }


    el.dataset.origColor = baseColors[type];
    el.dataset.selected = 'false';

    const maxLeft = Math.max(10, window.innerWidth - size - 20);
    const maxTop = Math.max(10, window.innerHeight - size - 20);
    el.style.left = Math.floor(Math.random() * maxLeft) + 'px';
    el.style.top = Math.floor(Math.random() * maxTop) + 'px';


    el.addEventListener('click', function (e) {
      e.stopPropagation();
      const wasSelected = this.dataset.selected === 'true';

      document.querySelectorAll('.figure').forEach(f => {
        if (f.dataset.selected === 'true') {
          const orig = f.dataset.origColor;
          if (f.classList.contains('triangle')) {
            f.style.borderBottomColor = orig;
          } else {
            f.style.backgroundColor = orig;
          }
          f.dataset.selected = 'false';
        }
      });


      if (!wasSelected) {
        if (this.classList.contains('triangle')) {
          this.style.borderBottomColor = highlight;
        } else {
          this.style.backgroundColor = highlight;
        }
        this.dataset.selected = 'true';
      }
    });

    el.addEventListener('dblclick', function () {
      this.remove();
    });

    document.body.appendChild(el);
  }
}