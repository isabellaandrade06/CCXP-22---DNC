function Tabuada(){
    var num = window.document.getElementById ('num')
    var end = document.getElementById('end')
    var n = Number(num.value)
    var e = Number(end.value)
    var r = ''
    var res = window.document.getElementById ('resposta')
    r = n*e
    res.innerHTML = `A resposta é: ${r}`
}
