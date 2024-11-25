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
