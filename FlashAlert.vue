  <template>
    <div id="wrap-flash-alerts"></div>
  </template>

  <style>
    #wrap-flash-alerts{
      width:auto;
      max-width: 86%;
      position:absolute;
      top:50%;
      right:20px;
      z-index:-1;
      transform:translateY(-50%);
      -webkit-transform:translateY(-50%);
    }
    #wrap-flash-alerts.active{
      z-index:10000;
    }
    .flash-alert-vuejs{
      margin-bottom:10px;
      position:relative;
      overflow:hidden;
      opacity:0;
      transition: 0.5s all;
      -webkit-transition: 0.5s all;
    }
    .flash-alert-vuejs .flash{
      font-size:16px;
      color:#fff;
      width:auto;
      height:auto;
      max-width:100%;
      diplay:inline-block;
      padding:15px 25px;
      float:right;
    }
    .flash-alert-vuejs.flash-success .flash{
      background:#008E09;
    }
    .flash-alert-vuejs.flash-message .flash{
      background:#3288FF;
    }
    .flash-alert-vuejs.flash-error .flash{
      background:#E80000;
    }
    .flash-alert-vuejs.flash-warning .flash{
      background:#FF8821;
    }

    .fade-in {
      opacity:1;
      transition: 0.5s all;
      -webkit-transition: 0.5s all;
    }
    .fade-out {
      opacity:0;
      transition: 0.5s all;
      -webkit-transition: 0.5s all;
    }
  </style>

  <script>
    var contDiv = 0
    var contTime = 100
    var pushDiv = []

    export default{
      methods: {
        flashAlert: function (type, messageFlash, timer) {
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
      }
    }
  </script>
</body>
</html>
