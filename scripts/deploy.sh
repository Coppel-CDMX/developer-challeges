#!/bin/bash
set -e

echo "Deployment started ..."

# Enter maintenance mode or return true
# if already is in maintenance mode
(php artisan down) || true

# Pull the latest version of the app
git pull

# Install composer dependencies
composer install

# Clear the old cache
php artisan clear-compiled

# Recreate cache
php artisan optimize

# Exit maintenance mode
php artisan up

# Restore of script deploy
git restore scripts/deploy.sh

echo "Deployment finished!"
