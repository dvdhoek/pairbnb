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
//= require moment
//= require_tree 


// document on page laod add
$(window).load(function(){
  $('a[name="profile_edit"]').on("click", function(e){
    e.preventDefault();
    var dataset = $(this).prev(".datainfo");
    var savebtn = $(this).next(".savebtn");
    var theid   = dataset.attr("id");
    var newid   = theid+"-form";
    var currval = dataset.text();
    var userid = dataset.attr("user");
    
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
    var userid  = dataset.attr("user");
    var method  = dataset.attr("method");
    var data = {
        method: method,
        newval: newval
    };

    $(this).css("display", "none");
    einput.remove();
    dataset.html(newval);
    
    elink.css("display", "block");
    $.ajax({
        url: '/users/'+userid,
        type: 'PUT',
        data: data,
 // csrf token included? 
});
});
});

// This is the javascript used for the profile editing //

$(document).ready(function(){
  $('a[name="listing_edit"]').on("click", function(e){
    e.preventDefault();
    var dataset = $(this).prev(".datainfo");
    var savebtn = $(this).next(".savebtn");
    var theid   = dataset.attr("id");
    var newid   = theid+"-form";
    var currval = dataset.text();
    var listingid  = dataset.attr("listing");
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
    var listingid  = dataset.attr("listing");
    var cinput  = "#"+newid+"-form";
    var einput  = $(cinput);
    var newval  = einput.attr("value");
    var method  = dataset.attr("method");
    var data = {
        method: method,
        newval: newval
    };

    $(this).css("display", "none");
    einput.remove();
    dataset.html(newval);
    
    elink.css("display", "block");
    $.ajax({
        url: '/listings/'+listingid,
        type: 'PUT',
        data: data,
 // csrf token included? 
});
});
});

$(document).ready(function(){
    $("#subscribeswitch").on("click", function () {
        var value = $(this).val();
        debugger
        var data = {
            newval: value,
            method: "subscribe"
        }
        $.ajax({
            type: "PUT",
            url: "/users/2",
            data: data,
            success: function (msg) {
                alert('Success');
                if (msg != 'success') {
                    alert('Fail');
                }
            }
        });
        
    });
})

$(document).ready(function(){
$("#switch-wrapper").switchButton({
  on_label: 'yes',
  off_label: 'no'
});
})
