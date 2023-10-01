import { Page } from 'puppeteer'

export const press = async (page: Page, selector: string) => {
  const el = await page.$(selector)
  if (el) {
    const boundingBox = await el.boundingBox()
    if (boundingBox) {
      const { x, y } = boundingBox
      await page.mouse.move(x + 5, y + 5)
      await page.mouse.down()
    }
  }
}
