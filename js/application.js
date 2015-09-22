(function() {
  $(document).ready(function() {
    var DrawChart, header_limit;
    DrawChart = function(container, data) {
      var chart, context;
      context = document.getElementById(container).getContext("2d");
      return chart = new Chart(context).Doughnut(data);
    };
    $('.charts canvas').each(function() {
      var temp_container, temp_data;
      temp_data = [];
      temp_container = $(this).attr('id');
      $(this).find('p').each(function() {
        var temp_object;
        temp_object = {
          value: $(this).next().html(),
          label: this.innerHTML,
          color: '#fff333',
          highlight: '#ff3f33'
        };
        return temp_data.push(temp_object);
      });
      return DrawChart(temp_container, temp_data);
    });
    $('.nav a').click(function() {
      var anchor_point, height_variation;
      anchor_point = $(this).attr('href');
      $('.nav li').removeClass('active');
      $(this).parent().addClass('active');
      height_variation = -450;
      if ($('header').hasClass('fixed-header')) {
        height_variation = -100;
      }
      $('html,body').animate({
        scrollTop: $(anchor_point).offset().top + height_variation
      }, 1000);
      return false;
    });
    header_limit = $('header').height();
    return $(window).scroll(function() {
      $(".header").toggleClass('fixed-header', $(this).scrollTop() > header_limit);
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('.nav li').removeClass('active');
        return $('.nav li').eq(3).addClass('active');
      } else if ($(window).scrollTop() > $('#experiences').offset().top - 150) {
        $('.nav li').removeClass('active');
        return $('.nav li').eq(2).addClass('active');
      } else if ($(window).scrollTop() > $('#skills').offset().top - 150) {
        $('.nav li').removeClass('active');
        return $('.nav li').eq(1).addClass('active');
      } else if ($(window).scrollTop() < $('#skills').offset().top) {
        $('.nav li').removeClass('active');
        return $('.nav li').eq(0).addClass('active');
      }
    });
  });

}).call(this);

