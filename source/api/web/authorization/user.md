# Group 用户管理

## 用户 [/api/web/users{?device,user_token,order,query,filters%5b%5d}]
### 用户列表 [GET]
获取用户列表数据

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + order: `users.id desc` (string, optional) - 排序
        + Members
            + users.id desc
            + users.created_at desc
    + query: `157` (string, optional) - 查询
    + filters%5b%5d: filters%5B%5D%5Bfield_type%5D=datetime&filters%5B%5D%5Bname%5D=created_at&filters%5B%5D%5Boperator%5D=within&filters%5B%5D%5Bquery%5D=today (array[Filter], optional) - 过滤参数
        + For example: `filters[][field_type]=datetime&filters[][name]=created_at&filters[][operator]=within&filters[][query]=today`

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
            + models (array[SampleUser])

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
                            "id": 3,
                            "email": "open@qq.com",
                            "phone": "1234567891",
                            "access_locked?": false,
                            "role_type": "open_manager",
                            "role_type_text": "开放平台管理员",
                            "roles": [],
                            "created_at": "2018-01-04T16:43:41.000+08:00",
                            "updated_at": "2018-01-19T16:52:04.000+08:00"
                        },
                        {
                            "id": 2,
                            "email": "test@qq.com",
                            "phone": "1234567890",
                            "access_locked?": false,
                            "role_type": "manager",
                            "role_type_text": "管理员",
                            "roles": [
                                {
                                    "id": 1,
                                    "name": "运营人员"
                                }
                            ],
                            "created_at": "2017-11-22T16:16:47.000+08:00",
                            "updated_at": "2018-01-19T16:49:55.000+08:00"
                        }
                    ]
                }
            }

### 创建用户 [POST]
创建用户

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Request (application/json)
    + Attributes (object)
        + user (UserParams)
            + `email`: `test1@qq.com` (string, required) - 用户名称
            + `phone`: 123456789 (number, required) - 手机号
            + `password`: 11111111 (string, required) - 密码
            + `role_ids`: `1` (array[number], optional) - 角色IDs
              + `2`

    + Body

            {
                "user": {
                    "email": "test1@qq.com",
                    "phone": "123456789",
                    "password": "11111111",
                    "role_ids": [1,2]
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleUser)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 3,
                    "email": "test1@qq.com",
                    "phone": "123456789",
                    "access_locked?": false,
                    "role_type": "open_manager",
                    "role_type_text": "开放平台管理员",
                    "roles": [
                        {
                            "id": 1,
                            "name": "运营人员"
                        },
                        {
                            "id": 2,
                            "name": "开发人员"
                        }
                    ],
                    "created_at": "2018-01-04T16:43:41.000+08:00",
                    "updated_at": "2018-01-22T16:44:23.000+08:00"
                }
            }


## 查看或者编辑用户 [/api/web/users/{id}{?device,user_token}]
### 用户详情 [GET]
通过用户ID 获取用户详情

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 1 (string, required) - 用户ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleUser)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 3,
                    "email": "test1@qq.com",
                    "phone": "123456789",
                    "access_locked?": false,
                    "role_type": "open_manager",
                    "role_type_text": "开放平台管理员",
                    "roles": [
                        {
                            "id": 1,
                            "name": "运营人员"
                        },
                        {
                            "id": 2,
                            "name": "开发人员"
                        }
                    ],
                    "created_at": "2018-01-04T16:43:41.000+08:00",
                    "updated_at": "2018-01-22T16:44:23.000+08:00"
                }
            }

### 更新用户 [PUT]
通过渠道id更新用户的名称, 登陆密码, 状态等

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 1 (number, required) - 用户id

+ Request (application/json)
    + Attributes (object)
        + user (UserParams)
            + `email`: `test1@qq.com` (string, required) - 用户名称
            + `phone`: 123456789 (number, required) - 手机号
            + `password`: 11111111 (string, required) - 密码
            + `role_ids`: `1` (array[number], optional) - 角色IDs
              + `2`

    + Body

            {
                "user": {
                    "email": "test1@qq.com",
                    "phone": "123456789",
                    "password": "11111111",
                    "role_ids": [1,2]
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleUser)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 3,
                    "email": "test1@qq.com",
                    "phone": "123456789",
                    "access_locked?": false,
                    "role_type": "open_manager",
                    "role_type_text": "开放平台管理员",
                    "roles": [
                        {
                            "id": 1,
                            "name": "运营人员"
                        },
                        {
                            "id": 2,
                            "name": "开发人员"
                        }
                    ],
                    "created_at": "2018-01-04T16:43:41.000+08:00",
                    "updated_at": "2018-01-22T16:44:23.000+08:00"
                }
            }

## 更新用户锁定状态 [/api/web/users/{id}/access_status{?device,user_token}]
### 更新用户锁定状态 [PUT]
更新用户锁定状态

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 1 (number, required) - 用户id

+ Request (application/json)
    + Attributes (object)
        + user (UserParams)
            + `access_status`: `1` (enum[string], optional) - 锁定状态
              + `lock` - 锁定
              + `unlock` - 解除锁定

    + Body

            {
                "user": {
                    "access_status": "unlock"
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleUser)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 3,
                    "email": "test1@qq.com",
                    "phone": "123456789",
                    "access_locked?": false,
                    "role_type": "open_manager",
                    "role_type_text": "开放平台管理员",
                    "roles": [
                        {
                            "id": 1,
                            "name": "运营人员"
                        },
                        {
                            "id": 2,
                            "name": "开发人员"
                        }
                    ],
                    "created_at": "2018-01-04T16:43:41.000+08:00",
                    "updated_at": "2018-01-22T16:44:23.000+08:00"
                }
            }

## Data Structures
### UserParams (object)
+ `email`: `test1@qq.com` (string) - 邮箱
+ `access_locked?`: false (boolean) - 访问锁定
### SampleUser (object)
+ `id`: 1 (number) - 用户ID
+ `email`: `test1@qq.com` (string) - 邮箱
+ `phone`: 1234567890 (string) - 手机
+ `role_type`: normal_user (enum[string]) - 角色类型
      + Members
          + manager
          + open_manager
          + normal_user
+ `role_type_text`: 普通用户 (enum[string]) - 角色类型
      + Members
          + 管理员
          + 开放平台管理员
          + 普通用户
+ `role_ids`: `1` (array[number], optional) - 权限IDs
      + `2`
+ `created_at`: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
+ `updated_at`: `2017-08-10T04:42:08.000+08:00` (string) - 更新时间
