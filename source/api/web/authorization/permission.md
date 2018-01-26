# Group 权限管理

## 权限 [/api/web/permissions{?device,user_token}]
### 权限列表 [GET]
获取权限列表数据

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 权限 Token

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + total_count: 2 (number) - 总条数
            + total_pages: 1 (number) - 总页数
            + current_page: 1 (number) - 当前页
            + next_page (number, nullable) - 下一页
            + prev_page (number, nullable) - 前一页
            + first_page? (boolean) - 是否第一页
            + last_page? (boolean) - 是否最后一页
            + per_page: 15 (number) - 每页条数
            + page: 1 (number) - 页码
            + models (array[SamplePermission], fixed)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "total_count": 2,
                    "total_pages": 1,
                    "current_page": 1,
                    "next_page": null,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": true,
                    "per_page": 15,
                    "page": 0,
                    "models": [
                        {
                            "id": 1,
                            "name": "运营人员",
                            "permissions": [
                                {
                                    "id": 4,
                                    "name": "权限配置",
                                    "subject": "权限管理",
                                    "uid": "/permissions",
                                    "updated_at": "2018-01-19T14:56:20.000+08:00",
                                    "created_at": "2018-01-19T14:56:20.000+08:00"
                                },
                                {
                                    "id": 7,
                                    "name": "权限配置",
                                    "subject": "权限管理",
                                    "uid": "/permissions",
                                    "updated_at": "2018-01-19T15:27:32.000+08:00",
                                    "created_at": "2018-01-19T15:27:32.000+08:00"
                                }
                            ],
                            "created_at": "2018-01-19T15:56:55.000+08:00",
                            "updated_at": "2018-01-19T15:56:55.000+08:00"
                        },
                        {
                            "id": 2,
                            "name": "开发人员",
                            "permissions": [
                                {
                                    "id": 4,
                                    "name": "权限配置",
                                    "subject": "权限管理",
                                    "uid": "/permissions",
                                    "updated_at": "2018-01-19T14:56:20.000+08:00",
                                    "created_at": "2018-01-19T14:56:20.000+08:00"
                                },
                                {
                                    "id": 7,
                                    "name": "权限配置",
                                    "subject": "权限管理",
                                    "uid": "/permissions",
                                    "updated_at": "2018-01-19T15:27:32.000+08:00",
                                    "created_at": "2018-01-19T15:27:32.000+08:00"
                                }
                            ],
                            "created_at": "2018-01-19T16:04:00.000+08:00",
                            "updated_at": "2018-01-19T16:04:00.000+08:00"
                        }
                    ]
                }
            }

### 创建权限 [POST]
创建权限

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 权限 Token

+ Request (application/json)
    + Attributes (object)
        + permission (PermissionParams)
            + `name`: `开发人员` (string, required) - 权限名称
            + `subject`: `权限配置` (string, optional) - 主题
            + `uid`: `/permissions` (string, optional) - UID

    + Body

            {
                "permission": {
                    "name": "开发人员",
                    "subject": "权限配置",
                    "uid": "/permissions",
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SamplePermission)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 2,
                    "name": "开发人员",
                    "permissions": [
                        {
                            "id": 4,
                            "name": "权限配置",
                            "subject": "权限管理",
                            "uid": "/permissions",
                            "updated_at": "2018-01-19T14:56:20.000+08:00",
                            "created_at": "2018-01-19T14:56:20.000+08:00"
                        },
                        {
                            "id": 7,
                            "name": "权限配置",
                            "subject": "权限管理",
                            "uid": "/permissions",
                            "updated_at": "2018-01-19T15:27:32.000+08:00",
                            "created_at": "2018-01-19T15:27:32.000+08:00"
                        }
                    ],
                    "created_at": "2018-01-19T16:04:00.000+08:00",
                    "updated_at": "2018-01-19T16:04:00.000+08:00"
                }
            }


## 查看或者编辑权限 [/api/web/permissions/{id}{?device,user_token}]
### 权限详情 [GET]
通过权限ID 获取权限详情

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 权限 Token
    + id: 1 (string, required) - 权限ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SamplePermission)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 2,
                    "name": "开发人员",
                    "permissions": [
                        {
                            "id": 4,
                            "name": "权限配置",
                            "subject": "权限管理",
                            "uid": "/permissions",
                            "updated_at": "2018-01-19T14:56:20.000+08:00",
                            "created_at": "2018-01-19T14:56:20.000+08:00"
                        },
                        {
                            "id": 7,
                            "name": "权限配置",
                            "subject": "权限管理",
                            "uid": "/permissions",
                            "updated_at": "2018-01-19T15:27:32.000+08:00",
                            "created_at": "2018-01-19T15:27:32.000+08:00"
                        }
                    ],
                    "created_at": "2018-01-19T16:04:00.000+08:00",
                    "updated_at": "2018-01-19T16:04:00.000+08:00"
                }
            }

### 更新权限 [PUT]
通过渠道id更新权限的名称, 登陆密码, 状态等

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 权限 Token
    + id: 1 (number, required) - 权限id

+ Request (application/json)
    + Attributes (object)
        + permission (PermissionParams)
            + `name`: `开发人员` (string, required) - 权限名称
            + `subject`: `权限配置` (string, optional) - 主题
            + `uid`: `/permissions` (string, optional) - UID

    + Body

            {
                "permission": {
                    "name": "开发人员",
                    "subject": "权限配置",
                    "uid": "/permissions",
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SamplePermission)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 2,
                    "name": "开发人员",
                    "permissions": [
                        {
                            "id": 4,
                            "name": "权限配置",
                            "subject": "权限管理",
                            "uid": "/permissions",
                            "updated_at": "2018-01-19T14:56:20.000+08:00",
                            "created_at": "2018-01-19T14:56:20.000+08:00"
                        },
                        {
                            "id": 7,
                            "name": "权限配置",
                            "subject": "权限管理",
                            "uid": "/permissions",
                            "updated_at": "2018-01-19T15:27:32.000+08:00",
                            "created_at": "2018-01-19T15:27:32.000+08:00"
                        }
                    ],
                    "created_at": "2018-01-19T16:04:00.000+08:00",
                    "updated_at": "2018-01-19T16:04:00.000+08:00"
                }
            }

### 删除权限 [DELETE]
删除权限

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 权限 Token
    + id: 3 (number, required) - 权限id

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SamplePermission)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 2,
                    "name": "开发人员",
                    "permissions": [
                        {
                            "id": 4,
                            "name": "权限配置",
                            "subject": "权限管理",
                            "uid": "/permissions",
                            "updated_at": "2018-01-19T14:56:20.000+08:00",
                            "created_at": "2018-01-19T14:56:20.000+08:00"
                        },
                        {
                            "id": 7,
                            "name": "权限配置",
                            "subject": "权限管理",
                            "uid": "/permissions",
                            "updated_at": "2018-01-19T15:27:32.000+08:00",
                            "created_at": "2018-01-19T15:27:32.000+08:00"
                        }
                    ],
                    "created_at": "2018-01-19T16:04:00.000+08:00",
                    "updated_at": "2018-01-19T16:04:00.000+08:00"
                }
            }

## Data Structures
### PermissionParams (object)
+ `name`: `开发人员` (string) - 名称
### SamplePermission (object)
+ `id`: 1 (number) - ID
+ `name`: `角色配置` (string) - 名称
+ `subject`: `权限管理` (string) - 主题
+ `uid`: `/permissions` (string) - UID
+ `created_at`: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
+ `updated_at`: `2017-08-10T04:42:08.000+08:00` (string) - 更新时间
