'use strict';

const apiURL = 'https://api.tvmaze.com/search/shows?q=';

const hae = function(event){
    event.preventDefault();
    console.log($(this));
$.getJSON(apiURL + 'dome', function(response){
    //console.log(response);
    $.each(response, function(indeksi, sarja){
        console.log(sarja.show);
        $('main').append(`<article>
    <h2>${sarja.show.name}</h2>
    <p>${sarja.show.genres}</p>
    <a href="${sarja.show.officialSite ? sarja.show.officialSite : sarja.show.url}">Linkki kotisivulle</a>
    <figure>
      <img src="${sarja.show.image ? sarja.show.image.medium : 'tile.png'}" alt="${sarja.show.name}">
      <figcaption>${sarja.show.name}</figcaption>
    </figure>
    <p>${sarja.show.summary}</p>
  </article>`);
    });
});
};

$('form').submit(hae);