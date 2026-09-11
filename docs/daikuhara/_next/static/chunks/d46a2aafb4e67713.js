(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46958,e=>{"use strict";let t,r,a;e.i(8072);var n,i,o,s,l,u,d,c,p=e.i(24640),p=p,h=e.i(46506),p=p,f=e.i(2977),x=e.i(79095);let m={},g={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function v(e,t){m[e]=t}function C(e,t){if(!(e in m)||null!=t){let r=function(e,t){if(1!==e&&2!==e)throw Error("Cannot get WebGL rendering context, WebGL is disabled.");let r=null==t?function(e){if(!(0,f.env)().getBool("IS_SAFARI")&&"u">typeof OffscreenCanvas&&2===e)return new OffscreenCanvas(300,150);if("u">typeof document)return document.createElement("canvas");throw Error("Cannot create a canvas in this context")}(e):t;return(r.addEventListener("webglcontextlost",t=>{t.preventDefault(),delete m[e]},!1),(0,f.env)().getBool("SOFTWARE_WEBGL_ENABLED")&&(g.failIfMajorPerformanceCaveat=!1),1===e)?r.getContext("webgl",g)||r.getContext("experimental-webgl",g):r.getContext("webgl2",g)}(e,t);if(null===r)return console.log("Could not get context for WebGL version",e),null;m[e]=r}let r=m[e];return null==r||r.isContextLost()?(delete m[e],C(e)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),m[e])}function b(e){let t=Math.ceil(x.util.sizeFromShape(e)/4);return x.util.sizeToSquarishShape(t)}function $(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function y(e,t){let r,a,n,i,o,s,l,u,d,c;return 2===(0,f.env)().getNumber("WEBGL_VERSION")?(r=e.R32F,a=e.R16F,n=e.RGBA16F,i=e.RGBA32F,o=e.RED,l=4,u=1,d=e.HALF_FLOAT,c=e.FLOAT,s=e.RGBA8):(r=e.RGBA,a=e.RGBA,n=e.RGBA,i=e.RGBA,o=e.RGBA,l=4,u=4,d=null!=t?t.HALF_FLOAT_OES:null,c=e.FLOAT,s=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:a,internalFormatPackedHalfFloat:n,internalFormatPackedFloat:i,textureFormatFloat:o,downloadTextureFormat:s,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:c}}function I(e,t){let r=t();return(0,f.env)().getBool("DEBUG")&&function(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error("WebGL Error: "+T(e,t))}(e),r}function R(e){return!!((0,f.env)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===e||596e-10<Math.abs(e)&&65504>Math.abs(e))}function T(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function w(e,t){return Q(e,()=>e.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function S(e,t){let r=Q(e,()=>e.createShader(e.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(I(e,()=>e.shaderSource(r,t)),I(e,()=>e.compileShader(r)),!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(r)),Error("Failed to compile vertex shader.");return r}function E(e,t){let r=Q(e,()=>e.createShader(e.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(I(e,()=>e.shaderSource(r,t)),I(e,()=>e.compileShader(r)),(0,f.env)().get("ENGINE_COMPILE_ONLY"))return r;if(!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw k(t,e.getShaderInfoLog(r)),Error("Failed to compile fragment shader.");return r}(n=l||(l={}))[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH",(i=u||(u={}))[i.RENDER=0]="RENDER",i[i.UPLOAD=1]="UPLOAD",i[i.PIXELS=2]="PIXELS",i[i.DOWNLOAD=3]="DOWNLOAD",(o=d||(d={}))[o.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",o[o.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",o[o.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",o[o.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",o[o.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16";let N=/ERROR: [0-9]+:([0-9]+):/g;function k(e,t){let r=N.exec(t);if(null==r){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let a=+r[1],n=e.split("\n"),i=n.length.toString().length+2,o=n.map((e,t)=>x.util.rightPad((t+1).toString(),i)+e),s=0;for(let e=0;e<o.length;e++)s=Math.max(o[e].length,s);let l=o.slice(0,a-1),u=o.slice(a-1,a),d=o.slice(a);console.log(l.join("\n")),console.log(t.split("\n")[0]),console.log(`%c ${x.util.rightPad(u[0],s)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(d.join("\n"))}function A(e){return Q(e,()=>e.createProgram(),"Unable to create WebGLProgram.")}function O(e,t){if(I(e,()=>e.linkProgram(t)),!(0,f.env)().get("ENGINE_COMPILE_ONLY")&&!1===e.getProgramParameter(t,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(t)),Error("Failed to link vertex and fragment shaders.")}function F(e,t){if(I(e,()=>e.validateProgram(t)),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),Error("Shader program validation failed.")}function _(e,t){let r=Q(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return I(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),I(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),r}function D(e,t){let r=Q(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return I(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)),I(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),r}function P(){return 2===(0,f.env)().getNumber("WEBGL_VERSION")?1:4}function L(e){return Q(e,()=>e.createTexture(),"Unable to create WebGLTexture.")}function B(e,t){let r=(0,f.env)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0)throw Error(`Requested texture size [${e}x${t}] is invalid.`);if(e>r||t>r)throw Error(`Requested texture size [${e}x${t}] greater than WebGL maximum on this browser / GPU [${r}x${r}].`)}function V(e){return Q(e,()=>e.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function W(e,t,r,a,n,i,o){let s=e.getAttribLocation(t,r);return -1!==s&&(I(e,()=>e.bindBuffer(e.ARRAY_BUFFER,a)),I(e,()=>e.vertexAttribPointer(s,n,e.FLOAT,!1,i,o)),I(e,()=>e.enableVertexAttribArray(s)),!0)}function U(e,t,r){Z(e,r),I(e,()=>e.activeTexture(e.TEXTURE0+r)),I(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function G(e,t){Z(e,t),I(e,()=>e.activeTexture(e.TEXTURE0+t)),I(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function M(e,t,r){return Q(e,()=>e.getUniformLocation(t,r),'uniform "'+r+'" not present in program.')}function z(e,t,r){return e.getUniformLocation(t,r)}function X(e,t,r,a){I(e,()=>U(e,t,a)),I(e,()=>e.uniform1i(r,a))}function H(e){I(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),I(e,()=>e.viewport(0,0,e.canvas.width,e.canvas.height)),I(e,()=>e.scissor(0,0,e.canvas.width,e.canvas.height))}function q(e,t,r){I(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,r)),I(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function j(e,t){I(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),I(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function K(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error("Error binding framebuffer: "+Y(e,t))}function Y(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function Q(e,t,r){let a=I(e,()=>t());if(null==a)throw Error(r);return a}function Z(e,t){let r=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,a=t+e.TEXTURE0;if(a<e.TEXTURE0||a>r){let e=`[gl.TEXTURE0, gl.TEXTURE${r}]`;throw Error(`textureUnit must be in ${e}.`)}}function J(e,t=2){return x.util.sizeFromShape(e.slice(0,e.length-t))}function ee(e){if(0===e.length)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function et(e){let t=[1,1,1];return 0!==e.length&&(1!==e.length||1!==e[0])&&(t=[J(e),...ee(e)]),t}function er(e,t=!1){let r=(0,f.env)().getNumber("WEBGL_MAX_TEXTURE_SIZE"),a=(0,f.env)().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");a===1/0&&(0,f.env)().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(a=r/2),t&&(r*=2,a*=2,1===(e=e.map((t,r)=>r>=e.length-2?x.util.nearestLargerEven(e[r]):e[r])).length&&(e=[2,e[0]])),2!==e.length&&(e=x.util.squeezeShape(e).newShape);let n=x.util.sizeFromShape(e),i=null;e.length<=1&&n<=r?i=[1,n]:2===e.length&&e[0]<=r&&e[1]<=r?i=e:3===e.length&&e[0]*e[1]<=r&&e[2]<=r?i=[e[0]*e[1],e[2]]:3===e.length&&e[0]<=r&&e[1]*e[2]<=r?i=[e[0],e[1]*e[2]]:4===e.length&&e[0]*e[1]*e[2]<=r&&e[3]<=r?i=[e[0]*e[1]*e[2],e[3]]:4===e.length&&e[0]<=r&&e[1]*e[2]*e[3]<=r&&(i=[e[0],e[1]*e[2]*e[3]]);let o=null!=i&&Math.max(...i)>a&&Math.min(...i)<=(t?2:1)&&Math.min(...i)>0;if(null==i||o)if(t){let t=J(e),r=2,a=2;e.length&&([r,a]=ee(e)),n=r/2*t*(a/2),i=x.util.sizeToSquarishShape(n).map(e=>2*e)}else i=x.util.sizeToSquarishShape(n);return i}function ea(e,t){if(e=e.slice(-2),t=t.slice(-2),x.util.arraysEqual(e,t)||!e.length||!t.length||0===e[0]||0===e[1]||0===t[0]||0===t[1])return!0;if(e.length!==t.length){let r=e[e.length-1],a=t[t.length-1];if(r===a||r%2==0&&a%2==0&&(1===e[0]||1===t[0]))return!0}return e[1]===t[1]&&e[0]%2==0&&t[0]%2==0}function en(e){if(null==t){let r=C(e);t=r.getParameter(r.MAX_TEXTURE_SIZE)}return t}function ei(){t=null}function eo(){r=null}function es(e){if(null==r){let t=C(e);r=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,r)}function el(e){if(0===e)return 0;let t=C(e);return eu(t,"EXT_disjoint_timer_query_webgl2")&&2===e?2:+!!eu(t,"EXT_disjoint_timer_query")}function eu(e,t){return null!=e.getExtension(t)}function ed(e){try{let t=C(e);if(null!=t)return!0}catch(e){console.log("Error when getting WebGL context: ",e)}return!1}function ec(e){if(0===e)return!1;let t=C(e);if(1===e){if(!eu(t,"OES_texture_float"))return!1}else if(!eu(t,"EXT_color_buffer_float"))return!1;return eh(t)}function ep(e){if(0===e)return!1;let t=C(e);if(1===e){if(!eu(t,"OES_texture_float")||!eu(t,"WEBGL_color_buffer_float"))return!1}else{if(eu(t,"EXT_color_buffer_float"))return eh(t);let e="EXT_color_buffer_half_float";if(eu(t,e)){var r;let a,n,i,o,s=t.getExtension(e);return a=y(r=t,s),n=r.createTexture(),r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null),i=r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,n,0),o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE,r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(n),r.deleteFramebuffer(i),o}return!1}return eh(t)}function eh(e){let t=y(e),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let a=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let n=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(a),n}function ef(e){return 2===e&&null!=C(e).fenceSync}function ex(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&x.util.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}e.s(["assertNotComplex",()=>ex,"bindCanvasToFramebuffer",()=>H,"bindColorTextureToFramebuffer",()=>q,"bindTextureToProgramUniformSampler",()=>X,"bindTextureUnit",()=>U,"bindVertexBufferToProgramAttribute",()=>W,"callAndCheck",()=>I,"canBeRepresented",()=>R,"createFragmentShader",()=>E,"createFramebuffer",()=>V,"createProgram",()=>A,"createStaticIndexBuffer",()=>D,"createStaticVertexBuffer",()=>_,"createTexture",()=>L,"createVertexShader",()=>S,"getBatchDim",()=>J,"getExtensionOrThrow",()=>w,"getFramebufferErrorMessage",()=>Y,"getMaxTexturesInShader",()=>es,"getNumChannels",()=>P,"getProgramUniformLocation",()=>z,"getProgramUniformLocationOrThrow",()=>M,"getRowsCols",()=>ee,"getShapeAs3D",()=>et,"getTextureShapeFromLogicalShape",()=>er,"getWebGLDisjointQueryTimerVersion",()=>el,"getWebGLErrorMessage",()=>T,"getWebGLMaxTextureSize",()=>en,"hasExtension",()=>eu,"isCapableOfRenderingToFloatTexture",()=>ec,"isDownloadFloatTextureEnabled",()=>ep,"isReshapeFree",()=>ea,"isWebGLFenceEnabled",()=>ef,"isWebGLVersionEnabled",()=>ed,"linkProgram",()=>O,"logShaderSourceAndInfoLog",()=>k,"resetMaxTextureSize",()=>ei,"resetMaxTexturesInShader",()=>eo,"unbindColorTextureFromFramebuffer",()=>j,"unbindTextureUnit",()=>G,"validateFramebuffer",()=>K,"validateProgram",()=>F,"validateTextureSize",()=>B],67412);let em=(0,f.env)();em.registerFlag("HAS_WEBGL",()=>em.getNumber("WEBGL_VERSION")>0),em.registerFlag("WEBGL_VERSION",()=>ed(2)?2:+!!ed(1)),em.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),em.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>2===em.get("WEBGL_VERSION")),em.registerFlag("WEBGL_CPU_FORWARD",()=>!0),em.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),em.registerFlag("WEBGL_PACK",()=>em.getBool("HAS_WEBGL")),em.registerFlag("WEBGL_PACK_NORMALIZATION",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_PACK_CLIP",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_PACK_REDUCE",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_LAZILY_UNPACK",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_CONV_IM2COL",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>em.getBool("WEBGL_PACK")),em.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>en(em.getNumber("WEBGL_VERSION"))),em.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>es(em.getNumber("WEBGL_VERSION"))),em.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let e=em.getNumber("WEBGL_VERSION");return 0===e?0:el(e)}),em.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>em.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!p.isMobile()),em.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>ec(em.getNumber("WEBGL_VERSION"))),em.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>!em.getBool("WEBGL_FORCE_F16_TEXTURES")&&em.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),em.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>ep(em.getNumber("WEBGL_VERSION"))),em.registerFlag("WEBGL_FENCE_API_ENABLED",()=>ef(em.getNumber("WEBGL_VERSION"))),em.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>4*!!em.getBool("WEBGL_RENDER_FLOAT32_ENABLED")),em.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,e=>{if("number"!=typeof e)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${e}.`);if(e<0&&-1!==e)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),em.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>p.isMobile()?1:-1,e=>{if("number"!=typeof e)throw Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${e}.`);if(e<0&&-1!==e)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),em.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),em.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),em.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),em.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),em.registerFlag("WEBGL_EXP_CONV",()=>!1),em.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>em.getBool("IS_TEST")),em.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),em.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),em.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1),em.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);var eg=e.i(91376),eg=eg,ev=e.i(9205),eC=e.i(79087),eb=e.i(42482),eb=eb,e$=e.i(50249),ey=e.i(15764);function eI(){let e,t,r,a,n,i,o,s,l,u;return 2===(0,f.env)().getNumber("WEBGL_VERSION")?(e="#version 300 es",t="in",r="out",a="in",n="texture",i="outputColor",o="out vec4 outputColor;",s=(0,f.env)().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",u=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e="",t="attribute",r="varying",a="varying",n="texture2D",i="gl_FragColor",o="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,u=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:r,varyingFs:a,texture2D:n,output:i,defineOutput:o,defineSpecialNaN:s,defineSpecialInf:l,defineRound:u}}var eg=eg,eg=eg;function eR(e,t,r="index"){let a=x.util.computeStrides(t);return a.map((t,n)=>{let i=`int ${e[n]} = ${r} / ${t}`,o=n===a.length-1?`int ${e[n+1]} = ${r} - ${e[n]} * ${t}`:`index -= ${e[n]} * ${t}`;return`${i}; ${o};`}).join("")}function eT(e,t,r="index"){let a=x.util.computeStrides(t);return a.map((t,n)=>{let i=`int ${e[n]} = ${r} / outShapeStrides[${n}]`,o=n===a.length-1?`int ${e[n+1]} = ${r} - ${e[n]} * outShapeStrides[${n}]`:`index -= ${e[n]} * outShapeStrides[${n}]`;return`${i}; ${o};`}).join("")}function ew(e){let t=x.util.computeStrides(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function eS(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}let eE=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`,{getBroadcastDims:eN}=eg,ek=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,eA=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,eO=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,eF=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function e_(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function eD(e){return`offset${e}`}function eP(e){let t=e.name,r=x.util.sizeFromShape(e.shapeInfo.logicalShape);return r<2?`return ${t};`:`
    for (int i = 0; i < ${r}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function eL(e){if(e<=1)return"int";if(2===e)return"ivec2";if(3===e)return"ivec3";if(4===e)return"ivec4";if(5===e)return"ivec5";else if(6===e)return"ivec6";else throw Error(`GPU for rank ${e} is not yet supported`)}function eB(e,t,r){let{newShape:a,keptDims:n}=x.util.squeezeShape(t),i=t.length,o=e&&3===i&&1===t[0],s=o?t.slice(1):a,l=!e&&i>1&&!x.util.arraysEqual(t,r)&&a.length<i||o,u=l?s:t;return{useSqueezeShape:l,uniformShape:u,keptDims:n}}function eV(e,t){let r=JSON.parse(JSON.stringify(e));return r.shapeInfo.logicalShape=t,r}function eW(e,t){return t.map(t=>e[t]).join(", ")}function eU(e,t,r){let a,n,i,o=[],s=[],l=null,u=null;for(let a of(u=e.getUniformLocation(r,"NAN",!1),1===(0,f.env)().getNumber("WEBGL_VERSION")&&(l=e.getUniformLocation(r,"INFINITY",!1)),t.variableNames)){let n={name:a,uniform:e.getUniformLocation(r,a,!1),offset:e.getUniformLocation(r,`offset${a}`,!1)};t.enableShapeUniforms&&(n.shape=e.getUniformLocation(r,`${a}Shape`,!1),n.texShape=e.getUniformLocation(r,`${a}TexShape`,!1)),o.push(n)}if(t.enableShapeUniforms&&(a=e.getUniformLocation(r,"outShape",!1),i=e.getUniformLocation(r,"outShapeStrides",!1),n=e.getUniformLocation(r,"outTexShape",!1)),t.customUniforms)for(let a of t.customUniforms)s.push(e.getUniformLocation(r,a.name,!1));return{variablesLocations:o,customUniformLocations:s,infLoc:l,nanLoc:u,outShapeLocation:a,outShapeStridesLocation:i,outTexShapeLocation:n}}function eG(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,r)=>{let a=e.logicalShape,n=t[r],i=n.shape;if(!x.util.arraysEqual(a,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${a} and ${i} must match`);if(e.isUniform&&n.isUniform)return;let o=e.texShape,s=n.isUniform?null:n.texData.texShape;if(!x.util.arraysEqual(o,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${s} must match`)})}function eM(e){return(0,f.env)().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}class ez{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=l.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=eI();this.outputShape=e,this.enableShapeUniforms=eM(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?eT(["r","c","d"],e):eR(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}class eX{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=l.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=eI();this.outputShape=e,this.enableShapeUniforms=eM(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?eT(["r","c","d"],e):eR(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}class eH{constructor(e){this.variableNames=["A"],this.outTexUsage=u.DOWNLOAD;const t=eI();this.outputShape=e,this.userCode=`
      ${eE}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}class eq{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=u.DOWNLOAD;const t=eI();this.outputShape=e,this.userCode=`
      ${eE}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}let ej={R:0,G:1,B:2,A:3};class eK{constructor(e,t=!1,r="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const a=eI();this.outputShape=e,this.enableShapeUniforms=eM(this.outputShape.length);let n="result";t&&(n="floor(result * 255. + 0.5)");let i="";for(let e=0;e<r.length;e++){const t=r[e];i+=`
          if(offset == ${e}) {
            result = values[${ej[t]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?eS():ew(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${r.length});

        flatIndex = idiv(flatIndex, ${r.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${a.texture2D}(A, uv);
          ${i}
        }
        ${a.output} = vec4(${n}, 0., 0., 0.);
      }
    `}}class eY{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=eI();this.outputShape=e,this.enableShapeUniforms=eM(this.outputShape.length);let a="",n="result";t&&(n="floor(result * 255. + 0.5)");for(let t=0;t<=1;t++)for(let n=0;n<=1;n++){const i=2*t+n;a+=`
          localCoords = coords;
          if(localCoords[2] + ${n} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${n};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${r.texture2D}(A, uv);

            if (offset == 0) {
              result[${i}] = values[0];
            } else if (offset == 1) {
              result[${i}] = values[1];
            } else if (offset == 2) {
              result[${i}] = values[2];
            } else {
              result[${i}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?eS():ew(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${a}

          ${r.output} = ${n};
        }
    `}}function eQ(e){let t=eI();return S(e,`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function eZ(e){return _(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function eJ(e){return D(e,new Uint16Array([0,1,2,2,1,3]))}function e0(e,t,r,a,n,i){B(t,r);let o=L(e),s=e.TEXTURE_2D;return I(e,()=>e.bindTexture(s,o)),I(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),I(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),I(e,()=>e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)),I(e,()=>e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)),1===(0,f.env)().getNumber("WEBGL_VERSION")?I(e,()=>e.texImage2D(s,0,a,t,r,0,n,i,null)):I(e,()=>e.texStorage2D(s,1,a,t,r)),I(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:o,texShape:[r,t]}}function e1(e){return e.internalFormatFloat}function e2(e,t,r,a){let[n,i]=[r,t];return e0(e,n,i,e1(a),a.textureFormatFloat,e.FLOAT)}function e4(e){return e.internalFormatHalfFloat}function e3(e,t,r,a){let[n,i]=[r,t];return e0(e,n,i,e4(a),a.textureFormatFloat,a.textureTypeHalfFloat)}function e5(e){return e.downloadTextureFormat}function e6(e,t,r,a){let[n,i]=[r,t];return e0(e,n,i,e5(a),e.RGBA,e.UNSIGNED_BYTE)}function e8(e){return e.internalFormatPackedFloat}function e7(e,t,r,a){let[n,i]=$(t,r);return e0(e,n,i,e8(a),e.RGBA,e.FLOAT)}function e9(e){return e.internalFormatPackedHalfFloat}function te(e,t,r,a){let[n,i]=$(t,r);return e0(e,n,i,e9(a),e.RGBA,a.textureTypeHalfFloat)}function tt(e,t,r){return I(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),W(e,t,"clipSpacePos",r,3,20,0)&&W(e,t,"uv",r,2,20,12)}function tr(e,t,r,a,n,i){let o,s,l;I(e,()=>e.bindTexture(e.TEXTURE_2D,t)),n instanceof Uint8Array?(o=new Uint8Array(r*a*4),s=e.UNSIGNED_BYTE,l=e.RGBA):(o=new Float32Array(r*a*4),s=e.FLOAT,l=i.internalFormatPackedFloat),o.set(n),2===(0,f.env)().getNumber("WEBGL_VERSION")?I(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r,a,e.RGBA,s,o)):I(e,()=>e.texImage2D(e.TEXTURE_2D,0,l,r,a,0,e.RGBA,s,o)),I(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function ta(e,t,r){I(e,()=>e.bindTexture(e.TEXTURE_2D,t)),r.data instanceof Uint8Array?2===(0,f.env)().getNumber("WEBGL_VERSION")?I(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,e.RGBA,e.UNSIGNED_BYTE,r.data)):I(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data)):2===(0,f.env)().getNumber("WEBGL_VERSION")?I(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,r)):I(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)),I(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function tn(e,t,r,a){let n=e.createBuffer();I(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,n));let i=16*t*r;return I(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,i,e.STREAM_READ)),I(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,0)),I(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),n}function ti(e,t,r){let a=new Float32Array(r);return e.bindBuffer(e.PIXEL_PACK_BUFFER,t),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,a),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),a}function to(e,t,r,a){let[n,i]=[r,t],o=new Uint8Array(t*r*4);return I(e,()=>e.readPixels(0,0,n,i,a.downloadTextureFormat,e.UNSIGNED_BYTE,o)),new Float32Array(o.buffer)}function ts(e,t,r,a,n,i,o,s){let l=new Float32Array(function(e,t){let[r,a]=$(e,t);return r*a*4}(i,o));return e.bindBuffer(e.PIXEL_PACK_BUFFER,t),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,l),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),l}function tl(e,t,r){let a=new Float32Array(t*r*4);return I(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,a)),a}e.s(["bindVertexProgramAttributeStreams",()=>tt,"createBufferFromOutputTexture",()=>tn,"createFloat16MatrixTexture",()=>e3,"createFloat16PackedMatrixTexture",()=>te,"createFloat32MatrixTexture",()=>e2,"createIndexBuffer",()=>eJ,"createPackedMatrixTexture",()=>e7,"createUnsignedBytesMatrixTexture",()=>e6,"createVertexBuffer",()=>eZ,"createVertexShader",()=>eQ,"downloadByteEncodedFloatMatrixFromOutputTexture",()=>to,"downloadFloat32MatrixFromBuffer",()=>ti,"downloadMatrixFromPackedOutputTexture",()=>tl,"downloadPackedMatrixFromBuffer",()=>ts,"getInternalFormatForFloat16MatrixTexture",()=>e4,"getInternalFormatForFloat16PackedMatrixTexture",()=>e9,"getInternalFormatForFloat32MatrixTexture",()=>e1,"getInternalFormatForPackedMatrixTexture",()=>e8,"getInternalFormatForUnsignedBytesMatrixTexture",()=>e5,"uploadDenseMatrixToTexture",()=>tr,"uploadPixelDataToTexture",()=>ta],81192);class tu{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const t=(0,f.env)().getNumber("WEBGL_VERSION");if(null!=e?(this.gl=e,!function(e,t){m[e]=t}(t,e)):this.gl=C(t),e=this.gl,2===(0,f.env)().getNumber("WEBGL_VERSION")){const t=e;this.createVertexArray=()=>I(t,()=>t.createVertexArray()),this.bindVertexArray=e=>I(t,()=>t.bindVertexArray(e)),this.deleteVertexArray=e=>I(t,()=>t.deleteVertexArray(e)),this.getVertexArray=()=>I(t,()=>t.getParameter(t.VERTEX_ARRAY_BINDING))}else if(null!=e){const t=e.getExtension("OES_vertex_array_object");if(null==t)throw Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>I(e,()=>t.createVertexArrayOES()),this.bindVertexArray=r=>I(e,()=>t.bindVertexArrayOES(r)),this.deleteVertexArray=r=>I(e,()=>t.deleteVertexArrayOES(r)),this.getVertexArray=()=>I(e,()=>e.getParameter(t.VERTEX_ARRAY_BINDING_OES))}let r="WEBGL_color_buffer_float";const a="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),1===(0,f.env)().getNumber("WEBGL_VERSION")){const e="OES_texture_half_float";if(this.textureFloatExtension=w(this.gl,"OES_texture_float"),eu(this.gl,e))this.textureHalfFloatExtension=w(this.gl,e);else if((0,f.env)().get("WEBGL_FORCE_F16_TEXTURES"))throw Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),eu(this.gl,a))this.colorBufferHalfFloatExtension=w(this.gl,a);else if((0,f.env)().get("WEBGL_FORCE_F16_TEXTURES"))throw Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",eu(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else if(eu(this.gl,a))this.colorBufferHalfFloatExtension=this.gl.getExtension(a);else throw Error("GL context does not support color renderable floats");this.vertexBuffer=eZ(this.gl),this.indexBuffer=eJ(this.gl),this.framebuffer=V(this.gl),this.textureConfig=y(this.gl,this.textureHalfFloatExtension)}get debug(){return(0,f.env)().getBool("DEBUG")}dispose(){if(this.disposed)return;null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let e=this.gl;I(e,()=>e.finish()),I(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),I(e,()=>e.deleteFramebuffer(this.framebuffer)),I(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),I(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),I(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),e2(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),e3(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),e6(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),ta(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,r,a){this.throwIfDisposed(),tr(this.gl,e,t,r,a,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),te(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),e7(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(j(this.gl,this.framebuffer),this.outputTexture=null),I(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,r){return this.downloadMatrixDriver(e,()=>to(this.gl,t,r,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,r,a,n,i){return ts(this.gl,e,t,r,a,n,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return ti(this.gl,e,t)}createBufferFromTexture(e,t,r){this.bindTextureToFrameBuffer(e);let a=tn(this.gl,t,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),a}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,r;if((0,f.env)().getBool("WEBGL_FENCE_API_ENABLED")){let a=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),r=()=>{let t=e.clientWaitSync(a,0,0);return t===e.ALREADY_SIGNALED||t===e.CONDITION_SATISFIED},t=a}else(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),r=()=>this.isQueryAvailable(t,(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):r=()=>!0;return{query:t,isFencePassed:r}}downloadMatrixFromPackedTexture(e,t,r){return this.downloadMatrixDriver(e,()=>tl(this.gl,t,r))}createProgram(e){this.throwIfDisposed();let t=this.gl;null==this.vertexShader&&(this.vertexShader=eQ(t));let r=A(t);I(t,()=>t.attachShader(r,this.vertexShader)),I(t,()=>t.attachShader(r,e)),O(t,r);let a=Object.assign(r,{vao:this.createVertexArray()});return this.debug&&F(t,a),a}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);let t=this.gl;I(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),tt(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&(I(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,null!=this.program&&this.debug&&F(this.gl,this.program),I(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,r=!0){return(this.throwIfDisposed(),r)?M(this.gl,e,t):z(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),I(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,r){this.throwIfDisposed(),this.throwIfNoProgram(),X(this.gl,e,t,r)}setOutputMatrixTexture(e,t,r){this.setOutputMatrixTextureDriver(e,r,t)}setOutputPackedMatrixTexture(e,t,r){this.throwIfDisposed();let[a,n]=$(t,r);this.setOutputMatrixTextureDriver(e,a,n)}setOutputMatrixWriteRegion(e,t,r,a){this.setOutputMatrixWriteRegionDriver(r,e,a,t)}setOutputPackedMatrixWriteRegion(e,t,r,a){throw Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){null!=this.program&&F(this.gl,this.program),K(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;this.debug&&(console.assert(this.getVertexArray()===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()),I(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),I(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=w(this.gl,2===(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(2===(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),r=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,r),r}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(2===(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await x.util.repeatedTry(()=>this.disposed||this.isQueryAvailable(e,(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(0===t)return null;if(2===t){let t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}{let t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(0===t)return!0;if(2===t){let t=this.gl,r=this.getQueryTimerExtensionWebGL2(),a=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),a&&!this.disjoint}{let t=this.getQueryTimerExtensionWebGL1(),r=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(t.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=function(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){let r;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||("setTimeoutCustom"in(0,f.env)().platform&&(r=(0,f.env)().platform.setTimeoutCustom.bind((0,f.env)().platform)),x.util.repeatedTry(()=>(this.pollItems(),0===this.itemsToPoll.length),()=>0,null,r))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),q(this.gl,e,this.framebuffer),this.debug&&K(this.gl)}unbindTextureToFrameBuffer(){null!=this.outputTexture?(q(this.gl,this.outputTexture,this.framebuffer),this.debug&&K(this.gl)):j(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let r=t();return this.unbindTextureToFrameBuffer(),r}setOutputMatrixTextureDriver(e,t,r){this.throwIfDisposed();let a=this.gl;q(a,e,this.framebuffer),this.debug&&K(a),this.outputTexture=e,I(a,()=>a.viewport(0,0,t,r)),I(a,()=>a.scissor(0,0,t,r))}setOutputMatrixWriteRegionDriver(e,t,r,a){this.throwIfDisposed(),I(this.gl,()=>this.gl.scissor(e,t,r,a))}throwIfDisposed(){if(this.disposed)throw Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(null==this.program)throw Error("No GPU program is currently set.")}}e.s([],34723),e.i(34723);var td=e.i(73430);function tc(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&x.util.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}function tp(e){let t=new Float32Array(e.length);for(let r=0;r<e.length;++r)t[r]=Math.abs(e[r]);return t}td.Abs;var eg=eg;function th(e){return(t,r,a,n,i)=>{let o=eg.assertAndGetBroadcastShape(t,r),s=o.length,l=x.util.computeStrides(o),u=x.util.sizeFromShape(o),d=x.util.getTypedArrayFromDType(i,u),c=t.length,p=r.length,h=x.util.computeStrides(t),f=x.util.computeStrides(r),m=eg.getBroadcastDims(t,o),g=eg.getBroadcastDims(r,o);if(m.length+g.length===0)for(let t=0;t<d.length;++t)d[t]=e(a[t%a.length],n[t%n.length]);else for(let t=0;t<d.length;++t){let r=x.util.indexToLoc(t,s,l),i=r.slice(-c);m.forEach(e=>i[e]=0);let o=x.util.locToIndex(i,c,h),u=r.slice(-p);g.forEach(e=>u[e]=0);let v=x.util.locToIndex(u,p,f);d[t]=e(a[o],n[v])}return[d,o]}}var eg=eg;function tf(e){let{inputs:t,backend:r}=e,{real:a,imag:n}=t,i=r.data.get(a.dataId).values,o=r.data.get(n.dataId).values,s=r.makeTensorInfo(a.shape,"complex64");return r.data.get(s.dataId).complexTensorInfos={real:r.makeTensorInfo(a.shape,"float32",i),imag:r.makeTensorInfo(n.shape,"float32",o)},s}function tx(e){let{inputs:t,backend:r}=e,{x:a}=t;return r.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}function tm(e,t,r,a){if("int32"===a)return[t,"int32",Int32Array.from(e)];if("bool"===a){let a=x.util.toTypedArray([0],r),[n,i]=th((e,t)=>+(e!==t))(t,[],e,a,"bool");return[i,"bool",n]}throw Error(`Error in Cast: failed to cast ${r} to ${a}`)}function tg(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{dtype:i}=a;if("complex64"===i){if("complex64"===n.dtype)return tx({inputs:{x:n},backend:r});let e=function e(t,r,a="float32"){if("complex64"===a)return tf({inputs:{real:e(t,r,"float32"),imag:e(t,r,"float32")},backend:t});let n=x.util.makeZerosTypedArray(x.util.sizeFromShape(r),a);return t.makeTensorInfo(r,a,n)}(r,n.shape,n.dtype),t=tg({inputs:{x:n},backend:r,attrs:{dtype:"float32"}}),a=tf({inputs:{real:t,imag:e},backend:r});return r.disposeIntermediateTensorInfo(e),r.disposeIntermediateTensorInfo(t),a}if("complex64"===n.dtype){let e=function(e){let{inputs:t,backend:r}=e,{input:a}=t,n=r.data.get(a.dataId).complexTensorInfos.real,i=r.data.get(n.dataId).values;return r.makeTensorInfo(n.shape,n.dtype,i)}({inputs:{input:n},backend:r}),t=tg({inputs:{x:e},backend:r,attrs:{dtype:i}});return r.disposeIntermediateTensorInfo(e),t}if(!x.util.hasEncodingLoss(n.dtype,i)){let e=tx({inputs:{x:n},backend:r});return{dataId:e.dataId,shape:e.shape,dtype:i}}let[o,s,l]=tm(r.data.get(n.dataId).values,n.shape,n.dtype,i);return r.makeTensorInfo(o,s,l)}function tv(e,t,r,a){return null==r?({inputs:r,backend:n})=>{let{a:i,b:o}=r;tc([i,o],e);let s=n.data.get(i.dataId).values,l=n.data.get(o.dataId).values,u="string"===i.dtype?eg.fromUint8ToStringArray(s):s,d="string"===i.dtype?eg.fromUint8ToStringArray(l):l,c=a||i.dtype,[p,h]=t(i.shape,o.shape,u,d,c);return n.makeTensorInfo(h,c,p)}:({inputs:e,backend:n})=>{let{a:i,b:o}=e;if("complex64"===i.dtype||"complex64"===o.dtype){let e=tg({inputs:{x:i},backend:n,attrs:{dtype:"complex64"}}),t=n.data.get(e.dataId),a=t.complexTensorInfos.real,s=t.complexTensorInfos.imag,l=n.data.get(a.dataId).values,u=n.data.get(s.dataId).values,d=tg({inputs:{x:o},backend:n,attrs:{dtype:"complex64"}}),c=n.data.get(d.dataId),p=c.complexTensorInfos.real,h=c.complexTensorInfos.imag,f=n.data.get(p.dataId).values,x=n.data.get(h.dataId).values,[m,g,v]=r(i.shape,o.shape,l,u,f,x),C=n.makeTensorInfo(v,"float32",m),b=n.makeTensorInfo(v,"float32",g),$=tf({inputs:{real:C,imag:b},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(C),n.disposeIntermediateTensorInfo(b),$}{let e=n.data.get(i.dataId).values,r=n.data.get(o.dataId).values,s=a||i.dtype,[l,u]=t(i.shape,o.shape,e,r,s);return n.makeTensorInfo(u,s,l)}}}function tC(e){return(t,r,a,n,i,o)=>{let s=eg.assertAndGetBroadcastShape(t,r),l=x.util.sizeFromShape(s),u=s.length,d=x.util.computeStrides(s),c=x.util.getTypedArrayFromDType("float32",l),p=x.util.getTypedArrayFromDType("float32",l),h=eg.getBroadcastDims(t,s),f=eg.getBroadcastDims(r,s),m=eg.mergeRealAndImagArrays(a,n),g=eg.mergeRealAndImagArrays(i,o),v=t.length,C=x.util.computeStrides(t),b=r.length,$=x.util.computeStrides(r);if(h.length+f.length===0)for(let t=0;t<c.length;t++){let r=t%m.length,a=t%g.length,n=e(m[2*r],m[2*r+1],g[2*a],g[2*a+1]);c[t]=n.real,p[t]=n.imag}else for(let t=0;t<c.length;t++){let r=x.util.indexToLoc(t,u,d),a=r.slice(-v);h.forEach(e=>a[e]=0);let n=x.util.locToIndex(a,v,C),i=r.slice(-b);f.forEach(e=>i[e]=0);let o=x.util.locToIndex(i,b,$),s=e(m[2*n],m[2*n+1],g[2*o],g[2*o+1]);c[t]=s.real,p[t]=s.imag}return[c,p,s]}}td.Complex,td.Identity,td.Real,td.Cast;let tb=th((e,t)=>e+t),t$=tC((e,t,r,a)=>({real:e+r,imag:t+a}));function ty(e,t,r,a,n){let i=x.util.sizeFromShape(a),o=x.util.makeZerosTypedArray(n,r);for(let r=0;r<e.length;r++){let a=e[r];if(a<0)throw Error("Input x must be non-negative!");a>=n||(i>0?o[a]+=t[r]:o[a]+=1)}return o}function tI(e,t,r,a=!1){let n=e.shape[0],i=e.shape[1],o=(0,ev.buffer)([n,r],t.dtype);for(let s=0;s<n;s++)for(let n=0;n<i;n++){let i=e.get(s,n);if(i<0)throw Error("Input x must be non-negative!");i>=r||(a?o.set(1,s,i):t.size>0?o.set(o.get(s,i)+t.get(s,n),s,i):o.set(o.get(s,i)+1,s,i))}return o}tv(td.Add,tb,t$),td.Add;let tR=th((e,t)=>e&t);function tT(e){return(t,r,a)=>{let n=x.util.getArrayFromDType(r,t.length);for(let r=0;r<t.length;++r)n[r]=e(t[r],a);return n}}tv(td.BitwiseAnd,tR),td.BitwiseAnd;var eg=eg;function tw(e,t,r){return({inputs:a,attrs:n,backend:i})=>{let o,{x:s}=a;tc(s,e);let l=i.data.get(s.dataId).values;if("string"===s.dtype){if(!Array.isArray(l))throw Error("String tensor's value was not an instance of Array");o=eg.fromUint8ToStringArray(l)}else o=l;let u=r||s.dtype,d=t(o,u,n);return i.makeTensorInfo(s.shape,u,d)}}let tS=tT(e=>Math.ceil(e));tw(td.Ceil,tS),td.Ceil;var eg=eg;function tE(e,t,r,a){let n=x.util.getArrayFromDType(r,x.util.sizeFromShape(t));if(a&&"string"!==r){let t=0;e.forEach(e=>{let r=x.util.sizeFromShape(e.shape);n.set(e.vals,t),t+=r})}else{let a=0;e.forEach(e=>{let i="string"===r?eg.fromUint8ToStringArray(e.vals):e.vals,o=0;for(let r=0;r<e.shape[0];++r){let s=r*t[1]+a;for(let t=0;t<e.shape[1];++t)n[s+t]=i[o++]}a+=e.shape[1]})}return n}let tN=th((e,t)=>+(e===t));tv(td.Equal,tN,null,"bool"),td.Equal;let tk=tT(e=>Math.exp(e));tw(td.Exp,tk,"float32"),td.Exp;let tA=tT(e=>Math.expm1(e));tw(td.Expm1,tA),td.Expm1;let tO=tT(e=>Math.floor(e));tw(td.Floor,tO),td.Floor;let tF=th((e,t)=>Math.floor(e/t));function t_(e,t,r,a,n,i,o,s,l){let u=(0,ev.buffer)([a,i],r);for(let r=0;r<a;r++){let a=[],d=0;for(let t=0;t<n;t++){let i=e[r*n+t];d+=i*o[t],a.push(i)}if(d<0||d>=l/i)throw Error(`Invalid indices: ${a} does not index into ${s}`);for(let e=0;e<i;e++)u.values[r*i+e]=t.get(...t.indexToLoc(d*i+e))}return u}function tD(e,t,r){let a=(0,ev.buffer)(r,e.dtype);for(let r=0;r<a.size;++r){let n=a.indexToLoc(r).slice(),i=n[0],o=n[2],s=t.locToIndex([i,o]);n[2]=t.values[s];let l=e.locToIndex(n);0<=l&&l<e.values.length&&(a.values[r]=e.values[l])}return a}tv(td.FloorDiv,tF,null,"int32"),td.FloorDiv;let tP=th((e,t)=>+(e>t));tv(td.Greater,tP,null,"bool"),td.Greater;let tL=th((e,t)=>+(e>=t));tv(td.GreaterEqual,tL,null,"bool"),td.GreaterEqual;let tB=th((e,t)=>+(e<t));tv(td.Less,tB,null,"bool"),td.Less;let tV=th((e,t)=>+(e<=t));function tW(e,t,r){let a=(t-e)/(r-1),n=x.util.makeZerosTypedArray(r,"float32");n[0]=e;for(let e=1;e<n.length;e++)n[e]=n[e-1]+a;return n}tv(td.LessEqual,tV,null,"bool"),td.LessEqual;let tU=tT(e=>Math.log(e));function tG(e,t,r,a){let n=x.util.getTypedArrayFromDType(a,x.util.sizeFromShape(r));for(let r=0;r<n.length;++r){let a=r*t,i=e[a];for(let r=0;r<t;++r){let t=e[a+r];(Number.isNaN(t)||t>i)&&(i=t)}n[r]=i}return n}tw(td.Log,tU),td.Log;let tM=th((e,t)=>Math.max(e,t));tv(td.Maximum,tM),td.Maximum;let tz=th((e,t)=>Math.min(e,t));tv(td.Minimum,tz),td.Minimum;let tX=th((e,t)=>e*t),tH=tC((e,t,r,a)=>({real:e*r-t*a,imag:e*a+t*r}));function tq(e,t,r){return tX([],t,x.util.createScalarValue(-1,r),e,r)}tv(td.Multiply,tX,tH),td.Multiply,td.Neg;let tj=th((e,t)=>+(e!==t));tv(td.NotEqual,tj,null,"bool"),td.NotEqual;var eg=eg,tK=e.i(95908);function tY(e,t,r,a,n){let i=t.length,o=x.util.sizeFromShape(t),s=x.util.computeStrides(t),l=x.util.computeStrides(n),u=x.util.getTypedArrayFromDType(r,x.util.sizeFromShape(n));for(let t=0;t<o;++t){let r=x.util.indexToLoc(t,i,s),n=Array(r.length);for(let e=0;e<n.length;e++)n[e]=r[a[e]];u[x.util.locToIndex(n,i,l)]=e[t]}return u}function tQ(e,t,r,a){let[n,i]=eg.computeOutAndReduceShapes(e,a),o=(0,tK.upcastType)(t,"int32"),s=x.util.makeZerosTypedArray(x.util.sizeFromShape(n),o),l=x.util.sizeFromShape(i);for(let e=0;e<s.length;++e){let t=e*l,a=1;for(let e=0;e<l;++e)a*=r[t+e];s[e]=a}return{outVals:s,outShape:n,outDtype:o}}function tZ(e,t){let r=e.slice(0,t);for(;r.length<t;)r.push(1);for(let a=t;a<e.length;a++)r[t-1]*=e[a];return r}function tJ(e,t,r,a,n,i,o,s){let l,u,d,c;if(0===e.length)throw Error("paramsNestedSplits must be non empty");if(0===t[0].length)throw Error("Split tensors must not be scalars");let p=t[0][0]-1;if(i.forEach((e,t)=>{if(e<0||e>=p){let r=x.util.indexToLoc(t,o.length,x.util.computeStrides(o)).join(",");throw Error(`indices[${r}] = ${e} is not in [0, ${p})`)}}),0===a.length)throw Error("params.rank must be nonzero");let{outSplits:h,valueSlices:f,numValues:m}=function(e,t,r,a){let n=[],i=0,o=Array(t.length-1+r.length).fill(null).map(()=>[0]);for(let e=0;e<r.length;++e){let t=r[e],n=e===r.length-1?a:r[e+1].length;if(0===t.length)throw Error("Ragged splits may not be empty");if(t[0]<0)throw Error("Ragged splits must be non-negative");if(t[t.length-1]>n)throw Error("Ragged splits must not point past values");for(let e=1;e<t.length;++e)if(t[e-1]>t[e])throw Error("Ragged splits must be sorted in ascending order")}let s=1;for(let e=0;e<t.length-1;++e){s*=t[e];let r=t[e+1];for(let t=1;t<s+1;++t)o[e].push(t*r)}for(let a=0;a<e.length;++a){let s=e[a],l=e[a]+1;for(let e=0;e<r.length;++e){let a=r[e],n=e+t.length-1;if(n>=0){let e=o[n],t=e[e.length-1]-a[s];for(let e=s;e<l;++e)o[n].push(a[e+1]+t)}s=a[s],l=a[l]}l!==s&&(n.push([s,l]),i+=l-s)}return{outSplits:o,valueSlices:n,numValues:i}}(i,o,e,a[0]),g=function(e){let t=[];for(let r=0;r<e.length;++r){let a=e[r].length,n=x.util.getArrayFromDType("int32",a);t.push(n),e[r].forEach((e,t)=>n[t]=e)}return t}(h),v=((l=a.slice())[0]=m,u=x.util.getArrayFromDType(n,x.util.sizeFromShape(l)),c=0===(d=r.length)?0:d/a[0],!function(e,t,r,a,n,i){let o=tZ(t,2)[1],s=tZ(i,2)[1],l=0;for(let t of r)for(let r=t[0];r<t[1];++r){for(let t=0;t<a;++t)n[l*s+t]=e[r*o+t];++l}}(r,a,f,c,u,l),[u,l]);return[g,v[0],v[1]]}function t0(e,t,r,a,n,i,o){if(t.length>1)throw Error("starts must be a scalar or vector");if(n.length>1)throw Error("limits must be a scalar or vector");if(o.length>1)throw Error("deltas must be a scalar or vector");let s=0===t.length,l=0===n.length,u=0===o.length,d=[];s||d.push(t[0]),l||d.push(n[0]),u||d.push(o[0]);for(let e=1;e<d.length;++e)if(d[e]!==d[e-1])throw Error("starts, limits, and deltas must have the same shape");let c=0===d.length?1:d[0],p=x.util.getArrayFromDType("int32",c+1);p[0]=0;for(let t=0;t<c;++t){let r,n=s?e[0]:e[t],o=l?a[0]:a[t],d=u?i[0]:i[t];if(0===d)throw Error("Requires delta != 0");if(d>0&&o<n||d<0&&o>n)r=0;else if((r=Math.ceil(Math.abs((o-n)/d)))>0x7fffffff)throw Error("Requires ((limit - start) / delta) <= 2147483647");p[t+1]=p[t]+r}let h=p[c],f=x.util.getArrayFromDType(r,h),m=0;for(let t=0;t<c;++t){let r=p[t+1]-p[t],a=s?e[0]:e[t],n=u?i[0]:i[t];for(let e=0;e<r;++e)f[m++]=a,a+=n}return[p,f]}td.Transpose,td.Prod;var eg=eg,t1=e.i(37468),t2=e.i(23496),t4=eg.RowPartitionType;class t3{constructor(e,t,r,a,n,i,o,s,l,u){this.shape=e,this.shapeShape=t,this.values=r,this.valuesShape=a,this.valuesDType=n,this.defaultValue=i,this.defaultValueShape=o,this.rowPartitionValues=s,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=eg.getRowPartitionTypesHelper(u),this.raggedRank=eg.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===t4.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===t4.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){let t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case t4.VALUE_ROWIDS:return t3.getMaxWidthValueRowID(t);case t4.ROW_SPLITS:return t3.getMaxWidthRowSplit(t);default:throw Error(`Cannot handle partition type ${t4[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(0===t||1===t)return 0;let r=0;for(let a=0;a<t-1;++a){let t=e[a+1]-e[a];t>r&&(r=t)}return r}static getMaxWidthValueRowID(e){let t=e.length;if(0===t)return 0;let r=0,a=e[0],n=0;for(let i=1;i<t;++i){let t=e[i];t!==a&&(a=t,n=Math.max(i-r,n),r=i)}return Math.max(t-r,n)}tensorShapeFromTensor(e,t,r=!0){if(0===t.length){if(-1===e[0])return[];throw Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return t6(e,r)}calculateOutputSize(e){let t=this.valuesShape,r=this.defaultValueShape;eg.validateDefaultValueShape(r,t);let a=this.tensorShapeFromTensor(this.shape,this.shapeShape),n=eg.combineRaggedTensorToTensorShapes(this.raggedRank,a,t);n[0]<0&&(n[0]=e);for(let e=1;e<=this.raggedRank;++e)n[e]<0&&(n[e]=this.getMaxWidth(e));return n}calculateFirstParentOutputIndex(e,t,r){let a=Math.min(e,r),n=[],i=0;for(let e=0;e<a;++e,i+=t)n.push(i);for(let t=a;t<e;++t)n.push(-1);return x.util.assert(n.length===e,()=>"Final length of result must be equal to firstDimension."),n}calculateOutputIndexRowSplit(e,t,r,a){let n=e.length,i=[];for(let o=0;o<n-1;++o){let n=e[o+1]-e[o],s=Math.min(a,n),l=t[o];-1===l&&(s=0);for(let e=0;e<s;++e)i.push(l),l+=r;for(let e=0;e<n-s;++e)i.push(-1)}if(n>0&&i.length!==e[n-1])throw Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(e,t,r,a){let n=e.length,i=[];if(0===n)return[];let o=0,s=e[0];if(s>=t.length)throw Error(`Got currentValueRowId=${s}, which is not less than ${t.length}`);let l=t[s];i.push(l);for(let u=1;u<n;++u){let n=e[u];if(n===s)l>=0&&(++o<a?l+=r:l=-1);else{if(o=0,s=n,n>=t.length)throw Error(`Got nextValueRowId=${n} which is not less than ${t.length}`);l=t[n]}i.push(l)}if(i.length!==e.length)throw Error("Invalid row ids.");return i}calculateOutputIndex(e,t,r,a){let n=this.getRowPartitionTensor(e),i=this.getRowPartitionTypeByDimension(e);switch(i){case t4.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(n,t,r,a);case t4.ROW_SPLITS:if(n.length-1>t.length)throw Error(`Row partition size is greater than output size: ${n.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(n,t,r,a);default:throw Error(`Unsupported partition type: ${t4[i]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(0===this.rowPartitionTypes.length)throw Error("No row_partition_types given.");let t=this.rowPartitionTypes[0];switch(t){case t4.FIRST_DIM_SIZE:return e[0];case t4.VALUE_ROWIDS:throw Error("Cannot handle VALUE_ROWIDS in first dimension.");case t4.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${t4[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw Error("Invalid first partition input. Tensor requires at least one element.");let e=this.getFirstDimensionSize(),t=this.calculateOutputSize(e),r=Array(this.raggedRank+1);r[r.length-1]=1;for(let e=r.length-2;e>=0;--e)r[e]=r[e+1]*t[e+1];let a=t6(t,!1),n=x.util.getArrayFromDType(this.valuesDType,x.util.sizeFromShape(a));if(r[0]*t[0]>0){let i=this.calculateFirstParentOutputIndex(e,r[0],t[0]);for(let e=1;e<=this.raggedRank;++e)i=this.calculateOutputIndex(e-1,i,r[e],t[e]);this.setOutput(this.raggedRank,i,n,a)}return[a,n]}setOutput(e,t,r,a){if(0===r.length)return;let n=this.values,i=a.slice();i=i.slice(e+1);let o=x.util.sizeFromShape(i),s=t.length,l=this.defaultValue;if(l.length!==o&&1!==l.length){let e=this.defaultValueShape;(0,h.tidy)(()=>{let t=(0,t2.reshape)(l,e);l=(0,t1.broadcastTo)(t,i).dataSync()})}let u=0,d=0,c=0;for(let e=0;e<=s;++e){let a=e<s?t[e]:-1;if(a===c){++c;continue}if(d<c){let e=n.subarray(u*o);t5(r.subarray(d*o),e,(c-d)*o)}if(e>=s&&(a=Math.floor(r.length/o)),a>c)if(1===this.defaultValue.length)r.subarray(c*o,a*o).fill(this.defaultValue[0]),c=a;else for(;a>c;)t5(r.slice(c*o),l,o),++c;a<0?(u=e+1,d=c):(u=e,c=(d=c)+1)}}}function t5(e,t,r){for(let a=0;a<r;a++)e[a]=t[a]}function t6(e,t){let r=[];for(let a of e){if(a<0){if(!t)throw Error(`Dimension ${a} must be >= 0`);if(a<-1)throw Error(`Dimension ${a} must be >= -1`);a=-1}r.push(a)}return r}function t8(e,t,r,a,n,i,o,s,l,u){return new t3(e,t,r,a,n,i,o,s,l,u).compute()}function t7(e,t,r,a){let n=e===t,i=e<t&&r<0,o=t<e&&r>1;if(n||i||o)return x.util.makeZerosTypedArray(0,a);let s=Math.abs(Math.ceil((t-e)/r)),l=x.util.makeZerosTypedArray(s,a);t<e&&1===r&&(r=-1),l[0]=e;for(let e=1;e<l.length;e++)l[e]=l[e-1]+r;return l}let t9=tT(e=>1/Math.sqrt(e));tw(td.Rsqrt,t9),td.Rsqrt;var re=e.i(6766);function rt(e,t,r,a,n,i,o,s,l,u){let d=e.values,c=t.values;if(0===a)return(0,ev.buffer)(r,t.dtype);let p=l instanceof re.TensorBuffer?l:(0,ev.buffer)([a/n,n],t.dtype);"string"==typeof l||"number"==typeof l?p.values.fill(l):"boolean"==typeof l&&p.values.fill(+l);for(let e=0;e<i;e++){let i=[],l=0;for(let t=0;t<o;t++){let r=d[e*o+t];i.push(r),l+=r*s[t]}if(l<0||l>=a/n)throw Error(`Invalid indices: ${i} does not index into ${r}`);for(let r=0;r<n;r++)u?p.values[l*n+r]+=c[e*n+r]:p.values[l*n+r]=0===t.rank?c[0]:c[e*n+r]}return p}let rr=tT(e=>1/(1+Math.exp(-e)));tw(td.Sigmoid,tT(e=>1/(1+Math.exp(-e))),void 0),td.Sigmoid;var eg=eg,ra=e.i(11195),ra=ra;function rn(e,t,r,a,n){let i=ra.isSliceContinous(a,t,r),o=x.util.sizeFromShape(r),s=x.util.computeStrides(a);if(i){let r=ra.computeFlatOffset(t,s);return"string"===n?e.slice(r,r+o):e.subarray(r,r+o)}let l="string"===n?eg.fromUint8ToStringArray(e):e,u=(0,ev.buffer)(a,n,l),d=(0,ev.buffer)(r,n);for(let e=0;e<d.size;++e){let r=d.indexToLoc(e),a=r.map((e,r)=>e+t[r]);d.set(u.get(...a),...r)}return"string"===n?eg.fromStringArrayToUint8(d.values):d.values}td.Slice;var eg=eg;function ri(e,t,r,a,n,i,o){let s=t[0],l=i[0],u=Array(l),d=Array(s),c=t[1];if(0===l){if(0!==s)throw Error(eg.getSparseFillEmptyRowsIndicesDenseShapeMismatch(s));return[x.util.getArrayFromDType(r,0),[0,c],x.util.getArrayFromDType(n,0),u,d]}let p=!0,h=0,f=Array(l).fill(0);for(let t=0;t<s;++t){let r=e[t*c];if(r<0)throw Error(eg.getSparseFillEmptyRowsNegativeIndexErrorMessage(t,r));if(r>=l)throw Error(eg.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(t,r,l));++f[r],p=p&&r>=h,h=r}let m=!0;for(let e=0;e<l;++e){let t=0===f[e];u[e]=t,m=m&&!t,f[e]=Math.max(f[e],1),e>0&&(f[e]+=f[e-1])}if(m&&p){for(let e=0;e<s;++e)d[e]=e;return[e,[s,c],a,u,d]}{let t=f[l-1],i=x.util.getArrayFromDType(r,t*c),p=x.util.getArrayFromDType(n,t),h=Array(l).fill(0);for(let t=0;t<s;++t){let r=e[t*c],n=h[r],o=(0===r?0:f[r-1])+n;h[r]++;for(let r=0;r<c;++r)i[o*c+r]=e[t*c+r];p[o]=a[t],d[t]=o}for(let e=0;e<l;++e)if(0===h[e]){let t=0===e?0:f[e-1];i[t*c+0]=e;for(let e=1;e<c;++e)i[t*c+e]=0;p[t]=o}return[i,[t,c],p,u,d]}}var eg=eg;function ro(e,t,r,a,n){let i=x.util.sizeFromShape(a),o=t[0],s=n.length,l=[],u=1,d=-1;for(let e=0;e<s;++e){let t=n[e];if(-1===t){if(-1!==d)throw Error(eg.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(d,e));d=e,l.push(1)}else{if(t<0)throw Error(eg.getSparseReshapeNegativeOutputDimErrorMessage(e,t));u*=t,l.push(t)}}if(-1!==d){if(u<=0)throw Error(eg.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let e=Math.trunc(i/u);if(u*e!==i)throw Error(eg.getSparseReshapeInputOutputMultipleErrorMessage(a,l));l[d]=e}if(x.util.sizeFromShape(l)!==i)throw Error(eg.getSparseReshapeInputOutputMismatchErrorMessage(a,l));let c=a.length,p=[];if(c>0){p[c-1]=1;for(let e=c-2;e>=0;--e)p[e]=p[e+1]*a[e+1]}let h=[];if(s>0){h[s-1]=1;for(let e=s-2;e>=0;--e)h[e]=h[e+1]*l[e+1]}let f=x.util.getArrayFromDType(r,o*s);for(let t=0;t<o;++t){let r=0;for(let a=0;a<c;++a)r+=e[t*c+a]*p[a];for(let e=0;e<s;++e)f[t*s+e]=Math.trunc(r/h[e]),r%=h[e]}return[f,[o,s],l]}var eg=eg;function rs(e,t,r,a,n,i=!1,o=0){let s=a.length,l=[t[0],e.length/t[0]],u=l[1],d=s>0?n[s-1]+1:0;if(d<0)throw Error(eg.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let c=t.slice();c[0]=d;let p=c.reduce((e,t)=>e*t,1),h=x.util.getArrayFromDType(r,p);if(0===s)return d>0&&h.fill(o),[h,c];if(d<=0)throw Error(eg.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let f=0,m=1,g=0,v=n[0];for(;;){let t=0;if(m<s){if(v===(t=n[m])){++m;continue}if(v>=t)throw Error(eg.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(v<0||v>=d)throw Error(eg.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(v,d));v>g&&h.fill(o,g*u,v*u);for(let t=f;t<m;++t){let r=a[t];if(r<0||r>=l[0])throw Error(eg.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(t,a[t],l[0]));for(let t=0;t<u;t++)h[v*u+t]+=e[r*u+t]}if(i)for(let e=0;e<u;e++)h[v*u+e]/=m-f;if(f=m,++m,g=v+1,v=t,m>s)break}return g<d&&h.fill(o,g*u,d*u),[h,c]}let rl=tT(e=>Math.sqrt(e));tw(td.Sqrt,tT(e=>Math.sqrt(e)),void 0),td.Sqrt;let ru=th((e,t)=>{let r=e-t;return r*r});tv(td.SquaredDifference,ru),td.SquaredDifference;let rd=tT((e,t)=>{let{pattern:r,replaceGlobal:a,rewrite:n}=t;return e.replace(new RegExp(r,a?"g":""),n)});function rc(e,t,r,a){let n=(0,ev.buffer)(e,t.dtype);for(let e=0;e<n.size;e++){let i=n.indexToLoc(e),o=Array(i.length);for(let e=0;e<o.length;e++)o[e]=i[e]*r[e]+a[e];n.set(t.get(...o),...i)}return n}tw(td.StaticRegexReplace,rd),td.StaticRegexReplace;class rp{constructor(e,t,r,a,n,i){this.separator=x.util.encodeString(e),this.nGramWidths=t,this.leftPad=x.util.encodeString(r),this.rightPad=x.util.encodeString(a),this.padWidth=n,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){return Math.max(0,e+2*this.getPadWidth(t)-t+1)}createNGrams(e,t,r,a,n,i){for(let o=0;o<n;++o){let s,l=this.getPadWidth(i),u=Math.max(0,l-o),d=Math.max(0,l-(n-(o+1))),c=i-(u+d),p=t+(u>0?0:o-l);s=0+u*this.leftPad.length;for(let t=0;t<c;++t)s+=e[p+t].length;s+=d*this.rightPad.length,s+=(u+d+c-1)*this.separator.length,r[a+o]=new Uint8Array(s);let h=r[a+o],f=0,x=e=>e.forEach(e=>h[f++]=e);for(let e=0;e<u;++e)x(this.leftPad),x(this.separator);for(let t=0;t<c-1;++t)x(e[p+t]),x(this.separator);if(c>0){x(e[p+c-1]);for(let e=0;e<d;++e)x(this.separator),x(this.rightPad)}else{for(let e=0;e<d-1;++e)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(e,t){let r=e.length,a=t.length;if(a>0){let e=t[0];if(0!==e)throw Error(`First split value must be 0, got ${e}`);for(let n=1;n<a;++n){let a=t[n]>=e;if(!(a=a&&t[n]<=r))throw Error(`Invalid split value ${t[n]}, must be in [${e}, ${r}]`);e=t[n]}if(e!==r)throw Error(`Last split value must be data size. Expected ${r}, got ${e}`)}let n=a-1,i=x.util.getArrayFromDType("int32",a);if(0===r||0===a){let e=Array(r);for(let e=0;e<=n;++e)i[e]=0;return[e,i]}i[0]=0;for(let e=1;e<=n;++e){let r=t[e]-t[e-1],a=0;this.nGramWidths.forEach(e=>{a+=this.getNumNGrams(r,e)}),this.preserveShort&&r>0&&0===a&&(a=1),i[e]=i[e-1]+a}let o=Array(i[n]);for(let r=0;r<n;++r){let a=t[r],n=i[r];if(this.nGramWidths.forEach(i=>{let s=t[r+1]-t[r],l=this.getNumNGrams(s,i);this.createNGrams(e,a,o,n,l,i),n+=l}),this.preserveShort&&n===i[r]){let i=t[r+1]-t[r];if(0===i)continue;let s=i+2*this.padWidth;this.createNGrams(e,a,o,n,1,s)}}return[o,i]}}function rh(e,t,r,a,n,i,o,s){return new rp(r,a,n,i,o,s).compute(e,t)}function rf(e,t,r){let a=e.length,n=[],i=0,o=0,s=Array(a);for(let l=0;l<a;++l){let a=n.length;!function(e,t,r,a){if(!e.length)return;if(0===t.length){for(let t=0;t<e.length;++t)a.push(e.subarray(t,t+1));return}if(1===t.length){let n=t[0],i=e.indexOf(n);for(;-1!==i;){let t=e.subarray(0,i);r&&0===t.length||a.push(t),i=(e=e.subarray(i+1)).indexOf(n)}r&&0===e.length||a.push(e);return}let n=0;for(let i=0;i<e.length+1;i++)if(i===e.length||-1!==t.indexOf(e[i])){let t=e.subarray(n,i);r&&0===t.length||a.push(t),n=i+1}}(e[l],t,r,n);let u=n.length-a;s[l]=u,i+=u,o=Math.max(o,u)}let l=x.util.getArrayFromDType("int32",2*i),u=Array(i),d=[a,o],c=0;for(let e=0;e<a;++e)for(let t=0;t<s[e];++t)l[2*c]=e,l[2*c+1]=t,u[c]=n[c],++c;return[l,u,d]}function rx(e,t){let r=x.util.getArrayFromDType("int32",e.length);for(let a=0;a<e.length;++a)r[a]=x.util.fingerPrint64(e[a]).modulo(t).getLowBitsUnsigned();return r}let rm=th((e,t)=>e-t),rg=tC((e,t,r,a)=>({real:e-r,imag:t-a}));function rv(e,t){let r=Array(e.rank);for(let a=0;a<r.length;a++)r[a]=e.shape[a]*t[a];let a=(0,ev.buffer)(r,e.dtype);for(let t=0;t<a.values.length;++t){let r=a.indexToLoc(t),n=Array(e.rank);for(let t=0;t<n.length;t++)n[t]=r[t]%e.shape[t];let i=e.locToIndex(n);a.values[t]=e.values[i]}return a}tv(td.Sub,rm,rg),td.Sub;let rC=(e,t)=>{let r=t.value-e.value;return 0===r?e.index-t.index:r};function rb(e,t,r,a,n){let i=t[t.length-1],[o,s]=[e.length/i,i],l=x.util.getTypedArrayFromDType(r,o*a),u=x.util.getTypedArrayFromDType("int32",o*a);for(let t=0;t<o;t++){let r=t*s,i=e.subarray(r,r+s),o=Array(i.length);i.forEach((e,t)=>o[t]={value:e,index:t}),a<o.length&&(!function e(t,r,a=0,n=t.length-1){for(;n>a;){if(n-a>600){let i=n-a+1,o=r-a+1,s=Math.log(i),l=.5*Math.exp(2*s/3),u=.5*Math.sqrt(s*l*(i-l)/i)*Math.sign(o-i/2),d=Math.max(a,Math.floor(r-o*l/i+u)),c=Math.min(n,Math.floor(r+(i-o)*l/i+u));e(t,r,d,c)}let i=t[r],o=a,s=n;for(x.util.swap(t,a,r),rC(t[n],i)>0&&x.util.swap(t,a,n);o<s;){for(x.util.swap(t,o,s),o++,s--;0>rC(t[o],i);)o+=1;for(;rC(t[s],i)>0;)s-=1}0===rC(t[a],i)?x.util.swap(t,a,s):(s+=1,x.util.swap(t,s,n)),s<=r&&(a=s+1),r<=s&&(n=s-1)}}(o,a),o=o.slice(0,a)),n&&o.sort(rC);let d=t*a,c=l.subarray(d,d+a),p=u.subarray(d,d+a);for(let e=0;e<a;e++)c[e]=o[e].value,p[e]=o[e].index}let d=t.slice();return d[d.length-1]=a,[(0,ev.buffer)(d,r,l),(0,ev.buffer)(d,"int32",u)]}function r$(e,t,r,a){let n=x.util.parseAxisParam(t,r)[0],i=[1,r[0],1];for(let e=0;e<n;e++)i[0]*=r[e];i[1]=r[n];for(let e=n+1;e<r.length;e++)i[2]*=r[e];let o=new Map,s=new Int32Array(r[n]),l=new re.TensorBuffer(i,a,e),u=[],d=1===i[0]&&1===i[2];for(let t=0;t<r[n];t++){let r;if(d)r=e[t].toString();else{let e=[];for(let r=0;r<i[0];r++)for(let a=0;a<i[2];a++)e.push(l.get(r,t,a));r=e.join(",")}let a=o.get(r);if(null!=a)s[t]=a;else{let e=o.size;o.set(r,e),s[t]=e,u.push(t)}}let c=i.slice();c[1]=o.size;let p=new re.TensorBuffer(c,a);u.forEach((e,t)=>{for(let r=0;r<i[0];r++)for(let a=0;a<i[2];a++)p.set(l.get(r,e,a),r,t,a)});let h=r.slice();return h[n]=c[1],{outputValues:p.values,outputShape:h,indices:s}}e.s(["addImpl",0,tb,"bincountImpl",()=>ty,"bincountReduceImpl",()=>tI,"bitwiseAndImpl",0,tR,"castImpl",()=>tm,"ceilImpl",0,tS,"concatImpl",()=>tE,"equalImpl",0,tN,"expImpl",0,tk,"expm1Impl",0,tA,"floorDivImpl",0,tF,"floorImpl",0,tO,"gatherNdImpl",()=>t_,"gatherV2Impl",()=>tD,"greaterEqualImpl",0,tL,"greaterImpl",0,tP,"lessEqualImpl",0,tV,"lessImpl",0,tB,"linSpaceImpl",()=>tW,"logImpl",0,tU,"maxImpl",()=>tG,"maximumImpl",0,tM,"minimumImpl",0,tz,"multiplyImpl",0,tX,"negImpl",()=>tq,"notEqualImpl",0,tj,"prodImpl",()=>tQ,"raggedGatherImpl",()=>tJ,"raggedRangeImpl",()=>t0,"raggedTensorToTensorImpl",()=>t8,"rangeImpl",()=>t7,"rsqrtImpl",0,t9,"scatterImpl",()=>rt,"sigmoidImpl",0,rr,"simpleAbsImpl",()=>tp,"sliceImpl",()=>rn,"sparseFillEmptyRowsImpl",()=>ri,"sparseReshapeImpl",()=>ro,"sparseSegmentReductionImpl",()=>rs,"sqrtImpl",0,rl,"squaredDifferenceImpl",0,ru,"staticRegexReplaceImpl",0,rd,"stridedSliceImpl",()=>rc,"stringNGramsImpl",()=>rh,"stringSplitImpl",()=>rf,"stringToHashBucketFastImpl",()=>rx,"subImpl",0,rm,"tileImpl",()=>rv,"topKImpl",()=>rb,"transposeImpl",()=>tY,"uniqueImpl",()=>r$],17940);let{addImpl:ry,bincountImpl:rI,bincountReduceImpl:rR,bitwiseAndImpl:rT,castImpl:rw,ceilImpl:rS,concatImpl:rE,equalImpl:rN,expImpl:rk,expm1Impl:rA,floorImpl:rO,gatherNdImpl:rF,gatherV2Impl:r_,greaterImpl:rD,greaterEqualImpl:rP,lessImpl:rL,lessEqualImpl:rB,linSpaceImpl:rV,logImpl:rW,maxImpl:rU,maximumImpl:rG,minimumImpl:rM,multiplyImpl:rz,negImpl:rX,notEqualImpl:rH,prodImpl:rq,raggedGatherImpl:rj,raggedRangeImpl:rK,raggedTensorToTensorImpl:rY,rangeImpl:rQ,rsqrtImpl:rZ,scatterImpl:rJ,sigmoidImpl:r0,simpleAbsImpl:r1,sliceImpl:r2,sparseFillEmptyRowsImpl:r4,sparseReshapeImpl:r3,sparseSegmentReductionImpl:r5,sqrtImpl:r6,staticRegexReplaceImpl:r8,stridedSliceImpl:r7,stringNGramsImpl:r9,stringSplitImpl:ae,stringToHashBucketFastImpl:at,subImpl:ar,tileImpl:aa,topKImpl:an,transposeImpl:ai,uniqueImpl:ao}=e.i(17940);function as(e,t){return["x","y","z","w","u","v"].slice(0,t).map(t=>`${e}.${t}`)}function al(e,t){return 1===t?[e]:as(e,t)}class au{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=eM(this.outputShape.length),0===this.rank)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const e=al("rc",this.rank),t=eL(this.rank),r=this.getOutOfBoundsCondition(e),a=this.getSetup(e),n=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${r}) {
            setOutput(vec4(0));
          } else {
            ${a}

            setOutput(vec4(${n}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let r=0;r<=1;r++)for(let a=0;a<=1;a++){let n=`${0===r?"r":"rp1"}, ${0===a?"c":"cp1"}`;for(let t=2;t<this.rank;t++)n=`${e[e.length-1-t]},`+n;t.push(n)}return t}getOutOfBoundsCondition(e){if(1===this.rank)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let r=this.rank-2;r<this.rank;r++)t+=`${e[r]} >= ${this.enableShapeUniforms?`outShape[${r}]`:this.outputShape[r]}`,r<this.rank-1&&(t+="||");return t}getSetup(e){if(1===this.rank)return"";let t=e.slice(-2),r=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],a=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${r};
      bool rEdge = rp1 >= ${a};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);if(1===this.rank){let e=this.enableShapeUniforms?"outShape":this.outputShape[0];return`getA(rc), (rc + 1 >= ${e} ? 0. : getA(rc + 1)), 0, 0`}return`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}class ad{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=eM(this.outputShape.length);let r="";for(let e=0;e<4;e++){let t="thisRC = rc;";e%2==1&&(t+="thisRC.z += 1;"),e>1&&(t+="thisRC.y += 1;"),r+=`
        ${t}
        ${e>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?"}":""}
      `}this.userCode=`
      ${function(e,t){let r=t?function(e,t,r="index"){let a=function(e,t){let r=e.length,a=e.map(e=>`${t}[${e}]`),n=Array(r-1);n[r-2]=a[r-1];for(let e=r-3;e>=0;--e)n[e]=`(${n[e+1]} * ${a[e+1]})`;return n}(e.map((e,t)=>t),t);return a.map((t,n)=>{let i=`int ${e[n]} = ${r} / ${a[n]}`,o=n===a.length-1?`int ${e[n+1]} = ${r} - ${e[n]} * ${a[n]}`:`index -= ${e[n]} * ${a[n]}`;return`${i}; ${o};`}).join("")}(["r","c","d"],"inputShape"):eR(["r","c","d"],e);return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${r}
      return ivec3(r, c, d);
    }
  `}(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?eS():ew(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${r}

        setOutput(result);
      }
    `}}class ac{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,r){let a,n=ah(t,r),i=af(e,n,r);i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]);let o=ap(e,n,this.gpgpu.gl,this.gpgpu.textureConfig,r);if(this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=o,this.log();let e=this.freeTextures[i].pop();return this.usedTextures[i].push(e),e}return n===d.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):n===d.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):n===d.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):n===d.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):n===d.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(a),this.numUsedTextures++,this._numBytesAllocated+=o,this.log(),a}releaseTexture(e,t,r,a){if(null==this.freeTextures)return;let n=ah(r,a),i=af(t,n,a);i in this.freeTextures||(this.freeTextures[i]=[]);let o=ap(t,n,this.gpgpu.gl,this.gpgpu.textureConfig,a),s=(0,f.env)().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");-1!==s&&this._numBytesAllocated>s?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=o):(this.freeTextures[i].push(e),this.numFreeTextures++,this._numBytesFree+=o),this.numUsedTextures--;let l=this.usedTextures[i],u=l&&l.indexOf(e);if(null==u||u<0)throw Error("Cannot release a texture that was never provided by this texture manager");l[u]=l[l.length-1],l.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(null!=this.freeTextures){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function ap(e,t,r,a,n){let i,o=function(e,t){switch(e){case d.PACKED_2X2_FLOAT32:return e8(t);case d.PACKED_2X2_FLOAT16:return e9(t);case d.UNPACKED_FLOAT32:return e1(t);case d.UNPACKED_FLOAT16:return e4(t);case d.PACKED_4X1_UNSIGNED_BYTE:return e5(t);default:throw Error(`Unknown physical texture type ${e}`)}}(t,a);if(n){let[t,r]=$(e[0],e[1]);i=t*r}else{var s;let[t,r]=(s=e[0],[e[1],s]);i=t*r}return i*function(e,t){if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===e.RGBA)return 16;if(t===e.RGBA16F)return 8;else if(t===e.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}(r,o)}function ah(e,t){if(e===u.UPLOAD)return d.PACKED_2X2_FLOAT32;if(e===u.RENDER||null==e)return(0,f.env)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?d.PACKED_2X2_FLOAT32:d.UNPACKED_FLOAT32:t?d.PACKED_2X2_FLOAT16:d.UNPACKED_FLOAT16;if(e===u.DOWNLOAD||e===u.PIXELS)return d.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function af(e,t,r){return`${e[0]}_${e[1]}_${t}_${r}`}class ax{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=eM(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}let am="if (isnan(x)) return x;",ag="return abs(x);",av=am+`
  return (x < 0.0) ? 0.0 : x;
`,aC=am+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,ab="return x;",a$=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,ay=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,aI=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;class aR{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=eM(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class aT{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=eM(this.outputShape.length);const t=e.length,r=al("rc",t),a=eL(t),n=function(e,t){if(1===e)return"rc";let r="";for(let a=0;a<e;a++)r+=t[a],a<e-1&&(r+=",");return r}(t,r),i=r.slice(-2),o=t<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${a} rc = getOutputCoords();
        vec4 packedInput = getA(${n});

        setOutput(getChannel(packedInput, ${o}));
      }
    `}}let aw=eb.whereImpl,aS={},aE=(0,f.env)().getNumber("CPU_HANDOFF_SIZE_THRESHOLD");class aN extends eC.KernelBackend{nextDataId(){return aN.nextDataId++}constructor(e){let t;if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!(0,f.env)().getBool("HAS_WEBGL"))throw Error("WebGL is not supported on this device");null!=e?(t=e instanceof tu?e:new tu(C((0,f.env)().getNumber("WEBGL_VERSION"),e)),this.binaryCache={},this.gpgpuCreatedLocally=!1):(t=new tu(C((0,f.env)().getNumber("WEBGL_VERSION"))),this.binaryCache=function(e){return e in aS||(aS[e]={}),aS[e]}((0,f.env)().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0),this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new ac(this.gpgpu),this.numMBBeforeWarning=null==(0,f.env)().global.screen?1024:(0,f.env)().global.screen.height*(0,f.env)().global.screen.width*window.devicePixelRatio*600/1024/1024,this.texData=new eC.DataStorage(this,(0,h.engine)())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,r,a,n,i){let o=this.makeTensorInfo(t,r),s=this.texData.get(o.dataId);s.isPacked=!1,s.texture={texture:e,texShape:[a,n]},s.texShape=[a,n];let l=new eK(et(t),!1,i),u=this.runWebGLProgram(l,[o],r,[[a,n]]);return u.shape=t,s.texture=null,this.disposeIntermediateTensorInfo(o),u.dataId}write(e,t,r){if(((0,f.env)().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||(0,f.env)().getBool("DEBUG"))&&this.checkNumericalProblems(e),"complex64"===r&&null!=e)throw Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let a={id:this.nextDataId()};return this.texData.set(a,{shape:t,dtype:r,values:e,usage:u.UPLOAD,refCount:1}),a}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,r,a,n){if((0,f.env)().getBool("DEBUG")&&this.checkNumericalProblems(t),"complex64"===a)throw Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:r,dtype:a,values:t,usage:u.UPLOAD,refCount:n})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let t,r,{values:a,dtype:n,complexTensorInfos:i,slice:o,shape:s,isPacked:l}=this.texData.get(e);if(null!=o){let t;t=l?new aR(s,ab):new ax(s,ab);let r=this.runWebGLProgram(t,[{dataId:e,shape:s,dtype:n}],n),a=this.readSync(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(null!=a)return this.convertAndCacheOnCPU(e);if("string"===n)return a;let u=null!=this.activeTimers;if(u&&(t=x.util.now()),"complex64"===n){let e=this.readSync(i.real.dataId),t=this.readSync(i.imag.dataId);r=eg.mergeRealAndImagArrays(e,t)}else r=this.getValuesFromTexture(e);return u&&(this.downloadWaitMs+=x.util.now()-t),this.convertAndCacheOnCPU(e,r)}async read(e){let t,r;if(this.pendingRead.has(e)){let t=this.pendingRead.get(e);return new Promise(e=>t.push(e))}let{values:a,shape:n,slice:i,dtype:o,complexTensorInfos:s,isPacked:l}=this.texData.get(e);if(null!=i){let t;t=l?new aR(n,ab):new ax(n,ab);let r=this.runWebGLProgram(t,[{dataId:e,shape:n,dtype:o}],o),a=this.read(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(null!=a)return this.convertAndCacheOnCPU(e);if((0,f.env)().getBool("DEBUG")&&!(0,f.env)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===(0,f.env)().getNumber("WEBGL_VERSION"))throw Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let u=null;if("complex64"!==o&&(0,f.env)().get("WEBGL_BUFFER_SUPPORTED")){t=this.decode(e);let r=this.texData.get(t.dataId);u=this.gpgpu.createBufferFromTexture(r.texture.texture,...b(n))}if(this.pendingRead.set(e,[]),"complex64"!==o&&await this.gpgpu.createAndWaitForFence(),"complex64"===o){let e=await Promise.all([this.read(s.real.dataId),this.read(s.imag.dataId)]),t=e[0],a=e[1];r=eg.mergeRealAndImagArrays(t,a)}else if(null==u)r=this.getValuesFromTexture(e);else{let e=x.util.sizeFromShape(n);r=this.gpgpu.downloadFloat32MatrixFromBuffer(u,e)}if(null!=t&&this.disposeIntermediateTensorInfo(t),null!=u){let e=this.gpgpu.gl;I(e,()=>e.deleteBuffer(u))}let d=this.convertAndCacheOnCPU(e,r),c=this.pendingRead.get(e);return this.pendingRead.delete(e),c.forEach(e=>e(d)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&(0,h.engine)().removeDataId(e,this),this.pendingDeletes--),d}readToGPU(e,t={}){let{values:r,shape:a,slice:n,dtype:i,isPacked:o,texture:s}=this.texData.get(e);if("complex64"===i)throw Error("Does not support reading texture for complex64 dtype.");if(null!=n){let r;r=o?new aR(a,ab):new ax(a,ab);let n=this.runWebGLProgram(r,[{dataId:e,shape:a,dtype:i}],i),s=this.readToGPU(n,t);return this.disposeIntermediateTensorInfo(n),s}if(null==s)if(null!=r)throw Error("Data is not on GPU but on CPU.");else throw Error("There is no data on GPU or CPU.");let l=this.decode(e,t.customTexShape);return Object.assign({tensorRef:(0,h.engine)().makeTensorFromTensorInfo(l)},this.texData.get(l.dataId).texture)}bufferSync(e){let t=this.readSync(e.dataId);if("string"===e.dtype)try{let r=t.map(e=>x.util.decodeString(e));return(0,ev.buffer)(e.shape,e.dtype,r)}catch(e){throw Error("Failed to decode encoded string bytes into utf-8")}return(0,ev.buffer)(e.shape,e.dtype,t)}checkNumericalProblems(e){if(null!=e)for(let t=0;t<e.length;t++){let r=e[t];if(!R(r)){if((0,f.env)().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error(`The value ${r} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);throw Error(`The value ${r} cannot be represented on this device.`)}}}getValuesFromTexture(e){let{shape:t,dtype:r,isPacked:a}=this.texData.get(e),n=x.util.sizeFromShape(t);if((0,f.env)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let r=this.decode(e),a=this.texData.get(r.dataId),i=this.gpgpu.downloadMatrixFromPackedTexture(a.texture.texture,...b(t)).subarray(0,n);return this.disposeIntermediateTensorInfo(r),i}let i=(0,f.env)().getBool("WEBGL_PACK")&&!0===a,o=i?et(t):t,s=i?new eq(o):new eH(o),l=this.runWebGLProgram(s,[{shape:o,dtype:r,dataId:e}],"float32"),u=this.texData.get(l.dataId),d=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,n);return this.disposeIntermediateTensorInfo(l),d}timerAvailable(){return(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){let t=this.activeTimers,r=[],a=!1;null==this.programTimersStack?(this.programTimersStack=r,a=!0):this.activeTimers.push(r),this.activeTimers=r,e();let n=x.util.flatten(this.activeTimers.map(e=>e.query)).filter(e=>null!=e),i=x.util.flatten(this.activeTimers.map(e=>e.name)).filter(e=>null!=e);this.activeTimers=t,a&&(this.programTimersStack=null);let o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if((0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let e=await Promise.all(n);o.kernelMs=x.util.sum(e),o.getExtraProfileInfo=()=>e.map((e,t)=>({name:i[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(", ")}else o.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,o})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:x.util.now(),endMs:null}}endTimer(e){return(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.endQuery():e.endMs=x.util.now(),e}async getQueryTime(e){return(0,f.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.waitForQueryAndGetTime(e):e.endMs-e.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:r}=this.texData.get(e);return null!=r&&(this.disposeData(r.real.dataId,t),this.disposeData(r.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:r,texShape:a,usage:n,isPacked:i,slice:o}=this.texData.get(e),s=o&&o.origDataId||e,l=this.dataRefCount.get(s);l>1?this.dataRefCount.set(s,l-1):(this.dataRefCount.delete(s),null!=t&&(this.numBytesInGPU-=this.computeBytes(a,r),this.textureManager.releaseTexture(t,a,n,i)));let u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=aE){return(0,f.env)().getBool("WEBGL_CPU_FORWARD")&&e.every(e=>null==this.texData.get(e.dataId).texture&&x.util.sizeFromShape(e.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){eg.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let t=e.dataSync();return aw(e.shape,t)}packedUnaryOp(e,t,r){let a=new aR(e.shape,t),n=this.compileAndRun(a,[e],r);return(0,h.engine)().makeTensorFromTensorInfo(n)}abs(e){if(this.shouldExecuteOnCPU([e])&&"complex64"!==e.dtype){let t=r1(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if((0,f.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ag,e.dtype);let t=new ax(e.shape,ag),r=this.compileAndRun(t,[e]);return(0,h.engine)().makeTensorFromTensorInfo(r)}makeTensorInfo(e,t,r){let a;if("string"===t&&null!=r&&r.length>0&&x.util.isString(r[0])){let n=r.map(e=>x.util.encodeString(e));a=this.write(n,e,t)}else a=this.write(r,e,t);return this.texData.get(a).usage=null,{dataId:a,shape:e,dtype:t}}makeOutput(e,t,r){return(0,h.engine)().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,r),this)}unpackTensor(e){let t=new aT(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new au(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){let r=[J(e.shape),...ee(e.shape)],a={dtype:e.dtype,shape:r,dataId:e.dataId},n=new ad([J(t),...ee(t)],r),i=this.runWebGLProgram(n,[a],e.dtype,[r],!0);return{dataId:i.dataId,shape:t,dtype:i.dtype}}decode(e,t){let r,{isPacked:a,shape:n,dtype:i}=this.texData.get(e);if(null!=t){let e=x.util.sizeFromShape(n),r=t[0]*t[1]*4;x.util.assert(e<=r,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let o=et(n);r=a?new eX(o):new ez(o);let s=[null!=t?t:b(o)],l=this.runWebGLProgram(r,[{shape:o,dtype:i,dataId:e}],i,s,!0,t);return{dtype:i,shape:n,dataId:l.dataId}}runWebGLProgram(e,t,r,a,n=!1,i){let o,s,u,d=this.makeTensorInfo(e.outputShape,r),c=this.texData.get(d.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===l.DENSE&&(c.texShape=(null!=i?i:b(e.outputShape)).map(e=>2*e)),null!=e.outTexUsage&&(c.usage=e.outTexUsage),0===x.util.sizeFromShape(d.shape))return c.values=x.util.getTypedArrayFromDType(d.dtype,0),d;let p=[],h=t.map(t=>{if("complex64"===t.dtype)throw Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let r=this.texData.get(t.dataId);if(null==r.texture){if(!e.packedInputs&&x.util.sizeFromShape(t.shape)<=(0,f.env)().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:r.values};e.packedInputs&&(r.isPacked=!0,r.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!r.isPacked!=!!e.packedInputs)t=r.isPacked?this.unpackTensor(t):this.packTensor(t),p.push(t),r=this.texData.get(t.dataId);else if(r.isPacked&&!ea(r.shape,t.shape)){let e=t,a=t.shape;t.shape=r.shape,t=this.packedReshape(t,a),p.push(t),r=this.texData.get(t.dataId),e.shape=a}return{shape:t.shape,texData:r,isUniform:!1}});this.uploadToGPU(d.dataId);let m={shape:d.shape,texData:c,isUniform:!1},g=(s="",h.concat(m).forEach(t=>{let r=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let a=t.texData.texShape,{useSqueezeShape:n,uniformShape:i,keptDims:o}=eB(e.packedInputs,t.shape,a),l="",u="",d="";if(1===i.length&&e.packedInputs){let e=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];l=`${e[0]>1}_${e[1]>1}`}else if(2!==i.length||e.packedInputs){if(i.length>2&&!e.packedInputs){let e=x.util.computeStrides(i);d=`${e[0]===a[1]}_${e[e.length-1]===a[1]}`}}else u=`${i[0]>1}_${i[1]>1}`;let c=t.shape.length,p=2===i.length&&x.util.arraysEqual(t.shape,a),h=1===x.util.sizeFromShape(t.shape),f=eg.getBroadcastDims(t.shape,m.shape),g=!e.packedInputs&&c===m.shape.length&&x.util.arraysEqual(a,m.texData.texShape),v=e.packedInputs||i.length>2?"":`${a[0]>1}_${a[1]>1}`;s+=`${c}_${g}_${n?o:""}_${i.length}_${h}_${f}_${p}_${l}_${u}_${d}_${v}_${r}`}else{let e=t.isUniform?"uniform":t.texData.texShape;s+=`${t.shape}_${e}_${r}`}}),u=e.userCode,e.constructor.name+("_"+s+"_"+u)+`${(0,f.env)().getNumber("WEBGL_VERSION")}`),v=this.getAndSaveBinary(g,()=>{var t;let r,a,n,i,o,s;return t=this.gpgpu,a=(r=h.map((t,r)=>{let a={logicalShape:t.shape,texShape:t.isUniform?null:t.texData.texShape,isUniform:t.isUniform,isPacked:!t.isUniform&&t.texData.isPacked,flatOffset:null};return null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0&&(a.flatOffset=t.texData.slice.flatOffset),{name:e.variableNames[r],shapeInfo:a}})).map(e=>e.shapeInfo),i=function(e,t,r){var a,n,i,o;let s,l,u=[];if(e.forEach(e=>{let t=x.util.sizeFromShape(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?u.push(`uniform float ${e.name}${t>1?`[${t}]`:""};`):(u.push(`uniform sampler2D ${e.name};`),u.push(`uniform int offset${e.name};`)),r.enableShapeUniforms){let{uniformShape:t}=eB(r.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:u.push(`uniform int ${e.name}Shape;`);break;case 2:u.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:u.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:u.push(`uniform ivec4 ${e.name}Shape;`)}u.push(`uniform ivec2 ${e.name}TexShape;`)}}),r.enableShapeUniforms){switch(t.logicalShape.length){case 1:u.push("uniform int outShape;");break;case 2:u.push("uniform ivec2 outShape;"),u.push("uniform int outShapeStrides;");break;case 3:u.push("uniform ivec3 outShape;"),u.push("uniform ivec2 outShapeStrides;");break;case 4:u.push("uniform ivec4 outShape;"),u.push("uniform ivec3 outShapeStrides;")}u.push("uniform ivec2 outTexShape;")}r.customUniforms&&r.customUniforms.forEach(e=>{u.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:""};`)});let d=u.join("\n"),c=e.map(e=>(function(e,t,r=!1,a){let n="";r?n+=function e(t,r){switch(t.shapeInfo.logicalShape.length){case 0:let a,n,i;return n="get"+(a=t.name).charAt(0).toUpperCase()+a.slice(1),i=eI(),`
    vec4 ${n}() {
      return ${i.texture2D}(${a}, halfCR);
    }
  `;case 1:return function(e,t){let r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),n=e.shapeInfo.texShape,i=eI();if(t)return`
    vec4 ${a}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${i.texture2D}(${r}, uv);
    }
  `;let o=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)];return`
    vec4 ${a}(int index) {
      vec2 uv = packedUVfrom1D(
        ${o[0]}, ${o[1]}, index);
      return ${i.texture2D}(${r}, uv);
    }
  `}(t,r);case 2:return function(e,t){let r=e.shapeInfo.logicalShape,a=e.name,n="get"+a.charAt(0).toUpperCase()+a.slice(1),i=e.shapeInfo.texShape,o=i[0],s=i[1],l=eI();if(null!=i&&x.util.arraysEqual(r,i))return t?`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}TexShape[1], ${a}TexShape[0]);

        return ${l.texture2D}(${a}, uv);
      }
    `:`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}.0, ${o}.0);

        return ${l.texture2D}(${a}, uv);
      }
    `;if(t)return`
    vec4 ${n}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${a}TexShape[0]) / 2.0), ceil(float(${a}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${a}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${a}, uv);
    }
  `;let u=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],d=Math.ceil(r[1]/2);return`
    vec4 ${n}(int row, int col) {
      vec2 uv = packedUVfrom2D(${d}, ${u[0]}, ${u[1]}, row, col);
      return ${l.texture2D}(${a}, uv);
    }
  `}(t,r);case 3:return function(t,r){let a=t.shapeInfo.logicalShape,n=t.name,i="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,s=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(1===a[0]){let n=eV(t,a.slice(1));return`
        ${e(n,r)}
        vec4 ${i}(int b, int row, int col) {
          return ${i}(${eW(["b","row","col"],[1,2])});
        }
      `}let l=eI();if(r)return`
    vec4 ${i}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${n}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${l.texture2D}(${n}, uv);
    }
  `;let u=s[0],d=s[1],c=Math.ceil(a[2]/2),p=c*Math.ceil(a[1]/2);return`
    vec4 ${i}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${u}, ${d}, ${p}, ${c}, b, row, col);
      return ${l.texture2D}(${n}, uv);
    }
  `}(t,r);default:return function(e,t){let r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),n=eI();if(t)return`
    vec4 ${a}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${r}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${r}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${n.texture2D}(${r}, uv);
    }
  `;let i=e.shapeInfo.logicalShape,o=i.length,s=e.shapeInfo.texShape,l=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],u=l[0],d=l[1],c=Math.ceil(i[o-1]/2),p=c*Math.ceil(i[o-2]/2),h="int b, int row, int col",f=`b * ${p} + (row / 2) * ${c} + (col / 2)`;for(let e=2;e<o-1;e++)h=`int b${e}, `+h,p*=i[o-e-1],f=`b${e} * ${p} + `+f;return`
    vec4 ${a}(${h}) {
      int index = ${f};
      int texR = index / ${d};
      int texC = index - texR * ${d};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}, ${u});
      return ${n.texture2D}(${r}, uv);
    }
  `}(t,r)}}(e,a):n+=function e(t,r=!1){let a=t.shapeInfo.logicalShape;switch(a.length){case 0:return function(e,t){let r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`float ${a}() {return ${r};}`;let[n,i]=e.shapeInfo.texShape;if(1===n&&1===i)return`
      float ${a}() {
        return sampleTexture(${r}, halfCR);
      }
    `;let o=eD(r);if(t)return`
    float ${a}() {
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], ${o});
      return sampleTexture(${r}, uv);
    }
  `;let[s,l]=e.shapeInfo.texShape;return`
    float ${a}() {
      vec2 uv = uvFromFlat(${s}, ${l}, ${o});
      return sampleTexture(${r}, uv);
    }
  `}(t,r);case 1:return function(e,t){let r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float ${a}(int index) {
        ${eP(e)}
      }
    `;let n=e.shapeInfo.texShape,i=n[0],o=n[1];if(1===o&&1===i)return`
      float ${a}(int index) {
        return sampleTexture(${r}, halfCR);
      }
    `;let s=eD(r);return 1===o?t?`
      float ${a}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${a}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / ${i}.0);
        return sampleTexture(${r}, uv);
      }
    `:1===i?t?`
      float ${a}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${a}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / ${o}.0, 0.5);
        return sampleTexture(${r}, uv);
      }
    `:t?`
    float ${a}(int index) {
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${s});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${a}(int index) {
      vec2 uv = uvFromFlat(${i}, ${o}, index + ${s});
      return sampleTexture(${r}, uv);
    }
  `}(t,r);case 2:return function(t,r){let a=t.shapeInfo.logicalShape,n=t.name,i="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape;if(null!=o&&x.util.arraysEqual(a,o)){if(r)return`
      float ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `;let e=o[0],t=o[1];return`
    float ${i}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${t}.0, ${e}.0);
      return sampleTexture(${n}, uv);
    }
  `}let{newShape:s,keptDims:l}=x.util.squeezeShape(a);if(s.length<a.length){let a=eV(t,s);return`
      ${e(a,r)}
      float ${i}(int row, int col) {
        return ${i}(${eW(["row","col"],l)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${i}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${a[1]}, 1)));
        ${eP(t)}
      }
    `;let u=o[0],d=o[1],c=eD(n);return 1===d?r?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${c}), vec3(${n}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${c}), vec3(${a[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${u}.0);
      return sampleTexture(${n}, uv);
    }
  `:1===u?r?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${c}), vec3(${n}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${c}), vec3(${a[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${d}.0, 0.5);
      return sampleTexture(${n}, uv);
    }
  `:r?`
      float ${i}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${n}Shape[1] + col + ${c};
        vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index);
        return sampleTexture(${n}, uv);
      }
    `:`
  float ${i}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${a[1]} + col + ${c};
    vec2 uv = uvFromFlat(${u}, ${d}, index);
    return sampleTexture(${n}, uv);
  }
`}(t,r);case 3:return function(t,r){let a=t.shapeInfo.logicalShape,n=t.name,i="get"+n.charAt(0).toUpperCase()+n.slice(1),o=a[1]*a[2],s=a[2],{newShape:l,keptDims:u}=x.util.squeezeShape(a);if(l.length<a.length){let a=eV(t,l);return`
        ${e(a,r)}
        float ${i}(int row, int col, int depth) {
          return ${i}(${eW(["row","col","depth"],u)});
        }
      `}if(t.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${o}, ${s}, 1)));
        ${eP(t)}
      }
    `;let d=t.shapeInfo.texShape,c=d[0],p=d[1],h=t.shapeInfo.flatOffset;if(p===o&&null==h)return r?`
      float ${i}(int row, int col, int depth) {
        int stride1 = ${n}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
        float ${i}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${s}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${p}.0, ${c}.0);
          return sampleTexture(${n}, uv);
        }
      `;if(p===s&&null==h)return r?`
      float ${i}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${n}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${i}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${a[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${p}.0, ${c}.0);
      return sampleTexture(${n}, uv);
    }
  `;let f=eD(n);return r?`
    float ${i}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${n}Shape[1] * ${n}Shape[2];
      int stride1 = ${n}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${f};
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index);
      return sampleTexture(${n}, uv);
    }
    `:`
      float ${i}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o} + col * ${s} + depth + ${f};
        vec2 uv = uvFromFlat(${c}, ${p}, index);
        return sampleTexture(${n}, uv);
      }
  `}(t,r);case 4:return function(t,r){let a=t.shapeInfo.logicalShape,n=t.name,i="get"+n.charAt(0).toUpperCase()+n.slice(1),o=a[3],s=a[2]*o,l=a[1]*s,{newShape:u,keptDims:d}=x.util.squeezeShape(a);if(u.length<a.length){let a=eV(t,u);return`
      ${e(a,r)}
      float ${i}(int row, int col, int depth, int depth2) {
        return ${i}(${eW(["row","col","depth","depth2"],d)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${l}, ${s}, ${o}, 1)));
        ${eP(t)}
      }
    `;let c=t.shapeInfo.flatOffset,p=t.shapeInfo.texShape,h=p[0],f=p[1],m=`int stride2 = ${n}Shape[3];`,g=`int stride1 = ${n}Shape[2] * stride2;`,v=`int stride0 = ${n}Shape[1] * stride1;`;if(f===l&&null==c)return r?`
      float ${i}(int row, int col, int depth, int depth2) {
        ${m}
        ${g}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${s}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(f===o&&null==c)return r?`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n}Shape[1] * ${n}Shape[2], ${n}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${a[1]*a[2]}, ${a[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;let C=eD(n);return r?`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${g}
      ${v}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${C});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${l} + col * ${s} +
          depth * ${o} + depth2;
      vec2 uv = uvFromFlat(${h}, ${f}, index + ${C});
      return sampleTexture(${n}, uv);
    }
  `}(t,r);case 5:return function(t){let r=t.shapeInfo.logicalShape,a=t.name,n="get"+a.charAt(0).toUpperCase()+a.slice(1),i=r[4],o=r[3]*i,s=r[2]*o,l=r[1]*s,{newShape:u,keptDims:d}=x.util.squeezeShape(r);if(u.length<r.length){let r=eV(t,u);return`
      ${e(r)}
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        return ${n}(${eW(["row","col","depth","depth2","depth3"],d)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${l}, ${s}, ${o}, ${i})) +
          depth3;
        ${eP(t)}
      }
    `;let c=t.shapeInfo.flatOffset,p=t.shapeInfo.texShape,h=p[0],f=p[1];if(f===l&&null==c)return`
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${s}, ${o}, ${i}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${a}, uv);
      }
    `;if(f===i&&null==c)return`
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${r[1]*r[2]*r[3]},
               ${r[2]*r[3]}, ${r[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${a}, uv);
      }
    `;let m=eD(a);return`
    float ${n}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${l} + col * ${s} + depth * ${o} +
          depth2 * ${i} + depth3 + ${m};
      vec2 uv = uvFromFlat(${h}, ${f}, index);
      return sampleTexture(${a}, uv);
    }
  `}(t);case 6:return function(t){let r=t.shapeInfo.logicalShape,a=t.name,n="get"+a.charAt(0).toUpperCase()+a.slice(1),{newShape:i,keptDims:o}=x.util.squeezeShape(r);if(i.length<r.length){let r=eV(t,i);return`
      ${e(r)}
      float ${n}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${n}(${eW(["row","col","depth","depth2","depth3","depth4"],o)});
      }
    `}let s=r[5],l=r[4]*s,u=r[3]*l,d=r[2]*u,c=r[1]*d;if(t.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${d}, ${u}, ${l})) +
          dot(
            vec2(depth3, depth4),
            vec2(${s}, 1)));
        ${eP(t)}
      }
    `;let p=t.shapeInfo.flatOffset,h=t.shapeInfo.texShape,f=h[0],m=h[1];if(m===c&&null==p)return`
      float ${n}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${d}, ${u}, ${l}, ${s})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${f}.0);
        return sampleTexture(${a}, uv);
      }
    `;if(m===s&&null==p)return`
      float ${n}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${r[1]*r[2]*r[3]*r[4]},
               ${r[2]*r[3]*r[4]},
               ${r[3]*r[4]},
               ${r[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${f}.0);
        return sampleTexture(${a}, uv);
      }
    `;let g=eD(a);return`
    float ${n}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${d} + depth * ${u} +
          depth2 * ${l} + depth3 * ${s} + depth4 + ${g};
      vec2 uv = uvFromFlat(${f}, ${m}, index);
      return sampleTexture(${a}, uv);
    }
  `}(t);default:throw Error(`${a.length}-D input sampling is not yet supported`)}}(e,a);let i=e.shapeInfo.logicalShape,o=t.logicalShape;return i.length<=o.length&&(r?n+=function(e,t){let r,a=e.name,n=a.charAt(0).toUpperCase()+a.slice(1),i=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,s=eN(e.shapeInfo.logicalShape,t.logicalShape),l=eL(o),u=o-i,d=["x","y","z","w","u","v"];r=0===i?"":o<2&&s.length>=1?"coords = 0;":s.map(e=>`coords.${d[e+u]} = 0;`).join("\n");let c="";c=o<2&&i>0?"coords":e.shapeInfo.logicalShape.map((e,t)=>`coords.${d[t+u]}`).join(", ");let p="return outputValue;",h=1===x.util.sizeFromShape(e.shapeInfo.logicalShape),f=1===x.util.sizeFromShape(t.logicalShape);if(1!==i||h||f){if(h&&!f)p=1===o?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(s.length){let e=i-2,t=i-1;s.indexOf(e)>-1&&s.indexOf(t)>-1?p="return vec4(outputValue.x);":s.indexOf(e)>-1?p="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":s.indexOf(t)>-1&&(p="return vec4(outputValue.xx, outputValue.zz);")}}else p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 ${"get"+n+"AtOutCoords"}() {
      ${l} coords = getOutputCoords();
      ${r}
      vec4 outputValue = get${n}(${c});
      ${p}
    }
  `}(e,t):n+=function(e,t){let r,a=e.name,n=a.charAt(0).toUpperCase()+a.slice(1),i="get"+n+"AtOutCoords",o=t.texShape,s=e.shapeInfo.texShape,l=e.shapeInfo.logicalShape.length,u=t.logicalShape.length;if(!e.shapeInfo.isUniform&&l===u&&null==e.shapeInfo.flatOffset&&x.util.arraysEqual(s,o))return`
      float ${i}() {
        return sampleTexture(${a}, resultUV);
      }
    `;let d=eL(u),c=eN(e.shapeInfo.logicalShape,t.logicalShape),p=u-l,h=["x","y","z","w","u","v"];r=0===l?"":u<2&&c.length>=1?"coords = 0;":c.map(e=>`coords.${h[e+p]} = 0;`).join("\n");let f="";return f=u<2&&l>0?"coords":e.shapeInfo.logicalShape.map((e,t)=>`coords.${h[t+p]}`).join(", "),`
    float ${i}() {
      ${d} coords = getOutputCoords();
      ${r}
      return get${n}(${f});
    }
  `}(e,t)),n})(e,t,r.packedInputs,r.enableShapeUniforms)).join("\n"),p=t.texShape,h=eI(),f=(a=h,`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${a.texture2D}(textureSampler, uv).r;
    }
  `),m=(n=h,`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${ek}
    ${eA}
    ${eO}
  `);return t.isPacked?(s=function(e,t,r){switch(e.length){case 0:return e_();case 1:var a,n;let i;return a=t,n=r,1===(i=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)])[0]?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${i[1]}.0);
      }
    `:1===i[1]?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${i[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${i[0]}, ${i[1]}));
      return 2 * (resTexRC.x * ${i[1]} + resTexRC.y);
    }
  `;case 2:var o=e,s=t,l=r;let u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(x.util.arraysEqual(o,s))return l?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${u[0]}, ${u[1]}));
      }
    `;let d=Math.ceil(o[1]/2);return l?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${u[0]}, ${u[1]}));

      int index = resTexRC.x * ${u[1]} + resTexRC.y;
      int r = 2 * (index / ${d});
      int c = imod(index, ${d}) * 2;

      return ivec2(r, c);
    }
  `;case 3:var c=e,p=t,h=r;if(h)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let f=[Math.ceil(p[0]/2),Math.ceil(p[1]/2)],m=Math.ceil(c[2]/2),g=m*Math.ceil(c[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${f[0]}, ${f[1]}));
      int index = resTexRC.x * ${f[1]} + resTexRC.y;

      int b = index / ${g};
      index -= b * ${g};

      int r = 2 * (index / ${m});
      int c = imod(index, ${m}) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(e,t,r){if(r)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let a=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],n=Math.ceil(e[e.length-1]/2),i=n*Math.ceil(e[e.length-2]/2),o=i,s="",l="b, r, c";for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],s=`
      int b${t} = index / ${o};
      index -= b${t} * ${o};
    `+s,l=`b${t}, `+l;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${a[0]}, ${a[1]}));
      int index = resTexRC.x * ${a[1]} + resTexRC.y;

      ${s}

      int b = index / ${i};
      index -= b * ${i};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec${e.length}(${l});
    }
  `}(e,t,r)}}(t.logicalShape,p,r.enableShapeUniforms),i=h,l=`
    void setOutput(vec4 val) {
      ${i.output} = val;
    }
  `):(s=function(e,t,r){switch(e.length){case 0:return e_();case 1:return a=t,n=r,1===a[0]?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${a[1]}.0);
      }
    `:1===a[1]?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${a[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${a[0]}, ${a[1]}));
      return resTexRC.x * ${a[1]} + resTexRC.y;
    }
  `;case 2:return i=e,o=t,s=r,x.util.arraysEqual(i,o)?s?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${o[0]}, ${o[1]}));
      }
    `:1===i[1]?s?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${o[0]}, ${o[1]}));
        int index = resTexRC.x * ${o[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:1===i[0]?s?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${o[0]}, ${o[1]}));
        int index = resTexRC.x * ${o[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:s?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;
      int r = index / ${i[1]};
      int c = index - r * ${i[1]};
      return ivec2(r, c);
    }
  `;case 3:var a,n,i,o,s,l,u,d,c,p=e,h=t,f=r;if(f){let e=eT(["r","c","d"],p);return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${e}
    return ivec3(r, c, d);
  }
`}let m=eR(["r","c","d"],p);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${h[0]}, ${h[1]}));
      int index = resTexRC.x * ${h[1]} + resTexRC.y;
      ${m}
      return ivec3(r, c, d);
    }
  `;case 4:var g=e,v=t,C=r;if(C){let e=eT(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${e}
      return ivec4(r, c, d, d2);
    }
  `}let b=eR(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${v[0]}, ${v[1]}));
      int index = resTexRC.x * ${v[1]} + resTexRC.y;
      ${b}
      return ivec4(r, c, d, d2);
    }
  `;case 5:let $;return l=e,u=t,$=eR(["r","c","d","d2","d3"],l),`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${u[0]},
                             ${u[1]}));

      int index = resTexRC.x * ${u[1]} + resTexRC.y;

      ${$}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `;case 6:let y;return d=e,c=t,y=eR(["r","c","d","d2","d3","d4"],d),`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${c[0]}, ${c[1]}));
      int index = resTexRC.x * ${c[1]} + resTexRC.y;

      ${y}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `;default:throw Error(`${e.length}-D output sampling is not yet supported`)}}(t.logicalShape,p,r.enableShapeUniforms),o=h,l=`
    void setOutput(float val) {
      ${o.output} = vec4(val, 0, 0, 0);
    }
  `),r.packedInputs&&(m+=eF),[m,f,l,d,s,c,r.userCode].join("\n")}(r,n={logicalShape:m.shape,texShape:m.texData.texShape,isUniform:!1,isPacked:m.texData.isPacked,flatOffset:null},e),o=E(t.gl,i),s=t.createProgram(o),(0,f.env)().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:o,source:i,webGLProgram:s,inShapeInfos:a,outShapeInfo:n,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(t.buildVao(s),Object.assign({program:e,fragmentShader:o,source:i,webGLProgram:s,inShapeInfos:a,outShapeInfo:n},eU(t,e,s)))}),C=null!=this.activeTimers;C&&(o=this.startTimer()),(0,f.env)().get("ENGINE_COMPILE_ONLY")||function(e,t,r,a,n){t.program.enableShapeUniforms||(eG(t.inShapeInfos,r),eG([t.outShapeInfo],[a]));let i=a.texData.texture,o=a.texData.texShape;a.texData.isPacked?e.setOutputPackedMatrixTexture(i.texture,o[0],o[1]):e.setOutputMatrixTexture(i.texture,o[0],o[1]),e.setProgram(t.webGLProgram),e.bindVertexArray(t.webGLProgram.vao),1===(0,f.env)().getNumber("WEBGL_VERSION")&&null!==t.infLoc&&e.gl.uniform1f(t.infLoc,1/0),null!==t.nanLoc&&e.gl.uniform1f(t.nanLoc,NaN);for(let a=0;a<r.length;++a){let n=r[a],{uniform:i,offset:o,shape:s,texShape:l}=t.variablesLocations[a];if(s){let{uniformShape:r}=eB(t.program.packedInputs,n.shape,n.texData.texShape);switch(r.length){case 1:e.gl.uniform1iv(s,new Int32Array(r));break;case 2:e.gl.uniform2iv(s,new Int32Array(r));break;case 3:e.gl.uniform3iv(s,new Int32Array(r));break;case 4:e.gl.uniform4iv(s,new Int32Array(r))}}if(l&&e.gl.uniform2i(l,n.texData.texShape[0],n.texData.texShape[1]),null!=i){if(n.isUniform){if(2>x.util.sizeFromShape(n.shape))e.gl.uniform1f(i,n.uniformValues[0]);else{let t=n.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(i,t)}continue}null!=n.texData.slice&&null!=o&&e.gl.uniform1i(o,n.texData.slice.flatOffset),e.setInputMatrixTexture(n.texData.texture.texture,i,a)}}let s=t.outShapeLocation;if(s)switch(a.shape.length){case 1:e.gl.uniform1iv(s,new Int32Array(a.shape));break;case 2:e.gl.uniform2iv(s,new Int32Array(a.shape));break;case 3:e.gl.uniform3iv(s,new Int32Array(a.shape));break;case 4:e.gl.uniform4iv(s,new Int32Array(a.shape))}if(t.outShapeStridesLocation){let r=x.util.computeStrides(a.shape);switch(a.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(r));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(r));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(r))}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,a.texData.texShape[0],a.texData.texShape[1]),t.program.customUniforms&&n)for(let r=0;r<t.program.customUniforms.length;++r){let a=t.program.customUniforms[r],i=t.customUniformLocations[r],o=n[r];if("float"===a.type)e.gl.uniform1fv(i,o);else if("vec2"===a.type)e.gl.uniform2fv(i,o);else if("vec3"===a.type)e.gl.uniform3fv(i,o);else if("vec4"===a.type)e.gl.uniform4fv(i,o);else if("int"===a.type)e.gl.uniform1iv(i,o);else if("ivec2"===a.type)e.gl.uniform2iv(i,o);else if("ivec3"===a.type)e.gl.uniform3iv(i,o);else if("ivec4"===a.type)e.gl.uniform4iv(i,o);else throw Error(`uniform type ${a.type} is not supported yet.`)}e.executeProgram()}(this.gpgpu,v,h,m,a),p.forEach(e=>this.disposeIntermediateTensorInfo(e)),C&&(o=this.endTimer(o),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(o)}));let $=(0,f.env)().getNumber("WEBGL_FLUSH_THRESHOLD");if($>0){let e=x.util.now();e-this.lastGlFlushTime>$&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!(0,f.env)().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&!1===n){let e=this.unpackTensor(d);return this.disposeIntermediateTensorInfo(d),e}return d}compileAndRun(e,t,r,a,n=!1){return r=r||t[0].dtype,this.runWebGLProgram(e,t,r,a,n)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||((0,f.env)().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),null!=this.canvas&&"u">typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return null==this.floatPrecisionValue&&(this.floatPrecisionValue=(0,h.tidy)(()=>{if(!(0,f.env)().get("WEBGL_RENDER_FLOAT32_ENABLED")){let e=(0,f.env)().getBool("DEBUG");(0,f.env)().set("DEBUG",!1);let t=this.abs((0,ey.scalar)(1e-8)).dataSync()[0];if((0,f.env)().set("DEBUG",e),t>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}uploadToGPU(e){let t,r=this.texData.get(e),{shape:a,dtype:n,values:i,texture:o,usage:s,isPacked:l}=r;if(null!=o)return;let d=null!=this.activeTimers;d&&(t=x.util.now());let c=r.texShape;if(null==c&&(r.texShape=c=er(a,l)),null!=i){let e,o=et(a),s=c[1],p=c[0],h=i instanceof Uint8Array||i instanceof Uint8ClampedArray;(l||!h)&&([s,p]=$(c[0],c[1])),e=l?new eY(o,h):new eK(o,h);let m=h?[p,s]:c,g=this.makeTensorInfo(m,n),v=this.texData.get(g.dataId);h?v.usage=u.PIXELS:v.usage=u.UPLOAD,v.texShape=m,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(g.dataId),s,p,i);let C=[[p,s]],b=this.runWebGLProgram(e,[g],n,C,!0),y=this.texData.get(b.dataId);r.texShape=y.texShape,r.isPacked=y.isPacked,r.usage=y.usage,(0,f.env)().get("ENGINE_COMPILE_ONLY")?this.disposeData(b.dataId):(r.texture=y.texture,r.values=null,this.texData.delete(b.dataId)),this.disposeIntermediateTensorInfo(g),d&&(this.uploadWaitMs+=x.util.now()-t)}else r.texture=this.acquireTexture(c,s,n,l)}convertAndCacheOnCPU(e,t){let r=this.texData.get(e),{dtype:a}=r;return null!=t&&(r.values=function(e,t){if("float32"===t||"complex64"===t)return e;if("int32"===t||"bool"===t){let r="int32"===t?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<r.length;++t)r[t]=Math.round(e[t]);return r}throw Error(`Unknown dtype ${t}`)}(t,a)),r.values}acquireTexture(e,t,r,a){if(this.numBytesInGPU+=this.computeBytes(e,r),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){let e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,a)}computeBytes(e,t){return e[0]*e[1]*x.util.bytesPerElement(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}for(let[,t]of Object.entries(this.binaryCache)){let r=new Promise(e=>{try{this.checkCompletion_(t),e(!0)}catch(e){throw e}});e.push(r)}return Promise.all(e)}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await (0,e$.nextFrame)(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(!1===this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)){if(console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),!1===this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS))throw k(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),Error("Failed to compile fragment shader.");throw Error("Failed to link vertex and fragment shaders.")}return!0}getUniformLocations(){for(let e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);let{variablesLocations:t,customUniformLocations:r,infLoc:a,nanLoc:n,outShapeLocation:i,outShapeStridesLocation:o,outTexShapeLocation:s}=eU(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=r,e.infLoc=a,e.nanLoc=n,e.outShapeLocation=i,e.outShapeStridesLocation=o,e.outTexShapeLocation=s}}createTensorFromGPUData(e,t,r){e.channels=e.channels||"RGBA";let{texture:a,height:n,width:i,channels:o}=e,s=(0,h.engine)().backend;if(!s.gpgpu.gl.isTexture(a))throw Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");let l=s.writeTexture(a,t,r,n,i,o);return(0,h.engine)().makeTensorFromDataId(l,t,r,s)}}aN.nextDataId=0;var ak=e.i(81192),aA=e.i(67412);function aO(){(0,f.env)().set("WEBGL_FORCE_F16_TEXTURES",!0)}e.s(["forceHalfFloat",()=>aO],82175),p.isBrowser()&&(0,h.registerBackend)("webgl",()=>new aN,2);let aF={forceHalfFloat:aO};e.s(["webgl",0,aF],52577);var a_=e.i(47079),aD=e.i(68209),aD=aD,eg=eg,eg=eg;let aP=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class aL{constructor(e,t,r){this.variableNames=["A","B"],this.outputShape=eg.assertAndGetBroadcastShape(t,r),this.enableShapeUniforms=eM(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}var eg=eg;let aB=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class aV{constructor(e,t,r,a=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=eg.assertAndGetBroadcastShape(t,r);const n=this.outputShape.length;this.enableShapeUniforms=eM(n);let i="";if(a)if(0===n||1===x.util.sizeFromShape(this.outputShape))i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else{const e=eL(n);if(i=`
          ${e} coords = getOutputCoords();
        `,1===n)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const e=al("coords",n);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${e[n-2]} + 1) >= outShape[${n} - 2];
            bool nextColOutOfBounds =
              (${e[n-1]} + 1) >= outShape[${n} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${e[n-2]} + 1) >= ${this.outputShape[n-2]};
            bool nextColOutOfBounds =
              (${e[n-1]} + 1) >= ${this.outputShape[n-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}function aW(e){let{inputs:t,backend:r}=e,{x:a}=t;return r.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}let aU={kernelName:td.Identity,backendName:"webgl",kernelFunc:aW};function aG(e){let{inputs:t,backend:r}=e,{real:a,imag:n}=t,i=r.makeTensorInfo(a.shape,"complex64");return r.texData.get(i.dataId).complexTensorInfos={real:aW({inputs:{x:a},backend:r}),imag:aW({inputs:{x:n},backend:r})},i}let aM={kernelName:td.Complex,backendName:"webgl",kernelFunc:aG},az="return (a < 0.) ? b * a : a;",aX=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,aH={kernelName:td.LeakyRelu,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{alpha:i}=a,o=r.makeTensorInfo([],"float32",x.util.createScalarValue(i,"float32")),s=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new aV(aX,n.shape,o.shape):new aL(az,n.shape,o.shape),l=r.runWebGLProgram(s,[n,o],"float32");return r.disposeIntermediateTensorInfo(o),l}},aq="return (a < 0.) ? b * a : a;",aj=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,aK={kernelName:td.Prelu,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:a,alpha:n}=t,i=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new aV(aj,a.shape,n.shape):new aL(aq,a.shape,n.shape);return r.runWebGLProgram(i,[a,n],"float32")}},aY="if (isnan(x)) return x;";function aQ({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:r,dtype:a}){return({inputs:n,backend:i})=>{let o,{x:s}=n,l=a||s.dtype;if(i.shouldExecuteOnCPU([s])&&null!=r){let e=r(i.texData.get(s.dataId).values,l);return i.makeTensorInfo(s.shape,l,e)}return o=(0,f.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=t?new aR(s.shape,t):new ax(s.shape,e),i.runWebGLProgram(o,[s],l)}}function aZ({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:r=!1,supportsComplex:a=!1,cpuKernelImpl:n,dtype:i}){return({inputs:o,backend:s})=>{let l,{a:u,b:d}=o;if(a&&"complex64"===u.dtype){let t=s.texData.get(u.dataId),r=s.texData.get(d.dataId),[a,n]=[[t.complexTensorInfos.real,r.complexTensorInfos.real],[t.complexTensorInfos.imag,r.complexTensorInfos.imag]].map(t=>{let[r,a]=t,n={dataId:r.dataId,dtype:r.dtype,shape:u.shape},i={dataId:a.dataId,dtype:a.dtype,shape:d.shape},o=new aL(e,u.shape,d.shape);return s.runWebGLProgram(o,[n,i],(0,tK.upcastType)(r.dtype,a.dtype))}),i=aG({inputs:{real:a,imag:n},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(n),i}let c=i||(0,tK.upcastType)(u.dtype,d.dtype);if(("string"===u.dtype||"string"===d.dtype||s.shouldExecuteOnCPU([u,d]))&&null!=n){let e=s.texData.get(u.dataId).values,t=s.texData.get(d.dataId).values,r="string"===u.dtype?eg.fromUint8ToStringArray(e):e,a="string"===u.dtype?eg.fromUint8ToStringArray(t):t,[i,o]=n(u.shape,d.shape,r,a,c),l=s.makeTensorInfo(o,c);return s.texData.get(l.dataId).values=i,l}return l=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=t?new aV(t,u.shape,d.shape,r):new aL(e,u.shape,d.shape),s.runWebGLProgram(l,[u,d],c)}}function aJ(e,t=!1){if("linear"===e)return"return x;";if("relu"===e)return t?ay:av;if("elu"===e)return t?a$:"return (x >= 0.0) ? x : (exp(x) - 1.0);";if("relu6"===e)return t?aI:aC;if("prelu"===e)return t?aj:aq;else if("leakyrelu"===e)return t?aX:az;else if("sigmoid"===e)return"return 1.0 / (1.0 + exp(-1.0 * x));";throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}class a0{constructor(e,t,r,a=!1,n=!1,i=!1,o=null,s=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.enableShapeUniforms=eM(this.outputShape.length);const u=Math.ceil((a?e[1]:e[2])/2),d=a?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],c=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let p="",h="";o&&(p=s?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:l?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:`vec4 activation(vec4 x) {
          ${o}
        }`,h="result = activation(result);"),i&&this.variableNames.push("bias"),s&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let f="rc.x",x="rc.x";e[0]<t[0]?f=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(x=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${p}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${f};
        int batchB = ${x};
        for (int i = 0; i < ${u}; i++) {
          vec4 a = getMatrixA(batchA, ${a?"i * 2, rc.y":"rc.y, i * 2"});
          vec4 b = getMatrixB(batchB, ${n?"rc.z, i * 2":"i * 2, rc.z"});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${d[0]} * ${c[0]});
          result += (${d[1]} * ${c[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${i?"result += getBiasAtOutCoords();":""}

        ${h}

        setOutput(result);
      }
    `}}var eg=eg,eg=eg;class a1{constructor(e,t,r){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=eg.assertAndGetBroadcastShape(t,r),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}let a2="return a * b;";function a4(e){let t,{inputs:r,backend:a}=e,{a:n,b:i}=r,o=eg.upcastType(n.dtype,i.dtype);if("complex64"===n.dtype){let e=a.texData.get(n.dataId),t=a.texData.get(i.dataId),r=new a1("return areal * breal - aimag * bimag;",n.shape,i.shape),o=new a1("return areal * bimag + aimag * breal;",n.shape,i.shape),s=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:n.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:n.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:i.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:i.shape}],l=a.runWebGLProgram(r,s,"float32"),u=a.runWebGLProgram(o,s,"float32"),d=aG({inputs:{real:l,imag:u},backend:a});return a.disposeIntermediateTensorInfo(l),a.disposeIntermediateTensorInfo(u),d}if(a.shouldExecuteOnCPU([n,i])){let e=a.texData.get(n.dataId),t=a.texData.get(i.dataId),[r,s]=rz(n.shape,i.shape,e.values,t.values,o),l=a.makeTensorInfo(s,o);return a.texData.get(l.dataId).values=r,l}return t=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new aV(a2,n.shape,i.shape):new aL(a2,n.shape,i.shape),a.runWebGLProgram(t,[n,i],o)}let a3={kernelName:td.Multiply,backendName:"webgl",kernelFunc:a4};function a5(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{shape:i}=a,o=x.util.sizeFromShape(n.shape),s=x.util.inferFromImplicitShape(i,o),l=x.util.sizeFromShape(s);x.util.assert(o===l,()=>`The new shape (${s}) has ${l} elements and the old shape (${n.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`);let u=r.texData.get(n.dataId);if(u.isPacked&&!ea(n.shape,s)&&!(null!==u.texture&&ea(u.shape,s))){let e,t,a,i,o;return e=[J(n.shape),...ee(n.shape)],t={dtype:n.dtype,shape:e,dataId:n.dataId},a=new ad([J(s),...ee(s)],e),i=[e],{dataId:(o=r.runWebGLProgram(a,[t],n.dtype,i,!0)).dataId,shape:s,dtype:o.dtype}}return r.incRef(n.dataId),{dataId:n.dataId,shape:s,dtype:n.dtype}}let a6={kernelName:td.Reshape,backendName:"webgl",kernelFunc:a5};var eg=eg,eg=eg;class a8{constructor(e,t){this.variableNames=["x"];const{windowSize:r,batchSize:a,inSize:n,outSize:i}=e;this.outputShape=[a,i];const o=4*Math.floor(r/4),s=r%4;let l="sumValue += dot(values, ones);";if(null!=t){const e=1/t;l=`sumValue += dot(values * ${x.util.isInt(e)?e.toPrecision(2):e}, ones);`}let u="";n%r>0&&(u=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        float sumValue = 0.0;

        for (int i = 0; i < ${o}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${o};
        if (${1===s}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${2===s}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${3===s}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${l}
        }
        setOutput(sumValue);
      }
    `}}class a7{constructor(e,t){this.variableNames=["x"];const{windowSize:r,batchSize:a,inSize:n,outSize:i}=e;this.outputShape=[a,i];let o="0.0",s="";"prod"===t?o="1.0":"min"===t?(o="1.0 / 1e-20",s="min"):"max"===t&&(o="-1.0 / 1e-20",s="max");let l=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"sum"===t?l="sumValue":"prod"===t?l="prodValue":"all"===t?l="allValue":"any"===t&&(l="anyValue");const u=4*Math.floor(r/4),d=r%4;let c=`
      if (${"sum"===t}) {
        sumValue += dot(values, ones);
      } else if (${"prod"===t}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${s}(values, minMaxValue);
        if (${"min"===t} || ${"max"===t}) {
          minMaxValue = ${s}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,p="vec4";"all"===t?(o="1.0",c=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,p="bvec4"):"any"===t&&(o="0.0",c=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,p="bvec4");let h="";n%r>0&&(h=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${o};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        vec4 minMaxValue = vec4(${o});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${u};
        if (${1===d}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${c}
        } else if (${2===d}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${c}
        } else if (${3===d}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${c}
        }
        setOutput(${l});
      }
    `}}function a9(e,t,r,a){let n=function(e){let t=[];for(;0===t.length||1!==t[t.length-1].outSize;){let r=t.length?t[t.length-1].outSize:e[1],a=eg.computeOptimalWindowSize(r);t.push({inSize:r,windowSize:a,outSize:Math.ceil(r/a)})}return t}(e.shape),i=e;for(let o=0;o<n.length;o++){let s,l,{inSize:u,windowSize:d,outSize:c}=n[o];s="mean"===r?0===o?new a8({windowSize:d,inSize:u,batchSize:e.shape[0],outSize:c},u):new a8({windowSize:d,inSize:u,batchSize:e.shape[0],outSize:c}):new a7({windowSize:d,inSize:u,batchSize:e.shape[0],outSize:c},r),l=i,i=a.runWebGLProgram(s,[i],t),l.dataId!==e.dataId&&a.disposeIntermediateTensorInfo(l)}return i}class ne{constructor(e,t){this.variableNames=["A"];const r=Array(e.length);for(let a=0;a<r.length;a++)r[a]=e[t[a]];this.outputShape=r,this.rank=r.length;const a=eL(this.rank),n=function(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],a=Array(t);for(let t=0;t<e.length;t++)a[e[t]]=r[t];return a.join()}(t);this.userCode=`
    void main() {
      ${a} resRC = getOutputCoords();
      setOutput(getA(${n}));
    }
    `}}class nt{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const r=Array(e.length);for(let a=0;a<r.length;a++)r[a]=e[t[a]];if(this.outputShape=r,this.rank=r.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const a=eL(this.rank),n=as("rc",this.rank),i=Array(this.rank);for(let e=0;e<t.length;e++)i[t[e]]=n[e];const o=`vec2(${i.slice(-2).join()})`,s=`++${n[this.rank-1]} < ${r[this.rank-1]}`,l=`getChannel(getA(${i.join()}), ${o})`;this.userCode=`
    void main() {
      ${a} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${s}) {
        result[1] = ${l};
      }
      --${n[this.rank-1]};
      if(++${n[this.rank-2]} < ${r[this.rank-2]}) {
        result[2] = ${l};
        if(${s}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}}function nr(e,t,r){let a=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new nt(e.shape,t):new ne(e.shape,t);return r.runWebGLProgram(a,[e],e.dtype)}function na(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{axis:i,keepDims:o}=a;return function(e,t,r,a){let n=e.shape.length,i=x.util.parseAxisParam(t,e.shape),o=i,s=eg.getAxesPermutation(o,n),l=null!=s,u=e;l&&(u=nr(e,s,a),o=eg.getInnerMostAxes(o.length,n)),eg.assertAxesAreInnerMostDims("sum",o,n);let[d,c]=eg.computeOutAndReduceShapes(u.shape,o),p=d;r&&(p=eg.expandShapeToKeepDim(d,i));let h=x.util.sizeFromShape(c),f=a5({inputs:{x:u},attrs:{shape:[x.util.sizeFromShape(e.shape)/h,h]},backend:a}),m=a9(f,(0,tK.sumOutType)(e.dtype),"sum",a),g=a5({inputs:{x:m},attrs:{shape:p},backend:a});return a.disposeIntermediateTensorInfo(f),a.disposeIntermediateTensorInfo(m),l&&a.disposeIntermediateTensorInfo(u),g}(n,i,o,r)}let nn={kernelName:td.Sum,backendName:"webgl",kernelFunc:na};function ni(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i}=r,{perm:o}=n,s=Array(i.shape.length);for(let e=0;e<s.length;e++)s[e]=i.shape[o[e]];if(a.shouldExecuteOnCPU([i])){let e=ai(a.texData.get(i.dataId).values,i.shape,i.dtype,o,s);t=a.makeTensorInfo(s,i.dtype),a.texData.get(t.dataId).values=e}else t=nr(i,o,a);return t}let no={kernelName:td.Transpose,backendName:"webgl",kernelFunc:ni};function ns({a:e,b:t,transposeA:r,transposeB:a,backend:n,bias:i=null,preluActivationWeights:o=null,leakyreluAlpha:s=0,activation:l=null}){let u,d=e.shape.length,c=t.shape.length,p=r?e.shape[d-2]:e.shape[d-1],h=a?t.shape[c-1]:t.shape[c-2],f=r?e.shape[d-1]:e.shape[d-2],m=a?t.shape[c-2]:t.shape[c-1],g=e.shape.slice(0,-2),v=t.shape.slice(0,-2),C=x.util.sizeFromShape(g),b=x.util.sizeFromShape(v),$=aD.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([f,m]);x.util.assert(p===h,()=>`Error in matMul: inner shapes (${p}) and (${h}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${r} and transposeB=${a} must match.`);let y=r?[C,p,f]:[C,f,p],I=a?[b,m,h]:[b,h,m],R=a5({inputs:{x:e},backend:n,attrs:{shape:y}}),T=a5({inputs:{x:t},backend:n,attrs:{shape:I}}),w=[R,T],S=Math.max(C,b),E=r?R.shape[1]:R.shape[2],N=null!=i,k=null!=o,A="leakyrelu"===l,O=null!=l?aJ(l,!0):null,F=N||k||A||null!=O;if((1===f||1===m)&&E>1e3&&!1===F){let e=R,t=T;r&&(e=ni({inputs:{x:R},backend:n,attrs:{perm:[0,2,1]}}),w.push(e)),a&&(t=ni({inputs:{x:T},backend:n,attrs:{perm:[0,2,1]}}),w.push(t));let i=1!==m,o=1===m,s=e;i&&(s=a5({inputs:{x:e},backend:n,attrs:{shape:[S,E,1]}}),w.push(s));let l=t;o&&(l=a5({inputs:{x:t},backend:n,attrs:{shape:[S,1,E]}}),w.push(l));let d=a4({inputs:{a:s,b:l},backend:n});u=na({inputs:{x:d},backend:n,attrs:{axis:1===m?2:1,keepDims:!0}}),w.push(d)}else{let l=(0,tK.upcastType)(e.dtype,t.dtype),d=new a0(y,I,[S,f,m],r,a,N,O,k,A),c=[R,T];if(null!=i&&c.push(i),k&&c.push(o),A){let e=n.makeTensorInfo([],"float32",x.util.createScalarValue(s,"float32"));c.push(e),w.push(e)}u=n.runWebGLProgram(d,c,l)}let _=a5({inputs:{x:u},backend:n,attrs:{shape:$}});for(let e of(w.push(u),w))n.disposeIntermediateTensorInfo(e);return _}let nl={kernelName:td._FusedMatMul,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{a:n,b:i,bias:o,preluActivationWeights:s}=t,{transposeA:l,transposeB:u,activation:d,leakyreluAlpha:c}=a;return ns({a:n,b:i,transposeA:l,transposeB:u,backend:r,bias:o,preluActivationWeights:s,leakyreluAlpha:c,activation:d})}},nu="return abs(x);",nd={kernelName:td.Abs,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a}=e,{x:n}=r;if(a.shouldExecuteOnCPU([n])&&"complex64"!==n.dtype){let e=r1(a.texData.get(n.dataId).values);return a.makeTensorInfo(n.shape,n.dtype,e)}return t=(0,f.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new aR(n.shape,nu):new ax(n.shape,nu),a.runWebGLProgram(t,[n],n.dtype)}},nc=aQ({opSnippet:am+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`}),np={kernelName:td.Acos,backendName:"webgl",kernelFunc:nc},nh=aQ({opSnippet:am+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`}),nf={kernelName:td.Acosh,backendName:"webgl",kernelFunc:nh},nx="return a + b;",nm=aZ({opSnippet:nx,packedOpSnippet:nx,supportsComplex:!0,cpuKernelImpl:ry}),ng={kernelName:td.Add,backendName:"webgl",kernelFunc:nm};class nv{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);const r=[];this.variableNames.forEach(e=>{r.push(`float v${e} = get${e}AtOutCoords();`)});const a=this.variableNames.map(e=>`v${e}`).join(" + ");this.userCode=`
      void main() {
        ${r.join("\n        ")}

        float result = ${a};
        setOutput(result);
      }
    `}}class nC{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);const r=[];this.variableNames.forEach(e=>{r.push(`vec4 v${e} = get${e}AtOutCoords();`)});const a=this.variableNames.map(e=>`v${e}`).join(" + ");this.userCode=`
      void main() {
        ${r.join("\n        ")}

        vec4 result = ${a};
        setOutput(result);
      }
    `}}let nb={kernelName:td.AddN,backendName:"webgl",kernelFunc:function e(t){let{inputs:r,backend:a}=t;if(1===r.length)return aW({inputs:{x:r[0]},backend:a});if(r.length>(0,f.env)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){let t=Math.floor(r.length/2),n=e({inputs:r.slice(0,t),backend:a}),i=e({inputs:r.slice(t),backend:a});return e({inputs:[n,i],backend:a})}let n=r.map(e=>e.dtype).reduce((e,t)=>(0,tK.upcastType)(e,t)),i=r.map(e=>e.shape),o=(0,f.env)().getBool("WEBGL_PACK")?new nC(r[0].shape,i):new nv(r[0].shape,i);return a.runWebGLProgram(o,r,n)}};var eg=eg;let n$={kernelName:td.All,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i}=r,{axis:o,keepDims:s}=n,l=i.shape.length,u=x.util.parseAxisParam(o,i.shape),d=u,c=eg.getAxesPermutation(d,l),p=i;null!=c&&(p=ni({inputs:{x:i},backend:a,attrs:{perm:c}}),d=eg.getInnerMostAxes(d.length,l)),eg.assertAxesAreInnerMostDims("all",d,l);let[h,f]=eg.computeOutAndReduceShapes(p.shape,d),m=a5({inputs:{x:p},backend:a,attrs:{shape:[-1,x.util.sizeFromShape(f)]}}),g=a9(m,m.dtype,"all",a);return t=s?a5({inputs:{x:g},backend:a,attrs:{shape:eg.expandShapeToKeepDim(h,u)}}):a5({inputs:{x:g},backend:a,attrs:{shape:h}}),a.disposeIntermediateTensorInfo(m),a.disposeIntermediateTensorInfo(g),null!=c&&a.disposeIntermediateTensorInfo(p),t}};var eg=eg;let ny={kernelName:td.Any,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i}=r,{axis:o,keepDims:s}=n,l=i.shape.length,u=x.util.parseAxisParam(o,i.shape),d=u,c=eg.getAxesPermutation(d,l),p=i;null!=c&&(p=ni({inputs:{x:i},backend:a,attrs:{perm:c}}),d=eg.getInnerMostAxes(d.length,l)),eg.assertAxesAreInnerMostDims("any",d,l);let[h,f]=eg.computeOutAndReduceShapes(p.shape,d),m=a5({inputs:{x:p},backend:a,attrs:{shape:[-1,x.util.sizeFromShape(f)]}}),g=a9(m,m.dtype,"any",a);return t=s?a5({inputs:{x:g},backend:a,attrs:{shape:eg.expandShapeToKeepDim(h,u)}}):a5({inputs:{x:g},backend:a,attrs:{shape:h}}),a.disposeIntermediateTensorInfo(m),a.disposeIntermediateTensorInfo(g),null!=c&&a.disposeIntermediateTensorInfo(p),t}};var eg=eg,eg=eg;class nI{constructor(e,t,r){this.variableNames=["A"];const{windowSize:a,batchSize:n,outSize:i}=e;r||this.variableNames.push("bestIndicesA"),this.outputShape=[n,i],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${a};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${a}; i++) {
          int inIdx = ${r?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));"};
          float candidate = getA(batch, inIdx);
          if (candidate ${"max"===t?">":"<"} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class nR{constructor(e,t,r,a){let n,i;this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,x.util.assert(e.length>2,()=>`Packed arg${r.charAt(0).toUpperCase()+r.slice(1)} supports only inputs with rank above 2.`);const o=Math.ceil(e[e.length-1]/t);this.outputShape=e.slice(0,-1),o>1&&this.outputShape.push(o),a||this.variableNames.push("bestIndicesA");const s=this.outputShape,l=s.length,u=eL(l),d=al("coords",l);if(1===o){const e=eL(i=l+1);n=`
        ${e} sourceLocR = ${e}(${d.join()}, 0);
        ++${d[l-1]};
        ${e} sourceLocG = ${e}(${d.join()}, 0);
        ++${d[l-2]};
        ${e} sourceLocA = ${e}(${d.join()}, 0);
        --${d[l-1]};
        ${e} sourceLocB = ${e}(${d.join()}, 0);
        --${d[l-2]};`}else i=l,n=`
        ${u} sourceLocR = coords;
        ++${d[l-1]};
        ${u} sourceLocG = coords;
        ++${d[l-2]};
        ${u} sourceLocA = coords;
        --${d[l-1]};
        ${u} sourceLocB = coords;
        --${d[l-2]};`;const c=["x","y","z","w","u","v"].slice(0,i),p="."+c[i-1],h=c.map(e=>"int "+e),f=al("sourceLocR",i-1).concat("inIdx.r"),m=al("sourceLocG",i-1).concat("inIdx.g"),g=al("sourceLocB",i-1).concat("inIdx.b"),v=al("sourceLocA",i-1).concat("inIdx.a"),C="max"===r?"greaterThan":"lessThan",b=a?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${f.join()}),
                             getBestIndicesAChannel(${m.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${v.join()})));`,$=`vec4(
            getAChannel(${f.join()}),
            hasNextCol ? getAChannel(${m.join()}) : 0.,
            hasNextRow ? getAChannel(${g.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,y=a?"":`
      float getBestIndicesAChannel(${h.join()}) {
        return getChannel(getBestIndicesA(${c.join()}),
                                          vec2(${c.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${h.join()}) {
        return getChannel(getA(${c.join()}),
                               vec2(${c.slice(-2).join()}));
      }
      ${y}
      void main() {
        ${u} coords = getOutputCoords();
        bool hasNextCol = ${d[l-1]} < ${s[l-1]-1};
        bool hasNextRow = ${d[l-2]} < ${s[l-2]-1};
        ${n}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${$};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${b}
          vec4 candidate = ${$};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${C}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function nT(e,t,r,a){let n=[r];if(eg.assertAxesAreInnerMostDims("arg"+a.charAt(0).toUpperCase()+a.slice(1),n,t.shape.length),!(0,f.env)().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){let r=[],i=e.texData.get(t.dataId),o=null!==i&&i.isPacked,s=t;o&&r.push(s=e.unpackTensor(t));let[l,u]=eg.computeOutAndReduceShapes(s.shape,n),d=a5({inputs:{x:s},backend:e,attrs:{shape:[-1,x.util.sizeFromShape(u)]}});r.push(d);let c=function e(t,r,a,n=null){let i=r.shape[0],o=r.shape[1];null!=n&&(i=n.shape[0],o=n.shape[1]);let s=eg.computeOptimalWindowSize(o),l=new nI({windowSize:s,inSize:o,batchSize:i,outSize:Math.ceil(o/s)},a,null==n),u=[r];null!=n&&u.push(n);let d=t.runWebGLProgram(l,u,"int32");if(1===d.shape[1])return d;let c=e(t,r,a,d);return t.disposeIntermediateTensorInfo(d),c}(e,d,a);r.push(c);let p=a5({inputs:{x:c},backend:e,attrs:{shape:l}});return r.forEach(t=>e.disposeIntermediateTensorInfo(t)),p}return function e(t,r,a,n=null){let i=null!=n?n.shape:r.shape,o=i[i.length-1],s=new nR(i,eg.computeOptimalWindowSize(o),a,null==n),l=null==n?[r]:[r,n],u=t.runWebGLProgram(s,l,"int32");if(u.shape.length===r.shape.length){let n=e(t,r,a,u);return t.disposeIntermediateTensorInfo(u),n}return u}(e,t,a)}let nw={kernelName:td.ArgMax,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{axis:i}=a,o=x.util.parseAxisParam(i,n.shape),s=eg.getAxesPermutation(o,n.shape.length),l=n,u=[];null!=s&&(u.push(l=ni({inputs:{x:n},backend:r,attrs:{perm:s}})),o=eg.getInnerMostAxes(o.length,l.shape.length)),eg.assertAxesAreInnerMostDims("argMax",[o[0]],l.shape.length);let d=nT(r,l,o[0],"max");return u.forEach(e=>r.disposeIntermediateTensorInfo(e)),d}};var eg=eg;let nS={kernelName:td.ArgMin,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{axis:i}=a,o=x.util.parseAxisParam(i,n.shape),s=eg.getAxesPermutation(o,n.shape.length),l=n,u=[];null!=s&&(u.push(l=ni({inputs:{x:n},backend:r,attrs:{perm:s}})),o=eg.getInnerMostAxes(o.length,l.shape.length)),eg.assertAxesAreInnerMostDims("argMin",[o[0]],l.shape.length);let d=nT(r,l,o[0],"min");return u.forEach(e=>r.disposeIntermediateTensorInfo(e)),d}},nE=aQ({opSnippet:am+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`}),nN={kernelName:td.Asin,backendName:"webgl",kernelFunc:nE},nk=aQ({opSnippet:am+"return log(x + sqrt(x * x + 1.0));"}),nA={kernelName:td.Asinh,backendName:"webgl",kernelFunc:nk},nO=aQ({opSnippet:am+`
  return atan(x);
`}),nF={kernelName:td.Atan,backendName:"webgl",kernelFunc:nO},n_=aZ({opSnippet:aP+`
  return atan(a, b);
`,packedOpSnippet:`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+aB+`
  return result;
`}),nD={kernelName:td.Atan2,backendName:"webgl",kernelFunc:n_},nP=aQ({opSnippet:am+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`}),nL={kernelName:td.Atanh,backendName:"webgl",kernelFunc:nP};var eg=eg;class nB{constructor(e,t,r,a=!1,n=!1){if(this.variableNames=["x"],"avg"===t&&r)throw Error("Cannot compute positions for average pool.");const i=e.filterWidth,o=e.strideHeight,s=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterHeight,c=e.effectiveFilterWidth,p=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;const f="avg"===t,x=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,m=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let g="0.0";if(f||(g="-1.0 / 1e-20"),r){this.userCode=`
        const ivec2 strides = ivec2(${o}, ${s});
        const ivec2 pads = ivec2(${p}, ${h});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${d};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${c};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${a?n?x:m:`wR * ${c} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(v="avgValue / max(count, 1.0)");const C=4*Math.floor(i/4),b=i%4,$=`
      if (${f}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${s});
      const ivec2 pads = ivec2(${p}, ${h});
      const float initializationValue = ${g};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${g});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${d};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${C}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${$}
          }

          int xC = xCCorner + ${C};
          if (${1===b}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${$}
          } else if (${2===b}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${$}
          } else if (${3===b}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${$}
          }
        }
        setOutput(${v});
      }
    `}}class nV{constructor(e,t,r,a=!1,n=!1){if(this.variableNames=["x"],"avg"===t&&r)throw Error("Cannot compute positions for average pool.");const i=e.filterWidth,o=e.strideDepth,s=e.strideHeight,l=e.strideWidth,u=e.dilationDepth,d=e.dilationHeight,c=e.dilationWidth,p=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,x=e.padInfo.front,m=e.padInfo.top,g=e.padInfo.left;this.outputShape=e.outShape;const v="avg"===t;let C="0.0";if(v||(C="-1.0 / 1e-20"),r){this.userCode=`
        const ivec3 strides =
            ivec3(${o}, ${s}, ${l});
        const ivec3 pads = ivec3(${x}, ${m}, ${g});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${p};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${h};
                wR += ${d}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${f};
                  wC += ${c}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${a?n?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${h} * ${f} +
                      wR * ${f} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(b="avgValue / max(count, 1.0)");const $=4*Math.floor(i/4),y=i%4,I=`
      if (${v}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${o}, ${s}, ${l});
      const ivec3 pads = ivec3(${x}, ${m}, ${g});
      const float initializationValue = ${C};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${C});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h};
            wR += ${d}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${$}; wC += 4) {
              int xC = xCCorner + wC * ${c};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${c}, ch),
                getValue(batch, xD, xR, xC + 2 * ${c}, ch),
                getValue(batch, xD, xR, xC + 3 * ${c}, ch)
              );

              ${I}
            }

            int xC = xCCorner + ${$};
            if (${1===y}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${I}
            } else if (${2===y}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${c}, ch),
                initializationValue,
                initializationValue
              );

              ${I}
            } else if (${3===y}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${c}, ch),
                getValue(batch, xD, xR, xC + 2 * ${c}, ch),
                initializationValue
              );

              ${I}
            }
          }
        }
        setOutput(${b});
      }
    `}}let nW={kernelName:td.AvgPool,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t;ex(n,"avgPool");let{filterSize:i,strides:o,pad:s,dimRoundingMode:l}=a;x.util.assert(eg.eitherStridesOrDilationsAreOne(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let u=eg.computePool2DInfo(n.shape,i,o,1,s,l);if(1===u.filterWidth&&1===u.filterHeight&&x.util.arraysEqual(u.inShape,u.outShape))return aW({inputs:{x:n},backend:r});let d=new nB(u,"avg",!1);return r.runWebGLProgram(d,[n],"float32")}};var eg=eg;let nU={kernelName:td.AvgPool3D,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{filterSize:i,strides:o,pad:s,dimRoundingMode:l,dataFormat:u}=a,d=new nV(eg.computePool3DInfo(n.shape,i,o,[1,1,1],s,l,u),"avg",!1);return r.runWebGLProgram(d,[n],"float32")}};var eg=eg;class nG{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterHeight,r=e.filterWidth,a=e.strideHeight,n=e.strideWidth,i=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.top,d=l-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${u}, ${d});
      const float avgMultiplier = float(${1/(t*r)});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${a}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${o}) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class nM{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterDepth,r=e.filterHeight,a=e.filterWidth,n=e.strideDepth,i=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterDepth,c=e.effectiveFilterHeight,p=e.effectiveFilterWidth,h=d-1-e.padInfo.front,f=c-1-e.padInfo.top,x=p-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${f}, ${x});
      const float avgMultiplier = float(${1/(t*r*a)});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${n}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${p};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let nz={kernelName:td.AvgPool3DGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,input:i}=t,{filterSize:o,strides:s,pad:l,dimRoundingMode:u}=a,d=new nM(eg.computePool3DInfo(i.shape,o,s,[1,1,1],l,u));return r.runWebGLProgram(d,[n],i.dtype)}};var eg=eg;let nX={kernelName:td.AvgPoolGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,input:i}=t;ex([n,i],"avgPoolGrad");let{filterSize:o,strides:s,pad:l}=a,u=new nG(eg.computePool2DInfo(i.shape,o,s,1,l));return r.runWebGLProgram(u,[n],i.dtype)}},nH={kernelName:td.BatchMatMul,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{a:n,b:i}=t,{transposeA:o,transposeB:s}=a;return ns({a:n,b:i,transposeA:o,transposeB:s,backend:r})}};var eg=eg;class nq{constructor(e,t,r,a,n,i){this.outputShape=[],this.variableNames=["x","mean","variance"],eg.assertAndGetBroadcastShape(e,t),eg.assertAndGetBroadcastShape(e,r);let o="0.0";null!=a&&(eg.assertAndGetBroadcastShape(e,a),this.variableNames.push("offset"),o="getOffsetAtOutCoords()");let s="1.0";null!=n&&(eg.assertAndGetBroadcastShape(e,n),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${o};
        float scale = ${s};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}var eg=eg;class nj{constructor(e,t,r,a,n,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],eg.assertAndGetBroadcastShape(e,t),eg.assertAndGetBroadcastShape(e,r);let o="vec4(0.0)";null!=a&&(eg.assertAndGetBroadcastShape(e,a),this.variableNames.push("offset"),o="getOffsetAtOutCoords()");let s="vec4(1.0)";null!=n&&(eg.assertAndGetBroadcastShape(e,n),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${o};
        vec4 scale = ${s};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}let nK={kernelName:td.FusedBatchNorm,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:r})=>{let{x:a,mean:n,variance:i,offset:o,scale:s}=e;x.util.assert(n.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),x.util.assert(null==o||n.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),x.util.assert(null==s||n.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=r;null==l&&(l=.001);let u=[a,n,i],d=null;null!=o&&(d=o.shape,u.push(o));let c=null;null!=s&&(c=s.shape,u.push(s));let p=(0,f.env)().getBool("WEBGL_PACK_NORMALIZATION")?new nj(a.shape,n.shape,i.shape,d,c,l):new nq(a.shape,n.shape,i.shape,d,c,l);return t.runWebGLProgram(p,u,u[0].dtype)}};var eg=eg,ra=ra;class nY{constructor(e){let t;this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const r=eL(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const a=function(e){if(1===e)return"sourceLoc";if(e<=6)return nQ.slice(0,e).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}(this.rank),n=e.map((e,t)=>`sourceLoc.${nQ[t]} = start[${t}] + coords.${nQ[t]};`);t=`
        ${r} sourceLoc;
        ${r} coords = getOutputCoords();
        ${n.join("\n")}
      `,this.userCode=`
      void main() {
        ${t}
        setOutput(getSource(${a}));
      }
    `}}let nQ=["x","y","z","w","u","v"];class nZ{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=eL(this.rank),r=al("coords",this.rank),a=al("sourceLoc",this.rank),n=1===this.rank?"sourceLoc":`vec2(${a.slice(-2).join()})`,i=`getChannel(getSource(${a.join()}), ${n})`,o=`
      result.x = ${i};
      if (++${r[this.rank-1]} < ${e[this.rank-1]}) {
        ++${a[this.rank-1]};
        result.y = ${i};
        --${a[this.rank-1]};
      }
    `,s=1===this.rank?"":`
      --${r[this.rank-1]};
      if (++${r[this.rank-2]} < ${e[this.rank-2]}) {
        ++${a[this.rank-2]};
        result.z = ${i};
        if (++${r[this.rank-1]} < ${e[this.rank-1]}) {
          ++${a[this.rank-1]};
          result.w = ${i};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${a[t]} = ${r[t]} + start[${t}];`).join("\n");this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${o}
        ${s}
        setOutput(result);
      }
    `}}function nJ(e){let t,r,a,n,i,{inputs:o,backend:s,attrs:l}=e,{x:u}=o,{begin:d,size:c}=l,[p,h]=ra.parseSliceParams(u,d,c);if(ra.assertParamsValid(u,p,h),0===x.util.sizeFromShape(h))return s.makeTensorInfo(h,u.dtype,[]);if(s.shouldExecuteOnCPU([u])||"string"===u.dtype){let e=r2(s.texData.get(u.dataId).values,p,h,u.shape,u.dtype);return s.makeTensorInfo(h,u.dtype,e)}let{isPacked:m}=s.texData.get(u.dataId),g=ra.isSliceContinous(u.shape,p,h);if(m||!g){let e=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new nZ(h):new nY(h),t=[p];return s.runWebGLProgram(e,[u],u.dtype,t)}return s.uploadToGPU(u.dataId),t=s.texData.get(u.dataId),r=s.makeTensorInfo(h,u.dtype),Object.assign(a=s.texData.get(r.dataId),t),a.refCount=1,a.shape=h,a.dtype=u.dtype,n=ra.computeFlatOffset(p,x.util.computeStrides(u.shape)),t.slice&&(n+=t.slice.flatOffset),a.slice={flatOffset:n,origDataId:t.slice&&t.slice.origDataId||u.dataId},i=s.dataRefCount.get(a.slice.origDataId)||1,s.dataRefCount.set(a.slice.origDataId,i+1),r}let n0={kernelName:td.Slice,backendName:"webgl",kernelFunc:nJ},n1={kernelName:td.BatchToSpaceND,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{blockShape:i,crops:o}=a;x.util.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let s=i.reduce((e,t)=>e*t),l=eg.getReshaped(n.shape,i,s),u=eg.getPermuted(l.length,i.length),d=eg.getReshapedPermuted(n.shape,i,s),c=eg.getSliceBeginCoords(o,i.length),p=eg.getSliceSize(d,o,i.length),h=[],f=a5({inputs:{x:n},backend:r,attrs:{shape:l}}),m=ni({inputs:{x:f},backend:r,attrs:{perm:u}}),g=a5({inputs:{x:m},backend:r,attrs:{shape:d}}),v=nJ({inputs:{x:g},backend:r,attrs:{begin:c,size:p}});return h.push(f),h.push(m),h.push(g),h.forEach(e=>r.disposeIntermediateTensorInfo(e)),v}},n2={kernelName:td.Bincount,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,weights:i}=t,{size:o}=a,s=rI(r.readSync(n.dataId),r.readSync(i.dataId),i.dtype,i.shape,o);return r.makeTensorInfo([o],i.dtype,s)}},n4=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,n3=`
  return float(int(a.r) & int(b.r));
`,n5={kernelName:td.BitwiseAnd,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a}=e,{a:n,b:i}=r,o=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS"),s=(0,f.env)().getNumber("WEBGL_VERSION");if(a.shouldExecuteOnCPU([n,i])||1===s){let e=a.texData.get(n.dataId).values,t=a.texData.get(i.dataId).values,[r,o]=rT(n.shape,i.shape,e,t,n.dtype),s=a.makeTensorInfo(o,n.dtype);return a.texData.get(s.dataId).values=r,s}return t=o?new aV(n4,n.shape,i.shape,!1):new aL(n3,n.shape,i.shape),a.runWebGLProgram(t,[n,i],n.dtype)}};var eg=eg;let n6={kernelName:td.BroadcastArgs,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{s0:a,s1:n}=t,i=r.readSync(a.dataId),o=r.readSync(n.dataId),s=eg.assertAndGetBroadcastShape(Array.from(i),Array.from(o));return r.makeTensorInfo([s.length],"int32",Int32Array.from(s))}};var n8=e.i(58348);let n7=aZ({opSnippet:"return float(a != b);",cpuKernelImpl:rH,dtype:"bool"}),n9={kernelName:td.NotEqual,backendName:"webgl",kernelFunc:n7};function ie(e){let{inputs:t,backend:r}=e,{input:a}=t;return aW({inputs:{x:r.texData.get(a.dataId).complexTensorInfos.real},backend:r})}let it={kernelName:td.Real,backendName:"webgl",kernelFunc:ie},ir={kernelName:td.Cast,backendName:"webgl",kernelFunc:function e(t){let{inputs:r,backend:a,attrs:n}=t,{x:i}=r,{dtype:o}=n;if("complex64"===o){if("complex64"===i.dtype)return aW({inputs:{x:i},backend:a});let t=n8.zeros(i.shape),r=e({inputs:{x:i},backend:a,attrs:{dtype:"float32"}}),n=aG({inputs:{real:r,imag:t},backend:a});return t.dispose(),a.disposeIntermediateTensorInfo(r),n}if("complex64"===i.dtype){let t=ie({inputs:{input:i},backend:a}),r=e({inputs:{x:t},backend:a,attrs:{dtype:o}});return a.disposeIntermediateTensorInfo(t),r}if(!x.util.hasEncodingLoss(i.dtype,o)){let e=aW({inputs:{x:i},backend:a});return{dataId:e.dataId,shape:e.shape,dtype:o}}if(a.shouldExecuteOnCPU([i])){let[e,t,r]=rw(a.texData.get(i.dataId).values,i.shape,i.dtype,o);return a.makeTensorInfo(e,t,r)}if("int32"===o){let e,t;return e=new ax(i.shape,"return float(int(x));"),{dataId:(t=a.runWebGLProgram(e,[i],"int32")).dataId,shape:t.shape,dtype:t.dtype}}if("bool"===o){let e=a.makeTensorInfo([],"bool",x.util.getTypedArrayFromDType("bool",1)),t=n7({inputs:{a:i,b:e},backend:a});return a.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${i.dtype} to ${o}`)}},ia="return ceil(x);",ii=aQ({opSnippet:ia,packedOpSnippet:ia,cpuKernelImpl:rS}),io={kernelName:td.Ceil,backendName:"webgl",kernelFunc:ii};class is{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class il{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}let iu={kernelName:td.ClipByValue,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i}=r,{clipValueMin:o,clipValueMax:s}=n;return t=(0,f.env)().getBool("WEBGL_PACK_CLIP")?new il(i.shape):new is(i.shape),a.runWebGLProgram(t,[i],i.dtype,[[o],[s]])}};class id{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function ic(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}let ip={kernelName:td.ComplexAbs,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:a}=t,n=r.texData.get(a.dataId),i=new id(a.shape),o=[ic(a,n.complexTensorInfos.real),ic(a,n.complexTensorInfos.imag)];return r.runWebGLProgram(i,o,o[0].dtype)}};var eg=eg,eg=eg,eg=eg;class ih{constructor(e){this.outputShape=[],this.outputShape=eg.computeOutShape(e,1),this.variableNames=e.map((e,t)=>`T${t}`);const t=Array(e.length-1);t[0]=e[0][1];for(let r=1;r<t.length;r++)t[r]=t[r-1]+e[r][1];const r=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){const a=t[e-1];r.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${a}));`)}const a=t.length,n=t[t.length-1];r.push(`else setOutput(getT${a}(yR, yC-${n}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${r.join("\n        ")}
      }
    `}}var eg=eg;class ix{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=eg.computeOutShape(e,t);const r=this.outputShape,a=r.length,n=eL(a),i=al("coords",a),o=["x","y","z","w","u","v"].slice(0,a);this.variableNames=e.map((e,t)=>`T${t}`);const s=Array(e.length-1);s[0]=e[0][t];for(let r=1;r<s.length;r++)s[r]=s[r-1]+e[r][t];const l=o[t],u=o.slice(-2),d=o.join();let c=`if (${l} < ${s[0]}) {
        return getChannel(
            getT0(${d}), vec2(${u.join()}));
        }`;for(let e=1;e<s.length;e++){const t=s[e-1];c+=`
        if (${l} < ${s[e]}  && ${l} >= ${s[e-1]}) {
          return getChannel(
            getT${e}(${im(o,l,t)}),
            vec2(${im(u,l,t)}));
        }`}const p=s.length,h=s[s.length-1];c+=`
        return getChannel(
          getT${p}(${im(o,l,h)}),
          vec2(${im(u,l,h)}));`,this.userCode=`
      float getValue(${o.map(e=>"int "+e)}) {
        ${c}
      }

      void main() {
        ${n} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[a-1]} = ${i[a-1]} + 1;
        if (${i[a-1]} < ${r[a-1]}) {
          result.g = getValue(${i});
        }

        ${i[a-2]} = ${i[a-2]} + 1;
        if (${i[a-2]} < ${r[a-2]}) {
          result.a = getValue(${i});
        }

        ${i[a-1]} = ${i[a-1]} - 1;
        if (${i[a-2]} < ${r[a-2]} &&
            ${i[a-1]} < ${r[a-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function im(e,t,r){let a=e.indexOf(t);return e.map((e,t)=>t===a?`${e} - ${r}`:e).join()}function ig(e){let{inputs:t,backend:r}=e,{input:a}=t;return aW({inputs:{x:r.texData.get(a.dataId).complexTensorInfos.imag},backend:r})}let iv={kernelName:td.Imag,backendName:"webgl",kernelFunc:ig};function iC(e){let{inputs:t,backend:r,attrs:a}=e,{axis:n}=a,i=x.util.parseAxisParam(n,t[0].shape)[0],o=t.map(e=>e.shape);eg.assertParamsConsistent(o,i);let s=eg.computeOutShape(t.map(e=>e.shape),i);if(0===x.util.sizeFromShape(s))return r.makeTensorInfo(s,t[0].dtype,[]);let l=t.filter(e=>x.util.sizeFromShape(e.shape)>0);return 1===l.length?aW({inputs:{x:l[0]},backend:r}):function e(t,r,a){var n,i,o;let s,l=t[0].dtype;if("complex64"===l){let n=t.map(e=>ie({inputs:{input:e},backend:a})),i=t.map(e=>ig({inputs:{input:e},backend:a})),o=e(n,r,a),s=e(i,r,a),l=aG({inputs:{real:o,imag:s},backend:a});return n.forEach(e=>a.disposeIntermediateTensorInfo(e)),i.forEach(e=>a.disposeIntermediateTensorInfo(e)),a.disposeIntermediateTensorInfo(o),a.disposeIntermediateTensorInfo(s),l}let u=a.shouldExecuteOnCPU(t);if("string"===l&&(u=!0),u){let e=t.map(e=>{let t=x.util.sizeFromShape(e.shape.slice(r));return a5({inputs:{x:e},backend:a,attrs:{shape:[-1,t]}})}),n=rE(e.map(e=>({vals:a.readSync(e.dataId),shape:e.shape})),eg.computeOutShape(e.map(e=>e.shape),1),l,1===e[0].shape[0]),i=eg.computeOutShape(t.map(e=>e.shape),r),o=a.makeTensorInfo(i,l,n);return e.forEach(e=>a.disposeIntermediateTensorInfo(e)),o}let d=t.filter(e=>x.util.sizeFromShape(e.shape)>0),c=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&d[0].shape.length>1;if(1===d.length){let e=c?new ax(t[0].shape,ab):new aR(t[0].shape,ab);return a.runWebGLProgram(e,t,l)}let p=(0,f.env)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(d.length>p){let t=[];for(let n=0;n<d.length;n+=p){let i=d.slice(n,n+p);t.push(e(i,r,a))}let n=e(t,r,a);for(let e of t)a.disposeIntermediateTensorInfo(e);return n}if(c){let e=new ix(d.map(e=>e.shape),r);return a.runWebGLProgram(e,d,l)}let{tensors2D:h,outShape:m}=(n=d,i=r,o=a,s=eg.computeOutShape(n.map(e=>e.shape),i),{tensors2D:n.map(e=>a5({inputs:{x:e},attrs:{shape:[-1,x.util.sizeFromShape(e.shape.slice(i))]},backend:o})),outShape:s}),g=new ih(h.map(e=>e.shape)),v=a.runWebGLProgram(g,h,l);h.forEach(e=>a.disposeIntermediateTensorInfo(e));let C=a5({inputs:{x:v},attrs:{shape:m},backend:a});return a.disposeIntermediateTensorInfo(v),C}(l,i,r)}let ib={kernelName:td.Concat,backendName:"webgl",kernelFunc:iC};var eg=eg;class i${constructor(e,t=!1,r=null,a=!1,n=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const i=e.padInfo.top,o=e.padInfo.left,s=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,d=e.dilationWidth,c=e.filterHeight,p=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4,x="channelsLast"===e.dataFormat;let m="",g="";r&&(m=a?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:n?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:`
          float activation(float x) {
            ${r}
          }
        `,g="result = activation(result);"),t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${m}

      const ivec2 strides = ivec2(${s}, ${l});
      const ivec2 pads = ivec2(${i}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${x?3:1}];

        ivec2 xRCCorner =
            ivec2(coords[${x?1:2}], coords[${x?2:3}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${c}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${p}; wC++) {
            int xC = xCCorner + wC * ${d};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${h}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${x}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${1===f}) {

              if (${x}) {
                dotProd +=
                    getX(batch, xR, xC, ${h}) *
                    getW(wR, wC, ${h}, d2);
              } else {
                dotProd +=
                    getX(batch, ${h}, xR, xC) *
                    getW(wR, wC, ${h}, d2);
              }

            } else if (${2===f}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2)
              );

              if (${x}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${3===f}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2),
                getW(wR, wC, ${h} + 2, d2)
              );

              if (${x}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1),
                  getX(batch, xR, xC, ${h} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC),
                  getX(batch, ${h} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${t?"result += getBiasAtOutCoords();":""}
        ${g}
        setOutput(result);
      }
    `}}class iy{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const t=e.padInfo.front,r=e.padInfo.top,a=e.padInfo.left,n=e.strideDepth,i=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterDepth,c=e.filterHeight,p=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${n}, ${i}, ${o});
      const ivec3 pads = ivec3(${t}, ${r}, ${a});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${d}; wF++) {
          int xF = xFCorner + wF * ${s};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${c}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${p}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${h}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${1===f}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${h}) *
                  getW(wF, wR, wC, ${h}, d2);
              } else if (${2===f}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${3===f}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1),
                  getX(batch, xF, xR, xC, ${h} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2),
                  getW(wF, wR, wC, ${h} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class iI{constructor(e,t=!1,r=null,a=!1,n=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=eM(this.outputShape.length);const i=e.padInfo.left,o=e.strideWidth,s=e.dilationWidth,l=e.filterHeight,u=e.filterWidth;let d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<u;e++)d+=`
           vec4 xTexelC${2*e};
           int xTexelC${2*e}Ready;
           vec4 xTexelC${2*e+1};
           int xTexelC${2*e+1}Ready;
           vec4 xC${e};`;d+=`
     for (int r = 0; r < ${l}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<u;e++)d+=`
           xTexelC${2*e} = vec4(0.0);
           xTexelC${2*e}Ready = 0;
           xTexelC${2*e+1} = vec4(0.0);
           xTexelC${2*e+1}Ready = 0;
           xC${e} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(u+1)/2;t++){const r=2*t;if(d+=`
           xC = xCCorner + ${r*s};
           `,1===o){if(r<u&&(i%2==1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }
               `,1===s&&r>0?d+=`
                 xC${r} = vec4(xTexelC${r-2}.zw, xTexelC${r}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${r} = vec4(previous.zw, xTexelC${r}.xy);
                   } else {
                     xC${r} = vec4(0.0, 0.0, xTexelC${r}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }

                 xC${r} = xTexelC${r};
                 `,r+1<u)){const e=i%2==0?x.util.nearestLargerEven(s):s;s%2==0&&i%2==1||s%2!=0&&i%2!=1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r+1}Ready == 0) {
                     xTexelC${r+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${r+1}.zw = vec2(0.0);
                     }
                     xTexelC${r+1}Ready = 1;
                   }
                   `,s>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${r+1} = vec4(previous.zw, xTexelC${r+1}.xy);
                     } else {
                      xC${r+1} = vec4(0.0, 0.0, xTexelC${r+1}.xy);
                     }
                     `:d+=`
                     xC${r+1} = vec4(xTexelC${r}.zw, xTexelC${r+1}.xy);
                     `):1===e?d+=`
                     xC${r+1} = xTexelC${r};
                     `:d+=`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r+1}Ready == 0) {
                       xTexelC${r+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${r+1}.zw = vec2(0.0);
                       }
                       xTexelC${r+1}Ready = 1;
                     }

                     xC${r+1} = xTexelC${r+1};
                     `}}else r<u&&(i%2==1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${r+1}Ready == 0) {
                   xTexelC${r+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${r+1}.zw = vec2(0.0);
                   }
                   xTexelC${r+1}Ready = 1;
                 }

                 xC${r} = vec4(xTexelC${r}.zw, xTexelC${r+1}.zw);
               `,r+1<u&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${r+1} = vec4(xTexelC${r+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r+1}Ready == 0) {
                   xTexelC${r+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${r+1}.zw = vec2(0.);
                   }
                   xTexelC${r+1}Ready = 1;
                 }

                 xC${r} = vec4(
                   xTexelC${r}.xy, xTexelC${r+1}.xy);
               `,r+1<u&&(d+=`
                   xC${r+1} = vec4(xTexelC${r}.zw, xTexelC${r+1}.zw);
                 `)));r<u&&(d+=`
             wTexel = getW(r, ${r}, d1, d2);
             dotProd += xC${r}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${r}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,r+1<u&&(d+=`
               wTexel = getW(r, ${r+1}, d1, d2);
               dotProd += xC${r+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${r+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   
     }
   
     }
   `;let c="",p="";r&&(c=a?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${r}
         }`:n?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${r}
         }`:`vec4 activation(vec4 x) {
           ${r}
         }`,p="result = activation(result);"),t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${c}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${t?"result += getBiasAtOutCoords();":""}
         ${p}
         setOutput(result);
       }
     `}}class iR{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=eM(this.outputShape.length);const{dataFormat:r}=t,a=eI(),n="channelsLast"===r,i=n?1:2,o=n?2:3,s=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`;let l="";for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)l+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${s}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${o}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${n}) {
                  innerDims = vec2(d1, ch);
                  result[${2*e+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${2*e+t}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${l}

        ${a.output} = result;
      }
    `}}function iT(e,t){let r=e.length;return r>=3?t?[...e.slice(0,-3),e[r-3]*e[r-2],e[r-1]]:[...e.slice(0,-3),e[r-3],e[r-2]*e[r-1]]:!t&&1===r&&e[0]>1?[e[0],1]:null}function iw({x:e,filter:t,convInfo:r,backend:a,bias:n=null,preluActivationWeights:i=null,leakyreluAlpha:o=0,activation:s=null}){let l,u=e.shape,d=a.texData.get(e.dataId),c=r.inChannels,p=u[0]*u[1]*u[2],h=r.outChannels,f="channelsLast"===r.dataFormat,m=[];if(null!=i){let e=iT(i.shape,f);null!=e&&(i=a5({inputs:{x:i},backend:a,attrs:{shape:e}}),m.push(i))}if(null!=n){let e=iT(n.shape,f);null!=e&&(n=a5({inputs:{x:n},backend:a,attrs:{shape:e}}),m.push(n))}if(!((1===p||1===h)&&c>1e3)&&d.isPacked&&f&&null!=d.texture&&u[2]%2!=0&&x.util.arraysEqual(d.shape.slice(-3),u.slice(-3))){let c=u[0]*u[1]*(u[2]+1),p={dataId:e.dataId,shape:[1,c,r.inChannels],dtype:e.dtype},h=d.shape;d.shape=d.shape.slice(),d.shape[d.shape.length-2]++,x.util.assert(ea(d.shape,p.shape),()=>`packed reshape ${d.shape} to ${p.shape} isn't free`);let f=a5({inputs:{x:t},backend:a,attrs:{shape:[1,r.inChannels,r.outChannels]}});m.push(f);let g=ns({a:p,b:f,backend:a,transposeA:!1,transposeB:!1,bias:n,activation:s,preluActivationWeights:i,leakyreluAlpha:o}),v=a.texData.get(g.dataId);x.util.assert(v.isPacked,()=>"batchMatMul result is expected to be packed"),d.shape=h,v.shape=r.outShape,(l=aW({inputs:{x:g},backend:a})).shape=r.outShape,m.push(g)}else{let u=r.outHeight*r.outWidth,d=a5({inputs:{x:e},backend:a,attrs:{shape:f?[r.batchSize,u,r.inChannels]:[r.batchSize,r.inChannels,u]}}),c=a5({inputs:{x:t},backend:a,attrs:{shape:[1,r.inChannels,r.outChannels]}}),p=ns({a:f?d:c,b:f?c:d,transposeA:!f,transposeB:!1,backend:a,bias:n,activation:s,preluActivationWeights:i,leakyreluAlpha:o});l=a5({inputs:{x:p},backend:a,attrs:{shape:r.outShape}}),m.push(d),m.push(c),m.push(p)}for(let e of m)a.disposeIntermediateTensorInfo(e);return l}function iS({x:e,filter:t,convInfo:r,backend:a,bias:n=null,preluActivationWeights:i=null,leakyreluAlpha:o=0,activation:s=null}){let{filterWidth:l,filterHeight:u,inChannels:d,outWidth:c,outHeight:p,dataFormat:h}=r,f="channelsLast"===h,m=l*u*d,g=p*c,v=[r.batchSize,m,g],C=[];if(null!=i){let e=iT(i.shape,f);null!=e&&(i=a5({inputs:{x:i},backend:a,attrs:{shape:e}}),C.push(i))}if(null!=n){let e=iT(n.shape,f);null!=e&&(n=a5({inputs:{x:n},backend:a,attrs:{shape:e}}),C.push(n))}let b=a5({inputs:{x:t},backend:a,attrs:{shape:[1,m,x.util.sizeFromShape(t.shape)/m]}});C.push(b);let $=new iR(v,r),y=[e.shape,[r.padInfo.top,r.padInfo.left],[r.strideHeight,r.strideWidth],[r.dilationHeight,r.dilationWidth],[r.inChannels],[r.filterWidth*r.inChannels],[r.outWidth]],I=a.runWebGLProgram($,[e],"float32",y),R=a5({inputs:{x:I},backend:a,attrs:{shape:v}});C.push(I),C.push(R);let T=null!=n,w=null!=i,S="leakyrelu"===s,E=s?aJ(s,!0):null,N=new a0(f?R.shape:b.shape,f?b.shape:R.shape,f?[r.batchSize,g,r.outChannels]:[r.batchSize,r.outChannels,g],!0,!1,T,E,w,S),k=f?[R,b]:[b,R];if(n&&k.push(n),w&&k.push(i),S){let e=a.makeTensorInfo([],"float32",x.util.createScalarValue(o,"float32"));k.push(e),C.push(e)}let A=a.runWebGLProgram(N,k,"float32"),O=a5({inputs:{x:A},backend:a,attrs:{shape:r.outShape}});for(let e of(C.push(A),C))a.disposeIntermediateTensorInfo(e);return O}let iE={kernelName:td.Conv2D,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i,filter:o}=r,{strides:s,pad:l,dataFormat:u,dilations:d,dimRoundingMode:c}=n,p=eg.convertConv2DDataFormat(u),h=eg.computeConv2DInfo(i.shape,o.shape,s,d,l,c,!1,p);if(1===h.filterHeight&&1===h.filterWidth&&1===h.dilationHeight&&1===h.dilationWidth&&1===h.strideHeight&&1===h.strideWidth&&("SAME"===h.padInfo.type||"VALID"===h.padInfo.type))t=iw({x:i,filter:o,convInfo:h,backend:a});else if(h.strideWidth<=2&&"channelsLast"===p&&(0,f.env)().getBool("WEBGL_EXP_CONV")){let e=new iI(h),r=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];t=a.runWebGLProgram(e,[i,o],"float32",r)}else if((0,f.env)().getBool("WEBGL_CONV_IM2COL"))t=iS({x:i,filter:o,convInfo:h,backend:a});else{let e=new i$(h);t=a.runWebGLProgram(e,[i,o],"float32")}let x=a5({inputs:{x:t},backend:a,attrs:{shape:h.outShape}});return a.disposeIntermediateTensorInfo(t),x}};var eg=eg;class iN{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,r=e.strideWidth,a=e.padInfo.top,n=e.padInfo.left,i="channelsLast"===e.dataFormat;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${a};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${r} - ${n};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${i?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class ik{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,r=e.filterWidth,a=e.strideHeight,n=e.strideWidth,i="channelsLast"===e.dataFormat,o=t-1-e.padInfo.top,s=r-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${i?3:1}];

        ivec2 dyCorner = ivec2(coords[${i?1:2}], coords[${i?2:3}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${a}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${r} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class iA{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideDepth,r=e.strideHeight,a=e.strideWidth,n=e.padInfo.front,i=e.padInfo.top,o=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${n};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${r} - ${i};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${a} - ${o};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class iO{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterDepth,r=e.filterHeight,a=e.filterWidth,n=e.strideDepth,i=e.strideHeight,o=e.strideWidth,s=t-1-e.padInfo.front,l=r-1-e.padInfo.top,u=a-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${s}, ${l}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${n}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${r}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${r} - 1 - wR;

            for (int wC = 0; wC < ${a}; wC++) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${a} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let iF={kernelName:td.Conv2DBackpropFilter,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,dy:i}=t,{strides:o,pad:s,dataFormat:l,dimRoundingMode:u,filterShape:d}=a,c=eg.convertConv2DDataFormat(l),p=new iN(eg.computeConv2DInfo(n.shape,d,o,1,s,u,!1,c));return r.runWebGLProgram(p,[n,i],"float32")}};var eg=eg;class i_{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=eM(this.outputShape.length);const t=e.filterHeight,r=e.filterWidth,a=t-1-e.padInfo.top,n=r-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${n});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            int wCPerm = ${r} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}let iD={kernelName:td.Conv2DBackpropInput,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,filter:i}=t,{inputShape:o,strides:s,pad:l,dataFormat:u,dimRoundingMode:d}=a,c=eg.convertConv2DDataFormat(u),p=eg.computeConv2DInfo(o,i.shape,s,1,l,d,!1,c);if((0,f.env)().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&"channelsLast"===c){let e=[[p.strideHeight,p.strideWidth]],t=new i_(p);return r.runWebGLProgram(t,[n,i],"float32",e)}{let e=new ik(p);return r.runWebGLProgram(e,[n,i],"float32")}}};var eg=eg;let iP={kernelName:td.Conv3D,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,filter:i}=t,{strides:o,pad:s,dilations:l}=a,u=new iy(eg.computeConv3DInfo(n.shape,i.shape,o,l,s));return r.runWebGLProgram(u,[n,i],"float32")}};var eg=eg;let iL={kernelName:td.Conv3DBackpropFilterV2,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,dy:i}=t,{strides:o,pad:s,filterShape:l}=a,u=new iA(eg.computeConv3DInfo(n.shape,l,o,1,s));return r.runWebGLProgram(u,[n,i],"float32")}};var eg=eg;let iB={kernelName:td.Conv3DBackpropInputV2,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,filter:i}=t,{pad:o,strides:s,inputShape:l}=a,u=new iO(eg.computeConv3DInfo(l,i.shape,s,1,o));return r.runWebGLProgram(u,[n,i],"float32")}},iV=aQ({opSnippet:aY+`
  return cos(x);
`,packedOpSnippet:`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${aB}
  return result;
`}),iW={kernelName:td.Cos,backendName:"webgl",kernelFunc:iV},iU=aQ({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),iG={kernelName:td.Cosh,backendName:"webgl",kernelFunc:iU};class iM{constructor(e,t,r,a,n){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,o,s,l]=e,[u]=t,[d,c]=r;this.outputShape=[u,d,c,l];const[p,h]=[`${o-1}.0`,`${s-1}.0`],[f,x,m]=d>1?[`${(o-1)/(d-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[g,v,C]=c>1?[`${(s-1)/(c-1)}`,"(x2-x1) * width_ratio",`x1*${h} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${h}`];this.userCode=`
      const float height_ratio = float(${f});
      const float width_ratio = float(${g});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${v};

        float in_y = ${m};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${n}));
          return;
        }
        float in_x = ${C};
        if( in_x < 0.0 || in_x > ${h} ) {
          setOutput(float(${n}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${+("bilinear"===a)} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}let iz={kernelName:td.CropAndResize,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{image:n,boxes:i,boxInd:o}=t,{cropSize:s,method:l,extrapolationValue:u}=a,d=new iM(n.shape,i.shape,s,l,u);return r.runWebGLProgram(d,[n,i,o],"float32")}};(s=c||(c={})).Prod="*",s.Sum="+";class iX{constructor(e,t,r,a){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const n=this.outputShape.length,i=this.op===c.Prod?"1.0":"0.0",o=r?i:`getX(${iH(n,"coords",this.op)})`,s=this.outputShape[this.outputShape.length-1];let l="",u="";r?(l=a?`end != ${s-1}`:"end != 0",u=a?"end + 1":"end - 1"):(l=a?`end + pow2 < ${s}`:"end >= pow2",u=a?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${eL(n)} coords = getOutputCoords();
        int end = ${iq(n,"coords",this.op)};
        float val = ${o};
        int pow2 = int(pow(2.0, index));
        if (${l}) {
          int idx = ${u};
          ${iq(n,"coords",this.op)} = idx;
          val ${this.op}= getX(${iH(n,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function iH(e,t,r){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${r} for rank ${e} is not yet supported`)}function iq(e,t,r){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw Error(`Cumulative ${r} for rank ${e} is not yet supported`)}var eg=eg;function ij(e,t,r,a,n,i){let o=t.shape.length,s=eg.getAxesPermutation([a],o),l=t;null!=s&&(l=ni({inputs:{x:t},backend:r,attrs:{perm:s}}));let u=eg.getInnerMostAxes(1,o)[0];if(u!==o-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${a}`);let d=l.shape[u],c=aW({inputs:{x:l},backend:r});for(let t=0;t<=Math.ceil(Math.log2(d))-1;t++){let a=new iX(e,l.shape,!1,i),n=[[t]],o=c;c=r.runWebGLProgram(a,[c],c.dtype,n),r.disposeIntermediateTensorInfo(o)}if(n){let t=new iX(e,l.shape,n,i),a=c;c=r.runWebGLProgram(t,[c],c.dtype),r.disposeIntermediateTensorInfo(a)}if(null!=s){let e=ni({inputs:{x:c},backend:r,attrs:{perm:eg.getUndoAxesPermutation(s)}});return r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(l),e}return c}let iK={kernelName:td.Cumprod,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{axis:i,exclusive:o,reverse:s}=a;return ij(c.Prod,n,r,i,o,s)}},iY={kernelName:td.Cumsum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{axis:i,exclusive:o,reverse:s}=a;return ij(c.Sum,n,r,i,o,s)}},iQ={kernelName:td.DenseBincount,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,weights:i}=t,{size:o,binaryOutput:s}=a;if(1===n.shape.length){let e=rI(r.readSync(n.dataId),r.readSync(i.dataId),i.dtype,i.shape,o);return r.makeTensorInfo([o],i.dtype,e)}if(2===n.shape.length){let e=rR(r.bufferSync(n),r.bufferSync(i),o,s);return r.makeTensorInfo(e.shape,i.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}};class iZ{constructor(e,t,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}let iJ={kernelName:td.DepthToSpace,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{blockSize:i,dataFormat:o}=a,s=n.shape[0],l="NHWC"===o?n.shape[1]:n.shape[2],u="NHWC"===o?n.shape[2]:n.shape[3],d="NHWC"===o?n.shape[3]:n.shape[1],c=l*i,p=u*i,h=d/(i*i),f=new iZ("NHWC"===o?[s,c,p,h]:[s,h,c,p],i,o);return r.runWebGLProgram(f,[n],n.dtype)}};var eg=eg;class i0{constructor(e,t=!1,r=null,a=!1,n=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=eM(this.outputShape.length);const i=e.filterHeight,o=e.filterWidth,s=e.outChannels/e.inChannels;let l="",u="";r&&(l=a?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:n?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:`
          float activation(float x) {
            ${r}
          }
        `,u="result = activation(result);"),t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${l}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${o}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${t?"result += getBiasAtOutCoords();":""}
        ${u}
        setOutput(result);
      }
    `}}class i1{constructor(e,t=!1,r=null,a=!1,n=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=eM(this.outputShape.length);const i=e.outChannels/e.inChannels,o=e.padInfo.left,s=e.strideWidth,l=e.dilationWidth,u=e.filterHeight,d=e.filterWidth;let c=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<d;e++)c+=`
          vec4 xTexelC${2*e};
          int xTexelC${2*e}Ready;
          vec4 xTexelC${2*e+1};
          int xTexelC${2*e+1}Ready;
          vec4 xC${e};`;c+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let e=0;e<d;e++)c+=`
          xTexelC${2*e} = vec4(0.0);
          xTexelC${2*e}Ready = 0;
          xTexelC${2*e+1} = vec4(0.0);
          xTexelC${2*e+1}Ready = 0;
          xC${e} = vec4(0.0);`;c+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(d+1)/2;e++){const t=2*e;if(c+=`
          xC = xCCorner + ${t*l};
          `,1===s){if(t<d&&(o%2==1?(c+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,1===l&&t>0?c+=`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:c+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):c+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<d)){const e=o%2==0?x.util.nearestLargerEven(l):l;l%2==0&&o%2==1||l%2!=0&&o%2!=1?(c+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,l>1?c+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:c+=`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):1===e?c+=`
                    xC${t+1} = xTexelC${t};
                    `:c+=`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<d&&(o%2==1?(c+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<d&&(c+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(c+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<d&&(c+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<d&&(c+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<d&&(c+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}c+=`
    }
  
      }
    `;let p="",h="";r&&(p=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:n?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:`vec4 activation(vec4 x) {
          ${r}
        }`,h="result = activation(result);"),t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${c}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${t?"result += getBiasAtOutCoords();":""}
        ${h}
        setOutput(result);
      }
    `}}let i2={kernelName:td.DepthwiseConv2dNative,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i,filter:o}=r,{strides:s,pad:l,dilations:u,dimRoundingMode:d}=n,c=u;null==c&&(c=[1,1]),x.util.assert(eg.eitherStridesOrDilationsAreOne(s,c),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${s} and dilations '${c}'`);let p=eg.computeConv2DInfo(i.shape,o.shape,s,c,l,d,!0);t=(0,f.env)().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels==1?new i1(p):new i0(p);let h=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return a.runWebGLProgram(t,[i,o],"float32",h)}};var eg=eg;class i4{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,r=e.strideWidth,a=e.padInfo.top,n=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${a};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${r} - ${n};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class i3{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,r=e.filterWidth,a=e.strideHeight,n=e.strideWidth,i=t-1-e.padInfo.top,o=r-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${a}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${r} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${s}; dm++) {
              int d2 = d1 * ${s} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let i5={kernelName:td.DepthwiseConv2dNativeBackpropFilter,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,dy:i}=t,{strides:o,dilations:s,pad:l,dimRoundingMode:u,filterShape:d}=a,c=new i4(eg.computeConv2DInfo(n.shape,d,o,s,l,u,!0));return r.runWebGLProgram(c,[n,i],"float32")}};var eg=eg;let i6={kernelName:td.DepthwiseConv2dNativeBackpropInput,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,filter:i}=t,{strides:o,dilations:s,pad:l,dimRoundingMode:u,inputShape:d}=a,c=new i3(eg.computeConv2DInfo(d,i.shape,o,s,l,u,!0));return r.runWebGLProgram(c,[n,i],"float32")}};class i8{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}let i7={kernelName:td.Diag,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:a}=t,n=[...a.shape,...a.shape],i=x.util.sizeFromShape(a.shape),o=a5({inputs:{x:a},backend:r,attrs:{shape:[i]}}),s=new i8(i),l=r.runWebGLProgram(s,[o],o.dtype),u=a5({inputs:{x:l},backend:r,attrs:{shape:n}});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(l),u}};var eg=eg;class i9{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:t,inWidth:r,padInfo:a,strideHeight:n,strideWidth:i,filterHeight:o,filterWidth:s,dilationHeight:l,dilationWidth:u}=e,{top:d,left:c}=a;this.userCode=`
      const ivec2 strides = ivec2(${n}, ${i});
      const ivec2 pads = ivec2(${d}, ${c});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${o}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${s}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${r}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}let oe={kernelName:td.Dilation2D,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i,filter:o}=r,{strides:s,pad:l,dilations:u}=n,d=eg.computeDilation2DInfo(i.shape,o.shape,s,l,"NHWC",u),c=new i9(d),p=a5({inputs:{x:t=a.runWebGLProgram(c,[i,o],"float32")},backend:a,attrs:{shape:d.outShape}});return a.disposeIntermediateTensorInfo(t),p}};var eg=eg;let ot={kernelName:td.Einsum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{equation:n}=a,{allDims:i,summedDims:o,idDims:s}=eg.decodeEinsumEquation(n,t.length);eg.checkEinsumDimSizes(i.length,s,t);let{path:l,steps:u}=eg.getEinsumComputePath(o,s),d=u.length,c=null,p=i.length,h=[];for(let e=0;e<d;++e){for(let a of u[e]){let e,{permutationIndices:n,expandDims:i}=eg.getEinsumPermutation(p,s[a]);eg.isIdentityPermutation(n)?e=t[a]:(e=ni({inputs:{x:t[a]},backend:r,attrs:{perm:n}}),h.push(e));let o=e.shape.slice();for(let e=0;e<i.length;++e)o.splice(i[e],0,1);x.util.arraysEqual(e.shape,o)||(e=a5({inputs:{x:e},backend:r,attrs:{shape:o}}),h.push(e)),null===c?c=e:(c=a4({inputs:{a:e,b:c},backend:r}),h.push(c))}e<d-1&&(l[e]>=0&&(c=na({inputs:{x:c},backend:r,attrs:{axis:l[e]-(i.length-p),keepDims:!1}}),h.push(c)),p--)}for(let e of h)e!==c&&r.disposeIntermediateTensorInfo(e);return c}},or=aQ({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),oa={kernelName:td.Elu,backendName:"webgl",kernelFunc:or},on=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,oi={kernelName:td.EluGrad,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r}=e,{dy:a,y:n}=t,i=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new aV(on,a.shape,n.shape):new aL("return (b >= 0.0) ? a : a * (b + 1.0);",a.shape,n.shape);return r.runWebGLProgram(i,[a,n],a.dtype)}},oo=aZ({opSnippet:"return float(a == b);",packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:"bool",cpuKernelImpl:rN}),os={kernelName:td.Equal,backendName:"webgl",kernelFunc:oo};var eg=eg;let ol=aQ({opSnippet:`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${eg.ERF_P};
  float a1 = ${eg.ERF_A1};
  float a2 = ${eg.ERF_A2};
  float a3 = ${eg.ERF_A3};
  float a4 = ${eg.ERF_A4};
  float a5 = ${eg.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`}),ou={kernelName:td.Erf,backendName:"webgl",kernelFunc:ol},od=aQ({opSnippet:aY+`
  return exp(x);
`,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:rk,dtype:"float32"}),oc={kernelName:td.Exp,backendName:"webgl",kernelFunc:od};function op(e){let{inputs:t,attrs:r,backend:a}=e,{dim:n}=r,{input:i}=t,o=i.shape.length,s=i.shape.slice(),l=n;return n<0&&(x.util.assert(-(o+1)<=n,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),l=o+n+1),s.splice(l,0,1),a5({inputs:{x:i},backend:a,attrs:{shape:s}})}let oh={kernelName:td.ExpandDims,backendName:"webgl",kernelFunc:op},of="return exp(x) - 1.0;",ox=aQ({opSnippet:of,packedOpSnippet:of,cpuKernelImpl:rA}),om={kernelName:td.Expm1,backendName:"webgl",kernelFunc:ox};class og{constructor(e,t,r){let a;this.variableNames=["real","imag"];const n=t[1];this.outputShape=t;const i=r?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,o=r?`${n}.0`:"1.0";if("real"===e)a="return real * expR - imag * expI;";else if("imag"===e)a="return real * expI + imag * expR;";else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${i};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${n});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${n}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${o};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function ov(e,t,r){let a=r.texData.get(e.dataId),n=x.util.sizeFromShape(e.shape),i=e.shape[e.shape.length-1],o=a5({inputs:{x:e},backend:r,attrs:{shape:[n/i,i]}}),s=o.shape,l=new og("real",s,t),u=new og("imag",s,t),d=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s}],c=r.runWebGLProgram(l,d,"float32"),p=r.runWebGLProgram(u,d,"float32"),h=aG({inputs:{real:c,imag:p},backend:r});r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(p);let f=a5({inputs:{x:h},backend:r,attrs:{shape:e.shape}});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(h),f}let oC={kernelName:td.FFT,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{input:a}=t;return ov(a,!1,r)}};class ob{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function o$(e){let{backend:t,attrs:r}=e,{shape:a,value:n}=r,{dtype:i}=r;if("string"===(i=i||x.util.inferDtype(n))){let e=x.util.getArrayFromDType(i,x.util.sizeFromShape(a));return e.fill(n),t.makeTensorInfo(a,i,e)}{let e=new ob(a,n),r=[[n]];return t.runWebGLProgram(e,[],i,r)}}let oy={kernelName:td.Fill,backendName:"webgl",kernelFunc:o$};class oI{constructor(e){this.variableNames=["Image"],this.outputShape=[];const t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}let oR={kernelName:td.FlipLeftRight,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{let{image:r}=e,a=new oI(r.shape);return t.runWebGLProgram(a,[r],r.dtype)}},oT="return floor(x);",ow=aQ({opSnippet:oT,packedOpSnippet:oT,cpuKernelImpl:rO}),oS={kernelName:td.Floor,backendName:"webgl",kernelFunc:ow},oE=aZ({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:"int32"}),oN={kernelName:td.FloorDiv,backendName:"webgl",kernelFunc:oE};class ok{constructor(e){this.variableNames=["A"];const t=eI(),[r,a]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${a}.0, ${r}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class oA{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const t=eI(),[r,a]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${a}.0, ${r}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}}let oO={kernelName:td.FromPixels,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:n}=e,{pixels:i}=t,{numChannels:o}=n,s="u">typeof HTMLVideoElement&&i instanceof HTMLVideoElement,l="u">typeof HTMLImageElement&&i instanceof HTMLImageElement,[d,c]=s?[i.videoWidth,i.videoHeight]:[i.width,i.height],p=[c,d],h=[c,d,o];if(l||s){let e=(0,f.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(null==a||e!==oF)&&(oF=e,a=document.createElement("canvas").getContext("2d",{willReadFrequently:oF})),a.canvas.width=d,a.canvas.height=c,a.drawImage(i,0,0,d,c),i=a.canvas}let x=r.makeTensorInfo(p,"int32");r.texData.get(x.dataId).usage=u.PIXELS,r.gpgpu.uploadPixelDataToTexture(r.getTexture(x.dataId),i);let m=(0,f.env)().getBool("WEBGL_PACK")?new oA(h):new ok(h),g=r.runWebGLProgram(m,[x],"int32");return r.disposeData(x.dataId),g}},oF=(0,f.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");var eg=eg;let o_={kernelName:td.FusedConv2D,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i,filter:o,bias:s,preluActivationWeights:l}=r,{strides:u,pad:d,dataFormat:c,dilations:p,dimRoundingMode:h,activation:m,leakyreluAlpha:g}=n,v=eg.convertConv2DDataFormat(c),C=eg.computeConv2DInfo(i.shape,o.shape,u,p,d,h,!1,v),b=[],$=null!=s,y=null!=l,I="leakyrelu"===m,R=()=>{let e=[i,o],t=(e,t)=>{if("NCHW"===t&&1===e.shape.length&&1!==e.shape[0]){let t=a5({inputs:{x:e},backend:a,attrs:{shape:[e.shape[0],1,1]}});return b.push(t),t}return e};if($&&e.push(t(s,c)),y&&e.push(t(l,c)),I){let t=a.makeTensorInfo([],"float32",x.util.createScalarValue(g,"float32"));e.push(t),b.push(t)}return e};if(1===C.filterHeight&&1===C.filterWidth&&1===C.dilationHeight&&1===C.dilationWidth&&1===C.strideHeight&&1===C.strideWidth&&("SAME"===C.padInfo.type||"VALID"===C.padInfo.type))t=iw({x:i,filter:o,convInfo:C,backend:a,bias:s,activation:m,preluActivationWeights:l,leakyreluAlpha:g});else if(C.strideWidth<=2&&"channelsLast"===v&&(0,f.env)().getBool("WEBGL_EXP_CONV")){let e=new iI(C,$,m?aJ(m,!0):null,y,I),r=[[C.padInfo.top,C.padInfo.left],[C.strideHeight,C.strideWidth],[C.dilationHeight,C.dilationWidth],[C.inHeight,C.inWidth]],n=R();t=a.runWebGLProgram(e,n,"float32",r)}else if((0,f.env)().getBool("WEBGL_CONV_IM2COL"))t=iS({x:i,filter:o,convInfo:C,backend:a,bias:s,activation:m,preluActivationWeights:l,leakyreluAlpha:g});else{let e=new i$(C,$,m?aJ(m,!1):null,y,I),r=R();t=a.runWebGLProgram(e,r,"float32")}let T=a5({inputs:{x:t},backend:a,attrs:{shape:C.outShape}});return b.push(t),b.forEach(e=>a.disposeIntermediateTensorInfo(e)),T}};var eg=eg;let oD={kernelName:td.FusedDepthwiseConv2D,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i,filter:o,bias:s,preluActivationWeights:l}=r,{strides:u,pad:d,dilations:c,dimRoundingMode:p,activation:h,leakyreluAlpha:m}=n,g=[],v=c;null==v&&(v=[1,1]),x.util.assert(eg.eitherStridesOrDilationsAreOne(u,v),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${v}'`);let C=eg.computeConv2DInfo(i.shape,o.shape,u,v,d,p,!0),b=(0,f.env)().getBool("WEBGL_PACK_DEPTHWISECONV")&&C.strideWidth<=2&&C.outChannels/C.inChannels==1,$=h?aJ(h,b):null,y=[i,o],I=null!=s,R=null!=l,T="leakyrelu"===h;if(I&&y.push(s),R&&y.push(l),T){let e=a.makeTensorInfo([],"float32",x.util.createScalarValue(m,"float32"));y.push(e),g.push(e)}t=b?new i1(C,I,$,R,T):new i0(C,I,$,R,T);let w=[[C.padInfo.top,C.padInfo.left],[C.strideHeight,C.strideWidth],[C.dilationHeight,C.dilationWidth],[C.inHeight,C.inWidth]],S=a.runWebGLProgram(t,y,"float32",w);return g.forEach(e=>a.disposeIntermediateTensorInfo(e)),S}};var eg=eg;class oP{constructor(e,t,r,a){this.sliceDim=e,this.strides=t,this.paramsShape=a,this.variableNames=["x","indices"],this.outputShape=r;const n=eL(r.length);let i=`
    int index;`;for(let e=0;e<this.sliceDim;e++)i+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${n} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}let oL={kernelName:td.GatherNd,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{params:a,indices:n}=t,i=n.shape,o=i[i.length-1],s=x.util.sizeFromShape(a.shape),[l,u,d,c]=eg.prepareAndValidate(a,n),p=a5({inputs:{x:n},backend:r,attrs:{shape:[u,o]}}),h=a5({inputs:{x:a},backend:r,attrs:{shape:[x.util.sizeFromShape(a.shape)/d,d]}});if(r.shouldExecuteOnCPU([a,n])||"string"===a.dtype){let e=rF(r.readSync(n.dataId),r.bufferSync(a),a.dtype,u,o,d,c,a.shape,s);return r.makeTensorInfo(l,a.dtype,e.values)}let f=new oP(o,c,[u,d],a.shape),m=r.runWebGLProgram(f,[h,p],h.dtype),g=a5({inputs:{x:m},backend:r,attrs:{shape:l}});return r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(m),g}};var eg=eg;class oB{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const r=eL(this.rank),a=function(e,t){let r=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[];for(let t=0;t<e.length;t++)2===t?a.push("index"):a.push(`${r[t]}`);return a.join()}(e,0);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${a}));
      }
    `}}function oV(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,indices:i}=t,{axis:o,batchDims:s}=a,l=x.util.parseAxisParam(o,n.shape)[0];if((0,f.env)().get("DEBUG")){let e=r.readSync(i.dataId),t=n.shape[l];for(let r=0;r<e.length;++r){let a=e[r];x.util.assert(a<=t-1&&a>=0,()=>`GatherV2: the index value ${a} is not in [0, ${t-1}]`)}}let u=eg.segment_util.collectGatherOpShapeInfo(n,i,l,s),d=x.util.sizeFromShape(i.shape),c=[],p=a5({inputs:{x:n},backend:r,attrs:{shape:[u.batchSize,u.outerSize,u.dimSize,u.sliceSize]}}),h=a5({inputs:{x:i},backend:r,attrs:{shape:[u.batchSize,d/u.batchSize]}});c.push(p),c.push(h);let m=[u.batchSize,u.outerSize,d/u.batchSize,u.sliceSize];if(r.shouldExecuteOnCPU([n,i])||"string"===n.dtype){let e=r.bufferSync(h),t=r_(r.bufferSync(p),e,m);return c.forEach(e=>r.disposeIntermediateTensorInfo(e)),r.makeTensorInfo(u.outputShape,t.dtype,t.values)}let g=new oB(p.shape,m),v=r.runWebGLProgram(g,[p,h],p.dtype);c.push(v);let C=a5({inputs:{x:v},backend:r,attrs:{shape:u.outputShape}});return c.forEach(e=>r.disposeIntermediateTensorInfo(e)),C}let oW={kernelName:td.GatherV2,backendName:"webgl",kernelFunc:oV},oU=aZ({opSnippet:"return float(a > b);",packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:rD,dtype:"bool"}),oG={kernelName:td.Greater,backendName:"webgl",kernelFunc:oU},oM=aZ({opSnippet:"return float(a >= b);",packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:"bool",cpuKernelImpl:rP}),oz={kernelName:td.GreaterEqual,backendName:"webgl",kernelFunc:oM},oX={kernelName:td.IFFT,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{input:a}=t;return ov(a,!0,r)}},oH=aQ({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),oq={kernelName:td.IsFinite,backendName:"webgl",kernelFunc:oH},oj=aQ({opSnippet:"return float(isinf(x));",dtype:"bool"}),oK={kernelName:td.IsInf,backendName:"webgl",kernelFunc:oj},oY=aQ({opSnippet:"return float(isnan(x));",dtype:"bool"}),oQ={kernelName:td.IsNan,backendName:"webgl",kernelFunc:oY},oZ=aZ({opSnippet:"return float(a < b);",packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:rL,dtype:"bool"}),oJ={kernelName:td.Less,backendName:"webgl",kernelFunc:oZ},o0=aZ({opSnippet:"return float(a <= b);",packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:rB,dtype:"bool"}),o1={kernelName:td.LessEqual,backendName:"webgl",kernelFunc:o0},o2={kernelName:td.LinSpace,backendName:"webgl",kernelFunc:function(e){let{backend:t,attrs:r}=e,{start:a,stop:n,num:i}=r,o=rV(a,n,i);return t.makeTensorInfo([o.length],"float32",o)}},o4=aQ({opSnippet:aY+`
  return x < 0.0 ? 0./0. : log(x);
