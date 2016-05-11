// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
// = require moment
// = require daterangepicker
//= require_tree .

$(document).ready(function(){
  $('a[name="profile"]').on("click", function(e){
    e.preventDefault();
    var dataset = $(this).prev(".datainfo");
    var savebtn = $(this).next(".savebtn");
    var theid   = dataset.attr("id");
    var newid   = theid+"-form";
    var currval = dataset.text();
    
    dataset.empty();
    
    $('<input type="text" name="'+newid+'" id="'+newid+'" value="'+currval+'" class="hlite">').appendTo(dataset);
    $(this).css("display", "none");
    savebtn.css("display", "block");
  });

    
  $('a[name="profile"]').on("click", function(e){
    e.preventDefault();


    var elink   = $(this).prev(".editlink");
    var dataset = elink.prev(".datainfo");
    var newid   = dataset.attr("id");

    var cinput  = "#"+newid+"-form";
    var einput  = $(cinput);
    var newval  = einput.attr("value");
    var listingid  = dataset.attr("user");
    var method  = dataset.attr("method");
    var data = {
        newval: newval,
        userid: user,
        method: method
      };

    $(this).css("display", "none");
    einput.remove();
    dataset.html(newval);
    
    elink.css("display", "block");
      $.ajax({

        url: '/users'+'/*',
        type: 'put',
        data: data,
 // csrf token included? 
     });
  });
});

// This is the javascript used for the profile editing //

$(document).ready(function(){
  $('a[name="listing"]').on("click", function(e){
    e.preventDefault();
    var dataset = $(this).prev(".datainfo");
    var savebtn = $(this).next(".savebtn");
    var theid   = dataset.attr("id");
    var newid   = theid+"-form";
    var currval = dataset.text();
    
    dataset.empty();
    
    $('<input type="text" name="'+newid+'" id="'+newid+'" value="'+currval+'" class="hlite">').appendTo(dataset);
    $(this).css("display", "none");
    savebtn.css("display", "block");
  });

    
  $('a[name="listing"]').on("click", function(e){
    e.preventDefault();


    var elink   = $(this).prev(".editlink");
    var dataset = elink.prev(".datainfo");
    var newid   = dataset.attr("id");

    var cinput  = "#"+newid+"-form";
    var einput  = $(cinput);
    var newval  = einput.attr("value");
    var listingid  = dataset.attr("user");
    var method  = dataset.attr("method");
    var data = {
        newval: newval,
        listingid: listingid,
        method: method
      };
    var url = "/listings/"+":id" // this is weird, check it 

    $(this).css("display", "none");
    einput.remove();
    dataset.html(newval);
    
    elink.css("display", "block");
      $.ajax({

        url: url,
        type: 'put',
        data: data,
 // csrf token included? 
     });
  });
});


// this is the javascript for the datepicker 
$('#datetimepicker5').datetimepicker({
    format: 'L'
});

$('#datetimepicker5').datetimepicker({
    format: 'L',
    locale: 'fr'
});
//

 
