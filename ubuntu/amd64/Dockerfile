FROM ubuntu

ARG BUILDPLATFORM=linux/amd64

ARG FRONT_STATIC_PATH=/usr/share/nginx/html
# 创建前端文件
RUN mkdir -p ${FRONT_STATIC_PATH}
# 下载安装nginx
RUN apt-get update && apt-get install -y nginx curl
# 将容器的80端口映射到主机的80端口
COPY ./conf/nginx.conf /etc/nginx/
# 拷贝默认前端文件
COPY ./desc/* ${FRONT_STATIC_PATH}
# 下载nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
# 安装nodejs
RUN apt-get install -y nodejs

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker buildx build --platform linux/amd64 -t registry.cn-hangzhou.aliyuncs.com/docker-image-base/docker-image-base:ubuntu-base -f ./Dockerfile  --push .