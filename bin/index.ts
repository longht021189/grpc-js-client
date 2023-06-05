import { Config } from '../src/config'

const configFile: Config = require(`${process.cwd()}/client.grpc.json`)

console.log('process.cwd()', configFile)