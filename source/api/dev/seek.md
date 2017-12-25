# Group 拉取芝蚂城数据

## Seeker 列表 [/api/dev/seeks{?device}]
### Seeker 列表 [GET]
获取 Seeker 列表

+ Parameters
    + device: web (string, required) - 设备类型

+ Response 200 (application/json;charset=UTF-8)
    + Body

            {
                "code": 0,
                "data": {
                    "seek_jobs": [
                        {
                            "name": "order_seek_job",
                            "klass": "OrderSeekWorker",
                            "cron": "*/15 * * * *",
                            "description": "",
                            "args": "[{\"duration\":18}]",
                            "message": "{\"retry\":false,\"queue\":\"seek\",\"backtrace\":true,\"class\":\"OrderSeekWorker\",\"args\":[{\"duration\":18}]}",
                            "status": "enabled",
                            "active_job": false,
                            "queue_name_prefix": "",
                            "queue_name_delimiter": "",
                            "last_enqueue_time": "2017-12-21T05:15:24.000Z"
                        },
                        {
                            "name": "shop_user_seek_job",
                            "klass": "ShopUserSeekWorker",
                            "cron": "*/15 * * * *",
                            "description": "",
                            "args": "[{\"duration\":18}]",
                            "message": "{\"retry\":false,\"queue\":\"seek\",\"backtrace\":true,\"class\":\"ShopUserSeekWorker\",\"args\":[{\"duration\":18}]}",
                            "status": "enabled",
                            "active_job": false,
                            "queue_name_prefix": "",
                            "queue_name_delimiter": "",
                            "last_enqueue_time": "2017-12-21T05:15:24.000Z"
                        },
                        {
                            "name": "income_record_seek_job",
                            "klass": "IncomeRecordSeekWorker",
                            "cron": "*/5 * * * *",
                            "description": "",
                            "args": "[{\"duration\":8}]",
                            "message": "{\"retry\":false,\"queue\":\"seek\",\"backtrace\":true,\"class\":\"IncomeRecordSeekWorker\",\"args\":[{\"duration\":8}]}",
                            "status": "enabled",
                            "active_job": false,
                            "queue_name_prefix": "",
                            "queue_name_delimiter": "",
                            "last_enqueue_time": "2017-12-21T05:25:33.000Z"
                        },
                        {
                            "name": "order_detail_seek_job",
                            "klass": "OrderDetailSeekWorker",
                            "cron": "*/15 * * * *",
                            "description": "",
                            "args": "[{\"duration\":18}]",
                            "message": "{\"retry\":false,\"queue\":\"seek\",\"backtrace\":true,\"class\":\"OrderDetailSeekWorker\",\"args\":[{\"duration\":18}]}",
                            "status": "enabled",
                            "active_job": false,
                            "queue_name_prefix": "",
                            "queue_name_delimiter": "",
                            "last_enqueue_time": "2017-12-21T05:15:24.000Z"
                        },
                        {
                            "name": "order_sub_seek_job",
                            "klass": "OrderExpressSeekWorker",
                            "cron": "*/15 * * * *",
                            "description": "",
                            "args": "[{\"duration\":18}]",
                            "message": "{\"retry\":false,\"queue\":\"seek\",\"backtrace\":true,\"class\":\"OrderExpressSeekWorker\",\"args\":[{\"duration\":18}]}",
                            "status": "enabled",
                            "active_job": false,
                            "queue_name_prefix": "",
                            "queue_name_delimiter": "",
                            "last_enqueue_time": "2017-12-21T05:15:24.000Z"
                        },
                        {
                            "name": "product_seek_job",
                            "klass": "ProductSeekWorker",
                            "cron": "*/15 * * * *",
                            "description": "",
                            "args": "[{\"duration\":18}]",
                            "message": "{\"retry\":false,\"queue\":\"seek\",\"backtrace\":true,\"class\":\"ProductSeekWorker\",\"args\":[{\"duration\":18}]}",
                            "status": "enabled",
                            "active_job": false,
                            "queue_name_prefix": "",
                            "queue_name_delimiter": "",
                            "last_enqueue_time": "2017-12-21T05:15:24.000Z"
                        },
                        {
                            "name": "shop_seek_job",
                            "klass": "ShopSeekWorker",
                            "cron": "*/5 * * * *",
                            "description": "",
                            "args": "[{\"duration\":8}]",
                            "message": "{\"retry\":false,\"queue\":\"seek\",\"backtrace\":true,\"class\":\"ShopSeekWorker\",\"args\":[{\"duration\":8}]}",
                            "status": "enabled",
                            "active_job": false,
                            "queue_name_prefix": "",
                            "queue_name_delimiter": "",
                            "last_enqueue_time": "2017-12-21T05:25:33.000Z"
                        },
                        {
                            "name": "supplier_seek_job",
                            "klass": "SupplierSeekWorker",
                            "cron": "*/30 * * * *",
                            "description": "",
                            "args": "[{\"duration\":35}]",
                            "message": "{\"retry\":false,\"queue\":\"seek\",\"backtrace\":true,\"class\":\"SupplierSeekWorker\",\"args\":[{\"duration\":35}]}",
                            "status": "enabled",
                            "active_job": false,
                            "queue_name_prefix": "",
                            "queue_name_delimiter": "",
                            "last_enqueue_time": "2017-12-21T05:00:37.000Z"
                        },
                        {
                            "name": "product_shop_seek_job",
                            "klass": "ProductShopSeekWorker",
                            "cron": "*/15 * * * *",
                            "description": "",
                            "args": "[{\"duration\":18}]",
                            "message": "{\"retry\":false,\"queue\":\"seek\",\"backtrace\":true,\"class\":\"ProductShopSeekWorker\",\"args\":[{\"duration\":18}]}",
                            "status": "enabled",
                            "active_job": false,
                            "queue_name_prefix": "",
                            "queue_name_delimiter": "",
                            "last_enqueue_time": "2017-12-21T05:15:24.000Z"
                        },
                        {
                            "name": "shop_wechat_user_seek_job",
                            "klass": "ShopWechatUserSeekWorker",
                            "cron": "*/15 * * * *",
                            "description": "",
                            "args": "[{\"duration\":18}]",
                            "message": "{\"retry\":false,\"queue\":\"seek\",\"backtrace\":true,\"class\":\"ShopWechatUserSeekWorker\",\"args\":[{\"duration\":18}]}",
                            "status": "enabled",
                            "active_job": false,
                            "queue_name_prefix": "",
                            "queue_name_delimiter": "",
                            "last_enqueue_time": "2017-12-21T05:15:24.000Z"
                        }
                    ]
                }
            }

