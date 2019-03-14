---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: layout-front.jpg

widget1:
  title: "Why?"
  image: prostate_pixelated-302x182.png
  text: 'At different times in our careers, we all struggled to find a robust perfusion analysis software producing results of known quality, evaluating, or implementing perfusion tools. We want to make that process easier!'
widget2:
  title: "Who?"
  image: friends-302x182.png
  text: 'We are an inclusive team of volunteers with the expertise and passion in perfusion analysis, open source software and reproducible science. Join our growing group to help us make a difference!'

  #video: '<a href="#" data-reveal-id="videoModal"><img src="http://phlow.github.io/feeling-responsive/images/start-video-feeling-responsive-302x182.jpg" width="302" height="182" alt=""/></a>'
widget3:
  title: "What?"
  image: curve_segment_larger-302x182.png  
  text: 'We pursue a number of goals centered around organizing our understanding of the capabilities of the existing open source tools, and developing best practices for perfusion tool evaluation.'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
callforaction:
  url: '/info/'
  text: Learn more ›
  style: alert

preamble:
  text: OSIPI mission is to promote the sharing of perfusion imaging software in order to eliminate the practice of duplicate development, improve the reproducibility of perfusion imaging research, and speed up the translation into tools for discovery science, drug development and clinical practice

permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
