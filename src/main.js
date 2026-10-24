const filters = [...document.querySelectorAll('[data-filter]')];
const stories = [...document.querySelectorAll('[data-category]')];
const status = document.querySelector('#filter-status');

for (const button of filters) {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    for (const filter of filters) {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    }
    for (const story of stories) {
      story.hidden = category !== 'all' && story.dataset.category !== category;
    }
    const count = stories.filter((story) => !story.hidden).length;
    status.textContent = `${count} ${count === 1 ? 'história disponível' : 'histórias disponíveis'}.`;
  });
}
