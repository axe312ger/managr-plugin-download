import test from 'ava'

import { DownloadPlugin } from '../src'

test('registers download file action', (t) => {
  const downloadPlugin = new DownloadPlugin()
  t.is(downloadPlugin.hasOwnProperty('fileActions'), true)
  t.is(Array.isArray(downloadPlugin.fileActions), true)
  t.is(downloadPlugin.fileActions.length, 1)
})

test('returns download component', (t) => {
  const downloadPlugin = new DownloadPlugin()
  const downloadAction = downloadPlugin.fileActions[0]

  t.is(downloadAction.hasOwnProperty('component'), true)
  t.is(typeof downloadAction.component, 'function')

  const downloadComponent = downloadAction.component({
    file: {
      name: 'fakefile'
    }
  })

  // @todo continue with react specific testing
  t.is(typeof downloadComponent, 'object')
  t.is(downloadComponent.type.displayName, 'DownloadComponent')
})
