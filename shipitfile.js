module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  require('shipit-npm')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/nazgrel_blueprint',
      deployTo: '/ishanggang/apps/nazgrel_blueprint',
      repositoryUrl: 'git@gitlab.ishanggang.com:bi/nazgrel_blueprint.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 3,
      // key: '~/.ssh/id_rs',
      shallowClone: true
    },
    prod: {
      servers: 'ishanggang_dev@106.14.159.184:40022'
    }
  });
  shipit.task('pwd', function () {
    return shipit.remote('pwd');
  });
  shipit.task('start_channel', function () {
    return shipit.remote('cd /ishanggang/apps/nazgrel_blueprint/current && nohup npm run start_channel > log/start_channel.log 2>&1 &');
  });
  shipit.task('start_web', function () {
    return shipit.remote('cd /ishanggang/apps/nazgrel_blueprint/current && nohup npm run start_web > log/start_web.log 2>&1 &');
  });
  shipit.task('start_dev', function () {
    return shipit.remote('cd /ishanggang/apps/nazgrel_blueprint/current && nohup npm run start_dev > log/start_dev.log 2>&1 &');
  });
  shipit.task('start_open_mobile', function () {
    return shipit.remote('cd /ishanggang/apps/nazgrel_blueprint/current && nohup npm run start_open_mobile > log/start_open_mobile.log 2>&1 &');
  });
  shipit.task('ps', function () {
    return shipit.remote("ps aux | grep drakov | grep -v 'grep'");
  });
  shipit.task('stop', function () {
    return shipit.remote("ps aux|grep drakov | grep -v 'grep' |awk '{print $2}'| xargs kill");
  });
};
