var my_orders=document.getElementById('orders');
var dashboard=document.getElementById('dash-board');
var downloads=document.getElementById('downloads');
var Addresses=document.getElementById('addresses');
var account_details=document.getElementById('acc_details');
var wish_list=document.getElementById('wishlist');
var main_container=document.getElementById('right-display-activity');
function dash_Board()
{
    my_orders.style.display="none";
    downloads.style.display="none";
    Addresses.style.display="none";
    account_details.style.display="none";
    wish_list.style.display="none";
    dashboard.style.display="block";
    document.getElementById('activity').innerHTML="dash board";
}
function Orders()
{
    dashboard.style.display="none";
    downloads.style.display="none";
    Addresses.style.display="none";
    account_details.style.display="none";
    wish_list.style.display="none";
    my_orders.style.display="block";
    document.getElementById('activity').innerHTML="Orders";
}
function down()
{
    my_orders.style.display="none";
    dashboard.style.display="none";
    Addresses.style.display="none";
    account_details.style.display="none";
    wish_list.style.display="none";
    downloads.style.display="block";
    document.getElementById('activity').innerHTML="Downloads";
}
function add()
{
    dashboard.style.display="none";
    downloads.style.display="none";
    account_details.style.display="none";
    wish_list.style.display="none";
    my_orders.style.display="none";
    Addresses.style.display="block";
    document.getElementById('activity').innerHTML="Addresses";
}
function acc_det()
{
    dashboard.style.display="none";
    downloads.style.display="none";
    Addresses.style.display="none";
    wish_list.style.display="none";
    my_orders.style.display="none";
    account_details.style.display="block";
    document.getElementById('activity').innerHTML="account-details";
}
function wish()
{
    dashboard.style.display="none";
    downloads.style.display="none";
    Addresses.style.display="none";
    account_details.style.display="none";
    my_orders.style.display="none";
    wish_list.style.display="block";
    document.getElementById('activity').innerHTML="Wish list";
}

var header=document.getElementById('side-menu');
var names = header.getElementsByClassName("name");
for (var i = 0; i < names.length; i++) {
  names[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  
  });
}