import React from 'react'
import { saveAs } from 'file-saver'

export const DownloadComponent = React.createClass({
  render () {
    return <button onClick={this.read}>Download</button>
  },
  read () {
    const { file } = this.props
    let isFileSaverSupported = false

    // Simple feature detection
    try {
      isFileSaverSupported = !!new Blob()
    } catch (e) {}

    if (isFileSaverSupported) {
      return this.context.managr.fileAPI.readAsBlob(file)
        .then((blob) => saveAs(blob, file.name))
    }

    window.alert([
      'Unable to download file.',
      '',
      'Your browser does not support stream downloads yet.',
      'Please use a modern browser like Chrome, Firefox or Edge.'
    ].join('\n'))
  },
  propTypes: {
    file: React.PropTypes.object.isRequired
  },
  contextTypes: {
    managr: React.PropTypes.object.isRequired
  }
})
