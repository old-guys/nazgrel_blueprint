# Group Order

## 订单列表 [/api/channel/orders{?device,user_token,filters%5b%5d}]
### 订单列表 [GET]
获取订单列表数据

+ Attributes (object)
    + total_count: 366 (number) - 总条数
    + per_page: 15 (number) - 每页条数
    + page: 1 (number) - 页码
    + models (array[SampleOrder])

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + filters%5b%5d: filters%5B%5D%5Bfield_type%5D=datetime&filters%5B%5D%5Bname%5D=created_at&filters%5B%5D%5Boperator%5D=within&filters%5B%5D%5Bquery%5D=today (array[Filter], optional) - 过滤参数
        + For example: `filters[][field_type]=datetime&filters[][name]=created_at&filters[][operator]=within&filters[][query]=today`

+ Response 200 (application/json;charset=UTF-8)
    + Body

            {
              "code": 0,
              "data": {
                "total_count": 366,
                "per_page": 15,
                "page": 1,
                "models": [
                  {
                    "id": 10,
                    "order_no": "1008141001729",
                    "user_id": 24420,
                    "shop_name": "解忧杂货店",
                    "shop_username": "吉娜娜",
                    "shop_user_id": 24420,
                    "pay_time": "2017-08-10T04:42:08.000+08:00",
                    "deliver_time": "2017-08-10T04:42:08.000+08:00",
                    "finish_time": "2017-08-10T04:42:08.000+08:00",
                    "cancel_time": "2017-08-10T04:42:08.000+08:00",
                    "express_price": 0,
                    "sale_price": 0,
                    "comm": 3.59,
                    "pay_price": 35.9,
                    "total_price": 35.9,
                    "order_status": "deliveried",
                    "order_status_text": "待付款",
                    "ref_type": "wechat_friend",
                    "ref_type_text": "微信好友",
                    "comm_setted": "no",
                    "comm_setted_text": "否",
                    "payed_push": "yes",
                    "payed_push_text": "是",
                    "global_freight_flag": "yes",
                    "global_freight_flag_text": "是",
                    "created_at": "2017-08-10T04:42:08.000+08:00"
                  },
                  {
                    "id": 11,
                    "order_no": "1008141003813",
                    "user_id": 24420,
                    "shop_name": "解忧杂货店",
                    "shop_username": "吉娜娜",
                    "shop_user_id": 24420,
                    "pay_time": "2017-08-10T04:42:08.000+08:00",
                    "deliver_time": "2017-08-10T04:42:08.000+08:00",
                    "finish_time": "2017-08-10T04:42:08.000+08:00",
                    "cancel_time": "2017-08-10T04:42:08.000+08:00",
                    "express_price": 0,
                    "sale_price": 0,
                    "comm": 3.59,
                    "pay_price": 35.9,
                    "total_price": 35.9,
                    "order_status": "deliveried",
                    "order_status_text": "待付款",
                    "ref_type": "wechat_friend",
                    "ref_type_text": "微信好友",
                    "comm_setted": "no",
                    "comm_setted_text": "否",
                    "payed_push": "yes",
                    "payed_push_text": "是",
                    "global_freight_flag": "yes",
                    "global_freight_flag_text": "是",
                    "created_at": "2017-08-10T04:42:08.000+08:00"
                  }
                ]
              }
            }

## 待发货订单 [/api/channel/orders/awaiting_delivery{?device,user_token,filters%5b%5d}]
### 待发货订单 [GET]
获取待发货订单列表数据

+ Attributes (object)
    + total_count: 366 (number) - 总条数
    + per_page: 15 (number) - 每页条数
    + page: 1 (number) - 页码
    + models (array[SampleOrder])

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + filters%5b%5d: filters%5B%5D%5Bfield_type%5D=datetime&filters%5B%5D%5Bname%5D=created_at&filters%5B%5D%5Boperator%5D=within&filters%5B%5D%5Bquery%5D=today (array[Filter], optional) - 过滤参数
        + For example: `filters[][field_type]=datetime&filters[][name]=created_at&filters[][operator]=within&filters[][query]=today`

