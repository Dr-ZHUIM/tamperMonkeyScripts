document.addEventListener("keydown", function (e) {
  if (e.ctrlKey) {
    let wrapper = document.getElementsByClassName("to-search-wrap");
    let linkText = wrapper[0].children[0].textContent.split("查看全部包含“")[1].split("”的文档")[0];
    let input = document.createElement("input");
    input.setAttribute("value",linkText);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }
  setTimeout(function(){
    document.getElementsByClassName("dialog-mask")[0].style.display = "none";
    document.getElementsByClassName("copy-limit-dialog-v2")[0].style.display = "none";
  },1)
})