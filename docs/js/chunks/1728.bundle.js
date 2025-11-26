"use strict";(self.webpackChunkonchain_dapp_example=self.webpackChunkonchain_dapp_example||[]).push([[1728],{21728:(e,t,n)=>{n.r(t),n.d(t,{W3mDepositFromExchangeSelectAssetView:()=>S,W3mDepositFromExchangeView:()=>P});var i=n(12618),o=n(25707),a=n(6056),r=n(37740),s=n(78508),c=n(21871),u=n(63450),d=n(31211),l=n(81729),p=(n(91226),n(53576),n(65548),n(85886)),h=n(15181);const m=n(10982).AH`
  button {
    border: none;
    border-radius: ${({borderRadius:e})=>e[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow;
  }

  /* -- Variants --------------------------------------------------------------- */
  button[data-type='accent'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-type='neutral'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  /* -- Sizes --------------------------------------------------------------- */
  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='sm'] > wui-image,
  button[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image,
  button[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-image,
  button[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-type='accent']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.core.foregroundAccent060};
    }

    button[data-type='neutral']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  button[data-type='accent']:not(:disabled):focus-visible,
  button[data-type='accent']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-type='neutral']:not(:disabled):focus-visible,
  button[data-type='neutral']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var g=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};const y={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};let w=class extends i.WF{constructor(){super(...arguments),this.type="accent",this.size="md",this.imageSrc="",this.disabled=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.text=""}render(){return i.qy`
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc?i.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        ${this.leftIcon?i.qy`<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`:null}
        <wui-text variant=${y[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon?i.qy`<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};w.styles=[p.W5,p.fD,m],g([(0,o.MZ)()],w.prototype,"type",void 0),g([(0,o.MZ)()],w.prototype,"size",void 0),g([(0,o.MZ)()],w.prototype,"imageSrc",void 0),g([(0,o.MZ)({type:Boolean})],w.prototype,"disabled",void 0),g([(0,o.MZ)()],w.prototype,"leftIcon",void 0),g([(0,o.MZ)()],w.prototype,"rightIcon",void 0),g([(0,o.MZ)()],w.prototype,"text",void 0),w=g([(0,h.E)("wui-chip-button")],w),n(6387),n(47098),n(99575),n(31260),n(32321),n(52835);var f=n(60031),b=(n(93656),n(33189),n(60074),function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r});let x=class extends i.WF{constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return i.qy`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${(0,f.J)(this.maxDecimals)}
          .maxIntegers=${(0,f.J)(this.maxIntegers)}
          .value=${this.amount?String(this.amount):""}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};b([(0,o.MZ)({type:Number})],x.prototype,"amount",void 0),b([(0,o.MZ)({type:Number})],x.prototype,"maxDecimals",void 0),b([(0,o.MZ)({type:Number})],x.prototype,"maxIntegers",void 0),x=b([(0,l.EM)("w3m-fund-input")],x);const v=l.AH`
  .amount-input-container {
    border-radius: ${({borderRadius:e})=>e[6]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
  }

  .container {
    border-radius: 30px;
  }
`;var k=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};const $=[10,50,100];let P=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.network=a.W.state.activeCaipNetwork,this.exchanges=r.g.state.exchanges,this.isLoading=r.g.state.isLoading,this.amount=r.g.state.amount,this.tokenAmount=r.g.state.tokenAmount,this.priceLoading=r.g.state.priceLoading,this.isPaymentInProgress=r.g.state.isPaymentInProgress,this.currentPayment=r.g.state.currentPayment,this.paymentId=r.g.state.paymentId,this.paymentAsset=r.g.state.paymentAsset,this.unsubscribe.push(a.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.setDefaultPaymentAsset()}),r.g.subscribe(e=>{this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset,e.isPaymentInProgress&&e.currentPayment?.exchangeId&&e.currentPayment?.sessionId&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),r.g.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),r.g.setAmount($[0]),await r.g.fetchExchanges()}render(){return i.qy`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>i.qy`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(e=>i.qy`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`):i.qy`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return i.qy`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){return i.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        class="amount-input-container"
      >
        <wui-flex
          justifyContent="space-between"
          alignItems="center"
          .margin=${["0","0","6","0"]}
        >
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>
          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${this.paymentAsset?.metadata.symbol||""}
            imageSrc=${this.paymentAsset?.metadata.iconUrl||""}
            @click=${()=>s.I.push("PayWithExchangeSelectAsset")}
            size="lg"
          >
          </wui-token-button>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          .margin=${["0","0","4","0"]}
        >
          <w3m-fund-input
            @inputChange=${this.onAmountChange.bind(this)}
            .amount=${this.amount}
            .maxDecimals=${6}
            .maxIntegers=${10}
          >
          </w3m-fund-input>
          ${this.tokenAmountTemplate()}
        </wui-flex>
        <wui-flex justifyContent="center" gap="2">
          ${$.map(e=>i.qy`<wui-chip-button
                @click=${()=>r.g.setAmount(e)}
                type="neutral"
                size="lg"
                text=${`$${e}`}
              ></wui-chip-button>`)}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?i.qy`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:i.qy`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${this.paymentAsset?.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){this.amount?await r.g.handlePayWithExchange(e.id):c.P.showError("Please enter an amount")}handlePaymentInProgress(){const e=a.W.state.activeChain;this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(r.g.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(t=>{"SUCCESS"===t.status?(c.P.showSuccess("Deposit completed"),e&&(u.U.fetchTokenBalance(),d.x.updateBalance(e))):"FAILED"===t.status&&c.P.showError("Deposit failed")}),c.P.showLoading("Deposit in progress..."),s.I.replace("Account"))}onAmountChange({detail:e}){r.g.setAmount(e?Number(e):null)}async getPaymentAssets(){this.network&&await r.g.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){const e=await r.g.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&r.g.setPaymentAsset(e[0])}}};P.styles=v,k([(0,o.wk)()],P.prototype,"network",void 0),k([(0,o.wk)()],P.prototype,"exchanges",void 0),k([(0,o.wk)()],P.prototype,"isLoading",void 0),k([(0,o.wk)()],P.prototype,"amount",void 0),k([(0,o.wk)()],P.prototype,"tokenAmount",void 0),k([(0,o.wk)()],P.prototype,"priceLoading",void 0),k([(0,o.wk)()],P.prototype,"isPaymentInProgress",void 0),k([(0,o.wk)()],P.prototype,"currentPayment",void 0),k([(0,o.wk)()],P.prototype,"paymentId",void 0),k([(0,o.wk)()],P.prototype,"paymentAsset",void 0),P=k([(0,l.EM)("w3m-deposit-from-exchange-view")],P);var I=n(26742);n(20645),n(91885),n(15584),n(31917),n(30943);const A=l.AH`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }
`;var E=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};let S=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.assets=r.g.state.assets,this.search="",this.onDebouncedSearch=I.w.debounce(e=>{this.search=e}),this.unsubscribe.push(r.g.subscribe(e=>{this.assets=e.assets}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.qy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return i.qy`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.assets.filter(e=>e.metadata.name.toLowerCase().includes(this.search.toLowerCase())),t=e.length>0;return i.qy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${t?e.map(e=>i.qy`<wui-list-item
                    .imageSrc=${e.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,e)}
                  >
                    <wui-text variant="md-medium" color="primary">${e.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${e.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):i.qy`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){s.I.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){r.g.setPaymentAsset(e),s.I.goBack()}};S.styles=A,E([(0,o.wk)()],S.prototype,"assets",void 0),E([(0,o.wk)()],S.prototype,"search",void 0),S=E([(0,l.EM)("w3m-deposit-from-exchange-select-asset-view")],S)},30943:(e,t,n)=>{var i=n(12618),o=n(25707),a=(n(65548),n(85886)),r=n(15181);const s=n(10982).AH`
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
`;var c=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};let u=class extends i.WF{constructor(){super(...arguments),this.text=""}render(){return i.qy`${this.template()}`}template(){return this.text?i.qy`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};u.styles=[a.W5,s],c([(0,o.MZ)()],u.prototype,"text",void 0),u=c([(0,r.E)("wui-separator")],u)},31917:(e,t,n)=>{var i=n(12618),o=n(25707),a=n(66580),r=(n(91226),n(53576),n(65548),n(34766),n(85886)),s=n(15181);const c=n(10982).AH`
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
`;var u=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};let d=class extends i.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return i.qy`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${this.tokenName}</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${a.S.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
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
            ${a.S.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?i.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:i.qy`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};d.styles=[r.W5,r.fD,c],u([(0,o.MZ)()],d.prototype,"tokenName",void 0),u([(0,o.MZ)()],d.prototype,"tokenImageUrl",void 0),u([(0,o.MZ)({type:Number})],d.prototype,"tokenValue",void 0),u([(0,o.MZ)()],d.prototype,"tokenAmount",void 0),u([(0,o.MZ)()],d.prototype,"tokenCurrency",void 0),u([(0,o.MZ)({type:Boolean})],d.prototype,"clickable",void 0),d=u([(0,s.E)("wui-list-token")],d)},32321:(e,t,n)=>{n(63274)},33189:(e,t,n)=>{var i=n(12618),o=n(25707),a=n(7610),r=n(10982),s=n(85886),c=n(75249),u=n(15181);const d=r.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    height: auto;
    box-sizing: border-box;
    color: ${({tokens:e})=>e.theme.textPrimary};
    font-feature-settings: 'case' on;
    font-size: var(--local-font-size);
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    line-height: 130%;
    letter-spacing: -1.28px;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    font-family: ${({fontFamily:e})=>e.mono};
  }

  :host([data-width-variant='auto']) input {
    width: 100%;
  }

  :host([data-width-variant='fit']) input {
    width: 1ch;
  }

  .wui-input-amount-fit-mirror {
    position: absolute;
    visibility: hidden;
    white-space: pre;
    font-size: var(--local-font-size);
    line-height: 130%;
    letter-spacing: -1.28px;
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-input-amount-fit-width {
    display: inline-block;
    position: relative;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }
`;var l=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};let p=class extends i.WF{constructor(){super(...arguments),this.inputElementRef=(0,a._)(),this.disabled=!1,this.value="",this.placeholder="0",this.widthVariant="auto",this.maxDecimals=void 0,this.maxIntegers=void 0,this.fontSize="h4"}firstUpdated(){this.resizeInput()}updated(){this.style.setProperty("--local-font-size",r.f.textSize[this.fontSize]),this.resizeInput()}render(){return this.dataset.widthVariant=this.widthVariant,this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),"auto"===this.widthVariant?this.inputTemplate():i.qy`
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `}inputTemplate(){return i.qy`<input
      ${(0,a.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`}dispatchInputChangeEvent(){this.inputElementRef.value&&(this.inputElementRef.value.value=c.Z.maskInput({value:this.inputElementRef.value.value,decimals:this.maxDecimals,integers:this.maxIntegers}),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value.value,bubbles:!0,composed:!0})),this.resizeInput())}resizeInput(){if("fit"===this.widthVariant){const e=this.inputElementRef.value;if(e){const t=e.previousElementSibling;t&&(t.textContent=e.value||"0",e.style.width=`${t.offsetWidth}px`)}}}};p.styles=[s.W5,s.fD,d],l([(0,o.MZ)({type:Boolean})],p.prototype,"disabled",void 0),l([(0,o.MZ)({type:String})],p.prototype,"value",void 0),l([(0,o.MZ)({type:String})],p.prototype,"placeholder",void 0),l([(0,o.MZ)({type:String})],p.prototype,"widthVariant",void 0),l([(0,o.MZ)({type:Number})],p.prototype,"maxDecimals",void 0),l([(0,o.MZ)({type:Number})],p.prototype,"maxIntegers",void 0),l([(0,o.MZ)({type:String})],p.prototype,"fontSize",void 0),p=l([(0,u.E)("wui-input-amount")],p)},37740:(e,t,n)=>{n.d(t,{g:()=>f});var i=n(68126),o=n(4707),a=n(66580),r=n(74496),s=n(62944),c=n(26742),u=n(1440),d=n(63450),l=n(75595),p=n(6056),h=n(90184),m=n(42733),g=n(21871);const y={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},w=(0,i.BX)(y),f={state:w,subscribe:e=>(0,i.B1)(w,()=>e(w)),subscribeKey:(e,t)=>(0,o.u$)(w,e,t),resetState(){Object.assign(w,{...y})},async getAssetsForNetwork(e){const t=(0,u.nj)(e),n=await f.getAssetsImageAndPrice(t),i=t.map(e=>{const t="native"===e.asset?(0,r.K1)():`${e.network}:${e.asset}`,i=n.find(e=>e.fungibles?.[0]?.address?.toLowerCase()===t.toLowerCase());return{...e,price:i?.fungibles?.[0]?.price||1,metadata:{...e.metadata,iconUrl:i?.fungibles?.[0]?.iconUrl}}});return w.assets=i,i},async getAssetsImageAndPrice(e){const t=e.map(e=>"native"===e.asset?(0,r.K1)():`${e.network}:${e.asset}`);return await Promise.all(t.map(e=>l.T.fetchTokenPrice({addresses:[e]})))},getTokenAmount(){if(!w?.paymentAsset?.price)throw new Error("Cannot get token price");const e=a.S.bigNumber(w.amount??0).round(8),t=a.S.bigNumber(w.paymentAsset.price).round(8);return e.div(t).round(8).toNumber()},setAmount(e){w.amount=e,w.paymentAsset?.price&&(w.tokenAmount=f.getTokenAmount())},setPaymentAsset(e){w.paymentAsset=e},isPayWithExchangeEnabled:()=>m.H.state.remoteFeatures?.payWithExchange||m.H.state.remoteFeatures?.payments||m.H.state.features?.pay,isPayWithExchangeSupported:()=>f.isPayWithExchangeEnabled()&&p.W.state.activeCaipNetwork&&s.oU.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(p.W.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{const e=f.isPayWithExchangeSupported();if(!w.paymentAsset||!e)return w.exchanges=[],void(w.isLoading=!1);w.isLoading=!0;const t=await(0,u.ro)({page:0,asset:(0,u.lZ)(w.paymentAsset.network,w.paymentAsset.asset),amount:w.amount?.toString()??"0"});w.exchanges=t.exchanges.slice(0,2)}catch(e){throw g.P.showError("Unable to get exchanges"),new Error("Unable to get exchanges")}finally{w.isLoading=!1}},async getPayUrl(e,t){try{const n=Number(t.amount),i=await(0,u.cz)({exchangeId:e,asset:(0,u.lZ)(t.network,t.asset),amount:n.toString(),recipient:`${t.network}:${t.recipient}`});return h.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),i}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new Error("Asset not supported");throw new Error(e.message)}},async handlePayWithExchange(e){try{if(!d.U.state.address)throw new Error("No account connected");if(!w.paymentAsset)throw new Error("No payment asset selected");const t=c.w.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!t)throw new Error("Could not create popup window");w.isPaymentInProgress=!0,w.paymentId=crypto.randomUUID(),w.currentPayment={type:"exchange",exchangeId:e};const{network:n,asset:i}=w.paymentAsset,o={network:n,asset:i,amount:w.tokenAmount,recipient:d.U.state.address},a=await f.getPayUrl(e,o);if(!a){try{t.close()}catch(e){console.error("Unable to close popup window",e)}throw new Error("Unable to initiate payment")}w.currentPayment.sessionId=a.sessionId,w.currentPayment.status="IN_PROGRESS",w.currentPayment.exchangeId=e,t.location.href=a.url}catch(e){w.error="Unable to initiate payment",g.P.showError(w.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:n,retries:i=20}){const o=await f.getBuyStatus(e,t,n);if("SUCCESS"===o.status||"FAILED"===o.status)return o;if(0===i)throw new Error("Unable to get deposit status");return await new Promise(e=>{setTimeout(e,5e3)}),f.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:n,retries:i-1})},async getBuyStatus(e,t,n){try{if(!w.currentPayment)throw new Error("No current payment");const i=await(0,u.V1)({sessionId:t,exchangeId:e});return w.currentPayment.status=i.status,"SUCCESS"!==i.status&&"FAILED"!==i.status||(w.currentPayment.result=i.txHash,w.isPaymentInProgress=!1,h.E.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?c.w.parseError(w.error):void 0,source:"fund-from-exchange",paymentId:n,configuration:{network:w.paymentAsset?.network||"",asset:w.paymentAsset?.asset||"",recipient:d.U.state.address||"",amount:w.amount??0},currentPayment:{type:"exchange",exchangeId:w.currentPayment?.exchangeId,sessionId:w.currentPayment?.sessionId,result:i.txHash}}})),i}catch(e){return{status:"UNKNOWN",txHash:""}}},reset(){w.currentPayment=void 0,w.isPaymentInProgress=!1,w.paymentId="",w.paymentAsset=null,w.amount=0,w.tokenAmount=0,w.priceLoading=!1,w.error=null,w.exchanges=[],w.isLoading=!1}}},47098:(e,t,n)=>{n(81611)},63274:(e,t,n)=>{var i=n(12618),o=n(25707),a=n(15181);const r=n(10982).AH`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var s=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};let c=class extends i.WF{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n    `,this.dataset.rounded=this.rounded?"true":"false",i.qy`<slot></slot>`}};c.styles=[r],s([(0,o.MZ)()],c.prototype,"width",void 0),s([(0,o.MZ)()],c.prototype,"height",void 0),s([(0,o.MZ)()],c.prototype,"variant",void 0),s([(0,o.MZ)({type:Boolean})],c.prototype,"rounded",void 0),c=s([(0,a.E)("wui-shimmer")],c)},81611:(e,t,n)=>{var i=n(12618),o=n(25707),a=(n(91226),n(85886)),r=n(15181);const s=n(10982).AH`
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
`;var c=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};let u=class extends i.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return i.qy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};u.styles=[a.W5,a.fD,s],c([(0,o.MZ)()],u.prototype,"size",void 0),c([(0,o.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,o.MZ)()],u.prototype,"icon",void 0),c([(0,o.MZ)()],u.prototype,"iconColor",void 0),c([(0,o.MZ)()],u.prototype,"variant",void 0),u=c([(0,r.E)("wui-icon-link")],u)},99575:(e,t,n)=>{n(53576)}}]);
//# sourceMappingURL=1728.bundle.js.map