import './node_modules/reveal.js/dist/reveal.js'
import './node_modules/reveal.js/plugin/highlight/highlight.js'
import './node_modules/reveal.js/plugin/markdown/markdown.js'
import './node_modules/reveal.js/plugin/notes/notes.js'
import './node_modules/reveal.js/plugin/search/search.js'
import './node_modules/reveal.js/plugin/zoom/zoom.js'

Reveal.initialize({
   controls: true,
   progress: true,
   center: true,
   hash: true,

   // Learn about plugins: https://revealjs.com/plugins/
   plugins: [
      RevealZoom,
      RevealNotes,
      RevealSearch,
      RevealMarkdown,
      RevealHighlight,
   ],
})
