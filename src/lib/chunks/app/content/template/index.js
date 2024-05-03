import servableConfig from './felwine.config.js'
import { launch } from "@felwine/server"
import engine from "@felwine/parse-server-engine"

await launch({ servableConfig, engine })
