import{B as o}from"./xy-base.1f56dfdc.js";const r=`:host{display:inline-flex;gap:8px;align-items:center;cursor:pointer;--primary-color-opacity-600: color-mix(in srgb, var(--primary-color) 60%, transparent)}.checkbox{position:relative;appearance:none;box-sizing:border-box;width:16px;height:16px;padding:2px;margin:0;cursor:inherit;border-radius:4px;border:1px solid var(--border-color, #d9d9d9);outline-color:var(--primary-color-opacity-600);outline-width:2px;outline-offset:1px;transition:var(--transition, .2s)}.checkbox:before{content:"";position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' fill='%23fff' overflow='hidden'%3E%3Cpath d='M700.723 331.008l73.984 70.758-329.574 344.781-192.666-190.105 71.936-72.91 118.63 117.044z'/%3E%3C/svg%3E") 50%/150% no-repeat;opacity:0}.checkbox:not(:disabled):is(:hover,:active){filter:brightness(1.2)}.checkbox:checked{border-color:var(--primary-color, royalblue);background-color:var(--primary-color, royalblue)}.checkbox:checked:before{opacity:1}.checkbox:after{content:"";position:absolute;inset:-8px}.checkbox:disabled{opacity:.6}.checkbox:focus-visible{outline-style:solid}.label{display:contents;cursor:inherit}:host([disabled]){cursor:default;color:var(--disabled-color, rgba(0, 0, 0, .25))}.checkbox:not(:disabled):hover{border-color:var(--primary-color, royalblue)}.checkbox:indeterminate{background:var(--primary-color, royalblue);background-clip:content-box}.checkbox:indeterminate:before{opacity:0}.checkbox:indeterminate+label .cheked:before{transform:scale(1)}
`;class c extends o{static get observedAttributes(){return["disabled","checked","required"]}constructor(){super();const e=this.attachShadow({mode:"open"});this.adoptedStyle(r),e.innerHTML=`
      <input class="checkbox" part="checkbox" type="checkbox" id="checkbox">
      <label class="label" for="checkbox">
          <slot></slot>
      </label>
      `,this.checkbox=e.getElementById("checkbox")}focus(){this.checkbox.focus()}get disabled(){return this.getAttribute("disabled")!==null}get checked(){return this.getAttribute("checked")!==null}get required(){return this.getAttribute("required")!==null}get indeterminate(){return this.checkbox.indeterminate}get value(){return this.getAttribute("value")||this.textContent}set disabled(e){this.toggleAttribute("disabled",e)}set checked(e){this.toggleAttribute("checked",e)}set indeterminate(e){this.checkbox.indeterminate=e}set required(e){this.toggleAttribute("required",e)}connectedCallback(){this.checkbox.addEventListener("change",e=>{this.checked=e.target.checked,this.dispatchEvent(new InputEvent("change"))})}attributeChangedCallback(e,a,t){this.checkbox[e]=t!==null}}customElements.get("xy-checkbox")||customElements.define("xy-checkbox",c);export{c as default};
