/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    serverBuildTarget: "vercel",
    server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
    devServerPort: 8002,
    ignoredRouteFiles: ["**/.*"],
    assetsBuildDirectory: "public/build",
    publicPath: "/build/",
    serverBuildPath: "build/index.js",
    appDirectory: "src/app",
  };