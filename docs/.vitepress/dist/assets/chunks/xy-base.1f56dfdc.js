class a extends HTMLElement{adoptedStyle(t){let e=t;t.type||(e=new CSSStyleSheet,e.replace(t)),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,e]}get name(){return this.getAttribute("name")}set name(t){return this.setAttribute("name",t)}get attr(){const t=["type","class"];return[...this.attributes].filter(e=>!e.name.startsWith("on")&&!t.includes(e.name)).map(e=>e.name+"='"+(e.value||"true")+"'").join(" ")}renderSlot(){if(this.slots||(this.slots=this.shadowRoot.querySelector("slot")),!!this.slots)return new Promise(t=>{this.mounted?t():this.slots.addEventListener("slotchange",()=>{this.mounted=!0,t()})})}}export{a as B};