+ Response 200 (application/json;charset=UTF-8)
    + Body

            {
              "code": 0,
              "data": {
                "total_count": 366,
                "per_page": 15,
                "page": 1,
                "models": [
                  {
                    "id": 10,
                    "order_no": "1008141001729",
                    "user_id": 24420,
                    "shop_name": "解忧杂货店",
                    "shop_username": "吉娜娜",
                    "shop_user_id": 24420,
                    "pay_time": "2017-08-10T04:42:08.000+08:00",
                    "deliver_time": "2017-08-10T04:42:08.000+08:00",
                    "finish_time": "2017-08-10T04:42:08.000+08:00",
                    "cancel_time": "2017-08-10T04:42:08.000+08:00",
                    "express_price": 0,
                    "sale_price": 0,
                    "comm": 3.59,
                    "pay_price": 35.9,
                    "total_price": 35.9,
                    "order_status": "deliveried",
                    "order_status_text": "待付款",
                    "ref_type": "wechat_friend",
                    "ref_type_text": "微信好友",
                    "comm_setted": "no",
                    "comm_setted_text": "否",
                    "payed_push": "yes",
                    "payed_push_text": "是",
                    "global_freight_flag": "yes",
                    "global_freight_flag_text": "是",
                    "created_at": "2017-08-10T04:42:08.000+08:00"
                  },
                  {
                    "id": 11,
                    "order_no": "1008141003813",
                    "user_id": 24420,
                    "shop_name": "解忧杂货店",
                    "shop_username": "吉娜娜",
                    "shop_user_id": 24420,
                    "pay_time": "2017-08-10T04:42:08.000+08:00",
                    "deliver_time": "2017-08-10T04:42:08.000+08:00",
                    "finish_time": "2017-08-10T04:42:08.000+08:00",
                    "cancel_time": "2017-08-10T04:42:08.000+08:00",
                    "express_price": 0,
                    "sale_price": 0,
                    "comm": 3.59,
                    "pay_price": 35.9,
                    "total_price": 35.9,
                    "order_status": "deliveried",
                    "order_status_text": "待付款",
                    "ref_type": "wechat_friend",
                    "ref_type_text": "微信好友",
                    "comm_setted": "no",
                    "comm_setted_text": "否",
                    "payed_push": "yes",
                    "payed_push_text": "是",
                    "global_freight_flag": "yes",
                    "global_freight_flag_text": "是",
                    "created_at": "2017-08-10T04:42:08.000+08:00"
                  }
                ]
              }
            }

## 退款订单 [/api/channel/orders/refund{?device,user_token,filters%5b%5d}]
### 退款订单 [GET]
获取退款订单列表数据

+ Attributes (object)
    + total_count: 366 (number) - 总条数
    + per_page: 15 (number) - 每页条数
    + page: 1 (number) - 页码
    + models (array[SampleOrder])

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + filters%5b%5d: filters%5B%5D%5Bfield_type%5D=datetime&filters%5B%5D%5Bname%5D=created_at&filters%5B%5D%5Boperator%5D=within&filters%5B%5D%5Bquery%5D=today (array[Filter], optional) - 过滤参数
        + For example: `filters[][field_type]=datetime&filters[][name]=created_at&filters[][operator]=within&filters[][query]=today`

+ Response 200 (application/json;charset=UTF-8)
    + Body

            {
              "code": 0,
              "data": {
                "total_count": 366,
                "per_page": 15,
                "page": 1,
                "models": [
                  {
                    "id": 10,
                    "order_no": "1008141001729",
                    "user_id": 24420,
                    "shop_name": "解忧杂货店",
                    "shop_username": "吉娜娜",
                    "shop_user_id": 24420,
                    "pay_time": "2017-08-10T04:42:08.000+08:00",
                    "deliver_time": "2017-08-10T04:42:08.000+08:00",
                    "finish_time": "2017-08-10T04:42:08.000+08:00",
                    "cancel_time": "2017-08-10T04:42:08.000+08:00",
                    "express_price": 0,
                    "sale_price": 0,
                    "comm": 3.59,
                    "pay_price": 35.9,
                    "total_price": 35.9,
                    "order_status": "deliveried",
                    "order_status_text": "待付款",
                    "ref_type": "wechat_friend",
                    "ref_type_text": "微信好友",
                    "comm_setted": "no",
                    "comm_setted_text": "否",
                    "payed_push": "yes",
                    "payed_push_text": "是",
                    "global_freight_flag": "yes",
                    "global_freight_flag_text": "是",
                    "created_at": "2017-08-10T04:42:08.000+08:00"
                  },
                  {
                    "id": 11,
                    "order_no": "1008141003813",
                    "user_id": 24420,
                    "shop_name": "解忧杂货店",
                    "shop_username": "吉娜娜",
                    "shop_user_id": 24420,
                    "pay_time": "2017-08-10T04:42:08.000+08:00",
                    "deliver_time": "2017-08-10T04:42:08.000+08:00",
                    "finish_time": "2017-08-10T04:42:08.000+08:00",
                    "cancel_time": "2017-08-10T04:42:08.000+08:00",
                    "express_price": 0,
                    "sale_price": 0,
                    "comm": 3.59,
                    "pay_price": 35.9,
                    "total_price": 35.9,
                    "order_status": "deliveried",
                    "order_status_text": "待付款",
                    "ref_type": "wechat_friend",
                    "ref_type_text": "微信好友",
                    "comm_setted": "no",
                    "comm_setted_text": "否",
                    "payed_push": "yes",
                    "payed_push_text": "是",
                    "global_freight_flag": "yes",
                    "global_freight_flag_text": "是",
                    "created_at": "2017-08-10T04:42:08.000+08:00"
                  }
                ]
              }
            }

