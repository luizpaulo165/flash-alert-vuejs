<template>
  <flashalert>
    <div id="wrap-flash-alerts"></div>
  </flashalert>
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


<script type="text/javascript">
  import indexJs from './index.js'
</script>
