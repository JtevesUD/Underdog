new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: false,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
  
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable:true,
          scrollLock:true,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          draggable:true,
          scrollLock:true,
          slidesToScroll: 1,
          itemWidth: 750,
          duration: 3,
          resizeLock: false
        
        }
      }
    ]
  });

  new Glider(document.querySelector('.glider2'), {
    slidesToShow: 1,
    dots: '#dots2',
    draggable: true,
    rewind:true,
    scrollLock:true,
    scrollLockDelay:500,
    arrows: {
      prev: '.glider-prev2',
      next: '.glider-next2'
    },
  
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 350,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.5,
          draggable:true,
          scrollLock:true,
          rewind:true
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: '#dots2',
          slidesToScroll: 1,
          itemWidth: 50,
          duration: 0.50,
          Number: 0.5,
          scrollLock:true,
          draggable:true
        }
      }
    ]
  });
  
     