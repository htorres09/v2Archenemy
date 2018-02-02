/**
 *
 */
const statics = require('./config');

var c = 0;
var list;

function randomize(deck) {
  console.log(`Loading deck: ${deck.name}`);
  $.getJSON(deck, function(data){
    list = data.sort(function(a,b){ return 0.5 - Math.random(); });
  })
  .done(function(){ console.log("Loaded"); })
  .fail(function(){ console.log("Error"); });
}

function removeElement(tag){
  var e = document.getElementById(tag);
  c = '#' + tag;
  if(e){ $(c).remove(); }
}

funtion nextScheme(deck){
  var x = document.createElement("img");
  x.setAttribute("src", statisc['imgPath'] + list[c].imgPath );
  x.setAttribute("width", "25%");
  x.setAttribute("height", "100%");
  x.setAttribute("class", "img-ongoing");
  x.setAttribute("id", "trgt-ongoing-" + list[c]._id);
  document.getElementById("trgt-slide").appendChild(x);
}

fuction addOngoingScheme(schemeId){
  var x = document.createElement("img");
  x.setAttribute("src", "imgs/"+list[c].imgPath);
  x.setAttribute("width", "25%");
  x.setAttribute("height", "100%");
  x.setAttribute("class", "img-ongoing");
  x.setAttribute("id", "trgt-ongoing-" + list[c]._id);
  document.getElementById("trgt-slide").appendChild(x);
}
