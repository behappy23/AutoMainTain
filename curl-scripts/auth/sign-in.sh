# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

# curl "https://young-sierra-59925.herokuapp.com" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
      }
  }'

echo
