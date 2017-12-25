# Group Ping

## Ping [/api/dev/ping{?device}]

### 服务器 [GET]
ping api 服务器

+ Parameters
    + device: web (string, required) - 设备类型

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + ping: ping (string)
    + Body

            {
                "ping": "ping"
            }
