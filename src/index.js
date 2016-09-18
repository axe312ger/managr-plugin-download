import React from 'react'

import { DownloadComponent } from './components/download'

export function DownloadPlugin () {
  return {
    fileActions: [{
      id: 'download',
      title: 'Download',
      component: (props) => <DownloadComponent {...props} />
    }]
  }
}
