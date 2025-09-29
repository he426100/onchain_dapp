"use strict";(self.webpackChunkonchain_dapp_example=self.webpackChunkonchain_dapp_example||[]).push([[1728],{20645:(e,t,i)=>{i(91226)},21728:(e,t,i)=>{i.r(t),i.d(t,{W3mDepositFromExchangeSelectAssetView:()=>z,W3mDepositFromExchangeView:()=>P});var n=i(12618),o=i(25707),a=i(6056),s=i(37740),r=i(78508),c=i(21871),u=i(63450),d=i(31211),l=i(81729),p=(i(91226),i(53576),i(65548),i(85886)),h=i(15181);const m=i(10982).AH`
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
`;var g=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};const y={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};let w=class extends n.WF{constructor(){super(...arguments),this.type="accent",this.size="md",this.imageSrc="",this.disabled=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.text=""}render(){return n.qy`
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc?n.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        ${this.leftIcon?n.qy`<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`:null}
        <wui-text variant=${y[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon?n.qy`<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};w.styles=[p.W5,p.fD,m],g([(0,o.MZ)()],w.prototype,"type",void 0),g([(0,o.MZ)()],w.prototype,"size",void 0),g([(0,o.MZ)()],w.prototype,"imageSrc",void 0),g([(0,o.MZ)({type:Boolean})],w.prototype,"disabled",void 0),g([(0,o.MZ)()],w.prototype,"leftIcon",void 0),g([(0,o.MZ)()],w.prototype,"rightIcon",void 0),g([(0,o.MZ)()],w.prototype,"text",void 0),w=g([(0,h.E)("wui-chip-button")],w),i(6387),i(47098),i(99575),i(31260),i(32321),i(52835);var b=i(60031),f=(i(93656),i(33189),i(60074),function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s});let x=class extends n.WF{constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return n.qy`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${(0,b.J)(this.maxDecimals)}
          .maxIntegers=${(0,b.J)(this.maxIntegers)}
          .value=${this.amount?String(this.amount):""}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};f([(0,o.MZ)({type:Number})],x.prototype,"amount",void 0),f([(0,o.MZ)({type:Number})],x.prototype,"maxDecimals",void 0),f([(0,o.MZ)({type:Number})],x.prototype,"maxIntegers",void 0),x=f([(0,l.EM)("w3m-fund-input")],x);const v=l.AH`
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
`;var k=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};const $=[10,50,100];let P=class extends n.WF{constructor(){super(),this.unsubscribe=[],this.network=a.W.state.activeCaipNetwork,this.exchanges=s.g.state.exchanges,this.isLoading=s.g.state.isLoading,this.amount=s.g.state.amount,this.tokenAmount=s.g.state.tokenAmount,this.priceLoading=s.g.state.priceLoading,this.isPaymentInProgress=s.g.state.isPaymentInProgress,this.currentPayment=s.g.state.currentPayment,this.paymentId=s.g.state.paymentId,this.paymentAsset=s.g.state.paymentAsset,this.unsubscribe.push(a.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.setDefaultPaymentAsset()}),s.g.subscribe(e=>{this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset,e.isPaymentInProgress&&e.currentPayment?.exchangeId&&e.currentPayment?.sessionId&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),s.g.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),s.g.setAmount($[0]),await s.g.fetchExchanges()}render(){return n.qy`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>n.qy`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(e=>n.qy`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`):n.qy`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return n.qy`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){return n.qy`
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
            @click=${()=>r.I.push("PayWithExchangeSelectAsset")}
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
          ${$.map(e=>n.qy`<wui-chip-button
                @click=${()=>s.g.setAmount(e)}
                type="neutral"
                size="lg"
                text=${`$${e}`}
              ></wui-chip-button>`)}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?n.qy`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:n.qy`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${this.paymentAsset?.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){this.amount?await s.g.handlePayWithExchange(e.id):c.P.showError("Please enter an amount")}handlePaymentInProgress(){const e=a.W.state.activeChain;this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(s.g.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(t=>{"SUCCESS"===t.status?(c.P.showSuccess("Deposit completed"),e&&(u.U.fetchTokenBalance(),d.x.updateBalance(e))):"FAILED"===t.status&&c.P.showError("Deposit failed")}),c.P.showLoading("Deposit in progress..."),r.I.replace("Account"))}onAmountChange({detail:e}){s.g.setAmount(e?Number(e):null)}async getPaymentAssets(){this.network&&await s.g.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){const e=await s.g.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&s.g.setPaymentAsset(e[0])}}};P.styles=v,k([(0,o.wk)()],P.prototype,"network",void 0),k([(0,o.wk)()],P.prototype,"exchanges",void 0),k([(0,o.wk)()],P.prototype,"isLoading",void 0),k([(0,o.wk)()],P.prototype,"amount",void 0),k([(0,o.wk)()],P.prototype,"tokenAmount",void 0),k([(0,o.wk)()],P.prototype,"priceLoading",void 0),k([(0,o.wk)()],P.prototype,"isPaymentInProgress",void 0),k([(0,o.wk)()],P.prototype,"currentPayment",void 0),k([(0,o.wk)()],P.prototype,"paymentId",void 0),k([(0,o.wk)()],P.prototype,"paymentAsset",void 0),P=k([(0,l.EM)("w3m-deposit-from-exchange-view")],P);var I=i(26742);i(20645),i(91885),i(15584),i(31917),i(30943);const A=l.AH`
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
`;var E=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let z=class extends n.WF{constructor(){super(),this.unsubscribe=[],this.assets=s.g.state.assets,this.search="",this.onDebouncedSearch=I.w.debounce(e=>{this.search=e}),this.unsubscribe.push(s.g.subscribe(e=>{this.assets=e.assets}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n.qy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return n.qy`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.assets.filter(e=>e.metadata.name.toLowerCase().includes(this.search.toLowerCase())),t=e.length>0;return n.qy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${t?e.map(e=>n.qy`<wui-list-item
                    .imageSrc=${e.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,e)}
                  >
                    <wui-text variant="md-medium" color="primary">${e.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${e.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):n.qy`<wui-flex
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
    `}onBuyClick(){r.I.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){s.g.setPaymentAsset(e),r.I.goBack()}};z.styles=A,E([(0,o.wk)()],z.prototype,"assets",void 0),E([(0,o.wk)()],z.prototype,"search",void 0),z=E([(0,l.EM)("w3m-deposit-from-exchange-select-asset-view")],z)},31260:(e,t,i)=>{var n=i(12618),o=i(25707),a=i(60031),s=(i(83383),i(65548),i(85886)),r=i(15181);const c=i(10982).AH`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
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
`;var u=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let d=class extends n.WF{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",n.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        tabindex=${(0,a.J)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?n.qy`<wui-image
        icon=${this.icon}
        iconColor=${(0,a.J)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:n.qy`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?n.qy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:n.qy`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};d.styles=[s.W5,s.fD,c],u([(0,o.MZ)()],d.prototype,"imageSrc",void 0),u([(0,o.MZ)()],d.prototype,"icon",void 0),u([(0,o.MZ)()],d.prototype,"iconColor",void 0),u([(0,o.MZ)({type:Boolean})],d.prototype,"loading",void 0),u([(0,o.MZ)()],d.prototype,"tabIdx",void 0),u([(0,o.MZ)({type:Boolean})],d.prototype,"disabled",void 0),u([(0,o.MZ)({type:Boolean})],d.prototype,"rightIcon",void 0),u([(0,o.MZ)({type:Boolean})],d.prototype,"rounded",void 0),u([(0,o.MZ)({type:Boolean})],d.prototype,"fullSize",void 0),d=u([(0,r.E)("wui-list-item")],d)},32321:(e,t,i)=>{i(63274)},33189:(e,t,i)=>{var n=i(12618),o=i(25707),a=i(97832),s=i(10982),r=i(85886),c=i(75249),u=i(15181);const d=s.AH`
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
`;var l=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let p=class extends n.WF{constructor(){super(...arguments),this.inputElementRef=(0,a._)(),this.disabled=!1,this.value="",this.placeholder="0",this.widthVariant="auto",this.maxDecimals=void 0,this.maxIntegers=void 0,this.fontSize="h4"}firstUpdated(){this.resizeInput()}updated(){this.style.setProperty("--local-font-size",s.f.textSize[this.fontSize]),this.resizeInput()}render(){return this.dataset.widthVariant=this.widthVariant,this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),"auto"===this.widthVariant?this.inputTemplate():n.qy`
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `}inputTemplate(){return n.qy`<input
      ${(0,a.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`}dispatchInputChangeEvent(){this.inputElementRef.value&&(this.inputElementRef.value.value=c.Z.maskInput({value:this.inputElementRef.value.value,decimals:this.maxDecimals,integers:this.maxIntegers}),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value.value,bubbles:!0,composed:!0})),this.resizeInput())}resizeInput(){if("fit"===this.widthVariant){const e=this.inputElementRef.value;if(e){const t=e.previousElementSibling;t&&(t.textContent=e.value||"0",e.style.width=`${t.offsetWidth}px`)}}}};p.styles=[r.W5,r.fD,d],l([(0,o.MZ)({type:Boolean})],p.prototype,"disabled",void 0),l([(0,o.MZ)({type:String})],p.prototype,"value",void 0),l([(0,o.MZ)({type:String})],p.prototype,"placeholder",void 0),l([(0,o.MZ)({type:String})],p.prototype,"widthVariant",void 0),l([(0,o.MZ)({type:Number})],p.prototype,"maxDecimals",void 0),l([(0,o.MZ)({type:Number})],p.prototype,"maxIntegers",void 0),l([(0,o.MZ)({type:String})],p.prototype,"fontSize",void 0),p=l([(0,u.E)("wui-input-amount")],p)},37740:(e,t,i)=>{i.d(t,{g:()=>b});var n=i(68126),o=i(4707),a=i(23768),s=i(74496),r=i(62944),c=i(26742),u=i(1440),d=i(63450),l=i(75595),p=i(6056),h=i(90184),m=i(42733),g=i(21871);const y={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},w=(0,n.BX)(y),b={state:w,subscribe:e=>(0,n.B1)(w,()=>e(w)),subscribeKey:(e,t)=>(0,o.u$)(w,e,t),resetState(){Object.assign(w,{...y})},async getAssetsForNetwork(e){const t=(0,u.nj)(e),i=await b.getAssetsImageAndPrice(t),n=t.map(e=>{const t="native"===e.asset?(0,s.K1)():`${e.network}:${e.asset}`,n=i.find(e=>e.fungibles?.[0]?.address?.toLowerCase()===t.toLowerCase());return{...e,price:n?.fungibles?.[0]?.price||1,metadata:{...e.metadata,iconUrl:n?.fungibles?.[0]?.iconUrl}}});return w.assets=n,n},async getAssetsImageAndPrice(e){const t=e.map(e=>"native"===e.asset?(0,s.K1)():`${e.network}:${e.asset}`);return await Promise.all(t.map(e=>l.T.fetchTokenPrice({addresses:[e]})))},getTokenAmount(){if(!w?.paymentAsset?.price)throw new Error("Cannot get token price");const e=a.S.bigNumber(w.amount??0).round(8),t=a.S.bigNumber(w.paymentAsset.price).round(8);return e.div(t).round(8).toNumber()},setAmount(e){w.amount=e,w.paymentAsset?.price&&(w.tokenAmount=b.getTokenAmount())},setPaymentAsset(e){w.paymentAsset=e},isPayWithExchangeEnabled:()=>m.H.state.remoteFeatures?.payWithExchange||m.H.state.remoteFeatures?.payments||m.H.state.features?.pay,isPayWithExchangeSupported:()=>b.isPayWithExchangeEnabled()&&p.W.state.activeCaipNetwork&&r.oU.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(p.W.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{const e=b.isPayWithExchangeSupported();if(!w.paymentAsset||!e)return w.exchanges=[],void(w.isLoading=!1);w.isLoading=!0;const t=await(0,u.ro)({page:0,asset:(0,u.lZ)(w.paymentAsset.network,w.paymentAsset.asset),amount:w.amount?.toString()??"0"});w.exchanges=t.exchanges.slice(0,2)}catch(e){throw g.P.showError("Unable to get exchanges"),new Error("Unable to get exchanges")}finally{w.isLoading=!1}},async getPayUrl(e,t){try{const i=Number(t.amount),n=await(0,u.cz)({exchangeId:e,asset:(0,u.lZ)(t.network,t.asset),amount:i.toString(),recipient:`${t.network}:${t.recipient}`});return h.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),n}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new Error("Asset not supported");throw new Error(e.message)}},async handlePayWithExchange(e){try{if(!d.U.state.address)throw new Error("No account connected");if(!w.paymentAsset)throw new Error("No payment asset selected");const t=c.w.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!t)throw new Error("Could not create popup window");w.isPaymentInProgress=!0,w.paymentId=crypto.randomUUID(),w.currentPayment={type:"exchange",exchangeId:e};const{network:i,asset:n}=w.paymentAsset,o={network:i,asset:n,amount:w.tokenAmount,recipient:d.U.state.address},a=await b.getPayUrl(e,o);if(!a){try{t.close()}catch(e){console.error("Unable to close popup window",e)}throw new Error("Unable to initiate payment")}w.currentPayment.sessionId=a.sessionId,w.currentPayment.status="IN_PROGRESS",w.currentPayment.exchangeId=e,t.location.href=a.url}catch(e){w.error="Unable to initiate payment",g.P.showError(w.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:i,retries:n=20}){const o=await b.getBuyStatus(e,t,i);if("SUCCESS"===o.status||"FAILED"===o.status)return o;if(0===n)throw new Error("Unable to get deposit status");return await new Promise(e=>{setTimeout(e,5e3)}),b.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:i,retries:n-1})},async getBuyStatus(e,t,i){try{if(!w.currentPayment)throw new Error("No current payment");const n=await(0,u.V1)({sessionId:t,exchangeId:e});return w.currentPayment.status=n.status,"SUCCESS"!==n.status&&"FAILED"!==n.status||(w.currentPayment.result=n.txHash,w.isPaymentInProgress=!1,h.E.sendEvent({type:"track",event:"SUCCESS"===n.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===n.status?c.w.parseError(w.error):void 0,source:"fund-from-exchange",paymentId:i,configuration:{network:w.paymentAsset?.network||"",asset:w.paymentAsset?.asset||"",recipient:d.U.state.address||"",amount:w.amount??0},currentPayment:{type:"exchange",exchangeId:w.currentPayment?.exchangeId,sessionId:w.currentPayment?.sessionId,result:n.txHash}}})),n}catch(e){return{status:"UNKNOWN",txHash:""}}},reset(){w.currentPayment=void 0,w.isPaymentInProgress=!1,w.paymentId="",w.paymentAsset=null,w.amount=0,w.tokenAmount=0,w.priceLoading=!1,w.error=null,w.exchanges=[],w.isLoading=!1}}},47098:(e,t,i)=>{i(81611)},53576:(e,t,i)=>{var n=i(12618),o=i(25707),a=i(60031),s=i(85886),r=i(15181);const c=i(10982).AH`
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
`;var u=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let d=class extends n.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const e={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`\n      --local-width: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      --local-height: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?n.qy`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?n.qy`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:n.qy`<img src=${(0,a.J)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};d.styles=[s.W5,c],u([(0,o.MZ)()],d.prototype,"src",void 0),u([(0,o.MZ)()],d.prototype,"logo",void 0),u([(0,o.MZ)()],d.prototype,"icon",void 0),u([(0,o.MZ)()],d.prototype,"iconColor",void 0),u([(0,o.MZ)()],d.prototype,"alt",void 0),u([(0,o.MZ)()],d.prototype,"size",void 0),u([(0,o.MZ)({type:Boolean})],d.prototype,"boxed",void 0),u([(0,o.MZ)({type:Boolean})],d.prototype,"rounded",void 0),u([(0,o.MZ)({type:Boolean})],d.prototype,"fullSize",void 0),d=u([(0,r.E)("wui-image")],d)},81611:(e,t,i)=>{var n=i(12618),o=i(25707),a=(i(91226),i(85886)),s=i(15181);const r=i(10982).AH`
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
`;var c=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let u=class extends n.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return n.qy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};u.styles=[a.W5,a.fD,r],c([(0,o.MZ)()],u.prototype,"size",void 0),c([(0,o.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,o.MZ)()],u.prototype,"icon",void 0),c([(0,o.MZ)()],u.prototype,"iconColor",void 0),c([(0,o.MZ)()],u.prototype,"variant",void 0),u=c([(0,s.E)("wui-icon-link")],u)},99575:(e,t,i)=>{i(53576)}}]);
//# sourceMappingURL=1728.bundle.js.map