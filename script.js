const yesBtn = document.getElementById("yes")
const noBtn = document.getElementById("no")
const onlyBtn = document.getElementById("only")
const modal = document.querySelector(".modal")
const hidden = document.querySelectorAll(".hidden")

let count = 0

const array = [
	"You sure?",
	"Really sure?",
	"Double sure?",
	"Pretty please?🥺🥺🥺",
	"You're being heartless",
	"Green button?🥺",
	"Second thoughts?",
	"Third thoughts?",
	"I'll cook for you🥺🥺🥺",
	"Pretty please with a cherry on top?",
]

onlyBtn.addEventListener('click', () => {
	modal.classList.remove("modal_hidden")
	document.querySelector('.container').remove()
})

yesBtn.addEventListener('click', () => {
	modal.classList.remove("modal_hidden")
	document.querySelector('.container').remove()
})

noBtn.addEventListener('click', () => {
	if (count < array.length) {
		noBtn.innerHTML = array[count]
	} else {
		noBtn.remove()
		yesBtn.remove()
		hidden.forEach((el) => el.classList.remove("hidden"))
	}
	count++
	let size = count > 0 ? count/10 : 0.1
	yesBtn.style.fontSize = 1.5 + size*3 + "rem"
	noBtn.style.fontSize = 1.5 - size + "rem"
})
