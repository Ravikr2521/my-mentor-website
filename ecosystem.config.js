module.exports = {
    apps: [
      {
        name: 'my-mentor-dev',
        script: 'npm',
        args: 'run dev',
        exp_backoff_restart_delay: 100,
      },
      {
        name: 'my-mentor-prod',
        script: 'npm',
        args: 'run start:prod',
        exp_backoff_restart_delay: 100,
      },
    ],
  };