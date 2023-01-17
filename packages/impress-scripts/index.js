import './node_modules/impress.js/js/impress.min.js'

// var toggle = document.getElementById('theme-toggle')

// var storedTheme =
//    localStorage.getItem('theme') ||
//    (window.matchMedia('(prefers-color-scheme: dark)').matches
//       ? 'dark'
//       : 'light')
// if (storedTheme)
//    document.documentElement.setAttribute('data-theme', storedTheme)

// toggle.onclick = function () {
//    var currentTheme = document.documentElement.getAttribute('data-theme')
//    var targetTheme = 'light'

//    if (currentTheme === 'light') {
//       targetTheme = 'dark'
//    }

//    document.documentElement.setAttribute('data-theme', targetTheme)
//    localStorage.setItem('theme', targetTheme)
// }

impress().init()

document.addEventListener('impress:stepenter', function (event) {
   document.body.classList.add(
      'active-deep-level-' + event.target.dataset.deepLevel,
   )
})

document.addEventListener('impress:stepleave', function (event) {
   document.body.classList.remove(
      'active-deep-level-' + event.target.dataset.deepLevel,
   )
})
