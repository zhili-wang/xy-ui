import{h as l,a1 as n,a2 as p,o,c as e,N as a,x as s}from"./chunks/framework.e11130c7.js";import"./chunks/index.4ed993c7.js";const t=a(`<h1 id="switch" tabindex="-1">switch <a class="header-anchor" href="#switch" aria-label="Permalink to &quot;switch&quot;">​</a></h1><p>开关选择器。</p><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 引入 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../components/switch/index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 使用 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="禁用disabled" tabindex="-1">禁用<code>disabled</code> <a class="header-anchor" href="#禁用disabled" aria-label="Permalink to &quot;禁用\`disabled\`&quot;">​</a></h2><p>通过<code>disabled</code>可以禁用开关。</p>`,6),c=s("div",{class:"wrap"},[s("xy-switch",{disabled:""}),s("xy-checkbox",{checked:"",onchange:"this.previousElementSibling.disabled = this.checked;"},"禁用")],-1),r=a(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>JavaScript操作</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">disabled</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//获取</span></span>
<span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">disabled </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">disabled </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//原生属性操作</span></span>
<span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">disabled</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">disabled</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="选中checked" tabindex="-1">选中<code>checked</code> <a class="header-anchor" href="#选中checked" aria-label="Permalink to &quot;选中\`checked\`&quot;">​</a></h2><p><code>checked</code>属性表示选中。</p>`,5),D=s("div",{class:"wrap"},[s("xy-switch",{checked:""}),s("xy-button",{type:"primary",onclick:"this.previousElementSibling.checked=!this.previousElementSibling.checked"},"选中切换")],-1),y=a(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>JavaScript操作</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">checked</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//获取</span></span>
<span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">checked </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">checked </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//原生属性操作</span></span>
<span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checked</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checked</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toggleAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checked</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [force])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="尺寸size" tabindex="-1">尺寸<code>size</code> <a class="header-anchor" href="#尺寸size" aria-label="Permalink to &quot;尺寸\`size\`&quot;">​</a></h2><p>小号开关。</p><div class="wrap"><xy-switch checked></xy-switch><xy-switch checked size="small"></xy-switch></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="自定义样式-part-switch" tabindex="-1">自定义样式<code>::part(switch)</code> <a class="header-anchor" href="#自定义样式-part-switch" aria-label="Permalink to &quot;自定义样式\`::part(switch)\`&quot;">​</a></h2><p><code>xy-switch</code>元素本身不包含任意样式，如果需要自定义样式，可以通过内置伪元素<code>::part(switch)</code></p><p>内部结构如下（可查看控制台）：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  # shadow-root</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">part</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">switch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">checkbox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="wrap"><xy-switch class="custom-switch" checked></xy-switch></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">custom-switch</span><span style="color:#A6ACCD;">::part(</span><span style="color:#FFCB6B;">switch</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">custom-switch</span><span style="color:#A6ACCD;">::part(</span><span style="color:#FFCB6B;">switch</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom-switch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="事件event" tabindex="-1">事件<code>event</code> <a class="header-anchor" href="#事件event" aria-label="Permalink to &quot;事件\`event\`&quot;">​</a></h2><h3 id="onchange" tabindex="-1">onchange <a class="header-anchor" href="#onchange" aria-label="Permalink to &quot;onchange&quot;">​</a></h3><p>在切换完成时触发。</p>`,16),F=s("div",{class:"wrap"},[s("xy-switch",{onchange:"console.log(this.checked)"})],-1),i=a(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onchange</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">checked</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">xy-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onchange</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ev</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//获取checked的方式</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">checked</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ev</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">checked</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">switch</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">change</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ev</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">checked</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ev</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">checked</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,2),C=[t,c,r,D,y,F,i],m=JSON.parse('{"title":"switch","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","lastUpdated":1678347776000}'),h={name:"components/switch.md"},w=Object.assign(h,{setup(A){return l(()=>{n(()=>import("./chunks/index.46c0c1d6.js"),["assets/chunks/index.46c0c1d6.js","assets/chunks/xy-base.1f56dfdc.js"]),n(()=>import("./chunks/index.56be550d.js"),["assets/chunks/index.56be550d.js","assets/chunks/xy-base.1f56dfdc.js","assets/chunks/index.ca556da8.js","assets/chunks/index.266e26e8.js"]),n(()=>import("./chunks/index.992eb36e.js"),["assets/chunks/index.992eb36e.js","assets/chunks/xy-base.1f56dfdc.js"])}),p({value:!0}),(d,_)=>(o(),e("div",null,C))}});export{m as __pageData,w as default};