`,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:rW}),o3={kernelName:td.Log,backendName:"webgl",kernelFunc:o4},o5=aQ({opSnippet:aY+`
  return log(1.0 + x);
`}),o6={kernelName:td.Log1p,backendName:"webgl",kernelFunc:o5},o8=aZ({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:"bool"}),o7={kernelName:td.LogicalAnd,backendName:"webgl",kernelFunc:o8},o9=aQ({opSnippet:"return float(!(x >= 1.0));"}),se={kernelName:td.LogicalNot,backendName:"webgl",kernelFunc:o9},st=aZ({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:"bool"}),sr={kernelName:td.LogicalOr,backendName:"webgl",kernelFunc:st};class sa{constructor(e,t,r,a,n){let i;this.variableNames=["x"],this.outputShape=[];const o=e[3]-1;this.outputShape=e;const s=`float(${r}) + float(${a}) * sum`;i=.5===n?`inversesqrt(${s})`:1===n?`1.0/(${s})`:`exp(log(${s}) * float(-${n}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${t}; j <= ${t}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${o}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${i};
        setOutput(val);
      }
    `}}class sn{constructor(e,t,r,a,n){let i;this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const o=e[3]-1;this.outputShape=e;const s=`float(${r}) + float(${a}) * sum`;i=.5===n?`inversesqrt(${s})`:1===n?`1.0/(${s})`:`exp(log(${s}) * float(-${n}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${t};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${t}; j <= ${t}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${i};
        setOutput(result);
      }
    `}}let si={kernelName:td.LRN,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{depthRadius:i,bias:o,alpha:s,beta:l}=a,u=(0,f.env)().getBool("WEBGL_PACK_NORMALIZATION")?new sn(n.shape,i,o,s,l):new sa(n.shape,i,o,s,l);return r.runWebGLProgram(u,[n],n.dtype)}};class so{constructor(e,t,r,a,n){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=r,this.alpha=a,this.beta=n,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${a}) * norm + float(${r});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${a})
                * float(${n})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${n});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}let ss={kernelName:td.LRNGrad,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{x:n,y:i,dy:o}=t,{depthRadius:s,bias:l,alpha:u,beta:d}=a,c=new so(n.shape,s,l,u,d);return r.runWebGLProgram(c,[n,i,o],n.dtype)}};var eg=eg;function sl(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i}=r,{reductionIndices:o,keepDims:s}=n,l=i.shape.length,u=x.util.parseAxisParam(o,i.shape),d=u,c=eg.getAxesPermutation(d,l),p=null!=c,h=a.shouldExecuteOnCPU([i]),f=i;if(p){if(h){let e=a.texData.get(f.dataId).values,t=Array(l);for(let e=0;e<t.length;e++)t[e]=i.shape[c[e]];let r=ai(e,i.shape,i.dtype,c,t);f=a.makeTensorInfo(t,i.dtype),a.texData.get(f.dataId).values=r}else f=nr(i,c,a);d=eg.getInnerMostAxes(d.length,l)}eg.assertAxesAreInnerMostDims("max",d,l);let[m,g]=eg.computeOutAndReduceShapes(f.shape,d),v=m;if(s&&(v=eg.expandShapeToKeepDim(m,u)),h){let e=rU(a.texData.get(f.dataId).values,x.util.sizeFromShape(g),v,i.dtype);t=a.makeTensorInfo(v,i.dtype),a.texData.get(t.dataId).values=e}else{var C,b;let e,r,n,i,o;C=f,b=v,e=x.util.sizeFromShape(g),r=x.util.sizeFromShape(C.shape),i=a9(n=a5({inputs:{x:C},attrs:{shape:[r/e,e]},backend:a}),C.dtype,"max",a),o=a5({inputs:{x:i},attrs:{shape:b},backend:a}),a.disposeIntermediateTensorInfo(n),a.disposeIntermediateTensorInfo(i),t=o}return p&&a.disposeIntermediateTensorInfo(f),t}let su={kernelName:td.Max,backendName:"webgl",kernelFunc:sl},sd=aZ({opSnippet:aP+`
  return max(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+aB+`
  return result;
`,cpuKernelImpl:rG}),sc={kernelName:td.Maximum,backendName:"webgl",kernelFunc:sd};var eg=eg;let sp={kernelName:td.MaxPool,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t;ex(n,"maxPool");let{filterSize:i,strides:o,pad:s,dimRoundingMode:l}=a;x.util.assert(eg.eitherStridesOrDilationsAreOne(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let u=eg.computePool2DInfo(n.shape,i,o,1,s,l);if(1===u.filterWidth&&1===u.filterHeight&&x.util.arraysEqual(u.inShape,u.outShape))return aW({inputs:{x:n},backend:r});let d=new nB(u,"max",!1);return r.runWebGLProgram(d,[n],n.dtype)}};var eg=eg;let sh={kernelName:td.MaxPool3D,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{filterSize:i,strides:o,pad:s,dataFormat:l,dimRoundingMode:u}=a,d=new nV(eg.computePool3DInfo(n.shape,i,o,[1,1,1],s,u,l),"max",!1);return r.runWebGLProgram(d,[n],n.dtype)}};var eg=eg;class sf{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideHeight,r=e.strideWidth,a=e.dilationHeight,n=e.effectiveFilterHeight,i=e.effectiveFilterWidth,o=n-1-e.padInfo.top,s=i-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${n};
          wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${n*i-1} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class sx{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideDepth,r=e.strideHeight,a=e.strideWidth,n=e.dilationDepth,i=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterDepth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,d=s-1-e.padInfo.front,c=l-1-e.padInfo.top,p=u-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${d}, ${c}, ${p});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${s};
           wD += ${n}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${r}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${o}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${s*l*u-1} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let sm={kernelName:td.MaxPool3DGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,input:i}=t,{filterSize:o,strides:s,pad:l,dimRoundingMode:u}=a,d=eg.computePool3DInfo(i.shape,o,s,[1,1,1],l,u),c=new nV(d,"max",!0),p=r.runWebGLProgram(c,[i],i.dtype),h=new sx(d),f=r.runWebGLProgram(h,[n,p],i.dtype);return r.disposeIntermediateTensorInfo(p),f}};var eg=eg;let sg={kernelName:td.MaxPoolGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,input:i,output:o}=t;ex([i,o],"maxPoolGrad");let{filterSize:s,strides:l,pad:u,dimRoundingMode:d}=a,c=eg.computePool2DInfo(i.shape,s,l,1,u,d),p=new nB(c,"max",!0),h=r.runWebGLProgram(p,[i],i.dtype),f=new sf(c),x=r.runWebGLProgram(f,[n,h],i.dtype);return r.disposeIntermediateTensorInfo(h),x}};var eg=eg;let sv={kernelName:td.MaxPoolWithArgmax,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let a,n,{x:i}=e,{filterSize:o,strides:s,pad:l,includeBatchInIndex:u}=t;x.util.assert(4===i.shape.length,()=>`Error in maxPool: input must be rank 4 but got rank ${i.shape.length}.`);let d=[1,1];x.util.assert(eg.eitherStridesOrDilationsAreOne(s,d),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${d}'`);let c=eg.computePool2DInfo(i.shape,o,s,d,l),[p,h]=(a=new nB(c,"max",!1),n=r.runWebGLProgram(a,[i],"float32"),a=new nB(c,"max",!0,!0,u),[n,r.runWebGLProgram(a,[i],"float32")]);return[p,h]}};var eg=eg;let sC={kernelName:td.Mean,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{var a,n;let i,o,s,l,u,{x:d}=e,{keepDims:c,axis:p}=t,h=d.shape.length,f=x.util.parseAxisParam(p,d.shape),m=f,g=eg.getAxesPermutation(m,h),v=null!=g,C=r.shouldExecuteOnCPU([d]),b=[],$=d;if(v){if(C){let e=r.texData.get($.dataId).values,t=Array(h);for(let e=0;e<t.length;e++)t[e]=d.shape[g[e]];let a=ai(e,d.shape,d.dtype,g,t);$=r.makeTensorInfo(t,d.dtype),r.texData.get($.dataId).values=a}else $=nr(d,g,r);b.push($),m=eg.getInnerMostAxes(m.length,h)}eg.assertAxesAreInnerMostDims("sum",m,h);let[y,I]=eg.computeOutAndReduceShapes($.shape,m),R=y;c&&(R=eg.expandShapeToKeepDim(y,f));let T=(a=$,n=R,i=x.util.sizeFromShape(I),o=x.util.sizeFromShape(a.shape),l=a9(s=a5({inputs:{x:a},attrs:{shape:[o/i,i]},backend:r}),"float32","mean",r),u=a5({inputs:{x:l},attrs:{shape:n},backend:r}),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(l),u);for(let e of b)r.disposeIntermediateTensorInfo(e);return T}};var eg=eg;let sb={kernelName:td.Min,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i}=r,{axis:o,keepDims:s}=n,l=i.shape.length,u=x.util.parseAxisParam(o,i.shape),d=u,c=eg.getAxesPermutation(d,l),p=i;null!=c&&(p=ni({inputs:{x:i},backend:a,attrs:{perm:c}}),d=eg.getInnerMostAxes(d.length,i.shape.length)),eg.assertAxesAreInnerMostDims("min",d,l);let[h,f]=eg.computeOutAndReduceShapes(p.shape,d),m=a5({inputs:{x:p},backend:a,attrs:{shape:[-1,x.util.sizeFromShape(f)]}}),g=a9(m,m.dtype,"min",a);return t=s?a5({inputs:{x:g},backend:a,attrs:{shape:eg.expandShapeToKeepDim(h,u)}}):a5({inputs:{x:g},backend:a,attrs:{shape:h}}),a.disposeIntermediateTensorInfo(m),a.disposeIntermediateTensorInfo(g),null!=c&&a.disposeIntermediateTensorInfo(p),t}},s$=aZ({opSnippet:aP+`
  return min(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+aB+`
  return result;
`,cpuKernelImpl:rM}),sy={kernelName:td.Minimum,backendName:"webgl",kernelFunc:s$};class sI{constructor(e,t,r){this.variableNames=["x"],this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);const a=e.length,n=eL(a),i=t.map(e=>e[0]).join(","),o=t.map((t,r)=>t[0]+e[r]).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,a),l=+("reflect"!==r);if(1===a){this.userCode=`
        int start = ${i};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${n} start = ${n}(${i});
      ${n} end = ${n}(${o});

      void main() {
        ${n} outC = getOutputCoords();
        for (int i = 0; i < ${a}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${n} coords = outC - start;
        setOutput(getX(${s}));
      }
    `}}class sR{constructor(e,t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);const a=e.length,n=eL(a),i=t.map(e=>e[0]).join(","),o=t.map((t,r)=>t[0]+e[r]).join(","),s=al("rc",a),l=al("source",a),u=`${s[a-1]} < ${this.outputShape[a-1]}`,d=1===a?"source":`vec2(${l.slice(-2).join()})`,c=+("reflect"!==r);let p="";if(1===a){const e=`
        ${n} source = rc;
        if (source < start) {
          source = start * 2 - source - ${c};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${c};
        }
        source -= start;
      `;p=`
        ${n} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${l.join()}), ${d});
        ${s[a-1]} += 1;
        if(${u}) {
          ${e}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
      `}else{const e=`
        ${n} source = rc;
        ${n} lt = ${n}(lessThan(source, start));
        ${n} gte = ${n}(greaterThanEqual(source, end));
        ${n} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${c}) +
                gte * ((end - 1) * 2 - source + ${c});
        source -= start;
      `;p=`
        ${n} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${l.join()}), ${d});
        ${s[a-1]} += 1;
        if(${u}) {
          ${e}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
        rc = outputLoc;
        ${s[a-2]} += 1;
        if(${s[a-2]} < ${this.outputShape[a-2]}) {
          ${e}
          result[2] = getChannel(getX(${l.join()}), ${d});
          ${s[a-1]} += 1;
          if(${u}) {
            ${e}
            result[3] = getChannel(getX(${l.join()}), ${d});
          }
        }
      `}this.userCode=`
      const ${n} start = ${n}(${i});
      const ${n} end = ${n}(${o});

      void main() {
        ${n} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}let sT={kernelName:td.MirrorPad,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:r})=>{let{x:a}=e,{paddings:n,mode:i}=r,o=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new sR(a.shape,n,i):new sI(a.shape,n,i);return t.runWebGLProgram(o,[a],a.dtype)}},sw=aZ({opSnippet:`if (b == 0.0) return NAN;
  return mod(a, b);`,packedOpSnippet:`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+aB+`
  return result;
`}),sS={kernelName:td.Mod,backendName:"webgl",kernelFunc:sw};class sE{constructor(e,t,r){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,r],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}var eg=eg;let sN=aZ({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),sk={kernelName:td.RealDiv,backendName:"webgl",kernelFunc:sN},sA="return a - b;",sO=aZ({opSnippet:sA,packedOpSnippet:sA,supportsComplex:!0,cpuKernelImpl:ar}),sF={kernelName:td.Sub,backendName:"webgl",kernelFunc:sO};function s_(e){let{inputs:t,backend:r,attrs:a}=e,{logits:n}=t,{dim:i}=a,o=x.util.parseAxisParam([i],n.shape),s=sl({inputs:{x:n},backend:r,attrs:{reductionIndices:o,keepDims:!1}}),l=eg.expandShapeToKeepDim(s.shape,o),u=a5({inputs:{x:s},backend:r,attrs:{shape:l}}),d=sO({inputs:{a:n,b:u},backend:r}),c=od({inputs:{x:d},backend:r}),p=na({inputs:{x:c},backend:r,attrs:{axis:o,keepDims:!1}}),h=a5({inputs:{x:p},backend:r,attrs:{shape:l}}),f=sN({inputs:{a:c,b:h},backend:r});return r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(u),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(h),f}let sD={kernelName:td.Softmax,backendName:"webgl",kernelFunc:s_},sP={kernelName:td.Multinomial,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{logits:n}=t,{numSamples:i,seed:o,normalized:s}=a,l=s?n:s_({inputs:{logits:n},backend:r,attrs:{dim:n.shape.length-1}}),u=new sE(l.shape[0],l.shape[1],i),d=r.runWebGLProgram(u,[l],"int32",[[o]]);return s||r.disposeIntermediateTensorInfo(l),d}},sL=am+`
  return -x;
`,sB=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,sV={kernelName:td.Neg,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a}=e,{x:n}=r;if(a.shouldExecuteOnCPU([n])){let[e,t]=rX(a.texData.get(n.dataId).values,n.shape,n.dtype);return a.makeTensorInfo(t,n.dtype,e)}return t=(0,f.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new aR(n.shape,sB):new ax(n.shape,sL),a.runWebGLProgram(t,[n],n.dtype)}};var eg=eg,eb=eb;let sW=eb.nonMaxSuppressionV3Impl,sU={kernelName:td.NonMaxSuppressionV3,backendName:"webgl",kernelFunc:function(e){eg.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:a}=e,{boxes:n,scores:i}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:l}=a,{selectedIndices:u}=sW(r.readSync(n.dataId),r.readSync(i.dataId),o,s,l);return r.makeTensorInfo([u.length],"int32",new Int32Array(u))}};var eg=eg,eb=eb;let sG=eb.nonMaxSuppressionV4Impl,sM={kernelName:td.NonMaxSuppressionV4,backendName:"webgl",kernelFunc:function(e){eg.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:a}=e,{boxes:n,scores:i}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:l,padToMaxOutputSize:u}=a,{selectedIndices:d,validOutputs:c}=sG(r.readSync(n.dataId),r.readSync(i.dataId),o,s,l,u);return[r.makeTensorInfo([d.length],"int32",new Int32Array(d)),r.makeTensorInfo([],"int32",new Int32Array([c]))]}};var eg=eg,eb=eb;let sz=eb.nonMaxSuppressionV5Impl,sX={kernelName:td.NonMaxSuppressionV5,backendName:"webgl",kernelFunc:function(e){eg.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:a}=e,{boxes:n,scores:i}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:l,softNmsSigma:u}=a,{selectedIndices:d,selectedScores:c}=sz(r.readSync(n.dataId),r.readSync(i.dataId),o,s,l,u);return[r.makeTensorInfo([d.length],"int32",new Int32Array(d)),r.makeTensorInfo([c.length],"float32",new Float32Array(c))]}};class sH{constructor(e,t,r,a){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${a}), float(${r}),
                      float(index == coords.y)));
      }
    `}}let sq={kernelName:td.OneHot,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{indices:n}=t,{dtype:i,depth:o,onValue:s,offValue:l}=a,u=x.util.sizeFromShape(n.shape),d=new sH(u,o,s,l),c=a5({inputs:{x:n},backend:r,attrs:{shape:[u]}}),p=r.runWebGLProgram(d,[c],i);r.disposeIntermediateTensorInfo(c);let h=a5({inputs:{x:p},backend:r,attrs:{shape:[...n.shape,o]}});return r.disposeIntermediateTensorInfo(p),h}};function sj(e){let{inputs:t,backend:r}=e,{x:a}=t;if("complex64"!==a.dtype)return o$({attrs:{shape:a.shape,dtype:a.dtype,value:"string"===a.dtype?"":0},backend:r});{let e=ie({inputs:{input:a},backend:r}),t=sj({inputs:{x:e},backend:r}),n=ig({inputs:{input:a},backend:r}),i=sj({inputs:{x:n},backend:r}),o=aG({inputs:{real:t,imag:i},backend:r});return r.disposeIntermediateTensorInfo(e),r.disposeIntermediateTensorInfo(t),r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(i),o}}let sK={kernelName:td.ZerosLike,backendName:"webgl",kernelFunc:sj},sY={kernelName:td.OnesLike,backendName:"webgl",kernelFunc:function e(t){let{inputs:r,backend:a}=t,{x:n}=r;if("string"===n.dtype)throw Error("onesLike is not supported under string dtype");if("complex64"!==n.dtype)return o$({attrs:{shape:n.shape,dtype:n.dtype,value:1},backend:a});{let t=ie({inputs:{input:n},backend:a}),r=e({inputs:{x:t},backend:a}),i=ig({inputs:{input:n},backend:a}),o=sj({inputs:{x:i},backend:a}),s=aG({inputs:{real:r,imag:o},backend:a});return a.disposeIntermediateTensorInfo(t),a.disposeIntermediateTensorInfo(r),a.disposeIntermediateTensorInfo(i),a.disposeIntermediateTensorInfo(o),s}}},sQ={kernelName:td.Pack,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{axis:n}=a;if(1===t.length)return op({inputs:{input:t[0]},backend:r,attrs:{dim:n}});let i=t[0].shape,o=t[0].dtype;t.forEach(e=>{x.util.assertShapesMatch(i,e.shape,"All tensors passed to stack must have matching shapes"),x.util.assert(o===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});let s=[],l=iC({inputs:t.map(e=>{let t=op({inputs:{input:e},backend:r,attrs:{dim:n}});return s.push(t),t}),backend:r,attrs:{axis:n}});return s.forEach(e=>r.disposeIntermediateTensorInfo(e)),l}};class sZ{constructor(e,t,r){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);const a=e.length,n=eL(a),i=t.map(e=>e[0]).join(","),o=t.map((t,r)=>t[0]+e[r]).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,a);if(1===a){this.userCode=`
        int start = ${i};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${n} start = ${n}(${i});
      ${n} end = ${n}(${o});

      void main() {
        ${n} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${n} coords = outC - start;
          setOutput(getX(${s}));
        }
      }
    `}}class sJ{constructor(e,t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);const a=e.length,n=eL(a),i=t.map(e=>e[0]).join(","),o=t.map((t,r)=>t[0]+e[r]).join(","),s=al("rc",a),l=al("source",a),u=`${s[a-1]} < ${this.outputShape[a-1]}`,d=1===a?"source":`vec2(${l.slice(-2).join()})`,c=[`${n} rc = outputLoc;`,`${s[a-1]} += 1;
       if(${u}) {
      `,1===a?"":`}
       rc = outputLoc;
       ${s[a-2]} += 1;
       if(${s[a-2]} < ${this.outputShape[a-2]}) {`,1===a?"":`  ${s[a-1]} += 1;
         if(${u}) {`],p=1===a?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let h="";for(let e=0,t=1===a?2:4;e<t;e++)h+=`
        ${c[e]}
        if (${p}) {
          result[${e}] = float(value);
        } else {
          ${n} source = rc - start;
          result[${e}] = getChannel(getX(${l.join()}), ${d});
        }
      `;h+=1===a?"} ":"}}",this.userCode=`
      const ${n} start = ${n}(${i});
      const ${n} end = ${n}(${o});

      void main() {
        ${n} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${h}
        setOutput(result);
      }
    `}}let s0=e=>{let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{paddings:i,constantValue:o}=a;if(0===x.util.sizeFromShape(n.shape))return o$({backend:r,attrs:{shape:i.map((e,t)=>e[0]+n.shape[t]+e[1]),value:o,dtype:n.dtype}});let s=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new sJ(n.shape,i,o):new sZ(n.shape,i,o),l=[[o]];return r.runWebGLProgram(s,[n],n.dtype,l)},s1={kernelName:td.PadV2,backendName:"webgl",kernelFunc:s0},s2=aZ({opSnippet:`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,packedOpSnippet:`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+aB+`
  return result;
`}),s4={kernelName:td.Pow,backendName:"webgl",kernelFunc:s2};var eg=eg;let s3={kernelName:td.Prod,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i}=r,{axis:o,keepDims:s}=n,l=i.shape.length,u=[],d=x.util.parseAxisParam(o,i.shape),c=d,p=eg.getAxesPermutation(c,l),h=i;if(null!=p&&(h=ni({inputs:{x:i},backend:a,attrs:{perm:p}}),c=eg.getInnerMostAxes(c.length,l),u.push(h)),eg.assertAxesAreInnerMostDims("prod",c,l),a.shouldExecuteOnCPU([h])){let e=a.texData.get(h.dataId).values,{outVals:r,outShape:n,outDtype:i}=rq(h.shape,h.dtype,e,c);t=a.makeTensorInfo(n,i,r)}else{let[e,r]=eg.computeOutAndReduceShapes(h.shape,c),n=a5({inputs:{x:h},backend:a,attrs:{shape:[-1,x.util.sizeFromShape(r)]}}),o=a9(n,(0,tK.sumOutType)(i.dtype),"prod",a);t=a5({inputs:{x:o},backend:a,attrs:{shape:e}}),u.push(n),u.push(o)}if(s){u.push(t);let e=eg.expandShapeToKeepDim(t.shape,d);t=a5({inputs:{x:t},backend:a,attrs:{shape:e}})}return u.forEach(e=>a.disposeIntermediateTensorInfo(e)),t}},s5={kernelName:td.RaggedGather,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{paramsNestedSplits:n,paramsDenseValues:i,indices:o}=t,{outputRaggedRank:s}=a,l=n.map(e=>r.readSync(e.dataId)),u=n.map(e=>e.shape),d=r.readSync(i.dataId),c=r.readSync(o.dataId),[p,h,f]=rj(l,u,d,i.shape,i.dtype,c,o.shape,s),x=p.map(e=>r.makeTensorInfo([e.length],"int32",e)),m=r.makeTensorInfo(f,i.dtype,h);return x.concat([m])}},s6={kernelName:td.RaggedRange,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{starts:a,limits:n,deltas:i}=t,o=r.readSync(a.dataId),s=r.readSync(n.dataId),l=r.readSync(i.dataId),[u,d]=rK(o,a.shape,a.dtype,s,n.shape,l,i.shape);return[r.makeTensorInfo([u.length],"int32",u),r.makeTensorInfo([d.length],a.dtype,d)]}},s8={kernelName:td.RaggedTensorToTensor,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{shape:n,values:i,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:l}=a,u=r.readSync(n.dataId),d=r.readSync(i.dataId),c=r.readSync(o.dataId),p=s.map(e=>r.readSync(e.dataId)),h=s.map(e=>e.shape),[f,x]=rY(u,n.shape,d,i.shape,i.dtype,c,o.shape,p,h,l);return r.makeTensorInfo(f,i.dtype,x)}},s7=e=>{let{backend:t,attrs:r}=e,{start:a,stop:n,step:i,dtype:o}=r,s=rQ(a,n,i,o);return t.makeTensorInfo([s.length],o,s)},s9={kernelName:td.Range,backendName:"webgl",kernelFunc:s7},le=aQ({opSnippet:"return 1.0 / x;"}),lt={kernelName:td.Reciprocal,backendName:"webgl",kernelFunc:le},lr=aQ({opSnippet:am+`
  return (x < 0.0) ? 0.0 : x;
`,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),la={kernelName:td.Relu,backendName:"webgl",kernelFunc:lr},ln=aQ({opSnippet:am+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),li={kernelName:td.Relu6,backendName:"webgl",kernelFunc:ln};class lo{constructor(e,t,r,a,n){this.variableNames=["A"],this.outputShape=[];const[i,o,s,l]=e;this.outputShape=[i,t,r,l];const u=[a&&t>1?o-1:o,a&&r>1?s-1:s],d=[a&&t>1?t-1:t,a&&r>1?r-1:r];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${n?"(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":"vec2(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class ls{constructor(e,t,r,a,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,o,s,l]=e;this.outputShape=[i,t,r,l];const u=[a&&t>1?o-1:o,a&&r>1?s-1:s],d=[a&&t>1?t-1:t,a&&r>1?r-1:r];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${n?"(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":"vec3(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${r-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}let ll={kernelName:td.ResizeBilinear,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{images:n}=t,{alignCorners:i,halfPixelCenters:o,size:s}=a,[l,u]=s,d=(0,f.env)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new ls(n.shape,l,u,i,o):new lo(n.shape,l,u,i,o);return r.runWebGLProgram(d,[n],"float32")}};class lu{constructor(e,t,r){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,a,n]=t,[,i,o]=e,s=[r&&i>1?a-1:a,r&&o>1?n-1:n],l=[r&&i>1?i-1:i,r&&o>1?o-1:o],u=s[0]/l[0],d=s[1]/l[1],c=1/u,p=1/d,h=2*Math.ceil(c)+2,f=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${d});

        const float invHeightScale = float(${c});
        const float invWidthScale = float(${p});

        const int winHeight = int(${h});
        const int winWidth = int(${f});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${a-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${n-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}let ld={kernelName:td.ResizeBilinearGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{images:n,dy:i}=t,{alignCorners:o}=a,s=new lu(i.shape,n.shape,o);return r.runWebGLProgram(s,[i],i.dtype)}};class lc{constructor(e,t,r,a,n){this.variableNames=["A"],this.outputShape=[];const[i,o,s,l]=e;this.outputShape=[i,t,r,l];const u=[a&&t>1?o-1:o,a&&r>1?s-1:s],d=[a&&t>1?t-1:t,a&&r>1?r-1:r];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${n?"max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":"vec2(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${a?"0.5":"0.0"})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class lp{constructor(e,t,r,a,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,o,s,l]=e;this.outputShape=[i,t,r,l];const u=[a&&t>1?o-1:o,a&&r>1?s-1:s],d=[a&&t>1?t-1:t,a&&r>1?r-1:r];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${n?"max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":"vec3(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${a?"0.5":"0.0"})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${r-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}let lh={kernelName:td.ResizeNearestNeighbor,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{images:n}=t,{alignCorners:i,halfPixelCenters:o,size:s}=a,[l,u]=s,d=(0,f.env)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new lp(n.shape,l,u,i,o):new lc(n.shape,l,u,i,o);return r.runWebGLProgram(d,[n],n.dtype)}};class lf{constructor(e,t,r){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,a,n]=t,[,i,o]=e,s=[r&&i>1?a-1:a,r&&o>1?n-1:n],l=[r&&i>1?i-1:i,r&&o>1?o-1:o],u=s[0]/l[0],d=s[1]/l[1],c=1/u,p=1/d,h=2*Math.ceil(c)+2,f=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${d});

        const float invHeightScale = float(${c});
        const float invWidthScale = float(${p});

        const int winHeight = int(${h});
        const int winWidth = int(${f});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float sourceFracRow =
              float(${s[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${s[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${a}) - 1),
                ${r} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${n}) - 1),
                ${r} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}let lx={kernelName:td.ResizeNearestNeighborGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{images:n,dy:i}=t,{alignCorners:o}=a,s=new lf(i.shape,n.shape,o);return r.runWebGLProgram(s,[i],i.dtype)}};class lm{constructor(e,t){this.variableNames=["x"];const r=e.length;if(r>4)throw Error(`WebGL backend: Reverse of rank-${r} tensor is not yet supported`);if(this.outputShape=e,1===r){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const a=e.map((r,a)=>-1!==t.indexOf(a)&&1!==e[a]?`${e[a]} - coords[${a}] - 1`:`coords[${a}]`).join(","),n=eL(r);this.userCode=`
      void main() {
        ${n} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}class lg{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const r=e.length;if(r>4)throw Error(`WebGL backend: Reverse of rank-${r} tensor is not yet supported`);this.outputShape=e;const a=al("rc",r),n=`${a[r-1]} + 1 < ${this.outputShape[r-1]}`,i=`${a[r-2]} + 1 < ${this.outputShape[r-2]}`,o=eL(r);function s(r){let a=e.map((a,n)=>{var i,o;return i=n,o=r,-1!==t.indexOf(i)&&1!==e[i]?`${e[i]} - ${o[i]} - 1`:`${o[i]}`}),n=a.join(","),i=a.slice(-2).join(",");return`getChannel(getX(${n}), vec2(${i}))`}1===r?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${n}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${function(e){return s(e)}(a.slice())};
          if(${n}){
            result.g = ${function(e){return e[r-1]="("+e[r-1]+" + 1)",s(e)}(a.slice())};
          }
          if(${i}) {
            result.b = ${function(e){return e[r-2]="("+e[r-2]+" + 1)",s(e)}(a.slice())};
            if(${n}) {
              result.a = ${function(e){return e[r-1]="("+e[r-1]+" + 1)",e[r-2]="("+e[r-2]+" + 1)",s(e)}(a.slice())};
            }
          }
          setOutput(result);
        }
    `}}let lv={kernelName:td.Reverse,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{dims:i}=a,o=n.shape.length,s=x.util.parseAxisParam(i,n.shape);if(0===o)return aW({inputs:{x:n},backend:r});let l=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new lg(n.shape,s):new lm(n.shape,s);return r.runWebGLProgram(l,[n],n.dtype)}};var eg=eg;class lC{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const r=e[1],a=e[2];this.outputShape=e;let n="";n="number"==typeof t?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${n}
          if(coordX >= 0 && coordX < ${a} && coordY >= 0 && coordY < ${r}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}let lb={kernelName:td.RotateWithOffset,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{image:a}=e,{radians:n,fillValue:i,center:o}=t,s=new lC(a.shape,i),[l,u]=eg.getImageCenter(o,a.shape[1],a.shape[2]),d=[[l,u,Math.sin(n),Math.cos(n)]];return r.runWebGLProgram(s,[a],a.dtype,d)}},l$=aQ({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`}),ly={kernelName:td.Round,backendName:"webgl",kernelFunc:l$},lI=aQ({opSnippet:"return inversesqrt(x);",cpuKernelImpl:rZ}),lR={kernelName:td.Rsqrt,backendName:"webgl",kernelFunc:lI};var eg=eg;class lT{constructor(e,t,r,a,n,i,o=!0,s=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const l=eL(n.length),u=eL(i.length);let d="";1===r?d="i":2===r&&(d="i, j");const c=`getIndices(${d})`;let p="";1===a?p="i":2===a&&(p="i, coords[1]");const h=`getUpdates(${p})`;let f="";s&&(f="coords[0], coords[1]");const x=`getDefaultValue(${f})`;this.userCode=`
        ${l} strides = ${l}(${n});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${c});
              flattenedIndex += index * ${t>1?"strides[j]":"strides"};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${h};
              found = true;
            }
          }
          setOutput(mix(${x}, sum, float(found)));
        }
      `}}class lw{constructor(e,t,r,a,n,i,o=!0,s=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const l=eL(n.length),u=eL(i.length);let d="";1===r?d="i":2===r&&(d="i, j");const c=`getIndices(${d})`;let p="";1===a?p="i":2===a&&(p="i, coords[1]");const h=`getUpdates(${p})`;let f="";s&&(f="coords[0], coords[1]");const x=`getDefaultValue(${f})`;this.userCode=`
        ${l} strides = ${l}(${n});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${c});
              flattenedIndex += index.xz * ${t>1?"strides[j]":"strides"};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${t>1?"strides[j + 1]":"strides"};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${h};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${x}, sum, found));
        }
      `}}let lS={kernelName:td.ScatterNd,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{indices:i,updates:o}=r,{shape:s}=n,{sliceRank:l,numUpdates:u,sliceSize:d,strides:c,outputSize:p}=eg.calculateShapes(o,i,s),h=[p/d,d];if(0===p)return a.makeTensorInfo(s,i.dtype);let x=a5({inputs:{x:i},backend:a,attrs:{shape:[u,l]}}),m=a5({inputs:{x:o},backend:a,attrs:{shape:[u,d]}}),g=a.makeTensorInfo([],"float32",new Float32Array([0]));t=(0,f.env)().getBool("WEBGL_PACK")?new lw(u,l,x.shape.length,m.shape.length,c,h):new lT(u,l,x.shape.length,m.shape.length,c,h);let v=a.runWebGLProgram(t,[m,x,g],m.dtype),C=a5({inputs:{x:v},backend:a,attrs:{shape:s}});return a.disposeIntermediateTensorInfo(x),a.disposeIntermediateTensorInfo(m),a.disposeIntermediateTensorInfo(v),a.disposeIntermediateTensorInfo(g),C}};class lE{constructor(e,t,r,a){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,r];const n=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,i=2===(0,f.env)().getNumber("WEBGL_VERSION")?"while (left < right) {":n;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${i}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${"left"===a?"<":"<="} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}let lN={kernelName:td.SearchSorted,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{sortedSequence:n,values:i}=t,{side:o}=a,s=new lE(n.shape[0],n.shape[1],i.shape[1],o),l=[[n.shape[1]]];return r.runWebGLProgram(s,[n,i],"int32",l)}};class lk{constructor(e,t,r){let a,n;if(this.variableNames=["c","a","b"],this.outputShape=t,r>4)throw Error(`Where for rank ${r} is not yet supported`);if(1===r)n="resRC",a="resRC";else{const r=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],o=[];for(let a=0;a<t.length;a++)o.push(`${r[a]}`),a<e&&i.push(`${r[a]}`);a=i.join(),n=o.join()}const i=eL(r);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${a});
        if (cVal >= 1.0) {
          setOutput(getA(${n}));
        } else {
          setOutput(getB(${n}));
        }
      }
    `}}let lA={kernelName:td.Select,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{condition:a,t:n,e:i}=t,o=new lk(a.shape.length,n.shape,n.shape.length);return r.runWebGLProgram(o,[a,n,i],(0,tK.upcastType)(n.dtype,i.dtype))}};var eg=eg;let lO=aQ({opSnippet:`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${eg.SELU_SCALEALPHA};
  float scale = ${eg.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`}),lF={kernelName:td.Selu,backendName:"webgl",kernelFunc:lO},l_=aQ({opSnippet:aY+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:r0}),lD={kernelName:td.Sigmoid,backendName:"webgl",kernelFunc:l_},lP=aQ({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),lL={kernelName:td.Sign,backendName:"webgl",kernelFunc:lP},lB=aQ({opSnippet:aY+`
  return sin(x);
`,packedOpSnippet:`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${aB}
  return result;
`}),lV={kernelName:td.Sin,backendName:"webgl",kernelFunc:lB},lW=aQ({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),lU={kernelName:td.Sinh,backendName:"webgl",kernelFunc:lW},lG=aQ({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`}),lM={kernelName:td.Softplus,backendName:"webgl",kernelFunc:lG};var eg=eg;let lz={kernelName:td.SpaceToBatchND,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{blockShape:i,paddings:o}=a;x.util.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let s=i.reduce((e,t)=>e*t),l=[[0,0]];l.push(...o);for(let e=1+i.length;e<n.shape.length;++e)l.push([0,0]);let u=[],d=s0({inputs:{x:n},backend:r,attrs:{paddings:l,constantValue:0}}),c=eg.getReshaped(d.shape,i,s,!1),p=eg.getPermuted(c.length,i.length,!1),h=eg.getReshapedPermuted(d.shape,i,s,!1),f=a5({inputs:{x:d},backend:r,attrs:{shape:c}}),m=ni({inputs:{x:f},backend:r,attrs:{perm:p}}),g=a5({inputs:{x:m},backend:r,attrs:{shape:h}});return u.push(d),u.push(f),u.push(m),u.forEach(e=>r.disposeIntermediateTensorInfo(e)),g}},lX={kernelName:td.SparseFillEmptyRows,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{indices:a,values:n,denseShape:i,defaultValue:o}=t;if(1!==i.shape.length)throw Error(`Dense shape must be a vector, saw:
         ${i.shape}`);if(2!==a.shape.length)throw Error(`Indices must be a matrix, saw:
         ${a.shape}`);if(1!==n.shape.length)throw Error(`Values must be a vector, saw:
         ${n.shape}`);if(0!==o.shape.length)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=r.readSync(a.dataId),l=r.readSync(n.dataId),u=r.readSync(i.dataId),d=r.readSync(o.dataId)[0],[c,p,h,f,x]=r4(s,a.shape,a.dtype,l,n.dtype,u,d);return[r.makeTensorInfo(p,a.dtype,c),r.makeTensorInfo([p[0]],n.dtype,h),r.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(e=>Number(e)))),r.makeTensorInfo([x.length],a.dtype,new Int32Array(x))]}},lH={kernelName:td.SparseReshape,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{inputIndices:a,inputShape:n,newShape:i}=t;if(2!==a.shape.length)throw Error(`Input indices should be a matrix but received shape ${a.shape}`);if(1!==n.shape.length)throw Error(`Input shape should be a vector but received shape ${n.shape}`);if(1!==i.shape.length)throw Error(`Target shape should be a vector but received shape ${i.shape}`);let o=Array.from(r.readSync(n.dataId)),s=r.readSync(a.dataId),l=Array.from(r.readSync(i.dataId)),[u,d,c]=r3(s,a.shape,a.dtype,o,l);return[r.makeTensorInfo(d,a.dtype,u),r.makeTensorInfo([c.length],i.dtype,new Int32Array(c))]}},lq={kernelName:td.SparseSegmentMean,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{data:a,indices:n,segmentIds:i}=t;if(a.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==n.shape.length)throw Error(`Indices should be a vector but received shape
              ${n.shape}`);if(1!==i.shape.length)throw Error(`Segment ids should be a vector but received shape
              ${i.shape}`);let o=r.readSync(a.dataId),s=r.readSync(n.dataId),l=r.readSync(i.dataId),[u,d]=r5(o,a.shape,a.dtype,s,l,!0);return r.makeTensorInfo(d,a.dtype,u)}},lj={kernelName:td.SparseSegmentSum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{data:a,indices:n,segmentIds:i}=t;if(a.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==n.shape.length)throw Error(`Indices should be a vector but received shape
             ${n.shape}`);if(1!==i.shape.length)throw Error(`Segment ids should be a vector but received shape
             ${i.shape}`);let o=r.readSync(a.dataId),s=r.readSync(n.dataId),l=r.readSync(i.dataId),[u,d]=r5(o,a.shape,a.dtype,s,l);return r.makeTensorInfo(d,a.dtype,u)}};var eg=eg;let lK={kernelName:td.SparseToDense,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{sparseIndices:n,sparseValues:i,defaultValue:o}=t,{outputShape:s}=a,{sliceRank:l,numUpdates:u,sliceSize:d,strides:c,outputSize:p}=eg.calculateShapes(i,n,s);if("string"===i.dtype){let e=rJ(r.bufferSync(n),r.bufferSync(i),s,p,d,u,l,c,x.util.decodeString(r.readSync(o.dataId)[0]),!1);return r.makeTensorInfo(s,e.dtype,e.values)}let h=new lT(u,l,n.shape.length,i.shape.length,c,[p,1],!1),f=r.runWebGLProgram(h,[i,n,o],i.dtype),m=a5({inputs:{x:f},backend:r,attrs:{shape:s}});return r.disposeIntermediateTensorInfo(f),m}};var eg=eg;let lY={kernelName:td.SplitV,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{numOrSizeSplits:i,axis:o}=a,s=x.util.parseAxisParam(o,n.shape)[0],l=eg.prepareSplitSize(n,i,s),u=Array(n.shape.length).fill(0),d=n.shape.slice();return l.map(e=>{let t=[...d];t[s]=e;let a=nJ({inputs:{x:n},backend:r,attrs:{begin:u,size:t}});return u[s]+=e,a})}},lQ="return sqrt(x);",lZ=aQ({opSnippet:lQ,packedOpSnippet:lQ,cpuKernelImpl:r6}),lJ={kernelName:td.Sqrt,backendName:"webgl",kernelFunc:lZ},l0=aQ({opSnippet:"return x * x;"}),l1={kernelName:td.Square,backendName:"webgl",kernelFunc:l0},l2="return (a - b) * (a - b);",l4=aZ({opSnippet:l2,packedOpSnippet:l2}),l3={kernelName:td.SquaredDifference,backendName:"webgl",kernelFunc:l4};var eg=eg;let l5={kernelName:td.StaticRegexReplace,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t;if("string"!==n.dtype)throw Error("Input must be of datatype string");let i=r.readSync(n.dataId),o=r8(eg.fromUint8ToStringArray(i),"string",a);return r.makeTensorInfo(n.shape,"string",o)}},l6={kernelName:td.Step,backendName:"webgl",kernelFunc:function({inputs:e,attrs:t,backend:r}){let{x:a}=e,n=am+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,i=new ax(a.shape,n);return r.runWebGLProgram(i,[a],a.dtype)}};var ra=ra;class l8{constructor(e,t,r){this.variableNames=["x"],this.outputShape=r;const a=r.length,n=eL(r.length),i=eL(r.length);let o="";if(1===a)o="coords * strides + begin";else{let e=0;o=r.map((t,a)=>(e++,1===r.length?`coords * strides[${a}] + begin[${a}]`:`coords[${e-1}] * strides[${a}] + begin[${a}]`)).join(",")}this.userCode=`
      ${n} begin = ${n}(${e});
      ${n} strides = ${n}(${t});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}}let l7={kernelName:td.StridedSlice,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:i}=r,{begin:o,end:s,strides:l,beginMask:u,endMask:d,ellipsisMask:c,newAxisMask:p,shrinkAxisMask:h}=n,{finalShapeSparse:f,finalShape:m,isIdentity:g,sliceDim0:v,isSimpleSlice:C,begin:b,end:$,strides:y}=ra.sliceInfo(i.shape,o,s,l,u,d,c,p,h);if(g)t=a5({inputs:{x:i},backend:a,attrs:{shape:m}});else if(v||C){x.util.assert(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=ra.computeOutShape(b,$,y),r=nJ({inputs:{x:i},backend:a,attrs:{begin:b,size:e}});t=a5({inputs:{x:r},backend:a,attrs:{shape:m}}),a.disposeIntermediateTensorInfo(r)}else if(a.shouldExecuteOnCPU([i])){let e=a.readSync(i.dataId),r=r7(f,(0,ev.buffer)(i.shape,i.dtype,e),y,b);t=a.makeTensorInfo(m,i.dtype,r.values)}else{let e=new l8(b,y,f);t=a.runWebGLProgram(e,[i],i.dtype)}let I=a5({inputs:{x:t},backend:a,attrs:{shape:m}});return a.disposeIntermediateTensorInfo(t),I}},l9={kernelName:td.StringNGrams,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{separator:n,nGramWidths:i,leftPad:o,rightPad:s,padWidth:l,preserveShortSequences:u}=a,{data:d,dataSplits:c}=t,[p,h]=r9(r.readSync(d.dataId),r.readSync(c.dataId),n,i,o,s,l,u);return[r.makeTensorInfo([p.length],"string",p),r.makeTensorInfo(c.shape,"int32",h)]}},ue={kernelName:td.StringSplit,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{skipEmpty:n}=a,{input:i,delimiter:o}=t;if("string"!==i.dtype)throw Error("Input must be of datatype string");if(1!==i.shape.length)throw Error(`Input must be a vector, got shape: ${i.shape}`);if(0!==o.shape.length)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let[s,l,u]=ae(r.readSync(i.dataId),r.readSync(o.dataId)[0],n),d=l.length;return[r.makeTensorInfo([d,2],"int32",s),r.makeTensorInfo([d],"string",l),r.makeTensorInfo([2],"int32",new Int32Array(u))]}},ut={kernelName:td.StringToHashBucketFast,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{numBuckets:n}=a,{input:i}=t;if("string"!==i.dtype)throw Error("Input must be of datatype string");if(n<=0)throw Error("Number of buckets must be at least 1");let o=at(r.readSync(i.dataId),n);return r.makeTensorInfo(i.shape,"int32",o)}},ur=aQ({opSnippet:"return tan(x);"}),ua={kernelName:td.Tan,backendName:"webgl",kernelFunc:ur},un=aQ({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),ui={kernelName:td.Tanh,backendName:"webgl",kernelFunc:un};var eg=eg;let uo={kernelName:td.TensorScatterUpdate,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{tensor:n,indices:i,updates:o}=t,{}=a,{sliceRank:s,numUpdates:l,sliceSize:u,strides:d,outputSize:c}=eg.calculateShapes(o,i,n.shape),p=[c/u,u];if(0===c)return r.makeTensorInfo(n.shape,i.dtype);let h=a5({inputs:{x:i},backend:r,attrs:{shape:[l,s]}}),f=a5({inputs:{x:o},backend:r,attrs:{shape:[l,u]}}),x=a5({inputs:{x:n},backend:r,attrs:{shape:p}}),m=new lT(l,s,h.shape.length,f.shape.length,d,p,!1,!0),g=r.runWebGLProgram(m,[f,h,x],x.dtype),v=a5({inputs:{x:g},backend:r,attrs:{shape:n.shape}});return r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(g),v}};class us{constructor(e,t){this.variableNames=["A"];const r=Array(e.length);for(let a=0;a<r.length;a++)r[a]=e[a]*t[a];this.outputShape=r,this.rank=r.length;const a=eL(this.rank),n=function(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(1===t)return`imod(resRC, ${e[0]})`;let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],a=[];for(let t=0;t<e.length;t++)a.push(`imod(${r[t]}, ${e[t]})`);return a.join()}(e);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        setOutput(getA(${n}));
      }
    `}}function ul(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{reps:i}=a;if("string"===n.dtype||n.shape.length>5){let e=r.readSync(n.dataId),t="string"===n.dtype?e.map(e=>x.util.decodeString(e)):e,a=aa((0,ev.buffer)(n.shape,n.dtype,t),i);return r.makeTensorInfo(a.shape,a.dtype,a.values)}let o=new us(n.shape,i);return r.runWebGLProgram(o,[n],n.dtype)}let uu={kernelName:td.Tile,backendName:"webgl",kernelFunc:ul};class ud{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class uc{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function up(e,t){null!==t&&e.disposeIntermediateTensorInfo(t)}function uh(e){let t=1;for(;t<e;)t*=2;return t}let uf={kernelName:td.TopK,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{k:i,sorted:o}=a,s=(0,f.env)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=(0,f.env)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),u=n.shape,d=u[u.length-1];if(r.shouldExecuteOnCPU([n])||d<s||i>l){let[e,t]=an(r.readSync(n.dataId),u,n.dtype,i,o);return[r.makeTensorInfo(e.shape,e.dtype,e.values),r.makeTensorInfo(t.shape,t.dtype,t.values)]}if(0===i)return u[u.length-1]=0,[r.makeTensorInfo(u,n.dtype,[]),r.makeTensorInfo(u,"int32",[])];if(1===d)return[n,o$({attrs:{shape:u,dtype:"int32",value:0},backend:r})];let c=r.texData.get(n.dataId),p=null!==c&&c.isPacked,h=p?r.unpackTensor(n):n,m=x.util.sizeFromShape(u)/d,g=a5({inputs:{x:h},attrs:{shape:[m,d]},backend:r});p&&up(r,h);let v=uh(i),C=uh(d),b=null,$=()=>null===b?[g,g]:[g,b],y=(e,t,a)=>{let n=$(),i=new ud(a),o=[[d],[+(null===b)],[-1/0],[e],[t]],s=b;b=r.runWebGLProgram(i,n,"int32",o),up(r,s)};for(let e=1;e<v;e*=2){let t=2*e;for(let r=e;r>=1;r/=2)y(t,r,[m,C])}for(let e=C;e>v;e/=2){let t=$(),a=new uc([m,e/2]),n=[[d],[+(null===b)],[v]],i=b;b=r.runWebGLProgram(a,t,"int32",n),up(r,i);let o=v/2,s=2*o;for(let e=o;e>=1;e/=2)y(s,e,b.shape)}let I=b;b=nJ({inputs:{x:b},backend:r,attrs:{begin:0,size:[m,i]}}),up(r,I);let R=oV({inputs:{x:g,indices:b},backend:r,attrs:{axis:1,batchDims:1}});up(r,g);let T=u.slice(0,-1);T.push(i),I=b,b=a5({inputs:{x:b},attrs:{shape:T},backend:r}),up(r,I);let w=R;return R=a5({inputs:{x:R},attrs:{shape:T},backend:r}),up(r,w),[R,b]}};class ux{constructor(e,t,r,a,n,i){let o;switch(this.variableNames=["Image","Transforms"],this.outputShape=i,a){case"constant":default:o=1;break;case"reflect":o=2;break;case"wrap":o=3;break;case"nearest":o=4}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${o} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${o} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${o} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${n});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${n});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${"nearest"===r?1:2} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}let um={kernelName:td.Transform,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{image:n,transforms:i}=t,{interpolation:o,fillMode:s,fillValue:l,outputShape:u}=a,[d,c,p,h]=n.shape,[f,x]=null!=u?u:[c,p],m=new ux(c,p,o,s,l,[d,f,x,h]);return r.runWebGLProgram(m,[n,i],"float32")}},ug={kernelName:td.Unique,backendName:"webgl",kernelFunc:function(e){let{inputs:t,attrs:r,backend:a}=e,{axis:n}=r,{x:i}=t;ex(i,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let{outputValues:o,outputShape:s,indices:l}=ao(a.readSync(i.dataId),n,i.shape,i.dtype);return[a.makeTensorInfo(s,i.dtype,o),a.makeTensorInfo([l.length],"int32",l)]}},uv={kernelName:td.Unpack,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{value:n}=t,{axis:i}=a;i<0&&(i+=n.shape.length);let o=n.shape.length,s=n.shape[i],l=Array(o-1),u=0;for(let e=0;e<o;e++)e!==i&&(l[u++]=n.shape[e]);let d=[],c=Array(o).fill(0),p=n.shape.slice();p[i]=1;let h=Array(s);for(let e=0;e<h.length;e++){c[i]=e;let t=nJ({inputs:{x:n},backend:r,attrs:{begin:c,size:p}}),a=a5({inputs:{x:t},backend:r,attrs:{shape:l}});h[e]=a,d.push(t)}return d.forEach(e=>r.disposeIntermediateTensorInfo(e)),h}};var eg=eg;class uC{constructor(e,t){this.variableNames=["x","segmentIds"];const r=e.windowSize,a=e.batchSize,n=e.inSize,i=e.numSegments,o=i*Math.ceil(n/r);this.outputShape=[a,o];const s=4*Math.floor(r/4),l=r%4,u=`
        sumValue += dot(values, segFilter);
    `;let d="";n%r>0&&(d=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return initializationValue;
        }
      `);let c="";n%r>0&&(c=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${d}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${c}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${r}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${u}
        }

        int inIdx = inOffset + ${s};
        if (${1===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${u}
        } else if (${2===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${u}
        } else if (${3===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${u}
        }
        setOutput(sumValue);
      }
    `}}for(let e of[nl,nd,np,nf,ng,nb,n$,ny,nw,nS,nN,nA,nF,nD,nL,nW,nU,nz,nX,nH,nK,n1,n2,n5,n6,ir,io,iu,aM,ip,ib,iE,iF,iD,iP,iL,iB,iW,iG,iz,iK,iY,iQ,iJ,i2,i5,i6,i7,oe,ot,oa,oi,os,ou,oc,oh,om,oC,oy,oR,oS,oN,oO,o_,oD,oL,oW,oG,oz,aU,oX,iv,oq,oK,oQ,aH,oJ,o1,o2,o3,o6,o7,se,sr,si,ss,su,sc,sp,sh,sm,sg,sv,sC,sb,sy,sT,sS,sP,a3,sV,sU,sM,sX,n9,sq,sY,sQ,s1,s4,aK,s3,s5,s6,s8,s9,it,sk,lt,la,li,a6,ll,ld,lh,lx,lv,lb,ly,lR,lS,lN,lA,lF,lD,lL,lV,lU,n0,sD,lM,lz,lX,lH,lq,lj,lK,lY,lJ,l1,l3,l5,l6,l7,l9,ue,ut,sF,nn,ua,ui,uo,uu,uf,um,no,ug,uv,{kernelName:td.UnsortedSegmentSum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,segmentIds:i}=t,{numSegments:o}=a,s=n.shape.length,l=[],u=0,d=eg.getAxesPermutation([u],s),c=n;null!=d&&(c=ni({inputs:{x:n},backend:r,attrs:{perm:d}}),l.push(c),u=eg.getInnerMostAxes(1,s)[0]);let p=eg.segment_util.computeOutShape(c.shape,u,o),h=x.util.sizeFromShape([c.shape[u]]),f=a5({inputs:{x:c},backend:r,attrs:{shape:[-1,h]}});l.push(f);let m=(0,tK.sumOutType)(n.dtype),g=(e,t,a,n,i)=>{let o=e.shape[0],s=e.shape[1],u=eg.segment_util.segOpComputeOptimalWindowSize(s,i),d=new uC({windowSize:u,inSize:s,batchSize:o,numSegments:i},t),c=r.compileAndRun(d,[e,a],n);if(l.push(c),c.shape[1]===i)return c;let p=s7({backend:r,attrs:{start:0,stop:i,step:1,dtype:"float32"}}),h=ul({inputs:{x:p},backend:r,attrs:{reps:[s/u]}});return l.push(p),l.push(h),g(c,t,h,n,i)},v=a5({inputs:{x:g(f,"unsortedSegmentSum",i,m,o)},backend:r,attrs:{shape:p}}),C=v;return null!=d&&(l.push(v),C=ni({inputs:{x:C},backend:r,attrs:{perm:eg.getUndoAxesPermutation(d)}})),l.forEach(e=>r.disposeIntermediateTensorInfo(e)),C}},sK])(0,a_.registerKernel)(e);e.s([],67422),e.i(67422),e.i(52577);let ub="4.22.0";e.i(82175),e.s(["GPGPUContext",()=>tu,"MathBackendWebGL",()=>aN,"forceHalfFloat",()=>aO,"gpgpu_util",0,ak,"setWebGLContext",()=>v,"webgl_util",0,aA],7162),e.i(7162),e.s(["GPGPUContext",()=>tu,"MathBackendWebGL",()=>aN,"forceHalfFloat",()=>aO,"gpgpu_util",()=>ak,"setWebGLContext",()=>v,"version_webgl",()=>ub,"webgl",0,aF,"webgl_util",()=>aA],91001),e.i(91001),e.s(["GPGPUContext",()=>tu,"MathBackendWebGL",()=>aN,"forceHalfFloat",()=>aO,"gpgpu_util",()=>ak,"setWebGLContext",()=>v,"version_webgl",()=>ub,"webgl",0,aF,"webgl_util",()=>aA],46958)}]);