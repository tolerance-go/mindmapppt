import RevealType from 'reveal.js'

declare global {
   export var Reveal: RevealType
   export var RevealZoom: RevealType.PluginFunction
   export var RevealNotes: RevealType.PluginFunction
   export var RevealSearch: RevealType.PluginFunction
   export var RevealMarkdown: RevealType.PluginFunction
   export var RevealHighlight: RevealType.PluginFunction
}
