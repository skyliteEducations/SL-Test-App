module.exports = {
  apps: [
    {
      name: "students_dev_server",
      script: "npm",
      args: "start",
      cwd: "/home/administrator/apps/students/dev_server/SL-Test-App",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3010
      },
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      time: true
    },
    {
      name: "students_prod_server",
      script: "npm",
      args: "start",
      cwd: "/home/administrator/apps/students/prod_server/SL-Test-App",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3011
      },
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      time: true
    }
  ]
};
