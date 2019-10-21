# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

# curl "https://young-sierra-59925.herokuapp.com" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new":"'"${NEW}"'"
    }
  }'

echo
