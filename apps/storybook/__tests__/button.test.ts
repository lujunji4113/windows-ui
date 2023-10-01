import puppeteer, { Browser, Page } from 'puppeteer'
import { elementToImage, press } from './utils'

describe('button', () => {
  let browser: Browser

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' })
  })

  describe('standard', () => {
    let page: Page

    beforeAll(async () => {
      page = await browser.newPage()

      await page.goto(
        'http://localhost:6006/iframe.html?id=basic-input-button--primary'
      )

      await new Promise(resolve => {
        setTimeout(() => {
          resolve(null)
        }, 1000)
      })
    })

    it('rest', async () => {
      const image = await elementToImage(page, '#button-standard', {
        scale: 3
      })

      expect(image).toMatchImageSnapshot()
    })

    it('hover', async () => {
      await page.hover('#button-standard')

      const image = await elementToImage(page, '#button-standard', {
        scale: 3
      })

      expect(image).toMatchImageSnapshot()
    })

    it('pressed', async () => {
      await press(page, '#button-standard')

      const image = await elementToImage(page, '#button-standard', {
        scale: 3
      })

      expect(image).toMatchImageSnapshot()
    })
  })

  afterAll(async () => {
    await browser.close()
  })
})
