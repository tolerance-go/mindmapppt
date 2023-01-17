import path from 'path'
import { xmindToMMData } from '../xmindToMMData'

describe('xmindToMMData', () => {
   test('xmindToMMDataV2x', async () => {
      expect(
         JSON.stringify(
            xmindToMMData(path.join(__dirname, 'xmind-data-2.x')),
            null,
            2,
         ),
      ).toMatchSnapshot()
   })

   test('version range', () => {
      expect(() =>
         xmindToMMData(path.join(__dirname, 'xmind-data-3.x-fake')),
      ).toThrowErrorMatchingSnapshot()
   })
})
