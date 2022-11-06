'use strict';

const closeDiscountBannerBtn = document.querySelector('.discount-banner__close-btn');
const discountBanner = document.querySelector('.discount-banner');


closeDiscountBannerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    discountBanner.style.display = "none";
});

//tabs
const tabsBtn = document.querySelectorAll('.reviews-controller__item');
const tabsItems = document.querySelectorAll('.reviews-slider-item');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

       if(!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('reviews-controller__item--active')
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('reviews-slider-item--active')
            });

            currentBtn.classList.add('reviews-controller__item--active');
            currentTab.classList.add('reviews-slider-item--active');
       }
    })
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY2xvc2VEaXNjb3VudEJhbm5lckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNjb3VudC1iYW5uZXJfX2Nsb3NlLWJ0bicpO1xuY29uc3QgZGlzY291bnRCYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzY291bnQtYmFubmVyJyk7XG5cblxuY2xvc2VEaXNjb3VudEJhbm5lckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlzY291bnRCYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbi8vdGFic1xuY29uc3QgdGFic0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXdzLWNvbnRyb2xsZXJfX2l0ZW0nKTtcbmNvbnN0IHRhYnNJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXdzLXNsaWRlci1pdGVtJyk7XG5cbnRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY3VycmVudEJ0biA9IGl0ZW07XG4gICAgICAgIGxldCB0YWJJZCA9IGN1cnJlbnRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpO1xuICAgICAgICBsZXQgY3VycmVudFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiSWQpO1xuXG4gICAgICAgaWYoIWN1cnJlbnRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgdGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Jldmlld3MtY29udHJvbGxlcl9faXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0YWJzSXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdyZXZpZXdzLXNsaWRlci1pdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRCdG4uY2xhc3NMaXN0LmFkZCgncmV2aWV3cy1jb250cm9sbGVyX19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYWIuY2xhc3NMaXN0LmFkZCgncmV2aWV3cy1zbGlkZXItaXRlbS0tYWN0aXZlJyk7XG4gICAgICAgfVxuICAgIH0pXG59KSJdLCJmaWxlIjoibWFpbi5qcyJ9