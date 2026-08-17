# FROM node:14-bullseye AS build

# WORKDIR /app

# # install build dependencies for node-gyp
# RUN apt-get update && apt-get install -y \
#     python3 \
#     make \
#     g++ \
#     && rm -rf /var/lib/apt/lists/*

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build


# FROM nginx:stable-alpine

# RUN rm -rf /usr/share/nginx/html/*

# COPY --from=build /app/dist /usr/share/nginx/html

# EXPOSE 9000

# CMD ["nginx", "-g", "daemon off;"]


FROM node:14-bullseye AS build
WORKDIR /app
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
# ← Add this line
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 9000
CMD ["nginx", "-g", "daemon off;"]