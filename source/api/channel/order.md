# Group 订单

## 订单列表 [/api/channel/orders{?device,user_token,order,channel_id,query,filters%5b%5d}]
### 订单列表 [GET]
获取订单列表数据

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + order: orders.total_price desc (string, optional) - 排序
        + Members
            + orders.total_price desc
            + shopkeepers.user_name ASC
            + orders.created_at desc
    + channel_id: 1 (enum[string], optional) - 渠道筛选
        + Members
            + 1
            + channel_only - 筛选种子店主
    + query: 1008141001729 (string, optional) - 查询
    + filters%5b%5d: filters%5B%5D%5Bfield_type%5D=datetime&filters%5B%5D%5Bname%5D=created_at&filters%5B%5D%5Boperator%5D=within&filters%5B%5D%5Bquery%5D=today (array[Filter], optional) - 过滤参数
        + For example: `filters[][field_type]=datetime&filters[][name]=created_at&filters[][operator]=within&filters[][query]=today`

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + total_count: 366 (number) - 总条数
            + total_pages: 124 (number) - 总页数
            + current_page: 1 (number) - 当前页
            + next_page (number, nullable) - 下一页
            + prev_page (number, nullable) - 前一页
            + first_page? (boolean) - 是否第一页
            + last_page? (boolean) - 是否最后一页
            + per_page: 15 (number) - 每页条数
            + page: 1 (number) - 页码
            + models (array[SampleOrder], fixed-type)
    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "total_count": 2064,
                    "total_pages": 138,
                    "current_page": 1,
                    "next_page": 2,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": false,
                    "per_page": 15,
                    "page": 0,
                    "models": [
                        {
                            "id": 26976,
                            "order_no": "1001141373765252",
                            "shop_name": "国楠",
                            "shop_username": "国楠",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.009",
                            "pay_price": "0.1",
                            "total_price": "0.1",
                            "order_status": "canceled",
                            "order_status_text": "已取消",
                            "created_at": "2018-01-14T19:00:16.000+08:00"
                        },
                        {
                            "id": 26975,
                            "order_no": "1001141373763441",
                            "shop_name": "国楠",
                            "shop_username": "国楠",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.009",
                            "pay_price": "0.1",
                            "total_price": "0.1",
                            "order_status": "canceled",
                            "order_status_text": "已取消",
                            "created_at": "2018-01-14T18:57:56.000+08:00"
                        },
                        {
                            "id": 26974,
                            "order_no": "1001141373761857",
                            "shop_name": "国楠",
                            "shop_username": "国楠",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.009",
                            "pay_price": "0.1",
                            "total_price": "0.1",
                            "order_status": "canceled",
                            "order_status_text": "已取消",
                            "created_at": "2018-01-14T18:56:35.000+08:00"
                        },
                        {
                            "id": 26972,
                            "order_no": "1001141373759662",
                            "shop_name": "国楠",
                            "shop_username": "国楠",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.012",
                            "pay_price": "0.1",
                            "total_price": "0.1",
                            "order_status": "canceled",
                            "order_status_text": "已取消",
                            "created_at": "2018-01-14T18:50:04.000+08:00"
                        },
                        {
                            "id": 26973,
                            "order_no": "1001141373753980",
                            "shop_name": "❤️我的",
                            "shop_username": "(ಥ_ಥ)✔",
                            "express_price": "0.0",
                            "sale_price": "10.0",
                            "comm": "12.0",
                            "pay_price": "110.0",
                            "total_price": "120.0",
                            "order_status": "canceled",
                            "order_status_text": "已取消",
                            "created_at": "2018-01-14T17:54:55.000+08:00"
                        },
                        {
                            "id": 26971,
                            "order_no": "1001141373751242",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "4.0",
                            "pay_price": "40.0",
                            "total_price": "40.0",
                            "order_status": "awaiting_payment",
                            "order_status_text": "待付款",
                            "created_at": "2018-01-14T11:39:59.000+08:00"
                        },
                        {
                            "id": 26970,
                            "order_no": "1001121373279477",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T16:42:03.000+08:00"
                        },
                        {
                            "id": 26969,
                            "order_no": "1001121373277370",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.01",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T16:38:12.000+08:00"
                        },
                        {
                            "id": 26968,
                            "order_no": "1001121373275178",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.01",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_payment",
                            "order_status_text": "待付款",
                            "created_at": "2018-01-12T16:37:03.000+08:00"
                        },
                        {
                            "id": 26967,
                            "order_no": "1001121373273466",
                            "shop_name": "❤️我的",
                            "shop_username": "(ಥ_ಥ)✔",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T16:22:46.000+08:00"
                        },
                        {
                            "id": 26966,
                            "order_no": "1001121373271159",
                            "shop_name": "❤️我的",
                            "shop_username": "(ಥ_ಥ)✔",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T15:53:57.000+08:00"
                        },
                        {
                            "id": 26965,
                            "order_no": "1001121373269523",
                            "shop_name": "❤️我的",
                            "shop_username": "(ಥ_ಥ)✔",
                            "express_price": "0.0",
                            "sale_price": "100.0",
                            "comm": "1.0",
                            "pay_price": "1.0",
                            "total_price": "10.0",
                            "order_status": "canceled",
                            "order_status_text": "已取消",
                            "created_at": "2018-01-12T15:52:01.000+08:00"
                        },
                        {
                            "id": 26962,
                            "order_no": "1001121373263477",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.01",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "canceled",
                            "order_status_text": "已取消",
                            "created_at": "2018-01-12T15:04:20.000+08:00"
                        },
                        {
                            "id": 26961,
                            "order_no": "1001121373261237",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "10.0",
                            "pay_price": "10.0",
                            "total_price": "10.0",
                            "order_status": "canceled",
                            "order_status_text": "已取消",
                            "created_at": "2018-01-12T14:45:20.000+08:00"
                        },
                        {
                            "id": 26960,
                            "order_no": "1001121373259226",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.01",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "canceled",
                            "order_status_text": "已取消",
                            "created_at": "2018-01-12T14:40:42.000+08:00"
                        }
                    ]
                }
            }

