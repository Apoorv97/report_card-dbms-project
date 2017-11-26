
// varstuff= require('./../server.js');
// console.log(msg);

var data=[{"year":"Athletics","goals":"3","games":"7","avg":"9"},{"year":"Science Quiz","goals":"2","games":"3","avg":"6"},{"year":"Public Speaking","goals":"1","games":"2","avg":"9"},{"year":"Dance","goals":"0","games":"2","avg":"3"},{"year":"Music","goals":"1","games":"4","avg":"5"},{"year":"Theater","goals":"0","games":"2","avg":"3"},{"year":"Maths Olympiad","goals":"2","games":"5","avg":"6"},{"year":"2014-2015","goals":"50","games":"76","avg":"0.66"}];

(function($) {
    "use strict";

     // Start of use strict

     var header = $('.stats__header');
     var bar  = $('.stats__item-bar');
     var nums = $('.stats__item-num');
     var overlay = $('.stats__overlay');
     var back = $('.stats__overlay-back');
     var isOpen = false;

     var vYear = $('#year');
     var vAvg = $('#avg');
     var vGames = $('#games');
     var vGoal = $('#goals');

     $(document).on('ready', function() {
       entrance();
     });

     bar.on('click', showOverlay);
     back.on('click', showOverlay);

     function entrance() {
       bar.addClass('active');
       header.addClass('active');
       header.on('transitionend webkitTransitionend', function() {
         nums.css('opacity', '1');
         bar.css('transition-delay', '0');
         header.off('transitionend webkitTransitionend');
       });
     }

     function showOverlay() {
       if (!isOpen) {
         overlay.addClass('active').removeAttr('style');
         bar.css('transition', 'all 0.4s cubic-bezier(0.86, 0, 0.07, 1)')
         .removeClass('active');
         header.removeClass('active');
         nums.css('opacity', '0');
         isOpen = true;

        updateInfo($(this).parent().index());
       } else {
         overlay.css('transition', 'all 0.4s cubic-bezier(0.755, 0.05, 0.855, 0.06)').removeClass('active');
         bar.addClass('active').removeAttr('style');
         header.addClass('active');
         nums.css('opacity', '1');
         isOpen = false;
       }
     }

       // {
       //   "year":"2007-2008",
       //   "goals":"65",
       //   "games":"82",
       //   "avg":"0.79"
       // },
       // {
       //   "year":"2008-2009",
       //   "goals":"56",
       //   "games":"79",
       //   "avg":"0.7"
       // },
       // {
       //   "year":"2009-2010",
       //   "goals":"50",
       //   "games":"72",
       //   "avg":"0.69"
       // },
       // {
       //   "year":"2010-2011",
       //   "goals":"32",
       //   "games":"79",
       //   "avg":"0.40"
       // },
       // {
       //   "year":"2011-2012",
       //   "goals":"38",
       //   "games":"78",
       //   "avg":"0.48"
       // },
       // {
       //   "year":"2012-2013",
       //   "goals":"32",
       //   "games":"48",
       //   "avg":"0.66"
       // },
       // {
       //   "year":"2013-2014",
       //   "goals":"51",
       //   "games":"78",
       //   "avg":"0.65"
       // },
       // {
       //   "year":"2014-2015",
       //   "goals":"50",
       //   "games":"76",
       //   "avg":"0.66"
       // }];
       // {
       //   year: '2007-2008',
       //   goals: '65',
       //   games: '82',
       //   avg: '0.79'
       //
       // },
       // {
       //   year: '2008-2009',
       //   goals: '56',
       //   games: '79',
       //   avg: '0.7'
       //
       // },
       // {
       //   year: '2009-2010',
       //   goals: '50',
       //   games: '72',
       //   avg: '0.69'
       //
       // },
       // {
       //   year: '2010-2011',
       //   goals: '32',
       //   games: '79',
       //   avg: '0.40'
       //
       // },
       // {
       //   year: '2011-2012',
       //   goals: '38',
       //   games: '78',
       //   avg: '0.48'
       //
       // },
       // {
       //   year: '2012-2013',
       //   goals: '32',
       //   games: '48',
       //   avg: '0.66'
       //
       // },
       // {
       //   year: '2013-2014',
       //   goals: '51',
       //   games: '78',
       //   avg: '0.65'
       //
       // },
       // {
       //   year: '2014-2015',
       //   goals: '50',
       //   games: '76',
       //   avg: '0.66'
       //
       // }
     // ];

     function updateInfo(index) {
       vYear.text(data[index].year);
       vAvg.text(data[index].avg);
       vGoal.text(data[index].goals);
       vGames.text(data[index].games);
     }

    //Stuff that I have to do
    // var roll = require('./../server.js');
    //var section = document.getElementById("roll").innerHTML = "1";


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        console.log($anchor);

        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        $anchor.trigger('mouseleave');
    });

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $(window).scroll(function() {
      if ($(document).scrollTop() > 80) {
        $('nav').addClass('shrink');
      } else {
        $('nav').removeClass('shrink');
      }
    });

    $("#hover").hover(function(){
        $('.see-more').css('opacity', 1.0);
    },function(){
        $('.see-more').css('opacity', 0.0);
    });


    $("body").scrollspy({
        target: "#mainNav",
        offset: 70
    });


    //login form handler
    $('.toggle').on('click', function() {
      $('.containerform').stop().addClass('active');
    });

    $('.close').on('click', function() {
      $('.containerform').stop().removeClass('active');
    });

})(jQuery); // End of use strict

var ctx = document.getElementById("myChart");

var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF4394",
                "#36A2EB",
                "#FFCE56"
            ]


        }]
};

var options = {
	cutoutPercentage:40,
};


var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});
