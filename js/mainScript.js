const movies = [
   {id: 1, title: 'Темный рыцарь', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_111543.jpg', year: 2008, franchise: 'DC', budget: 185000000, boxOfficeUSA: 534858444, boxOfficeRussia: 8589100, boxOfficeWorld: 469700000, IMDb: 9.00, oscar: true},
   {id: 2, title: 'Человек-паук 2', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_2898.jpg', year: 2004, franchise: 'Marvel', budget: 250000000, boxOfficeUSA: 373585825, boxOfficeRussia: 9325000, boxOfficeWorld: 410180516, IMDb: 7.30, oscar: true},
   {id: 3, title: 'Железный человек', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_61237.jpg', year: 2008, franchise: 'Marvel', budget: 215000000, boxOfficeUSA: 318412101, boxOfficeRussia: 9491200, boxOfficeWorld: 266762121, IMDb: 7.90, oscar: false},
   {id: 4, title: 'Супермен', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_7145.jpg', year: 1978, franchise: 'DC', budget: 55000000, boxOfficeUSA: 134218018, boxOfficeRussia: 0, boxOfficeWorld: 166000000, IMDb: 7.30, oscar: true},
   {id: 5, title: 'Стражи Галактики', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_689066.jpg', year: 2014, franchise: 'Marvel', budget: 170000000, boxOfficeUSA: 333176600, boxOfficeRussia: 37881775, boxOfficeWorld: 137300000, IMDb: 8.10, oscar: false},
   {id: 6, title: 'Темный рыцарь: Возрождение легенды', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_437410.jpg', year: 2012, franchise: 'DC', budget: 250000000, boxOfficeUSA: 448139099, boxOfficeRussia: 17143190, boxOfficeWorld: 636300000, IMDb: 8.40, oscar: false},
   {id: 7, title: 'Логан', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_807682.jpg', year: 2017, franchise: 'Marvel', budget: 97000000, boxOfficeUSA: 226277068, boxOfficeRussia: 17278718, boxOfficeWorld: 392744368, IMDb: 8.10, oscar: false},
   {id: 8, title: 'Мстители: Война бесконечности', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_843649.jpg', year: 2018, franchise: 'Marvel', budget: 321000000, boxOfficeUSA: 678815482, boxOfficeRussia: 34793936, boxOfficeWorld: 1369895896, IMDb: 8.50, oscar: false},
   {id: 9, title: 'Мстители', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_263531.jpg', year: 2012, franchise: 'Marvel', budget: 220000000, boxOfficeUSA: 623357910, boxOfficeRussia: 43412056, boxOfficeWorld: 896200000, IMDb: 8.10, oscar: false},
   {id: 10, title: 'Тор: Рагнарёк ', cover: 'https://st.kp.yandex.net/images/film_iphone/iphone360_822709.jpg', year: 2017, franchise: 'Marvel', budget: 180000000, boxOfficeUSA: 315058289, boxOfficeRussia: 24856442, boxOfficeWorld: 538918837, IMDb: 7.90, oscar: false},
];

for (let film of movies) {
  let article = document.createElement('div');
  article.classList.add('film');
  let titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  let title = document.createElement('h2');
  let titleText = document.createTextNode(film.title);
  title.appendChild(titleText);
  titleDiv.appendChild(title);
  article.appendChild(titleDiv);

  let arrow = document.createElement('img');
  arrow.alt='';
  arrow.classList.add('arrow');
  if(film.budget > (film.boxOfficeUSA + film.boxOfficeRussia + film.boxOfficeWorld)){
    arrow.src='img/down.png';
  }else{
    arrow.src='img/up.png';
  }
  titleDiv.appendChild(arrow);

  let cover = document.createElement('img');
  cover.src = film.cover;
  cover.alt = '';
  cover.classList.add('cover');
  article.appendChild(cover);

  function yearNamer(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
  }

  let yearPassed = document.createTextNode((new Date).getFullYear() - film.year);
  let space = document.createTextNode(' ');
  let yearName = document.createTextNode(yearNamer(yearPassed, ['год', 'года', 'лет']));

  let table = document.createElement('table');
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);
  article.appendChild(table);

  let tr_year = document.createElement('tr');
  let td_year_left = document.createElement('td');
  let td_year_right = document.createElement('td');
  td_year_left.classList.add('table-left');

  let td_year_left_text = document.createTextNode('Год выпуска:');
  let td_year_right_text = document.createTextNode(film.year);
  let td_year_right_text_o = document.createTextNode('(');
  let td_year_right_text_c = document.createTextNode(')');

  td_year_left.appendChild(td_year_left_text);

  td_year_right.appendChild(td_year_right_text);
  td_year_right.appendChild(space.cloneNode());
  td_year_right.appendChild(td_year_right_text_o);
  td_year_right.appendChild(yearPassed);
  td_year_right.appendChild(space);
  td_year_right.appendChild(yearName);
  td_year_right.appendChild(td_year_right_text_c);
  tr_year.appendChild(td_year_left);
  tr_year.appendChild(td_year_right);
  tbody.appendChild(tr_year);

  function cashFieldCreater(field, value) {
    let tr = document.createElement('tr');
    let td_left = document.createElement('td');
    let td_right = document.createElement('td');
    td_left.classList.add('table-left');
    let td_left_text = document.createTextNode(field);
    let td_right_$ = document.createTextNode('$');
    td_right_text = document.createTextNode((new Intl.NumberFormat('en-US').format(value)));
    td_left.appendChild(td_left_text);
    td_right.appendChild(td_right_$);
    td_right.appendChild(td_right_text);
    tr.appendChild(td_left);
    tr.appendChild(td_right);
    tbody.appendChild(tr);
  }
  cashFieldCreater('Бюджет:', film.budget);
  cashFieldCreater('Сборы в США:', film.boxOfficeUSA);
  cashFieldCreater('Сборы в России:', film.boxOfficeRussia);
  cashFieldCreater('Сборы в Мире:', film.boxOfficeWorld);

  let rating = film.IMDb;
  let covering = (10 - rating) / 10 * 300;

  let starDiv = document.createElement('div');
  let starCoverDiv = document.createElement('div');
  starDiv.classList.add('stars');
  starCoverDiv.classList.add('star-cover');
  starCoverDiv.style.width = covering + 'px';
  let tr_starDiv = document.createElement('tr');
  let td_starDiv = document.createElement('td');
  td_starDiv.setAttribute('colspan', 2);
  td_starDiv.appendChild(starDiv);
  starDiv.appendChild(starCoverDiv);
  tr_starDiv.appendChild(td_starDiv);
  tbody.appendChild(tr_starDiv);

  for(let i = 0; i <= 9; i++){
    let stars = document.createElement('img');
    stars.src = 'img/star.png';
    stars.alt = '';
    stars.classList.add('star');
    starDiv.appendChild(stars);
  }

  let tr_rating = document.createElement('tr');
  let td_rating = document.createElement('td');
  td_rating.classList.add('rating');
  td_rating.setAttribute('colspan', 2);
  let rating_text_left = document.createTextNode('Рейтинг фильма: ');
  let rating_text_right = film.IMDb.toFixed(1);
  rating_text_right = document.createTextNode(rating_text_right);
  td_rating.appendChild(rating_text_left);
  td_rating.appendChild(rating_text_right);
  tr_rating.appendChild(td_rating);
  tbody.appendChild(tr_rating);

  if(film.oscar){
    oskar = "<img src='img/oscar.png' alt='' class='oscar'>"
    let oscar = document.createElement('img');
    oscar.src = 'img/oscar.png';
    oscar.alt = '';
    oscar.classList.add('oscar');
    article.appendChild(oscar);
  }
  document.body.appendChild(article);
}
