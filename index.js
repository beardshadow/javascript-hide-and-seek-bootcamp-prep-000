function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelectorAll('.target')[0];
}

function deepestChild(){
  var div = document.querySelectorAll('#grand-node div');
  var boo = div[div.length-1];
  return boo;
}

function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list li');
  for (var i=0; i < list.length; i++){
    list[i].textContent = parseInt(list[i].textContent) + n
  }
}
