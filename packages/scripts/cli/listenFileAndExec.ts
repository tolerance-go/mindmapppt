import chokidar from 'chokidar'
import debounce from 'lodash.debounce'
import 'zx/globals'

export const listenFileAndExec = async (listenFile: string, exec: string) => {
   chokidar
      .watch(listenFile, {
         // ignoreInitial: true,
      })
      .on(
         'all',
         debounce(async (path) => {
            console.log(`File ${path} has been changed`)

            /**
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
             * 偷偷用一下 eval 没人发现吧～
             */
            eval(`;(async () => {
            await $${exec}
         })()`)
         }, 300),
      )
}
;``
