document.addEventListener("DOMContentLoaded", function() {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target
                lazyImage.src = lazyImage.dataset.src
            }
        })
    });
    const arr = document.querySelectorAll('img.lzy_img')
    arr.forEach((v) => {
        imageObserver.observe(v);
    })
})

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })
  
const scrollImations = (entries, observer) => {
    entries.forEach((entry) => {
  
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }
  
  const options = {
    threshold: 0
  };
  const observer = new IntersectionObserver(scrollImations);
  
  const boxes = document.querySelectorAll('.anim');
  boxes.forEach((box) => {
    observer.observe(box);
});

const videoBtns = document.querySelectorAll('.performances__play');
const videoPlace = document.querySelectorAll('.modal-video');
const modalClose = document.querySelectorAll('.modal__close');

videoBtns.forEach(function(btn){

    btn.addEventListener('click', function(){

        let neededBtn = btn.dataset.modalButton;

        videoPlace.forEach(function(place){
            let neededPlace = place.id;
            const resultPlace = place.querySelector('.video__content');
            let src = resultPlace.dataset.src;


            if(neededBtn == neededPlace && !btn.classList.contains('ready')){
                resultPlace.insertAdjacentHTML('afterbegin', `<iframe src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                btn.classList.add('ready');
            } else {
            }
        });
    });
});

const bgDancer = document.getElementById("dancer");

document.addEventListener("mousemove", function (e) { MoveBackground(e); });
function MoveBackground(e) {

   let offsetX = (e.clientX / window.innerWidth * 30) - 1;
 
   bgDancer.setAttribute("style", "background-position: " + offsetX + "px ");
}

const sidebarBtn = document.querySelector('.sidebar__btn');
const sidebar = document.querySelector('.sidebar__menu');
const modalOrder = document.querySelector('.modal-order');
const sidebarLinks = document.querySelectorAll('.sidebar__link');

sidebarBtn.addEventListener('click', function(){
    sidebar.classList.toggle('active');
    sidebarBtn.classList.toggle('active');
    if(sidebar.classList.contains('active') || modalOrder.classList.contains('active')){
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto'
    }
});
sidebarLinks.forEach(function(item){
    item.addEventListener('click', function(){

        sidebarBtn.classList.remove('active');
        sidebar.classList.remove('active');
        document.body.style.overflow = 'auto'
    });
});

function chooseGoods(){

const filterBtn = document.querySelectorAll('.style__filter');
const filterTable = document.querySelectorAll('.style__wrapper');
    
function findTable(items, category){
    items.forEach(function(card){
    const isItemFiltered = card.classList.contains(category);
    if(!isItemFiltered){
        card.classList.add('none');
        card.classList.add('hide');
    }
    else{
        card.classList.remove('none');
        setTimeout(function(){card.classList.remove('hide')}, 0);
    }
    })
}
    
filterBtn.forEach(function(button){
    button.addEventListener('click', function(){
    isActive()
    button.classList.add('usage')
    const btnData = button.dataset.filter;
    findTable(filterTable, btnData);
    })
})
    
    
function isActive(){
    filterBtn.forEach(function(button){
    const haveActive = button.classList.contains('usage');
    if(haveActive){
        button.classList.remove('usage');
    }
    })
    } 
}
chooseGoods();

document.querySelectorAll('a.yakor').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault()

        let href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const topOffset = -150
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        })
    });
});

function chooseComand(){

    const filterBtn = document.querySelectorAll('.comands__filter');
    const filterTable = document.querySelectorAll('.comands__content');
        
    function findTable(items, category){
        items.forEach(function(card){
        const isItemFiltered = card.classList.contains(category);
        if(!isItemFiltered){
            card.classList.add('none');
            card.classList.add('hide');
        }
        else{
            card.classList.remove('none');
            setTimeout(function(){card.classList.remove('hide')}, 0);
        }
        })
    }
        
    filterBtn.forEach(function(button){
        button.addEventListener('click', function(){
        isActive()
        button.classList.add('usage')
        const btnData = button.dataset.filter;
        findTable(filterTable, btnData);
        })
    })
          
    function isActive(){
        filterBtn.forEach(function(button){
        const haveActive = button.classList.contains('usage');
        if(haveActive){
            button.classList.remove('usage');
        }
        })
        } 
    }
    
chooseComand();

document.addEventListener("DOMContentLoaded", function() {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
  
    if ("IntersectionObserver" in window) {
      let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });
  
      lazyBackgrounds.forEach(function(lazyBackground) {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }
  });

document.addEventListener("DOMContentLoaded", function() {

setTimeout(function(){   
new Swiper('.style-slider', {
    slidesPerView: 5,
    simulateTouch: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 2.5,
        },
        500: {
            slidesPerView: 3.1,
        },
        600: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        800: {
            slidesPerView: 4.1,
        },
        1200: {
            slidesPerView: 4.5,
        },
        1300: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
    },
});

new Swiper('.performances-slider', {
    lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: false,
    },
    preventClicks: false,
    preventClicksPropagation: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    navigation: {
        nextEl: '.carousel-button-next',
        prevEl: '.carousel-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 2,
    breakpoints: {
        0: {
            slidesPerView: 1, 
        },
        768: {
            slidesPerView: 1.5,
        },
        1024: {
            slidesPerView: 2,
        },
    },
    loop: true,
    simulateTouch: true,
    speed: 800,
});

new Swiper('.teachers-slider', {
    lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    navigation: {
        nextEl: '.carousel-button-next',
        prevEl: '.carousel-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    simulateTouch: true,
    speed: 800,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1, 
        },
        400: {
            slidesPerView: 1.2, 
        },
        560: {
            slidesPerView: 1.8,
        },
        768: {
            slidesPerView: 2.2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

new Swiper('.comands-slider', {
    slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 2.2,   
        },
        410: {
            slidesPerView: 2.5,    
        },
        500: {
            slidesPerView: 3.2, 
        },
        1000: {
            slidesPerView: 4, 
            spaceBetween: 30,
        },
    },
});
}, 1000);
});

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
  const modalId = this.dataset.modalButton;
  const modal = document.querySelector('#' + modalId);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'

  modal.querySelector('.modal__container').addEventListener('click', function (e) {
    e.stopPropagation();
  });
})
})

modalClosebuttons.forEach(function (item) {
  item.addEventListener('click', function () {
      const modal = this.closest('[data-modal]');
      modal.classList.remove('active');
      document.body.style.overflow = 'auto'
  })

  allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.remove('active');
        if(sidebar.classList.contains('active')){

        }else {
            document.body.style.overflow = 'auto';
        }
  });
});
});

