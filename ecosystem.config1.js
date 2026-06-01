module.exports = {
  apps: [
    {
      name: " students_dev_server",
      script: "npm",
      args: "start",
      cwd: "/home/administrator/apps/students/dev_server/SL-Test-App", // apna project path dalna
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3010
      },
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      error_file: "./logs/error.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true
    }
  ]
};
