function loadPage(page, none, active, text) {
  $('.title-h5').text(text);
  $('.sub-nav').removeClass('active');
  $(active).addClass('active');
  $(page).removeClass('d-none');
  $(none).addClass('d-none');
}

// Load default page on initial load
loadPage('#kredit', '#deposito', '#nav-kredit', 'Simulasi Kredit');