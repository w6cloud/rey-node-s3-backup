# S3 Backup Script

This script was made for our server rey.servers.web6.fr but is easily adaptable to your server.

Each website consists of a list of folders and databases (mysql/mongo) to compress.

Each archive is added to a global tar file which is uploaded to amazon S3.

The S3 storage is then cleaned up to keep :

- Daily backups for 7 days
- Weekly backups for 4 weeks
- Monthly backups for 6 months

