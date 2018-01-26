# Group 角色管理

## 角色 [/api/web/roles{?device,user_token}]
### 角色列表 [GET]
获取角色列表数据

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 角色 Token

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
            + models (array[SampleRole], fixed)

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
                                    "name": "角色配置",
                                    "subject": "权限管理",
                                    "uid": "/roles",
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
                                    "name": "角色配置",
                                    "subject": "权限管理",
                                    "uid": "/roles",
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

### 创建角色 [POST]
创建角色

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 角色 Token

+ Request (application/json)
    + Attributes (object)
        + role (RoleParams)
            + `name`: `开发人员` (string, required) - 角色名称
            + `permission_ids`: `1` (array[number], optional) - 权限IDs
              + `2`

    + Body

            {
                "role": {
                    "name": "开发人员",
                    "permission_ids": [1,2]
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleRole)

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
                            "name": "角色配置",
                            "subject": "权限管理",
                            "uid": "/roles",
                            "updated_at": "2018-01-19T15:27:32.000+08:00",
                            "created_at": "2018-01-19T15:27:32.000+08:00"
                        }
                    ],
                    "created_at": "2018-01-19T16:04:00.000+08:00",
                    "updated_at": "2018-01-19T16:04:00.000+08:00"
                }
            }


## 查看或者编辑角色 [/api/web/roles/{id}{?device,user_token}]
### 角色详情 [GET]
通过角色ID 获取角色详情

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 角色 Token
    + id: 1 (string, required) - 角色ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleRole)

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
                            "name": "角色配置",
                            "subject": "权限管理",
                            "uid": "/roles",
                            "updated_at": "2018-01-19T15:27:32.000+08:00",
                            "created_at": "2018-01-19T15:27:32.000+08:00"
                        }
                    ],
                    "created_at": "2018-01-19T16:04:00.000+08:00",
                    "updated_at": "2018-01-19T16:04:00.000+08:00"
                }
            }

### 更新角色 [PUT]
通过渠道id更新角色的名称, 登陆密码, 状态等

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 角色 Token
    + id: 1 (number, required) - 角色id

+ Request (application/json)
    + Attributes (object)
        + role (RoleParams)
            + `name`: `开发人员` (string, required) - 角色名称
            + `permission_ids`: `1` (array[number], optional) - 权限IDs
              + `2`

    + Body

            {
                "role": {
                    "name": "开发人员",
                    "permission_ids": [1,2]
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleRole)

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
                            "name": "角色配置",
                            "subject": "权限管理",
                            "uid": "/roles",
                            "updated_at": "2018-01-19T15:27:32.000+08:00",
                            "created_at": "2018-01-19T15:27:32.000+08:00"
                        }
                    ],
                    "created_at": "2018-01-19T16:04:00.000+08:00",
                    "updated_at": "2018-01-19T16:04:00.000+08:00"
                }
            }

### 删除角色 [DELETE]
删除角色

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 角色 Token
    + id: 3 (number, required) - 角色id

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleRole)

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
                            "name": "角色配置",
                            "subject": "权限管理",
                            "uid": "/roles",
                            "updated_at": "2018-01-19T15:27:32.000+08:00",
                            "created_at": "2018-01-19T15:27:32.000+08:00"
                        }
                    ],
                    "created_at": "2018-01-19T16:04:00.000+08:00",
                    "updated_at": "2018-01-19T16:04:00.000+08:00"
                }
            }

## Data Structures
### RoleParams (object)
+ `name`: `开发人员` (string) - 名称
### SampleRole (object)
+ `id`: 1 (number) - 角色ID
+ `name`: `开发人员` (string) - 名称
+ `permissions`(array[RolePermission], fixed) - 角色权限
### RolePermission (object)
+ `id`: 1 (number) - ID
+ `name`: `角色配置` (string) - 名称
+ `subject`: `权限管理` (string) - 主题
+ `uid`: `/roles` (string) - UID
+ `created_at`: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
+ `updated_at`: `2017-08-10T04:42:08.000+08:00` (string) - 更新时间
