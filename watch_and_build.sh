#!/bin/bash

# Configuration
PROJECT_DIR="/var/www/tco-staging"
RESOURCES_DIR="$PROJECT_DIR/resources"
CSS_DIR="$RESOURCES_DIR/css"
JS_DIR="$RESOURCES_DIR/js"
LOG_FILE="$PROJECT_DIR/npm_build.log"

echo "Starting watch script for Laravel assets..."
echo "Watching directories: $CSS_DIR and $JS_DIR"
echo "Build logs will be saved to: $LOG_FILE"

# Make sure inotify-tools is installed
if ! command -v inotifywait &> /dev/null; then
    echo "Error: inotify-tools is not installed. Install it with:"
    echo "sudo apt-get update && sudo apt-get install -y inotify-tools"
    exit 1
fi

# Navigate to project directory
cd $PROJECT_DIR || { echo "Failed to change directory to $PROJECT_DIR"; exit 1; }

# Function to run npm build
run_build() {
    echo "Changes detected! Running npm build at $(date)" | tee -a "$LOG_FILE"
    npm run build >> "$LOG_FILE" 2>&1
    echo "Build completed at $(date)" | tee -a "$LOG_FILE"
    echo "----------------------------------------" | tee -a "$LOG_FILE"
}

# Initial build when script starts
echo "Running initial build..."
run_build

# Watch for changes
echo "Now watching for changes..."
while true; do
    inotifywait -r -e modify,create,delete,move "$CSS_DIR" "$JS_DIR"
    # Wait 1 second to avoid multiple builds for simultaneous file changes
    sleep 1
    run_build
done
