
import { test, describe } from 'node:test'
import { expect } from '@hapi/code'

import { memfs } from 'memfs'


// import { cmp, each, Project, Folder, File, Code } from 'jostraca'

import {
  ApiGen
} from '../'



describe('apigen', () => {

  test('happy', async () => {
    expect(ApiGen).exist()

    // const { fs, vol } = memfs({})
    // expect(vol.toJSON()).equal({})
  })

})


