import React from 'react'
import createServerApp from 'boiler-room-runner/server'
import routes from './routes'
import { renderToStaticMarkup } from 'react-dom/server'
import Document from './layouts/Document'

const route = process.argv.slice(0).pop()

const renderDocument = (
  content = ''
) => (
  '<!DOCTYPE html>' + renderToStaticMarkup(
    <Document
      content={content}
    />
  )
)

const app = createServerApp({
  routes,
  renderDocument
})

app(route).then((html) => (console.log(html))).catch((e) => console.log(e))
