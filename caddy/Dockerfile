FROM caddy:latest

WORKDIR /etc/caddy

RUN mkdir -p /home/admin/web

COPY ./configs/Caddyfile /etc/caddy/Caddyfile

COPY ./index.html /home/admin/web/index.html

EXPOSE 80 443