## 待发货订单 [/api/channel/orders/awaiting_delivery{?device,user_token,order,channel_id,query,filters%5b%5d}]
### 待发货订单 [GET]
获取待发货订单列表数据

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + order: orders.total_price desc (string, optional) - 排序
        + Members
            + orders.total_price desc
            + shopkeepers.user_name ASC
            + orders.created_at desc
    + channel_id: 1 (enum[string], optional) - 渠道筛选
        + Members
            + 1
            + channel_only - 筛选种子店主
    + query: 1008141001729 (string, optional) - 查询
    + filters%5b%5d: filters%5B%5D%5Bfield_type%5D=datetime&filters%5B%5D%5Bname%5D=created_at&filters%5B%5D%5Boperator%5D=within&filters%5B%5D%5Bquery%5D=today (array[Filter], optional) - 过滤参数
        + For example: `filters[][field_type]=datetime&filters[][name]=created_at&filters[][operator]=within&filters[][query]=today`

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + total_count: 366 (number) - 总条数
            + total_pages: 124 (number) - 总页数
            + current_page: 1 (number) - 当前页
            + next_page (number, nullable) - 下一页
            + prev_page (number, nullable) - 前一页
            + first_page? (boolean) - 是否第一页
            + last_page? (boolean) - 是否最后一页
            + per_page: 15 (number) - 每页条数
            + page: 1 (number) - 页码
            + models (array[SampleOrder], fixed-type)
    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "total_count": 364,
                    "total_pages": 25,
                    "current_page": 1,
                    "next_page": 2,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": false,
                    "per_page": 15,
                    "page": 0,
                    "models": [
                        {
                            "id": 26970,
                            "order_no": "1001121373279477",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T16:42:03.000+08:00"
                        },
                        {
                            "id": 26969,
                            "order_no": "1001121373277370",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.01",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T16:38:12.000+08:00"
                        },
                        {
                            "id": 26967,
                            "order_no": "1001121373273466",
                            "shop_name": "❤️我的",
                            "shop_username": "(ಥ_ಥ)✔",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T16:22:46.000+08:00"
                        },
                        {
                            "id": 26966,
                            "order_no": "1001121373271159",
                            "shop_name": "❤️我的",
                            "shop_username": "(ಥ_ಥ)✔",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T15:53:57.000+08:00"
                        },
                        {
                            "id": 26953,
                            "order_no": "1001121373245805",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.01",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T13:57:11.000+08:00"
                        },
                        {
                            "id": 26952,
                            "order_no": "1001121373243612",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T13:47:03.000+08:00"
                        },
                        {
                            "id": 26950,
                            "order_no": "1001121373239919",
                            "shop_name": "¥ātomoの㊣",
                            "shop_username": "郑明",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T13:38:04.000+08:00"
                        },
                        {
                            "id": 26947,
                            "order_no": "1001121373233851",
                            "shop_name": "¥ātomoの㊣",
                            "shop_username": "郑明",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T13:36:52.000+08:00"
                        },
                        {
                            "id": 26946,
                            "order_no": "1001121373231980",
                            "shop_name": "¥ātomoの㊣",
                            "shop_username": "郑明",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.01",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T13:36:14.000+08:00"
                        },
                        {
                            "id": 26933,
                            "order_no": "1001121373203632",
                            "shop_name": "测试",
                            "shop_username": "123",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.08",
                            "pay_price": "0.08",
                            "total_price": "0.08",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-12T10:56:55.000+08:00"
                        },
                        {
                            "id": 26918,
                            "order_no": "1001031371461922",
                            "shop_name": "见习的小店",
                            "shop_username": "见习",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.5",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2018-01-03T10:50:12.000+08:00"
                        },
                        {
                            "id": 26120,
                            "order_no": "1012071369657283",
                            "shop_name": "玛莎拉蒂的小店",
                            "shop_username": "玛莎拉蒂V6",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.007",
                            "pay_price": "0.03",
                            "total_price": "0.03",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2017-12-07T15:16:19.000+08:00"
                        },
                        {
                            "id": 26119,
                            "order_no": "1012071369655157",
                            "shop_name": "奔驰的小店",
                            "shop_username": "奔驰",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.007",
                            "pay_price": "0.03",
                            "total_price": "0.03",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2017-12-07T15:08:42.000+08:00"
                        },
                        {
                            "id": 26118,
                            "order_no": "1012071369653935",
                            "shop_name": "奔驰的小店",
                            "shop_username": "奔驰",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.002",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2017-12-07T15:06:16.000+08:00"
                        },
                        {
                            "id": 26116,
                            "order_no": "1012071369649698",
                            "shop_name": "王2的小店",
                            "shop_username": "王2",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.002",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "awaiting_delivery",
                            "order_status_text": "待发货",
                            "created_at": "2017-12-07T14:52:58.000+08:00"
                        }
                    ]
                }
            }

