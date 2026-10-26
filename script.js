(() => {
  const filters = document.querySelectorAll('[data-filter]');
  const rows = document.querySelectorAll('.comparison tbody tr');
  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filters.forEach((item) => item.classList.toggle('active', item === button));
      rows.forEach((row) => {
        const tags = (row.dataset.tags || '').split(/\s+/);
        row.hidden = filter !== 'all' && !tags.includes(filter);
      });
    });
  });
})();