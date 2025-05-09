#!/bin/bash

repos=(

# general cosmos repos
  "https://raw.githubusercontent.com/cosmos/cosmos-sdk"
  "https://raw.githubusercontent.com/cosmos/gaia"
  "https://raw.githubusercontent.com/cosmos/ibc"
  "https://raw.githubusercontent.com/tendermint/tendermint"
  "https://raw.githubusercontent.com/cosmos/ibc-go"
  "https://raw.githubusercontent.com/cosmos/interchain-security"
  "https://raw.githubusercontent.com/cosmos/relayer"
  "https://raw.githubusercontent.com/cosmos/chain-registry"
  "https://raw.githubusercontent.com/cosmos/cosmos (white paper)"
  "https://raw.githubusercontent.com/cosmos/iavl"
  "https://raw.githubusercontent.com/cosmos/cosmos-rust"
  "https://raw.githubusercontent.com/cosmos/mainnet"
  "https://raw.githubusercontent.com/cosmos/sdk-tutorials"
  "https://raw.githubusercontent.com/evmos/ethermint"
  "https://raw.githubusercontent.com/cosmos/gravity-bridge"
  "https://raw.githubusercontent.com/cosmos/cosmjs"
  "https://raw.githubusercontent.com/informalsystems/hermes"
  "https://raw.githubusercontent.com/cosmos/relayer"
  "https://raw.githubusercontent.com/cosmos/cosmos"


# strangelove repos
  "https://raw.githubusercontent.com/strangelove-ventures/horcrux"
  "https://raw.githubusercontent.com/strangelove-ventures/lens"
  "https://raw.githubusercontent.com/strangelove-ventures/interchaintest"
  "https://raw.githubusercontent.com/strangelove-ventures/graz"
  "https://raw.githubusercontent.com/strangelove-ventures/half-life"
  "https://raw.githubusercontent.com/strangelove-ventures/packet-forward-middleware"
  "https://raw.githubusercontent.com/strangelove-ventures/heighliner"
  "https://raw.githubusercontent.com/strangelove-ventures/cosmos-operator"
  "https://raw.githubusercontent.com/strangelove-ventures/async-icq"
  "https://raw.githubusercontent.com/strangelove-ventures/lens-examples"
  "https://raw.githubusercontent.com/strangelove-ventures/sommelier"
  "https://raw.githubusercontent.com/strangelove-ventures/noble"
  "https://raw.githubusercontent.com/strangelove-ventures/style-guide"
  "https://raw.githubusercontent.com/strangelove-ventures/cns"
  "https://raw.githubusercontent.com/strangelove-ventures/paramauthority"
  "https://raw.githubusercontent.com/strangelove-ventures/graz-vite-example"

)

mkdir foreign_repos
cd foreign_repos

for repo in "${repos[@]}"; do
  repo_name=$(echo "$repo" | awk -F/ '{print $NF}')
  readme_url="$repo/main/README.md"
  readme_url_master="$repo/master/README.md"
  readme_file="$repo_name/README.md"

  if curl --output /dev/null --silent --head --fail "$readme_url" or curl --output /dev/null --silent --head --fail "$readme_url_master"; then
    mkdir "$repo_name"
    echo "curling $readme_file <====== $readme_url"
    # curl -o "$readme_file" "$readme_url"
    curl -o "$readme_file" "$readme_url_master"
    ln -s "$readme_file" "README-$repo_name.md"
    echo "*** Downloaded MAIN $readme_url"
    echo "****** Downloaded MASTER $readme_url_master"

  else
    echo "Failed to download $readme_file <===== $readme_url README from $repo"
  fi
done
