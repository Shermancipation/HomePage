$(document).ready(function(){

// Swap h1 title function
  $('#descriptionSwap1').click(function(){
    var h1descriptions = ["Brad Sherman", "B-Rad the Shermanator", "Shermancipation", "JuiceWillis"]
    var randDescription = Math.floor((Math.random() * 4));
    $('#descriptionSwap1').html(h1descriptions[randDescription]);
    });

// Swap h2 title function
  $('#descriptionSwap2').click(function(){
    var h2descriptions = ["Web Developer in Training", "Total Badass", "Sly Motherfucker", "Crafty Genius", ""];
    var randDescription = Math.floor((Math.random() * 4));
    $('#descriptionSwap2').html(h2descriptions[randDescription]);
    });

// Fade In/Out picture caption function
  var newText = "<p class='emphasis'>Olympic Peninsula, WA</p><p class='emphasis'>April 2017</p>";
    $('#mainImg').hover(function(){
      $(newText).hide().appendTo("#pageContainer").fadeIn(1000);
    },
    function(){
      $('#pageContainer p').fadeOut(500, function(){
        $('#pageContainer p').remove();
      });
    });
  });
