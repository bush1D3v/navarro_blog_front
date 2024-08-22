FROM node:20

RUN apt-get update && apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    git-all

WORKDIR /app

COPY . .

RUN git config --global --add safe.directory /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
