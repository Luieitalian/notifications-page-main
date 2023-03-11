
// Mark all as read

const maarElement = document.getElementById('maar');
const notCountElement = document.getElementById('not-count');
const dots = document.querySelectorAll('p button');
const notifications = document.querySelectorAll('.notification');


maarElement.addEventListener('click', () => {
  notCountElement.style.display = 'none';
  removeClass();
  removeDots();
});

function removeClass() {
  notifications.forEach((not) => {
    not.classList.remove('not-unread');
  })
}

function removeDots() {
  dots.forEach((dot) => {
    dot.style.display = 'none';
  })
}




// Notification Card 

const aElements = document.querySelectorAll('main a');

aElements.forEach((element) => {
  element.addEventListener('click', (event) => { event.preventDefault(); });
});
