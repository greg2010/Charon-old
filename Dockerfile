FROM nginx:1.13.2-alpine

RUN mkdir -p /app
COPY build/ /app/

ADD nginx.conf /etc/nginx/
ADD charon.sv.conf /etc/supervisor/conf.d/

RUN apk update
RUN apk add supervisor

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/charon.sv.conf"]