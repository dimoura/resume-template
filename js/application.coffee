$(document).ready( ->
  # Doughnut charts
  DrawChart = (container, data) ->

    context = document.getElementById(container).getContext("2d");
    chart = new Chart(context).Doughnut(data);

  # Call function to create charts
  $('.charts canvas').each ->
    temp_data = []
    temp_container = $(this).attr('id')

    $(this).find('p').each ->
      temp_object= {
        value: $(this).next().html()
        label: this.innerHTML,
        color: '#fff333',
        highlight: '#ff3f33'
      }
      temp_data.push temp_object
    DrawChart(temp_container, temp_data)

  # Cover toggle
  header_limit = $('header').height()
  $(window).scroll(->
    $(".header").toggleClass('fixed-header', ($(this).scrollTop() > header_limit))
  )

  # Smooth Scroller for nav
  $('.nav a').click(->
    anchor_point = $(this).attr('href')

    $('.nav li').removeClass('active')
    $(this).parent().addClass('active')

    # for cover variations
    height_variation = -450

    if($('header').hasClass('fixed-header'))
      height_variation = -100

    $('html,body').animate({
      scrollTop: $(anchor_point).offset().top+height_variation
    }, 1000)

    return false
  )

  #change nav due the scroll
  $(window).scroll(->
    if $(window).scrollTop() + $(window).height() > $(document).height() - 100
      $('.nav li').removeClass('active')
      $('.nav li').eq(3).addClass('active')
    else if $(window).scrollTop() > $('#experiences').offset().top-150
      $('.nav li').removeClass('active')
      $('.nav li').eq(2).addClass('active')
    else if $(window).scrollTop() > $('#skills').offset().top-150
      $('.nav li').removeClass('active')
      $('.nav li').eq(1).addClass('active')
    else if $(window).scrollTop() < $('#skills').offset().top
      $('.nav li').removeClass('active')
      $('.nav li').eq(0).addClass('active')
  )
)