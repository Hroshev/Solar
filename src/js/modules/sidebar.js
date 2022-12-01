const container = document.querySelector('.benefits__sidebar-list');
const saleContent = document.querySelector('.benefits__sidebar-sale');
const installationContent = document.querySelector('.benefits__sidebar-installation');
const restrictionsContent = document.querySelector('.benefits__sidebar-restrictions');

container.addEventListener('click', function(e) {
    e.preventDefault();
	const items = document.querySelectorAll('.benefits__sidebar-link')
	const target = e.target
    
    Array.from(items).forEach(item => {
  	item.classList.remove('benefits__sidebar--active')
  })
  target.classList.add('benefits__sidebar--active')
  if(target.classList.contains('sale')){
    saleContent.style.display = "block";
    installationContent.style.display = "none";
    restrictionsContent.style.display = "none";
  }
  else if(target.classList.contains('installation')){
    installationContent.style.display = "block";
    saleContent.style.display = "none";
    restrictionsContent.style.display = "none";
  }
  else if(target.classList.contains('restrictions')){
    restrictionsContent.style.display = "block";
    saleContent.style.display = "none";
    installationContent.style.display = "none";
  }
})