const scripts = () => {
	const reveals = document.querySelectorAll('.reveal')
	const revealsObserver = new IntersectionObserver(entries => {
		entries.forEach(({ isIntersecting, target }) => {
			target.classList.toggle('reveal', !isIntersecting)
			target.classList.toggle('revealed', isIntersecting)
		})
	})
	reveals.forEach(element => revealsObserver.observe(element))
}

scripts()

document.addEventListener('astro:after-swap', () => scripts())

// Asegúrate de que este archivo se compile a JS

document.addEventListener('DOMContentLoaded', () => {
	const audio = document.getElementById('miSonido') as HTMLAudioElement
	const btnPlay = document.getElementById('btnPlay') as HTMLButtonElement
	const btnPause = document.getElementById('btnPause') as HTMLButtonElement

	btnPlay.addEventListener('click', () => {
		audio.play()
		btnPlay.classList.add('hidden')
		btnPause.classList.remove('hidden')
	})

	btnPause.addEventListener('click', () => {
		audio.pause()
		btnPause.classList.add('hidden')
		btnPlay.classList.remove('hidden')
	})

	// Extra: cuando el audio termine, vuelve a mostrar play
	audio.addEventListener('ended', () => {
		btnPause.classList.add('hidden')
		btnPlay.classList.remove('hidden')
	})
})
