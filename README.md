# gcloud-partner-api-docs

https://cpapi.gabia.com/docs

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
> Docs on https://cpapi.gabia.com/docs

```
$ cd /home/node/cpapi/docs
$ git clone https://gitlab.gabia.com/cloud/service/gcloud-partner-api-docs.git ./
$ npm run build
```

### Dev
```
$ npm run build:dev
```