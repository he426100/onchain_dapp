/*! For license information please see 122.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkonchain_dapp_example=self.webpackChunkonchain_dapp_example||[]).push([[122],{122:(e,t,i)=>{i.r(t),i.d(t,{AppKitAccountButton:()=>C,AppKitButton:()=>A,AppKitConnectButton:()=>j,AppKitNetworkButton:()=>B,W3mAccountButton:()=>$,W3mAccountSettingsView:()=>de,W3mAccountView:()=>He,W3mAllWalletsView:()=>Bt,W3mButton:()=>R,W3mChooseAccountNameView:()=>So,W3mConnectButton:()=>M,W3mConnectView:()=>_i,W3mConnectWalletsView:()=>jo,W3mConnectingExternalView:()=>io,W3mConnectingMultiChainView:()=>ro,W3mConnectingWcBasicView:()=>$o,W3mConnectingWcView:()=>xo,W3mDownloadsView:()=>Ro,W3mFooter:()=>V.H,W3mGetWalletView:()=>Ao,W3mNetworkButton:()=>Z,W3mNetworkSwitchView:()=>Ho,W3mNetworksView:()=>Qo,W3mProfileWalletsView:()=>wt,W3mRouter:()=>H.J,W3mSIWXSignMessageView:()=>kn,W3mSwitchActiveChainView:()=>nn,W3mUnsupportedChainView:()=>ln,W3mWalletCompatibleNetworksView:()=>wn,W3mWhatIsANetworkView:()=>an,W3mWhatIsAWalletView:()=>Oo});var o=i(12618),n=i(25707),r=i(60031),a=i(42733),s=i(6056),c=i(73337),l=i(27601),d=i(63450),u=i(26742),h=i(96396),p=i(81729),w=(i(91226),i(53576),i(83383),i(65548),i(34766),i(85886)),g=i(75249),m=i(15181),b=(i(94322),i(10982));const f=b.AH`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var y=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let v=class extends o.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <button
        ?disabled=${this.disabled}
        class=${(0,r.J)(this.balance?void 0:"local-no-balance")}
        data-error=${(0,r.J)(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const e=this.networkSrc?o.qy`<wui-image src=${this.networkSrc}></wui-image>`:o.qy` <wui-icon size="inherit" color="inherit" icon="networkPlaceholder"></wui-icon> `;return o.qy`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return o.qy`<wui-text variant="md-regular" color="inherit">
      ${this.address?g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const e=this.loading?o.qy`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:o.qy`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return o.qy`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};v.styles=[w.W5,w.fD,f],y([(0,n.MZ)()],v.prototype,"networkSrc",void 0),y([(0,n.MZ)()],v.prototype,"avatarSrc",void 0),y([(0,n.MZ)()],v.prototype,"balance",void 0),y([(0,n.MZ)({type:Boolean})],v.prototype,"isUnsupportedChain",void 0),y([(0,n.MZ)({type:Boolean})],v.prototype,"disabled",void 0),y([(0,n.MZ)({type:Boolean})],v.prototype,"loading",void 0),y([(0,n.MZ)()],v.prototype,"address",void 0),y([(0,n.MZ)()],v.prototype,"profileName",void 0),y([(0,n.MZ)()],v.prototype,"charsStart",void 0),y([(0,n.MZ)()],v.prototype,"charsEnd",void 0),v=y([(0,m.E)("wui-account-button")],v);var x=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class k extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=!!a.H.state.allowUnsupportedChain||!s.W.state.activeChain||s.W.checkIfSupportedNetwork(s.W.state.activeChain)}connectedCallback(){super.connectedCallback(),this.setAccountData(s.W.getAccountData(this.namespace)),this.setNetworkData(s.W.getNetworkData(this.namespace))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(s.W.subscribeChainProp("accountState",e=>{this.setAccountData(e)},e),s.W.subscribeChainProp("networkState",t=>{this.setNetworkData(t),this.isSupported=s.W.checkIfSupportedNetwork(e,t?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(c.j.subscribeNetworkImages(()=>{this.networkImage=l.$.getNetworkImage(this.network)}),s.W.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),d.U.subscribeKey("balance",e=>this.balanceVal=e),d.U.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),d.U.subscribeKey("profileName",e=>this.profileName=e),d.U.subscribeKey("profileImage",e=>this.profileImage=e),s.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=l.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||s.W.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!s.W.state.activeChain)return null;const e="show"===this.balance,t="string"!=typeof this.balanceVal,{formattedText:i}=u.w.parseBalance(this.balanceVal,this.balanceSymbol);return o.qy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!a.H.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,r.J)(u.w.getPlainAddress(this.caipAddress))}
        profileName=${(0,r.J)(this.profileName)}
        networkSrc=${(0,r.J)(this.networkImage)}
        avatarSrc=${(0,r.J)(this.profileImage)}
        balance=${e?i:""}
        @click=${this.onClick.bind(this)}
        data-testid=${"account-button"+(this.namespace?`-${this.namespace}`:"")}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||a.H.state.allowUnsupportedChain?h.W.open({namespace:this.namespace}):h.W.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await l.$.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=l.$.getNetworkImage(e.caipNetwork))}}x([(0,n.MZ)({type:Boolean})],k.prototype,"disabled",void 0),x([(0,n.MZ)()],k.prototype,"balance",void 0),x([(0,n.MZ)()],k.prototype,"charsStart",void 0),x([(0,n.MZ)()],k.prototype,"charsEnd",void 0),x([(0,n.MZ)()],k.prototype,"namespace",void 0),x([(0,n.wk)()],k.prototype,"caipAddress",void 0),x([(0,n.wk)()],k.prototype,"balanceVal",void 0),x([(0,n.wk)()],k.prototype,"balanceSymbol",void 0),x([(0,n.wk)()],k.prototype,"profileName",void 0),x([(0,n.wk)()],k.prototype,"profileImage",void 0),x([(0,n.wk)()],k.prototype,"network",void 0),x([(0,n.wk)()],k.prototype,"networkImage",void 0),x([(0,n.wk)()],k.prototype,"isSupported",void 0);let $=class extends k{};$=x([(0,p.EM)("w3m-account-button")],$);let C=class extends k{};C=x([(0,p.EM)("appkit-account-button")],C);const E=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var I=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class S extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?s.W.state.chains.get(this.namespace)?.accountState?.caipAddress:s.W.state.activeCaipAddress,this.namespace?this.unsubscribe.push(s.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(s.W.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?o.qy`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,r.J)(this.balance)}
            .charsStart=${(0,r.J)(this.charsStart)}
            .charsEnd=${(0,r.J)(this.charsEnd)}
            namespace=${(0,r.J)(this.namespace)}
          >
          </appkit-account-button>
        `:o.qy`
          <appkit-connect-button
            size=${(0,r.J)(this.size)}
            label=${(0,r.J)(this.label)}
            loadingLabel=${(0,r.J)(this.loadingLabel)}
            namespace=${(0,r.J)(this.namespace)}
          ></appkit-connect-button>
        `}}S.styles=E,I([(0,n.MZ)({type:Boolean})],S.prototype,"disabled",void 0),I([(0,n.MZ)()],S.prototype,"balance",void 0),I([(0,n.MZ)()],S.prototype,"size",void 0),I([(0,n.MZ)()],S.prototype,"label",void 0),I([(0,n.MZ)()],S.prototype,"loadingLabel",void 0),I([(0,n.MZ)()],S.prototype,"charsStart",void 0),I([(0,n.MZ)()],S.prototype,"charsEnd",void 0),I([(0,n.MZ)()],S.prototype,"namespace",void 0),I([(0,n.wk)()],S.prototype,"caipAddress",void 0);let R=class extends S{};R=I([(0,p.EM)("w3m-button")],R);let A=class extends S{};A=I([(0,p.EM)("appkit-button")],A);const W=b.AH`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`;var T=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let N=class extends o.WF{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return o.qy`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const e={primary:"invert",secondary:"accent-primary"};return this.loading?o.qy`<wui-loading-spinner
      color=${e[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:o.qy` <wui-text variant=${{lg:"lg-regular",md:"md-regular",sm:"sm-regular"}[this.size]} color=${e[this.variant]}>
        ${this.text}
      </wui-text>`}};N.styles=[w.W5,w.fD,W],T([(0,n.MZ)()],N.prototype,"size",void 0),T([(0,n.MZ)()],N.prototype,"variant",void 0),T([(0,n.MZ)({type:Boolean})],N.prototype,"loading",void 0),T([(0,n.MZ)()],N.prototype,"text",void 0),N=T([(0,m.E)("wui-connect-button")],N);var O=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class P extends o.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=h.W.state.open,this.loading=this.namespace?h.W.state.loadingNamespaceMap.get(this.namespace):h.W.state.loading,this.unsubscribe.push(h.W.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-connect-button
        size=${(0,r.J)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${"connect-button"+(this.namespace?`-${this.namespace}`:"")}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?h.W.close():this.loading||h.W.open({view:"Connect",namespace:this.namespace})}}O([(0,n.MZ)()],P.prototype,"size",void 0),O([(0,n.MZ)()],P.prototype,"label",void 0),O([(0,n.MZ)()],P.prototype,"loadingLabel",void 0),O([(0,n.MZ)()],P.prototype,"namespace",void 0),O([(0,n.wk)()],P.prototype,"open",void 0),O([(0,n.wk)()],P.prototype,"loading",void 0);let M=class extends P{};M=O([(0,p.EM)("w3m-connect-button")],M);let j=class extends P{};j=O([(0,p.EM)("appkit-connect-button")],j);var D=i(90184);i(7150);const q=b.AH`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`;var U=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let L=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){return o.qy`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${{sm:"sm-regular",md:"md-regular",lg:"lg-regular"}[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?o.qy` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:o.qy` <wui-icon-box color="default" icon="networkPlaceholder"></wui-icon-box> `}};L.styles=[w.W5,w.fD,q],U([(0,n.MZ)()],L.prototype,"imageSrc",void 0),U([(0,n.MZ)({type:Boolean})],L.prototype,"isUnsupportedChain",void 0),U([(0,n.MZ)({type:Boolean})],L.prototype,"disabled",void 0),U([(0,n.MZ)()],L.prototype,"size",void 0),L=U([(0,m.E)("wui-network-button")],L);const z=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var F=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class _ extends o.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=s.W.state.activeCaipNetwork,this.networkImage=l.$.getNetworkImage(this.network),this.caipAddress=s.W.state.activeCaipAddress,this.loading=h.W.state.loading,this.isSupported=!!a.H.state.allowUnsupportedChain||!s.W.state.activeChain||s.W.checkIfSupportedNetwork(s.W.state.activeChain),this.unsubscribe.push(c.j.subscribeNetworkImages(()=>{this.networkImage=l.$.getNetworkImage(this.network)}),s.W.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),s.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=l.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||s.W.checkIfSupportedNetwork(e.chainNamespace),l.$.fetchNetworkImage(e?.assets?.imageId)}),h.W.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){l.$.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=!this.network||s.W.checkIfSupportedNetwork(this.network.chainNamespace);return o.qy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!a.H.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,r.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||a.H.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(D.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),h.W.open({view:"Networks"}))}}_.styles=z,F([(0,n.MZ)({type:Boolean})],_.prototype,"disabled",void 0),F([(0,n.MZ)({type:String})],_.prototype,"label",void 0),F([(0,n.wk)()],_.prototype,"network",void 0),F([(0,n.wk)()],_.prototype,"networkImage",void 0),F([(0,n.wk)()],_.prototype,"caipAddress",void 0),F([(0,n.wk)()],_.prototype,"loading",void 0),F([(0,n.wk)()],_.prototype,"isSupported",void 0);let Z=class extends _{};Z=F([(0,p.EM)("w3m-network-button")],Z);let B=class extends _{};B=F([(0,p.EM)("appkit-network-button")],B);var H=i(46480),V=i(94986),J=i(24376),K=i(36010),G=i(62944),Y=i(21871),X=i(74496),Q=i(78508),ee=i(31211),te=i(8351);i(6387),i(47098),i(31260),i(73177);const ie=b.AH`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`;var oe=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ne=class extends o.WF{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return o.qy`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};ne.styles=[w.W5,w.fD,ie],oe([(0,n.MZ)()],ne.prototype,"label",void 0),oe([(0,n.MZ)()],ne.prototype,"description",void 0),oe([(0,n.MZ)()],ne.prototype,"icon",void 0),ne=oe([(0,m.E)("wui-notice-card")],ne),i(52835);var re=i(10152),ae=i(27508),se=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ce=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=ae.i.getConnectedSocialProvider(),this.socialUsername=ae.i.getConnectedSocialUsername(),this.namespace=s.W.state.activeChain,this.unsubscribe.push(s.W.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=K.a.getConnectorId(this.namespace),t=K.a.getAuthConnector();if(!t||e!==J.o.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const i=t.provider.getEmail()??"";return i||this.socialUsername?o.qy`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||Q.I.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};se([(0,n.wk)()],ce.prototype,"namespace",void 0),ce=se([(0,p.EM)("w3m-account-auth-button")],ce);var le=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let de=class extends o.WF{constructor(){super(),this.usubscribe=[],this.networkImages=c.j.state.networkImages,this.address=d.U.state.address,this.profileImage=d.U.state.profileImage,this.profileName=d.U.state.profileName,this.network=s.W.state.activeCaipNetwork,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.remoteFeatures=a.H.state.remoteFeatures,this.usubscribe.push(d.U.subscribe(e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),s.W.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}),a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.assets?.imageId??""];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,r.J)(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${p.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${(0,r.J)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=this.network?.chainNamespace,t=K.a.getConnectorId(e),i=K.a.getAuthConnector();return s.W.checkIfNamesSupported()&&i&&t===J.o.CONNECTOR_ID.AUTH&&!this.profileName?o.qy`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=K.a.getConnectorId(this.network?.chainNamespace),t=K.a.getAuthConnector(),{origin:i}=location;return!t||e!==J.o.CONNECTOR_ID.AUTH||i.includes(G.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=s.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.address&&(u.w.copyToClopboard(this.address),Y.P.showSuccess("Address copied"))}catch{Y.P.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=this.network?.chainNamespace,t=s.W.checkIfSmartAccountEnabled(),i=K.a.getConnectorId(e);return K.a.getAuthConnector()&&i===J.o.CONNECTOR_ID.AUTH&&t?(this.switched||(this.text=(0,X.lj)(e)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),o.qy`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){Q.I.push("ChooseAccountName")}async changePreferredAccountType(){const e=this.network?.chainNamespace,t=s.W.checkIfSmartAccountEnabled(),i=(0,X.lj)(e)!==re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t?re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:re.Vl.ACCOUNT_TYPES.EOA;K.a.getAuthConnector()&&(this.loading=!0,await ee.x.setPreferredAccountType(i,e),this.text=i===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,te.R.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&Q.I.push("Networks")}async onDisconnect(){try{this.disconnecting=!0;const e=this.network?.chainNamespace,t=ee.x.getConnections(e).length>0,i=e&&K.a.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await ee.x.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(Q.I.push("ProfileWallets"),Y.P.showSuccess("Wallet deleted"))}catch{D.E.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),Y.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){D.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Q.I.push("UpgradeEmailWallet")}};le([(0,n.wk)()],de.prototype,"address",void 0),le([(0,n.wk)()],de.prototype,"profileImage",void 0),le([(0,n.wk)()],de.prototype,"profileName",void 0),le([(0,n.wk)()],de.prototype,"network",void 0),le([(0,n.wk)()],de.prototype,"disconnecting",void 0),le([(0,n.wk)()],de.prototype,"loading",void 0),le([(0,n.wk)()],de.prototype,"switched",void 0),le([(0,n.wk)()],de.prototype,"text",void 0),le([(0,n.wk)()],de.prototype,"remoteFeatures",void 0),de=le([(0,p.EM)("w3m-account-settings-view")],de),i(93656),i(20645);const ue=b.AH`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var he=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const pe={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},we={lg:"md",md:"sm",sm:"sm"};let ge=class extends o.WF{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return o.qy`
      <button data-active=${this.active}>
        ${this.icon?o.qy`<wui-icon size=${we[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${pe[this.size]}> ${this.label} </wui-text>
      </button>
    `}};ge.styles=[w.W5,w.fD,ue],he([(0,n.MZ)()],ge.prototype,"icon",void 0),he([(0,n.MZ)()],ge.prototype,"size",void 0),he([(0,n.MZ)()],ge.prototype,"label",void 0),he([(0,n.MZ)({type:Boolean})],ge.prototype,"active",void 0),ge=he([(0,m.E)("wui-tab-item")],ge);const me=b.AH`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var be=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let fe=class extends o.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{const i=t===this.activeTab;return o.qy`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${i}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};fe.styles=[w.W5,w.fD,me],be([(0,n.MZ)({type:Array})],fe.prototype,"tabs",void 0),be([(0,n.MZ)()],fe.prototype,"onTabChange",void 0),be([(0,n.MZ)()],fe.prototype,"size",void 0),be([(0,n.wk)()],fe.prototype,"activeTab",void 0),fe=be([(0,m.E)("wui-tabs")],fe),i(58498);const ye=b.AH`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var ve=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xe=class extends o.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?o.qy`<wui-icon
          size=${(0,r.J)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:o.qy`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return o.qy`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return o.qy`
      <wui-text variant="lg-regular" color="primary">
        ${g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return o.qy`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};xe.styles=[w.W5,w.fD,ye],ve([(0,n.MZ)()],xe.prototype,"address",void 0),ve([(0,n.MZ)()],xe.prototype,"profileName",void 0),ve([(0,n.MZ)()],xe.prototype,"alt",void 0),ve([(0,n.MZ)()],xe.prototype,"imageSrc",void 0),ve([(0,n.MZ)()],xe.prototype,"icon",void 0),ve([(0,n.MZ)()],xe.prototype,"iconSize",void 0),ve([(0,n.MZ)({type:Boolean})],xe.prototype,"loading",void 0),ve([(0,n.MZ)({type:Number})],xe.prototype,"charsStart",void 0),ve([(0,n.MZ)({type:Number})],xe.prototype,"charsEnd",void 0),xe=ve([(0,m.E)("wui-wallet-switch")],xe);const ke=p.AH`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e["ease-out-power-1"]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var $e=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ce=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.caipAddress=d.U.state.caipAddress,this.address=u.w.getPlainAddress(d.U.state.caipAddress),this.profileImage=d.U.state.profileImage,this.profileName=d.U.state.profileName,this.disconnecting=!1,this.balance=d.U.state.balance,this.balanceSymbol=d.U.state.balanceSymbol,this.features=a.H.state.features,this.remoteFeatures=a.H.state.remoteFeatures,this.namespace=s.W.state.activeChain,this.activeConnectorIds=K.a.state.activeConnectorIds,this.unsubscribe.push(d.U.subscribeKey("caipAddress",e=>{this.address=u.w.getPlainAddress(e),this.caipAddress=e}),d.U.subscribeKey("balance",e=>this.balance=e),d.U.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),d.U.subscribeKey("profileName",e=>this.profileName=e),d.U.subscribeKey("profileImage",e=>this.profileImage=e),a.H.subscribeKey("features",e=>this.features=e),a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),K.a.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.W.subscribeKey("activeChain",e=>this.namespace=e),s.W.subscribeKey("activeCaipNetwork",e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],t=e?K.a.getConnectorById(e):void 0,i=l.$.getConnectorImage(t),{value:n,decimals:a,symbol:s}=u.w.parseBalance(this.balance,this.balanceSymbol);return o.qy`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${(0,r.J)(this.caipAddress)}
          address=${(0,r.J)(u.w.getPlainAddress(this.caipAddress))}
          imageSrc=${(0,r.J)(null===this.profileImage?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${i}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <wui-flex flexDirection="row" alignItems="flex-end" justifyContent="center" gap="1">
          <wui-text variant="h3-regular" color="primary">${n}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${a}</wui-text>
          <wui-text variant="h6-medium" color="primary">${s}</wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const e=G.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=G.oU.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=Boolean(this.features?.receive),n=this.remoteFeatures?.onramp&&e,r=this.remoteFeatures?.payWithExchange&&t;return n||i||r?o.qy`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||G.oU.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&G.oU.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?o.qy` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,t=s.W.state.activeChain===J.o.CHAIN.EVM;return e&&t?o.qy`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){const e=this.features?.send,t=s.W.state.activeChain;if(!t)throw new Error("SendController:sendTemplate - namespace is required");const i=G.oU.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?o.qy`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=s.W.state.activeChain;if(!e)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const t=K.a.getConnectorId(e),i=K.a.getAuthConnector(),{origin:n}=location;return!i||t!==J.o.CONNECTOR_ID.AUTH||n.includes(G.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){Q.I.push("FundWallet")}handleClickSwap(){Q.I.push("Swap")}handleClickSend(){Q.I.push("WalletSend")}explorerBtnTemplate(){return d.U.state.addressExplorerUrl?o.qy`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){D.E.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:(0,X.lj)(s.W.state.activeChain)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0;const e=ee.x.getConnections(this.namespace).length>0,t=this.namespace&&K.a.state.activeConnectorIds[this.namespace],i=this.remoteFeatures?.multiWallet;await ee.x.disconnect(i?{id:t,namespace:this.namespace}:{}),e&&i&&(Q.I.push("ProfileWallets"),Y.P.showSuccess("Wallet deleted"))}catch{D.E.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),Y.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=d.U.state.addressExplorerUrl;e&&u.w.openHref(e,"_blank")}onGoToUpgradeView(){D.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Q.I.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){Q.I.push("ProfileWallets")}};Ce.styles=ke,$e([(0,n.wk)()],Ce.prototype,"caipAddress",void 0),$e([(0,n.wk)()],Ce.prototype,"address",void 0),$e([(0,n.wk)()],Ce.prototype,"profileImage",void 0),$e([(0,n.wk)()],Ce.prototype,"profileName",void 0),$e([(0,n.wk)()],Ce.prototype,"disconnecting",void 0),$e([(0,n.wk)()],Ce.prototype,"balance",void 0),$e([(0,n.wk)()],Ce.prototype,"balanceSymbol",void 0),$e([(0,n.wk)()],Ce.prototype,"features",void 0),$e([(0,n.wk)()],Ce.prototype,"remoteFeatures",void 0),$e([(0,n.wk)()],Ce.prototype,"namespace",void 0),$e([(0,n.wk)()],Ce.prototype,"activeConnectorIds",void 0),Ce=$e([(0,p.EM)("w3m-account-default-widget")],Ce);const Ee=b.AH`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var Ie=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Se=class extends o.WF{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return o.qy`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Se.styles=[w.W5,Ee],Ie([(0,n.MZ)()],Se.prototype,"dollars",void 0),Ie([(0,n.MZ)()],Se.prototype,"pennies",void 0),Se=Ie([(0,m.E)("wui-balance")],Se);const Re=b.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ae=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const We={sm:"sm-regular",md:"md-regular"};let Te=class extends o.WF{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,o.qy`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${We[this.size]}>${this.message}</wui-text>`}};Te.styles=[w.W5,w.fD,Re],Ae([(0,n.MZ)()],Te.prototype,"placement",void 0),Ae([(0,n.MZ)()],Te.prototype,"variant",void 0),Ae([(0,n.MZ)()],Te.prototype,"size",void 0),Ae([(0,n.MZ)()],Te.prototype,"message",void 0),Te=Ae([(0,m.E)("wui-tooltip")],Te);var Ne=i(59133),Oe=i(19783);i(51200);const Pe=o.AH`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let Me=class extends o.WF{render(){return o.qy`<w3m-activity-list page="account"></w3m-activity-list>`}};Me.styles=Pe,Me=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-account-activity-widget")],Me),i(96363);const je=b.AH`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var De=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let qe=class extends o.WF{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?o.qy`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?o.qy`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};qe.styles=[w.W5,w.fD,je],De([(0,n.MZ)()],qe.prototype,"icon",void 0),De([(0,n.MZ)()],qe.prototype,"text",void 0),De([(0,n.MZ)()],qe.prototype,"description",void 0),De([(0,n.MZ)()],qe.prototype,"tag",void 0),De([(0,n.MZ)({type:Boolean})],qe.prototype,"disabled",void 0),qe=De([(0,m.E)("wui-list-description")],qe),i(31917);const Ue=o.AH`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var Le=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ze=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=d.U.state.tokenBalance,this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(d.U.subscribe(e=>{this.tokenBalance=e.tokenBalance}),a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?o.qy`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:o.qy` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?o.qy`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:o.qy``}tokenItemTemplate(){return this.tokenBalance?.map(e=>o.qy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){Q.I.push("WalletReceive")}onBuyClick(){D.E.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:(0,X.lj)(s.W.state.activeChain)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("OnRampProviders")}};ze.styles=Ue,Le([(0,n.wk)()],ze.prototype,"tokenBalance",void 0),Le([(0,n.wk)()],ze.prototype,"remoteFeatures",void 0),ze=Le([(0,p.EM)("w3m-account-tokens-widget")],ze),i(82556),i(84111);const Fe=p.AH`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var _e=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ze=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.address=d.U.state.address,this.profileName=d.U.state.profileName,this.network=s.W.state.activeCaipNetwork,this.currentTab=d.U.state.currentTab,this.tokenBalance=d.U.state.tokenBalance,this.features=a.H.state.features,this.namespace=s.W.state.activeChain,this.activeConnectorIds=K.a.state.activeConnectorIds,this.remoteFeatures=a.H.state.remoteFeatures}firstUpdated(){d.U.fetchTokenBalance(),this.unsubscribe.push(d.U.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):h.W.close()}),K.a.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.W.subscribeKey("activeChain",e=>this.namespace=e),s.W.subscribeKey("activeCaipNetwork",e=>this.network=e),a.H.subscribeKey("features",e=>this.features=e),a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");if(!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],t=e?K.a.getConnectorById(e):void 0,{icon:i,iconSize:n}=this.getAuthData();return o.qy`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${i}
          iconSize=${n}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const e=this.features?.walletFeaturesOrder||G.oU.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(e=>"send"===e||"receive"===e?!this.features?.[e]:"swaps"!==e&&"onramp"!==e||!this.remoteFeatures?.[e]))return null;const t=e.map(e=>"receive"===e||"onramp"===e?"fund":e),i=[...new Set(t)];return o.qy`<wui-flex gap="2">
      ${i.map(e=>{switch(e){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const e=G.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=G.oU.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=this.features?.receive,n=this.remoteFeatures?.onramp&&e,r=this.remoteFeatures?.payWithExchange&&t;return n||i||r?o.qy`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,t=s.W.state.activeChain===J.o.CHAIN.EVM;return e&&t?o.qy`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){const e=this.features?.send,t=s.W.state.activeChain,i=G.oU.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?o.qy`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>d.U.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===J.o.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return 0===this.currentTab?o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?o.qy`<w3m-account-activity-widget></w3m-account-activity-widget>`:o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=u.w.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=u.w.formatTokenBalance(e);return o.qy`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return o.qy`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=Oe.y.getTabsByNamespace(s.W.state.activeChain);return 0===e.length?null:o.qy`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){d.U.setCurrentTab(e)}onFundWalletClick(){Q.I.push("FundWallet")}onSwapClick(){this.network?.caipNetworkId&&!G.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?Q.I.push("UnsupportedChain",{swapUnsupportedChain:!0}):(D.E.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,X.lj)(s.W.state.activeChain)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("Swap"))}getAuthData(){const e=ae.i.getConnectedSocialProvider(),t=ae.i.getConnectedSocialUsername(),i=K.a.getAuthConnector(),o=i?.provider.getEmail()??"";return{name:Ne.g.getAuthName({email:o,socialUsername:t,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){Q.I.push("ProfileWallets")}onSendClick(){D.E.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,X.lj)(s.W.state.activeChain)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("WalletSend")}};Ze.styles=Fe,_e([(0,n.wk)()],Ze.prototype,"watchTokenBalance",void 0),_e([(0,n.wk)()],Ze.prototype,"address",void 0),_e([(0,n.wk)()],Ze.prototype,"profileName",void 0),_e([(0,n.wk)()],Ze.prototype,"network",void 0),_e([(0,n.wk)()],Ze.prototype,"currentTab",void 0),_e([(0,n.wk)()],Ze.prototype,"tokenBalance",void 0),_e([(0,n.wk)()],Ze.prototype,"features",void 0),_e([(0,n.wk)()],Ze.prototype,"namespace",void 0),_e([(0,n.wk)()],Ze.prototype,"activeConnectorIds",void 0),_e([(0,n.wk)()],Ze.prototype,"remoteFeatures",void 0),Ze=_e([(0,p.EM)("w3m-account-wallet-features-widget")],Ze);var Be=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let He=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.namespace=s.W.state.activeChain,this.unsubscribe.push(s.W.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;const e=K.a.getConnectorId(this.namespace),t=K.a.getAuthConnector();return o.qy`
      ${t&&e===J.o.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return o.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return o.qy`<w3m-account-default-widget></w3m-account-default-widget>`}};Be([(0,n.wk)()],He.prototype,"namespace",void 0),He=Be([(0,p.EM)("w3m-account-view")],He);var Ve=i(53720),Je=i(75910),Ke=i(8577);i(81611),i(8166);const Ge=b.AH`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var Ye=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Xe=class extends o.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return o.qy`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?o.qy`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return o.qy` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?o.qy`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?o.qy`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:o.qy`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return 0===this.content.length?null:o.qy`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:i,description:n,enableButton:r,buttonType:a,buttonLabel:s,buttonVariant:c,tagVariant:l,tagLabel:d,alignItems:u="flex-end"}){return o.qy`
      <wui-flex justifyContent="space-between" alignItems=${u} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${i?o.qy`<wui-text variant="sm-medium" color="secondary">${i}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${g.Z.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?"end":"middle"})}
            </wui-text>

            ${l&&d?o.qy`<wui-tag variant=${l} size="sm">${d}</wui-tag>`:null}
          </wui-flex>

          ${n?o.qy`<wui-text variant="sm-regular" color="secondary">${n}</wui-text>`:null}
        </wui-flex>

        ${r?this.buttonTemplate({buttonType:a,buttonLabel:s,buttonVariant:c}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:i}){return o.qy`
      <wui-button
        size="sm"
        variant=${i}
        @click=${"disconnect"===e?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${"disconnect"===e?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};Xe.styles=[w.W5,w.fD,Ge],Ye([(0,n.MZ)()],Xe.prototype,"address",void 0),Ye([(0,n.MZ)()],Xe.prototype,"profileName",void 0),Ye([(0,n.MZ)({type:Array})],Xe.prototype,"content",void 0),Ye([(0,n.MZ)()],Xe.prototype,"alt",void 0),Ye([(0,n.MZ)()],Xe.prototype,"imageSrc",void 0),Ye([(0,n.MZ)()],Xe.prototype,"icon",void 0),Ye([(0,n.MZ)()],Xe.prototype,"iconSize",void 0),Ye([(0,n.MZ)()],Xe.prototype,"iconBadge",void 0),Ye([(0,n.MZ)()],Xe.prototype,"iconBadgeSize",void 0),Ye([(0,n.MZ)()],Xe.prototype,"buttonVariant",void 0),Ye([(0,n.MZ)({type:Boolean})],Xe.prototype,"enableMoreButton",void 0),Ye([(0,n.MZ)({type:Number})],Xe.prototype,"charsStart",void 0),Ye([(0,n.MZ)({type:Number})],Xe.prototype,"charsEnd",void 0),Xe=Ye([(0,m.E)("wui-active-profile-wallet-item")],Xe),i(91885);const Qe=b.AH`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var et=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let tt=class extends o.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?o.qy`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?o.qy`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:o.qy`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return o.qy`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return o.qy`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${(0,r.J)(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};tt.styles=[w.W5,w.fD,Qe],et([(0,n.MZ)()],tt.prototype,"address",void 0),et([(0,n.MZ)()],tt.prototype,"profileName",void 0),et([(0,n.MZ)()],tt.prototype,"alt",void 0),et([(0,n.MZ)()],tt.prototype,"buttonLabel",void 0),et([(0,n.MZ)()],tt.prototype,"buttonVariant",void 0),et([(0,n.MZ)()],tt.prototype,"imageSrc",void 0),et([(0,n.MZ)()],tt.prototype,"icon",void 0),et([(0,n.MZ)()],tt.prototype,"iconSize",void 0),et([(0,n.MZ)()],tt.prototype,"iconBadge",void 0),et([(0,n.MZ)()],tt.prototype,"iconBadgeSize",void 0),et([(0,n.MZ)()],tt.prototype,"rightIcon",void 0),et([(0,n.MZ)()],tt.prototype,"rightIconSize",void 0),et([(0,n.MZ)({type:Boolean})],tt.prototype,"loading",void 0),et([(0,n.MZ)({type:Number})],tt.prototype,"charsStart",void 0),et([(0,n.MZ)({type:Number})],tt.prototype,"charsEnd",void 0),tt=et([(0,m.E)("wui-inactive-profile-wallet-item")],tt),i(30943);var it=i(35306);const ot={getAuthData(e){const t=e.connectorId===J.o.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const i=e?.auth?.name??ae.i.getConnectedSocialProvider(),o=e?.auth?.username??ae.i.getConnectedSocialUsername(),n=K.a.getAuthConnector(),r=n?.provider.getEmail()??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:t?Ne.g.getAuthName({email:r,socialUsername:o,socialProvider:i}):void 0}}},nt=p.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var rt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const at=4,st=6,ct="md",lt="lightbulb",dt=[0,1],ut={eip155:"ethereum",solana:"solana",bip122:"bitcoin"},ht=[{namespace:"eip155",icon:ut.eip155,label:"EVM"},{namespace:"solana",icon:ut.solana,label:"Solana"},{namespace:"bip122",icon:ut.bip122,label:"Bitcoin"}],pt={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"}};let wt=class extends o.WF{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=s.W.state.activeChain,this.namespaces=Array.from(s.W.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=K.a.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=s.W.state.activeCaipNetwork,this.user=d.U.state.user,this.remoteFeatures=a.H.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=s.W.getAccountData(this.namespace)?.caipAddress,this.profileName=s.W.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(ee.x.subscribeKey("connections",()=>this.onConnectionsChange()),ee.x.subscribeKey("recentConnections",()=>this.requestUpdate()),K.a.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.W.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e),d.U.subscribeKey("user",e=>this.user=e),a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.chainListener=s.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){const e=this.shadowRoot?.querySelector(".wallet-list");if(!e)return;const t=()=>this.updateScrollOpacity(e);requestAnimationFrame(t),e.addEventListener("scroll",t),this.resizeObserver=new ResizeObserver(t),this.resizeObserver.observe(e),t()}render(){const e=this.namespace;if(!e)throw new Error("Namespace is not set");return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){const e=ht.filter(e=>this.namespaces.includes(e.namespace));return e.length>1?o.qy`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){const t=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+(this.caipAddress?1:0);return o.qy`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${ut[e]??ut.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${t>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>ee.x.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){const t=this.hasAnyConnections(e),i={"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t};return o.qy`
      <wui-flex flexDirection="column" class=${(0,Ve.H)(i)} rowgap="3">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){const t=this.getActiveConnections(e),i=this.activeConnectorIds[e],n=this.getPlainAddress();return o.qy`
      ${n||i||t.length>0?o.qy`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){const t=this.activeConnectorIds[e];if(!t)return null;const{connections:i}=Ke.b.getConnectionsData(e),n=K.a.getConnectorById(t),r=l.$.getConnectorImage(n),a=this.getPlainAddress();if(!a)return null;const s=e===J.o.CHAIN.BITCOIN,c=ot.getAuthData({connectorId:t,accounts:[]}),d=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,u=i.find(e=>e.connectorId===t),h=u?.accounts.filter(e=>!it.y.isLowerCaseMatch(e.address,a));return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${a}
          alt=${n?.name}
          .content=${this.getProfileContent({address:a,connections:i,connectorId:t,namespace:e})}
          .charsStart=${at}
          .charsEnd=${st}
          .icon=${c.icon}
          .iconSize=${c.iconSize}
          .iconBadge=${this.isSmartAccount(a)?lt:void 0}
          .iconBadgeSize=${this.isSmartAccount(a)?ct:void 0}
          imageSrc=${r}
          ?enableMoreButton=${c.isAuth}
          @copy=${()=>this.handleCopyAddress(a)}
          @disconnect=${()=>this.handleDisconnect(e,t)}
          @switch=${()=>{s&&u&&h?.[0]&&this.handleSwitchWallet(u,h[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(a)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${d?o.qy`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){const t=this.getActiveConnections(e);return 0===t.length?null:o.qy`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){const{recentConnections:t}=Ke.b.getConnectionsData(e);return 0===t.flatMap(e=>e.accounts).length?null:o.qy`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,i){return e.filter(e=>e.accounts.length>0).map((e,n)=>{const r=K.a.getConnectorById(e.connectorId),a=l.$.getConnectorImage(r)??"",s=ot.getAuthData(e);return e.accounts.map((r,c)=>{const l=0!==n||0!==c,d=this.isAccountLoading(e.connectorId,r.address);return o.qy`
            <wui-flex flexDirection="column">
              ${l?o.qy`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${r.address}
                alt=${e.connectorId}
                buttonLabel=${t?"Connect":"Switch"}
                buttonVariant=${t?"neutral-secondary":"accent-secondary"}
                rightIcon=${t?"bin":"power"}
                rightIconSize="sm"
                class=${t?"recent-connection":"active-connection"}
                data-testid=${t?"recent-connection":"active-connection"}
                imageSrc=${a}
                .iconBadge=${this.isSmartAccount(r.address)?lt:void 0}
                .iconBadgeSize=${this.isSmartAccount(r.address)?ct:void 0}
                .icon=${s.icon}
                .iconSize=${s.iconSize}
                .loading=${d}
                .showBalance=${!1}
                .charsStart=${at}
                .charsEnd=${st}
                @buttonClick=${()=>this.handleSwitchWallet(e,r.address,i)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:r.address,isRecentConnection:t,namespace:i})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress)return null;if(!this.hasAnyConnections(e))return null;const{title:t}=this.getChainLabelInfo(e);return o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){const{title:t,description:i}=this.getChainLabelInfo(e);return o.qy`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${i}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${t}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){const t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=s.W.getAccountData(t)?.caipAddress,this.profileName=s.W.getAccountData(t)?.profileName,this.chainListener=s.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,i){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,await ee.x.switchConnection({connection:e,address:t,namespace:i,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?Y.P.showSuccess("Wallet switched"):e&&Y.P.showSuccess("Account switched")}})}catch(e){Y.P.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){const{connection:t,address:i,isRecentConnection:o,namespace:n}=e;o?(ae.i.deleteAddressFromConnection({connectorId:t.connectorId,address:i,namespace:n}),ee.x.syncStorageConnections(),Y.P.showSuccess("Wallet deleted")):this.handleDisconnect(n,t.connectorId)}async handleDisconnect(e,t){try{await ee.x.disconnectConnector({id:t,namespace:e}),Y.P.showSuccess("Wallet disconnected")}catch{Y.P.showError("Failed to disconnect wallet")}}handleCopyAddress(e){u.w.copyToClopboard(e),Y.P.showSuccess("Address copied")}handleMore(){Q.I.push("AccountSettings")}handleExternalLink(e){const t=this.caipNetwork?.blockExplorers?.default.url;t&&u.w.openHref(`${t}/address/${e}`,"_blank")}handleAddConnection(e){K.a.setFilterByNamespace(e),Q.I.push("Connect",{addWalletForNamespace:e})}getChainLabelInfo(e){return pt[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){if(!this.namespace)return!1;const t=this.user?.accounts?.find(e=>"smartAccount"===e.type);return!(!t||!e)&&it.y.isLowerCaseMatch(t.address,e)}getPlainAddress(){return this.caipAddress?u.w.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){const t=this.activeConnectorIds[e],{connections:i}=Ke.b.getConnectionsData(e),[o]=i.filter(e=>it.y.isLowerCaseMatch(e.connectorId,t));if(!t)return i;const n=e===J.o.CHAIN.BITCOIN,{address:r}=this.caipAddress?Je.C.parseCaipAddress(this.caipAddress):{};let a=[...r?[r]:[]];return n&&o&&(a=o.accounts.map(e=>e.address)||[]),Ke.b.excludeConnectorAddressFromConnections({connectorId:t,addresses:a,connections:i})}hasAnyConnections(e){const t=this.getActiveConnections(e),{recentConnections:i}=Ke.b.getConnectionsData(e);return Boolean(this.caipAddress)||t.length>0||i.length>0}isAccountLoading(e,t){return it.y.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&it.y.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){const{address:t,connections:i,connectorId:o,namespace:n}=e,[r]=i.filter(e=>it.y.isLowerCaseMatch(e.connectorId,o));if(n===J.o.CHAIN.BITCOIN&&r?.accounts.every(e=>"string"==typeof e.type))return this.getBitcoinProfileContent(r.accounts,t);const a=ot.getAuthData({connectorId:o,accounts:[]});return[{address:t,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...a.isAuth?{description:this.isSmartAccount(t)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,t){const i=e.length>1,o=this.getPlainAddress();return e.map(e=>{const n=it.y.isLowerCaseMatch(e.address,o);let r="PAYMENT";return"ordinal"===e.type&&(r="ORDINALS"),{address:e.address,tagLabel:it.y.isLowerCaseMatch(e.address,t)?"Active":void 0,tagVariant:it.y.isLowerCaseMatch(e.address,t)?"success":void 0,enableButton:!0,...i?{label:r,alignItems:"flex-end",buttonType:n?"disconnect":"switch",buttonLabel:n?"Disconnect":"Switch",buttonVariant:n?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){const e=this.shadowRoot?.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return Boolean(this.remoteFeatures?.multiWallet)}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",p.z8.interpolate([0,50],dt,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",p.z8.interpolate([0,50],dt,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:e}=Ke.b.getConnectionsData(this.namespace);0===e.length&&Q.I.reset("ProfileWallets")}this.requestUpdate()}};wt.styles=nt,rt([(0,n.wk)()],wt.prototype,"currentTab",void 0),rt([(0,n.wk)()],wt.prototype,"namespace",void 0),rt([(0,n.wk)()],wt.prototype,"namespaces",void 0),rt([(0,n.wk)()],wt.prototype,"caipAddress",void 0),rt([(0,n.wk)()],wt.prototype,"profileName",void 0),rt([(0,n.wk)()],wt.prototype,"activeConnectorIds",void 0),rt([(0,n.wk)()],wt.prototype,"lastSelectedAddress",void 0),rt([(0,n.wk)()],wt.prototype,"lastSelectedConnectorId",void 0),rt([(0,n.wk)()],wt.prototype,"isSwitching",void 0),rt([(0,n.wk)()],wt.prototype,"caipNetwork",void 0),rt([(0,n.wk)()],wt.prototype,"user",void 0),rt([(0,n.wk)()],wt.prototype,"remoteFeatures",void 0),wt=rt([(0,p.EM)("w3m-profile-wallets-view")],wt);var gt=i(7610);const mt=b.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var bt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ft=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,gt._)(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return o.qy`
      <label data-size=${this.size}>
        <input
          ${(0,gt.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};ft.styles=[w.W5,w.fD,mt],bt([(0,n.MZ)({type:Boolean})],ft.prototype,"checked",void 0),bt([(0,n.MZ)({type:Boolean})],ft.prototype,"disabled",void 0),bt([(0,n.MZ)()],ft.prototype,"size",void 0),ft=bt([(0,m.E)("wui-toggle")],ft);const yt=b.AH`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var vt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xt=class extends o.WF{constructor(){super(...arguments),this.checked=!1}render(){return o.qy`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};xt.styles=[w.W5,w.fD,yt],vt([(0,n.MZ)({type:Boolean})],xt.prototype,"checked",void 0),xt=vt([(0,m.E)("wui-certified-switch")],xt),i(82673);const kt=b.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var $t=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ct=class extends o.WF{constructor(){super(...arguments),this.inputComponentRef=(0,gt._)(),this.inputValue=""}render(){return o.qy`
      <wui-input-text
        ${(0,gt.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?o.qy`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};Ct.styles=[w.W5,kt],$t([(0,n.MZ)()],Ct.prototype,"inputValue",void 0),Ct=$t([(0,m.E)("wui-search-bar")],Ct);var Et=i(88249);const It=o.JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;i(63274);const St=b.AH`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Rt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let At=class extends o.WF{constructor(){super(...arguments),this.type="wallet"}render(){return o.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?o.qy` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${It}`:o.qy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};At.styles=[w.W5,w.fD,St],Rt([(0,n.MZ)()],At.prototype,"type",void 0),At=Rt([(0,m.E)("wui-card-select-loader")],At);const Wt=o.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Tt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Nt=class extends o.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&g.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&g.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&g.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&g.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&g.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&g.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&g.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&g.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};Nt.styles=[w.W5,Wt],Tt([(0,n.MZ)()],Nt.prototype,"gridTemplateRows",void 0),Tt([(0,n.MZ)()],Nt.prototype,"gridTemplateColumns",void 0),Tt([(0,n.MZ)()],Nt.prototype,"justifyItems",void 0),Tt([(0,n.MZ)()],Nt.prototype,"alignItems",void 0),Tt([(0,n.MZ)()],Nt.prototype,"justifyContent",void 0),Tt([(0,n.MZ)()],Nt.prototype,"alignContent",void 0),Tt([(0,n.MZ)()],Nt.prototype,"columnGap",void 0),Tt([(0,n.MZ)()],Nt.prototype,"rowGap",void 0),Tt([(0,n.MZ)()],Nt.prototype,"gap",void 0),Tt([(0,n.MZ)()],Nt.prototype,"padding",void 0),Tt([(0,n.MZ)()],Nt.prototype,"margin",void 0),Nt=Tt([(0,m.E)("wui-grid")],Nt);var Ot=i(54277);i(32321);const Pt=p.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Mt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let jt=class extends o.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return o.qy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,r.J)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?o.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():o.qy`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,r.J)(this.imageSrc)}
        name=${(0,r.J)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return o.qy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=l.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await l.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,D.E.sendEvent({type:"track",event:"WALLET_IMPRESSION",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:Q.I.state.view,query:this.walletQuery,certified:this.certified}}))}};jt.styles=Pt,Mt([(0,n.wk)()],jt.prototype,"visible",void 0),Mt([(0,n.wk)()],jt.prototype,"imageSrc",void 0),Mt([(0,n.wk)()],jt.prototype,"imageLoading",void 0),Mt([(0,n.wk)()],jt.prototype,"isImpressed",void 0),Mt([(0,n.MZ)()],jt.prototype,"explorerId",void 0),Mt([(0,n.MZ)()],jt.prototype,"walletQuery",void 0),Mt([(0,n.MZ)()],jt.prototype,"certified",void 0),Mt([(0,n.MZ)({type:Object})],jt.prototype,"wallet",void 0),jt=Mt([(0,p.EM)("w3m-all-wallets-list-item")],jt);const Dt=p.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var qt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Ut="local-paginator";let Lt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!Et.N.state.wallets.length,this.wallets=Et.N.state.wallets,this.recommended=Et.N.state.recommended,this.featured=Et.N.state.featured,this.filteredWallets=Et.N.state.filteredWallets,this.unsubscribe.push(Et.N.subscribeKey("wallets",e=>this.wallets=e),Et.N.subscribeKey("recommended",e=>this.recommended=e),Et.N.subscribeKey("featured",e=>this.featured=e),Et.N.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return o.qy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await Et.N.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>o.qy`
        <wui-card-select-loader type="wallet" id=${(0,r.J)(t)}></wui-card-select-loader>
      `)}getWallets(){const e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);const t=u.w.uniqueBy(e,"id"),i=Ot.A.markWalletsAsInstalled(t);return Ot.A.markWalletsWithDisplayIndex(i)}walletsTemplate(){return this.getWallets().map(e=>o.qy`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:o,mobileFilteredOutWalletsLength:n}=Et.N.state,r=window.innerWidth<352?3:4,a=e.length+t.length;let s=Math.ceil(a/r)*r-a+r;return s-=e.length?i.length%r:0,0===o&&i.length>0?null:0===o||[...i,...e,...t].length<o-(n??0)?this.shimmerTemplate(s,Ut):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${Ut}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){const{page:e,count:t,wallets:i}=Et.N.state;i.length<t&&Et.N.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){K.a.selectWalletConnector(e)}};Lt.styles=Dt,qt([(0,n.wk)()],Lt.prototype,"loading",void 0),qt([(0,n.wk)()],Lt.prototype,"wallets",void 0),qt([(0,n.wk)()],Lt.prototype,"recommended",void 0),qt([(0,n.wk)()],Lt.prototype,"featured",void 0),qt([(0,n.wk)()],Lt.prototype,"filteredWallets",void 0),qt([(0,n.wk)()],Lt.prototype,"badge",void 0),Lt=qt([(0,p.EM)("w3m-all-wallets-list")],Lt),i(53998);const zt=o.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Ft=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let _t=class extends o.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?o.qy`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await Et.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=Et.N.state,t=Ot.A.markWalletsAsInstalled(e);return e.length?o.qy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${t.map(e=>o.qy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:o.qy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){K.a.selectWalletConnector(e)}};_t.styles=zt,Ft([(0,n.wk)()],_t.prototype,"loading",void 0),Ft([(0,n.MZ)()],_t.prototype,"query",void 0),Ft([(0,n.MZ)()],_t.prototype,"badge",void 0),_t=Ft([(0,p.EM)("w3m-all-wallets-search")],_t);var Zt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Bt=class extends o.WF{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=u.w.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return o.qy`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?o.qy`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:o.qy`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",Y.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return u.w.isMobile()?o.qy`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Q.I.push("ConnectingWalletConnect")}};Zt([(0,n.wk)()],Bt.prototype,"search",void 0),Zt([(0,n.wk)()],Bt.prototype,"badge",void 0),Bt=Zt([(0,p.EM)("w3m-all-wallets-view")],Bt);var Ht=i(44290),Vt=i(51454);const Jt=b.AH`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var Kt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Gt=class extends o.WF{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const e=`${this.size}-regular`;return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};Gt.styles=[w.W5,w.fD,Jt],Kt([(0,n.MZ)()],Gt.prototype,"text",void 0),Kt([(0,n.MZ)({type:Boolean})],Gt.prototype,"disabled",void 0),Kt([(0,n.MZ)()],Gt.prototype,"size",void 0),Kt([(0,n.MZ)()],Gt.prototype,"icon",void 0),Kt([(0,n.MZ)()],Gt.prototype,"tabIdx",void 0),Gt=Kt([(0,m.E)("wui-list-button")],Gt),i(95675);var Yt=i(69510),Xt=i(71655),Qt=(i(41052),i(21785));const ei=p.AH`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`;var ti=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ii=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.formRef=(0,gt._)(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){const e=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.AUTH);return o.qy`
      <form ${(0,gt.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,r.J)(this.tabIdx)}
          ?disabled=${e}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?o.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?o.qy`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(Oe.y.isValidEmail(this.email)){if(!J.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===s.W.state.activeChain)){const e=s.W.getFirstCaipNetworkSupportsAuthConnector();if(e)return void Q.I.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=K.a.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await t.provider.connectEmail({email:this.email});if(D.E.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i)D.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Q.I.push("EmailVerifyOtp",{email:this.email});else if("VERIFY_DEVICE"===i)Q.I.push("EmailVerifyDevice",{email:this.email});else if("CONNECT"===i){const e=this.remoteFeatures?.multiWallet;await ee.x.connectExternal(t,s.W.state.activeChain),e?(Q.I.replace("ProfileWallets"),Y.P.showSuccess("New Wallet Added")):Q.I.replace("Account")}}catch(e){const t=u.w.parseError(e);t?.includes("Invalid email")?this.error="Invalid email. Try again.":Y.P.showError(e)}finally{this.loading=!1}}else Xt.h.open({displayMessage:Qt.R.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning")}onFocusEvent(){D.E.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};ii.styles=ei,ti([(0,n.MZ)()],ii.prototype,"tabIdx",void 0),ti([(0,n.wk)()],ii.prototype,"email",void 0),ti([(0,n.wk)()],ii.prototype,"loading",void 0),ti([(0,n.wk)()],ii.prototype,"error",void 0),ti([(0,n.wk)()],ii.prototype,"remoteFeatures",void 0),ii=ti([(0,p.EM)("w3m-email-login-widget")],ii),i(86074);var oi=i(71801);i(68239),i(41520);const ni=b.AH`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var ri=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ai=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};ai.styles=[w.W5,w.fD,ni],ri([(0,n.MZ)()],ai.prototype,"logo",void 0),ri([(0,n.MZ)({type:Boolean})],ai.prototype,"disabled",void 0),ri([(0,n.MZ)()],ai.prototype,"tabIdx",void 0),ai=ri([(0,m.E)("wui-logo-select")],ai);var si=i(79835);const ci=p.AH`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var li=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let di=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.remoteFeatures=a.H.state.remoteFeatures,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isPwaLoading=!1,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const e="explore"===this.walletGuide;let t=this.remoteFeatures?.socials;return!t&&e?(t=G.oU.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?o.qy` <wui-flex gap="2">
        ${e.slice(0,2).map(e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:o.qy` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${(0,r.J)(e[0])}
      text=${`Continue with ${p.Zv.capitalize(e[0])}`}
      tabIdx=${(0,r.J)(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials;const t="explore"===this.walletGuide;return(!this.authConnector||!e||0===e.length)&&t&&(e=G.oU.DEFAULT_SOCIALS),e?e.length<=2?null:e&&e.length>6?o.qy`<wui-flex gap="2">
        ${e.slice(1,5).map(e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,r.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?o.qy`<wui-flex gap="2">
      ${e.slice(1,e.length).map(e=>o.qy`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,r.J)(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null:null}onMoreSocialsClick(){Q.I.push("ConnectSocials")}async onSocialClick(e){if(!J.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===s.W.state.activeChain)){const e=s.W.getFirstCaipNetworkSupportsAuthConnector();if(e)return void Q.I.push("SwitchNetwork",{network:e})}e&&await(0,oi.Up)(e)}async handlePwaFrameLoad(){if(u.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof si.Y&&await this.authConnector.provider.init()}catch(e){Xt.h.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return ee.x.hasAnyConnection(J.o.CONNECTOR_ID.AUTH)}};di.styles=ci,li([(0,n.MZ)()],di.prototype,"walletGuide",void 0),li([(0,n.MZ)()],di.prototype,"tabIdx",void 0),li([(0,n.wk)()],di.prototype,"connectors",void 0),li([(0,n.wk)()],di.prototype,"remoteFeatures",void 0),li([(0,n.wk)()],di.prototype,"authConnector",void 0),li([(0,n.wk)()],di.prototype,"isPwaLoading",void 0),di=li([(0,p.EM)("w3m-social-login-widget")],di),i(9322);var ui=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let hi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.count=Et.N.state.count,this.filteredCount=Et.N.state.filteredWallets.length,this.isFetchingRecommendedWallets=Et.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e),Et.N.subscribeKey("count",e=>this.count=e),Et.N.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),Et.N.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=a.H.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!u.w.isMobile())return null;const i=Et.N.state.featured.length,n=this.count+i,s=n<10?n:10*Math.floor(n/10),c=this.filteredCount>0?this.filteredCount:s;let l=`${c}`;this.filteredCount>0?l=`${this.filteredCount}`:c<n&&(l=`${c}+`);const d=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${l}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,r.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${d}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){D.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Q.I.push("AllWallets")}};ui([(0,n.MZ)()],hi.prototype,"tabIdx",void 0),ui([(0,n.wk)()],hi.prototype,"connectors",void 0),ui([(0,n.wk)()],hi.prototype,"count",void 0),ui([(0,n.wk)()],hi.prototype,"filteredCount",void 0),ui([(0,n.wk)()],hi.prototype,"isFetchingRecommendedWallets",void 0),hi=ui([(0,p.EM)("w3m-all-wallets-widget")],hi);var pi=i(36752),wi=i(7804),gi=i(18504);const mi=(e,t,i)=>{const o=new Map;for(let n=t;n<=i;n++)o.set(e[n],n);return o},bi=(0,wi.u$)(class extends wi.WL{constructor(e){if(super(e),e.type!==wi.OA.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const n=[],r=[];let a=0;for(const t of e)n[a]=o?o(t,a):a,r[a]=i(t,a),a++;return{values:r,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){const n=(0,gi.cN)(e),{values:r,keys:a}=this.dt(t,i,o);if(!Array.isArray(n))return this.ut=a,r;const s=this.ut??=[],c=[];let l,d,u=0,h=n.length-1,p=0,w=r.length-1;for(;u<=h&&p<=w;)if(null===n[u])u++;else if(null===n[h])h--;else if(s[u]===a[p])c[p]=(0,gi.lx)(n[u],r[p]),u++,p++;else if(s[h]===a[w])c[w]=(0,gi.lx)(n[h],r[w]),h--,w--;else if(s[u]===a[w])c[w]=(0,gi.lx)(n[u],r[w]),(0,gi.Dx)(e,c[w+1],n[u]),u++,w--;else if(s[h]===a[p])c[p]=(0,gi.lx)(n[h],r[p]),(0,gi.Dx)(e,n[u],n[h]),h--,p++;else if(void 0===l&&(l=mi(a,p,w),d=mi(s,u,h)),l.has(s[u]))if(l.has(s[h])){const t=d.get(a[p]),i=void 0!==t?n[t]:null;if(null===i){const t=(0,gi.Dx)(e,n[u]);(0,gi.lx)(t,r[p]),c[p]=t}else c[p]=(0,gi.lx)(i,r[p]),(0,gi.Dx)(e,n[u],i),n[t]=null;p++}else(0,gi.KO)(n[h]),h--;else(0,gi.KO)(n[u]),u++;for(;p<=w;){const t=(0,gi.Dx)(e,c[w+1]);(0,gi.lx)(t,r[p]),c[p++]=t}for(;u<=h;){const e=n[u++];null!==e&&(0,gi.KO)(e)}return this.ut=a,(0,gi.mY)(e,c),pi.c0}});var fi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let yi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=[],this.connections=ee.x.state.connections,this.unsubscribe.push(ee.x.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(e=>"ANNOUNCED"===e.type);return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${bi(e.filter(Ne.g.showConnector),e=>e.id,e=>{const t=(this.connections.get(e.chain)??[]).some(t=>it.y.isLowerCaseMatch(t.connectorId,e.id));return o.qy`
              <w3m-list-wallet
                imageSrc=${(0,r.J)(l.$.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant=${t?"info":"success"}
                tagLabel=${t?"connected":"installed"}
                size="sm"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${(0,r.J)(this.tabIdx)}
                rdnsId=${(0,r.J)(e.explorerWallet?.rdns||void 0)}
                walletRank=${(0,r.J)(e.explorerWallet?.order)}
              >
              </w3m-list-wallet>
            `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?u.w.isMobile()?Q.I.push("AllWallets"):Q.I.push("ConnectingWalletConnect"):Q.I.push("ConnectingExternal",{connector:e,wallet:e.explorerWallet})}};fi([(0,n.MZ)({type:Number})],yi.prototype,"tabIdx",void 0),fi([(0,n.MZ)({attribute:!1})],yi.prototype,"connectors",void 0),fi([(0,n.wk)()],yi.prototype,"connections",void 0),yi=fi([(0,p.EM)("w3m-connect-announced-widget")],yi);var vi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.loading=!1,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e)),u.w.isTelegram()&&u.w.isIos()&&(this.loading=!ee.x.state.wcUri,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=a.H.state;if(!e?.length)return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e),i=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`<wui-flex flexDirection="column" gap="2">
      ${t.map(e=>o.qy`
          <w3m-list-wallet
            imageSrc=${(0,r.J)(l.$.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            size="sm"
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,r.J)(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${i}
            rdnsId=${e.rdns}
            walletRank=${e.order}
          >
          </w3m-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=ae.i.getRecentWallets(),i=this.connectors.map(e=>e.info?.rdns).filter(Boolean),o=t.map(e=>e.rdns).filter(Boolean),n=i.concat(o);if(n.includes("io.metamask.mobile")&&u.w.isMobile()){const e=n.indexOf("io.metamask.mobile");n[e]="io.metamask"}return e.filter(e=>!n.includes(String(e?.rdns)))}onConnectWallet(e){this.loading||Q.I.push("ConnectingWalletConnect",{wallet:e})}};vi([(0,n.MZ)()],xi.prototype,"tabIdx",void 0),vi([(0,n.wk)()],xi.prototype,"connectors",void 0),vi([(0,n.wk)()],xi.prototype,"loading",void 0),xi=vi([(0,p.EM)("w3m-connect-custom-widget")],xi);var ki=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $i=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(e=>"EXTERNAL"===e.type).filter(Ne.g.showConnector).filter(e=>e.id!==J.o.CONNECTOR_ID.COINBASE_SDK);if(!e?.length)return this.style.cssText="display: none",null;const t=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>o.qy`
            <w3m-list-wallet
              imageSrc=${(0,r.J)(l.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?disabled=${t}
              rdnsId=${e.explorerWallet?.rdns}
              walletRank=${e.explorerWallet?.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){Q.I.push("ConnectingExternal",{connector:e})}};ki([(0,n.MZ)()],$i.prototype,"tabIdx",void 0),ki([(0,n.wk)()],$i.prototype,"connectors",void 0),$i=ki([(0,p.EM)("w3m-connect-external-widget")],$i);var Ci=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ei=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const e=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${this.wallets.map(t=>o.qy`
            <w3m-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,r.J)(l.$.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,r.J)(this.tabIdx)}
              size="sm"
              ?disabled=${e}
              rdnsId=${t.rdns}
              walletRank=${t.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){K.a.selectWalletConnector(e)}};Ci([(0,n.MZ)()],Ei.prototype,"tabIdx",void 0),Ci([(0,n.MZ)()],Ei.prototype,"wallets",void 0),Ei=Ci([(0,p.EM)("w3m-connect-featured-widget")],Ei);var Ii=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Si=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=[],this.connections=ee.x.state.connections,this.unsubscribe.push(ee.x.subscribeKey("connections",e=>this.connections=e))}render(){const e=Ne.g.sortConnectorsByExplorerWallet(this.connectors.filter(Ne.g.showConnector));return 0===e.length?(this.style.cssText="display: none",null):o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${bi(e,e=>e.id,e=>{const t=(this.connections.get(e.chain)??[]).some(t=>it.y.isLowerCaseMatch(t.connectorId,e.id));return o.qy`
              <w3m-list-wallet
                imageSrc=${(0,r.J)(l.$.getConnectorImage(e))}
                .installed=${!0}
                name=${e.name??"Unknown"}
                tagVariant=${t?"info":"success"}
                tagLabel=${t?"connected":"installed"}
                data-testid=${`wallet-selector-${e.id}`}
                size="sm"
                @click=${()=>this.onConnector(e)}
                tabIdx=${(0,r.J)(this.tabIdx)}
                rdnsId=${(0,r.J)(e.explorerWallet?.rdns||void 0)}
                walletRank=${(0,r.J)(e.explorerWallet?.order)}
              >
              </w3m-list-wallet>
            `})}
      </wui-flex>
    `}onConnector(e){K.a.setActiveConnector(e),Q.I.push("ConnectingExternal",{connector:e,wallet:e.explorerWallet})}};Ii([(0,n.MZ)({type:Number})],Si.prototype,"tabIdx",void 0),Ii([(0,n.MZ)({attribute:!1})],Si.prototype,"connectors",void 0),Ii([(0,n.wk)()],Si.prototype,"connections",void 0),Si=Ii([(0,p.EM)("w3m-connect-injected-widget")],Si);var Ri=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ai=class extends o.WF{constructor(){super(),this.tabIdx=void 0,this.connectors=[]}render(){const e=this.connectors.filter(e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name);if(!e?.length)return this.style.cssText="display: none",null;const t=Ne.g.sortConnectorsByExplorerWallet(e);return o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${t.map(e=>o.qy`
            <w3m-list-wallet
              imageSrc=${(0,r.J)(l.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="info"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
              rdnsId=${(0,r.J)(e.explorerWallet?.rdns||void 0)}
              walletRank=${(0,r.J)(e.explorerWallet?.order)}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){K.a.setActiveConnector(e),Q.I.push("ConnectingMultiChain")}};Ri([(0,n.MZ)()],Ai.prototype,"tabIdx",void 0),Ri([(0,n.MZ)()],Ai.prototype,"connectors",void 0),Ai=Ri([(0,p.EM)("w3m-connect-multi-chain-widget")],Ai);var Wi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ti=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.loading=!1,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e)),u.w.isTelegram()&&u.w.isIos()&&(this.loading=!ee.x.state.wcUri,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const e=ae.i.getRecentWallets().filter(e=>!Ot.A.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));if(!e.length)return this.style.cssText="display: none",null;const t=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>o.qy`
            <w3m-list-wallet
              imageSrc=${(0,r.J)(l.$.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="info"
              size="sm"
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${t}
              rdnsId=${e.rdns}
              walletRank=${e.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||K.a.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(t=>t.id===e.id||t.name===e.name)}isWalletCompatibleWithCurrentChain(e){const t=s.W.state.activeChain;return!t||!e.chains||e.chains.some(e=>{const i=e.split(":")[0];return t===i})}};Wi([(0,n.MZ)()],Ti.prototype,"tabIdx",void 0),Wi([(0,n.wk)()],Ti.prototype,"connectors",void 0),Wi([(0,n.wk)()],Ti.prototype,"loading",void 0),Ti=Wi([(0,p.EM)("w3m-connect-recent-widget")],Ti);var Ni=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Oi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,u.w.isTelegram()&&u.w.isIos()&&(this.loading=!ee.x.state.wcUri,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=K.a.state,{customWallets:t,featuredWalletIds:i}=a.H.state,n=e.find(e=>"walletConnect"===e.id),s=e.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type);if(!n&&!s.length&&!t?.length)return null;const c=Boolean(a.H.state.features?.email||a.H.state.remoteFeatures?.email),d=Array.isArray(a.H.state.features?.socials)&&a.H.state.features?.socials.length>0||Array.isArray(a.H.state.remoteFeatures?.socials)&&a.H.state.remoteFeatures?.socials.length>0,u=s.filter(e=>"Browser Wallet"!==e.name),h=(i?.length||0)+(t?.length||0)+(u.length||0)+(c?1:0)+(d?1:0);if(h>=4)return this.style.cssText="display: none",null;const p=Ot.A.filterOutDuplicateWallets(this.wallets).slice(0,4-h);if(!p.length)return this.style.cssText="display: none",null;const w=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${p.map(e=>o.qy`
            <w3m-list-wallet
              imageSrc=${(0,r.J)(l.$.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              size="sm"
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${w}
              rdnsId=${e.rdns}
              walletRank=${e.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;const t=K.a.getConnector({id:e.id,rdns:e.rdns});t?Q.I.push("ConnectingExternal",{connector:t}):Q.I.push("ConnectingWalletConnect",{wallet:e})}};Ni([(0,n.MZ)()],Oi.prototype,"tabIdx",void 0),Ni([(0,n.MZ)()],Oi.prototype,"wallets",void 0),Ni([(0,n.wk)()],Oi.prototype,"loading",void 0),Oi=Ni([(0,p.EM)("w3m-connect-recommended-widget")],Oi);var Pi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Mi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.connectorImages=c.j.state.connectorImages,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e),c.j.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(u.w.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(e=>"walletConnect"===e.id);if(!e)return this.style.cssText="display: none",null;const t=e.imageUrl||this.connectorImages[e?.imageId??""],i=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <w3m-list-wallet
        imageSrc=${(0,r.J)(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="accent"
        tabIdx=${(0,r.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        size="sm"
        ?disabled=${i}
        rdnsId=${e.explorerWallet?.rdns}
      >
      </w3m-list-wallet>
    `}onConnector(e){K.a.setActiveConnector(e),Q.I.push("ConnectingWalletConnect")}};Pi([(0,n.MZ)()],Mi.prototype,"tabIdx",void 0),Pi([(0,n.wk)()],Mi.prototype,"connectors",void 0),Pi([(0,n.wk)()],Mi.prototype,"connectorImages",void 0),Mi=Pi([(0,p.EM)("w3m-connect-walletconnect-widget")],Mi);const ji=p.AH`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Di=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let qi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=K.a.state.connectors,this.recommended=Et.N.state.recommended,this.featured=Et.N.state.featured,this.explorerWallets=Et.N.state.explorerWallets,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e),Et.N.subscribeKey("recommended",e=>this.recommended=e),Et.N.subscribeKey("featured",e=>this.featured=e),Et.N.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e?.length?e:Et.N.state.explorerWallets}),Et.N.subscribeKey("explorerWallets",e=>{this.explorerWallets?.length||(this.explorerWallets=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(e,t){return e.map(e=>{if("MULTI_CHAIN"===e.type&&e.connectors){const i=e.connectors.map(e=>e.id),o=e.connectors.map(e=>e.name),n=e.connectors.map(e=>e.info?.rdns),r=t?.find(e=>i.includes(e.id)||o.includes(e.name)||e.rdns&&(n.includes(e.rdns)||i.includes(e.rdns)));return e.explorerWallet=r??e.explorerWallet,e}const i=t?.find(t=>t.id===e.id||t.rdns===e.info?.rdns||t.name===e.name);return e.explorerWallet=i??e.explorerWallet,e})}processConnectorsByType(e,t=!0){if(!this.explorerWallets?.length)return e;const i=Ne.g.sortConnectorsByExplorerWallet([...e]);return t?i.filter(Ne.g.showConnector):i}connectorListTemplate(){const e=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),t=Ne.g.getConnectorsByType(e,this.recommended,this.featured),i=this.processConnectorsByType(t.announced),n=this.processConnectorsByType(t.injected),a=this.processConnectorsByType(t.multiChain,!1),s=t.custom,c=t.recent,l=t.external,d=t.recommended,u=t.featured;return Ne.g.getConnectorTypeOrder({custom:s,recent:c,announced:i,injected:n,multiChain:a,recommended:d,featured:u,external:l}).map(e=>{switch(e){case"injected":return o.qy`
            ${a.length?o.qy`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,r.J)(this.tabIdx)}
                  .connectors=${a}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?o.qy`<w3m-connect-announced-widget
                  tabIdx=${(0,r.J)(this.tabIdx)}
                  .connectors=${i}
                ></w3m-connect-announced-widget>`:null}
            ${n.length?o.qy`<w3m-connect-injected-widget
                  .connectors=${n}
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return o.qy`<w3m-connect-walletconnect-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return o.qy`<w3m-connect-recent-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return o.qy`<w3m-connect-featured-widget
            .wallets=${u}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return o.qy`<w3m-connect-custom-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return o.qy`<w3m-connect-external-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return o.qy`<w3m-connect-recommended-widget
            .wallets=${d}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${e}`),null}})}};qi.styles=ji,Di([(0,n.MZ)({type:Number})],qi.prototype,"tabIdx",void 0),Di([(0,n.wk)()],qi.prototype,"connectors",void 0),Di([(0,n.wk)()],qi.prototype,"recommended",void 0),Di([(0,n.wk)()],qi.prototype,"featured",void 0),Di([(0,n.wk)()],qi.prototype,"explorerWallets",void 0),qi=Di([(0,p.EM)("w3m-connector-list")],qi);var Ui=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Li=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0}render(){return o.qy`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${(0,r.J)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,r.J)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Ui([(0,n.MZ)()],Li.prototype,"tabIdx",void 0),Li=Ui([(0,p.EM)("w3m-wallet-login-list")],Li);const zi=p.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Fi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let _i=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=K.a.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.features=a.H.state.features,this.remoteFeatures=a.H.state.remoteFeatures,this.enableWallets=a.H.state.enableWallets,this.noAdapters=s.W.state.noAdapters,this.walletGuide="get-started",this.checked=Vt.o.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!s.W.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!s.W.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(K.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),a.H.subscribeKey("features",e=>{this.features=e}),a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),a.H.subscribeKey("enableWallets",e=>this.enableWallets=e),s.W.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),Vt.o.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();const e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,i=a.H.state.features?.legalCheckbox,n=Boolean(e||t)&&Boolean(i)&&"get-started"===this.walletGuide&&!this.checked,r={connect:!0,disabled:n},s=a.H.state.enableWalletGuide,c=this.enableWallets,l=this.isSocialEnabled||this.authConnector,d=n?-1:void 0;return o.qy`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${(0,Ve.H)(r)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${l&&c&&s&&"get-started"===this.walletGuide?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(d)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){return Oe.y.hasFooter()?null:this.remoteFeatures?.reownBranding?o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){const t=e.filter(e=>e.type===Yt.o.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return J.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){const t=Ot.A.getConnectOrderMethod(this.features,this.connectors);return o.qy`${t.map((t,i)=>{switch(t){case"email":return o.qy`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return o.qy`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return o.qy`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const t=Ot.A.getConnectOrderMethod(this.features,this.connectors)[e+1];if(t)return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){const i=this.checkIsThereNextMethod(e),n="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&i&&!n?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const e="social"===i;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&i?o.qy`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const e="email"===i;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&i?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?o.qy`<w3m-email-login-widget tabIdx=${(0,r.J)(e)}></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?o.qy`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,r.J)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){const t=this.enableWallets,i=!1===this.features?.emailShowWallets,n=this.features?.collapseWallets,a=i||n;return t?(u.w.isTelegram()&&(u.w.isSafari()||u.w.isIos())&&ee.x.connectWalletConnect().catch(e=>({})),"explore"===this.walletGuide?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&a?o.qy`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,r.J)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:o.qy`<w3m-wallet-login-list tabIdx=${(0,r.J)(e)}></w3m-wallet-login-list>`):null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:o.qy`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".connect");e&&(e.scrollHeight>470?(e.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 100px,\n          black calc(100% - 100px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--connect-scroll--top-opacity",p.z8.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",p.z8.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0")))}onContinueWalletClick(){Q.I.push("ConnectWallets")}};_i.styles=zi,Fi([(0,Ht.w)()],_i.prototype,"connectors",void 0),Fi([(0,Ht.w)()],_i.prototype,"authConnector",void 0),Fi([(0,Ht.w)()],_i.prototype,"features",void 0),Fi([(0,Ht.w)()],_i.prototype,"remoteFeatures",void 0),Fi([(0,Ht.w)()],_i.prototype,"enableWallets",void 0),Fi([(0,Ht.w)()],_i.prototype,"noAdapters",void 0),Fi([(0,n.MZ)()],_i.prototype,"walletGuide",void 0),Fi([(0,Ht.w)()],_i.prototype,"checked",void 0),Fi([(0,Ht.w)()],_i.prototype,"isEmailEnabled",void 0),Fi([(0,Ht.w)()],_i.prototype,"isSocialEnabled",void 0),Fi([(0,Ht.w)()],_i.prototype,"isAuthEnabled",void 0),_i=Fi([(0,p.EM)("w3m-connect-view")],_i);var Zi=i(36875),Bi=i(35940),Hi=i(68996);i(60074),i(4522);const Vi=b.AH`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var Ji=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ki=class extends o.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return o.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ki.styles=[w.W5,w.fD,Vi],Ji([(0,n.MZ)({type:Boolean})],Ki.prototype,"disabled",void 0),Ji([(0,n.MZ)()],Ki.prototype,"label",void 0),Ji([(0,n.MZ)()],Ki.prototype,"buttonLabel",void 0),Ki=Ji([(0,m.E)("wui-cta-button")],Ki);const Gi=p.AH`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var Yi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Xi=class extends o.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:n,homepage:r}=this.wallet,a=u.w.isMobile(),s=u.w.isIos(),c=u.w.isAndroid(),l=[t,i,r,n].filter(Boolean).length>1,d=p.Zv.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!a?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>Q.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&r?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&c?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&u.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&u.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&u.w.openHref(this.wallet.homepage,"_blank")}};Xi.styles=[Gi],Yi([(0,n.MZ)({type:Object})],Xi.prototype,"wallet",void 0),Xi=Yi([(0,p.EM)("w3m-mobile-download-links")],Xi);const Qi=p.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var eo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class to extends o.WF{constructor(){super(),this.wallet=Q.I.state.data?.wallet,this.connector=Q.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=l.$.getConnectorImage(this.connector)??l.$.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=ee.x.state.wcUri,this.error=ee.x.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),ee.x.subscribeKey("wcError",e=>this.error=e)),(u.w.isTelegram()||u.w.isSafari())&&u.w.isIos()&&ee.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),ee.x.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),o.qy`
      <wui-flex
        data-error=${(0,r.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,r.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?o.qy`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?o.qy`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){ee.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const e=Hi.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(u.w.copyToClopboard(this.uri),Y.P.showSuccess("Link copied"))}catch{Y.P.showError("Failed to copy")}}}to.styles=Qi,eo([(0,n.wk)()],to.prototype,"isRetrying",void 0),eo([(0,n.wk)()],to.prototype,"uri",void 0),eo([(0,n.wk)()],to.prototype,"error",void 0),eo([(0,n.wk)()],to.prototype,"ready",void 0),eo([(0,n.wk)()],to.prototype,"showRetry",void 0),eo([(0,n.wk)()],to.prototype,"label",void 0),eo([(0,n.wk)()],to.prototype,"secondaryBtnLabel",void 0),eo([(0,n.wk)()],to.prototype,"secondaryLabel",void 0),eo([(0,n.wk)()],to.prototype,"isLoading",void 0),eo([(0,n.MZ)({type:Boolean})],to.prototype,"isMobile",void 0),eo([(0,n.MZ)()],to.prototype,"onRetry",void 0);let io=class extends to{constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=ee.x.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=a.H.state.remoteFeatures,this.currentActiveConnectorId=K.a.state.activeConnectorIds[this.connector?.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),D.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:Q.I.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(K.a.subscribeKey("activeConnectorIds",t=>{const i=t[e],o=this.remoteFeatures?.multiWallet;i!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&o?(Q.I.replace("ProfileWallets"),Y.P.showSuccess("New Wallet Added")):h.W.close())}),ee.x.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;this.connector.id===J.o.CONNECTOR_ID.COINBASE_SDK&&this.error||(await ee.x.connectExternal(this.connector,this.connector.chain),D.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown",view:Q.I.state.view,walletRank:this.wallet?.order}}))}}catch(e){e instanceof Bi.A&&e.originalName===Zi.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?D.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):D.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const t=e.get(this.connector.chain)??[],i=this.remoteFeatures?.multiWallet;if(0===t.length)Q.I.replace("Connect");else{const e=Ke.b.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),o=Ke.b.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);0===o.length?this.hasMultipleConnections&&i?(Q.I.replace("ProfileWallets"),Y.P.showSuccess("Wallet deleted")):h.W.close():!e.every(e=>o.some(t=>it.y.isLowerCaseMatch(e.address,t.address)))&&i&&Q.I.replace("ProfileWallets")}}}isAlreadyConnected(e){return Boolean(e)&&this.connectionsByNamespace.some(t=>it.y.isLowerCaseMatch(t.connectorId,e.id))}};io=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-connecting-external-view")],io);const oo=o.AH`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var no=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ro=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.activeConnector=K.a.state.activeConnector,this.unsubscribe.push(K.a.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,r.J)(l.$.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(e=>e.name?o.qy`
            <w3m-list-wallet
              imageSrc=${(0,r.J)(l.$.getChainImage(e.chain))}
              name=${J.o.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
              rdnsId=${e.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `:null)}onConnector(e){const t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain);t?"walletConnect"===t.id?u.w.isMobile()?Q.I.push("AllWallets"):Q.I.push("ConnectingWalletConnect"):Q.I.push("ConnectingExternal",{connector:t,wallet:this.activeConnector?.explorerWallet}):Y.P.showError("Failed to find connector")}};ro.styles=oo,no([(0,n.wk)()],ro.prototype,"activeConnector",void 0),ro=no([(0,p.EM)("w3m-connecting-multi-chain-view")],ro);var ao=i(74154),so=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let co=class extends o.WF{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return o.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};so([(0,n.MZ)({type:Array})],co.prototype,"platforms",void 0),so([(0,n.MZ)()],co.prototype,"onSelectPlatfrom",void 0),co=so([(0,p.EM)("w3m-connecting-header")],co);let lo=class extends to{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),D.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:Q.I.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=K.a.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await ee.x.connectExternal(t,t.chain),h.W.close(),D.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:Q.I.state.view,walletRank:this.wallet?.order}})}catch(e){e instanceof Bi.A&&e.originalName===Zi.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?D.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):D.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};lo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-connecting-wc-browser")],lo);let uo=class extends to{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),D.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:Q.I.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=u.w.formatNativeUrl(e,this.uri);ee.x.setWcLinking({name:t,href:o}),ee.x.setRecentWallet(this.wallet),u.w.openHref(i,"_blank")}catch{this.error=!0}}};uo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-connecting-wc-desktop")],uo);var ho=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let po=class extends to{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=a.H.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:n,href:r}=u.w.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=n,this.target=u.w.isIframe()?"_top":"_self",ee.x.setWcLinking({name:i,href:r}),ee.x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?u.w.openHref(this.redirectUniversalLink,this.target):u.w.openHref(this.redirectDeeplink,this.target)}catch(e){D.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=G.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(ee.x.subscribeKey("wcUri",()=>{this.onHandleURI()})),D.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:Q.I.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){ee.x.setWcError(!1),this.onConnect?.()}};ho([(0,n.wk)()],po.prototype,"redirectDeeplink",void 0),ho([(0,n.wk)()],po.prototype,"redirectUniversalLink",void 0),ho([(0,n.wk)()],po.prototype,"target",void 0),ho([(0,n.wk)()],po.prototype,"preferUniversalLinks",void 0),ho([(0,n.wk)()],po.prototype,"isLoading",void 0),po=ho([(0,p.EM)("w3m-connecting-wc-mobile")],po),i(16858);const wo=p.AH`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var go=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let mo=class extends to{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){this.basic||D.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:Q.I.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;ee.x.setWcLinking(void 0),ee.x.setRecentWallet(this.wallet);let i=this.uri;if(this.wallet?.mobile_link){const{redirect:e}=u.w.formatNativeUrl(this.wallet?.mobile_link,this.uri,null);i=e}return o.qy` <wui-qr-code
      size=${e}
      theme=${Hi.W.state.themeMode}
      uri=${i}
      imageSrc=${(0,r.J)(l.$.getWalletImage(this.wallet))}
      color=${(0,r.J)(Hi.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,r.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.qy`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};mo.styles=wo,go([(0,n.MZ)({type:Boolean})],mo.prototype,"basic",void 0),mo=go([(0,p.EM)("w3m-connecting-wc-qrcode")],mo);let bo=class extends o.WF{constructor(){if(super(),this.wallet=Q.I.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");D.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:Q.I.state.view}})}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,r.J)(l.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};bo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-connecting-wc-unsupported")],bo);var fo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let yo=class extends to{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=G.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(ee.x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),D.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:Q.I.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=u.w.formatUniversalUrl(e,this.uri);ee.x.setWcLinking({name:t,href:o}),ee.x.setRecentWallet(this.wallet),u.w.openHref(i,"_blank")}catch{this.error=!0}}};fo([(0,n.wk)()],yo.prototype,"isLoading",void 0),yo=fo([(0,p.EM)("w3m-connecting-wc-web")],yo);var vo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xo=class extends o.WF{constructor(){super(),this.wallet=Q.I.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(a.H.state.siwx),this.remoteFeatures=a.H.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!a.H.state.manualWCControl||e))try{const{wcPairingExpiry:t,status:i}=ee.x.state;if(e||a.H.state.enableEmbedded||u.w.isPairingExpired(t)||"connecting"===i){const e=ee.x.getConnections(s.W.state.activeChain),t=this.remoteFeatures?.multiWallet,i=e.length>0;await ee.x.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(i&&t?(Q.I.replace("ProfileWallets"),Y.P.showSuccess("New Wallet Added")):h.W.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!a.H.state.enableNetworkSwitch&&s.W.state.activeChain)return s.W.setActiveCaipNetwork(ao.R.getUnsupportedNetwork(`${s.W.state.activeChain}:${s.W.state.activeCaipNetwork?.id}`)),void s.W.showUnsupportedChainUI();e instanceof Bi.A&&e.originalName===Zi.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?D.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):D.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),ee.x.setWcError(!0),Y.P.showError(e.message??"Connection error"),ee.x.resetWcConnection(),Q.I.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:n}=this.wallet,r=o?.map(({injected_id:e})=>e).filter(Boolean),c=[...n?[n]:r??[]],l=!a.H.state.isUniversalProvider&&c.length,d=e,h=i,p=ee.x.checkInstalled(c),w=l&&p,g=t&&!u.w.isMobile();w&&!s.W.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(u.w.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),g&&this.platforms.push("desktop"),w||!l||s.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return o.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return o.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return o.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.qy`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return o.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?o.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};vo([(0,n.wk)()],xo.prototype,"platform",void 0),vo([(0,n.wk)()],xo.prototype,"platforms",void 0),vo([(0,n.wk)()],xo.prototype,"isSiwxEnabled",void 0),vo([(0,n.wk)()],xo.prototype,"remoteFeatures",void 0),vo([(0,n.MZ)({type:Boolean})],xo.prototype,"displayBranding",void 0),vo([(0,n.MZ)({type:Boolean})],xo.prototype,"basic",void 0),xo=vo([(0,p.EM)("w3m-connecting-wc-view")],xo);var ko=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $o=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.isMobile=u.w.isMobile(),this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:t}=Et.N.state,{customWallets:i}=a.H.state,n=ae.i.getRecentWallets(),r=e.length||t.length||i?.length||n.length;return o.qy`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${r?o.qy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return o.qy`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?o.qy` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};ko([(0,n.wk)()],$o.prototype,"isMobile",void 0),ko([(0,n.wk)()],$o.prototype,"remoteFeatures",void 0),$o=ko([(0,p.EM)("w3m-connecting-wc-basic-view")],$o);var Co=i(45839);const Eo=o.AH`
  .continue-button-container {
    width: 100%;
  }
`;var Io=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let So=class extends o.WF{constructor(){super(...arguments),this.loading=!1}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{u.w.openHref(Co.T.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.qy`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){Q.I.push("RegisterAccountName"),D.E.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:(0,X.lj)(s.W.state.activeChain)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};So.styles=Eo,Io([(0,n.wk)()],So.prototype,"loading",void 0),So=Io([(0,p.EM)("w3m-choose-account-name-view")],So);let Ro=class extends o.WF{constructor(){super(...arguments),this.wallet=Q.I.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return o.qy`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?o.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?o.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?o.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?o.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(D.E.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),u.w.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};Ro=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-downloads-view")],Ro);let Ao=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{u.w.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=Et.N.state,{customWallets:i}=a.H.state;return[...t,...i??[],...e].slice(0,4).map(e=>o.qy`
        <w3m-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${(0,r.J)(l.$.getWalletImage(e))}
          @click=${()=>{this.onWalletClick(e)}}
        ></w3m-list-wallet>
      `)}onWalletClick(e){D.E.sendEvent({type:"track",event:"GET_WALLET",properties:{name:e.name,walletRank:void 0,explorerId:e.id,type:"homepage"}}),u.w.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}};Ao=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-get-wallet-view")],Ao),i(88246);var Wo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let To=class extends o.WF{constructor(){super(...arguments),this.data=[]}render(){return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>o.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(e=>o.qy`<wui-visual size="sm" name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};Wo([(0,n.MZ)({type:Array})],To.prototype,"data",void 0),To=Wo([(0,p.EM)("w3m-help-widget")],To);const No=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Oo=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${No}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){D.E.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),Q.I.push("GetWallet")}};Oo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-what-is-a-wallet-view")],Oo);const Po=p.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Mo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let jo=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=Vt.o.state.isLegalCheckboxChecked,this.unsubscribe.push(Vt.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,i=a.H.state.features?.legalCheckbox,n=Boolean(e||t)&&Boolean(i),s=n&&!this.checked,c=s?-1:void 0;return o.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","3","3","3"]:"3"}
        gap="2"
        class=${(0,r.J)(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,r.J)(c)}></w3m-wallet-login-list>
      </wui-flex>
    `}};jo.styles=Po,Mo([(0,n.wk)()],jo.prototype,"checked",void 0),jo=Mo([(0,p.EM)("w3m-connect-wallets-view")],jo);const Do=b.AH`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let qo=class extends o.WF{render(){return o.qy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};qo.styles=[w.W5,Do],qo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,m.E)("wui-loading-hexagon")],qo);const Uo=o.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Lo=o.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,zo=b.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Fo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let _o=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:Lo,md:It,lg:Uo},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--apkt-spacing-10);\n      --local-height: var(--apkt-spacing-10);\n      --local-icon-size: var(--apkt-spacing-4);\n    "):this.style.cssText=`\n\n      --local-path: var(--apkt-path-network-${this.size});\n      --local-width:  var(--apkt-width-network-${this.size});\n      --local-height:  var(--apkt-height-network-${this.size});\n      --local-icon-size:  var(--apkt-spacing-${{sm:"4",md:"6",lg:"10"}[this.size]});\n    `,o.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.qy`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};_o.styles=[w.W5,zo],Fo([(0,n.MZ)()],_o.prototype,"size",void 0),Fo([(0,n.MZ)()],_o.prototype,"name",void 0),Fo([(0,n.MZ)({type:Object})],_o.prototype,"networkImagesBySize",void 0),Fo([(0,n.MZ)()],_o.prototype,"imageSrc",void 0),Fo([(0,n.MZ)({type:Boolean})],_o.prototype,"selected",void 0),Fo([(0,n.MZ)({type:Boolean})],_o.prototype,"round",void 0),_o=Fo([(0,m.E)("wui-network-image")],_o);const Zo=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Bo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ho=class extends o.WF{constructor(){super(),this.network=Q.I.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return o.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,r.J)(l.$.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:o.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=K.a.getConnectorId(s.W.state.activeChain);return K.a.getAuthConnector()&&e===J.o.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=K.a.getConnectorId(s.W.state.activeChain);return K.a.getAuthConnector()&&e===J.o.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,s.W.state.activeChain!==this.network?.chainNamespace&&s.W.setIsSwitchingNamespace(!0),this.network&&await s.W.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};Ho.styles=Zo,Bo([(0,n.wk)()],Ho.prototype,"showRetry",void 0),Bo([(0,n.wk)()],Ho.prototype,"error",void 0),Ho=Bo([(0,p.EM)("w3m-network-switch-view")],Ho);var Vo=i(58751);i(15584);const Jo=b.AH`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Ko=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Go=class extends o.WF{constructor(){super(...arguments),this.imageSrc="ethereum",this.name="Ethereum",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};Go.styles=[w.W5,w.fD,Jo],Ko([(0,n.MZ)()],Go.prototype,"imageSrc",void 0),Ko([(0,n.MZ)()],Go.prototype,"name",void 0),Ko([(0,n.MZ)()],Go.prototype,"tabIdx",void 0),Ko([(0,n.MZ)({type:Boolean})],Go.prototype,"disabled",void 0),Go=Ko([(0,m.E)("wui-list-network")],Go);const Yo=o.AH`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Xo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Qo=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.network=s.W.state.activeCaipNetwork,this.requestedCaipNetworks=s.W.getCaipNetworks(),this.search="",this.onDebouncedSearch=u.w.debounce(e=>{this.search=e},100),this.unsubscribe.push(c.j.subscribeNetworkImages(()=>this.requestUpdate()),s.W.subscribeKey("activeCaipNetwork",e=>this.network=e),s.W.subscribe(()=>{this.requestedCaipNetworks=s.W.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return o.qy`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){const e=s.W.getAllApprovedCaipNetworkIds(),t=u.w.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=t?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=t,this.filteredNetworks?.map(e=>o.qy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,r.J)(l.$.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(e){const t=e.chainNamespace,i=d.U.getCaipAddress(t),o=s.W.getAllApprovedCaipNetworkIds(),n=!1!==s.W.getNetworkProp("supportsAllNetworks",t),r=K.a.getConnectorId(t),a=K.a.getAuthConnector(),c=r===J.o.CONNECTOR_ID.AUTH&&a;return!(!i||n||c||o?.includes(e.caipNetworkId))}onSwitchNetwork(e){Vo.L.onSwitchNetwork({network:e})}};Qo.styles=Yo,Xo([(0,n.wk)()],Qo.prototype,"network",void 0),Xo([(0,n.wk)()],Qo.prototype,"requestedCaipNetworks",void 0),Xo([(0,n.wk)()],Qo.prototype,"filteredNetworks",void 0),Xo([(0,n.wk)()],Qo.prototype,"search",void 0),Qo=Xo([(0,p.EM)("w3m-networks-view")],Qo);const en=p.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var tn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const on={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let nn=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=Q.I.state.data?.switchToChain,this.caipNetwork=Q.I.state.data?.network,this.activeChain=s.W.state.activeChain}firstUpdated(){this.unsubscribe.push(s.W.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?J.o.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t=J.o.CHAIN_NAME_MAP[this.switchToChain];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${(0,r.J)(on[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${t}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${t}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(s.W.setIsSwitchingNamespace(!0),K.a.setFilterByNamespace(this.switchToChain),this.caipNetwork?await s.W.switchActiveNetwork(this.caipNetwork):s.W.setActiveNamespace(this.switchToChain),Q.I.reset("Connect"))}};nn.styles=en,tn([(0,n.MZ)()],nn.prototype,"activeChain",void 0),nn=tn([(0,p.EM)("w3m-switch-active-chain-view")],nn);const rn=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let an=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${rn}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{u.w.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};an=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-what-is-a-network-view")],an);const sn=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var cn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ln=class extends o.WF{constructor(){super(),this.swapUnsupportedChain=Q.I.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(c.j.subscribeNetworkImages(()=>this.requestUpdate()),a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?o.qy`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:o.qy`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=s.W.getAllRequestedCaipNetworks(),t=s.W.getAllApprovedCaipNetworkIds(),i=u.w.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?i.filter(e=>G.oU.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):i).map(e=>o.qy`
        <wui-list-network
          imageSrc=${(0,r.J)(l.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;const e=s.W.state.activeChain,t=ee.x.getConnections(e).length>0,i=e&&K.a.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await ee.x.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(Q.I.push("ProfileWallets"),Y.P.showSuccess("Wallet deleted"))}catch{D.E.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),Y.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){const t=d.U.state.caipAddress,i=s.W.getAllApprovedCaipNetworkIds(),o=(s.W.getNetworkProp("supportsAllNetworks",e.chainNamespace),Q.I.state.data);t?i?.includes(e.caipNetworkId)?await s.W.switchActiveNetwork(e):Q.I.push("SwitchNetwork",{...o,network:e}):t||(s.W.setActiveCaipNetwork(e),Q.I.push("Connect"))}};ln.styles=sn,cn([(0,n.wk)()],ln.prototype,"disconnecting",void 0),cn([(0,n.wk)()],ln.prototype,"remoteFeatures",void 0),ln=cn([(0,p.EM)("w3m-unsupported-chain-view")],ln);const dn=b.AH`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var un=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let hn=class extends o.WF{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return o.qy`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};hn.styles=[w.W5,w.fD,dn],un([(0,n.MZ)()],hn.prototype,"icon",void 0),un([(0,n.MZ)()],hn.prototype,"text",void 0),un([(0,n.MZ)()],hn.prototype,"type",void 0),hn=un([(0,m.E)("wui-banner")],hn);const pn=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let wn=class extends o.WF{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=s.W.getAllRequestedCaipNetworks(),t=s.W.getAllApprovedCaipNetworkIds(),i=s.W.state.activeCaipNetwork,n=s.W.checkIfSmartAccountEnabled();let a=u.w.sortRequestedNetworks(t,e);if(n&&(0,X.lj)(i?.chainNamespace)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;a=[i]}return a.filter(e=>e.chainNamespace===i?.chainNamespace).map(e=>o.qy`
        <wui-list-network
          imageSrc=${(0,r.J)(l.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};wn.styles=pn,wn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-wallet-compatible-networks-view")],wn);var gn=i(90346);const mn=b.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var bn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let fn=class extends o.WF{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",o.qy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:o.qy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};fn.styles=[w.W5,mn],bn([(0,n.MZ)()],fn.prototype,"imageSrc",void 0),bn([(0,n.MZ)()],fn.prototype,"alt",void 0),bn([(0,n.MZ)({type:Boolean})],fn.prototype,"borderRadiusFull",void 0),fn=bn([(0,m.E)("wui-visual-thumbnail")],fn);const yn=p.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let vn=class extends o.WF{constructor(){super(...arguments),this.dappImageUrl=a.H.state.metadata?.icons,this.walletImageUrl=d.U.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return o.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};vn.styles=yn,vn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-siwx-sign-message-thumbnails")],vn);var xn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let kn=class extends o.WF{constructor(){super(...arguments),this.dappName=a.H.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await gn.U.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required"))return Y.P.showError({message:"Something went wrong. We need to verify your account again."}),void Q.I.replace("DataCapture");throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await gn.U.cancelSignMessage().finally(()=>this.isCancelling=!1)}};xn([(0,n.wk)()],kn.prototype,"isCancelling",void 0),xn([(0,n.wk)()],kn.prototype,"isSigning",void 0),kn=xn([(0,p.EM)("w3m-siwx-sign-message-view")],kn)},16858:(e,t,i)=>{var o=i(12618),n=i(25707),r=(i(91226),i(53576),i(34766),i(87583));function a(e,t,i){return e!==t&&(e-t<0?t-e:e-t)<=i+.1}const s={generate({uri:e,size:t,logoSize:i,padding:n=8,dotColor:s="var(--apkt-colors-black)"}){const c=[],l=function(e){const t=Array.prototype.slice.call(r.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(t.length);return t.reduce((e,t,o)=>(o%i===0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e),d=(t-2*n)/l.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:e,y:t})=>{const i=(l.length-7)*d*e+n,r=(l.length-7)*d*t+n,a=.45;for(let e=0;e<u.length;e+=1){const t=d*(7-2*e);c.push(o.JW`
            <rect
              fill=${2===e?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===e?t-10:t}
              rx= ${0===e?(t-10)*a:t*a}
              ry= ${0===e?(t-10)*a:t*a}
              stroke=${s}
              stroke-width=${0===e?10:0}
              height=${0===e?t-10:t}
              x= ${0===e?r+d*e+5:r+d*e}
              y= ${0===e?i+d*e+5:i+d*e}
            />
          `)}});const h=Math.floor((i+25)/d),p=l.length/2-h/2,w=l.length/2+h/2-1,g=[];l.forEach((e,t)=>{e.forEach((e,i)=>{if(l[t][i]&&!(t<7&&i<7||t>l.length-8&&i<7||t<7&&i>l.length-8||t>p&&t<w&&i>p&&i<w)){const e=t*d+d/2+n,o=i*d+d/2+n;g.push([e,o])}})});const m={};return g.forEach(([e,t])=>{m[e]?m[e]?.push(t):m[e]=[t]}),Object.entries(m).map(([e,t])=>{const i=t.filter(e=>t.every(t=>!a(e,t,d)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{c.push(o.JW`<circle cx=${e} cy=${t} fill=${s} r=${d/2.5} />`)})}),Object.entries(m).filter(([e,t])=>t.length>1).map(([e,t])=>{const i=t.filter(e=>t.some(t=>a(e,t,d)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);const i=[];for(const e of t){const t=i.find(t=>t.some(t=>a(e,t,d)));t?t.push(e):i.push([e])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{c.push(o.JW`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${s}
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
`;var u=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let h=class extends o.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,o.qy`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return o.JW`
      <svg height=${this.size} width=${this.size}>
        ${s.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?o.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:o.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};h.styles=[c.W5,d],u([(0,n.MZ)()],h.prototype,"uri",void 0),u([(0,n.MZ)({type:Number})],h.prototype,"size",void 0),u([(0,n.MZ)()],h.prototype,"theme",void 0),u([(0,n.MZ)()],h.prototype,"imageSrc",void 0),u([(0,n.MZ)()],h.prototype,"alt",void 0),u([(0,n.MZ)({type:Boolean})],h.prototype,"arenaClear",void 0),u([(0,n.MZ)({type:Boolean})],h.prototype,"farcaster",void 0),h=u([(0,l.E)("wui-qr-code")],h)},30943:(e,t,i)=>{var o=i(12618),n=i(25707),r=(i(65548),i(85886)),a=i(15181);const s=i(10982).AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let l=class extends o.WF{constructor(){super(...arguments),this.text=""}render(){return o.qy`${this.template()}`}template(){return this.text?o.qy`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};l.styles=[r.W5,s],c([(0,n.MZ)()],l.prototype,"text",void 0),l=c([(0,a.E)("wui-separator")],l)},31917:(e,t,i)=>{var o=i(12618),n=i(25707),r=i(66580),a=(i(91226),i(53576),i(65548),i(34766),i(85886)),s=i(15181);const c=i(10982).AH`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return o.qy`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${this.tokenName}</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${r.S.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${r.S.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?o.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:o.qy`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};d.styles=[a.W5,a.fD,c],l([(0,n.MZ)()],d.prototype,"tokenName",void 0),l([(0,n.MZ)()],d.prototype,"tokenImageUrl",void 0),l([(0,n.MZ)({type:Number})],d.prototype,"tokenValue",void 0),l([(0,n.MZ)()],d.prototype,"tokenAmount",void 0),l([(0,n.MZ)()],d.prototype,"tokenCurrency",void 0),l([(0,n.MZ)({type:Boolean})],d.prototype,"clickable",void 0),d=l([(0,s.E)("wui-list-token")],d)},32321:(e,t,i)=>{i(63274)},41052:(e,t,i)=>{var o=i(12618),n=i(25707),r=i(60031),a=(i(91226),i(65548),i(85886)),s=i(15181);i(82673);const c=o.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.disabled=!1}render(){return o.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,r.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?o.qy`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};d.styles=[a.W5,c],l([(0,n.MZ)()],d.prototype,"errorMessage",void 0),l([(0,n.MZ)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,n.MZ)()],d.prototype,"value",void 0),l([(0,n.MZ)()],d.prototype,"tabIdx",void 0),d=l([(0,s.E)("wui-email-input")],d)},41520:(e,t,i)=>{var o=i(12618),n=i(25707),r=(i(91226),i(85886)),a=i(15181);const s=i(10982).AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let l=class extends o.WF{constructor(){super(...arguments),this.logo="google"}render(){return o.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};l.styles=[r.W5,s],c([(0,n.MZ)()],l.prototype,"logo",void 0),l=c([(0,a.E)("wui-logo")],l)},45839:(e,t,i)=>{i.d(t,{T:()=>o});const o={URLS:{FAQ:"https://walletconnect.com/faq"}}},47098:(e,t,i)=>{i(81611)},68239:(e,t,i)=>{var o=i(12618),n=i(25707),r=i(60031),a=(i(65548),i(85886)),s=i(15181);i(41520);const c=i(10982).AH`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};d.styles=[a.W5,a.fD,c],l([(0,n.MZ)()],d.prototype,"logo",void 0),l([(0,n.MZ)()],d.prototype,"name",void 0),l([(0,n.MZ)()],d.prototype,"tabIdx",void 0),l([(0,n.MZ)({type:Boolean})],d.prototype,"disabled",void 0),d=l([(0,s.E)("wui-list-social")],d)},71801:(e,t,i)=>{i.d(t,{Up:()=>h});var o=i(24376),n=i(63450),r=i(6056),a=i(36010),s=i(90184),c=i(78508),l=i(21871),d=i(26742),u=i(27508);async function h(e){n.U.setSocialProvider(e,r.W.state.activeChain),s.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await async function(){c.I.push("ConnectingFarcaster");const e=a.a.getAuthConnector();if(e&&!n.U.state.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();n.U.setFarcasterUrl(t,r.W.state.activeChain)}catch(e){c.I.goBack(),l.P.showError(e)}}():await async function(e){c.I.push("ConnectingSocial");const t=a.a.getAuthConnector();let i=null;try{const a=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(d.w.isTelegram()||(i=function(){try{return d.w.returnOpenHref(`${o.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),i)n.U.setSocialWindow(i,r.W.state.activeChain);else if(!d.w.isTelegram())throw new Error("Could not create social popup");const{uri:s}=await t.provider.getSocialRedirectUri({provider:e});if(!s)throw i?.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=s),d.w.isTelegram()){u.i.setTelegramSocialProvider(e);const t=d.w.formatTelegramSocialLoginUrl(s);d.w.openHref(t,"_top")}clearTimeout(a)}}catch(e){i?.close(),l.P.showError(e?.message)}}(e)}},81611:(e,t,i)=>{var o=i(12618),n=i(25707),r=(i(91226),i(85886)),a=i(15181);const s=i(10982).AH`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let l=class extends o.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return o.qy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};l.styles=[r.W5,r.fD,s],c([(0,n.MZ)()],l.prototype,"size",void 0),c([(0,n.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,n.MZ)()],l.prototype,"icon",void 0),c([(0,n.MZ)()],l.prototype,"iconColor",void 0),c([(0,n.MZ)()],l.prototype,"variant",void 0),l=c([(0,a.E)("wui-icon-link")],l)},82556:(e,t,i)=>{var o=i(12618),n=i(25707),r=i(99598),a=i(78508),s=i(96396),c=i(81729);const l=o.AH`
  :host {
    width: 100%;
    display: block;
  }
`;var d=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=r.I.state.open,this.unsubscribe.push(a.I.subscribeKey("view",()=>{r.I.hide()}),s.W.subscribeKey("open",e=>{e||r.I.hide()}),r.I.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),r.I.hide()}render(){return o.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o.qy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),i={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const o=t.getBoundingClientRect();i.left=e.left-(window.innerWidth-o.width)/2,i.top=e.top-(window.innerHeight-o.height)/2}r.I.showTooltip({message:this.text,triggerRect:i,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||r.I.hide()}};u.styles=[l],d([(0,n.MZ)()],u.prototype,"text",void 0),d([(0,n.wk)()],u.prototype,"open",void 0),u=d([(0,c.EM)("w3m-tooltip-trigger")],u)},94322:(e,t,i)=>{var o=i(12618),n=i(25707),r=(i(53576),i(85886)),a=i(75249),s=i(15181);const c=i(10982).AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){const e={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`\n    --local-width: var(--apkt-spacing-${e[this.size??"xl"]});\n    --local-height: var(--apkt-spacing-${e[this.size??"xl"]});\n    `,o.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=a.Z.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset.variant="default",null}};d.styles=[r.W5,c],l([(0,n.MZ)()],d.prototype,"imageSrc",void 0),l([(0,n.MZ)()],d.prototype,"alt",void 0),l([(0,n.MZ)()],d.prototype,"address",void 0),l([(0,n.MZ)()],d.prototype,"size",void 0),d=l([(0,s.E)("wui-avatar")],d)}}]);
//# sourceMappingURL=122.bundle.js.map