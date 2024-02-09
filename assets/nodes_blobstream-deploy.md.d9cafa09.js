import{_ as s,o as a,c as o,Q as l}from"./chunks/framework.51d6c45b.js";const F=JSON.parse('{"title":"Deploy the Blobstream contract","description":"Learn how to deploy the Blobstream smart contract.","frontmatter":{"sidebar_label":"Deploy the Blobstream contract","description":"Learn how to deploy the Blobstream smart contract.","head":[["meta",{"name":"og:title","content":"Deploy the Blobstream contract | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/blobstream-deploy.md","filePath":"nodes/blobstream-deploy.md","lastUpdated":1700697657000}'),n={name:"nodes/blobstream-deploy.md"},e=l(`<h1 id="deploy-the-blobstream-contract" tabindex="-1">Deploy the Blobstream contract <a class="header-anchor" href="#deploy-the-blobstream-contract" aria-label="Permalink to &quot;Deploy the Blobstream contract&quot;">​</a></h1><p>The <code>deploy</code> is a helper command that allows deploying the Blobstream smart contract to a new EVM chain:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Deploys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">contract</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">initializes</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">provided</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">chain</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Usage:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">flag</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [flags]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy</span><span style="color:#E1E4E8;"> [command]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Available</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Commands:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">Blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manager</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Deploys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">contract</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">initializes</span><span style="color:#24292E;"> </span><span style="color:#032F62;">it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">using</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">provided</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">chain</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Usage:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">flag</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [flags]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy</span><span style="color:#24292E;"> [command]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Available</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Commands:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">        </span><span style="color:#032F62;">Blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manager</span></span></code></pre></div><h2 id="how-to-run" tabindex="-1">How to run <a class="header-anchor" href="#how-to-run" aria-label="Permalink to &quot;How to run&quot;">​</a></h2><h3 id="install-the-blobstream-binary" tabindex="-1">Install the Blobstream binary <a class="header-anchor" href="#install-the-blobstream-binary" aria-label="Permalink to &quot;Install the Blobstream binary&quot;">​</a></h3><p>Make sure to have the Blobstream binary installed. Check <a href="https://docs.celestia.org/nodes/blobstream-binary" target="_blank" rel="noreferrer">the Blobstream binary page</a> for more details.</p><h3 id="add-keys" tabindex="-1">Add keys <a class="header-anchor" href="#add-keys" aria-label="Permalink to &quot;Add keys&quot;">​</a></h3><p>In order to deploy a Blobstream smart contract, you will need a funded EVM address and its private key. The <code>keys</code> command will help you set up this key:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">--help</span></span></code></pre></div><p>To import your EVM private key, there is the <code>import</code> subcommand to assist you with that:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">evm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">evm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre></div><p>This subcommand allows you to either import a raw ECDSA private key provided as plaintext, or import it from a file. The files are JSON keystore files encrypted using a passphrase like in <a href="https://geth.ethereum.org/docs/developers/dapp-developer/native-accounts" target="_blank" rel="noreferrer">this example</a>.</p><p>After adding the key, you can check that it&#39;s added via running:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">evm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">evm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span></code></pre></div><p>For more information about the <code>keys</code> command, check <a href="https://docs.celestia.org/nodes/blobstream-keys" target="_blank" rel="noreferrer">the <code>keys</code> documentation</a>.</p><h3 id="deploy-the-contract" tabindex="-1">Deploy the contract <a class="header-anchor" href="#deploy-the-contract" aria-label="Permalink to &quot;Deploy the contract&quot;">​</a></h3><p>Now, we can deploy the Blobstream contract to a new EVM chain:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--evm.chain-id</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--core.grpc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:9090</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--core.rpc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:26657</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--starting-nonce</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">latest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--evm.rpc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://localhost:8545</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--evm.chain-id</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--core.grpc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:9090</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--core.rpc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:26657</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--starting-nonce</span><span style="color:#24292E;"> </span><span style="color:#032F62;">latest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--evm.rpc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://localhost:8545</span></span></code></pre></div><p>The <code>--starting-nonce</code> can have the following values:</p><ul><li><code>latest</code>: to deploy the Blobstream contract starting from the latest validator set.</li><li><code>earliest</code>: to deploy the Blobstream contract starting from genesis.</li><li><code>nonce</code>: you can provide a custom nonce on where you want Blobstream to start. If the provided nonce is not a <code>Valset</code> attestation, then the valset before it will be used to deploy the Blobstream smart contract.</li></ul><p>And, now you will see the Blobstream smart contract address in the logs along with the transaction hash.</p>`,21),p=[e];function t(r,c,y,E,i,d){return a(),o("div",null,p)}const b=s(n,[["render",t]]);export{F as __pageData,b as default};