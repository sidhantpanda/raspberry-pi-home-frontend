# Raspberry Pi Home Frontend
This is a react based fronted for [Pi home backend](https://github.com/sidhantpanda/raspberry-pi-home-backend). This is a Create React App generated app in the "unejected" state.

## Tutorial
https://medium.com/@sidhantpanda/raspberry-pi-home-automation-with-google-assistant-integration-part-1-software-71b3b8904205

## Clone to your Pi
```
git clone git@github.com:sidhantpanda/raspberry-pi-home-frontend.git
```

## Build

```
npm run build
```

- OR -

```
yarn build
```

## Route your nginx to the build folder
Follow instructions to set up [nginx on raspbian here](https://www.raspberrypi.org/documentation/remote-access/web-server/nginx.md).

Open the default config file
```
sudo vim /etc/nginx/sites-enabled/default
```

Look for the following line and edit it to the build directory of the repo:
```
--  root /var/www/html;
++  root /path/to/repo/build;
```

Save the file and start/restart nginx server
```
sudo service nginx restart
```



##
