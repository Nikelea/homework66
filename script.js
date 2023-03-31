
div = document.getElementById('container');
id = ['1', '2', '3', '4', '5']
for ( i of id) {
  let span = '<span style=" color: rgb(240, ' + i*40 + ' , 200);">' + i + '</span>';
  div.innerHTML = div.innerHTML +'<div class="element">Element ' + span + '</div>'
}

