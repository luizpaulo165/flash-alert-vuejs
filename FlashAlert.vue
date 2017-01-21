<template>
  <div id="wrap-flash-alerts"></div>
</template>

<style>
  #wrap-flash-alerts{
    width:auto;
    max-width: 86%;
    position:absolute;
    top:30%;
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
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
    box-shadow:3px 2px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow:3px 2px 0px rgba(0,0,0,0.1);
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
    background:#4cce7e;
  }
  .flash-alert-vuejs.flash-message .flash{
    background:#13BCFE;
  }
  .flash-alert-vuejs.flash-error .flash{
    background:#D80F33;
  }
  .flash-alert-vuejs.flash-warning .flash{
    background:#FF9900;
  }

  .fade-in {
    opacity:1;
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
  }
  .fade-out {
    opacity:0;
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
  }
</style>
