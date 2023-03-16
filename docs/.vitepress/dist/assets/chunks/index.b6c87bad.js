import{B as a}from"./xy-base.1f56dfdc.js";import{Tips as o}from"./index.2e28afc0.js";const n=`:host{display:inline-flex;font-size:24px;color:var(--primary-color, royalblue)}:host([disabled]){opacity:.6}fieldset{display:contents;--icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E %3Cpath d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'%3E%3C/path%3E %3C/svg%3E") }[type=radio]{appearance:none;width:1em;height:1em;border-radius:var(--border-radius-base, 4px);margin:0;color:inherit;font-size:inherit;background:var(--primary-bg-dark, rgba(0,0,0,.25));transition:var(--transition, .2s);-webkit-mask:var(--icon) center / 80% no-repeat}[type=radio]:not(:disabled){cursor:pointer}[type=radio]:not(:disabled):hover{transform:scale(1.2)}[type=radio]:not(:disabled):is(:hover,:has(~ :hover)),:host(:is(:not(:hover),[disabled])) [type=radio]:is(:checked,:has(~ :checked)){background:currentColor}
`;class l extends a{static get observedAttributes(){return["color","size","value","disabled","tips","icon"]}constructor(){super();const t=this.attachShadow({mode:"open"});this.adoptedStyle(n),t.innerHTML=`
    <fieldset id="star" aria-label="rate">
      <input part="rate" name="star" value="1" type="radio" />
      <input part="rate" name="star" value="2" type="radio" />
      <input part="rate" name="star" value="3" type="radio" />
      <input part="rate" name="star" value="4" type="radio" />
      <input part="rate" name="star" value="5" type="radio" />
    </fieldset>
      `,this.star=t.getElementById("star"),this.rates=[...t.querySelectorAll("input")]}get value(){const t=this.shadowRoot.querySelector("input:checked");return(t==null?void 0:t.value)||this.getAttribute("value")||0}get size(){return this.getAttribute("size")||""}get icon(){return this.getAttribute("icon")||""}get tips(){var t;return((t=this.getAttribute("tips"))==null?void 0:t.split(","))||[]}get disabled(){return this.getAttribute("disabled")!==null}set disabled(t){this.toggleAttribute("disabled",t)}set tips(t){this.setAttribute("tips",t)}set icon(t){this.setAttribute("icon",t)}get color(){return this.getAttribute("color")||""}set size(t){this.setAttribute("size",t)}set color(t){this.setAttribute("color",t)}set value(t){const e=this.shadowRoot.querySelector(`input[value='${t}']`);e&&(e.checked=!0)}connectedCallback(){this.rates.forEach((t,e)=>{t.tipsEl=new o(t,{tips:this.tips[e]||"",disabled:!this.tips[e]}),t.addEventListener("change",()=>{this.dispatchEvent(new InputEvent("change"))})})}disconnectedCallback(){this.rates.forEach(t=>{var e;(e=t.tipsEl)==null||e.remove()})}attributeChangedCallback(t,e,i){if(t==="size"&&(this.star.style.fontSize=i+"px"),t==="color"&&(this.star.style.color=i),t==="value"&&(this.value=i),t==="disabled"&&(this.star.disabled=i!==null),t==="icon"){const r=`http://xboxyan.codelabo.cn/xy-ui-icons/${this.name.includes("/")?this.icon:"regular/"+this.icon}.svg`;this.star.style.setProperty("--icon",`url(${r})`)}t==="tips"&&this.rates.length&&this.rates.forEach((s,r)=>{s.tipsEl&&(s.tipsEl.tips=this.tips[r],s.tipsEl.disabled=!this.tips[r])})}}customElements.get("xy-rate")||customElements.define("xy-rate",l);export{l as default};
