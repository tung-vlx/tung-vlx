document.addEventListener('click', function(e) {
  console.log(e.target);
})

var welcomeBtn = document.querySelector('.welcome button');
var alert=document.querySelector('.alert_noti');
welcomeBtn.addEventListener('click', function() {
  alert.classList.toggle('hide');
})
