
import { Builder, Capabilities, By} from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })
test('Chack that add to Duo button adds correct card',async () => {
    await driver.findElement(By.id('draw')).click()
    driver.sleep(5000)
    await driver.findElement(By.className('bot-btn')).click()
    driver.sleep(5000)
    // let resultid = await driver.findElement(By)

})