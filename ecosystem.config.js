// PM2 ecosystem config for Hostinger Node.js
// Usage:  pm2 start ecosystem.config.js --env production
//         pm2 save
//         pm2 startup   (run the printed command as root to auto-start on reboot)

module.exports = {
  apps: [
    {
      name: 'english-speakers',

      // Standalone build entry point
      script: '.next/standalone/server.js',

      instances: 1,          // Use 1 on shared hosting; set to 'max' on VPS
      exec_mode: 'fork',     // 'cluster' requires multiple CPU cores (VPS only)

      // Memory cap — Hostinger Business Node.js plan allows ~512 MB
      max_memory_restart: '450M',

      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_TELEMETRY_DISABLED: '1',
      },

      // Logs
      out_file: './logs/pm2-out.log',
      error_file: './logs/pm2-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,

      // Restart policy
      autorestart: true,
      watch: false,
      restart_delay: 3000,
      max_restarts: 10,
      min_uptime: '10s',
    },
  ],
};
