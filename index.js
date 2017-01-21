var contDiv = 0
var contTime = 100
var pushDiv = []

flashAlert = function (type, messageFlash, timer){
      var typeFlash
      contDiv += 1

      // types: success, error, warning, message
      switch (type) {
        case 'success' :
          typeFlash = 'flash-success'
        break;
        case 'error' :
          typeFlash = 'flash-error'
        break;
        case 'warning' :
          typeFlash = 'flash-warning'
        break;
        default:
          typeFlash = 'flash-message'
      }

      var divCont = '\
      <div id="flash-'+ contDiv +'" class="flash-alert-vuejs '+ typeFlash +'">\
        <div class="flash">'+ messageFlash +'</div>\
      </div>\
      '

      // inset divCont in div father
      document.getElementById('wrap-flash-alerts').innerHTML += divCont

      // include name class in new array
      pushDiv.push('flash-'+ contDiv +'')

      if (pushDiv.length > 0) {
        document.getElementById('wrap-flash-alerts').classList.add('active')
      }

      // set id in variable flashDiv
      var flashDiv = document.getElementById('flash-'+ contDiv +'')

      // set Class fade-in
      setTimeout(function(){
        flashDiv.classList.add('fade-in')
      }, 100)

      // function remove class fade-in
      function closeFlash(element){
        var timeClose = setTimeout(function(){
          element.classList.remove('fade-in')


          pushDiv.splice(element, 1)

          setTimeout(function(){
            element.remove(element)

            if (pushDiv.length == 0) {
              document.getElementById('wrap-flash-alerts').classList.remove('active')
            }

          }, contTime += 50)


        }, timer += 200)

      }

      // loop closeFlash event
      for (var i = 0; i < pushDiv.length; i++) {
        var elementDiv = document.getElementById(pushDiv[i])

        elementDiv.addEventListener('load', closeFlash(elementDiv), false)
      }
    }

module.exports = flashAlert
