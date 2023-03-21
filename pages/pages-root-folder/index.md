---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
# header:
#   image_fullwidth: layout-front.jpg

widget1:
  title: "Why?"
  image: prostate_pixelated-302x182.png
  text: 'At different times in our careers, we all struggled to find a robust perfusion analysis software producing results of known quality, evaluating, or implementing perfusion tools. We want to make that process easier!'
widget2:
  title: "Who?"
  image: friends-302x182.png
  text: 'We are an inclusive team of volunteers with the expertise and passion in perfusion analysis, open source software and reproducible science. Join our growing group to help us make a difference!'
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
  url: '/about/'
  text: Learn more ›
  style: alert

preamble:
  text: PLEASE NOTE that this website is currently not updated, as we are designing a new website. STAY TUNED

permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

