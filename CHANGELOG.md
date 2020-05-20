# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.5.1] - 2020-05-20
### Changed
- 클라우드 파트너 도입 가이드 v1.1

## [1.5.0] - 2020-02-18
### Added
- g클라우드 서버(베이직/프리미엄 SSD) 추가
- SSD 타입의 g클라우드 스토리지 추가
- MR 템플릿 추가
### Changed
- bills API response 수정
    - 정산금 상세 조회 시 네트워크 사용량이 표기되지 않는 문제 수정
        - 기존의 키 (in_traffic_domestic, out_traffic_domestic, in_traffic_foreign, out_traffic_foreign, in_traffic, out_traffic)은 표시할 방법이 없으므로 deprecated. 항상 0으로 표시됨
        - use_traffic(과금 대상 트래픽), use_traffic_domestic(과금 대상 국내 트래픽), use_traffic_foreign(과금 대상 해외 트래픽) 으로 표기
    - 정산금 상세 조회 및 실시간 사용 요금 조회 시 image_storages 에는 image size 를 표기하도록 수정
    - 실시간 요금 조회 시 servers 및 images 에 서버 OS 종류 (Linux, Windows) 를 표시하도록 수정
    - 기타 오기 수정
- 서버 타입 표기 변경
    - SSD -> 로컬 SSD
    - 베이직/프리미엄 HDD -> 서버 타입이 베이직/프리미엄이고 스토리지 타입이 HDD인 서버
    - 베이직/프리미엄 SSD -> 서버 타입이 베이직/프리미엄이고 스토리지 타입이 SSD인 서버
### Deprecated
- `v1/lbs` API 지원 중단


## [1.4.5] - 2019-12-05
- Error Code 정리

## [1.4.4] - 2019-10-25
- 2nd 존 오픈

## [1.4.3] - 2019-10-16
- MONITORING API 문구 수정
    - 데이터 간격에 대한 설명 추가
    - 조회 기간에 따라 데이터 간격이 달라질 수 있음을 명시
    - 기타 오기 수정

## [1.4.2] - 2019-09-26
### Changed
- redoc@1.22.3
    - issue: https://gitlab.gabia.com/cloud/service/gcloud-partner-api-docs/issues/9

## [1.4.1] - 2019-09-19
### Changed
- user_id validation 수정
    - `^[\w\-]{3,16}$` -> `^[\w]{3,16}$`
    - 관련 문구 수정

## [1.4.0] - 2019-07-05
### Added
- [Certificates](https://cpapi.gabia.com/docs/#tag/Certificates)
    - SSL 인증서 CRUD API 추가
### Changed
- [Loadbalancers](https://cpapi.gabia.com/docs/#tag/LoadBalancers)
    - added `POST /loadbalancers`
    - added `GET /loadbalancers`
    - added `GET /loadbalancers/:lb_id`
    - added `PUT /loadbalancers/:lb_id`
    - added `DELETE /loadbalancers/:lb_id`
    - added `PUT /loadbalancers/:lb_id/ips/:ip_id`
    - added `POST /loadbalancers/:lb_id/firewalls/:fg_id`
    - added `DELETE /loadbalancers/:lb_id/firewalls/:fg_id`
    - added `PUT /loadbalancers/:lb_id/network`
    - added `GET /loadbalancers/:lb_id/monitoring/traffic`
    - added `GET /loadbalancers/:lb_id/monitoring/session`
    - deprecated `POST /lbs`
    - deprecated `GET /lbs`
    - deprecated `GET /lbs/:lb_id`
    - deprecated `PUT /lbs/:lb_id`
    - deprecated `DELETE /lbs/:lb_id`
    - deprecated `PUT /lbs/:lb_id/ips/:ip_id`
    - deprecated `PUT /lbs/:lb_id/setup`
    - deprecated `PUT /lbs/:lb_id/network`
    - deprecated `POST /lbs/:lb_id/ports`
    - deprecated `PUT /lbs/:lb_id/ports`
    - deprecated `DELETE /lbs/:lb_id/ports`
    - deprecated `POST /lbs/:lb_id/ports/:port/servers`
    - deprecated `PUT /lbs/:lb_id/ports/:port/servers`
    - deprecated `DELETE /lbs/:lb_id/ports/:port/servers`
    - deprecated `GET /lbs/:lb_id/monitoring/traffic`
    - deprecated `GET /lbs/:lb_id/monitoring/session`
- [Users](https://cpapi.gabia.com/docs/#tag/Users)
    - Responses
        - added `certificates`
- [Firewalls](https://cpapi.gabia.com/docs/#tag/Firewalls)
    - added `POST /loadbalancers/:lb_id/firewalls/:fg_id`
    - added `DELETE /loadbalancers/:lb_id/firewalls/:fg_id`
    - Responses
        - added `attached_lbs`
- [Monitoring](https://cpapi.gabia.com/docs/#tag/Monitoring)
    - added `GET /loadbalancers/:lb_id/monitoring/traffic`
    - added `GET /loadbalancers/:lb_id/monitoring/session`
    - deprecated `GET /lbs/:lb_id/monitoring/traffic`
    - deprecated `GET /lbs/:lb_id/monitoring/session`
- [Bills](https://cpapi.gabia.com/docs/#tag/Bills)
    - 로드밸런서 국내, 해외 트래픽 요금을 별도로 과금

## [1.3.2] - 2019-06-05
### Changed
- API 가이드 - 비동기작업 내용 수정

## [1.3.1] - 2019-05-14
### Changed
- Snapshots, Images, Server(삭제) 관련 문구 수정

## [1.3.0] - 2019-03-04
### Changed
- [Users](https://cpapi.gabia.com/docs/#tag/Users)
    - `cloud`라는 사용자 생성 불가
    - 파트너 ID와 동일한 사용자 생성 불가

- [Servers](https://cpapi.gabia.com/docs/#tag/Servers)
    - removed `POST /servers/:svr_id/fws`
    - removed `DELETE /servers/:svr_id/fws`
    - Responses
        - removed `fws`

- [Images](https://cpapi.gabia.com/docs/#tag/Images)
    - 파트너 ID와 동일한 사용자가 만든 이미지 자동으로 파트너의 모든 사용자에게 공유
        - 이미지 생성 후 추가되는 사용자도 자동으로 공유 가능

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
> 기존 API와의 호환을 위해 2019.03.03 까지 유지하고 해당 API는 이용중지 됩니다.
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