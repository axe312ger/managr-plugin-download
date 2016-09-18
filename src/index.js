import React from 'react'

import { downloadComponent } from './components/download'

export function DownloadPlugin () {
  return {
    fileActions: [{
      id: 'download',
      title: 'Download',
      component: (props) => React.createElement(downloadComponent, props)
    }]
  }
}
