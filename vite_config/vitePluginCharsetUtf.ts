import { type Plugin} from "vite";

export const vitePluginCharsetUtf = (): Plugin => ({
   name: 'vite-plugin-charset',
   transformIndexHtml: () => [{
      injectTo: 'head-prepend',
      tag: 'meta',
      attrs: {
         'charset': 'utf-8'
      }
   }]
})