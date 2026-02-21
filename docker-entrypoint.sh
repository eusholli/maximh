#!/bin/sh
set -e

echo "Injecting secrets into Next.js bundle..."

# Read secrets from Docker-mounted /run/secrets/
EMAILJS_SERVICE_ID=$(cat /run/secrets/emailjs_service_id 2>/dev/null || echo "")
EMAILJS_TEMPLATE_ID=$(cat /run/secrets/emailjs_template_id 2>/dev/null || echo "")
EMAILJS_PUBLIC_KEY=$(cat /run/secrets/emailjs_public_key 2>/dev/null || echo "")

# Replace placeholders in the built JS files
if [ -n "$EMAILJS_SERVICE_ID" ]; then
  find /app/.next -name "*.js" -type f -exec \
    sed -i "s|__EMAILJS_SERVICE_ID__|${EMAILJS_SERVICE_ID}|g" {} +
  echo "  ✓ emailjs_service_id injected"
fi

if [ -n "$EMAILJS_TEMPLATE_ID" ]; then
  find /app/.next -name "*.js" -type f -exec \
    sed -i "s|__EMAILJS_TEMPLATE_ID__|${EMAILJS_TEMPLATE_ID}|g" {} +
  echo "  ✓ emailjs_template_id injected"
fi

if [ -n "$EMAILJS_PUBLIC_KEY" ]; then
  find /app/.next -name "*.js" -type f -exec \
    sed -i "s|__EMAILJS_PUBLIC_KEY__|${EMAILJS_PUBLIC_KEY}|g" {} +
  echo "  ✓ emailjs_public_key injected"
fi

echo "Secret injection complete. Starting server..."

exec node server.js
