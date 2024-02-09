import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.c943c7c4.js";const r="/pr-preview/pr-1407/img/blobstream/blobstream_logo.png",s="/pr-preview/pr-1407/img/blobstream/Blobstream.png",i="/pr-preview/pr-1407/img/blobstream/Celestia_Blobstream_attestation_flow.jpg",y=JSON.parse('{"title":"Integrate with Blobstream","description":"Learn how to integrate your L2 with Blobstream","frontmatter":{"description":"Learn how to integrate your L2 with Blobstream","head":[["meta",{"name":"og:title","content":"Integrate with Blobstream | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/blobstream.md","filePath":"developers/blobstream.md","lastUpdated":1707500066000}'),l={name:"developers/blobstream.md"},n=o('<h1 id="integrate-with-blobstream" tabindex="-1">Integrate with Blobstream <a class="header-anchor" href="#integrate-with-blobstream" aria-label="Permalink to &quot;Integrate with Blobstream&quot;">​</a></h1><p><img src="'+r+'" alt="Blobstream logo"></p><p><a href="https://blog.celestia.org/introducing-blobstream/" target="_blank" rel="noreferrer">Blobstream</a> is the first data availability solution for Ethereum that securely scales with the number of users. Formerly known as the <a href="https://blog.celestia.org/celestiums/" target="_blank" rel="noreferrer">Quantum Gravity Bridge (QGB)</a>, Blobstream relays commitments to Celestia&#39;s data root to an onchain light client on Ethereum, for integration by developers into L2 contracts. This enables Ethereum developers to build high-throughput L2s using Celestia&#39;s optimised DA layer, the first with Data Availability Sampling (DAS).</p><p>The following docs go over how developers can integrate Blobstream. There are also docs on how to run a <a href="./../nodes/blobstream-binary">Blobstream orchestrator</a> as a Celestia validator which won&#39;t be covered in the following sections aimed at developers.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Blobstream, consists of two components: an <a href="./../nodes/blobstream-orchestrator">orchestrator</a> and a <a href="./../nodes/blobstream-relayer">relayer</a>.</p><p>In the following diagram, we show how a layer 2 (L2) would post data to Celestia and then verify that it was published in the target EVM chain.</p><p><img src="'+s+'" alt="Blobstream-Architecture"></p><p>Data will first be attested to by the Celestia validator set, <em>i.e.</em> signing commitments committing to the data. Then, these signatures will be relayed to the target EVM chain (in this case, Ethereum). Finally, the L2, or any party, will be able to verify that the data was published to Celestia directly on the EVM chain on the Blobstream smart contract. You can reference <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/src/Blobstream.sol" target="_blank" rel="noreferrer">the Blobstream smart contract</a>.</p><p>The <strong>orchestrator</strong> is part of the validator setup and works as follows:</p><ul><li>celestia-app creates an attestation on the state machine level that needs to be signed</li><li>The orchestrator queries the attestation, signs it, then submits the signature to the Blobstream P2P network</li></ul><p>The <strong>relayer</strong> submits the attestations&#39; signatures from the Blobstream P2P network to the target EVM chain.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If the contract is still not deployed, then it needs to be deployed before it is used by the relayer. See the <a href="./../nodes/blobstream-deploy">deployment documentation</a> for more details.</p></div><h2 id="how-blobstream-works" tabindex="-1">How Blobstream works <a class="header-anchor" href="#how-blobstream-works" aria-label="Permalink to &quot;How Blobstream works&quot;">​</a></h2><p>Blobstream allows Celestia block header data roots to be relayed in one direction, from Celestia to an EVM chain. It does not support bridging assets such as fungible or non-fungible tokens directly, and cannot send messages from the EVM chain back to Celestia.</p><p>It works by relying on a set of signers to attest to some event on Celestia: the Celestia validator set. The Blobstream contract keeps track of the Celestia validator set by updating its view of the validator set with <code>updateValidatorSet()</code>. More than 2/3 of the voting power of the current view of the validator set must sign off on new relayed events, submitted with <code>submitDataRootTupleRoot()</code>. Each event is a batch of <code>DataRootTuple</code>s, with each tuple representing a single <a href="https://celestiaorg.github.io/celestia-app/specs/data_structures.html#header" target="_blank" rel="noreferrer">data root (i.e. block header)</a>. Relayed tuples are in the same order as Celestia block headers.</p><p><img src="'+i+'" alt="Blobstream attestation flow"></p><h3 id="events-and-messages-relayed" tabindex="-1">Events and messages relayed <a class="header-anchor" href="#events-and-messages-relayed" aria-label="Permalink to &quot;Events and messages relayed&quot;">​</a></h3><p><strong>Validator sets</strong>: The relayer informs the Blobstream contract who are the current validators and their power. This results in an execution of the <code>updateValidatorSet</code> function.</p><p><strong>Batches</strong>: The relayer informs the Blobstream contract of new data root tuple roots. This results in an execution of the <code>submitDataRootTupleRoot</code> function.</p><h2 id="how-to-integrate" tabindex="-1">How to integrate <a class="header-anchor" href="#how-to-integrate" aria-label="Permalink to &quot;How to integrate&quot;">​</a></h2><p>Integrating your L2 with Blobstream requires two components: your onchain smart contract logic, and your offchain client logic. The next three sections cover these topics:</p><ul><li><a href="./blobstream-contracts">Integrate with Blobstream contracts</a></li><li><a href="./blobstream-offchain">Integrate with Blobstream client</a></li><li><a href="./blobstream-proof-queries">Querying the Blobstream proofs</a></li></ul><h3 id="deployed-contracts" tabindex="-1">Deployed contracts <a class="header-anchor" href="#deployed-contracts" aria-label="Permalink to &quot;Deployed contracts&quot;">​</a></h3><p>You can interact with the Blobstream contracts today on testnet. The Blobstream Solidity smart contracts are currently deployed on the following Ethereum testnets:</p><table><thead><tr><th>Contract</th><th>EVM network</th><th>Contract address</th><th>Attested data</th></tr></thead><tbody><tr><td>Blobstream</td><td>Sepolia</td><td><a href="https://sepolia.etherscan.io/address/0x3a5cbB6EF4756DA0b3f6DAE7aB6430fD8c46d247" target="_blank" rel="noreferrer"><code>0x3a5cbB6EF4756DA0b3f6DAE7aB6430fD8c46d247</code></a></td><td>Mocha testnet</td></tr><tr><td>Blobstream</td><td>Arbitrum Sepolia</td><td><a href="https://sepolia.arbiscan.io/address/0x040769edbca5218e616c8eb16e4faea49ced5e33" target="_blank" rel="noreferrer"><code>0x040769edbca5218e616c8eb16e4faea49ced5e33</code></a></td><td>Mocha testnet</td></tr><tr><td>Blobstream X</td><td>Goerli</td><td><a href="https://goerli.etherscan.io/address/0x67ea962864cdad3f2202118dc6f65ff510f7bb4d" target="_blank" rel="noreferrer"><code>0x67ea962864cdad3f2202118dc6f65ff510f7bb4d</code></a></td><td>Mocha testnet</td></tr></tbody></table><h2 id="blobstream-vs-data-availability-committees-dacs" tabindex="-1">Blobstream vs. data availability committees (DACs) <a class="header-anchor" href="#blobstream-vs-data-availability-committees-dacs" aria-label="Permalink to &quot;Blobstream vs. data availability committees (DACs)&quot;">​</a></h2><h3 id="decentralization-and-security" tabindex="-1">Decentralization and security <a class="header-anchor" href="#decentralization-and-security" aria-label="Permalink to &quot;Decentralization and security&quot;">​</a></h3><p>Blobstream is built on Celestia, which uses a CometBFT-based proof-of-stake system. An incorrect data availability attestation in this system will ultimately be penalized (currently not implemented), ensuring validators act in good faith. Thus, Blobstream shares the same security assumptions as Celestia. In contrast, data availability committees (DACs), are typically centralized or semi-centralized, relying on a specific set of entities or individuals to vouch for data availability.</p><h3 id="mechanism-of-verification" tabindex="-1">Mechanism of verification <a class="header-anchor" href="#mechanism-of-verification" aria-label="Permalink to &quot;Mechanism of verification&quot;">​</a></h3><p>Blobstream uses data availability attestations, which are Merkle roots of the batched L2 data, to confirm that the necessary data is present on Celestia. The L2 contract on Ethereum can check directly with Blobstream if the data is published on Celestia. Similarly, a DAC would rely on attestations or confirmations from its permissioned members.</p><h3 id="flexibility-and-scalability" tabindex="-1">Flexibility and scalability <a class="header-anchor" href="#flexibility-and-scalability" aria-label="Permalink to &quot;Flexibility and scalability&quot;">​</a></h3><p>Blobstream is designed to offer high-throughput data availability for Ethereum L2s, aiming to strike a balance between scalability and security. It operates independently of Ethereum&#39;s gas costs, as Celestia&#39;s resource pricing is more byte-focused rather than computation-centric. On the other hand, the scalability and flexibility of a DAC would depend on its specific design and implementation.</p><p>In summary, both Blobstream and DACs aim to ensure offchain data availability, but Blobstream offers a more decentralized, secure, and scalable solution compared to the potential centralized nature of DACs.</p>',34),c=[n];function d(h,b,m,p,f,u){return t(),a("div",null,c)}const w=e(l,[["render",d]]);export{y as __pageData,w as default};
