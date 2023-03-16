import{B as d}from"./xy-base.1f56dfdc.js";const l=`:host{display:inline-flex;gap:8px;align-items:center;--primary-color-opacity-600: color-mix(in srgb, var(--primary-color) 60%, transparent)}.radio{position:relative;appearance:none;box-sizing:border-box;width:16px;height:16px;padding:0;margin:0;cursor:inherit;border-radius:50%;border:1px solid var(--border-color, #d9d9d9);outline-color:var(--primary-color-opacity-600);outline-width:2px;outline-offset:1px;transition:var(--transition, .2s);cursor:pointer}.radio:not(:disabled):is(:hover,:active){filter:brightness(1.2)}.radio:checked{border-width:5px;border-color:var(--primary-color, royalblue)}.radio:after{content:"";position:absolute;inset:-8px}.radio:disabled{opacity:.6}.radio:focus-visible{outline-style:solid}.label{display:contents;cursor:pointer}.radio:disabled{cursor:default}:disabled+label{cursor:default;color:var(--disabled-color, rgba(0, 0, 0, .25))}.radio:not(:disabled):hover{border-color:var(--primary-color, royalblue)}
`;class c extends d{static get observedAttributes(){return["disabled","checked","required"]}focus(){this.radio.focus()}constructor(){super();const e=this.attachShadow({mode:"open"});this.adoptedStyle(l),e.innerHTML=`
      <input class="radio" part="radio" type="radio" id="radio">
      <label class="label" for="radio">
          <slot></slot>
      </label>
      `,this.radio=e.getElementById("radio")}get disabled(){return this.getAttribute("disabled")!==null}get checked(){return this.getAttribute("checked")!==null}get required(){return this.getAttribute("required")!==null}get value(){return this.getAttribute("value")||this.textContent}set disabled(e){this.toggleAttribute("disabled",e)}set checked(e){this.toggleAttribute("checked",e)}set required(e){this.toggleAttribute("required",e)}focusChecked(e){const r=[...this.radioGroup];let i=r.findIndex(a=>a.checked)+e;i<0&&(i=r.length-1),i>r.length-1&&(i=0);const o=r[i];o.checked=!0,o.focus(),o.dispatchEvent(new InputEvent("change"))}tabChange(){[...this.radioGroup].filter(r=>r!==this).forEach(r=>r.inert=!0)}tabFocus(){if(!document.activeElement.checked){const e=[...this.radioGroup];(e.find(t=>t.checked)||e[0]).focus()}}tabBlur(){[...this.radioGroup].forEach(r=>r.inert=!1)}connectedCallback(){this.radioGroup=document.querySelectorAll(`xy-radio[name='${this.name}']`),this.radio.addEventListener("change",e=>{this.checked=e.target.checked,this.dispatchEvent(new InputEvent("change"))}),this.radio.addEventListener("keydown",e=>{if(this.radioGroup.length)switch(e.key){case"ArrowRight":case"ArrowDown":e.preventDefault(),this.focusChecked(1);break;case"ArrowLeft":case"ArrowUp":e.preventDefault(),this.focusChecked(-1);break;case"Tab":this.tabChange();break}}),this.radio.addEventListener("focus",()=>{this.radioGroup.length&&this.tabFocus()}),this.radio.addEventListener("blur",()=>{this.radioGroup.length&&this.tabBlur()})}attributeChangedCallback(e,r,t){var i;if(this.radio[e]=t!==null,e==="checked"&&t!==null&&(i=this.radioGroup)!=null&&i.length){const o=[...this.radioGroup].find(a=>a.checked&&a!==this);o&&(o.checked=!1)}}}customElements.get("xy-radio")||customElements.define("xy-radio",c);const u=`:host{display:inline-flex;gap:15px}
`,s=["disabled","value"];class h extends d{static get observedAttributes(){return s}constructor(){super();const e=this.attachShadow({mode:"open"});this.adoptedStyle(u),e.innerHTML=`
			<slot></slot>
      `}get disabled(){return this.getAttribute("disabled")!==null}get required(){return this.getAttribute("required")!==null}get value(){const e=this.querySelector("xy-radio[checked]");return(e==null?void 0:e.value)||this.getAttribute("value")||""}set disabled(e){this.toggleAttribute("disabled",e)}set value(e){const t=[...this.querySelectorAll("xy-radio")].find(i=>i.value===e);t&&(t.checked=!0)}connectedCallback(){this.slots=this.shadowRoot.querySelector("slot"),this.slots.addEventListener("slotchange",e=>{const r=e.target.assignedNodes();r.forEach(t=>{t.radioGroup=r,t.addEventListener("change",()=>{this.value=t.value,this.dispatchEvent(new InputEvent("change"))})}),s.forEach(t=>this[t]=this[t])})}async attributeChangedCallback(e,r,t){await this.renderSlot(),e==="disabled"?[...this.querySelectorAll("xy-radio")].forEach(o=>{o.disabled=t!==null}):this[e]=t}}customElements.get("xy-radio-group")||customElements.define("xy-radio-group",h);export{h as default};
