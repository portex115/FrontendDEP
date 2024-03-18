<script setup>

</script>

<template>
  <div class="slideshow-container">
    <div class="mySlides fade">
      <img src="../../image/Banner__3 2.png"  width="100%"/>
      <div class="text-h1">LV Gunpack</div>
    </div>
    <div class="mySlides fade">
      <img src="../../image/Banner__3 2.png"  width="100%"/>
      <div class="text-h1">LV Gunpack</div>
    </div>
    <div class="mySlides fade">
      <img src="../../image/Banner__3 2.png"  width="100%"/>
      <div class="text-h1">LV Gunpack</div>
    </div>
    <a class="prev" onclick="plusSlides(-1)"></a>
    <a class="next" onclick="plusSlides(-1)"></a>
  </div>

  <div style="text-align: center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>

  </div>
</template>

<style>
.slideshow-container{
  max-width: 1000px;
  position: relative;
  margin: auto;
}
.prev, .next{
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: 20px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 1s ease;
  border-radius: 0 3px 3px 0;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev:hover, next:hover{
  background-color: rgba(0, 0, 0, 0.8);
}
.text-h1{
  color: white;
  font-size: 12px;
  position: absolute;
  top: 0;
}

.dot{
  cursor: pointer;
  height: 13px;
  width: 13px;
  margin:0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
@-webkit-keyframes fade {
  from{opacity: .4}
  to{opacity: 1}
}
@keyframes fade {
  from{opacity: .4}
  to{opacity: 1}
}
</style>