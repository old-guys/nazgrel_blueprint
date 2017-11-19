# Group ConstantSetting

## constant_setting [/api/constant_setting{?device}]

### Request constant_setting [GET]
获取全局数据

+ Parameters
    + device: web (string, required) - 设备类型

+ Attributes (object)
    + md5 0513016322ac1698f09d94a93eb52f3e (string) - 数据的md5

+ Response 200 (application/json;charset=UTF-8)

    + Body

            {
              "code": 0,
              "data": {
                "foo": "foo",
                "md5": "0513016322ac1698f09d94a93eb52f3e"
              }
            }

## constant_setting enum_field [/api/web/constant_setting/enum_field{?device}]
### Request enum_field constant_setting [GET]
获取下来类型字段的选项信息

+ Attributes (object)
    + md5 0513016322ac1698f09d94a93eb52f3e (string) - 数据的md5

+ Parameters
    + device: web (string, required) - 设备类型

+ Response 200
    + Body

            {
              "code": 0,
              "data": {
                "channel": {
                  "category": {
                    "seed_shopkeeper": "种子店主",
                    "first_agent": "一级代理",
                    "channel_manager": "渠道经理"
                  },
                  "source": {
                    "always": "奥维思",
                    "weichaishi": "微差事",
                    "other": "其他渠道"
                  }
                },
                "order": {
                  "order_status": {
                    "awaiting_payment": "待付款",
                    "awaiting_delivery": "待发货",
                    "deliveried": "已发货",
                    "finished": "已完成",
                    "canceled": "已取消",
                    "finished_trouble": "已完成(异常)"
                  },
                  "order_type": {
                    "create_shop": "开店订单",
                    "shopkeeper_order": "店主订单",
                    "third_order": "三方订单"
                  },
                  "ref_type": {
                    "wechat_friend": "微信好友",
                    "app": "app",
                    "wechat_moment": "微信朋友圈",
                    "qq": "qq",
                    "qq_zone": "qq空间",
                    "sms": "短信",
                    "qrcord": "二维码"
                  },
                  "comm_setted": {
                    "yes": "是",
                    "no": "否"
                  },
                  "payed_push": {
                    "yes": "是",
                    "no": "否"
                  },
                  "global_freight_flag": {
                    "yes": "是",
                    "no": "否"
                  }
                },
                "shopkeeper": {
                  "user_grade": {
                    "grade_platinum": "白金店主",
                    "grade_gold": "黄金店主",
                    "grade_trainee": "见习店主"
                  }
                },
                "md5": "5bcd50b80fc15455db23f438f1311adc"
              }
            }
