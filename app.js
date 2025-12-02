'use strict'

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import morgan from 'morgan'
import router from './utils/routes.js'
dotenv.config()

const app = express()
app.use

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const logsStream = fs.createWriteStream(path.join(__dirname, 'logs.log'), {flags:'a'})
app.use(morgan('combined', {stream: logsStream}))

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())
app.use( router)
app.use(express.static(path.join(__dirname, '/public')))

app.listen(process.env.API_PORT, ()=>console.log(`API Dashboard ISO Versi ${process.env.API_VERSION} berjalan pada port ${process.env.API_PORT}.`))