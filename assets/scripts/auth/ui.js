'use strict'

const setCurrentPage = name => {
  pages.forEach((key, page) => {
    console.log(key, page)
    if (key === name) {
      page.show()
    } else {
      page.hide()
    }
  })
}

const _pages = {}
const addPage = (name, page) => {
  pages[name] = page
}

setUpPages = pages => {
  for (const page of pages) {
    _pages
  }
}

module.exports = {
  setCurrentPage,
  addPage
}
