export const imports = {
  'database.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "database" */ 'database.mdx'),
}
