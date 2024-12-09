#!/usr/bin/env zx

import fse from "fs-extra";
const pkg = fse.readJSONSync("./package.json");
await $`docker buildx build --platform linux/amd64,linux/arm64 -t registry.cn-hangzhou.aliyuncs.com/images-lib/image-base:caddy-${pkg.version} -f ./Dockerfile --push .`;


console.log(
  `镜像 registry.cn-hangzhou.aliyuncs.com/images-lib/image-base:caddy-${pkg.version} 已经推送完毕～`,
);
