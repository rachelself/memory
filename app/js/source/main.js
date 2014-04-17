(function ()
{
  'use strict';

  $(document).ready(init);

  var timer;
  var clock = 0;
  var numRows = 4;
  var numCols = 5;

  function init()
  {
    $('#start').click(startGame);
    $('#animate').click(animate);
    $('#grid').on('click', 'td', flip);
    createTable();
  }

  function flip()
  {

  }


  function createTable()
  { //add cards 4x
    for (var i = 0; i < numRows; i++)
    {
      addRow();
    }
  }

  function addRow()
  {
    var $tr = $('<tr>');
    var tds = [];

    for(var i = 0; i < numCols; i++)
    {
      tds.push('<td></td>');
      addImage();
    }
    $tr.append(tds);
    $('tbody').append($tr);
  }

  function addImage(){
    //add cards by selecting images
    for(var i = 1; i <= numCols; i++)
    {
      var $td = $('tbody > tr:nth-child('+ i +')'+'> td:nth-child('+ i +')');
      var $img = $('<img>');
      $img.attr('src', '..media/1.png');
      $td.append($img);
    }
    debugger;

  }

  function startGame()
  {
    //start clock
    clock = 60;
    clearInterval(timer);
    timer = setInterval(updateClock, 100);

  }


  function updateClock()
  {
    clock--;
    if(clock === 0)
    {
      clearInterval(timer);
      timesUp();
    }
    if(clock === 10)
    {
      $('#timer').addClass('warning');
    }
    $('#timer').text(clock);
  }

  function animate()
  {
    $('.flipper').toggleClass('rotate');
  }

  function timesUp()
  {

  }

})();
