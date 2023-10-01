import puppeteer, { Browser } from 'puppeteer'
import { elementToImage } from './utils'

describe('button', () => {
  let browser: Browser

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' })
  })

  describe('standard', () => {
    it('rest', async () => {
      const page = await browser.newPage()
      await page.goto(
        'http://localhost:6006/iframe.html?id=basic-input-button--primary'
      )

      await new Promise(resolve => {
        setTimeout(() => {
          resolve(null)
        }, 1000)
      })

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
