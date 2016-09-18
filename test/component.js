import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import { DownloadComponent } from '../src/components/download'

const context = {
  managr: {
    fileAPI: {
      readAsBlob (file) {
        return new Promise((resolve) => {
          resolve(new Blob(['just some **markdown** formatted text'], {type: 'text/markdown'}))
        })
      }
    }
  }
}
const props = {
  file: {
    name: 'fakefile'
  }
}

test('renders download button', (t) => {
  const wrapper = shallow(<DownloadComponent {...props} />, { context })
  t.is(wrapper.find('button').length, 1)
})

test.cb('displays alert when downloads are not supported', (t) => {
  global.window = { alert () { t.end() } }
  const wrapper = shallow(<DownloadComponent {...props} />, { context })
  wrapper.instance().read()
})

test('initiates the download', (t) => {
  global.Blob = () => {}
  const wrapper = shallow(<DownloadComponent {...props} />, { context })
  // has to throw error since we are in an non-browser environment
  t.throws(wrapper.instance().read(), '(0 , _fileSaver.saveAs) is not a function')
})
