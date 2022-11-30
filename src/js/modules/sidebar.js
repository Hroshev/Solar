const container = document.querySelector('.benefits__sidebar-list')

container.addEventListener('click', function(e) {
    e.preventDefault();
	const items = document.querySelectorAll('.benefits__sidebar-link')
	const target = e.target
    
    Array.from(items).forEach(item => {
  	item.classList.remove('benefits__sidebar--active')
  })
  target.classList.add('benefits__sidebar--active')

})