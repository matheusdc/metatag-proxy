# metatag-proxy

A simple server that has an iFrame for Youtube videos in full-screen with better `meta` tags on HTML, so the thumbs on Facebook and Twitter look better.

## How to use

Simply run `npm install` to install dependencies and `npm start` to run the project. The app listens on port `3000` by default.

The video ID on Youtube is the last part of the URL:

```
https://www.youtube.com/watch?v=<videoID>
```

To use this proxy, simply access the the server URL and pass the `<videoID>` as a part of the URL as following:

```
http://<server-ip-or-adress>/<videoID>
```
