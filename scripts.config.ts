import { DenonConfig } from "https://deno.land/x/denon@2.4.9/mod.ts"

const config: DenonConfig = {
    scripts: {
        start: {
            cmd: "deno run --allow-net server.tsx",
            desc: "Levanta el server iniciando server.tsx con permisos de net",
        },
    },
}

export default config