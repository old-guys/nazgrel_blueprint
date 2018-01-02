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
  shipit.task('pm2_start', function () {
    // return shipit.remote('cd /ishanggang/apps/nazgrel_blueprint/current && nohup npm run start_channel > log/start_channel.log 2>&1 &');
    // stop and delete from pm2 process lis
    shipit.remote("pm2 delete channel_mock web_mock dev_mock open_mobile_mock");
    // start and daemonize
    shipit.remote('cd /ishanggang/apps/nazgrel_blueprint/current && pm2 start npm --name channel_mock -- run start_channel');
    shipit.remote('cd /ishanggang/apps/nazgrel_blueprint/current && pm2 start npm  --name web_mock -- run start_web');
    shipit.remote('cd /ishanggang/apps/nazgrel_blueprint/current && pm2 start npm --name dev_mock -- run start_dev');
    shipit.remote('cd /ishanggang/apps/nazgrel_blueprint/current && pm2 start npm --name open_mobile_mock -- run start_open_mobile');

    return null;
  });
  shipit.task('ps', function () {
    // return shipit.remote("ps aux | grep drakov | grep -v 'grep'");
    return shipit.remote("pm2 list");
  });
  shipit.task('restart', function () {
    // return shipit.remote("ps aux|grep drakov | grep -v 'grep' |awk '{print $2}'| xargs kill");
    return shipit.remote("pm2 restart channel_mock web_mock dev_mock open_mobile_mock");
  });
  shipit.task('stop', function () {
    // return shipit.remote("ps aux|grep drakov | grep -v 'grep' |awk '{print $2}'| xargs kill");
    return shipit.remote("pm2 stop channel_mock web_mock dev_mock open_mobile_mock");
  });
};
