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
//= require_tree .

// = require moment
// = require daterangepicker
$(document).ready(function(){
  $(".editlink").on("click", function(e){
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

    
  $(".savebtn").on("click", function(e){
    e.preventDefault();


    var elink   = $(this).prev(".editlink");
    var dataset = elink.prev(".datainfo");
    var newid   = dataset.attr("id");

    var cinput  = "#"+newid+"-form";
    var einput  = $(cinput);
    var newval  = einput.attr("value");
    var userid  = dataset.attr("user");
    var method  = dataset.attr("method");
    var data = {
        newval: newval,
        userid: userid,
        method: method
      };

    $(this).css("display", "none");
    einput.remove();
    dataset.html(newval);
    
    elink.css("display", "block");
      $.ajax({
     
        url: '/users'+'/6',
        type: 'put',
        data: data,
 // csrf token included? 
     });
  });
});


$('#demo').daterangepicker({
    "startDate": "04/29/2016",
    "endDate": "05/05/2016",
    constrainInput: true,

}, function(start, end, label) {
  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
});



$(function() {

  $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });

  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });

  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });


});



 
