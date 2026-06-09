window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  menuSettings: { 
    zoom: "Double-Click"
  },
  MathZoom: {
    styles: {
      "#MathJax_Zoom": {
        "background-color": "#737587",
        color: "#FFFFFF"
      }
    }
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})
