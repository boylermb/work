module.exports = {
  name: 'pandemic-tracker-nx',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pandemic-tracker-nx',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
