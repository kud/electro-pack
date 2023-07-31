#!/usr/bin/env node
import { buildNativefierApp as nativefier } from "nativefier"
import { paramCase } from "change-case"

import { ChatGPT } from "./apps/index.js"

const apps = [ChatGPT]

apps.forEach((app) => {
  const options = {
    ...app,
    out: `./dist/${paramCase(app.name)}-${Date.now()}/`,
  }

  nativefier(options, (error, appPath) => {
    try {
      console.log(`🔨 App has been nativefied to ${appPath}`)
    } catch (err) {
      console.log(error, err)
    }
  })
})
