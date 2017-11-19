# Group Shopkeepers

## 查询店主 [/api/web/shopkeepers/check{?device,user_token,phone,user_id}]
### Request shopkeeper check [GET]
通过手机号, 店主用户ID, 获取店主信息

+ Attributes (object)
    + id: 1 (number) - ID
    + user_id: 1 (number) - 用户ID
    + user_name: Andox (string) - 姓名
    + user_phone: 15888888888 (string) - 手机号
    + shop_id: 1 (string) - 店铺ID
    + created_at: 2017-11-16T17:48:22.000+08:00 (string) - 创建时间

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + phone: 15888888888 (string, required) - 店主手机号
    + user_id: 12345 (number) - 店主用户ID

+ Response 200 (application/json;charset=UTF-8)
    + Body

            {
              "code": 0,
              "data": {
                "id": 1,
                "user_id": 12345,
                "user_name": "Andox",
                "user_phone": "15888888888",
                "user_photo": "http://zmcimg.ishanggang.com/default/shop/keeper/default_avatar.png",
                "shop_id": 1,
                "created_at": "2017-11-16T17:48:22.000+08:00"
              }
            }
