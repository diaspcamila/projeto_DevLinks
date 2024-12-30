function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  /* Porem isso tambem pode ser feito: 
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  }
  else {
    html.classList.add('light')
  } */

}