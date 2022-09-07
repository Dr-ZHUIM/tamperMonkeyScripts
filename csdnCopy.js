// get all the codes 
let codes = document.querySelectorAll("code");
// loop all the codes
codes.forEach(code => {
  code.contentEditable = "true"
})
// get all the elements with className signin
let signElements = document.querySelectorAll(".signin");
signElements.forEach(signElement=>{
  signElement.dataset['title'] = "脚本已介入，可以自由复制"
})