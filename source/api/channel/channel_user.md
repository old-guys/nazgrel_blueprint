# Group 渠道用户

## 当前渠道用户 [/api/channel/channel_users/my{?device,user_token}]
### 当前渠道用户 [GET]
获取当前渠道用户信息数据

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (myChannelUser) - 渠道用户信息
    + Body

            {
              "code": 0,
              "data": {
                "name": "测试渠道",
                "shop_name": "李小宝的店",
                "channel": {
                  "id": 1,
                  "name": "测试总代",
                  "category": "seed_shopkeeper",
                  "category_text": "种子店主",
                  "source": "always",
                  "source_text": "奥维思"
                },
                "shopkeeper_user_id": 25998,
                "shop_id": 2,
                "shopkeeper": {
                  "user_id": 25998,
                  "user_name": "高强",
                  "user_grade": "grade_platinum",
                  "user_grade_text": "白金店主",
                  "user_phone": "13661638426",
                  "user_photo": "http://inte.ishanggang.com/upload/upload/user/Head/user_25998_1505274624483.jpeg",
                  "created_at": "2017-07-29T01:37:33.000+08:00"
                },
                "reward": {
                  "invite_children_reward_amount": "12900",
                  "children_comission_amount": "23.65335",
                  "invite_children_amount": "2300.0",
                  "indirectly_descendant_amount": "537.55685"
                }
              }
            }


## Data Structures
### myChannelUser (object)
+ name: 测试渠道 (string) - 渠道名称
+ shop_name: 李小宝的店 (string) - 店铺名称
+ shopkeeper (object) - 店主
  + id: 1 (number) - 渠道ID
  + name: 测试总代 (string) - 渠道名称
  + category: seed_shopkeeper (string) - 渠道类型
  + category_text: 种子店主 (string) - 渠道类型文本描述
  + source: always (string) - 渠道来源
  + source_text: 奥维思 (string) - 渠道来源文本描述
+ shopkeeper_user_id: 16543 (number) - 店主用户ID
+ shop_id: 49 (number) - 店铺ID
+ shopkeeper (object) - 店主
  + user_id: 16543 (number) - 爱上岗用户ID
  + user_name: 李明松 (string) - 用户姓名
  + user_grade: grade_platinum (string) - 店主等级
  + user_grade_text: 白金店主 (string) - 店主等级文本描述
  + user_phone: 18656783389 (string) - 用户手机号
  + user_photo: http://img.ishanggang.com/upload/upload/user/20170505/Head_20170505162149_832.jpg (string) - 用户头像
  + created_at: `2017-08-21T11:52:03.000+08:00` (string) - 创建时间
+ reward (object) - 奖励
  + invite_children_reward_amount: 9900 (string) - 培训奖励
  + children_comission_amount: 247.8153 (string) - 团队佣金
  + invite_children_amount: 2650.0 (string) - 奖励提成
  + indirectly_descendant_amount: 72.4843 (string) - 佣金提成