## 退款订单 [/api/channel/orders/refund{?device,user_token,order,channel_id,query,filters%5b%5d}]
### 退款订单 [GET]
获取退款订单列表数据

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + order: orders.total_price desc (string, optional) - 排序
        + Members
            + orders.total_price desc
            + shopkeepers.user_name ASC
            + orders.created_at desc
    + channel_id: 1 (enum[string], optional) - 渠道筛选
        + Members
            + 1
            + channel_only - 筛选种子店主
    + query: 1008141001729 (string, optional) - 查询
    + filters%5b%5d: filters%5B%5D%5Bfield_type%5D=datetime&filters%5B%5D%5Bname%5D=created_at&filters%5B%5D%5Boperator%5D=within&filters%5B%5D%5Bquery%5D=today (array[Filter], optional) - 过滤参数
        + For example: `filters[][field_type]=datetime&filters[][name]=created_at&filters[][operator]=within&filters[][query]=today`

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + total_count: 366 (number) - 总条数
            + total_pages: 124 (number) - 总页数
            + current_page: 1 (number) - 当前页
            + next_page (number, nullable) - 下一页
            + prev_page (number, nullable) - 前一页
            + first_page? (boolean) - 是否第一页
            + last_page? (boolean) - 是否最后一页
            + per_page: 15 (number) - 每页条数
            + page: 1 (number) - 页码
            + models (array[SampleOrder], fixed-type)
    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "total_count": 364,
                    "total_pages": 25,
                    "current_page": 1,
                    "next_page": 2,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": false,
                    "per_page": 15,
                    "page": 0,
                    "models": [
                        {
                            "id": 26970,
                            "order_no": "1001121373279477",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-12T16:42:03.000+08:00"
                        },
                        {
                            "id": 26969,
                            "order_no": "1001121373277370",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.01",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-12T16:38:12.000+08:00"
                        },
                        {
                            "id": 26967,
                            "order_no": "1001121373273466",
                            "shop_name": "❤️我的",
                            "shop_username": "(ಥ_ಥ)✔",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-12T16:22:46.000+08:00"
                        },
                        {
                            "id": 26966,
                            "order_no": "1001121373271159",
                            "shop_name": "❤️我的",
                            "shop_username": "(ಥ_ಥ)✔",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-12T15:53:57.000+08:00"
                        },
                        {
                            "id": 26953,
                            "order_no": "1001121373245805",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.01",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-12T13:57:11.000+08:00"
                        },
                        {
                            "id": 26952,
                            "order_no": "1001121373243612",
                            "shop_name": "@fd**",
                            "shop_username": "美美",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-12T13:47:03.000+08:00"
                        },
                        {
                            "id": 26950,
                            "order_no": "1001121373239919",
                            "shop_name": "¥ātomoの㊣",
                            "shop_username": "郑明",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-12T13:38:04.000+08:00"
                        },
                        {
                            "id": 26947,
                            "order_no": "1001121373233851",
                            "shop_name": "¥ātomoの㊣",
                            "shop_username": "郑明",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.001",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-12T13:36:52.000+08:00"
                        },
                        {
                            "id": 26946,
                            "order_no": "1001121373231980",
                            "shop_name": "¥ātomoの㊣",
                            "shop_username": "郑明",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.01",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-12T13:36:14.000+08:00"
                        },
                        {
                            "id": 26933,
                            "order_no": "1001121373203632",
                            "shop_name": "测试",
                            "shop_username": "123",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.08",
                            "pay_price": "0.08",
                            "total_price": "0.08",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-12T10:56:55.000+08:00"
                        },
                        {
                            "id": 26918,
                            "order_no": "1001031371461922",
                            "shop_name": "见习的小店",
                            "shop_username": "见习",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.5",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2018-01-03T10:50:12.000+08:00"
                        },
                        {
                            "id": 26120,
                            "order_no": "1012071369657283",
                            "shop_name": "玛莎拉蒂的小店",
                            "shop_username": "玛莎拉蒂V6",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.007",
                            "pay_price": "0.03",
                            "total_price": "0.03",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2017-12-07T15:16:19.000+08:00"
                        },
                        {
                            "id": 26119,
                            "order_no": "1012071369655157",
                            "shop_name": "奔驰的小店",
                            "shop_username": "奔驰",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.007",
                            "pay_price": "0.03",
                            "total_price": "0.03",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2017-12-07T15:08:42.000+08:00"
                        },
                        {
                            "id": 26118,
                            "order_no": "1012071369653935",
                            "shop_name": "奔驰的小店",
                            "shop_username": "奔驰",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.002",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2017-12-07T15:06:16.000+08:00"
                        },
                        {
                            "id": 26116,
                            "order_no": "1012071369649698",
                            "shop_name": "王2的小店",
                            "shop_username": "王2",
                            "express_price": "0.0",
                            "sale_price": "0.0",
                            "comm": "0.002",
                            "pay_price": "0.01",
                            "total_price": "0.01",
                            "order_status": "refund",
                            "order_status_text": "退款",
                            "created_at": "2017-12-07T14:52:58.000+08:00"
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
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (Order) - 订单详情

    + Body

            {
              "code": 0,
              "data": {
                "id": 26096,
                "order_no": "1012051369609971",
                "order_subs": [
                  {
                    "id": 32604,
                    "sub_order_no": 1112051369610020,
                    "order_express": {
                      "id": 165,
                      "express_no": "543543532532",
                      "express_name": "顺丰",
                      "express_price": null,
                      "created_at": "2017-12-05T17:30:50.000+08:00"
                    },
                    "order_details": [
                      {
                        "id": 34625,
                        "product_sku_id": 146,
                        "product_id": 59,
                        "product_skuinfo": "20172018082400a00110,全国最小最垃圾的整装组合套装1瓶*1ML",
                        "product_name": "联合利华最新牛逼的商品",
                        "product_image": "prodImages/a205c91bcfda45aaa93f7715aa7a2a51.png",
                        "product_num": 1,
                        "product_market_price": "0.02",
                        "product_sale_price": "0.01",
                        "commission_rate": 11.0,
                        "express_price": "0.0",
                        "product_group_id": null,
                        "product_old_sale_price": "0.01",
                        "is_free_delivery": "no",
                        "is_free_delivery_text": "否",
                        "product_label_type": "general",
                        "product_label_type_text": "普通商品",
                        "created_at": "2017-12-05T17:24:40.000+08:00",
                        "updated_at": "2017-12-06T11:10:35.000+08:00"
                      }
                    ],
                    "supplier": {
                      "id": 1,
                      "industry_id": "c8a7b59c2e82487ea5024e8d555437cd",
                      "sup_no": "GT20170627002",
                      "name": "联合利华",
                      "url": "",
                      "logo": "",
                      "desc": null,
                      "status": null,
                      "status_text": null,
                      "created_at": "2017-06-27T14:53:04.000+08:00",
                      "updated_at": "2017-08-10T14:36:38.000+08:00"
                    },
                    "supplier_id": 1,
                    "express_price": "0.0",
                    "express_free_price": "200.0",
                    "version": 0,
                    "activity_id": null,
                    "order_status": "deliveried",
                    "order_status_text": "已发货",
                    "shop_user_deliveried_push": "yes",
                    "shop_user_deliveried_push_text": "是",
                    "user_deliveried_push": "yes",
                    "user_deliveried_push_text": "是",
                    "supplier_deliveried_push": "no",
                    "supplier_deliveried_push_text": "否",
                    "is_zone_freight": "no",
                    "is_zone_freight_text": "否",
                    "created_at": "2017-12-05T17:24:40.000+08:00",
                    "updated_at": "2017-12-07T16:22:57.000+08:00"
                  }
                ],
                "user_id": "ozaPNwWHz4uQbK8BovAsW5C9JqcQ",
                "user_phone": "13813919930",
                "user_phone_mask": "*********",
                "user_name": "是",
                "recv_user_name": "是",
                "recv_phone": "13813919930",
                "shop_id": 34,
                "shop_name": "@我的店铺#",
                "shop_username": "美美",
                "shop_user_id": 26258,
                "shop_phone": "13813919930",
                "province": "内蒙古自治区",
                "city": "阿拉善盟",
                "district": "额济纳旗",
                "detail_address": "是",
                "order_type": "third_order",
                "order_type_text": "三方订单",
                "ref_type": "wechat_friend",
                "ref_type_text": "微信好友",
                "pay_time": "2017-12-05T17:24:49.000+08:00",
                "deliver_time": "2017-12-05T17:30:51.000+08:00",
                "finish_time": "2017-12-05T17:30:51.000+08:00",
                "cancel_time": "2017-12-05T17:30:51.000+08:00",
                "order_status": "deliveried",
                "order_status_text": "已发货",
                "express_price": "0.0",
                "sale_price": "0.0",
                "comm": "0.001",
                "pay_price": "0.01",
                "total_price": "0.01",
                "openid": "",
                "comm_setted": "no",
                "comm_setted_text": "否",
                "payed_push": "yes",
                "payed_push_text": "是",
                "global_freight_flag": "no",
                "global_freight_flag_text": "否",
                "global_freight": "200.0",
                "remarks": "",
                "user_ticket_id": null,
                "reduce_price": "0.0",
                "discount_rate": "0.0",
                "created_at": "2017-12-05T17:24:40.000+08:00"
              }
            }

## Data Structures
### SampleOrder (object)
+ id: 10 (number) - 订单ID
+ order_no: 1008141001729 (string) - 订单编号
+ shop_name: 解忧杂货店 (string) - 店铺名
+ shop_username: 吉娜娜 (string) - 店主名
+ express_price: 0 (string, nullable) - 运费
+ sale_price: 0 (string) - 优惠价格
+ comm: 3.59 (string) - 佣金相关值
+ pay_price: 35.9 (string) - 支付价格
+ total_price: 35.9 (string) - 总价
+ order_status: deliveried (string) - 订单状态
+ order_status_text: 待付款 (string) - 订单状态文本描述
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
### Order (object)
+ id: 10 (number) - 订单ID
+ order_no: 1008141001729 (string) - 订单编号
+ order_subs (array[OrderSub], fixed-type)
+ user_id: ozaPNwWHz4uQbK8BovAsW5C9JqcQ (string) - 用户id
+ user_phone: 15901836867 (string) - 用户手机号
+ user_phone_mask: ********* (string) - 用户手机号隐藏格式
+ user_name: 吉娜娜 (string) - 用户真实姓名
+ recv_user_name: 吉娜娜 (string) - 收件人姓名
+ recv_phone: 15901836867 (string) - 收件人手机号
+ shop_id: 1 (number) - 店铺id
+ shop_name: 解忧杂货店 (string) - 店铺名
+ shop_username: 吉娜娜 (string) - 店主名
+ shop_user_id: 24420 (number) - 店主id
+ shop_phone: 15901836867 (string) - 店主手机号
+ province: 上海 (string) - 省
+ city: 上海市 (string) - 市
+ district: 黄浦区 (string) - 区
+ detail_address: xxxx (string) - 详细地址
+ order_type: third_order (string) - 订单类型
+ order_type_text: 三方订单 (string) - 订单类型文本描述
+ openid  (string) - openid
+ remarks  (string) - 备注
+ user_ticket_id: 1 (number, nullable) - 用户优惠券ID
+ reduce_price: 0 (string) - 减免价格
+ discount_rate: 0 (string) - 折扣比例
+ pay_time: `2017-08-10T04:42:08.000+08:00` (string, nullable) - 支付日期
+ deliver_time: `2017-08-10T04:42:08.000+08:00` (string, nullable) - 订单发货日期
+ finish_time: `2017-08-10T04:42:08.000+08:00` (string, optional, nullable) - 订单完成日期
+ cancel_time: `2017-08-10T04:42:08.000+08:00` (string, optional, nullable) - 订单取消日期
+ express_price: 0 (string, nullable) - 运费
+ sale_price: 0 (string) - 优惠价格
+ comm: 3.59 (string) - 佣金相关值
+ pay_price: 35.9 (string) - 支付价格
+ total_price: 35.9 (string) - 总价
+ order_status: deliveried (string) - 订单状态
+ order_status_text: 待付款 (string) - 订单状态文本描述
+ ref_type: wechat_friend (string) - 订单渠道
+ ref_type_text: 微信好友 (string) - 订单渠道文本描述
+ comm_setted: no (string) - 是否已经结算佣金
+ comm_setted_text: 否 (string) - 是否已经结算佣金文本描述
+ payed_push: yes (string) - 是否推送
+ payed_push_text: 是 (string) - 是否推送文本描述
+ global_freight_flag: yes (string) - 是否满足全局包邮
+ global_freight_flag_text: 是 (string) - 是否满足全局包邮文本描述
+ global_freight: 0 (string) - 全局包邮金额
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
### OrderSub (object)
+ id: 10 (number) - 订单ID
+ sub_order_no: 1112051369610020 (number) - 子订单编号
+ order_express (OrderExpress) - 物流订单
+ order_details (array[OrderDetail], fixed-type) - 物流订单
+ supplier_id: 1 (number) - 供应商ID
+ supplier (OrderSupplier) - 供应商
+ express_price: 0 (string) - 运费
+ express_free_price: 200 (string) - 满多少包邮
+ version: 0 (number)
+ activity_id: 0 (number, nullable) - 活动ID
+ shop_user_deliveried_push: yes (string) - 已发货状态订单, 店主
+ shop_user_deliveried_push_text: 是 (string) - 已发货状态订单, 店主
+ user_deliveried_push: yes (string) - 已发货状态订单, 用户
+ user_deliveried_push_text: 是 (string) - 已发货状态订单, 用户
+ supplier_deliveried_push: yes (string) - 已发货状态订单, 供应商
+ supplier_deliveried_push_text: 是 (string) - 已发货状态订单, 供应商
+ is_zone_freight: yes (string) - 区域包邮
+ is_zone_freight_text: 是 (string) - 区域包邮
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
+ updated_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
### OrderDetail (object)
+ id: 34625 (number) - 订单详情ID
+ product_sku_id: 146 (number) - 商品库存ID
+ product_id: 56 (number) - 商品ID
+ product_skuinfo: 全国最小最垃圾的整装组合套装1瓶*1ML (string) - 商品库存信息
+ product_name: 联合利华商品 (string) - 商品名称
+ product_image: image_url (string) - 商品图片
+ product_num: 1 (number) - 商品数量
+ product_market_price: 0.02 (string) - 商品市场价格
+ product_sale_price: 0.01 (string) - 商品销售价格
+ commission_rate: 12 (number) - 佣金比例
+ express_price: 0 (string) - 快递价格
+ product_group_id: 0 (number, nullable) - 商品组合编号
+ product_old_sale_price: 0.01 (string) - 原始价格
+ is_free_delivery: yes (string) - 是否包邮
+ is_free_delivery_text: 是 (string) - 是否包邮
+ product_label_type: yes (string) - 商品类型
+ product_label_type_text: 是 (string) - 商品类型
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
+ updated_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
### OrderSupplier (object)
+ id: 13245149 (number) - 供应商ID
+ industry_id: 56fbb3684bb5430e87355d62bcd073af (string) - 行业ID
+ sup_no: GT20170807001 (string) - 供应商编号
+ name: 芝麻城官方 (string) - 运费
+ url (string) - 网址
+ logo (string) - logo
+ desc (string, nullable) - 简介
+ status (string, nullable) - 状态
+ status_text (string, nullable) - 状态
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
### OrderExpress (object)
+ id: 165 (number) - 物流订单ID
+ express_no: 543543532532 (string) - 物流单号
+ express_name: 顺丰 (string) - 物流公司名
+ express_price (number, nullable) - 运费
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
