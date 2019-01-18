# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.2.1] - 2019-01-18
### Changed
- [Servers](https://cpapi.gabia.com/docs/#tag/Servers)
    - Responses
        - added `firewalls` 
        - deprecated `fws` 

- [Users](https://cpapi.gabia.com/docs/#tag/Users)
    - Responses
        - added `nas` 
        - added `nas_snapshots` 
        - added `firewalls` 

- [Bills](https://cpapi.gabia.com/docs/#tag/Bills)
    - Path Parameters
        - added `bill_date`
        - added `user_id`
    - Responses
        - added `nas_total_charge` 
        - added `nas_snapshot_total_charge` 
        - added `nas` 
        - added `nas_snapshots` 

## [1.2.0] - 2019-01-17

`RELEASED` on [github](https://github.com/gcloudService/API-Partners-docs/releases/tag/1.2.0)

### Added
- [NAS](https://cpapi.gabia.com/docs/#tag/NAS)
- [Firewalls](https://cpapi.gabia.com/docs/#tag/Firewalls)
### Changed
- [operationId](https://swagger.io/specification/#operationObject) 추가

#### API
- [createServer](https://cpapi.gabia.com/docs/#operation/createServer)
    - `fg_id` 파라미터 추가

#### deprecated

> `방화벽 정책 추가`, `방화벽 정책 삭제` API는 더 이상 유효하지 않습니다.
>
> 기존 API와의 호환을 위해 2019.02.28 까지 유지하고 해당 API는 이용중지 됩니다.
> 
> 유지 기간 동안 해당 API를 이용 시 내부적으로 `서버 방화벽 그룹 설정`, `서버 방화벽 그룹 해제`를 호출합니다.


- ~~`POST` /servers/{svr_id}/fws~~
    - Use [**POST /servers/{svr_id}/firewalls/{fg_id}**](https://cpapi.gabia.com/docs/#operation/attachServerFirewall)
- ~~`DELETE` /servers/{svr_id}/fws~~
    - Use [**DELETE /servers/{svr_id}/firewalls/{fg_id}**](https://cpapi.gabia.com/docs/#operation/detachServerFirewall)

## [1.1.2] - 2018-05-15
- `zone_2` 불가

## [1.1.1] - 2018-05-14
- 자원 이름 validation 수정
- 서버 `images`, `snpas` 부연 설명 추가

## [1.1.0] - 2018-04-24
- 폴더 구조 변경
- nightwatch 테스트 추가

## [1.0.0] - 2018-04-20
`RELEASED` on [github](https://github.com/gcloudService/API-Partners-docs)

## [0.8.2] - 2018-04-17
`RELEASED` on [github](https://github.com/gcloudService/API-Partners-docs)

## [0.8.1] - 2018-03-12
`RELEASED` on [github](https://github.com/gcloudService/API-Partners-docs)
[v0.8.1]

## [0.8.0] - 2018-03-07
**static file**
    - express 제거
    - apache static file 사용
**버전 변경**
    - 0.8.0 으로 `RELEASE`

## [1.3.0] - 2018-03-06
**기존 개발 버전과 동일하게 적용**

## [0.1.1] - 2018-03-06
- `/swagger`
    - 실서버 정보로 변경

## [0.1.0] - 2018-03-05
**Copied!!**