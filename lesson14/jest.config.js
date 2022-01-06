module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css)": "identity-obj-proxy"  // для других препроцессоров указать нужные расширения
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
