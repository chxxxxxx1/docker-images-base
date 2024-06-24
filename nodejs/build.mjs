#!/usr/bin/env zx

import fse from "fs-extra";
const pkg = fse.readJSONSync("./package.json");
await $`docker buildx build --platform linux/amd64,linux/arm64 -t registry.cn-hangzhou.aliyuncs.com/images-lib/image-base:node_18.20.3-${pkg.version} -f ./18.20.3/Dockerfile --push .`;

await $`docker buildx build --platform linux/amd64,linux/arm64 -t registry.cn-hangzhou.aliyuncs.com/images-lib/image-base:node_18.20.3_alpine-${pkg.version} -f ./18.20.3/Dockerfile.alpine --push .`;

console.log(
  `镜像 registry.cn-hangzhou.aliyuncs.com/images-lib/image-base:nginx-${pkg.version} 已经推送完毕～`,
);
console.log(
  `镜像 registry.cn-hangzhou.aliyuncs.com/images-lib/image-base:node_18.20.3_alpine-${pkg.version} 已经推送完毕～`,
);
