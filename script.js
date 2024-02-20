function loadPage(page, none, active, text) {
  $('.title-h5').text(text);
  $('.sub-nav').removeClass('active');
  $(active).addClass('active');
  $(page).removeClass('d-none');
  $(none).addClass('d-none');
}

loadPage('#kredit', '#deposito', '#nav-kredit', 'Simulasi Kredit');

$('#nav-flat').on('click', function(){
  $(this).addClass('active-nav');
  $('#nav-efektif').removeClass('active-nav');
  $('#metode').val('flat');

  var resultDiv = document.getElementById("result");

  resultDiv.innerHTML = '';
})

$('#nav-efektif').on('click', function(){
  $(this).addClass('active-nav');
  $('#nav-flat').removeClass('active-nav');
  $('#metode').val('efektif');

  var resultDiv = document.getElementById("result");

  resultDiv.innerHTML = '';
})