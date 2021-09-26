# core-services

## 1. Overview

This module contains many reusable Database modules for backend service.
The database using **Postgres** and libraries **Sequelize** to support coding

2. Setup development

- Install docker first
- Use node 14.15.1 on MacOS
- Execute ```yarn install``` to install the dependencies modules.
- Stop your Postgres in your local to avoid the conflict
- Add the below environment variables to your machines

``` bash
export DB_PASSWORD='icommerce'
export DB_USERNAME='icommerce'
export DB_NAME='icommerce'
```

- Execute the below command

```bash
cd script
bash ./start.sh

# After this command, your postgres database was add in to the docker
```

- Back to the rooth and execute the command

```bash
  bash ./mirgrate.sh
  # Create new table

  bash ./seed.sh
  # poppulate new data into your DB
```
