module.exports = {
  name: 'ExpressInterest',
  api: {
    root: './src/api',
    importAliasRoot: '@/express-interest/api',
  },
  components: [
    {
      id: 'Components',
      root: './src/components',
      importAliasRoot: '@/express-interest/components',
      cssPrefix: 'elsie',
      default: true,
    },
  ],
  containers: {
    root: './src/containers',
    importAliasRoot: '@/express-interest/containers',
  },
};
