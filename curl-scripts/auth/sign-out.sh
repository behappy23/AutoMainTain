# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

# curl "https://young-sierra-59925.herokuapp.com" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
