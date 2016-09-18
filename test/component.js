import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import { DownloadComponent } from '../src/components/download'

const context = {
  managr: {
    fileAPI: {
      readAsBlob (file) {
        return new Blob(['just some **markdown** formatted text'], {type: 'text/markdown'})
      }
    }
  }
}
const props = {
  file: {
    name: 'fakefile'
  }
}

test('registers download file action', (t) => {
  const wrapper = shallow(<DownloadComponent {...props} />, { context })
  t.is(wrapper.find('button').length, 1)
})
