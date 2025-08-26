# Hydrangea-Quick-Host

A tool for quickly deploying server on multiple ports.

## How to Use

1. Clone this repo

   ```bash
   git clone git@github.com:Zeyu-Xie/Hydrangea-Quick-Host.git
   ```

2. Add `config.json` at the root of the repo like this

   ```json
   [
     { "host": "0.0.0.0", "port": 3000 },
     { "host": "0.0.0.0", "port": 4000 },
     { "host": "0.0.0.0", "port": 5000, "message": "Hello world" }
   ]
   ```
3. Install dependencies, build and start the project

   ```bash
   pnpm install
   pnpm build
   pnpm start
   ```

   
