let index = 0
let turn = 0
let gameMode = 0

let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let pb1 = p1.addEventListener('click', setGameMode1)
let pb2 = p2.addEventListener('click', setGameMode2)
let positions = document.getElementsByName("1")

adPb(p1, p2)

function setGameMode1(){
	positions.forEach(function reset(i){
	i.addEventListener('click', onTile)
	i.innerHTML = ""})
	gameMode = 0
	adPb(p1, p2)
}
function setGameMode2(){
	positions.forEach(function reset(i){
	i.addEventListener('click', onTile)
	i.innerHTML = ""})
	gameMode = 1
	adPb(p2, p1)
}

function adPb(pa, pd){
	pa.classList.add('active')
	pd.classList.remove('active')
}
positions.forEach(function indexar(i) {
	i.id = index
	i.addEventListener('click', onTile)
	index += 1
})

function onTile(ev){
	let element = ev.srcElement
	let position = ev.srcElement.id
	if (gameMode == 0) {	
		p1Play(element, position)
	}else{
		p2Play(element, position)
	}
}
function p2Play(el, pos){
	if(positions[pos].innerHTML == ''){
		el.removeEventListener("click", onTile)
		if(turn == 0){
			positions[pos].innerHTML = "X"
			turn = 1
		}else{
			positions[pos].innerHTML = "O"
			turn = 0
		}
	}
}

function p1Play(el, pos) {
	if(positions[pos].innerHTML == ''){
		if(turn == 0){
			positions[pos].innerHTML = "X"
			el.removeEventListener("click", onTile)
			turn = 1
		}
	machine(el)
	}
}
function machine(el){
	al = Math.round(Math.random() * 8)
	if (positions[al].innerHTML) {
		machine()
	}else{
		positions[al].innerHTML = 'O'
		el.removeEventListener("click", onTile)
		turn = 0
	}
}