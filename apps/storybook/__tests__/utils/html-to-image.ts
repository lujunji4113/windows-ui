import { Page } from 'puppeteer'

const dataURLToBase64 = (dataURL: string) => {
  let i = 0
  for (; i < dataURL.length; i++) {
    if (dataURL[i] === ',') {
      break
    }
  }
  return dataURL.slice(i + 1)
}

interface ElementToImageOptions {
  /**
   * @default 1
   */
  scale?: number
}

export const elementToImage = async (
  page: Page,
  selectors: string,
  options: ElementToImageOptions
) => {
  const dataURL = await page.evaluate(
    (selectors, options) => {
      const element = document.querySelector<HTMLElement>(selectors)
      if (!element) {
        return ''
      }

      // Scale
      const { scale = 1, ...other } = options
      const { offsetWidth, offsetHeight } = element
      const canvasWidth = offsetWidth * scale
      const canvasHeight = offsetHeight * scale

      // @ts-expect-error `htmlToImage` exits in the page's context.
      return htmlToImage.toPng(element, {
        canvasWidth,
        canvasHeight,
        ...other
      }) as string
    },
    selectors,
    options
  )
  const base64 = dataURLToBase64(dataURL)
  const image = Buffer.from(base64, 'base64')
  return image
}
