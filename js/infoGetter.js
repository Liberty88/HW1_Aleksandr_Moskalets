function infoGetter() {

  let title = document.querySelector('#headerFilm h1').innerText;
  let cover = document.querySelector('.popupBigImage img').getAttribute('src');
  let year = document.querySelector('#infoTable table').tBodies[0].rows[0].cells[1].querySelector('a').innerText;
  let budget = document.querySelector('#infoTable table tr.en td.dollar a').innerText.replace(/\D/g, "");
  let boxOfficeUSA = document.querySelector('#div_usa_box_td2 a').innerText.replace(/\D/g, "");

  let boxOfficeWorld = document.querySelector('#div_world_box_td2 a');
  if(boxOfficeWorld){
    boxOfficeWorld = boxOfficeWorld.innerText.substr(18).replace(/\D/g, "");
  }else{
    boxOfficeWorld = document.querySelector('#infoTable table').tBodies[0].rows[13].querySelector('.dollar a').innerText.substr(18).replace(/\D/g, "");
  }

  let boxOfficeRussia = document.querySelector('#div_rus_box_td2 a');
  if(boxOfficeRussia){
    boxOfficeRussia = boxOfficeRussia.innerText.replace(/\D/g, "");
  }else{
    boxOfficeRussia = 'нет сведений';
  }

  let imdb = document.querySelector('#block_rating .block_2 div:last-child').innerText.substr(6, 4);
  let oscar = document.querySelector("img[src='https://st.kp.yandex.net/images/movies/awardOscar.png']");
  if(oscar){
    oscar = true;
  }else {
    oscar = false;
  }

  return{
          title: title,
          cover: cover,
          year: year,
          budget: budget,
          boxOfficeUSA: boxOfficeUSA,
          boxOfficeRussia: boxOfficeRussia,
          boxOfficeWorld: boxOfficeWorld,
          IMDb: imdb,
          oscar: oscar
        }
}
