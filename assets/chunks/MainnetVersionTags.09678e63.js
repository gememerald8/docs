import{m as s}from"./mainnet_versions.a17f37d5.js";import{c as o}from"./constants.6b678d01.js";import{_ as a,o as i,c as l,k as t,a as n,t as r}from"./framework.51d6c45b.js";const c={name:"mainnetVersionTags",data(){return{mainnetVersions:s,constants:o}}},p=["href"],m=["href"],h=["href"],g=["href"];function _(f,u,k,V,e,b){return i(),l("ul",null,[t("li",null,[n(" Celestia chain ID - "),t("a",{href:`https://github.com/celestiaorg/networks/tree/master/${e.constants.mainnetChainId}`,target:"_blank",rel:"noopener noreferrer"},r(e.constants.mainnetChainId),9,p)]),t("li",null,[n(" celestia-node - "),t("a",{href:`https://github.com/celestiaorg/celestia-node/releases/tag/${e.mainnetVersions["node-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},r(e.mainnetVersions["node-latest-tag"]),9,m)]),t("li",null,[n(" celestia-app - "),t("a",{href:`https://github.com/celestiaorg/celestia-app/releases/tag/${e.mainnetVersions["app-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},r(e.mainnetVersions["app-latest-tag"]),9,h)]),t("li",null,[n(" Rollkit - "),t("a",{href:`https://github.com/rollkit/rollkit/releases/tag/${e.constants.mainnetRollkitVersion}`,target:"_blank",rel:"noopener noreferrer"},r(e.constants.mainnetRollkitVersion),9,g)])])}const C=a(c,[["render",_]]);export{C as M};