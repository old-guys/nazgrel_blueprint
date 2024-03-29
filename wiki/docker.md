## Integrate Docker

### References

- http://mherman.org/blog/2017/12/07/dockerizing-a-react-app/#.WpermpNubOR
- https://store.docker.com/editions/community/docker-ce-desktop-mac
- https://jsfun.info/archive/docker%E5%9C%A8%E5%9B%BD%E5%86%85%E4%BD%BF%E7%94%A8%E7%9A%84%E5%8A%A0%E9%80%9F%E9%85%8D%E7%BD%AE/
- http://mirrors.aliyun.com/docker-toolbox/mac/docker-for-mac/

### Setup Docker

In Order to install Docker,Pls refer https://store.docker.com/search?offering=community&type=edition

### Speed up Via Docker mirror

参照 https://www.jianshu.com/p/9fce6e583669 配置镜像 `https://registry.docker-cn.com`

### 构建生产环境

```shell
# 构建镜像只是在 npm, 或者 Dockerfile 发生了变化才需要执行
docker build -f Dockerfile-prod -t nazgrel_blueprint-prod .
docker run -it -p 9080:80 -p 9081:81 -p 9082:82 --rm nazgrel_blueprint-prod
```
### 构建开发环境

```shell
# 构建镜像只是在 npm, 或者 Dockerfile 发生了变化才需要执行
docker build -t nazgrel_blueprint-dev .

docker run -it \
  -v ${PWD}:/usr/src/app \
  -v ${PWD}/public:/usr/src/app/public \
  -v ${PWD}/open_public:/usr/src/app/open_public \
  --rm \
  nazgrel_web-dev npm run generate_index

docker run -it \
  -v ${PWD}:/usr/src/app \
  -v ${PWD}/public:/usr/src/app/public \
  -v ${PWD}/open_public:/usr/src/app/open_public \
  --rm \
  nazgrel_web-dev npm run start_channel

docker exec -it 1e4d50c625b3 bash
npm run test_channel
```
