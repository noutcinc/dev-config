import { description } from '../src'

describe('this module', () => {
  it('works as expected', async () => {
    expect(description()).toBe(
      'A boilerplate example for a new Typescript project'
    )
  })
})
