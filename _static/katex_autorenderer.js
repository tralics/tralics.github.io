katex_options = {
delimiters: [
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
    ],

}
document.addEventListener("DOMContentLoaded", function() {
  renderMathInElement(document.body, katex_options);
});
