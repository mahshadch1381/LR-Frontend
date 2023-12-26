From nginx

WORKDIR /usr/share/react

COPY package*.json ./

COPY . .

RUN npm run build

RUN rm -r /usr/share/nginx/html/*

RUN cp -a build/. /usr/share/nginx/html

