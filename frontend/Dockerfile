# Use a simple HTTP server to serve static HTML
FROM httpd:latest
COPY ./index.html /usr/local/apache2/htdocs/

# Set the ServerName to avoid the warning
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf




# FROM nginx:latest
# COPY ./index.html /usr/share/nginx/html/index.html
# COPY ./nginx.conf /etc/nginx/nginx.conf