## 订单详情 [/api/channel/orders/{id}{?device,user_token}]
### 订单详情 [GET]
获取订单详情数据

+ Attributes (SampleOrder)

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 10 (string, required) - 订单ID

+ Response 200 (application/json;charset=UTF-8)
    + Body

            {
              "code": 0,
              "data": {
                "id": 10,
                "order_no": "1008141001729",
                "user_id": 24420,
                "user_phone": "15901836867",
                "user_phone_mask": "*********",
                "user_name": "吉娜娜",
                "recv_user_name": "吉娜娜",
                "recv_phone": "15901836867",
                "shop_id": 1,
                "shop_name": "解忧杂货店",
                "shop_username": "吉娜娜",
                "shop_user_id": 24420,
                "shop_phone": "15901836867",
                "province": "上海",
                "city": "上海市",
                "district": "黄浦区",
                "detail_address": "xxxx",
                "order_type": "third_order",
                "order_type_text": "三方订单",
                "openid": "",
                "remarks": "",
                "user_ticket_id": 1,
                "reduce_price": 0,
                "discount_rate": 0,
                "pay_time": "2017-08-10T04:42:08.000+08:00",
                "deliver_time": "2017-08-10T04:42:08.000+08:00",
                "finish_time": "2017-08-10T04:42:08.000+08:00",
                "cancel_time": "2017-08-10T04:42:08.000+08:00",
                "express_price": 0,
                "sale_price": 0,
                "comm": 3.59,
                "pay_price": 35.9,
                "total_price": 35.9,
                "order_status": "deliveried",
                "order_status_text": "待付款",
                "ref_type": "wechat_friend",
                "ref_type_text": "微信好友",
                "comm_setted": "no",
                "comm_setted_text": "否",
                "payed_push": "yes",
                "payed_push_text": "是",
                "global_freight_flag": "yes",
                "global_freight_flag_text": "是",
                "global_freight": 0,
                "created_at": "2017-08-10T04:42:08.000+08:00"
              }
            }

## Data Structures
### SampleOrder (object)
+ id: 10 (number) - 订单ID
+ order_no: "1008141001729" (string) - 订单编号
+ user_id: 24420 (number) - 用户id
+ user_phone: "15901836867" (string) - 用户手机号
+ user_phone_mask: "*********" (string) - 用户手机号隐藏格式
+ user_name: "吉娜娜" (string) - 用户真实姓名
+ recv_user_name: "吉娜娜" (string) - 收件人姓名
+ recv_phone: "15901836867" (string) - 收件人手机号
+ shop_id: 1 (number) - 店铺id
+ shop_name: "解忧杂货店" (string) - 店铺名
+ shop_username: "吉娜娜" (string) - 店主名
+ shop_user_id: 24420 (number) - 店主id
+ shop_phone: "15901836867" (string) - 店主手机号
+ province: "上海" (string) - 省
+ city: "上海市" (string) - 市
+ district: "黄浦区" (string) - 区
+ detail_address: "xxxx" (string) - 详细地址
+ order_type: "third_order" (string) - 订单类型
+ order_type_text: "三方订单" (string) - 订单类型文本描述
+ openid: "" (string) - openid
+ remarks: "" (string) - 备注
+ user_ticket_id: 1 (number) - 用户优惠券ID
+ reduce_price: 0 (number) - 减免价格
+ discount_rate: 0 (number) - 折扣比例
+ pay_time: "2017-08-10T04:42:08.000+08:00" (string) - 支付日期
+ deliver_time: "2017-08-10T04:42:08.000+08:00" (string) - 订单发货日期
+ finish_time: "2017-08-10T04:42:08.000+08:00" (string) - 订单完成日期
+ cancel_time: "2017-08-10T04:42:08.000+08:00" (string) - 订单取消日期
+ express_price: 0 (number) - 运费
+ sale_price: 0 (number) - 优惠价格
+ comm: 3.59 (number) - 佣金相关值
+ pay_price: 35.9 (number) - 支付价格
+ total_price: 35.9 (number) - 总价
+ order_status: "deliveried" (string) - 订单状态
+ order_status_text: "待付款" (string) - 订单状态文本描述
+ ref_type: "wechat_friend" (string) - 订单渠道
+ ref_type_text: "微信好友" (string) - 订单渠道文本描述
+ comm_setted: "no" (string) - 是否已经结算佣金
+ comm_setted_text: "否" (string) - 是否已经结算佣金文本描述
+ payed_push: "yes" (string) - 是否推送
+ payed_push_text: "是" (string) - 是否推送文本描述
+ global_freight_flag: "yes" (string) - 是否满足全局包邮
+ global_freight_flag_text: "是" (string) - 是否满足全局包邮文本描述
+ global_freight: 0 (number) - 全局包邮金额
+ created_at: "2017-08-10T04:42:08.000+08:00" (string) - 创建时间
