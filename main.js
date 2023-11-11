window.onload = function() {
    window.alert("Hãy truy cập bằng máy tính để có thể trải nghiệm tốt hơn nha");
    var x = document.getElementById("myAudio");
    x.play();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('open')[0].addEventListener('click', function () {
      document.getElementsByClassName('card-packaging')[0].classList.add('is-open')
    })
  
    document.getElementsByClassName('close')[0].addEventListener('click', function () {
      document.getElementsByClassName('card-packaging')[0].classList.remove('is-open')
    })
  });



