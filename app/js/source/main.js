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
    $('#grid').on('click', 'td', move);
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

  function startGame()
  {
    //start clock
    clock = 60;
    clearInterval(timer);
    timer = setInterval(updateClock, 100);

  }

  function addRow()
  {
    var $tr = $('<tr>');
    var tds = [];
    var $img = $('<img>');

    for(var i = 0; i < numCols; i++)
    {
      $img.attr('src', '../media/1.png');
      tds.push('<td></td>');
  //    $img = placeImage();

    }
    $tr.append(tds);
    $('tbody').append($tr);
    debugger;
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
