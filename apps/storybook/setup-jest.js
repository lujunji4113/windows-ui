const { toMatchImageSnapshot } = require('jest-image-snapshot')

const defaultOptions = {
  failureThresholdType: 'percent',
  failureThreshold: 0.01,
  customSnapshotIdentifier: ({ currentTestName }) =>
    currentTestName.split(' ').join('-')
}

function toMatchImageSnapshotExtend(received, options) {
  options = Object.assign(defaultOptions, options)

  return toMatchImageSnapshot.call(this, received, options)
}

expect.extend({ toMatchImageSnapshot: toMatchImageSnapshotExtend })
