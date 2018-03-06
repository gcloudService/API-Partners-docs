# gcloud-partner-api-docs

cpapi.gabia.com/docs

## Infomation
### Apache Reverse Proxy

#### Edit Apache Config
```
$ vi /usr/local/apache/conf/extra/httpd-vhosts.conf

$ vi /usr/local/apache/conf/extra/httpd-ssl.conf
```

```
ProxyPass "/docs" "http://cpapi.gabia.com:9000"
ProxyPassReverse "/docs" "http://cpapi.gabia.com:9000"

ProxyPass "/v1" "https://cpapi.gabia.com:7000/v1"
ProxyPassReverse "/v1" "https://cpapi.gabia.com:7000/v1"
```

#### Check & Restart Apache
```
$ /usr/local/apache/bin/apachectl configtest

## Syntax OK
```

```
$ /usr/local/apache/bin/apachectl stop

$ /usr/local/apache/bin/apachectl start
```

```
$ ps -aef|grep http
```

## Usage
```
$ npm start
```

> Docs on https://cpapi.gabia.com/docs

> Internal server port: **9000**

## Dev Server
```
$ npm start:dev
```
> Internal server port: **9000**

## Deploy
1. Check **version**
1. Check **NODE_ENV**

## Pm2

### Production Server

#### Working Directory
```
/home/node/cpapi/docs/latest
```
