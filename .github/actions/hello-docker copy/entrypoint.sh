#!/bin/sh

echo "::debug ::Debug Message"
echo "::warning:: Warning Message"
echo "::error ::Error Message"


# Adding a secret.
echo "::add-mask ::$1"

# Set Output
time=$(date)
echo "::set-output ::name=time ::$time"

echo "Hello $1"

# Logging
echo "::group ::Some expandable logs"
echo "some stuff"
echo "some stuff"
echo "some stuff"
echo "::endgroup"

# Exporting environmental variables
echo "::set-env name=HELLO::hello"