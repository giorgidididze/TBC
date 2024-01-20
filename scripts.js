const carouselContainer = document.getElementById('carouselContainer');
const partnerItems = document.querySelectorAll('.partner-item');
const navigationDotsContainer = document.getElementById('navigationDots');
const totalItems = partnerItems.length;
let currentIndex = 0;

function showItem(index) {
  if (index < 0 || index >= totalItems) {
    return;
  }
  currentIndex = index;
  partnerItems.forEach((item, i) => {
    if (i === currentIndex) {
      item.style.opacity = 1;
    } else {
      item.style.opacity = 0;
    }
  });
  updateNavigationDots();
}

function nextItem() {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
}

function updateNavigationDots() {
  navigationDotsContainer.innerHTML = '';
  for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showItem(i));
    navigationDotsContainer.appendChild(dot);
  }
  const dots = navigationDotsContainer.querySelectorAll('.dot');
  dots[currentIndex].classList.add('active');
}
setInterval(nextItem, 5000);

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('nextButton').addEventListener('click', nextItem);
  document.getElementById('prevButton').addEventListener('click', prevItem);
  showItem(currentIndex);
});


function toggleAnswer(questionNumber) {
  const answer = document.getElementById(`answer-${questionNumber}`);
  const icon = document.getElementById(`icon-${questionNumber}`);

  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    icon.classList.remove('icon-close');
    icon.classList.add('icon-open');
  } else {
    answer.style.display = 'block';
    icon.classList.remove('icon-open');
    icon.classList.add('icon-close');
  }
};