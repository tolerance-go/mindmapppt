import path from 'path'
import { parseXmindFile } from '../parseXmindFile'

describe('parseXmindFile', () => {
   test('basic', async () => {
      expect(
         path.relative(
            __dirname,
            await parseXmindFile(
               path.resolve(__dirname, '..', 'demo.xmind'),
               path.join(process.cwd(), 'test-build', 'demo'),
            ),
         ),
      ).toBe('../test-build/demo')
   })
})
