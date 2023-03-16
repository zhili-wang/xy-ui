import"./index.2e28afc0.js";import{B as r}from"./xy-base.1f56dfdc.js";const s=`:host{display:inline-flex;--primary-color-opacity-600: color-mix(in srgb, var(--primary-color) 60%, transparent)}:host([disabled]) .slider{opacity:.6;cursor:default}.slider{position:relative;appearance:none;height:10px;width:100%;margin:auto;background:none;cursor:pointer;outline:0}::-moz-focus-inner,::-moz-focus-outer{border:0;outline:0}.slider::-webkit-slider-runnable-track{height:2px;border-radius:2px;background:linear-gradient(to right,var(--primary-color, #42b983) calc(100% * var(--percent, .5)),var(--primary-bg-dark, rgba(0,0,0,.25)) 0%)}.slider::-moz-range-progress{display:flex;align-items:center;position:relative;height:2px;border-radius:2px;outline:0;background:var(--primary-color, #42b983)}.slider::-moz-range-track{height:2px;background:var(--primary-bg-dark, rgba(0,0,0,.25))}.slider::-webkit-slider-thumb{appearance:none;border:2px solid var(--primary-color, #42b983);width:10px;height:10px;border-radius:50%;margin-top:-4px;background:var(--primary-bg, #fff);transition:var(--transition, .2s) cubic-bezier(.12,.4,.29,1.46);outline-color:var(--primary-color-opacity-600);outline-width:2px;opacity:0}.slider:after{content:"";position:absolute;left:calc((100% - 10px) * var(--percent));box-sizing:border-box;border:2px solid var(--primary-color, #42b983);width:10px;height:10px;border-radius:50%;background:var(--primary-bg, #fff);transition:var(--transition, .2s) cubic-bezier(.12,.4,.29,1.46),left 0s;outline-color:var(--primary-color-opacity-600);outline-width:2px}.slider:focus-visible:after{outline-style:solid}.slider:focus-visible::-webkit-slider-thumb{outline-style:solid}.slider::-moz-range-thumb{appearance:none;border:2px solid var(--primary-color, #42b983);box-sizing:border-box;width:10px;height:10px;border-radius:50%;margin-top:-4px;background:var(--primary-bg, #fff);transition:var(--transition, .2s) cubic-bezier(.12,.4,.29,1.46);outline-color:var(--primary-color-opacity-600);outline-width:2px}.slider:focus-visible::-moz-range-thumb{outline-style:solid}.slider:not(:disabled):is(:hover,:active){filter:brightness(1.2)}.slider:not(:disabled)::-webkit-slider-thumb:is(:hover,:active){transform:scale(1.2)}.slider:not(:disabled)::-moz-range-thumb:is(:hover,:active){transform:scale(1.2)}.slider:not(:disabled):hover:after,.slider:not(:disabled):active:after{transform:scale(1.2)}:host([vertical]) .slider{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-90deg);width:var(--h, 150px)}:host([vertical]){position:relative;height:150px;width:10px}
`;class a extends r{static get observedAttributes(){return["min","max","step","disabled","tips","value"]}constructor(){super();const t=this.attachShadow({mode:"open"});this.adoptedStyle(s),t.innerHTML=`
    <xy-tips dir="auto" id="tips">
        <input part="slider" class="slider" id="slider" type="range">
    </xy-tips>`,this.tipsEl=t.getElementById("tips"),this.slider=t.getElementById("slider")}focus(){this.slider.focus()}connectedCallback(){this.vertical&&(this.resizeObserver=new ResizeObserver(t=>{for(let e of t){const{height:i}=e.contentRect;this.tipsEl.style.setProperty("--h",i+"px")}}),this.resizeObserver.observe(this),this.tipsEl.dir="right",this.tipsEl.tipEl.style.transition="none"),this.slider.addEventListener("input",t=>{this.renderTip(t.target.value)}),this.slider.addEventListener("change",t=>{this.dispatchEvent(new InputEvent("change"))}),this.renderTip(this.value)}disconnectedCallback(){this.vertical&&this.resizeObserver.unobserve(this)}renderTip(t){const e=(t-this.min)/(this.max-this.min);if(this.tipsEl.style.setProperty("--percent",e),this.tips===null){this.tipsEl.tips="";return}const i=new Function("value","return `"+(this.tips||"${value}")+"`")(t);this.tipsEl.tips=i,this.vertical?this.tipsEl.offset="0,"+parseInt((.5-e)*(this.offsetHeight-10)):this.tipsEl.offset=parseInt((e-.5)*(this.offsetWidth-10))+",0"}get value(){return Number(this.slider.value)}get min(){return this.getAttribute("min")||0}get max(){return this.getAttribute("max")||100}get disabled(){return this.getAttribute("disabled")!==null}get tips(){return this.getAttribute("tips")}get vertical(){return this.getAttribute("vertical")!==null}set disabled(t){this.toggleAttribute("disabled",t),this.slider.toggleAttribute("disabled",t)}get step(){return this.getAttribute("step")||1}set value(t){this.slider.value=t,this.renderTip(t)}set min(t){this.setAttribute("min",t)}set max(t){this.setAttribute("max",t)}set step(t){this.setAttribute("step",t)}set vertical(t){this.toggleAttribute("vertical",t)}set tips(t){t===!1?(this.toggleAttribute("tips",t),this.tipsEl.tips=""):this.setAttribute("tips",t)}attributeChangedCallback(t,e,i){this.slider[t]=i,t!=="disabled"&&this.renderTip(this.value)}}customElements.get("xy-slider")||customElements.define("xy-slider",a);export{a as default};
