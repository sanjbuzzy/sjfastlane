#!/bin/sh
gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPT_PASSWORD" \
--output ./.github/google_settings/ANDROID.keystore ./.github/google_settings/ANDROID.keystore.gpg

gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPT_PASSWORD" \
--output ./.github/google_settings/google-private-key.json ./.github/google_settings/google-private-key.json.gpg