## 手动同步 [/api/dev/seeks/sync{?device,job_klass,job_klass%5b%5d,duration}]
### 手动同步 [GET]
手动触发某些 seek

+ Parameters
    + device: web (string, required) - 设备类型
    + job_klass: ShopSeekWorker= (string, required) - seek worker 名称
    + job_klass%5b%5d (string, optional)
        + For example: `job_klass[]=ShopWechatUserSeekWorker&job_klass[]=ShopWechatUserSeekWorker`
    + duration: 300 (number, optional) - 时间区间

+ Response 200 (application/json;charset=UTF-8)
    + Body

            {
              "code": 0,
              "data": {
                "sync_at": "2017-11-16T17:48:22.000+08:00"
              }
            }


## 同步店主 [/api/dev/seeks/sync_shop{?device,shopkeeper%5buser_id%5d,shopkeeper%5bshop_id%5d,shopkeeper%5buser_phone%5d}]
### 同步店主 [GET]
同步匹配的店主的店铺和店主数据

+ Parameters
    + device: web (string, required) - 设备类型
    + shopkeeper%5buser_id%5d: 1 (number, optional) - 店主用户ID
    + shopkeeper%5bshop_id%5d: 2 (number, optional) - 店铺id
    + shopkeeper%5buser_phone%5d: 13851513843 (string, optional) - 时间区间

+ Response 200 (application/json;charset=UTF-8)
    + Body

            {
              "code": 0,
              "data": {
                "sync_at": "2017-11-16T17:48:22.000+08:00"
              }
            }

## 同步渠道店主 [/api/dev/seeks/sync_channel{?device,shopkeeper%5buser_id%5d,shopkeeper%5bshop_id%5d,shopkeeper%5buser_phone%5d}]
### 同步渠道店主 [GET]
同步匹配的店主的渠道的下面的店主和店铺的数据

+ Parameters
    + device: web (string, required) - 设备类型
    + shopkeeper%5buser_id%5d: 1 (number, optional) - 店主用户ID
    + shopkeeper%5bshop_id%5d: 2 (number, optional) - 店铺id
    + shopkeeper%5buser_phone%5d: 13851513843 (string, optional) - 时间区间

+ Response 200 (application/json;charset=UTF-8)
    + Body

            {
              "code": 0,
              "data": {
                "sync_at": "2017-11-16T17:48:22.000+08:00"
              }
            }
