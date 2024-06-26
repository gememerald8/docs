<!-- markdownlint-disable MD033 -->

# Participate in the Celestia networks

<!-- ## Coffee -->

<script setup>
import ArabicaVersionTags from '../.vitepress/components/ArabicaVersionTags.vue'
import MochaVersionTags from '../.vitepress/components/MochaVersionTags.vue'
import MainnetVersionTags from '../.vitepress/components/MainnetVersionTags.vue'
import constants from '../.vitepress/constants/constants.js'
</script>

## Mainnet Beta

Celestia’s [Mainnet Beta](./mainnet.md) is the production network
for deploying mainnet rollups and applications. This marks the
culmination of years of development and community testing. While
the network is stable and continues to receive updates, it remains
experimental and users may experience occasional instability or
reduced performance.

- Compatible software versions
  <MainnetVersionTags/>

## Testnets

Celestia currently has two existing testnets that you can participate in:

- [Arabica devnet](./arabica-devnet.md): A devnet focused on developers who
  want to deploy sovereign rollups on the latest changes from Celestia's codebase.
  Arabica will be updated frequently and might be unstable at times given new updates.
  Validators won't be able to validate on Arabica as it is not designed for
  validators to participate.
  - Compatible software versions
    <ArabicaVersionTags/>
- [Mocha testnet](./mocha-testnet.md): A testnet focused on enabling validators
  to test out their infrastructure by running nodes connected to the network. Developers
  can also deploy sovereign rollups on Mocha, it just will always be behind Arabica
  as Mocha upgrades are slower given they need to be done via hardforks in coordination
  with the validator community on Mocha.
  - Compatible software versions
    <MochaVersionTags/>

## Network upgrades

Join our [Telegram announcement channel](https://t.me/+smSFIA7XXLU4MjJh)
for network upgrades.
