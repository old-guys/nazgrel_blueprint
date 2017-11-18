# Group Guide

## 安装依赖

```
npm install -g api-mock drakov aglio
```

## 启动 Mock server

```
drakov -f source/api/**/*.md -p 3006
```

## 测试接口

+ ping 接口

请求

```
curl localhost:3006/api/mobile/ping?device=h5 -H "Content-Type: application/json"
```

结果

```
{
    "ping": "pong"
}
```

+ ping db

请求

```
curl localhost:3006/api/mobile/ping/ping_db?device=h5 -H "Content-Type: application/json"
```

结果

```
{
    "code": 0,
    "data": {
        "id": 1,
        "email": "test@qq.com",
        "created_at": "2017-11-08T07:53:13.000Z",
        "updated_at": "2017-11-08T09:43:49.000Z"
    }
}
```

+ 登陆

请求

```
curl "localhost:3006/api/mobile/auth/login?device=h5" -H "Content-Type: application/json" -X POST -d '{"login": "test@qq.com","password": "11111111"}'
```

结果

```
{
    "code": 0,
    "data": {
        "id": 1,
        "email": "test@qq.com",
        "created_at": "2017-11-08T07:53:13.000Z",
        "updated_at": "2017-11-09T07:29:25.000Z",
        "user_token":"waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4="
    }
}
```

+ auth ping

请求

```
curl 'localhost:3006/api/channel/auth/ping_db?device=h5&user_token=waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4=' -H "Content-Type: application/json"
```

结果

```
{
    "code": 0,
    "data": {
        "id": 1,
        "email": "test@qq.com",
        "created_at": "2017-11-08T07:53:13.000Z",
        "updated_at": "2017-11-08T09:43:49.000Z"
    }
}
```
