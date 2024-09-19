const result = document.getElementById("result1")
const input1 = document.getElementById("num1")
const input2 = document.getElementById("num2")
const sumbtn = document.getElementById("sumbit")
const plusbtn = document.getElementById("plus")
const minusbtn = document.getElementById("minus")
const ymnbtn = document.getElementById("ymn")
const delitbtn = document.getElementById("delit")
plusbtn.onclick = function(){
action = "+"
}
minusbtn.onclick = function(){
  action = "-"
}
ymnbtn.onclick = function(){
  action = "*"
}
delitbtn.onclick = function(){
  action = "/"
}


sumbtn.onclick = function(){
if(action == '-' ){
  const sum = Number(input1.value) - Number(input2.value)
result.textContent = sum
}
if(action == '+' ){
  const sum = Number(input1.value) + Number(input2.value)
result.textContent = sum
}
if(action == '*' ){
  const sum = Number(input1.value) * Number(input2.value)
result.textContent = sum
}
if(action == '/' ){
  const sum = Number(input1.value) / Number(input2.value)
result.textContent = sum
}
}
