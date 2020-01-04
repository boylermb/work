module.exports = {
  name: 'pandemic-tracker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pandemic-tracker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
