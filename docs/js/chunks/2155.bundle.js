/*! For license information please see 2155.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkonchain_dapp_example=self.webpackChunkonchain_dapp_example||[]).push([[2155],{2155:(e,t,i)=>{i.r(t),i.d(t,{W3mWalletReceiveView:()=>x});var r=i(12618),o=i(25707),s=i(60031),a=i(63450),n=i(6056),c=i(21871),l=i(27601),d=i(68996),h=i(74496),u=i(78508),p=i(26742),w=i(81729),g=(i(91226),i(53576),i(65548),i(34766),i(85886)),f=i(15181);const m=i(10982).AH`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    border: none;
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e["01"]};
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var y=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let b=class extends r.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return r.qy`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return r.qy` <wui-flex class="networks">
      ${e?.map(e=>r.qy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};b.styles=[g.W5,g.fD,m],y([(0,o.MZ)({type:Array})],b.prototype,"networkImages",void 0),y([(0,o.MZ)()],b.prototype,"text",void 0),b=y([(0,f.E)("wui-compatible-network")],b),i(6387),i(16858),i(52835);var k=i(10152);const v=w.AH`
  wui-compatible-network {
    margin-top: ${({spacing:e})=>e[4]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;var $=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let x=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.address=a.U.state.address,this.profileName=a.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.unsubscribe.push(a.U.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):c.P.showError("Account not found")}),n.W.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=l.$.getNetworkImage(this.network);return r.qy` <wui-flex
      flexDirection="column"
      .padding=${["0","4","4","4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${w.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4","0","0","0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${d.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,s.J)(d.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=n.W.getAllRequestedCaipNetworks(),t=n.W.checkIfSmartAccountEnabled(),i=n.W.state.activeCaipNetwork,o=e.filter(e=>e?.chainNamespace===i?.chainNamespace);if((0,h.lj)(i?.chainNamespace)===k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return i?r.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[l.$.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const s=o?.filter(e=>e?.assets?.imageId)?.slice(0,5),a=s.map(l.$.getNetworkImage).filter(Boolean);return r.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${a}
    ></wui-compatible-network>`}onReceiveClick(){u.I.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(p.w.copyToClopboard(this.address),c.P.showSuccess("Address copied"))}catch{c.P.showError("Failed to copy")}}};x.styles=v,$([(0,o.wk)()],x.prototype,"address",void 0),$([(0,o.wk)()],x.prototype,"profileName",void 0),$([(0,o.wk)()],x.prototype,"network",void 0),x=$([(0,w.EM)("w3m-wallet-receive-view")],x)},16858:(e,t,i)=>{var r=i(12618),o=i(25707),s=(i(91226),i(53576),i(34766),i(87583));function a(e,t,i){return e!==t&&(e-t<0?t-e:e-t)<=i+.1}const n={generate({uri:e,size:t,logoSize:i,padding:o=8,dotColor:n="var(--apkt-colors-black)"}){const c=[],l=function(e){const t=Array.prototype.slice.call(s.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(t.length);return t.reduce((e,t,r)=>(r%i===0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e),d=(t-2*o)/l.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:e,y:t})=>{const i=(l.length-7)*d*e+o,s=(l.length-7)*d*t+o,a=.45;for(let e=0;e<h.length;e+=1){const t=d*(7-2*e);c.push(r.JW`
            <rect
              fill=${2===e?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===e?t-10:t}
              rx= ${0===e?(t-10)*a:t*a}
              ry= ${0===e?(t-10)*a:t*a}
              stroke=${n}
              stroke-width=${0===e?10:0}
              height=${0===e?t-10:t}
              x= ${0===e?s+d*e+5:s+d*e}
              y= ${0===e?i+d*e+5:i+d*e}
            />
          `)}});const u=Math.floor((i+25)/d),p=l.length/2-u/2,w=l.length/2+u/2-1,g=[];l.forEach((e,t)=>{e.forEach((e,i)=>{if(l[t][i]&&!(t<7&&i<7||t>l.length-8&&i<7||t<7&&i>l.length-8||t>p&&t<w&&i>p&&i<w)){const e=t*d+d/2+o,r=i*d+d/2+o;g.push([e,r])}})});const f={};return g.forEach(([e,t])=>{f[e]?f[e]?.push(t):f[e]=[t]}),Object.entries(f).map(([e,t])=>{const i=t.filter(e=>t.every(t=>!a(e,t,d)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{c.push(r.JW`<circle cx=${e} cy=${t} fill=${n} r=${d/2.5} />`)})}),Object.entries(f).filter(([e,t])=>t.length>1).map(([e,t])=>{const i=t.filter(e=>t.some(t=>a(e,t,d)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);const i=[];for(const e of t){const t=i.find(t=>t.some(t=>a(e,t,d)));t?t.push(e):i.push([e])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{c.push(r.JW`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${n}
                stroke-width=${d/1.25}
                stroke-linecap="round"
              />
            `)})}),c}};var c=i(85886),l=i(15181);const d=i(10982).AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var h=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends r.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,r.qy`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return r.JW`
      <svg height=${this.size} width=${this.size}>
        ${n.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?r.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:r.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};u.styles=[c.W5,d],h([(0,o.MZ)()],u.prototype,"uri",void 0),h([(0,o.MZ)({type:Number})],u.prototype,"size",void 0),h([(0,o.MZ)()],u.prototype,"theme",void 0),h([(0,o.MZ)()],u.prototype,"imageSrc",void 0),h([(0,o.MZ)()],u.prototype,"alt",void 0),h([(0,o.MZ)({type:Boolean})],u.prototype,"arenaClear",void 0),h([(0,o.MZ)({type:Boolean})],u.prototype,"farcaster",void 0),u=h([(0,l.E)("wui-qr-code")],u)},53576:(e,t,i)=>{var r=i(12618),o=i(25707),s=i(60031),a=i(85886),n=i(15181);const c=i(10982).AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var l=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends r.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const e={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`\n      --local-width: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      --local-height: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?r.qy`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?r.qy`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:r.qy`<img src=${(0,s.J)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};d.styles=[a.W5,c],l([(0,o.MZ)()],d.prototype,"src",void 0),l([(0,o.MZ)()],d.prototype,"logo",void 0),l([(0,o.MZ)()],d.prototype,"icon",void 0),l([(0,o.MZ)()],d.prototype,"iconColor",void 0),l([(0,o.MZ)()],d.prototype,"alt",void 0),l([(0,o.MZ)()],d.prototype,"size",void 0),l([(0,o.MZ)({type:Boolean})],d.prototype,"boxed",void 0),l([(0,o.MZ)({type:Boolean})],d.prototype,"rounded",void 0),l([(0,o.MZ)({type:Boolean})],d.prototype,"fullSize",void 0),d=l([(0,n.E)("wui-image")],d)},60031:(e,t,i)=>{i.d(t,{J:()=>o});var r=i(36752);const o=e=>e??r.s6}}]);
//# sourceMappingURL=2155.bundle.js.map