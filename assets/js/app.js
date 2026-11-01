(()=>{var Cg=Object.defineProperty;var Rg=(r,t,e)=>t in r?Cg(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Nt=(r,t,e)=>Rg(r,typeof t!="symbol"?t+"":t,e);var Qh="170";var Pg=0,Bf=1,Ig=2;var kd=1,Lg=2,Bi=3,mi=0,An=1,di=2,mr=0,Ls=1,zf=2,kf=3,Vf=4,Dg=5,zr=100,Ng=101,Ug=102,Og=103,Fg=104,Bg=200,zg=201,kg=202,Vg=203,Fc=204,Bc=205,Hg=206,Gg=207,Wg=208,Xg=209,Yg=210,qg=211,Zg=212,$g=213,Jg=214,zc=0,kc=1,Vc=2,Os=3,Hc=4,Gc=5,Wc=6,Xc=7,Vd=0,Kg=1,Qg=2,gr=0,jg=1,t_=2,e_=3,n_=4,i_=5,r_=6,s_=7;var Hd=300,Fs=301,Bs=302,Yc=303,qc=304,al=306,Co=1e3,Hr=1001,Zc=1002,zn=1003,o_=1004;var da=1005;var Si=1006,ac=1007;var ki=1008;var Xi=1009,Gd=1010,Wd=1011,Ro=1012,jh=1013,Gr=1014,bi=1015,Po=1016,tu=1017,eu=1018,zs=1020,Xd=35902,Yd=1021,qd=1022,pi=1023,Zd=1024,$d=1025,Ds=1026,ks=1027,nu=1028,iu=1029,Jd=1030,ru=1031;var su=1033,Oa=33776,Fa=33777,Ba=33778,za=33779,$c=35840,Jc=35841,Kc=35842,Qc=35843,jc=36196,th=37492,eh=37496,nh=37808,ih=37809,rh=37810,sh=37811,oh=37812,ah=37813,lh=37814,ch=37815,hh=37816,uh=37817,fh=37818,dh=37819,ph=37820,mh=37821,ka=36492,gh=36494,_h=36495,Kd=36283,vh=36284,xh=36285,yh=36286;var Va=2300,Mh=2301,lc=2302,Hf=2400,Gf=2401,Wf=2402;var a_=3200,l_=3201;var c_=0,h_=1,pr="",Kn="srgb",Ws="srgb-linear",ll="linear",_e="srgb";var gs=7680;var Xf=519,u_=512,f_=513,d_=514,Qd=515,p_=516,m_=517,g_=518,__=519,Yf=35044;var qf="300 es",Vi=2e3,Ha=2001,_r=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cc=Math.PI/180,Sh=180/Math.PI;function Io(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function En(r,t,e){return Math.max(t,Math.min(e,r))}function v_(r,t){return(r%t+t)%t}function hc(r,t,e){return(1-e)*r+e*t}function vo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ye=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],b=i[1],M=i[4],v=i[7],A=i[2],E=i[5],T=i[8];return s[0]=o*g+a*b+l*A,s[3]=o*m+a*M+l*E,s[6]=o*p+a*v+l*T,s[1]=c*g+h*b+f*A,s[4]=c*m+h*M+f*E,s[7]=c*p+h*v+f*T,s[2]=u*g+d*b+_*A,s[5]=u*m+d*M+_*E,s[8]=u*p+d*v+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,_=e*f+n*u+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=f*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(uc.makeScale(t,e)),this}rotate(t){return this.premultiply(uc.makeRotation(-t)),this}translate(t,e){return this.premultiply(uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},uc=new jt;function jd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function x_(){let r=Ga("canvas");return r.style.display="block",r}var Zf={};function To(r){r in Zf||(Zf[r]=!0,console.warn(r))}function y_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function M_(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function S_(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===_e&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===_e&&(r.r=Ns(r.r),r.g=Ns(r.g),r.b=Ns(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?ll:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var $f=[.64,.33,.3,.6,.15,.06],Jf=[.2126,.7152,.0722],Kf=[.3127,.329],Qf=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jf=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Ws]:{primaries:$f,whitePoint:Kf,transfer:ll,toXYZ:Qf,fromXYZ:jf,luminanceCoefficients:Jf,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:$f,whitePoint:Kf,transfer:_e,toXYZ:Qf,fromXYZ:jf,luminanceCoefficients:Jf,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});var _s,bh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=Ga("canvas")),_s.width=t.width,_s.height=t.height;let n=_s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ga("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},b_=0,Wa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Io(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(fc(i[o].image)):s.push(fc(i[o]))}else s=fc(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function fc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var w_=0,Cn=class r extends _r{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Hr,i=Hr,s=Si,o=ki,a=pi,l=Xi,c=r.DEFAULT_ANISOTROPY,h=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Io(),this.name="",this.source=new Wa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Co:t.x=t.x-Math.floor(t.x);break;case Hr:t.x=t.x<0?0:1;break;case Zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Co:t.y=t.y-Math.floor(t.y);break;case Hr:t.y=t.y<0?0:1;break;case Zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Hd;Cn.DEFAULT_ANISOTROPY=1;var Be=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(d+1)/2,A=(p+1)/2,E=(h+u)/4,T=(f+g)/4,R=(_+m)/4;return M>v&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=T/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=R/s),this.set(n,i,s,e),this}let b=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-g)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wh=class extends _r{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Wa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yi=class extends wh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xa=class extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Th=class extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==u||c!==d||h!==_){let m=1-a,p=l*u+c*d+h*_+f*g,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let A=Math.sqrt(M),E=Math.atan2(A,p*b);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}let v=a*b;if(l=l*m+u*v,c=c*m+d*v,h=h*m+_*v,f=f*m+g*v,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+h*f+l*d-c*u,t[e+1]=l*_+h*u+c*f-a*d,t[e+2]=c*_+h*d+a*u-l*f,t[e+3]=h*_-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"YXZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"ZXY":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"ZYX":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"YZX":this._x=u*h*f+c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f-u*d*_;break;case"XZY":this._x=u*h*f-c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f+u*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(En(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dc.copy(this).projectOnVector(t),this.sub(dc)}reflect(t){return this.sub(dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dc=new Z,td=new vr,qi=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xo),ma.subVectors(this.max,xo),vs.subVectors(t.a,xo),xs.subVectors(t.b,xo),ys.subVectors(t.c,xo),lr.subVectors(xs,vs),cr.subVectors(ys,xs),Lr.subVectors(vs,ys);let e=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Lr.z,Lr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Lr.z,0,-Lr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Lr.y,Lr.x,0];return!pc(e,vs,xs,ys,ma)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,vs,xs,ys,ma))?!1:(ga.crossVectors(lr,cr),e=[ga.x,ga.y,ga.z],pc(e,vs,xs,ys,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Di=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],hi=new Z,pa=new qi,vs=new Z,xs=new Z,ys=new Z,lr=new Z,cr=new Z,Lr=new Z,xo=new Z,ma=new Z,ga=new Z,Dr=new Z;function pc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Dr.fromArray(r,s);let a=i.x*Math.abs(Dr.x)+i.y*Math.abs(Dr.y)+i.z*Math.abs(Dr.z),l=t.dot(Dr),c=e.dot(Dr),h=n.dot(Dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var T_=new qi,yo=new Z,mc=new Z,Wr=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):T_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yo.subVectors(t,this.center);let e=yo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(yo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yo.copy(t.center).add(mc)),this.expandByPoint(yo.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new Z,gc=new Z,_a=new Z,hr=new Z,_c=new Z,va=new Z,vc=new Z,Eh=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gc.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),hr.copy(this.origin).sub(gc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(_a),a=hr.dot(this.direction),l=-hr.dot(_a),c=hr.lengthSq(),h=Math.abs(1-o*o),f,u,d,_;if(h>0)if(f=o*l-a,u=o*a-l,_=s*h,f>=0)if(u>=-_)if(u<=_){let g=1/h;f*=g,u*=g,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(gc).addScaledVector(_a,u),d}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);let n=Ni.dot(this.direction),i=Ni.dot(Ni)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,i,s){_c.subVectors(e,t),va.subVectors(n,t),vc.crossVectors(_c,va);let o=this.direction.dot(vc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,t);let l=a*this.direction.dot(va.crossVectors(hr,va));if(l<0)return null;let c=a*this.direction.dot(_c.cross(hr));if(c<0||l+c>o)return null;let h=-a*hr.dot(vc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class r{constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,_,g,m)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ms.setFromMatrixColumn(t,0).length(),s=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=o*h,d=o*f,_=a*h,g=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=u-g*c,e[9]=-a*l,e[2]=g-u*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,_=c*h,g=c*f;e[0]=u+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,_=c*h,g=c*f;e[0]=u-g*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,_=a*h,g=a*f;e[0]=l*h,e[4]=_*c-d,e[8]=u*c+g,e[1]=l*f,e[5]=g*c+u,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-u*f,e[8]=_*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+_,e[10]=u-g*f}else if(t.order==="XZY"){let u=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+g,e[5]=o*h,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*h,e[10]=g*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(E_,t,A_)}lookAt(t,e,n){let i=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ur.crossVectors(n,Fn),ur.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ur.crossVectors(n,Fn)),ur.normalize(),xa.crossVectors(Fn,ur),i[0]=ur.x,i[4]=xa.x,i[8]=Fn.x,i[1]=ur.y,i[5]=xa.y,i[9]=Fn.y,i[2]=ur.z,i[6]=xa.z,i[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],M=n[7],v=n[11],A=n[15],E=i[0],T=i[4],R=i[8],y=i[12],x=i[1],L=i[5],N=i[9],F=i[13],P=i[2],Y=i[6],V=i[10],X=i[14],k=i[3],Q=i[7],I=i[11],st=i[15];return s[0]=o*E+a*x+l*P+c*k,s[4]=o*T+a*L+l*Y+c*Q,s[8]=o*R+a*N+l*V+c*I,s[12]=o*y+a*F+l*X+c*st,s[1]=h*E+f*x+u*P+d*k,s[5]=h*T+f*L+u*Y+d*Q,s[9]=h*R+f*N+u*V+d*I,s[13]=h*y+f*F+u*X+d*st,s[2]=_*E+g*x+m*P+p*k,s[6]=_*T+g*L+m*Y+p*Q,s[10]=_*R+g*N+m*V+p*I,s[14]=_*y+g*F+m*X+p*st,s[3]=b*E+M*x+v*P+A*k,s[7]=b*T+M*L+v*Y+A*Q,s[11]=b*R+M*N+v*V+A*I,s[15]=b*y+M*F+v*X+A*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*f-i*c*f-s*a*u+n*c*u+i*a*d-n*l*d)+g*(+e*l*d-e*c*u+s*o*u-i*o*d+i*c*h-s*l*h)+m*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*f+e*a*u+i*o*f-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],b=f*m*c-g*u*c+g*l*d-a*m*d-f*l*p+a*u*p,M=_*u*c-h*m*c-_*l*d+o*m*d+h*l*p-o*u*p,v=h*g*c-_*f*c+_*a*d-o*g*d-h*a*p+o*f*p,A=_*f*l-h*g*l-_*a*u+o*g*u+h*a*m-o*f*m,E=e*b+n*M+i*v+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=b*T,t[1]=(g*u*s-f*m*s-g*i*d+n*m*d+f*i*p-n*u*p)*T,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(f*l*s-a*u*s-f*i*c+n*u*c+a*i*d-n*l*d)*T,t[4]=M*T,t[5]=(h*m*s-_*u*s+_*i*d-e*m*d-h*i*p+e*u*p)*T,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*d+e*l*d)*T,t[8]=v*T,t[9]=(_*f*s-h*g*s-_*n*d+e*g*d+h*n*p-e*f*p)*T,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*T,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*d-e*a*d)*T,t[12]=A*T,t[13]=(h*g*i-_*f*i+_*n*u-e*g*u-h*n*m+e*f*m)*T,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*T,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*u+e*a*u)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,_=s*f,g=o*h,m=o*f,p=a*f,b=l*c,M=l*h,v=l*f,A=n.x,E=n.y,T=n.z;return i[0]=(1-(g+p))*A,i[1]=(d+v)*A,i[2]=(_-M)*A,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(u+p))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(_+M)*T,i[9]=(m-b)*T,i[10]=(1-(u+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Ms.set(i[0],i[1],i[2]).length(),o=Ms.set(i[4],i[5],i[6]).length(),a=Ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ui.copy(this);let c=1/s,h=1/o,f=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=f,ui.elements[9]*=f,ui.elements[10]*=f,e.setFromRotationMatrix(ui),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Vi){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),d,_;if(a===Vi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ha)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Vi){let l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-s),u=(e+t)*c,d=(n+i)*h,_,g;if(a===Vi)_=(o+s)*f,g=-2*f;else if(a===Ha)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ms=new Z,ui=new Ce,E_=new Z(0,0,0),A_=new Z(1,1,1),ur=new Z,xa=new Z,Fn=new Z,ed=new Ce,nd=new vr,Zi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ed.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ed,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nd.setFromEuler(this),this.setFromQuaternion(nd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zi.DEFAULT_ORDER="XYZ";var Ya=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},C_=0,id=new Z,Ss=new vr,Ui=new Ce,ya=new Z,Mo=new Z,R_=new Z,P_=new vr,rd=new Z(1,0,0),sd=new Z(0,1,0),od=new Z(0,0,1),ad={type:"added"},I_={type:"removed"},bs={type:"childadded",child:null},xc={type:"childremoved",child:null},Vn=class r extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Z,e=new Zi,n=new vr,i=new Z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new jt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(rd,t)}rotateY(t){return this.rotateOnAxis(sd,t)}rotateZ(t){return this.rotateOnAxis(od,t)}translateOnAxis(t,e){return id.copy(t).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rd,t)}translateY(t){return this.translateOnAxis(sd,t)}translateZ(t){return this.translateOnAxis(od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ya.copy(t):ya.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Mo,ya,this.up):Ui.lookAt(ya,Mo,this.up),this.quaternion.setFromRotationMatrix(Ui),i&&(Ui.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ad),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(I_),xc.child=t,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ad),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,t,R_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,P_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Vn.DEFAULT_UP=new Z(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new Z,Oi=new Z,yc=new Z,Fi=new Z,ws=new Z,Ts=new Z,ld=new Z,Mc=new Z,Sc=new Z,bc=new Z,wc=new Be,Tc=new Be,Ec=new Be,kr=class r{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fi.subVectors(t,e),i.cross(fi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){fi.subVectors(i,e),Oi.subVectors(n,e),yc.subVectors(t,e);let o=fi.dot(fi),a=fi.dot(Oi),l=fi.dot(yc),c=Oi.dot(Oi),h=Oi.dot(yc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,_=(o*h-a*l)*u;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return wc.setScalar(0),Tc.setScalar(0),Ec.setScalar(0),wc.fromBufferAttribute(t,e),Tc.fromBufferAttribute(t,n),Ec.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(wc,s.x),o.addScaledVector(Tc,s.y),o.addScaledVector(Ec,s.z),o}static isFrontFacing(t,e,n,i){return fi.subVectors(n,e),Oi.subVectors(t,e),fi.cross(Oi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),fi.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;ws.subVectors(i,n),Ts.subVectors(s,n),Mc.subVectors(t,n);let l=ws.dot(Mc),c=Ts.dot(Mc);if(l<=0&&c<=0)return e.copy(n);Sc.subVectors(t,i);let h=ws.dot(Sc),f=Ts.dot(Sc);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ws,o);bc.subVectors(t,s);let d=ws.dot(bc),_=Ts.dot(bc);if(_>=0&&d<=_)return e.copy(s);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Ts,a);let m=h*_-d*f;if(m<=0&&f-h>=0&&d-_>=0)return ld.subVectors(s,i),a=(f-h)/(f-h+(d-_)),e.copy(i).addScaledVector(ld,a);let p=1/(m+g+u);return o=g*p,a=u*p,e.copy(n).addScaledVector(ws,o).addScaledVector(Ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function Ac(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var me=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=v_(t,1),e=En(e,0,1),n=En(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ac(o,s,t+1/3),this.g=Ac(o,s,t),this.b=Ac(o,s,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=Kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Kn){let n=tp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return se.fromWorkingColorSpace(on.copy(this),t),Math.round(En(on.r*255,0,255))*65536+Math.round(En(on.g*255,0,255))*256+Math.round(En(on.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(on.copy(this),e);let n=on.r,i=on.g,s=on.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Kn){se.fromWorkingColorSpace(on.copy(this),t);let e=on.r,n=on.g,i=on.b;return t!==Kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(fr),this.setHSL(fr.h+t,fr.s+e,fr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fr),t.getHSL(Ma);let n=hc(fr.h,Ma.h,e),i=hc(fr.s,Ma.s,e),s=hc(fr.l,Ma.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new me;me.NAMES=tp;var L_=0,Vs=class extends _r{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Io(),this.name="",this.blending=Ls,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Bc,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fc&&(n.blendSrc=this.blendSrc),this.blendDst!==Bc&&(n.blendDst=this.blendDst),this.blendEquation!==zr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qa=class extends Vs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new Z,Sa=new ye,kn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yf,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),i=Tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yf&&(t.usage=this.usage),t}};var Za=class extends kn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $a=class extends kn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wi=class extends kn{constructor(t,e,n){super(new Float32Array(t),e,n)}},D_=0,Jn=new Ce,Cc=new Vn,Es=new Z,Bn=new qi,So=new qi,Je=new Z,Xr=class r extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jd(t)?$a:Za)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wi(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Bn.min,So.min),Bn.expandByPoint(Je),Je.addVectors(Bn.max,So.max),Bn.expandByPoint(Je)):(Bn.expandByPoint(So.min),Bn.expandByPoint(So.max))}Bn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(t,c),Je.add(Es)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new Z,l[R]=new Z;let c=new Z,h=new Z,f=new Z,u=new ye,d=new ye,_=new ye,g=new Z,m=new Z;function p(R,y,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,x),u.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),h.sub(c),f.sub(c),d.sub(u),_.sub(u);let L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(L),a[R].add(g),a[y].add(g),a[x].add(g),l[R].add(m),l[y].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,y=b.length;R<y;++R){let x=b[R],L=x.start,N=x.count;for(let F=L,P=L+N;F<P;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new Z,v=new Z,A=new Z,E=new Z;function T(R){A.fromBufferAttribute(i,R),E.copy(A);let y=a[R];M.copy(y),M.sub(A.multiplyScalar(A.dot(y))).normalize(),v.crossVectors(E,y);let L=v.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,L)}for(let R=0,y=b.length;R<y;++R){let x=b[R],L=x.start,N=x.count;for(let F=L,P=L+N;F<P;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,h=new Z,f=new Z;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let p=0;p<h;p++)u[_++]=c[d++]}return new kn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cd=new Ce,Nr=new Eh,ba=new Wr,hd=new Z,wa=new Z,Ta=new Z,Ea=new Z,Rc=new Z,Aa=new Z,ud=new Z,Ca=new Z,Xe=class extends Vn{constructor(t=new Xr,e=new qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Rc.fromBufferAttribute(f,t),o?Aa.addScaledVector(Rc,h):Aa.addScaledVector(Rc.sub(e),h))}e.add(Aa)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),Nr.copy(t.ray).recast(t.near),!(ba.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(ba,hd)===null||Nr.origin.distanceToSquared(hd)>(t.far-t.near)**2))&&(cd.copy(s).invert(),Nr.copy(t.ray).applyMatrix4(cd),!(n.boundingBox!==null&&Nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nr)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){let m=u[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,A=M;v<A;v+=3){let E=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);i=Ra(this,p,t,n,c,h,f,E,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let b=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=Ra(this,o,t,n,c,h,f,b,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){let m=u[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,A=M;v<A;v+=3){let E=v,T=v+1,R=v+2;i=Ra(this,p,t,n,c,h,f,E,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let b=m,M=m+1,v=m+2;i=Ra(this,o,t,n,c,h,f,b,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function N_(r,t,e,n,i,s,o,a){let l;if(t.side===An?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===mi,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ca);return c<e.near||c>e.far?null:{distance:c,point:Ca.clone(),object:r}}function Ra(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,wa),r.getVertexPosition(l,Ta),r.getVertexPosition(c,Ea);let h=N_(r,t,e,n,wa,Ta,Ea,ud);if(h){let f=new Z;kr.getBarycoord(ud,wa,Ta,Ea,f),i&&(h.uv=kr.getInterpolatedAttribute(i,a,l,c,f,new ye)),s&&(h.uv1=kr.getInterpolatedAttribute(s,a,l,c,f,new ye)),o&&(h.normal=kr.getInterpolatedAttribute(o,a,l,c,f,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Z,materialIndex:0};kr.getNormal(wa,Ta,Ea,u.normal),h.face=u,h.barycoord=f}return h}var $i=class r extends Xr{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Wi(c,3)),this.setAttribute("normal",new Wi(h,3)),this.setAttribute("uv",new Wi(f,2));function _(g,m,p,b,M,v,A,E,T,R,y){let x=v/T,L=A/R,N=v/2,F=A/2,P=E/2,Y=T+1,V=R+1,X=0,k=0,Q=new Z;for(let I=0;I<V;I++){let st=I*L-F;for(let At=0;At<Y;At++){let Bt=At*x-N;Q[g]=Bt*b,Q[m]=st*M,Q[p]=P,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(At/T),f.push(1-I/R),X+=1}}for(let I=0;I<R;I++)for(let st=0;st<T;st++){let At=u+st+Y*I,Bt=u+st+Y*(I+1),q=u+(st+1)+Y*(I+1),nt=u+(st+1)+Y*I;l.push(At,Bt,nt),l.push(Bt,q,nt),k+=6}a.addGroup(d,k,y),d+=k,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pn(r){let t={};for(let e=0;e<r.length;e++){let n=Hs(r[e]);for(let i in n)t[i]=n[i]}return t}function U_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ep(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var O_={clone:Hs,merge:pn},F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Vs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=B_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=U_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ja=class extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dr=new Z,fd=new ye,dd=new ye,mn=class extends Ja{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dr.x,dr.y).multiplyScalar(-t/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-t/dr.z)}getViewSize(t,e){return this.getViewBounds(t,fd,dd),e.subVectors(dd,fd)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},As=-90,Cs=1,Ah=class extends Vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new mn(As,Cs,t,e);i.layers=this.layers,this.add(i);let s=new mn(As,Cs,t,e);s.layers=this.layers,this.add(s);let o=new mn(As,Cs,t,e);o.layers=this.layers,this.add(o);let a=new mn(As,Cs,t,e);a.layers=this.layers,this.add(a);let l=new mn(As,Cs,t,e);l.layers=this.layers,this.add(l);let c=new mn(As,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ka=class extends Cn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ch=class extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ka(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $i(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:mr});s.uniforms.tEquirect.value=e;let o=new Xe(i,s),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=Si),new Ah(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Pc=new Z,z_=new Z,k_=new jt,zi=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Pc.subVectors(n,e).cross(z_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||k_.getNormalMatrix(t),i=this.coplanarPoint(Pc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new Wr,Pa=new Z,Qa=class{constructor(t=new zi,e=new zi,n=new zi,i=new zi,s=new zi,o=new zi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],b=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,u-c,m-d,v-p).normalize(),n[1].setComponents(l+s,u+c,m+d,v+p).normalize(),n[2].setComponents(l+o,u+h,m+_,v+b).normalize(),n[3].setComponents(l-o,u-h,m-_,v-b).normalize(),n[4].setComponents(l-a,u-f,m-g,v-M).normalize(),e===Vi)n[5].setComponents(l+a,u+f,m+g,v+M).normalize();else if(e===Ha)n[5].setComponents(a,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Pa.x=i.normal.x>0?t.max.x:t.min.x,Pa.y=i.normal.y>0?t.max.y:t.min.y,Pa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function np(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function V_(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<f.length;d++){let _=f[u],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,f[u]=g)}f.length=u+1;for(let d=0,_=f.length;d<_;d++){let g=f[d];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var xr=class r extends Xr{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let b=p*u-o;for(let M=0;M<c;M++){let v=M*f-s;_.push(v,-b,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let M=b+c*p,v=b+c*(p+1),A=b+1+c*(p+1),E=b+1+c*p;d.push(M,v,E),d.push(v,A,E)}this.setIndex(d),this.setAttribute("position",new Wi(_,3)),this.setAttribute("normal",new Wi(g,3)),this.setAttribute("uv",new Wi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},H_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,K_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,u0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_v=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ev=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$v=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ox=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:H_,alphahash_pars_fragment:G_,alphamap_fragment:W_,alphamap_pars_fragment:X_,alphatest_fragment:Y_,alphatest_pars_fragment:q_,aomap_fragment:Z_,aomap_pars_fragment:$_,batching_pars_vertex:J_,batching_vertex:K_,begin_vertex:Q_,beginnormal_vertex:j_,bsdfs:t0,iridescence_fragment:e0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:o0,color_fragment:a0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:h0,common:u0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:d0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:_0,colorspace_fragment:v0,colorspace_pars_fragment:x0,envmap_fragment:y0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:N0,envmap_vertex:w0,fog_vertex:T0,fog_pars_vertex:E0,fog_fragment:A0,fog_pars_fragment:C0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:P0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:L0,lights_pars_begin:D0,lights_toon_fragment:U0,lights_toon_pars_fragment:O0,lights_phong_fragment:F0,lights_phong_pars_fragment:B0,lights_physical_fragment:z0,lights_physical_pars_fragment:k0,lights_fragment_begin:V0,lights_fragment_maps:H0,lights_fragment_end:G0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:Y0,logdepthbuf_vertex:q0,map_fragment:Z0,map_pars_fragment:$0,map_particle_fragment:J0,map_particle_pars_fragment:K0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:j0,morphinstance_vertex:tv,morphcolor_vertex:ev,morphnormal_vertex:nv,morphtarget_pars_vertex:iv,morphtarget_vertex:rv,normal_fragment_begin:sv,normal_fragment_maps:ov,normal_pars_fragment:av,normal_pars_vertex:lv,normal_vertex:cv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:fv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:pv,opaque_fragment:mv,packing:gv,premultiplied_alpha_fragment:_v,project_vertex:vv,dithering_fragment:xv,dithering_pars_fragment:yv,roughnessmap_fragment:Mv,roughnessmap_pars_fragment:Sv,shadowmap_pars_fragment:bv,shadowmap_pars_vertex:wv,shadowmap_vertex:Tv,shadowmask_pars_fragment:Ev,skinbase_vertex:Av,skinning_pars_vertex:Cv,skinning_vertex:Rv,skinnormal_vertex:Pv,specularmap_fragment:Iv,specularmap_pars_fragment:Lv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Nv,transmission_fragment:Uv,transmission_pars_fragment:Ov,uv_pars_fragment:Fv,uv_pars_vertex:Bv,uv_vertex:zv,worldpos_vertex:kv,background_vert:Vv,background_frag:Hv,backgroundCube_vert:Gv,backgroundCube_frag:Wv,cube_vert:Xv,cube_frag:Yv,depth_vert:qv,depth_frag:Zv,distanceRGBA_vert:$v,distanceRGBA_frag:Jv,equirect_vert:Kv,equirect_frag:Qv,linedashed_vert:jv,linedashed_frag:tx,meshbasic_vert:ex,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:rx,meshmatcap_vert:sx,meshmatcap_frag:ox,meshnormal_vert:ax,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:hx,meshphysical_vert:ux,meshphysical_frag:fx,meshtoon_vert:dx,meshtoon_frag:px,points_vert:mx,points_frag:gx,shadow_vert:_x,shadow_frag:vx,sprite_vert:xx,sprite_frag:yx},yt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Mi={basic:{uniforms:pn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:pn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new me(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:pn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:pn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:pn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new me(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:pn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:pn([yt.points,yt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:pn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:pn([yt.common,yt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:pn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:pn([yt.sprite,yt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:pn([yt.common,yt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:pn([yt.lights,yt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Mi.physical={uniforms:pn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Ia={r:0,b:0,g:0},Or=new Zi,Mx=new Ce;function Sx(r,t,e,n,i,s,o){let a=new me(0),l=s===!0?0:1,c,h,f=null,u=0,d=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function g(b){let M=!1,v=_(b);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,M){let v=_(M);v&&(v.isCubeTexture||v.mapping===al)?(h===void 0&&(h=new Xe(new $i(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Hs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Or.copy(M.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(Or)),h.material.toneMapped=se.getTransfer(v.colorSpace)!==_e,(f!==v||u!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xe(new xr(2,2),new gn({name:"BackgroundMaterial",uniforms:Hs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=se.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,d=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Ia,ep(r)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:m}}function bx(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(x,L,N,F,P){let Y=!1,V=f(F,N,L);s!==V&&(s=V,c(s.object)),Y=d(x,F,N,P),Y&&_(x,F,N,P),P!==null&&t.update(P,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(x,L,N,F),P!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function f(x,L,N){let F=N.wireframe===!0,P=n[x.id];P===void 0&&(P={},n[x.id]=P);let Y=P[L.id];Y===void 0&&(Y={},P[L.id]=Y);let V=Y[F];return V===void 0&&(V=u(l()),Y[F]=V),V}function u(x){let L=[],N=[],F=[];for(let P=0;P<e;P++)L[P]=0,N[P]=0,F[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:F,object:x,attributes:{},index:null}}function d(x,L,N,F){let P=s.attributes,Y=L.attributes,V=0,X=N.getAttributes();for(let k in X)if(X[k].location>=0){let I=P[k],st=Y[k];if(st===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),I===void 0||I.attribute!==st||st&&I.data!==st.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function _(x,L,N,F){let P={},Y=L.attributes,V=0,X=N.getAttributes();for(let k in X)if(X[k].location>=0){let I=Y[k];I===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(I=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(I=x.instanceColor));let st={};st.attribute=I,I&&I.data&&(st.data=I.data),P[k]=st,V++}s.attributes=P,s.attributesNum=V,s.index=F}function g(){let x=s.newAttributes;for(let L=0,N=x.length;L<N;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){let N=s.newAttributes,F=s.enabledAttributes,P=s.attributeDivisors;N[x]=1,F[x]===0&&(r.enableVertexAttribArray(x),F[x]=1),P[x]!==L&&(r.vertexAttribDivisor(x,L),P[x]=L)}function b(){let x=s.newAttributes,L=s.enabledAttributes;for(let N=0,F=L.length;N<F;N++)L[N]!==x[N]&&(r.disableVertexAttribArray(N),L[N]=0)}function M(x,L,N,F,P,Y,V){V===!0?r.vertexAttribIPointer(x,L,N,P,Y):r.vertexAttribPointer(x,L,N,F,P,Y)}function v(x,L,N,F){g();let P=F.attributes,Y=N.getAttributes(),V=L.defaultAttributeValues;for(let X in Y){let k=Y[X];if(k.location>=0){let Q=P[X];if(Q===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){let I=Q.normalized,st=Q.itemSize,At=t.get(Q);if(At===void 0)continue;let Bt=At.buffer,q=At.type,nt=At.bytesPerElement,gt=q===r.INT||q===r.UNSIGNED_INT||Q.gpuType===jh;if(Q.isInterleavedBufferAttribute){let rt=Q.data,Mt=rt.stride,Ct=Q.offset;if(rt.isInstancedInterleavedBuffer){for(let zt=0;zt<k.locationSize;zt++)p(k.location+zt,rt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let zt=0;zt<k.locationSize;zt++)m(k.location+zt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let zt=0;zt<k.locationSize;zt++)M(k.location+zt,st/k.locationSize,q,I,Mt*nt,(Ct+st/k.locationSize*zt)*nt,gt)}else{if(Q.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)p(k.location+rt,Q.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let rt=0;rt<k.locationSize;rt++)m(k.location+rt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let rt=0;rt<k.locationSize;rt++)M(k.location+rt,st/k.locationSize,q,I,st*nt,st/k.locationSize*rt*nt,gt)}}else if(V!==void 0){let I=V[X];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(k.location,I);break;case 3:r.vertexAttrib3fv(k.location,I);break;case 4:r.vertexAttrib4fv(k.location,I);break;default:r.vertexAttrib1fv(k.location,I)}}}}b()}function A(){R();for(let x in n){let L=n[x];for(let N in L){let F=L[N];for(let P in F)h(F[P].object),delete F[P];delete L[N]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let L=n[x.id];for(let N in L){let F=L[N];for(let P in F)h(F[P].object),delete F[P];delete L[N]}delete n[x.id]}function T(x){for(let L in n){let N=n[L];if(N[x.id]===void 0)continue;let F=N[x.id];for(let P in F)h(F[P].object),delete F[P];delete N[x.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function wx(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let _=0;_<f;_++)d+=h[_];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],u[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g]*u[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==pi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===Po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Xi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==bi&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:A,maxSamples:E}}function Ex(r){let t=this,e=null,n=0,i=!1,s=!1,o=new zi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{let b=s?0:n,M=b*4,v=p.clippingState||null;l.value=v,v=h(_,u,M,d);for(let A=0;A!==M;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,_){let g=f!==null?f.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=d+g*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==g;++M,v+=4)o.copy(f[M]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ax(r){let t=new WeakMap;function e(o,a){return a===Yc?o.mapping=Fs:a===qc&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Yc||a===qc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ch(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Rh=class extends Ja{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Is=4,pd=[.125,.215,.35,.446,.526,.582],Vr=20,Ic=new Rh,md=new me,Lc=null,Dc=0,Nc=0,Uc=!1,Br=(1+Math.sqrt(5))/2,Rs=1/Br,gd=[new Z(-Br,Rs,0),new Z(Br,Rs,0),new Z(-Rs,0,Br),new Z(Rs,0,Br),new Z(0,Br,-Rs),new Z(0,Br,Rs),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lc,Dc,Nc),this._renderer.xr.enabled=Uc,t.scissorTest=!1,La(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Po,format:pi,colorSpace:Ws,depthBuffer:!1},i=_d(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cx(s)),this._blurMaterial=Rx(s,t,e)}return i}_compileMaterial(t){let e=new Xe(this._lodPlanes[0],t);this._renderer.compile(e,Ic)}_sceneToCubeUV(t,e,n,i){let a=new mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(md),h.toneMapping=gr,h.autoClear=!1;let d=new qa({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),_=new Xe(new $i,d),g=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(md),g=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;La(i,b*M,p>2?M:0,M,M),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Fs||t.mapping===Bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vd());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;La(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ic)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gd[(i-s-1)%gd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Xe(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Vr-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);let p=[],b=0;for(let T=0;T<Vr;++T){let R=T/g,y=Math.exp(-R*R/2);p.push(y),T===0?b+=y:T<m&&(b+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=_,u.mipInt.value=M-n;let v=this._sizeLods[i],A=3*v*(i>M-Is?i-M+Is:0),E=4*(this._cubeSize-v);La(e,A,E,3*v,2*v),l.setRenderTarget(e),l.render(f,Ic)}};function Cx(r){let t=[],e=[],n=[],i=r,s=r-Is+1+pd.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Is?l=pd[o-r+Is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*d),M=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,R=E>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];b.set(y,g*_*E),M.set(u,m*_*E);let x=[E,E,E,E,E,E];v.set(x,p*_*E)}let A=new Xr;A.setAttribute("position",new kn(b,g)),A.setAttribute("uv",new kn(M,m)),A.setAttribute("faceIndex",new kn(v,p)),t.push(A),i>Is&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _d(r,t,e){let n=new Yi(r,t,e);return n.texture.mapping=al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function La(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Rx(r,t,e){let n=new Float32Array(Vr),i=new Z(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function vd(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function xd(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Px(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Yc||l===qc,h=l===Fs||l===Bs;if(c||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ja(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new ja(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ix(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&To("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lx(r,t,e,n){let i={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);for(let _ in u.morphAttributes){let g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let _ in u)t.update(u[_],r.ARRAY_BUFFER);let d=f.morphAttributes;for(let _ in d){let g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,_=f.attributes.position,g=0;if(d!==null){let b=d.array;g=d.version;for(let M=0,v=b.length;M<v;M+=3){let A=b[M+0],E=b[M+1],T=b[M+2];u.push(A,E,E,T,T,A)}}else if(_!==void 0){let b=_.array;g=_.version;for(let M=0,v=b.length/3-1;M<v;M+=3){let A=M+0,E=M+1,T=M+2;u.push(A,E,E,T,T,A)}}else return;let m=new(jd(u)?$a:Za)(u,1);m.version=g;let p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Dx(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*o),e.update(d,n,1)}function c(u,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,u*o,_),e.update(d,n,_))}function h(u,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function f(u,d,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,u,0,g,0,_);let p=0;for(let b=0;b<_;b++)p+=d[b]*g[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Nx(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ux(r,t,e){let n=new WeakMap,i=new Be;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;d===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let v=a.attributes.position.count*M,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*A*4*f),T=new Xa(E,v,A,f);T.type=bi,T.needsUpdate=!0;let R=M*4;for(let x=0;x<f;x++){let L=m[x],N=p[x],F=b[x],P=v*A*4*x;for(let Y=0;Y<L.count;Y++){let V=Y*R;d===!0&&(i.fromBufferAttribute(L,Y),E[P+V+0]=i.x,E[P+V+1]=i.y,E[P+V+2]=i.z,E[P+V+3]=0),_===!0&&(i.fromBufferAttribute(N,Y),E[P+V+4]=i.x,E[P+V+5]=i.y,E[P+V+6]=i.z,E[P+V+7]=0),g===!0&&(i.fromBufferAttribute(F,Y),E[P+V+8]=i.x,E[P+V+9]=i.y,E[P+V+10]=i.z,E[P+V+11]=F.itemSize===4?i.w:1)}}u={count:f,texture:T,size:new ye(v,A)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Ox(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var tl=class extends Cn{constructor(t,e,n,i,s,o,a,l,c,h=Ds){if(h!==Ds&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ds&&(n=Gr),n===void 0&&h===ks&&(n=zs),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ip=new Cn,yd=new tl(1,1),rp=new Xa,sp=new Th,op=new Ka,Md=[],Sd=[],bd=new Float32Array(16),wd=new Float32Array(9),Td=new Float32Array(4);function Xs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Md[i];if(s===void 0&&(s=new Float32Array(i),Md[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function qe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function cl(r,t){let e=Sd[t];e===void 0&&(e=new Int32Array(t),Sd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Fx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Bx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2fv(this.addr,t),qe(e,t)}}function zx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;r.uniform3fv(this.addr,t),qe(e,t)}}function kx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4fv(this.addr,t),qe(e,t)}}function Vx(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;Td.set(n),r.uniformMatrix2fv(this.addr,!1,Td),qe(e,n)}}function Hx(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;wd.set(n),r.uniformMatrix3fv(this.addr,!1,wd),qe(e,n)}}function Gx(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;bd.set(n),r.uniformMatrix4fv(this.addr,!1,bd),qe(e,n)}}function Wx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Xx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2iv(this.addr,t),qe(e,t)}}function Yx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3iv(this.addr,t),qe(e,t)}}function qx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4iv(this.addr,t),qe(e,t)}}function Zx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function $x(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2uiv(this.addr,t),qe(e,t)}}function Jx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3uiv(this.addr,t),qe(e,t)}}function Kx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4uiv(this.addr,t),qe(e,t)}}function Qx(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yd.compareFunction=Qd,s=yd):s=ip,e.setTexture2D(t||s,i)}function jx(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sp,i)}function ty(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||op,i)}function ey(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rp,i)}function ny(r){switch(r){case 5126:return Fx;case 35664:return Bx;case 35665:return zx;case 35666:return kx;case 35674:return Vx;case 35675:return Hx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return Yx;case 35669:case 35673:return qx;case 5125:return Zx;case 36294:return $x;case 36295:return Jx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ey}}function iy(r,t){r.uniform1fv(this.addr,t)}function ry(r,t){let e=Xs(t,this.size,2);r.uniform2fv(this.addr,e)}function sy(r,t){let e=Xs(t,this.size,3);r.uniform3fv(this.addr,e)}function oy(r,t){let e=Xs(t,this.size,4);r.uniform4fv(this.addr,e)}function ay(r,t){let e=Xs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ly(r,t){let e=Xs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function cy(r,t){let e=Xs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function hy(r,t){r.uniform1iv(this.addr,t)}function uy(r,t){r.uniform2iv(this.addr,t)}function fy(r,t){r.uniform3iv(this.addr,t)}function dy(r,t){r.uniform4iv(this.addr,t)}function py(r,t){r.uniform1uiv(this.addr,t)}function my(r,t){r.uniform2uiv(this.addr,t)}function gy(r,t){r.uniform3uiv(this.addr,t)}function _y(r,t){r.uniform4uiv(this.addr,t)}function vy(r,t,e){let n=this.cache,i=t.length,s=cl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ip,s[o])}function xy(r,t,e){let n=this.cache,i=t.length,s=cl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||sp,s[o])}function yy(r,t,e){let n=this.cache,i=t.length,s=cl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||op,s[o])}function My(r,t,e){let n=this.cache,i=t.length,s=cl(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||rp,s[o])}function Sy(r){switch(r){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return oy;case 35674:return ay;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return hy;case 35667:case 35671:return uy;case 35668:case 35672:return fy;case 35669:case 35673:return dy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return My}}var Ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ny(e.type)}},Ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sy(e.type)}},Lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Oc=/(\w+)(\])?(\[|\.)?/g;function Ed(r,t){r.seq.push(t),r.map[t.id]=t}function by(r,t,e){let n=r.name,i=n.length;for(Oc.lastIndex=0;;){let s=Oc.exec(n),o=Oc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ed(e,c===void 0?new Ph(a,r,t):new Ih(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new Lh(a),Ed(e,f)),e=f}}}var Us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);by(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Ad(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var wy=37297,Ty=0;function Ey(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Cd=new jt;function Ay(r){se._getMatrix(Cd,se.workingColorSpace,r);let t=`mat3( ${Cd.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(r)){case ll:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Rd(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Ey(r.getShaderSource(t),o)}else return i}function Cy(r,t){let e=Ay(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ry(r,t){let e;switch(t){case jg:e="Linear";break;case t_:e="Reinhard";break;case e_:e="Cineon";break;case n_:e="ACESFilmic";break;case r_:e="AgX";break;case s_:e="Neutral";break;case i_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Da=new Z;function Py(){se.getLuminanceCoefficients(Da);let r=Da.x.toFixed(4),t=Da.y.toFixed(4),e=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function Ly(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dy(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Eo(r){return r!==""}function Pd(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Id(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(r){return r.replace(Ny,Oy)}var Uy=new Map;function Oy(r,t){let e=te[t];if(e===void 0){let n=Uy.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dh(e)}var Fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(r){return r.replace(Fy,By)}function By(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Dd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lg?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function ky(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fs:case Bs:t="ENVMAP_TYPE_CUBE";break;case al:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function Hy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vd:t="ENVMAP_BLENDING_MULTIPLY";break;case Kg:t="ENVMAP_BLENDING_MIX";break;case Qg:t="ENVMAP_BLENDING_ADD";break}return t}function Gy(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Wy(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zy(e),c=ky(e),h=Vy(e),f=Hy(e),u=Gy(e),d=Iy(e),_=Ly(s),g=i.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Eo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Eo).join(`
`),p.length>0&&(p+=`
`)):(m=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),p=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gr?"#define TONE_MAPPING":"",e.toneMapping!==gr?te.tonemapping_pars_fragment:"",e.toneMapping!==gr?Ry("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Cy("linearToOutputTexel",e.outputColorSpace),Py(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),o=Dh(o),o=Pd(o,e),o=Id(o,e),a=Dh(a),a=Pd(a,e),a=Id(a,e),o=Ld(o),a=Ld(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+m+o,v=b+p+a,A=Ad(i,i.VERTEX_SHADER,M),E=Ad(i,i.FRAGMENT_SHADER,v);i.attachShader(g,A),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(L){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(A).trim(),P=i.getShaderInfoLog(E).trim(),Y=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,E);else{let X=Rd(i,A,"vertex"),k=Rd(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+X+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||P==="")&&(V=!1);V&&(L.diagnostics={runnable:Y,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:P,prefix:p}})}i.deleteShader(A),i.deleteShader(E),R=new Us(i,g),y=Dy(i,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,wy)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ty++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=E,this}var Xy=0,Nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uh(t),e.set(t,n)),n}},Uh=class{constructor(t){this.id=Xy++,this.code=t,this.usedTimes=0}};function Yy(r,t,e,n,i,s,o){let a=new Ya,l=new Nh,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,L,N,F){let P=N.fog,Y=F.geometry,V=y.isMeshStandardMaterial?N.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),k=X&&X.mapping===al?X.image.height:null,Q=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let I=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,st=I!==void 0?I.length:0,At=0;Y.morphAttributes.position!==void 0&&(At=1),Y.morphAttributes.normal!==void 0&&(At=2),Y.morphAttributes.color!==void 0&&(At=3);let Bt,q,nt,gt;if(Q){let St=Mi[Q];Bt=St.vertexShader,q=St.fragmentShader}else Bt=y.vertexShader,q=y.fragmentShader,l.update(y),nt=l.getVertexShaderID(y),gt=l.getFragmentShaderID(y);let rt=r.getRenderTarget(),Mt=r.state.buffers.depth.getReversed(),Ct=F.isInstancedMesh===!0,zt=F.isBatchedMesh===!0,tt=!!y.map,it=!!y.matcap,bt=!!X,U=!!y.aoMap,qt=!!y.lightMap,Dt=!!y.bumpMap,z=!!y.normalMap,vt=!!y.displacementMap,Jt=!!y.emissiveMap,Et=!!y.metalnessMap,C=!!y.roughnessMap,S=y.anisotropy>0,G=y.clearcoat>0,et=y.dispersion>0,j=y.iridescence>0,J=y.sheen>0,dt=y.transmission>0,ht=S&&!!y.anisotropyMap,_t=G&&!!y.clearcoatMap,Zt=G&&!!y.clearcoatNormalMap,ot=G&&!!y.clearcoatRoughnessMap,ct=j&&!!y.iridescenceMap,Ft=j&&!!y.iridescenceThicknessMap,Ot=J&&!!y.sheenColorMap,wt=J&&!!y.sheenRoughnessMap,Kt=!!y.specularMap,kt=!!y.specularColorMap,ae=!!y.specularIntensityMap,D=dt&&!!y.transmissionMap,ft=dt&&!!y.thicknessMap,$=!!y.gradientMap,K=!!y.alphaMap,ut=y.alphaTest>0,pt=!!y.alphaHash,Vt=!!y.extensions,ce=gr;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=r.toneMapping);let De={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Bt,fragmentShader:q,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:zt,batchingColor:zt&&F._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&F.instanceColor!==null,instancingMorph:Ct&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ws,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:it,envMap:bt,envMapMode:bt&&X.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:qt,bumpMap:Dt,normalMap:z,displacementMap:u&&vt,emissiveMap:Jt,normalMapObjectSpace:z&&y.normalMapType===h_,normalMapTangentSpace:z&&y.normalMapType===c_,metalnessMap:Et,roughnessMap:C,anisotropy:S,anisotropyMap:ht,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:Zt,clearcoatRoughnessMap:ot,dispersion:et,iridescence:j,iridescenceMap:ct,iridescenceThicknessMap:Ft,sheen:J,sheenColorMap:Ot,sheenRoughnessMap:wt,specularMap:Kt,specularColorMap:kt,specularIntensityMap:ae,transmission:dt,transmissionMap:D,thicknessMap:ft,gradientMap:$,opaque:y.transparent===!1&&y.blending===Ls&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:pt,combine:y.combine,mapUv:tt&&g(y.map.channel),aoMapUv:U&&g(y.aoMap.channel),lightMapUv:qt&&g(y.lightMap.channel),bumpMapUv:Dt&&g(y.bumpMap.channel),normalMapUv:z&&g(y.normalMap.channel),displacementMapUv:vt&&g(y.displacementMap.channel),emissiveMapUv:Jt&&g(y.emissiveMap.channel),metalnessMapUv:Et&&g(y.metalnessMap.channel),roughnessMapUv:C&&g(y.roughnessMap.channel),anisotropyMapUv:ht&&g(y.anisotropyMap.channel),clearcoatMapUv:_t&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(y.sheenRoughnessMap.channel),specularMapUv:Kt&&g(y.specularMap.channel),specularColorMapUv:kt&&g(y.specularColorMap.channel),specularIntensityMapUv:ae&&g(y.specularIntensityMap.channel),transmissionMapUv:D&&g(y.transmissionMap.channel),thicknessMapUv:ft&&g(y.thicknessMap.channel),alphaMapUv:K&&g(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(z||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(tt||K),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Mt,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:At,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&se.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:Jt&&y.emissiveMap.isVideoTexture===!0&&se.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===di,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function p(y){let x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)x.push(L),x.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(b(x,y),M(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function b(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function M(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){let x=_[y.type],L;if(x){let N=Mi[x];L=O_.clone(N.uniforms)}else L=y.uniforms;return L}function A(y,x){let L;for(let N=0,F=h.length;N<F;N++){let P=h[N];if(P.cacheKey===x){L=P,++L.usedTimes;break}}return L===void 0&&(L=new Wy(r,x,y,s),h.push(L)),L}function E(y){if(--y.usedTimes===0){let x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function qy(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Zy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Nd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ud(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,u,d,_,g,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function a(f,u,d,_,g,m){let p=o(f,u,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(f,u,d,_,g,m){let p=o(f,u,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||Zy),n.length>1&&n.sort(u||Nd),i.length>1&&i.sort(u||Nd)}function h(){for(let f=t,u=r.length;f<u;f++){let d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function $y(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Ud,r.set(n,[o])):i>=s.length?(o=new Ud,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Jy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new me};break;case"SpotLight":e={position:new Z,direction:new Z,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=e,e}}}function Ky(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Qy=0;function jy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function tM(r){let t=new Jy,e=Ky(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let i=new Z,s=new Ce,o=new Ce;function a(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,b=0,M=0,v=0,A=0,E=0,T=0;c.sort(jy);for(let y=0,x=c.length;y<x;y++){let L=c[y],N=L.color,F=L.intensity,P=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*F,f+=N.g*F,u+=N.b*F;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],F);T++}else if(L.isDirectionalLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let X=L.shadow,k=e.get(L);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=L.shadow.matrix,b++}n.directional[d]=V,d++}else if(L.isSpotLight){let V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(N).multiplyScalar(F),V.distance=P,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[g]=V;let X=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,X.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[g]=X.matrix,L.castShadow){let k=e.get(L);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=Y,v++}g++}else if(L.isRectAreaLight){let V=t.get(L);V.color.copy(N).multiplyScalar(F),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let X=L.shadow,k=e.get(L);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=L.shadow.matrix,M++}n.point[_]=V,_++}else if(L.isHemisphereLight){let V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(F),V.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=T,n.version=Qy++)}function l(c,h){let f=0,u=0,d=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let M=c[p];if(M.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Od(r){let t=new tM(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function eM(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Od(r),t.set(i,[a])):s>=o.length?(a=new Od(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Oh=class extends Vs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fh=class extends Vs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rM(r,t,e){let n=new Qa,i=new ye,s=new ye,o=new Be,a=new Oh({depthPacking:l_}),l=new Fh,c={},h=e.maxTextureSize,f={[mi]:An,[An]:mi,[di]:di},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new Xr;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Xe(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kd;let p=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let y=r.getRenderTarget(),x=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),N=r.state;N.setBlending(mr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=p!==Bi&&this.type===Bi,P=p===Bi&&this.type!==Bi;for(let Y=0,V=E.length;Y<V;Y++){let X=E[Y],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let Q=k.getFrameExtents();if(i.multiply(Q),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,k.mapSize.y=s.y)),k.map===null||F===!0||P===!0){let st=this.type!==Bi?{minFilter:zn,magFilter:zn}:{};k.map!==null&&k.map.dispose(),k.map=new Yi(i.x,i.y,st),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();let I=k.getViewportCount();for(let st=0;st<I;st++){let At=k.getViewport(st);o.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),N.viewport(o),k.updateMatrices(X,st),n=k.getFrustum(),v(T,R,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Bi&&b(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,x,L)};function b(E,T){let R=t.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yi(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,R,u,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,R,d,g,null)}function M(E,T,R,y){let x=null,L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)x=L;else if(x=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=x.uuid,F=T.uuid,P=c[N];P===void 0&&(P={},c[N]=P);let Y=P[F];Y===void 0&&(Y=x.clone(),P[F]=Y,T.addEventListener("dispose",A)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,y===Bi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let N=r.properties.get(x);N.light=R}return x}function v(E,T,R,y,x){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Bi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let F=t.update(E),P=E.material;if(Array.isArray(P)){let Y=F.groups;for(let V=0,X=Y.length;V<X;V++){let k=Y[V],Q=P[k.materialIndex];if(Q&&Q.visible){let I=M(E,Q,y,x);E.onBeforeShadow(r,E,T,R,F,I,k),r.renderBufferDirect(R,null,F,I,E,k),E.onAfterShadow(r,E,T,R,F,I,k)}}}else if(P.visible){let Y=M(E,P,y,x);E.onBeforeShadow(r,E,T,R,F,Y,null),r.renderBufferDirect(R,null,F,Y,E,null),E.onAfterShadow(r,E,T,R,F,Y,null)}}let N=E.children;for(let F=0,P=N.length;F<P;F++)v(N[F],T,R,y,x)}function A(E){E.target.removeEventListener("dispose",A);for(let R in c){let y=c[R],x=E.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}var sM={[zc]:kc,[Vc]:Wc,[Hc]:Xc,[Os]:Gc,[kc]:zc,[Wc]:Vc,[Xc]:Hc,[Gc]:Os};function oM(r,t){function e(){let D=!1,ft=new Be,$=null,K=new Be(0,0,0,0);return{setMask:function(ut){$!==ut&&!D&&(r.colorMask(ut,ut,ut,ut),$=ut)},setLocked:function(ut){D=ut},setClear:function(ut,pt,Vt,ce,De){De===!0&&(ut*=ce,pt*=ce,Vt*=ce),ft.set(ut,pt,Vt,ce),K.equals(ft)===!1&&(r.clearColor(ut,pt,Vt,ce),K.copy(ft))},reset:function(){D=!1,$=null,K.set(-1,0,0,0)}}}function n(){let D=!1,ft=!1,$=null,K=null,ut=null;return{setReversed:function(pt){if(ft!==pt){let Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let ce=ut;ut=null,this.setClear(ce)}ft=pt},getReversed:function(){return ft},setTest:function(pt){pt?rt(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(pt){$!==pt&&!D&&(r.depthMask(pt),$=pt)},setFunc:function(pt){if(ft&&(pt=sM[pt]),K!==pt){switch(pt){case zc:r.depthFunc(r.NEVER);break;case kc:r.depthFunc(r.ALWAYS);break;case Vc:r.depthFunc(r.LESS);break;case Os:r.depthFunc(r.LEQUAL);break;case Hc:r.depthFunc(r.EQUAL);break;case Gc:r.depthFunc(r.GEQUAL);break;case Wc:r.depthFunc(r.GREATER);break;case Xc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=pt}},setLocked:function(pt){D=pt},setClear:function(pt){ut!==pt&&(ft&&(pt=1-pt),r.clearDepth(pt),ut=pt)},reset:function(){D=!1,$=null,K=null,ut=null,ft=!1}}}function i(){let D=!1,ft=null,$=null,K=null,ut=null,pt=null,Vt=null,ce=null,De=null;return{setTest:function(St){D||(St?rt(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(St){ft!==St&&!D&&(r.stencilMask(St),ft=St)},setFunc:function(St,It,Qt){($!==St||K!==It||ut!==Qt)&&(r.stencilFunc(St,It,Qt),$=St,K=It,ut=Qt)},setOp:function(St,It,Qt){(pt!==St||Vt!==It||ce!==Qt)&&(r.stencilOp(St,It,Qt),pt=St,Vt=It,ce=Qt)},setLocked:function(St){D=St},setClear:function(St){De!==St&&(r.clearStencil(St),De=St)},reset:function(){D=!1,ft=null,$=null,K=null,ut=null,pt=null,Vt=null,ce=null,De=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,d=[],_=null,g=!1,m=null,p=null,b=null,M=null,v=null,A=null,E=null,T=new me(0,0,0),R=0,y=!1,x=null,L=null,N=null,F=null,P=null,Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,X=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=X>=2);let Q=null,I={},st=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),Bt=new Be().fromArray(st),q=new Be().fromArray(At);function nt(D,ft,$,K){let ut=new Uint8Array(4),pt=r.createTexture();r.bindTexture(D,pt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<$;Vt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ut):r.texImage2D(ft+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ut);return pt}let gt={};gt[r.TEXTURE_2D]=nt(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(r.DEPTH_TEST),o.setFunc(Os),Dt(!1),z(Bf),rt(r.CULL_FACE),U(mr);function rt(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Mt(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ct(D,ft){return f[D]!==ft?(r.bindFramebuffer(D,ft),f[D]=ft,D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ft),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function zt(D,ft){let $=d,K=!1;if(D){$=u.get(ft),$===void 0&&($=[],u.set(ft,$));let ut=D.textures;if($.length!==ut.length||$[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Vt=ut.length;pt<Vt;pt++)$[pt]=r.COLOR_ATTACHMENT0+pt;$.length=ut.length,K=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,K=!0);K&&r.drawBuffers($)}function tt(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let it={[zr]:r.FUNC_ADD,[Ng]:r.FUNC_SUBTRACT,[Ug]:r.FUNC_REVERSE_SUBTRACT};it[Og]=r.MIN,it[Fg]=r.MAX;let bt={[Bg]:r.ZERO,[zg]:r.ONE,[kg]:r.SRC_COLOR,[Fc]:r.SRC_ALPHA,[Yg]:r.SRC_ALPHA_SATURATE,[Wg]:r.DST_COLOR,[Hg]:r.DST_ALPHA,[Vg]:r.ONE_MINUS_SRC_COLOR,[Bc]:r.ONE_MINUS_SRC_ALPHA,[Xg]:r.ONE_MINUS_DST_COLOR,[Gg]:r.ONE_MINUS_DST_ALPHA,[qg]:r.CONSTANT_COLOR,[Zg]:r.ONE_MINUS_CONSTANT_COLOR,[$g]:r.CONSTANT_ALPHA,[Jg]:r.ONE_MINUS_CONSTANT_ALPHA};function U(D,ft,$,K,ut,pt,Vt,ce,De,St){if(D===mr){g===!0&&(Mt(r.BLEND),g=!1);return}if(g===!1&&(rt(r.BLEND),g=!0),D!==Dg){if(D!==m||St!==y){if((p!==zr||v!==zr)&&(r.blendEquation(r.FUNC_ADD),p=zr,v=zr),St)switch(D){case Ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zf:r.blendFunc(r.ONE,r.ONE);break;case kf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case kf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,M=null,A=null,E=null,T.set(0,0,0),R=0,m=D,y=St}return}ut=ut||ft,pt=pt||$,Vt=Vt||K,(ft!==p||ut!==v)&&(r.blendEquationSeparate(it[ft],it[ut]),p=ft,v=ut),($!==b||K!==M||pt!==A||Vt!==E)&&(r.blendFuncSeparate(bt[$],bt[K],bt[pt],bt[Vt]),b=$,M=K,A=pt,E=Vt),(ce.equals(T)===!1||De!==R)&&(r.blendColor(ce.r,ce.g,ce.b,De),T.copy(ce),R=De),m=D,y=!1}function qt(D,ft){D.side===di?Mt(r.CULL_FACE):rt(r.CULL_FACE);let $=D.side===An;ft&&($=!$),Dt($),D.blending===Ls&&D.transparent===!1?U(mr):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Jt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(D){x!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),x=D)}function z(D){D!==Pg?(rt(r.CULL_FACE),D!==L&&(D===Bf?r.cullFace(r.BACK):D===Ig?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),L=D}function vt(D){D!==N&&(V&&r.lineWidth(D),N=D)}function Jt(D,ft,$){D?(rt(r.POLYGON_OFFSET_FILL),(F!==ft||P!==$)&&(r.polygonOffset(ft,$),F=ft,P=$)):Mt(r.POLYGON_OFFSET_FILL)}function Et(D){D?rt(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function C(D){D===void 0&&(D=r.TEXTURE0+Y-1),Q!==D&&(r.activeTexture(D),Q=D)}function S(D,ft,$){$===void 0&&(Q===null?$=r.TEXTURE0+Y-1:$=Q);let K=I[$];K===void 0&&(K={type:void 0,texture:void 0},I[$]=K),(K.type!==D||K.texture!==ft)&&(Q!==$&&(r.activeTexture($),Q=$),r.bindTexture(D,ft||gt[D]),K.type=D,K.texture=ft)}function G(){let D=I[Q];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function et(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(D){Bt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Bt.copy(D))}function wt(D){q.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Kt(D,ft){let $=c.get(ft);$===void 0&&($=new WeakMap,c.set(ft,$));let K=$.get(D);K===void 0&&(K=r.getUniformBlockIndex(ft,D.name),$.set(D,K))}function kt(D,ft){let K=c.get(ft).get(D);l.get(ft)!==K&&(r.uniformBlockBinding(ft,K,D.__bindingPointIndex),l.set(ft,K))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Q=null,I={},f={},u=new WeakMap,d=[],_=null,g=!1,m=null,p=null,b=null,M=null,v=null,A=null,E=null,T=new me(0,0,0),R=0,y=!1,x=null,L=null,N=null,F=null,P=null,Bt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:rt,disable:Mt,bindFramebuffer:Ct,drawBuffers:zt,useProgram:tt,setBlending:U,setMaterial:qt,setFlipSided:Dt,setCullFace:z,setLineWidth:vt,setPolygonOffset:Jt,setScissorTest:Et,activeTexture:C,bindTexture:S,unbindTexture:G,compressedTexImage2D:et,compressedTexImage3D:j,texImage2D:ct,texImage3D:Ft,updateUBOMapping:Kt,uniformBlockBinding:kt,texStorage2D:Zt,texStorage3D:ot,texSubImage2D:J,texSubImage3D:dt,compressedTexSubImage2D:ht,compressedTexSubImage3D:_t,scissor:Ot,viewport:wt,reset:ae}}function Fd(r,t,e,n){let i=aM(n);switch(e){case Yd:return r*t;case Zd:return r*t;case $d:return r*t*2;case nu:return r*t/i.components*i.byteLength;case iu:return r*t/i.components*i.byteLength;case Jd:return r*t*2/i.components*i.byteLength;case ru:return r*t*2/i.components*i.byteLength;case qd:return r*t*3/i.components*i.byteLength;case pi:return r*t*4/i.components*i.byteLength;case su:return r*t*4/i.components*i.byteLength;case Oa:case Fa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ba:case za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jc:case Qc:return Math.max(r,16)*Math.max(t,8)/4;case $c:case Kc:return Math.max(r,8)*Math.max(t,8)/2;case jc:case th:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case eh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ah:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case lh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ch:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case hh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case uh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case fh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case dh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ph:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case mh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ka:case gh:case _h:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kd:case vh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case xh:case yh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function aM(r){switch(r){case Xi:case Gd:return{byteLength:1,components:1};case Ro:case Wd:case Po:return{byteLength:2,components:1};case tu:case eu:return{byteLength:2,components:4};case Gr:case jh:case bi:return{byteLength:4,components:1};case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function lM(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return d?new OffscreenCanvas(C,S):Ga("canvas")}function g(C,S,G){let et=1,j=Et(C);if((j.width>G||j.height>G)&&(et=G/Math.max(j.width,j.height)),et<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let J=Math.floor(et*j.width),dt=Math.floor(et*j.height);f===void 0&&(f=_(J,dt));let ht=S?_(J,dt):f;return ht.width=J,ht.height=dt,ht.getContext("2d").drawImage(C,0,0,J,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+dt+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,S,G,et,j=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===r.RED&&(G===r.FLOAT&&(J=r.R32F),G===r.HALF_FLOAT&&(J=r.R16F),G===r.UNSIGNED_BYTE&&(J=r.R8)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.R8UI),G===r.UNSIGNED_SHORT&&(J=r.R16UI),G===r.UNSIGNED_INT&&(J=r.R32UI),G===r.BYTE&&(J=r.R8I),G===r.SHORT&&(J=r.R16I),G===r.INT&&(J=r.R32I)),S===r.RG&&(G===r.FLOAT&&(J=r.RG32F),G===r.HALF_FLOAT&&(J=r.RG16F),G===r.UNSIGNED_BYTE&&(J=r.RG8)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RG8UI),G===r.UNSIGNED_SHORT&&(J=r.RG16UI),G===r.UNSIGNED_INT&&(J=r.RG32UI),G===r.BYTE&&(J=r.RG8I),G===r.SHORT&&(J=r.RG16I),G===r.INT&&(J=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGB8UI),G===r.UNSIGNED_SHORT&&(J=r.RGB16UI),G===r.UNSIGNED_INT&&(J=r.RGB32UI),G===r.BYTE&&(J=r.RGB8I),G===r.SHORT&&(J=r.RGB16I),G===r.INT&&(J=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),G===r.UNSIGNED_INT&&(J=r.RGBA32UI),G===r.BYTE&&(J=r.RGBA8I),G===r.SHORT&&(J=r.RGBA16I),G===r.INT&&(J=r.RGBA32I)),S===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),S===r.RGBA){let dt=j?ll:se.getTransfer(et);G===r.FLOAT&&(J=r.RGBA32F),G===r.HALF_FLOAT&&(J=r.RGBA16F),G===r.UNSIGNED_BYTE&&(J=dt===_e?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(C,S){let G;return C?S===null||S===Gr||S===zs?G=r.DEPTH24_STENCIL8:S===bi?G=r.DEPTH32F_STENCIL8:S===Ro&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gr||S===zs?G=r.DEPTH_COMPONENT24:S===bi?G=r.DEPTH_COMPONENT32F:S===Ro&&(G=r.DEPTH_COMPONENT16),G}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==zn&&C.minFilter!==Si?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){let S=C.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&h.delete(S)}function T(C){let S=C.target;S.removeEventListener("dispose",T),x(S)}function R(C){let S=n.get(C);if(S.__webglInit===void 0)return;let G=C.source,et=u.get(G);if(et){let j=et[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(C),Object.keys(et).length===0&&u.delete(G)}n.remove(C)}function y(C){let S=n.get(C);r.deleteTexture(S.__webglTexture);let G=C.source,et=u.get(G);delete et[S.__cacheKey],o.memory.textures--}function x(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let j=0;j<S.__webglFramebuffer[et].length;j++)r.deleteFramebuffer(S.__webglFramebuffer[et][j]);else r.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)r.deleteFramebuffer(S.__webglFramebuffer[et]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=C.textures;for(let et=0,j=G.length;et<j;et++){let J=n.get(G[et]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[et])}n.remove(C)}let L=0;function N(){L=0}function F(){let C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function P(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Y(C,S){let G=n.get(C);if(C.isVideoTexture&&vt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){let et=C.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,C,S);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function V(C,S){let G=n.get(C);if(C.version>0&&G.__version!==C.version){q(G,C,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function X(C,S){let G=n.get(C);if(C.version>0&&G.__version!==C.version){q(G,C,S);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function k(C,S){let G=n.get(C);if(C.version>0&&G.__version!==C.version){nt(G,C,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}let Q={[Co]:r.REPEAT,[Hr]:r.CLAMP_TO_EDGE,[Zc]:r.MIRRORED_REPEAT},I={[zn]:r.NEAREST,[o_]:r.NEAREST_MIPMAP_NEAREST,[da]:r.NEAREST_MIPMAP_LINEAR,[Si]:r.LINEAR,[ac]:r.LINEAR_MIPMAP_NEAREST,[ki]:r.LINEAR_MIPMAP_LINEAR},st={[u_]:r.NEVER,[__]:r.ALWAYS,[f_]:r.LESS,[Qd]:r.LEQUAL,[d_]:r.EQUAL,[g_]:r.GEQUAL,[p_]:r.GREATER,[m_]:r.NOTEQUAL};function At(C,S){if(S.type===bi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Si||S.magFilter===ac||S.magFilter===da||S.magFilter===ki||S.minFilter===Si||S.minFilter===ac||S.minFilter===da||S.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Q[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Q[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Q[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,I[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,I[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zn||S.minFilter!==da&&S.minFilter!==ki||S.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Bt(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));let et=S.source,j=u.get(et);j===void 0&&(j={},u.set(et,j));let J=P(S);if(J!==C.__cacheKey){j[J]===void 0&&(j[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),j[J].usedTimes++;let dt=j[C.__cacheKey];dt!==void 0&&(j[C.__cacheKey].usedTimes--,dt.usedTimes===0&&y(S)),C.__cacheKey=J,C.__webglTexture=j[J].texture}return G}function q(C,S,G){let et=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=r.TEXTURE_3D);let j=Bt(C,S),J=S.source;e.bindTexture(et,C.__webglTexture,r.TEXTURE0+G);let dt=n.get(J);if(J.version!==dt.__version||j===!0){e.activeTexture(r.TEXTURE0+G);let ht=se.getPrimaries(se.workingColorSpace),_t=S.colorSpace===pr?null:se.getPrimaries(S.colorSpace),Zt=S.colorSpace===pr||ht===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let ot=g(S.image,!1,i.maxTextureSize);ot=Jt(S,ot);let ct=s.convert(S.format,S.colorSpace),Ft=s.convert(S.type),Ot=M(S.internalFormat,ct,Ft,S.colorSpace,S.isVideoTexture);At(et,S);let wt,Kt=S.mipmaps,kt=S.isVideoTexture!==!0,ae=dt.__version===void 0||j===!0,D=J.dataReady,ft=A(S,ot);if(S.isDepthTexture)Ot=v(S.format===ks,S.type),ae&&(kt?e.texStorage2D(r.TEXTURE_2D,1,Ot,ot.width,ot.height):e.texImage2D(r.TEXTURE_2D,0,Ot,ot.width,ot.height,0,ct,Ft,null));else if(S.isDataTexture)if(Kt.length>0){kt&&ae&&e.texStorage2D(r.TEXTURE_2D,ft,Ot,Kt[0].width,Kt[0].height);for(let $=0,K=Kt.length;$<K;$++)wt=Kt[$],kt?D&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,wt.width,wt.height,ct,Ft,wt.data):e.texImage2D(r.TEXTURE_2D,$,Ot,wt.width,wt.height,0,ct,Ft,wt.data);S.generateMipmaps=!1}else kt?(ae&&e.texStorage2D(r.TEXTURE_2D,ft,Ot,ot.width,ot.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot.width,ot.height,ct,Ft,ot.data)):e.texImage2D(r.TEXTURE_2D,0,Ot,ot.width,ot.height,0,ct,Ft,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Ot,Kt[0].width,Kt[0].height,ot.depth);for(let $=0,K=Kt.length;$<K;$++)if(wt=Kt[$],S.format!==pi)if(ct!==null)if(kt){if(D)if(S.layerUpdates.size>0){let ut=Fd(wt.width,wt.height,S.format,S.type);for(let pt of S.layerUpdates){let Vt=wt.data.subarray(pt*ut/wt.data.BYTES_PER_ELEMENT,(pt+1)*ut/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,pt,wt.width,wt.height,1,ct,Vt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,wt.width,wt.height,ot.depth,ct,wt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Ot,wt.width,wt.height,ot.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,wt.width,wt.height,ot.depth,ct,Ft,wt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Ot,wt.width,wt.height,ot.depth,0,ct,Ft,wt.data)}else{kt&&ae&&e.texStorage2D(r.TEXTURE_2D,ft,Ot,Kt[0].width,Kt[0].height);for(let $=0,K=Kt.length;$<K;$++)wt=Kt[$],S.format!==pi?ct!==null?kt?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,wt.width,wt.height,ct,wt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Ot,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?D&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,wt.width,wt.height,ct,Ft,wt.data):e.texImage2D(r.TEXTURE_2D,$,Ot,wt.width,wt.height,0,ct,Ft,wt.data)}else if(S.isDataArrayTexture)if(kt){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Ot,ot.width,ot.height,ot.depth),D)if(S.layerUpdates.size>0){let $=Fd(ot.width,ot.height,S.format,S.type);for(let K of S.layerUpdates){let ut=ot.data.subarray(K*$/ot.data.BYTES_PER_ELEMENT,(K+1)*$/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,ot.width,ot.height,1,ct,Ft,ut)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,ct,Ft,ot.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,ot.width,ot.height,ot.depth,0,ct,Ft,ot.data);else if(S.isData3DTexture)kt?(ae&&e.texStorage3D(r.TEXTURE_3D,ft,Ot,ot.width,ot.height,ot.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,ct,Ft,ot.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,ot.width,ot.height,ot.depth,0,ct,Ft,ot.data);else if(S.isFramebufferTexture){if(ae)if(kt)e.texStorage2D(r.TEXTURE_2D,ft,Ot,ot.width,ot.height);else{let $=ot.width,K=ot.height;for(let ut=0;ut<ft;ut++)e.texImage2D(r.TEXTURE_2D,ut,Ot,$,K,0,ct,Ft,null),$>>=1,K>>=1}}else if(Kt.length>0){if(kt&&ae){let $=Et(Kt[0]);e.texStorage2D(r.TEXTURE_2D,ft,Ot,$.width,$.height)}for(let $=0,K=Kt.length;$<K;$++)wt=Kt[$],kt?D&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,ct,Ft,wt):e.texImage2D(r.TEXTURE_2D,$,Ot,ct,Ft,wt);S.generateMipmaps=!1}else if(kt){if(ae){let $=Et(ot);e.texStorage2D(r.TEXTURE_2D,ft,Ot,$.width,$.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,Ft,ot)}else e.texImage2D(r.TEXTURE_2D,0,Ot,ct,Ft,ot);m(S)&&p(et),dt.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function nt(C,S,G){if(S.image.length!==6)return;let et=Bt(C,S),j=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);let J=n.get(j);if(j.version!==J.__version||et===!0){e.activeTexture(r.TEXTURE0+G);let dt=se.getPrimaries(se.workingColorSpace),ht=S.colorSpace===pr?null:se.getPrimaries(S.colorSpace),_t=S.colorSpace===pr||dt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Zt=S.isCompressedTexture||S.image[0].isCompressedTexture,ot=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let K=0;K<6;K++)!Zt&&!ot?ct[K]=g(S.image[K],!0,i.maxCubemapSize):ct[K]=ot?S.image[K].image:S.image[K],ct[K]=Jt(S,ct[K]);let Ft=ct[0],Ot=s.convert(S.format,S.colorSpace),wt=s.convert(S.type),Kt=M(S.internalFormat,Ot,wt,S.colorSpace),kt=S.isVideoTexture!==!0,ae=J.__version===void 0||et===!0,D=j.dataReady,ft=A(S,Ft);At(r.TEXTURE_CUBE_MAP,S);let $;if(Zt){kt&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Kt,Ft.width,Ft.height);for(let K=0;K<6;K++){$=ct[K].mipmaps;for(let ut=0;ut<$.length;ut++){let pt=$[ut];S.format!==pi?Ot!==null?kt?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,pt.width,pt.height,Ot,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Kt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,pt.width,pt.height,Ot,wt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Kt,pt.width,pt.height,0,Ot,wt,pt.data)}}}else{if($=S.mipmaps,kt&&ae){$.length>0&&ft++;let K=Et(ct[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Kt,K.width,K.height)}for(let K=0;K<6;K++)if(ot){kt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ct[K].width,ct[K].height,Ot,wt,ct[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,ct[K].width,ct[K].height,0,Ot,wt,ct[K].data);for(let ut=0;ut<$.length;ut++){let Vt=$[ut].image[K].image;kt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Vt.width,Vt.height,Ot,wt,Vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Kt,Vt.width,Vt.height,0,Ot,wt,Vt.data)}}else{kt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ot,wt,ct[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,Ot,wt,ct[K]);for(let ut=0;ut<$.length;ut++){let pt=$[ut];kt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Ot,wt,pt.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Kt,Ot,wt,pt.image[K])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),J.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function gt(C,S,G,et,j,J){let dt=s.convert(G.format,G.colorSpace),ht=s.convert(G.type),_t=M(G.internalFormat,dt,ht,G.colorSpace),Zt=n.get(S),ot=n.get(G);if(ot.__renderTarget=S,!Zt.__hasExternalTextures){let ct=Math.max(1,S.width>>J),Ft=Math.max(1,S.height>>J);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,J,_t,ct,Ft,S.depth,0,dt,ht,null):e.texImage2D(j,J,_t,ct,Ft,0,dt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),z(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,j,ot.__webglTexture,0,Dt(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,j,ot.__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(C,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){let et=S.depthTexture,j=et&&et.isDepthTexture?et.type:null,J=v(S.stencilBuffer,j),dt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=Dt(S);z(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,J,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,J,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,J,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,C)}else{let et=S.textures;for(let j=0;j<et.length;j++){let J=et[j],dt=s.convert(J.format,J.colorSpace),ht=s.convert(J.type),_t=M(J.internalFormat,dt,ht,J.colorSpace),Zt=Dt(S);G&&z(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,_t,S.width,S.height):z(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,_t,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,_t,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(S.depthTexture);et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);let j=et.__webglTexture,J=Dt(S);if(S.depthTexture.format===Ds)z(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(S.depthTexture.format===ks)z(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ct(C){let S=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let et=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",j)};et.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=et}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Mt(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=r.createRenderbuffer(),rt(S.__webglDepthbuffer[et],C,!1);else{let j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[et];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,J)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),rt(S.__webglDepthbuffer,C,!1);else{let et=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,j)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(C,S,G){let et=n.get(C);S!==void 0&&gt(et.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Ct(C)}function tt(C){let S=C.texture,G=n.get(C),et=n.get(S);C.addEventListener("dispose",T);let j=C.textures,J=C.isWebGLCubeRenderTarget===!0,dt=j.length>1;if(dt||(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=S.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ht]=[];for(let _t=0;_t<S.mipmaps.length;_t++)G.__webglFramebuffer[ht][_t]=r.createFramebuffer()}else G.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)G.__webglFramebuffer[ht]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(dt)for(let ht=0,_t=j.length;ht<_t;ht++){let Zt=n.get(j[ht]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&z(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ht=0;ht<j.length;ht++){let _t=j[ht];G.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ht]);let Zt=s.convert(_t.format,_t.colorSpace),ot=s.convert(_t.type),ct=M(_t.internalFormat,Zt,ot,_t.colorSpace,C.isXRRenderTarget===!0),Ft=Dt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,ct,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,G.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),At(r.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)gt(G.__webglFramebuffer[ht][_t],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else gt(G.__webglFramebuffer[ht],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let ht=0,_t=j.length;ht<_t;ht++){let Zt=j[ht],ot=n.get(Zt);e.bindTexture(r.TEXTURE_2D,ot.__webglTexture),At(r.TEXTURE_2D,Zt),gt(G.__webglFramebuffer,C,Zt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),m(Zt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,et.__webglTexture),At(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)gt(G.__webglFramebuffer[_t],C,S,r.COLOR_ATTACHMENT0,ht,_t);else gt(G.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,ht,0);m(S)&&p(ht),e.unbindTexture()}C.depthBuffer&&Ct(C)}function it(C){let S=C.textures;for(let G=0,et=S.length;G<et;G++){let j=S[G];if(m(j)){let J=b(C),dt=n.get(j).__webglTexture;e.bindTexture(J,dt),p(J),e.unbindTexture()}}}let bt=[],U=[];function qt(C){if(C.samples>0){if(z(C)===!1){let S=C.textures,G=C.width,et=C.height,j=r.COLOR_BUFFER_BIT,J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=n.get(C),ht=S.length>1;if(ht)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[_t]);let Zt=n.get(S[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Zt,0)}r.blitFramebuffer(0,0,G,et,0,0,G,et,j,r.NEAREST),l===!0&&(bt.length=0,U.length=0,bt.push(r.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(bt.push(J),U.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,dt.__webglColorRenderbuffer[_t]);let Zt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Dt(C){return Math.min(i.maxSamples,C.samples)}function z(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function vt(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Jt(C,S){let G=C.colorSpace,et=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Ws&&G!==pr&&(se.getTransfer(G)===_e?(et!==pi||j!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=zt,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=z}function cM(r,t){function e(n,i=pr){let s,o=se.getTransfer(i);if(n===Xi)return r.UNSIGNED_BYTE;if(n===tu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===eu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Xd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Gd)return r.BYTE;if(n===Wd)return r.SHORT;if(n===Ro)return r.UNSIGNED_SHORT;if(n===jh)return r.INT;if(n===Gr)return r.UNSIGNED_INT;if(n===bi)return r.FLOAT;if(n===Po)return r.HALF_FLOAT;if(n===Yd)return r.ALPHA;if(n===qd)return r.RGB;if(n===pi)return r.RGBA;if(n===Zd)return r.LUMINANCE;if(n===$d)return r.LUMINANCE_ALPHA;if(n===Ds)return r.DEPTH_COMPONENT;if(n===ks)return r.DEPTH_STENCIL;if(n===nu)return r.RED;if(n===iu)return r.RED_INTEGER;if(n===Jd)return r.RG;if(n===ru)return r.RG_INTEGER;if(n===su)return r.RGBA_INTEGER;if(n===Oa||n===Fa||n===Ba||n===za)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===Jc||n===Kc||n===Qc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$c)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===th||n===eh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jc||n===th)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nh||n===ih||n===rh||n===sh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh||n===fh||n===dh||n===ph||n===mh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ih)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ah)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ch)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ph)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===gh||n===_h)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ka)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kd||n===vh||n===xh||n===yh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Bh=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Hi=class extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},hM={type:"move"},Ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},uM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Cn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:uM,fragmentShader:fM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xe(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kh=class extends _r{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,_=null,g=new zh,m=e.getContextAttributes(),p=null,b=null,M=[],v=[],A=new ye,E=null,T=new mn;T.viewport=new Be;let R=new mn;R.viewport=new Be;let y=[T,R],x=new Bh,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=M[q];return nt===void 0&&(nt=new Ao,M[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=M[q];return nt===void 0&&(nt=new Ao,M[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=M[q];return nt===void 0&&(nt=new Ao,M[q]=nt),nt.getHandSpace()};function F(q){let nt=v.indexOf(q.inputSource);if(nt===-1)return;let gt=M[nt];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||o),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function P(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<M.length;q++){let nt=v[q];nt!==null&&(v[q]=null,M[q].disconnect(nt))}L=null,N=null,g.reset(),t.setRenderTarget(p),d=null,u=null,f=null,i=null,b=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",P),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Yi(d.framebufferWidth,d.framebufferHeight,{format:pi,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,gt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?ks:Ds,gt=m.stencil?zs:Gr);let Mt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(Mt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Yi(u.textureWidth,u.textureHeight,{format:pi,type:Xi,depthTexture:new tl(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Bt.setContext(i),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(q){for(let nt=0;nt<q.removed.length;nt++){let gt=q.removed[nt],rt=v.indexOf(gt);rt>=0&&(v[rt]=null,M[rt].disconnect(gt))}for(let nt=0;nt<q.added.length;nt++){let gt=q.added[nt],rt=v.indexOf(gt);if(rt===-1){for(let Ct=0;Ct<M.length;Ct++)if(Ct>=v.length){v.push(gt),rt=Ct;break}else if(v[Ct]===null){v[Ct]=gt,rt=Ct;break}if(rt===-1)break}let Mt=M[rt];Mt&&Mt.connect(gt)}}let V=new Z,X=new Z;function k(q,nt,gt){V.setFromMatrixPosition(nt.matrixWorld),X.setFromMatrixPosition(gt.matrixWorld);let rt=V.distanceTo(X),Mt=nt.projectionMatrix.elements,Ct=gt.projectionMatrix.elements,zt=Mt[14]/(Mt[10]-1),tt=Mt[14]/(Mt[10]+1),it=(Mt[9]+1)/Mt[5],bt=(Mt[9]-1)/Mt[5],U=(Mt[8]-1)/Mt[0],qt=(Ct[8]+1)/Ct[0],Dt=zt*U,z=zt*qt,vt=rt/(-U+qt),Jt=vt*-U;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Jt),q.translateZ(vt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Mt[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Et=zt+vt,C=tt+vt,S=Dt-Jt,G=z+(rt-Jt),et=it*tt/C*Et,j=bt*tt/C*Et;q.projectionMatrix.makePerspective(S,G,et,j,Et,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let nt=q.near,gt=q.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),x.near=R.near=T.near=nt,x.far=R.far=T.far=gt,(L!==x.near||N!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,N=x.far),T.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,x.layers.mask=T.layers.mask|R.layers.mask;let rt=q.parent,Mt=x.cameras;Q(x,rt);for(let Ct=0;Ct<Mt.length;Ct++)Q(Mt[Ct],rt);Mt.length===2?k(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),I(q,x,rt)};function I(q,nt,gt){gt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Sh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let st=null;function At(q,nt){if(h=nt.getViewerPose(c||o),_=nt,h!==null){let gt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let rt=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let Ct=0;Ct<gt.length;Ct++){let zt=gt[Ct],tt=null;if(d!==null)tt=d.getViewport(zt);else{let bt=f.getViewSubImage(u,zt);tt=bt.viewport,Ct===0&&(t.setRenderTargetTextures(b,bt.colorTexture,u.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(b))}let it=y[Ct];it===void 0&&(it=new mn,it.layers.enable(Ct),it.viewport=new Be,y[Ct]=it),it.matrix.fromArray(zt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(zt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(tt.x,tt.y,tt.width,tt.height),Ct===0&&(x.matrix.copy(it.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(it)}let Mt=i.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){let Ct=f.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,i.renderState)}}for(let gt=0;gt<M.length;gt++){let rt=v[gt],Mt=M[gt];rt!==null&&Mt!==void 0&&Mt.update(rt,nt,c||o)}st&&st(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}let Bt=new np;Bt.setAnimationLoop(At),this.setAnimationLoop=function(q){st=q},this.dispose=function(){}}},Fr=new Zi,dM=new Ce;function pM(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ep(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),M=b.envMap,v=b.envMapRotation;M&&(m.envMap.value=M,Fr.copy(v),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),m.envMapRotation.value.setFromMatrix4(dM.makeRotationFromEuler(Fr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mM(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let v=M.program;n.uniformBlockBinding(b,v)}function c(b,M){let v=i[b.id];v===void 0&&(_(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",m));let A=M.program;n.updateUBOMapping(b,A);let E=t.render.frame;s[b.id]!==E&&(u(b),s[b.id]=E)}function h(b){let M=f();b.__bindingPointIndex=M;let v=r.createBuffer(),A=b.__size,E=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let M=i[b.id],v=b.uniforms,A=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let E=0,T=v.length;E<T;E++){let R=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,x=R.length;y<x;y++){let L=R[y];if(d(L,E,y,A)===!0){let N=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],P=0;for(let Y=0;Y<F.length;Y++){let V=F[Y],X=g(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,N+P,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(b,M,v,A){let E=b.value,T=M+"_"+v;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{let R=A[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return A[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(b){let M=b.uniforms,v=0,A=16;for(let T=0,R=M.length;T<R;T++){let y=Array.isArray(M[T])?M[T]:[M[T]];for(let x=0,L=y.length;x<L;x++){let N=y[x],F=Array.isArray(N.value)?N.value:[N.value];for(let P=0,Y=F.length;P<Y;P++){let V=F[P],X=g(V),k=v%A,Q=k%X.boundary,I=k+Q;v+=Q,I!==0&&A-I<X.storage&&(v+=A-I),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=X.storage}}}let E=v%A;return E>0&&(v+=A-E),b.__size=v,b.__cache={},this}function g(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(let b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var el=class{constructor(t={}){let{canvas:e=x_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=gr,this.toneMappingExposure=1;let v=this,A=!1,E=0,T=0,R=null,y=-1,x=null,L=new Be,N=new Be,F=null,P=new me(0),Y=0,V=e.width,X=e.height,k=1,Q=null,I=null,st=new Be(0,0,V,X),At=new Be(0,0,V,X),Bt=!1,q=new Qa,nt=!1,gt=!1,rt=new Ce,Mt=new Ce,Ct=new Z,zt=new Be,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function bt(){return R===null?k:1}let U=n;function qt(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qh}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){let O="webgl2";if(U=qt(O,w),U===null)throw qt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Dt,z,vt,Jt,Et,C,S,G,et,j,J,dt,ht,_t,Zt,ot,ct,Ft,Ot,wt,Kt,kt,ae,D;function ft(){Dt=new Ix(U),Dt.init(),kt=new cM(U,Dt),z=new Tx(U,Dt,t,kt),vt=new oM(U,Dt),z.reverseDepthBuffer&&u&&vt.buffers.depth.setReversed(!0),Jt=new Nx(U),Et=new qy,C=new lM(U,Dt,vt,Et,z,kt,Jt),S=new Ax(v),G=new Px(v),et=new V_(U),ae=new bx(U,et),j=new Lx(U,et,Jt,ae),J=new Ox(U,j,et,Jt),Ot=new Ux(U,z,C),ot=new Ex(Et),dt=new Yy(v,S,G,Dt,z,ae,ot),ht=new pM(v,Et),_t=new $y,Zt=new eM(Dt),Ft=new Sx(v,S,G,vt,J,d,l),ct=new rM(v,J,z),D=new mM(U,Jt,z,vt),wt=new wx(U,Dt,Jt),Kt=new Dx(U,Dt,Jt),Jt.programs=dt.programs,v.capabilities=z,v.extensions=Dt,v.properties=Et,v.renderLists=_t,v.shadowMap=ct,v.state=vt,v.info=Jt}ft();let $=new kh(v,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=Dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(V,X,!1))},this.getSize=function(w){return w.set(V,X)},this.setSize=function(w,O,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,X=O,e.width=Math.floor(w*k),e.height=Math.floor(O*k),H===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(V*k,X*k).floor()},this.setDrawingBufferSize=function(w,O,H){V=w,X=O,k=H,e.width=Math.floor(w*H),e.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(st)},this.setViewport=function(w,O,H,W){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,O,H,W),vt.viewport(L.copy(st).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(At)},this.setScissor=function(w,O,H,W){w.isVector4?At.set(w.x,w.y,w.z,w.w):At.set(w,O,H,W),vt.scissor(N.copy(At).multiplyScalar(k).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(w){vt.setScissorTest(Bt=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(w=!0,O=!0,H=!0){let W=0;if(w){let B=!1;if(R!==null){let at=R.texture.format;B=at===su||at===ru||at===iu}if(B){let at=R.texture.type,lt=at===Xi||at===Gr||at===Ro||at===zs||at===tu||at===eu,mt=Ft.getClearColor(),Tt=Ft.getClearAlpha(),Ht=mt.r,Yt=mt.g,Pt=mt.b;lt?(_[0]=Ht,_[1]=Yt,_[2]=Pt,_[3]=Tt,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=Ht,g[1]=Yt,g[2]=Pt,g[3]=Tt,U.clearBufferiv(U.COLOR,0,g))}else W|=U.COLOR_BUFFER_BIT}O&&(W|=U.DEPTH_BUFFER_BIT),H&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),_t.dispose(),Zt.dispose(),Et.dispose(),S.dispose(),G.dispose(),J.dispose(),ae.dispose(),D.dispose(),dt.dispose(),$.dispose(),$.removeEventListener("sessionstart",xt),$.removeEventListener("sessionend",Wt),Lt.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Jt.autoReset,O=ct.enabled,H=ct.autoUpdate,W=ct.needsUpdate,B=ct.type;ft(),Jt.autoReset=w,ct.enabled=O,ct.autoUpdate=H,ct.needsUpdate=W,ct.type=B}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vt(w){let O=w.target;O.removeEventListener("dispose",Vt),ce(O)}function ce(w){De(w),Et.remove(w)}function De(w){let O=Et.get(w).programs;O!==void 0&&(O.forEach(function(H){dt.releaseProgram(H)}),w.isShaderMaterial&&dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,W,B,at){O===null&&(O=tt);let lt=B.isMesh&&B.matrixWorld.determinant()<0,mt=Un(w,O,H,W,B);vt.setMaterial(W,lt);let Tt=H.index,Ht=1;if(W.wireframe===!0){if(Tt=j.getWireframeAttribute(H),Tt===void 0)return;Ht=2}let Yt=H.drawRange,Pt=H.attributes.position,$t=Yt.start*Ht,he=(Yt.start+Yt.count)*Ht;at!==null&&($t=Math.max($t,at.start*Ht),he=Math.min(he,(at.start+at.count)*Ht)),Tt!==null?($t=Math.max($t,0),he=Math.min(he,Tt.count)):Pt!=null&&($t=Math.max($t,0),he=Math.min(he,Pt.count));let fe=he-$t;if(fe<0||fe===1/0)return;ae.setup(B,W,mt,H,Tt);let Pe,de=wt;if(Tt!==null&&(Pe=et.get(Tt),de=Kt,de.setIndex(Pe)),B.isMesh)W.wireframe===!0?(vt.setLineWidth(W.wireframeLinewidth*bt()),de.setMode(U.LINES)):de.setMode(U.TRIANGLES);else if(B.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),vt.setLineWidth(Ut*bt()),B.isLineSegments?de.setMode(U.LINES):B.isLineLoop?de.setMode(U.LINE_LOOP):de.setMode(U.LINE_STRIP)}else B.isPoints?de.setMode(U.POINTS):B.isSprite&&de.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)de.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))de.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ut=B._multiDrawStarts,Li=B._multiDrawCounts,pe=B._multiDrawCount,ci=Tt?et.get(Tt).bytesPerElement:1,ms=Et.get(W).currentProgram.getUniforms();for(let On=0;On<pe;On++)ms.setValue(U,"_gl_DrawID",On),de.render(Ut[On]/ci,Li[On])}else if(B.isInstancedMesh)de.renderInstances($t,fe,B.count);else if(H.isInstancedBufferGeometry){let Ut=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Li=Math.min(H.instanceCount,Ut);de.renderInstances($t,fe,Li)}else de.render($t,fe)};function St(w,O,H){w.transparent===!0&&w.side===di&&w.forceSinglePass===!1?(w.side=An,w.needsUpdate=!0,ve(w,O,H),w.side=mi,w.needsUpdate=!0,ve(w,O,H),w.side=di):ve(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),p=Zt.get(H),p.init(O),M.push(p),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==H&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let W=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let at=B.material;if(at)if(Array.isArray(at))for(let lt=0;lt<at.length;lt++){let mt=at[lt];St(mt,H,B),W.add(mt)}else St(at,H,B),W.add(at)}),M.pop(),p=null,W},this.compileAsync=function(w,O,H=null){let W=this.compile(w,O,H);return new Promise(B=>{function at(){if(W.forEach(function(lt){Et.get(lt).currentProgram.isReady()&&W.delete(lt)}),W.size===0){B(w);return}setTimeout(at,10)}Dt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let It=null;function Qt(w){It&&It(w)}function xt(){Lt.stop()}function Wt(){Lt.start()}let Lt=new np;Lt.setAnimationLoop(Qt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(w){It=w,$.setAnimationLoop(w),w===null?Lt.stop():Lt.start()},$.addEventListener("sessionstart",xt),$.addEventListener("sessionend",Wt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,R),p=Zt.get(w,M.length),p.init(O),M.push(p),Mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Mt),gt=this.localClippingEnabled,nt=ot.init(this.clippingPlanes,gt),m=_t.get(w,b.length),m.init(),b.push(m),$.enabled===!0&&$.isPresenting===!0){let at=v.xr.getDepthSensingMesh();at!==null&&Gt(at,O,-1/0,v.sortObjects)}Gt(w,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Q,I),it=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,it&&Ft.addToRenderList(m,w),this.info.render.frame++,nt===!0&&ot.beginShadows();let H=p.state.shadowsArray;ct.render(H,w,O),nt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){let at=O.cameras;if(B.length>0)for(let lt=0,mt=at.length;lt<mt;lt++){let Tt=at[lt];ie(W,B,w,Tt)}it&&Ft.render(w);for(let lt=0,mt=at.length;lt<mt;lt++){let Tt=at[lt];Fe(m,w,Tt,Tt.viewport)}}else B.length>0&&ie(W,B,w,O),it&&Ft.render(w),Fe(m,w,O);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,O),ae.resetDefaultState(),y=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],nt===!0&&ot.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Gt(w,O,H,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){W&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Mt);let lt=J.update(w),mt=w.material;mt.visible&&m.push(w,lt,mt,H,zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let lt=J.update(w),mt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),zt.copy(lt.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(Mt)),Array.isArray(mt)){let Tt=lt.groups;for(let Ht=0,Yt=Tt.length;Ht<Yt;Ht++){let Pt=Tt[Ht],$t=mt[Pt.materialIndex];$t&&$t.visible&&m.push(w,lt,$t,H,zt.z,Pt)}}else mt.visible&&m.push(w,lt,mt,H,zt.z,null)}}let at=w.children;for(let lt=0,mt=at.length;lt<mt;lt++)Gt(at[lt],O,H,W)}function Fe(w,O,H,W){let B=w.opaque,at=w.transmissive,lt=w.transparent;p.setupLightsView(H),nt===!0&&ot.setGlobalState(v.clippingPlanes,H),W&&vt.viewport(L.copy(W)),B.length>0&&be(B,O,H),at.length>0&&be(at,O,H),lt.length>0&&be(lt,O,H),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ie(w,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Yi(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?Po:Xi,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let at=p.state.transmissionRenderTarget[W.id],lt=W.viewport||L;at.setSize(lt.z,lt.w);let mt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(P),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),it&&Ft.render(H);let Tt=v.toneMapping;v.toneMapping=gr;let Ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),nt===!0&&ot.setGlobalState(v.clippingPlanes,W),be(w,H,W),C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Pt=0,$t=O.length;Pt<$t;Pt++){let he=O[Pt],fe=he.object,Pe=he.geometry,de=he.material,Ut=he.group;if(de.side===di&&fe.layers.test(W.layers)){let Li=de.side;de.side=An,de.needsUpdate=!0,We(fe,H,W,Pe,de,Ut),de.side=Li,de.needsUpdate=!0,Yt=!0}}Yt===!0&&(C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at))}v.setRenderTarget(mt),v.setClearColor(P,Y),Ht!==void 0&&(W.viewport=Ht),v.toneMapping=Tt}function be(w,O,H){let W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,at=w.length;B<at;B++){let lt=w[B],mt=lt.object,Tt=lt.geometry,Ht=W===null?lt.material:W,Yt=lt.group;mt.layers.test(H.layers)&&We(mt,O,H,Tt,Ht,Yt)}}function We(w,O,H,W,B,at){w.onBeforeRender(v,O,H,W,B,at),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,O,H,W,w,at),B.transparent===!0&&B.side===di&&B.forceSinglePass===!1?(B.side=An,B.needsUpdate=!0,v.renderBufferDirect(H,O,W,B,w,at),B.side=mi,B.needsUpdate=!0,v.renderBufferDirect(H,O,W,B,w,at),B.side=di):v.renderBufferDirect(H,O,W,B,w,at),w.onAfterRender(v,O,H,W,B,at)}function ve(w,O,H){O.isScene!==!0&&(O=tt);let W=Et.get(w),B=p.state.lights,at=p.state.shadowsArray,lt=B.state.version,mt=dt.getParameters(w,B.state,at,O,H),Tt=dt.getProgramCacheKey(mt),Ht=W.programs;W.environment=w.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(w.isMeshStandardMaterial?G:S).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",Vt),Ht=new Map,W.programs=Ht);let Yt=Ht.get(Tt);if(Yt!==void 0){if(W.currentProgram===Yt&&W.lightsStateVersion===lt)return ue(w,mt),Yt}else mt.uniforms=dt.getUniforms(w),w.onBeforeCompile(mt,v),Yt=dt.acquireProgram(mt,Tt),Ht.set(Tt,Yt),W.uniforms=mt.uniforms;let Pt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=ot.uniform),ue(w,mt),W.needsLights=dn(w),W.lightsStateVersion=lt,W.needsLights&&(Pt.ambientLightColor.value=B.state.ambient,Pt.lightProbe.value=B.state.probe,Pt.directionalLights.value=B.state.directional,Pt.directionalLightShadows.value=B.state.directionalShadow,Pt.spotLights.value=B.state.spot,Pt.spotLightShadows.value=B.state.spotShadow,Pt.rectAreaLights.value=B.state.rectArea,Pt.ltc_1.value=B.state.rectAreaLTC1,Pt.ltc_2.value=B.state.rectAreaLTC2,Pt.pointLights.value=B.state.point,Pt.pointLightShadows.value=B.state.pointShadow,Pt.hemisphereLights.value=B.state.hemi,Pt.directionalShadowMap.value=B.state.directionalShadowMap,Pt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pt.spotShadowMap.value=B.state.spotShadowMap,Pt.spotLightMatrix.value=B.state.spotLightMatrix,Pt.spotLightMap.value=B.state.spotLightMap,Pt.pointShadowMap.value=B.state.pointShadowMap,Pt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Yt,W.uniformsList=null,Yt}function xe(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Us.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function ue(w,O){let H=Et.get(w);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Un(w,O,H,W,B){O.isScene!==!0&&(O=tt),C.resetTextureUnits();let at=O.fog,lt=W.isMeshStandardMaterial?O.environment:null,mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ws,Tt=(W.isMeshStandardMaterial?G:S).get(W.envMap||lt),Ht=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Yt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pt=!!H.morphAttributes.position,$t=!!H.morphAttributes.normal,he=!!H.morphAttributes.color,fe=gr;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=v.toneMapping);let Pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=Pe!==void 0?Pe.length:0,Ut=Et.get(W),Li=p.state.lights;if(nt===!0&&(gt===!0||w!==x)){let $n=w===x&&W.id===y;ot.setState(W,w,$n)}let pe=!1;W.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Li.state.version||Ut.outputColorSpace!==mt||B.isBatchedMesh&&Ut.batching===!1||!B.isBatchedMesh&&Ut.batching===!0||B.isBatchedMesh&&Ut.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ut.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ut.instancing===!1||!B.isInstancedMesh&&Ut.instancing===!0||B.isSkinnedMesh&&Ut.skinning===!1||!B.isSkinnedMesh&&Ut.skinning===!0||B.isInstancedMesh&&Ut.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ut.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ut.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ut.instancingMorph===!1&&B.morphTexture!==null||Ut.envMap!==Tt||W.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ot.numPlanes||Ut.numIntersection!==ot.numIntersection)||Ut.vertexAlphas!==Ht||Ut.vertexTangents!==Yt||Ut.morphTargets!==Pt||Ut.morphNormals!==$t||Ut.morphColors!==he||Ut.toneMapping!==fe||Ut.morphTargetsCount!==de)&&(pe=!0):(pe=!0,Ut.__version=W.version);let ci=Ut.currentProgram;pe===!0&&(ci=ve(W,O,B));let ms=!1,On=!1,go=!1,Ee=ci.getUniforms(),yi=Ut.uniforms;if(vt.useProgram(ci.program)&&(ms=!0,On=!0,go=!0),W.id!==y&&(y=W.id,On=!0),ms||x!==w){vt.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),M_(rt),S_(rt),Ee.setValue(U,"projectionMatrix",rt)):Ee.setValue(U,"projectionMatrix",w.projectionMatrix),Ee.setValue(U,"viewMatrix",w.matrixWorldInverse);let or=Ee.map.cameraPosition;or!==void 0&&or.setValue(U,Ct.setFromMatrixPosition(w.matrixWorld)),z.logarithmicDepthBuffer&&Ee.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ee.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,On=!0,go=!0)}if(B.isSkinnedMesh){Ee.setOptional(U,B,"bindMatrix"),Ee.setOptional(U,B,"bindMatrixInverse");let $n=B.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),Ee.setValue(U,"boneTexture",$n.boneTexture,C))}B.isBatchedMesh&&(Ee.setOptional(U,B,"batchingTexture"),Ee.setValue(U,"batchingTexture",B._matricesTexture,C),Ee.setOptional(U,B,"batchingIdTexture"),Ee.setValue(U,"batchingIdTexture",B._indirectTexture,C),Ee.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&Ee.setValue(U,"batchingColorTexture",B._colorsTexture,C));let _o=H.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0)&&Ot.update(B,H,ci),(On||Ut.receiveShadow!==B.receiveShadow)&&(Ut.receiveShadow=B.receiveShadow,Ee.setValue(U,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yi.envMap.value=Tt,yi.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(yi.envMapIntensity.value=O.environmentIntensity),On&&(Ee.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&Te(yi,go),at&&W.fog===!0&&ht.refreshFogUniforms(yi,at),ht.refreshMaterialUniforms(yi,W,k,X,p.state.transmissionRenderTarget[w.id]),Us.upload(U,xe(Ut),yi,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Us.upload(U,xe(Ut),yi,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ee.setValue(U,"center",B.center),Ee.setValue(U,"modelViewMatrix",B.modelViewMatrix),Ee.setValue(U,"normalMatrix",B.normalMatrix),Ee.setValue(U,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let $n=W.uniformsGroups;for(let or=0,ar=$n.length;or<ar;or++){let Ff=$n[or];D.update(Ff,ci),D.bind(Ff,ci)}}return ci}function Te(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function dn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,H){Et.get(w.texture).__webglTexture=O,Et.get(w.depthTexture).__webglTexture=H;let W=Et.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let H=Et.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,H=0){R=w,E=O,T=H;let W=!0,B=null,at=!1,lt=!1;if(w){let Tt=Et.get(w);if(Tt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(Tt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Tt.__hasExternalTextures)C.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Pt=w.depthTexture;if(Tt.__boundDepthTexture!==Pt){if(Pt!==null&&Et.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(lt=!0);let Yt=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[O])?B=Yt[O][H]:B=Yt[O],at=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?B=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?B=Yt[H]:B=Yt,L.copy(w.viewport),N.copy(w.scissor),F=w.scissorTest}else L.copy(st).multiplyScalar(k).floor(),N.copy(At).multiplyScalar(k).floor(),F=Bt;if(vt.bindFramebuffer(U.FRAMEBUFFER,B)&&W&&vt.drawBuffers(w,B),vt.viewport(L),vt.scissor(N),vt.setScissorTest(F),at){let Tt=Et.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Tt.__webglTexture,H)}else if(lt){let Tt=Et.get(w.texture),Ht=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,H||0,Ht)}y=-1},this.readRenderTargetPixels=function(w,O,H,W,B,at,lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){vt.bindFramebuffer(U.FRAMEBUFFER,mt);try{let Tt=w.texture,Ht=Tt.format,Yt=Tt.type;if(!z.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&H>=0&&H<=w.height-B&&U.readPixels(O,H,W,B,kt.convert(Ht),kt.convert(Yt),at)}finally{let Tt=R!==null?Et.get(R).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,O,H,W,B,at,lt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){let Tt=w.texture,Ht=Tt.format,Yt=Tt.type;if(!z.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-W&&H>=0&&H<=w.height-B){vt.bindFramebuffer(U.FRAMEBUFFER,mt);let Pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Pt),U.bufferData(U.PIXEL_PACK_BUFFER,at.byteLength,U.STREAM_READ),U.readPixels(O,H,W,B,kt.convert(Ht),kt.convert(Yt),0);let $t=R!==null?Et.get(R).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,$t);let he=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await y_(U,he,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,at),U.deleteBuffer(Pt),U.deleteSync(he),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,H=0){w.isTexture!==!0&&(To("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-H),B=Math.floor(w.image.width*W),at=Math.floor(w.image.height*W),lt=O!==null?O.x:0,mt=O!==null?O.y:0;C.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,lt,mt,B,at),vt.unbindTexture()},this.copyTextureToTexture=function(w,O,H=null,W=null,B=0){w.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,H=null);let at,lt,mt,Tt,Ht,Yt,Pt,$t,he,fe=w.isCompressedTexture?w.mipmaps[B]:w.image;H!==null?(at=H.max.x-H.min.x,lt=H.max.y-H.min.y,mt=H.isBox3?H.max.z-H.min.z:1,Tt=H.min.x,Ht=H.min.y,Yt=H.isBox3?H.min.z:0):(at=fe.width,lt=fe.height,mt=fe.depth||1,Tt=0,Ht=0,Yt=0),W!==null?(Pt=W.x,$t=W.y,he=W.z):(Pt=0,$t=0,he=0);let Pe=kt.convert(O.format),de=kt.convert(O.type),Ut;O.isData3DTexture?(C.setTexture3D(O,0),Ut=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Ut=U.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Ut=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Li=U.getParameter(U.UNPACK_ROW_LENGTH),pe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ci=U.getParameter(U.UNPACK_SKIP_PIXELS),ms=U.getParameter(U.UNPACK_SKIP_ROWS),On=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Yt);let go=w.isDataArrayTexture||w.isData3DTexture,Ee=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let yi=Et.get(w),_o=Et.get(O),$n=Et.get(yi.__renderTarget),or=Et.get(_o.__renderTarget);vt.bindFramebuffer(U.READ_FRAMEBUFFER,$n.__webglFramebuffer),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let ar=0;ar<mt;ar++)go&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,B,Yt+ar),w.isDepthTexture?(Ee&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(O).__webglTexture,B,he+ar),U.blitFramebuffer(Tt,Ht,at,lt,Pt,$t,at,lt,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ee?U.copyTexSubImage3D(Ut,B,Pt,$t,he+ar,Tt,Ht,at,lt):U.copyTexSubImage2D(Ut,B,Pt,$t,he+ar,Tt,Ht,at,lt);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ee?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ut,B,Pt,$t,he,at,lt,mt,Pe,de,fe.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ut,B,Pt,$t,he,at,lt,mt,Pe,fe.data):U.texSubImage3D(Ut,B,Pt,$t,he,at,lt,mt,Pe,de,fe):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,Pt,$t,at,lt,Pe,de,fe.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,Pt,$t,fe.width,fe.height,Pe,fe.data):U.texSubImage2D(U.TEXTURE_2D,B,Pt,$t,at,lt,Pe,de,fe);U.pixelStorei(U.UNPACK_ROW_LENGTH,Li),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ci),U.pixelStorei(U.UNPACK_SKIP_ROWS,ms),U.pixelStorei(U.UNPACK_SKIP_IMAGES,On),B===0&&O.generateMipmaps&&U.generateMipmap(Ut),vt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,H=null,W=null,B=0){return w.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0),To('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,H,W,B)},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),vt.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,vt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var nl=class extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Vh=class extends Cn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=zn,h=zn,f,u){super(null,o,a,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var il=class extends kn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ps=new Ce,Bd=new Ce,Na=[],zd=new qi,gM=new Ce,bo=new Xe,wo=new Wr,rl=class extends Xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new il(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ps),zd.copy(t.boundingBox).applyMatrix4(Ps),this.boundingBox.union(zd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ps),wo.copy(t.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(wo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(n),t.ray.intersectsSphere(wo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ps),Bd.multiplyMatrices(n,Ps),bo.matrixWorld=Bd,bo.raycast(t,Na);for(let o=0,a=Na.length;o<a;o++){let l=Na[o];l.instanceId=s,l.object=this,e.push(l)}Na.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vh(new Float32Array(i*this.count),i,this.count,nu,bi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var sl=class extends Cn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};function Ua(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function _M(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Gs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hh=class extends Gs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hf,endingEnd:Hf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gf:s=t,a=2*e-n;break;case Wf:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gf:o=t,l=2*n-e;break;case Wf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-u*m+2*u*g-u*_,b=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*_+1,M=(-1-d)*m+(1.5+d)*g+.5*_,v=d*m-d*g;for(let A=0;A!==a;++A)s[A]=p*o[h+A]+b*o[c+A]+M*o[l+A]+v*o[f+A];return s}},Gh=class extends Gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},Wh=class extends Gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},gi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ua(e,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ua(t.times,Array),values:Ua(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Va:e=this.InterpolantFactoryMethodDiscrete;break;case Mh:e=this.InterpolantFactoryMethodLinear;break;case lc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return Mh;case this.InterpolantFactoryMethodSmooth:return lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&_M(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let _=0;_!==n;++_){let g=e[f+_];if(g!==e[u+_]||g!==e[d+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Mh;var Yr=class extends gi{constructor(t,e,n){super(t,e,n)}};Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Va;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xh=class extends gi{};Xh.prototype.ValueTypeName="color";var Yh=class extends gi{};Yh.prototype.ValueTypeName="number";var qh=class extends Gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)vr.slerpFlat(s,0,o,c-a,o,c,l);return s}},ol=class extends gi{InterpolantFactoryMethodLinear(t){return new qh(this.times,this.values,this.getValueSize(),t)}};ol.prototype.ValueTypeName="quaternion";ol.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends gi{constructor(t,e,n){super(t,e,n)}};qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=Va;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zh=class extends gi{};Zh.prototype.ValueTypeName="vector";var $h=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}},vM=new $h,Jh=class{constructor(t){this.manager=t!==void 0?t:vM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Jh.DEFAULT_MATERIAL_NAME="__DEFAULT";var au="\\[\\]\\.:\\/",xM=new RegExp("["+au+"]","g"),lu="[^"+au+"]",yM="[^"+au.replace("\\.","")+"]",MM=/((?:WC+[\/:])*)/.source.replace("WC",lu),SM=/(WCOD+)?/.source.replace("WCOD",yM),bM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lu),wM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lu),TM=new RegExp("^"+MM+SM+bM+wM+"$"),EM=["material","materials","bones","map"],Kh=class{constructor(t,e,n){let i=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xM,"")}static parseTrackName(t){let e=TM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);EM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Kh;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);se.enabled=!1;var wi=2.5,Ti=2.15,AM=`
varying vec3 vN; varying vec3 vW; varying vec3 vL; varying vec3 vTx; varying vec3 vTy; varying vec3 vLn;
void main() {
  mat4 m = modelMatrix;
  #ifdef USE_INSTANCING
    m = m * instanceMatrix;
  #endif
  vec4 w = m * vec4(position, 1.0);
  vW = w.xyz;
  vL = position;
  vLn = normal;
  vN = normalize(mat3(m) * normal);
  vTx = normalize(mat3(m) * vec3(1.0, 0.0, 0.0));
  vTy = normalize(mat3(m) * vec3(0.0, 1.0, 0.0));
  gl_Position = projectionMatrix * viewMatrix * w;
}`,CM=`
uniform vec3 uTint; uniform vec3 uSun; uniform float uAlpha; uniform float uFade; uniform float uSpec;
uniform float uEmboss; uniform float uEdge; uniform float uDark; uniform float uBody; uniform float uPitch; uniform float uShade;
varying vec3 vN; varying vec3 vW; varying vec3 vL; varying vec3 vTx; varying vec3 vTy; varying vec3 vLn;

vec3 sky(vec3 r) {
  float up = r.y * 0.5 + 0.5;
  vec3 c = mix(vec3(0.42, 0.47, 0.54), vec3(1.0), smoothstep(0.3, 1.0, up));
  float soft = smoothstep(0.86, 0.985, dot(r, normalize(vec3(0.45, 0.62, 0.64))));
  float bar = smoothstep(0.16, 0.0, abs(r.x + 0.32)) * smoothstep(0.05, 0.3, r.y) * smoothstep(0.95, 0.65, r.y);
  return c * 0.55 + vec3(soft * 2.4 + bar * 1.1);
}

void main() {
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  float pebble = 0.0;
  if (uEmboss > 0.0) {
    // A pebbled surface, like the diamond and embossed sheet in the hand.
    vec2 p = vL.xy * 118.0;
    vec2 g = vec2(sin(p.x + sin(p.y * 0.73) * 1.3), sin(p.y * 1.09 + sin(p.x * 0.61) * 1.5));
    pebble = g.x * g.y;
    N = normalize(N + (vTx * g.x + vTy * g.y) * uEmboss);
  }
  if (uPitch > 0.0) {
    // Each flute bends the reflection a little, the way extruded sheet does.
    N = normalize(N + vTx * sin(vL.x * 6.2832 / uPitch) * 0.16);
  }
  // Long, slow ripples: real sheet is never optically flat.
  N = normalize(N + vTy * sin(vL.y * 2.3 + vL.x * 1.2) * 0.03 + vTx * sin(vL.y * 1.4 - vL.x * 2.1) * 0.035);
  vec3 V = normalize(cameraPosition - vW);
  float nv = max(dot(N, V), 0.0);
  float fres = pow(1.0 - nv, 3.0);
  vec3 env = sky(reflect(-V, N));
  float refl = mix(0.07, 0.85, fres) * uSpec;
  // A broad window of daylight in front of the sheet: it rides the ripples and flutes as the sheet turns.
  vec3 fill = normalize(vec3(0.42, 0.5, 0.76));
  float glare = pow(max(dot(N, normalize(fill + V)), 0.0), 90.0) * 0.85
    + pow(max(dot(N, normalize(vec3(-0.6, 0.35, 0.72) + V)), 0.0), 240.0) * 0.5;

  // Looking back towards the sun through the sheet, the colour lights up.
  float through = pow(max(dot(-V, uSun), 0.0), 5.0);
  float a = clamp(uAlpha * uBody * (0.72 + 0.8 * fres), 0.0, 0.96);
  // Colour deepens where the light has further to travel, towards the foot of the sheet.
  float depth = smoothstep(2.2, 0.0, vL.y);
  vec3 tint = uTint * (1.0 + through * 0.65 + uDark * 0.5) * mix(1.1, 0.88, depth) * (1.0 + pebble * 0.13);

  // The cut edge of a solid sheet carries light along its thickness.
  float side = 1.0 - abs(vLn.z);
  a = mix(a, min(a * 3.2 + 0.2, 0.95), side * uEdge);
  tint = mix(tint, min(tint * 1.45, vec3(1.0)), side * uEdge);

  float shine = glare * (uEmboss > 0.0 ? 0.3 : 1.0);
  vec3 col = tint * uShade * a + env * refl + vec3(shine) * uSpec;
  float outA = clamp(a + refl * 0.55 + shine * 0.8, 0.0, 1.0);
  gl_FragColor = vec4(col, outA) * uFade;
}`,RM=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,PM=`
uniform vec3 uPaper; uniform vec3 uTint; uniform vec3 uSun; uniform mat4 uInv;
uniform float uW; uniform float uH; uniform float uRib; uniform float uRibAmt; uniform float uPool;
uniform float uGlow; uniform float uFade; uniform float uSpark; uniform float uDark;
varying vec3 vW;

void main() {
  vec3 o = (uInv * vec4(vW, 1.0)).xyz;
  vec3 d = (uInv * vec4(uSun, 0.0)).xyz;
  vec3 col = uPaper;
  float s = -o.z / d.z;
  if (s > 0.0) {
    vec3 h = o + d * s;
    float blur = 0.012 + s * 0.04;
    float m = smoothstep(-blur, blur, uW * 0.5 - abs(h.x)) * smoothstep(-blur, blur, h.y) * smoothstep(-blur, blur, uH - h.y);
    float ribs = pow(0.5 + 0.5 * cos(h.x * 6.2832 / uRib), 2.0);
    float keep = exp(-s * 0.22);
    float stripe = mix(1.0, 0.84 + 0.32 * ribs, uRibAmt * keep);
    // The frame behind the sheet throws its own bars into the pool.
    float fb = 0.035 + blur;
    float post = smoothstep(fb, 0.0, abs(abs(h.x) - (uW * 0.5 - 0.16)));
    float rail = max(smoothstep(fb, 0.0, abs(h.y - 0.3)), max(smoothstep(fb, 0.0, abs(h.y - 1.1)), smoothstep(fb, 0.0, abs(h.y - 1.9))));
    stripe *= 1.0 - 0.5 * max(post, rail) * (1.0 - uDark * 0.6);
    if (uSpark > 0.0) {
      vec2 p = h.xy * 34.0;
      stripe *= mix(1.0, 0.82 + 0.5 * pow(0.5 + 0.5 * sin(p.x) * sin(p.y), 3.0), uSpark * keep);
    }
    vec3 shade = uPaper * mix(vec3(1.0), uTint, uPool);
    vec3 glow = uTint * uGlow * (0.6 + 0.4 * keep);
    col = mix(col, shade * stripe + glow * stripe, m * uFade);
  }
  // Where the sheet meets the ground.
  float reach = smoothstep(uW * 0.5 + 0.18, uW * 0.5 - 0.1, abs(o.x));
  float contact = smoothstep(0.34, 0.0, abs(o.z)) * reach * (1.0 - uDark);
  col *= 1.0 - 0.2 * contact * uFade;
  col += uTint * smoothstep(0.3, 0.0, abs(o.z)) * reach * uDark * 0.14 * uFade;
  gl_FragColor = vec4(col, 1.0);
}`,IM=`
uniform vec3 uBase; varying vec3 vN; varying vec3 vW;
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  float d = 0.62 + 0.38 * max(dot(N, normalize(vec3(0.3, 0.9, 0.5))), 0.0);
  float s = pow(max(dot(N, normalize(normalize(vec3(0.4, 0.6, 0.7)) + V)), 0.0), 30.0) * 0.22;
  gl_FragColor = vec4(uBase * d + vec3(s), 1.0);
}`,LM=`
varying vec3 vN; varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,DM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,NM=`
uniform sampler2D uMap; uniform float uFade; uniform float uBody; uniform vec3 uInk;
varying vec2 vUv;
void main() {
  float a = texture2D(uMap, vUv).a;
  // Dark print on a clear sheet, light print on a coloured one.
  float light = smoothstep(0.7, 1.1, uBody);
  vec3 c = mix(uInk, vec3(1.0), light);
  float o = a * mix(0.55, 0.72, light) * uFade;
  gl_FragColor = vec4(c * o, o);
}`;function UM(){let r=document.createElement("canvas");r.width=1024,r.height=256;let t=r.getContext("2d");t.clearRect(0,0,r.width,r.height),t.fillStyle="#ffffff",t.textBaseline="middle",t.font='800 64px "Hanken Grotesk", Arial, sans-serif',t.fillText("TILARA",40,74),t.fillText("TILARA",560,74),t.font='500 30px "Hanken Grotesk", Arial, sans-serif',t.fillText("Polycarbonate sheet",42,138),t.fillText("Polycarbonate sheet",562,138),t.fillText("UV protected",42,180),t.fillText("UV protected",562,180);let e=new sl(r);return e.wrapS=Co,e.minFilter=ki,e.anisotropy=8,e}var ap={twin6:{walls:2,depth:.075,pitch:.062,alpha:.34,rib:.32,ribAmt:.9},twin10:{walls:2,depth:.135,pitch:.105,alpha:.3,rib:.3,ribAmt:.95},multi16:{walls:3,depth:.225,pitch:.17,alpha:.24,rib:.3,ribAmt:1},compact:{solid:!0,depth:.05,alpha:.16,ribAmt:0},diamond:{solid:!0,thin:!0,depth:.018,alpha:.42,emboss:.2,ribAmt:0,spark:.9}},Qn=(r,t,e,n)=>t+(r-t)*Math.exp(-e*n),cu=r=>.3*r.x+.59*r.y+.11*r.z>.85?.62:1.9;function Lo(r){let t=getComputedStyle(document.documentElement).getPropertyValue(r).trim();return OM(t)}function OM(r){let t=document.createElement("canvas");t.width=t.height=1;let e=t.getContext("2d",{willReadFrequently:!0});e.fillStyle=r,e.fillRect(0,0,1,1);let[n,i,s]=e.getImageData(0,0,1,1).data;return new Z(n/255,i/255,s/255)}function lp(){try{let r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}function hu(r,{ground:t="--color-paper",dark:e=!1,type:n="twin6",tint:i="--sheet-orange",alphaScale:s=1,sway:o=!0,baseTurn:a=-.5,baseLean:l=-.17,entrance:c=!0,onFirstFrame:h=null,sunX:f=-.24}={}){let u=matchMedia("(prefers-reduced-motion: reduce)").matches,d=new el({canvas:r,antialias:!0,alpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),_=Lo(t);d.setClearColor((Math.round(_.x*255)<<16)+(Math.round(_.y*255)<<8)+Math.round(_.z*255),1),d.outputColorSpace="srgb-linear";let g=new nl,m=new mn(30,1,.1,120),p=new Hi;g.add(p);let b=new Z(f,.88,-1).normalize(),M={uTint:{value:Lo(i)},uSun:{value:b},uDark:{value:e?1:0},uBody:{value:1}},v={uPaper:{value:_},uTint:M.uTint,uSun:M.uSun,uInv:{value:new Ce},uW:{value:wi},uH:{value:Ti},uRib:{value:.062},uRibAmt:{value:.9},uPool:{value:e?.2:.92},uGlow:{value:e?.62:.2},uFade:{value:0},uSpark:{value:0},uDark:M.uDark},A=new Xe(new xr(90,90),new gn({vertexShader:RM,fragmentShader:PM,uniforms:v,depthWrite:!1}));A.rotation.x=-Math.PI/2,A.renderOrder=-10,g.add(A);function E(tt,it={}){return new gn({vertexShader:AM,fragmentShader:CM,transparent:!0,premultipliedAlpha:!0,depthWrite:!1,side:it.side??di,uniforms:{uTint:M.uTint,uSun:M.uSun,uDark:M.uDark,uBody:M.uBody,uPitch:{value:it.pitch??0},uShade:{value:it.shade??1},uAlpha:{value:tt*s},uFade:it.fade,uSpec:{value:it.spec??1},uEmboss:{value:it.emboss??0},uEdge:{value:it.edge??0}}})}let T={},R=new Vn;for(let[tt,it]of Object.entries(ap)){let bt=new Hi,U={value:0};if(it.solid){let qt=new $i(wi,Ti,it.depth);qt.translate(0,Ti/2,0);let Dt=new Xe(qt,E(it.alpha,{fade:U,side:mi,emboss:it.emboss,edge:it.thin?.5:1,spec:it.emboss?1.5:1.1}));Dt.renderOrder=2,bt.add(Dt)}else{let qt=Math.floor(wi/it.pitch),Dt=new $i(.0085,Ti,it.depth);Dt.translate(0,Ti/2,0);let z=new rl(Dt,E(it.alpha*it.rib*2.4,{fade:U,side:mi,spec:.8,shade:.5}),qt+1);for(let vt=0;vt<=qt;vt+=1)R.position.set(-wi/2+vt*wi/qt,0,0),R.updateMatrix(),z.setMatrixAt(vt,R.matrix);z.renderOrder=1,z.frustumCulled=!1,bt.add(z);for(let vt=0;vt<it.walls;vt+=1){let Jt=-it.depth/2+vt*it.depth/(it.walls-1),Et=new xr(wi,Ti);Et.translate(0,Ti/2,Jt);let C=new Xe(Et,E(it.alpha,{fade:U,pitch:it.pitch}));C.renderOrder=1+vt,bt.add(C)}}bt.userData={fade:U,t:it},p.add(bt),T[tt]=bt}let y=new gn({vertexShader:LM,fragmentShader:IM,uniforms:{uBase:{value:Lo(e?"--color-muted":"--color-ink-2")}}}),x=-.2,L=(tt,it,bt,U,qt,Dt)=>{let z=new Xe(new $i(tt,it,bt),y);z.position.set(U,qt,Dt),z.renderOrder=-1,p.add(z)},N=wi/2-.16;[-N,N].forEach(tt=>{L(.055,Ti-.02,.055,tt,Ti/2,x),L(.055,.04,1.05,tt,.02,x-.26)}),[.3,1.1,1.9].forEach(tt=>L(wi-.2,.05,.05,0,tt,x));let F=UM();F.repeat.set(1,1);for(let tt of Object.values(T)){let{fade:it,t:bt}=tt.userData,U=new xr(wi,wi*.25),qt=new Xe(U,new gn({vertexShader:DM,fragmentShader:NM,transparent:!0,premultipliedAlpha:!0,depthWrite:!1,uniforms:{uMap:{value:F},uFade:it,uBody:M.uBody,uInk:{value:Lo("--color-accent")}}}));qt.position.set(0,Ti*.13,bt.depth/2+.003),qt.renderOrder=6,tt.add(qt)}let P={turn:c&&!u?a-.95:a,lean:l,rise:c&&!u?-.16:0,pool:c&&!u?0:1,tTurn:a,tLean:l,dragTurn:0,dragLean:0,scrollTurn:0,sunX:f,sunZ:-1,tSunX:f,tSunZ:-1,ptrTurn:0,ptrLean:0,tint:M.uTint.value.clone(),tTint:M.uTint.value.clone(),body:cu(M.uTint.value),tBody:cu(M.uTint.value),active:n,swap:1,clock:0,swayAmt:0,clear:i==="--sheet-clear"};for(let[tt,it]of Object.entries(T))it.visible=tt===n,it.userData.fade.value=tt===n?1:0;At(n);let Y=!o||u,V=!1,X=0,k=0,Q=!1,I=()=>{},st={w:1,h:1};function At(tt){let it=ap[tt];v.uRib.value=it.pitch??.1,v.uRibAmt.value=it.ribAmt,v.uSpark.value=it.spark??0}function Bt(tt){I=tt,I(m,p,st),Mt()}function q(){let tt=r.getBoundingClientRect();if(!tt.width||!tt.height)return;st.w=tt.width,st.h=tt.height;let it=Math.min(window.devicePixelRatio||1,tt.width<700?1.6:1.8);d.setPixelRatio(it),d.setSize(tt.width,tt.height,!1),m.aspect=tt.width/tt.height,I(m,p,st),m.updateProjectionMatrix(),Mt()}new ResizeObserver(q).observe(r);function gt(tt){P.clock+=tt;let it=Y?0:1;P.swayAmt=Qn(P.swayAmt,it,1.6,tt);let bt=Math.sin(P.clock*.55)*.075*P.swayAmt,U=Math.sin(P.clock*.38+1.1)*.012*P.swayAmt;P.turn=Qn(P.turn,P.tTurn+P.dragTurn+P.scrollTurn+P.ptrTurn,3.4,tt),P.lean=Qn(P.lean,P.tLean+P.dragLean+P.ptrLean,3.4,tt),P.sunX=Qn(P.sunX,P.tSunX,2.6,tt),P.sunZ=Qn(P.sunZ,P.tSunZ,2.6,tt),b.set(P.sunX,.88,P.sunZ).normalize(),P.rise=Qn(P.rise,0,3,tt),P.pool=Qn(P.pool,1,1.5,tt),P.tint.x=Qn(P.tint.x,P.tTint.x,7,tt),P.tint.y=Qn(P.tint.y,P.tTint.y,7,tt),P.tint.z=Qn(P.tint.z,P.tTint.z,7,tt),M.uTint.value.copy(P.tint),P.body=Qn(P.body,P.tBody,7,tt),M.uBody.value=P.body,p.rotation.set(P.lean+U,P.turn+bt,0,"YXZ"),p.position.y=P.rise,p.updateMatrixWorld(!0),v.uInv.value.copy(p.matrixWorld).invert(),v.uFade.value=P.pool*T[P.active].userData.fade.value;let qt=!1;for(let[z,vt]of Object.entries(T)){let Jt=z===P.active?1:0,Et=vt.userData.fade;Et.value=u?Jt:Qn(Et.value,Jt,7,tt),Math.abs(Et.value-Jt)>.004?qt=!0:Et.value=Jt,vt.visible=Et.value>.003}return Math.abs(P.turn-(P.tTurn+P.dragTurn+P.scrollTurn+P.ptrTurn))>7e-4||Math.abs(P.lean-(P.tLean+P.dragLean+P.ptrLean))>7e-4||Math.abs(P.sunX-P.tSunX)>.001||Math.abs(P.sunZ-P.tSunZ)>.001||Math.abs(P.pool-1)>.004||Math.abs(P.rise)>.001||P.tint.distanceToSquared(P.tTint)>2e-5||qt||P.swayAmt>.002}function rt(tt){X=0;let it=Math.min((tt-k)/1e3||.016,.05);k=tt;let bt=gt(it);d.render(g,m),Q||(Q=!0,h&&h()),bt&&V&&(X=requestAnimationFrame(rt))}function Mt(){!X&&V&&(k=performance.now(),X=requestAnimationFrame(rt))}let Ct=null;r.addEventListener("pointerdown",tt=>{Ct={x:tt.clientX,y:tt.clientY,turn:P.dragTurn,lean:P.dragLean},r.setPointerCapture(tt.pointerId),r.classList.add("is-dragging")}),r.addEventListener("pointermove",tt=>{Ct&&(P.dragTurn=Math.max(-1.25,Math.min(1.15,Ct.turn+(tt.clientX-Ct.x)*.0065)),P.dragLean=Math.max(-.28,Math.min(.42,Ct.lean+(tt.clientY-Ct.y)*.002)),Mt())});let zt=()=>{Ct=null,r.classList.remove("is-dragging")};return r.addEventListener("pointerup",zt),r.addEventListener("pointercancel",zt),q(),{setVisible(tt){V=tt,tt&&Mt()},setTint(tt){P.tTint.copy(Lo(tt)),P.tBody=cu(P.tTint),u&&(P.tint.copy(P.tTint),P.body=P.tBody),Mt()},setType(tt){tt!==P.active&&(P.active=tt,At(tt),Mt())},setPointer(tt,it){P.tSunX=f+tt*1.5,P.tSunZ=-1+it*.5,P.ptrTurn=tt*.16,P.ptrLean=it*.03,Mt()},setScrollTurn(tt){P.scrollTurn=tt,Mt()},setPaused(tt){Y=tt||u,Mt()},isPaused:()=>Y,nudge(tt){P.dragTurn=Math.max(-1.25,Math.min(1.15,P.dragTurn+tt*.2)),Mt()},setCompose:Bt,settleNow(){P.turn=P.tTurn,P.rise=0,P.pool=1,P.swayAmt=0,Y=!0,P.tint.copy(P.tTint),P.body=P.tBody;for(let[tt,it]of Object.entries(T))it.userData.fade.value=tt===P.active?1:0;gt(.016),d.render(g,m)},renderer:d}}var Do={"nav.range":"\u0909\u0924\u094D\u092A\u093E\u0926","nav.sheets":"\u0936\u0940\u091F","nav.brands":"\u092C\u094D\u0930\u093E\u0902\u0921","nav.watch":"\u0935\u0940\u0921\u093F\u092F\u094B","nav.trust":"\u092D\u0930\u094B\u0938\u093E","nav.enquire":"\u0930\u0947\u091F \u092A\u0942\u091B\u0947\u0902","nav.visit":"\u092A\u0924\u093E","nav.home":"\u0939\u094B\u092E","nav.whatsapp":"\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u0910\u092A","bar.call":"\u0915\u0949\u0932 \u0915\u0930\u0947\u0902","bar.whatsapp":"\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u0910\u092A","hero.title":"\u091B\u0924\u094D\u0924\u0940\u0938\u0917\u0922\u093C \u092E\u0947\u0902 \u091F\u093F\u0932\u093E\u0930\u093E \u0915\u0947 \u090F\u0915\u092E\u093E\u0924\u094D\u0930 \u0921\u093F\u0938\u094D\u091F\u094D\u0930\u0940\u092C\u094D\u092F\u0942\u091F\u0930\u0964","hero.lead":"\u092A\u0949\u0932\u0940\u0915\u093E\u0930\u094D\u092C\u094B\u0928\u0947\u091F \u0914\u0930 \u0915\u0932\u0930 \u0915\u094B\u091F\u0947\u0921 \u0930\u0942\u092B\u093F\u0902\u0917 \u0936\u0940\u091F, \u0930\u093E\u092F\u092A\u0941\u0930 \u0938\u0947, 2008 \u0938\u0947\u0964","hero.cta":"\u0906\u091C \u0915\u093E \u0930\u0947\u091F \u092A\u0942\u091B\u0947\u0902","hero.call":"\u0915\u0949\u0932 \u0915\u0930\u0947\u0902 98261 71537","hero.colour":"\u0936\u0940\u091F \u0915\u093E \u0930\u0902\u0917","hero.drag":"\u0918\u0941\u092E\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0936\u0940\u091F \u0915\u094B \u0916\u0940\u0902\u091A\u0947\u0902","tint.clear":"\u0915\u094D\u0932\u093F\u092F\u0930","tint.green":"\u0939\u0930\u093E","tint.blue":"\u0932\u0947\u0915 \u092C\u094D\u0932\u0942","tint.grey":"\u092A\u0947\u0902\u0938\u093F\u0932 \u0917\u094D\u0930\u0947","tint.brown":"\u092C\u094D\u0930\u093E\u0909\u0928","tint.orange":"\u0911\u0930\u0947\u0902\u091C","range.title":"\u0939\u092E\u093E\u0930\u0940 \u0926\u0941\u0915\u093E\u0928 \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u092E\u093F\u0932\u0947\u0917\u093E","range.all":"\u0938\u092D\u0940 \u0909\u0924\u094D\u092A\u093E\u0926 \u0926\u0947\u0916\u0947\u0902","shelf.multiwall":"\u092E\u0932\u094D\u091F\u0940\u0935\u0949\u0932 \u092A\u0949\u0932\u0940\u0915\u093E\u0930\u094D\u092C\u094B\u0928\u0947\u091F","shelf.multiwall.d":"6, 10 \u0914\u0930 16 \u092E\u093F\u092E\u0940, \u092F\u0942\u0935\u0940 \u0915\u094B\u091F\u0947\u0921","shelf.diamond":"\u0921\u093E\u092F\u092E\u0902\u0921 \u0914\u0930 \u090F\u092E\u094D\u092C\u0949\u0938\u094D\u0921","shelf.diamond.d":"7 \u092B\u0940\u091F \u0924\u0915 \u091A\u094C\u0921\u093C\u0947 \u0930\u094B\u0932, \u091B\u0939 \u0930\u0902\u0917","shelf.solid":"\u0915\u0949\u092E\u094D\u092A\u0948\u0915\u094D\u091F \u0914\u0930 \u090F\u0915\u094D\u0930\u0947\u0932\u093F\u0915","shelf.solid.d":"\u0938\u0949\u0932\u093F\u0921 \u0936\u0940\u091F \u0914\u0930 \u091F\u093F\u0932\u093E\u0930\u093E TPPLGLAS","shelf.steel":"\u0915\u0932\u0930 \u0915\u094B\u091F\u0947\u0921 \u0938\u094D\u091F\u0940\u0932","shelf.steel.d":"JSW, APL Apollo, Tata Steel BSL","shelf.tile":"\u091F\u093E\u0907\u0932 \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932","shelf.tile.d":"\u0938\u094D\u091F\u0940\u0932 \u0914\u0930 \u092F\u0942\u092A\u0940\u0935\u0940\u0938\u0940, \u0930\u093F\u091C \u0915\u0947 \u0938\u093E\u0925","shelf.cement":"\u0938\u0940\u092E\u0947\u0902\u091F \u0914\u0930 \u090F\u0932\u094D\u092F\u0941\u092E\u093F\u0928\u093F\u092F\u092E","shelf.cement.d":"6 \u092E\u093F\u092E\u0940 \u0938\u0940\u092E\u0947\u0902\u091F, Hindalco \u090F\u0932\u094D\u092F\u0941\u092E\u093F\u0928\u093F\u092F\u092E","shelf.canopy":"\u0915\u0948\u0928\u094B\u092A\u0940","shelf.canopy.d":"\u0926\u0930\u0935\u093E\u091C\u093C\u0947 \u0914\u0930 \u0916\u093F\u0921\u093C\u0915\u0940 \u0915\u0947 \u0932\u093F\u090F","shelf.vent":"\u091F\u0930\u094D\u092C\u094B \u0935\u0947\u0902\u091F\u093F\u0932\u0947\u091F\u0930","shelf.vent.d":"14 \u0907\u0902\u091A \u0938\u094D\u091F\u0947\u0928\u0932\u0947\u0938 \u0938\u094D\u091F\u0940\u0932","shelf.fittings":"\u092B\u093F\u091F\u093F\u0902\u0917","shelf.fittings.d":"\u0938\u094D\u0915\u094D\u0930\u0942, EPDM, \u092A\u091F\u094D\u091F\u0940, \u0917\u091F\u0930","pin.title":"\u092A\u093E\u0901\u091A \u0936\u0940\u091F, 1.5 \u0938\u0947 16 \u092E\u093F\u092E\u0940","pin.hint":"\u0928\u0940\u091A\u0947 \u0938\u094D\u0915\u094D\u0930\u0949\u0932 \u0915\u0930\u0947\u0902, \u0936\u0940\u091F \u092C\u0926\u0932\u0924\u0940 \u091C\u093E\u090F\u0917\u0940\u0964 \u0916\u0940\u0902\u091A\u0915\u0930 \u0918\u0941\u092E\u093E\u090F\u0901\u0964","pin.6.title":"\u091F\u094D\u0935\u093F\u0928 \u0935\u0949\u0932","pin.6.text":"\u092F\u0942\u0935\u0940 \u0915\u094B\u091F\u0947\u0921, 4 \u092B\u0940\u091F \u091A\u094C\u0921\u093C\u0940\u0964 \u0918\u0930 \u0914\u0930 \u0926\u0941\u0915\u093E\u0928 \u0915\u0940 \u091B\u0924 \u0915\u0947 \u0932\u093F\u090F\u0964","pin.10.title":"\u091F\u093F\u0932\u093E\u0930\u093E \u091F\u094D\u0935\u093F\u0928 \u0935\u0949\u0932","pin.10.text":"\u092F\u0942\u0935\u0940 \u0915\u094B\u091F\u0947\u0921, 4 \u092B\u0940\u091F \u091A\u094C\u0921\u093C\u0940, \u092A\u093E\u0930\u0926\u0930\u094D\u0936\u0940\u0964","pin.16.title":"\u092E\u0932\u094D\u091F\u0940\u0938\u0947\u0932 \u092A\u0948\u0928\u0932","pin.16.text":"\u0915\u094D\u0932\u093F\u092F\u0930, \u092C\u094D\u0930\u093E\u0909\u0928 \u092F\u093E \u0913\u092A\u0932 \u0935\u094D\u0939\u093E\u0907\u091F\u0964 \u0916\u094B\u0916\u0932\u0940 \u092C\u0928\u093E\u0935\u091F \u0917\u0930\u094D\u092E\u0940 \u0930\u094B\u0915\u0924\u0940 \u0939\u0948\u0964","pin.3.title":"\u0915\u0949\u092E\u094D\u092A\u0948\u0915\u094D\u091F \u0938\u0949\u0932\u093F\u0921","pin.3.text":"\u0915\u093E\u0901\u091A \u091C\u0948\u0938\u0940 \u0938\u093E\u092B\u093C, \u0935\u091C\u093C\u0928 \u0915\u093E\u0901\u091A \u0915\u0947 \u0906\u0927\u0947 \u0938\u0947 \u092D\u0940 \u0915\u092E\u0964","pin.15.title":"\u091F\u093F\u0932\u093E\u0930\u093E \u0921\u093E\u092F\u092E\u0902\u0921","pin.15.text":"3 \u0938\u0947 7 \u092B\u0940\u091F \u091A\u094C\u0921\u093C\u0947, 100 \u092B\u0940\u091F \u0932\u0902\u092C\u0947 \u0930\u094B\u0932, \u091B\u0939\u094B\u0902 \u0930\u0902\u0917\u094B\u0902 \u092E\u0947\u0902\u0964","brands.title":"\u0939\u092E\u093E\u0930\u0947 \u0926\u0930\u0935\u093E\u091C\u093C\u0947 \u092A\u0930 \u091F\u093F\u0932\u093E\u0930\u093E \u0915\u093E \u092C\u094B\u0930\u094D\u0921","brands.caption":"\u0930\u093E\u092F\u092A\u0941\u0930 \u0915\u0940 \u0926\u0941\u0915\u093E\u0928, \u0924\u0947\u0932\u0918\u093E\u0928\u0940 \u0928\u093E\u0915\u093E\u0964","brands.th.brand":"\u092C\u094D\u0930\u093E\u0902\u0921","brands.th.stock":"\u0939\u092E\u093E\u0930\u0947 \u092A\u093E\u0938","brands.tilara":"\u092E\u0932\u094D\u091F\u0940\u0935\u0949\u0932, \u0921\u093E\u092F\u092E\u0902\u0921, \u0915\u0949\u092E\u094D\u092A\u0948\u0915\u094D\u091F, TPPLGLAS\u0964 \u091B\u0924\u094D\u0924\u0940\u0938\u0917\u0922\u093C \u092E\u0947\u0902 \u090F\u0915\u092E\u093E\u0924\u094D\u0930 \u0921\u093F\u0938\u094D\u091F\u094D\u0930\u0940\u092C\u094D\u092F\u0942\u091F\u0930","brands.jsw":"\u0915\u0932\u0930 \u0915\u094B\u091F\u0947\u0921 \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932 \u0914\u0930 \u091F\u093E\u0907\u0932 \u0936\u0940\u091F","brands.apollo":"\u0915\u0932\u0930 \u0915\u094B\u091F\u0947\u0921 \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932 \u0936\u0940\u091F","brands.tata":"\u0915\u0932\u0930 \u0915\u094B\u091F\u0947\u0921 \u0936\u0940\u091F","brands.durotuff":"\u092A\u0949\u0932\u0940\u0915\u093E\u0930\u094D\u092C\u094B\u0928\u0947\u091F \u0936\u0940\u091F","brands.more":"\u0938\u0940\u092E\u0947\u0902\u091F \u0936\u0940\u091F, \u090F\u0932\u094D\u092F\u0941\u092E\u093F\u0928\u093F\u092F\u092E \u0936\u0940\u091F, \u0938\u094D\u0915\u094D\u0930\u0942","watch.title":"\u0939\u093E\u0925 \u092E\u0947\u0902 \u0926\u0947\u0916\u093F\u090F, \u091B\u0924 \u092A\u0930 \u0926\u0947\u0916\u093F\u090F","watch.multiwall":"10 \u092E\u093F\u092E\u0940 \u092E\u0932\u094D\u091F\u0940\u0935\u0949\u0932","watch.acrylic":"TPPLGLAS \u090F\u0915\u094D\u0930\u0947\u0932\u093F\u0915","watch.rooftop":"\u091B\u0924 \u092A\u0930 \u0915\u0949\u092E\u094D\u092A\u0948\u0915\u094D\u091F","watch.corridor":"\u0930\u093E\u0938\u094D\u0924\u0947 \u0915\u0947 \u090A\u092A\u0930 \u0911\u0930\u0947\u0902\u091C \u092E\u0932\u094D\u091F\u0940\u0935\u0949\u0932","watch.channel":"\u0938\u093E\u0930\u0947 \u0935\u0940\u0921\u093F\u092F\u094B \u092F\u0942\u091F\u094D\u092F\u0942\u092C \u092A\u0930 \u0926\u0947\u0916\u0947\u0902","reel.pause":"\u0930\u094B\u0915\u0947\u0902","trust.title":"\u0939\u0930 \u092C\u093E\u0924 \u0916\u0941\u0926 \u091C\u093E\u0901\u091A \u0932\u0940\u091C\u093F\u090F","trust.google":"\u0917\u0942\u0917\u0932 \u092A\u0930, 8 \u0938\u092E\u0940\u0915\u094D\u0937\u093E\u0913\u0902 \u0938\u0947","trust.google.quote":"\u201CNice Product 100% Quality Product provide. Best Service\u201D, \u0928\u0935\u0902\u092C\u0930 2025","trust.google.link":"\u092A\u0922\u093C\u0947\u0902","trust.im":"IndiaMART \u092A\u0930 \u0935\u0947\u0930\u093F\u092B\u093E\u0907\u0921 \u092A\u094D\u0932\u0938 \u0938\u092A\u094D\u0932\u093E\u092F\u0930","trust.im.text":"2008 \u0938\u0947 \u0925\u094B\u0915 \u0914\u0930 \u0916\u0941\u0926\u0930\u093E\u0964 GST 22AEQPP5850D1ZG\u0964","trust.im.link":"\u0926\u0947\u0916\u0947\u0902","trust.jd":"2008 \u092E\u0947\u0902 \u0938\u094D\u0925\u093E\u092A\u093F\u0924","trust.jd.text":"Justdial \u092A\u0930 \u092A\u0949\u0932\u0940\u0915\u093E\u0930\u094D\u092C\u094B\u0928\u0947\u091F \u0936\u0940\u091F \u0921\u0940\u0932\u0930 \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0926\u0930\u094D\u091C\u0964","trust.jd.link":"\u0932\u093F\u0938\u094D\u091F\u093F\u0902\u0917 \u0926\u0947\u0916\u0947\u0902","trust.tcert":"\u091F\u093F\u0932\u093E\u0930\u093E \u0915\u0947 \u092A\u094D\u0930\u092E\u093E\u0923\u092A\u0924\u094D\u0930","trust.tcert.text":"ISO 9001:2015, IS 14443:1997, CE EN 16240:2013\u0964","trust.taward":"\u091F\u093F\u0932\u093E\u0930\u093E \u0915\u0947 \u092A\u0941\u0930\u0938\u094D\u0915\u093E\u0930","trust.taward.text":"India 500 Best Brand Awards 2023, Quality Mark Awards 2023\u0964","trust.award":"\u092A\u0941\u0930\u0938\u094D\u0915\u093E\u0930","enquire.title":"\u0936\u0947\u0921 \u0915\u093E \u0928\u093E\u092A \u092D\u0947\u091C\u093F\u090F","enquire.lead":"\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u0910\u092A \u092A\u0930 \u0906\u091C \u0915\u093E \u0930\u0947\u091F \u092E\u093F\u0932\u0947\u0917\u093E\u0964","enquire.sheet":"\u0915\u094C\u0928 \u0938\u0940 \u0936\u0940\u091F","enquire.colour":"\u0930\u0902\u0917","enquire.colour.any":"\u0905\u092D\u0940 \u0924\u092F \u0928\u0939\u0940\u0902","enquire.length":"\u0932\u0902\u092C\u093E\u0908 (\u092B\u0940\u091F)","enquire.width":"\u091A\u094C\u0921\u093C\u093E\u0908 (\u092B\u0940\u091F)","enquire.area":"\u091B\u0924 \u0915\u093E \u0915\u094D\u0937\u0947\u0924\u094D\u0930\u092B\u0932","enquire.unit":"\u0935\u0930\u094D\u0917 \u092B\u0940\u091F","enquire.note":"\u0915\u094B\u091F\u0947\u0936\u0928 \u092E\u0947\u0902 \u0913\u0935\u0930\u0932\u0948\u092A \u0914\u0930 \u092B\u093F\u091F\u093F\u0902\u0917 \u091C\u094B\u0921\u093C\u0940 \u091C\u093E\u090F\u0917\u0940\u0964","enquire.send":"\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u0910\u092A \u092A\u0930 \u092D\u0947\u091C\u0947\u0902","enquire.opens":"\u092F\u0939 \u0935\u094D\u0939\u093E\u091F\u094D\u0938\u0910\u092A \u0916\u094B\u0932\u0947\u0917\u093E, \u0938\u0902\u0926\u0947\u0936 \u0906\u092A \u0939\u0940 \u092D\u0947\u091C\u0947\u0902\u0917\u0947\u0964","visit.title":"\u0906\u0907\u090F, \u0936\u0940\u091F \u0916\u0941\u0926 \u0926\u0947\u0916\u093F\u090F","visit.address":"\u091C\u094D\u091E\u093E\u0928 \u0915\u0930\u0924\u093E\u0930 \u091F\u093E\u0935\u0930 \u0915\u0947 \u092A\u093E\u0938, \u0928\u0947\u092E\u0940\u091A\u0902\u0926 \u0917\u0932\u0940, \u0917\u0941\u0930\u0941\u0928\u093E\u0928\u0915 \u091A\u094C\u0915, \u091C\u0935\u093E\u0939\u0930 \u0928\u0917\u0930, \u0930\u093E\u092F\u092A\u0941\u0930, \u091B\u0924\u094D\u0924\u0940\u0938\u0917\u0922\u093C 492009","visit.directions":"\u0930\u093E\u0938\u094D\u0924\u093E \u0926\u0947\u0916\u0947\u0902","visit.call":"\u0915\u0949\u0932","visit.wa":"\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u0910\u092A","visit.mail":"\u0908\u092E\u0947\u0932","visit.owner":"\u092A\u094D\u0930\u094B\u092A\u094D\u0930\u093E\u0907\u091F\u0930","visit.gst":"GST","visit.hours":"\u0938\u092E\u092F","day.mon":"\u0938\u094B\u092E\u0935\u093E\u0930","day.tue":"\u092E\u0902\u0917\u0932\u0935\u093E\u0930","day.wed":"\u092C\u0941\u0927\u0935\u093E\u0930","day.thu":"\u0917\u0941\u0930\u0941\u0935\u093E\u0930","day.fri":"\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930","day.sat":"\u0936\u0928\u093F\u0935\u093E\u0930","day.sun":"\u0930\u0935\u093F\u0935\u093E\u0930","day.closed":"\u092C\u0902\u0926","day.hours":"\u0938\u0941\u092C\u0939 10:30 \u0938\u0947 \u0936\u093E\u092E 6:50","film.pause":"\u0930\u094B\u0915\u0947\u0902","fig.years":"\u0938\u093E\u0932 \u0915\u093E \u092D\u0930\u094B\u0938\u093E","fig.products":"\u0909\u0924\u094D\u092A\u093E\u0926 \u0939\u092E\u093E\u0930\u0940 \u0938\u0942\u091A\u0940 \u092E\u0947\u0902","fig.colours":"\u0936\u0940\u091F \u0915\u0947 \u0930\u0902\u0917","fig.only":"\u091B\u0924\u094D\u0924\u0940\u0938\u0917\u0922\u093C \u092E\u0947\u0902 \u091F\u093F\u0932\u093E\u0930\u093E \u0921\u093F\u0938\u094D\u091F\u094D\u0930\u0940\u092C\u094D\u092F\u0942\u091F\u0930","foot.sheets":"\u0936\u0940\u091F","foot.more":"\u0914\u0930 \u0909\u0924\u094D\u092A\u093E\u0926","foot.site":"\u0907\u0938 \u0938\u093E\u0907\u091F \u092A\u0930","foot.reach":"\u0938\u0902\u092A\u0930\u094D\u0915","cat.title":"\u0936\u0940\u091F \u0938\u0947 \u0938\u094D\u0915\u094D\u0930\u0942 \u0924\u0915, \u092A\u0942\u0930\u0940 \u0938\u0942\u091A\u0940","cat.lead":"\u0930\u0947\u091F \u0930\u094B\u091C\u093C \u092C\u0926\u0932\u0924\u0947 \u0939\u0948\u0902, \u0907\u0938\u0932\u093F\u090F \u0939\u0930 \u0909\u0924\u094D\u092A\u093E\u0926 \u0915\u093E \u0906\u091C \u0915\u093E \u0930\u0947\u091F \u0935\u094D\u0939\u093E\u091F\u094D\u0938\u0910\u092A \u092A\u0930 \u092A\u0942\u091B\u0947\u0902\u0964","cat.all":"\u0938\u092D\u0940","cat.ask":"\u0906\u091C \u0915\u093E \u0930\u0947\u091F \u092A\u0942\u091B\u0947\u0902","cat.solo":"\u091B\u0924\u094D\u0924\u0940\u0938\u0917\u0922\u093C \u092E\u0947\u0902 \u0915\u0947\u0935\u0932 \u0939\u092E\u093E\u0930\u0947 \u092A\u093E\u0938","spec.thickness":"\u092E\u094B\u091F\u093E\u0908","spec.structure":"\u092C\u0928\u093E\u0935\u091F","spec.finish":"\u092B\u093F\u0928\u093F\u0936","spec.width":"\u091A\u094C\u0921\u093C\u093E\u0908","spec.use":"\u0909\u092A\u092F\u094B\u0917","spec.colour":"\u0930\u0902\u0917","spec.size":"\u0938\u093E\u0907\u091C\u093C","spec.brand":"\u092C\u094D\u0930\u093E\u0902\u0921","group.multiwall":"\u092E\u0932\u094D\u091F\u0940\u0935\u0949\u0932 \u092A\u0949\u0932\u0940\u0915\u093E\u0930\u094D\u092C\u094B\u0928\u0947\u091F","group.diamond":"\u0921\u093E\u092F\u092E\u0902\u0921 \u0914\u0930 \u090F\u092E\u094D\u092C\u0949\u0938\u094D\u0921","group.solid":"\u0915\u0949\u092E\u094D\u092A\u0948\u0915\u094D\u091F, \u0938\u0949\u0932\u093F\u0921 \u0914\u0930 \u090F\u0915\u094D\u0930\u0947\u0932\u093F\u0915","group.steel":"\u0915\u0932\u0930 \u0915\u094B\u091F\u0947\u0921 \u0938\u094D\u091F\u0940\u0932","group.roofing":"\u092F\u0942\u092A\u0940\u0935\u0940\u0938\u0940, \u092A\u092B, \u0938\u0940\u092E\u0947\u0902\u091F \u0914\u0930 \u090F\u0932\u094D\u092F\u0941\u092E\u093F\u0928\u093F\u092F\u092E","group.canopy":"\u0915\u0948\u0928\u094B\u092A\u0940 \u0914\u0930 \u0911\u0928\u093F\u0902\u0917","group.vent":"\u0935\u0947\u0902\u091F\u093F\u0932\u0947\u0936\u0928","group.fittings":"\u092B\u093F\u091F\u093F\u0902\u0917"};function Ji(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qs={duration:.5,overwrite:!1,delay:0},Ru,en,Re,ti=1e8,Se=1/ti,vu=Math.PI*2,FM=vu/4,BM=0,_p=Math.sqrt,zM=Math.cos,kM=Math.sin,Ze=function(t){return typeof t=="string"},Ne=function(t){return typeof t=="function"},Qi=function(t){return typeof t=="number"},xl=function(t){return typeof t>"u"},Ci=function(t){return typeof t=="object"},In=function(t){return t!==!1},Pu=function(){return typeof window<"u"},hl=function(t){return Ne(t)||Ze(t)},vp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,xu=/(?:-?\.?\d|\.)+/gi,Iu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Kr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lu=/[+-]=-?[.\d]+/,xp=/[^,'"\[\]\s]+/gi,VM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,Ei,yu,Du,Gn={},pl={},yp,Mp=function(t){return(pl=Zs(t,Gn))&&ln},yl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},zo=function(t,e){return!e&&console.warn(t)},Sp=function(t,e){return t&&(Gn[t]=e)&&pl&&(pl[t]=e)||Gn},ko=function(){return 0},HM={suppressEvents:!0,isStart:!0,kill:!1},ul={suppressEvents:!0,kill:!1},GM={suppressEvents:!0},Nu={},Mr=[],Mu={},bp,Rn={},fu={},cp=30,fl=[],Uu="",Ou=function(t){var e=t[0],n,i;if(Ci(e)||Ne(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=fl.length;i--&&!fl[i].targetTest(e););n=fl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ku(t[i],n)))||t.splice(i,1);return t},Sr=function(t){return t._gsap||Ou(ei(t))[0]._gsap},Fu=function(t,e,n){return(n=t[e])&&Ne(n)?t[e]():xl(n)&&t.getAttribute&&t.getAttribute(e)||n},_n=function(t,e){return(t=t.split(",")).forEach(e)||t},Ue=function(t){return Math.round(t*1e5)/1e5||0},Ve=function(t){return Math.round(t*1e7)/1e7||0},Qr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},WM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ml=function(){var t=Mr.length,e=Mr.slice(0),n,i;for(Mu={},Mr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Bu=function(t){return!!(t._initted||t._startAt||t.add)},wp=function(t,e,n,i){Mr.length&&!en&&ml(),t.render(e,n,i||!!(en&&e<0&&Bu(t))),Mr.length&&!en&&ml()},Tp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(xp).length<2?e:Ze(t)?t.trim():t},Ep=function(t){return t},Wn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},XM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Zs=function(t,e){for(var n in e)t[n]=e[n];return t},hp=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ci(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},gl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Oo=function(t){var e=t.parent||Ie,n=t.keyframes?XM(an(t.keyframes)):Wn;if(In(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},YM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ap=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ml=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},br=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Zr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},qM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Su=function(t,e,n,i){return t._startAt&&(en?t._startAt.revert(ul):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},ZM=function r(t){return!t||t._ts&&r(t.parent)},up=function(t){return t._repeat?$s(t._tTime,t=t.duration()+t._rDelay)*t:0},$s=function(t,e){var n=Math.floor(t=Ve(t/e));return t&&n===t?n-1:n},_l=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Sl=function(t){return t._end=Ve(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},bl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ve(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Sl(t),n._dirty||Zr(n,t)),t},Cp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=_l(t.rawTime(),e),(!e._dur||Go(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),Zr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Ai=function(t,e,n,i){return e.parent&&br(e),e._start=Ve((Qi(n)?n:n||t!==Ie?jn(t,n,e):t._time)+e._delay),e._end=Ve(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ap(t,e,"_first","_last",t._sort?"_start":0),bu(e)||(t._recent=e),i||Cp(t,e),t._ts<0&&bl(t,t._tTime),t},Rp=function(t,e){return(Gn.ScrollTrigger||yl("scrollTrigger",e))&&Gn.ScrollTrigger.create(e,t)},Pp=function(t,e,n,i,s){if(Gu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!en&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&bp!==Pn.frame)return Mr.push(t),t._lazy=[s,i],1},$M=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},bu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},JM=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&$M(t)&&!(!t._initted&&bu(t))||(t._ts<0||t._dp._ts<0)&&!bu(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=Go(0,t._tDur,e),h=$s(l,a),t._yoyo&&h&1&&(o=1-o),h!==$s(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||en||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&Pp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Su(t,e,n,!0),t._onUpdate&&!n&&Hn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Hn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&br(t,1),!n&&!en&&(Hn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},KM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Js=function(t,e,n,i){var s=t._repeat,o=Ve(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ve(o*(s+1)+t._rDelay*s):o,a>0&&!i&&bl(t,t._tTime=t._tDur*a),t.parent&&Sl(t),n||Zr(t.parent,t),t},fp=function(t){return t instanceof tn?Zr(t):Js(t,t._dur)},QM={_start:0,endTime:ko,totalDuration:ko},jn=function r(t,e,n){var i=t.labels,s=t._recent||QM,o=t.duration()>=ti?s.endTime(!1):t._dur,a,l,c;return Ze(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(an(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Fo=function(t,e,n){var i=Qi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;o.immediateRender=In(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ze(e[0],o,e[s+1])},wr=function(t,e){return t||t===0?e(t):e},Go=function(t,e,n){return n<t?t:n>e?e:n},nn=function(t,e){return!Ze(t)||!(e=VM.exec(t))?"":e[1]},jM=function(t,e,n){return wr(n,function(i){return Go(t,e,i)})},wu=[].slice,Ip=function(t,e){return t&&Ci(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ci(t[0]))&&!t.nodeType&&t!==Ei},tS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ze(i)&&!e||Ip(i,1)?(s=n).push.apply(s,ei(i)):n.push(i)})||n},ei=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):Ze(t)&&!n&&(yu||!Ks())?wu.call((e||Du).querySelectorAll(t),0):an(t)?tS(t,n):Ip(t)?wu.call(t,0):t?[t]:[]},Tu=function(t){return t=ei(t)[0]||zo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ei(e,n.querySelectorAll?n:n===t?zo("Invalid scope")||Du.createElement("div"):t)}},Lp=function(t){return t.sort(function(){return .5-Math.random()})},Dp=function(t){if(Ne(t))return t;var e=Ci(t)?t:{each:t},n=$r(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return Ze(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,_){var g=(_||e).length,m=o[g],p,b,M,v,A,E,T,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,ti])[1],!y){for(T=-ti;T<(T=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*h-.5:i%y,b=y===ti?0:l?g*f/y-.5:i/y|0,T=0,R=ti,E=0;E<g;E++)M=E%y-p,v=b-(E/y|0),m[E]=A=c?Math.abs(c==="y"?v:M):_p(M*M+v*v),A>T&&(T=A),A<R&&(R=A);i==="random"&&Lp(m),m.max=T-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=nn(e.amount||e.each)||0,n=n&&g<0?Hp(n):n}return g=(m[u]-m.min)/m.max||0,Ve(m.b+(n?n(g):g)*m.v)+m.u}},Eu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ve(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Qi(n)?0:nn(n))}},Np=function(t,e){var n=an(t),i,s;return!n&&Ci(t)&&(i=n=t.radius||ti,t.values?(t=ei(t.values),(s=!Qi(t[0]))&&(i*=i)):t=Eu(t.increment)),wr(e,n?Ne(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ti,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-a,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:o,s||h===o||Qi(o)?h:h+nn(o)}:Eu(t))},Up=function(t,e,n,i){return wr(an(t)?!e:n===!0?!!(n=0):!i,function(){return an(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},eS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},nS=function(t,e){return function(n){return t(parseFloat(n))+(e||nn(n))}},iS=function(t,e,n){return Fp(t,e,0,1,n)},Op=function(t,e,n){return wr(n,function(i){return t[~~e(i)]})},rS=function r(t,e,n){var i=e-t;return an(t)?Op(t,r(0,t.length),e):wr(n,function(s){return(i+(s-t)%i)%i+t})},sS=function r(t,e,n){var i=e-t,s=i*2;return an(t)?Op(t,r(0,t.length-1),e):wr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Qs=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?xp:xu),n+=t.substr(e,i-e)+Up(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Fp=function(t,e,n,i,s){var o=e-t,a=i-n;return wr(s,function(l){return n+((l-t)/o*a||0)})},oS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ze(t),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(an(t)&&!an(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(u,~~_);return h[g](_-g)},n=e}else i||(t=Zs(an(t)?[]:{},t));if(!h){for(l in e)Vu.call(a,t,l,"get",e[l]);s=function(_){return Yu(_,a)||(o?t.p:t)}}}return wr(n,s)},dp=function(t,e,n){var i=t.labels,s=ti,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Hn=function(t,e,n){var i=t.vars,s=i[e],o=Re,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Mr.length&&ml(),a&&(Re=a),h=l?s.apply(c,l):s.call(c),Re=o,h},No=function(t){return br(t),t.scrollTrigger&&t.scrollTrigger.kill(!!en),t.progress()<1&&Hn(t,"onInterrupt"),t},Ys,Bp=[],zp=function(t){if(t)if(t=!t.name&&t.default||t,Pu()||t.headless){var e=t.name,n=Ne(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ko,render:Yu,add:Vu,kill:SS,modifier:MS,rawVars:0},o={targetTest:0,get:0,getSetter:wl,aliases:{},register:0};if(Ks(),t!==i){if(Rn[e])return;Wn(i,Wn(gl(t,s),o)),Zs(i.prototype,Zs(s,gl(t,o))),Rn[i.prop=e]=i,t.targetTest&&(fl.push(i),Nu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Sp(e,i),t.register&&t.register(ln,i,vn)}else Bp.push(t)},Me=255,Uo={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},du=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},kp=function(t,e,n){var i=t?Qi(t)?[t>>16,t>>8&Me,t&Me]:0:Uo.black,s,o,a,l,c,h,f,u,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Uo[t])i=Uo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Me,i&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(xu),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=du(l+1/3,s,o),i[1]=du(l,s,o),i[2]=du(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Iu),n&&i.length<4&&(i[3]=1),i}else i=t.match(xu)||Uo.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Me,o=i[1]/Me,a=i[2]/Me,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Vp=function(t){var e=[],n=[],i=-1;return t.split(Ki).forEach(function(s){var o=s.match(Kr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},pp=function(t,e,n){var i="",s=(t+i).match(Ki),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=kp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Vp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ki,"1").split(Kr),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Ki),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Ki=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Uo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),aS=/hsl[a]?\(/,zu=function(t){var e=t.join(" "),n;if(Ki.lastIndex=0,Ki.test(e))return n=aS.test(e),t[1]=pp(t[1],n),t[0]=pp(t[0],n,Vp(t[1])),!0},Vo,Pn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,_=function g(m){var p=r()-i,b=m===!0,M,v,A,E;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,M=A-o,(M>0||b)&&(E=++f.frame,u=A-f.time*1e3,f.time=A=A/1e3,o+=M+(M>=s?4:s-M),v=1),b||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](A,u,E,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){yp&&(!yu&&Pu()&&(Ei=yu=window,Du=Ei.document||{},Gn.gsap=ln,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(ln.version),Mp(pl||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),Bp.forEach(zp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Vo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Vo=0,c=ko},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,b){var M=p?function(v,A,E,T){m(v,A,E,T),f.remove(M)}:m;return f.remove(m),a[b?"unshift":"push"](M),Ks(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Ks=function(){return!Vo&&Pn.wake()},oe={},lS=/^[\d.\-M][\d.\-,\s]/,cS=/["']/g,hS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(cS,"").trim():+c,i=l.substr(a+1).trim();return e},uS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},fS=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[hS(e[1])]:uS(t).split(",").map(Tp)):oe._CE&&lS.test(t)?oe._CE("",t):n},Hp=function(t){return function(e){return 1-t(1-e)}},Gp=function r(t,e){for(var n=t._first,i;n;)n instanceof tn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},$r=function(t,e){return t&&(Ne(t)?t:oe[t]||fS(t))||e},jr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return _n(t,function(a){oe[a]=Gn[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},Wp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},pu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/vu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*kM((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Wp(a);return s=vu/s,l.config=function(c,h){return r(t,c,h)},l},mu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Wp(n);return i.config=function(s){return r(t,s)},i};_n("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;jr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;jr("Elastic",pu("in"),pu("out"),pu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});jr("Circ",function(r){return-(_p(1-r*r)-1)});jr("Sine",function(r){return r===1?1:-zM(r*FM)+1});jr("Back",mu("in"),mu("out"),mu());oe.SteppedEase=oe.steps=Gn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Se;return function(a){return((i*Go(0,o,a)|0)+s)*n}}};qs.ease=oe["quad.out"];_n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Uu+=r+","+r+"Params,"});var ku=function(t,e){this.id=BM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Fu,this.set=e?e.getSetter:wl},Ho=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Js(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),Vo||Pn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(bl(this,n),!s._dp||s.parent||Cp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+up(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+up(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?$s(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?_l(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(Go(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Sl(this),qM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_l(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=GM);var i=en;return en=n,Bu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(jn(this,n),In(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Ne(n)?n:Ep,a=function(){var c=i.then;i.then=null,Ne(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){No(this)},r}();Wn(Ho.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var tn=function(r){gp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),Ie&&Ai(n.parent||Ie,Ji(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Rp(Ji(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Fo(0,arguments,this),this},e.from=function(i,s,o){return Fo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Fo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Oo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ze(i,s,jn(this,o),1),this},e.call=function(i,s,o){return Ai(this,ze.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ze(i,o,jn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Oo(o).immediateRender=In(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,Oo(a).immediateRender=In(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ve(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,_,g,m,p,b,M,v,A,E,T;if(this!==Ie&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,v=this._start,M=this._ts,p=!M,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=Ve(h%m),h===l?(g=this._repeat,u=c):(A=Ve(h/m),g=~~A,g&&g===A&&(u=c,g--),u>c&&(u=c)),A=$s(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),E&&g&1&&(u=c-u,T=1),g!==A&&!this._lock){var R=E&&A&1,y=R===(E&&g&1);if(g<A&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(T?0:Ve(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Gp(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=KM(this,Ve(a),Ve(u)),b&&(h-=u-(u=b._start))),this._tTime=h,this._time=u,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!A&&(Hn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||u>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!p){b=0,_&&(h+=this._zTime=-Se);break}}d=_}else{d=this._last;for(var x=i<0?i:u;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||en&&Bu(d)),u!==this._time||!this._ts&&!p){b=0,_&&(h+=this._zTime=x?-Se:Se);break}}d=_}}if(b&&!s&&(this.pause(),b.render(u>=a?0:-Se)._zTime=u>=a?1:-1,this._ts))return this._start=v,Sl(this),this.render(i,s,o);this._onUpdate&&!s&&Hn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&br(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Hn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Qi(s)||(s=jn(this,s,i)),!(i instanceof Ho)){if(an(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ze(i))return this.addLabel(i,s);if(Ne(i))i=ze.delayedCall(0,i);else return this}return this!==i?Ai(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ze?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ze(i)?this.removeLabel(i):Ne(i)?this.killTweensOf(i):(i.parent===this&&Ml(this,i),i===this._recent&&(this._recent=this._last),Zr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ve(Pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=jn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ze.delayedCall(0,s||ko,o);return a.data="isPause",this._hasPause=1,Ai(this,a,jn(this,i))},e.removePause=function(i){var s=this._first;for(i=jn(this,i);s;)s._start===i&&s.data==="isPause"&&br(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)yr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ei(i),l=this._first,c=Qi(s),h;l;)l instanceof ze?WM(l._targets,a)&&(c?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=jn(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,_=ze.to(o,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Js(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,f||[])}},s));return u?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Wn({startAt:{time:jn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),dp(this,jn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),dp(this,jn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Zr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ti,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ai(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Js(o,o===Ie&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ie._ts&&(wp(Ie,_l(i,Ie)),bp=Pn.frame),Pn.frame>=cp){cp+=Ln.autoSleep||120;var s=Ie._first;if((!s||!s._ts)&&Ln.autoSleep&&Pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pn.sleep()}}},t}(Ho);Wn(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var dS=function(t,e,n,i,s,o,a){var l=new vn(this._pt,t,e,0,1,Xu,null,s),c=0,h=0,f,u,d,_,g,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Qs(i)),o&&(b=[n,i],o(b,t,e),n=b[0],i=b[1]),u=n.match(uu)||[];f=uu.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Qr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=uu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Lu.test(i)||p)&&(l.e=0),this._pt=l,l},Vu=function(t,e,n,i,s,o,a,l,c,h){Ne(i)&&(i=i(s||0,t,o));var f=t[e],u=n!=="get"?n:Ne(f)?c?t[e.indexOf("set")||!Ne(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Ne(f)?c?vS:qp:Wu,_;if(Ze(i)&&(~i.indexOf("random(")&&(i=Qs(i)),i.charAt(1)==="="&&(_=Qr(u,i)+(nn(u)||0),(_||_===0)&&(i=_))),!h||u!==i||Au)return!isNaN(u*i)&&i!==""?(_=new vn(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?yS:Zp,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!f&&!(e in t)&&yl(e,i),dS.call(this,t,e,u,i,d,l||Ln.stringFilter,c))},pS=function(t,e,n,i,s){if(Ne(t)&&(t=Bo(t,s,e,n,i)),!Ci(t)||t.style&&t.nodeType||an(t)||vp(t))return Ze(t)?Bo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Bo(t[a],s,e,n,i);return o},Hu=function(t,e,n,i,s,o){var a,l,c,h;if(Rn[t]&&(a=new Rn[t]).init(s,a.rawVars?e[t]:pS(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new vn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ys))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},yr,Au,Gu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,b=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!Ru,v=t.timeline,A,E,T,R,y,x,L,N,F,P,Y,V,X;if(v&&(!u||!s)&&(s="none"),t._ease=$r(s,qs.ease),t._yEase=f?Hp($r(f===!0?s:f,qs.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!i.runBackwards,!v||u&&!i.stagger){if(N=m[0]?Sr(m[0]).harness:0,V=N&&i[N.prop],A=gl(i,Nu),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&_?ul:HM),g._lazy=0),o){if(br(t._startAt=ze.set(m,Wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return Hn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en||!a&&!d)&&t._startAt.revert(ul),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),T=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&In(l),immediateRender:a,stagger:0,parent:p},A),V&&(T[N.prop]=V),br(t._startAt=ze.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en?t._startAt.revert(ul):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&In(l)||l&&!_,E=0;E<m.length;E++){if(y=m[E],L=y._gsap||Ou(m)[E]._gsap,t._ptLookup[E]=P={},Mu[L.id]&&Mr.length&&ml(),Y=b===m?E:b.indexOf(y),N&&(F=new N).init(y,V||A,t,Y,b)!==!1&&(t._pt=R=new vn(t._pt,y,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(k){P[k]=R}),F.priority&&(x=1)),!N||V)for(T in A)Rn[T]&&(F=Hu(T,A,t,Y,y,b))?F.priority&&(x=1):P[T]=R=Vu.call(t,y,T,"get",A[T],Y,b,0,i.stringFilter);t._op&&t._op[E]&&t.kill(y,t._op[E]),M&&t._pt&&(yr=t,Ie.killTweensOf(y,P,t.globalTime(e)),X=!t.parent,yr=0),t._pt&&l&&(Mu[L.id]=1)}x&&qu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,u&&e<=0&&v.render(ti,!0,!0)},mS=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Au=1,t.vars[e]="+=0",Gu(t,a),Au=0,l?zo(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ue(n)+nn(f.e)),f.b&&(f.b=h.s+nn(f.b))},gS=function(t,e){var n=t[0]?Sr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Zs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},_S=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(an(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Bo=function(t,e,n,i,s){return Ne(t)?t.call(e,n,i,s):Ze(t)&&~t.indexOf("random(")?Qs(t):t},Xp=Uu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yp={};_n(Xp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yp[r]=1});var ze=function(r){gp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Oo(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,b=i.parent||Ie,M=(an(n)||vp(n)?Qi(n[0]):"length"in i)?[n]:ei(n),v,A,E,T,R,y,x,L;if(a._targets=M.length?Ou(M):zo("GSAP target "+n+" not found. https://gsap.com",!Ln.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||u||hl(c)||hl(h)){if(i=a.vars,v=a.timeline=new tn({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:M}),v.kill(),v.parent=v._dp=Ji(a),v._start=0,u||hl(c)||hl(h)){if(T=M.length,x=u&&Dp(u),Ci(u))for(R in u)~Xp.indexOf(R)&&(L||(L={}),L[R]=u[R]);for(A=0;A<T;A++)E=gl(i,Yp),E.stagger=0,p&&(E.yoyoEase=p),L&&Zs(E,L),y=M[A],E.duration=+Bo(c,Ji(a),A,y,M),E.delay=(+Bo(h,Ji(a),A,y,M)||0)-a._delay,!u&&T===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),v.to(y,E,x?x(A,y,M):0),v._ease=oe.none;v.duration()?c=h=0:a.timeline=0}else if(_){Oo(Wn(v.vars.defaults,{ease:"none"})),v._ease=$r(_.ease||i.ease||"none");var N=0,F,P,Y;if(an(_))_.forEach(function(V){return v.to(M,V,">")}),v.duration();else{E={};for(R in _)R==="ease"||R==="easeEach"||_S(R,_[R],E,_.easeEach);for(R in E)for(F=E[R].sort(function(V,X){return V.t-X.t}),N=0,A=0;A<F.length;A++)P=F[A],Y={ease:P.e,duration:(P.t-(A?F[A-1].t:0))/100*c},Y[R]=P.v,v.to(M,Y,N),N+=Y.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Ru&&(yr=Ji(a),Ie.killTweensOf(M),yr=0),Ai(b,Ji(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===Ve(b._time)&&In(f)&&ZM(Ji(a))&&b.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-h)||0)),m&&Rp(Ji(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Se&&!h?l:i<Se?0:i,u,d,_,g,m,p,b,M,v;if(!c)JM(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(u=Ve(f%g),f===l?(_=this._repeat,u=c):(m=Ve(f/g),_=~~m,_&&_===m?(u=c,_--):u>c&&(u=c)),p=this._yoyo&&_&1,p&&(v=this._yEase,u=c-u),m=$s(this._tTime,g),u===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(M&&this._yEase&&Gp(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&u!==g&&this._initted&&(this._lock=o=1,this.render(Ve(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Pp(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(u/c),this._from&&(this.ratio=b=1-b),!a&&f&&!s&&!m&&(Hn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Su(this,i,s,o),Hn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Hn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Su(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&br(this,1),!s&&!(h&&!a)&&(f||a||p)&&(Hn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Vo||Pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Gu(this,c),h=this._ease(c/this._dur),mS(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(bl(this,0),this.parent||Ap(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?No(this):this.scrollTrigger&&this.scrollTrigger.kill(!!en),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,yr&&yr.vars.overwrite!==!0)._first||No(this),this.parent&&o!==this.timeline.totalDuration()&&Js(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ei(i):a,c=this._ptLookup,h=this._pt,f,u,d,_,g,m,p;if((!s||s==="all")&&YM(a,l))return s==="all"&&(this._pt=0),No(this);for(f=this._op=this._op||[],s!=="all"&&(Ze(s)&&(g={},_n(s,function(b){return g[b]=1}),s=g),s=gS(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){u=c[p],s==="all"?(f[p]=s,_=u,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ml(this,m,"_pt"),delete u[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&No(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Fo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Fo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ie.killTweensOf(i,s,o)},t}(Ho);Wn(ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_n("staggerTo,staggerFrom,staggerFromTo",function(r){ze[r]=function(){var t=new tn,e=wu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Wu=function(t,e,n){return t[e]=n},qp=function(t,e,n){return t[e](n)},vS=function(t,e,n,i){return t[e](i.fp,n)},xS=function(t,e,n){return t.setAttribute(e,n)},wl=function(t,e){return Ne(t[e])?qp:xl(t[e])&&t.setAttribute?xS:Wu},Zp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},yS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Xu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Yu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},MS=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},SS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ml(this,e,"_pt"):e.dep||(n=1),e=i;return!n},bS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},qu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},vn=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Zp,this.d=l||this,this.set=c||Wu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=bS,this.m=n,this.mt=s,this.tween=i},r}();_n(Uu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Nu[r]=1});Gn.TweenMax=Gn.TweenLite=ze;Gn.TimelineLite=Gn.TimelineMax=tn;Ie=new tn({sortChildren:!1,defaults:qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ln.stringFilter=zu;var Jr=[],dl={},wS=[],mp=0,TS=0,gu=function(t){return(dl[t]||wS).map(function(e){return e()})},Cu=function(){var t=Date.now(),e=[];t-mp>2&&(gu("matchMediaInit"),Jr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ei.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),gu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),mp=t,gu("matchMedia"))},$p=function(){function r(e,n){this.selector=n&&Tu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=TS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ne(n)&&(s=i,i=n,n=Ne);var o=this,a=function(){var c=Re,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Tu(s)),Re=o,f=i.apply(o,arguments),Ne(f)&&o._r.push(f),Re=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Ne?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Re;Re=null,n(this),Re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ze&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ze)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Jr.length;o--;)Jr[o].id===this.id&&Jr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),ES=function(){function r(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ci(n)||(n={matches:n});var o=new $p(0,s||this.scope),a=o.conditions={},l,c,h;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ei.matchMedia(n[c]),l&&(Jr.indexOf(o)<0&&Jr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Cu):l.addEventListener("change",Cu)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),vl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return zp(i)})},timeline:function(t){return new tn(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ze(t)&&(t=ei(t)[0]);var s=Sr(t||{}).get,o=n?Ep:Tp;return n==="native"&&(n=""),t&&(e?o((Rn[e]&&Rn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Rn[a]&&Rn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ei(t),t.length>1){var i=t.map(function(h){return ln.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=Rn[e],a=Sr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;Ys._pt=0,f.init(t,n?h+n:h,Ys,0,[t]),f.render(1,f),Ys._pt&&Yu(1,Ys)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=ln.to(t,Wn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=$r(t.ease,qs.ease)),hp(qs,t||{})},config:function(t){return hp(Ln,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Rn[a]&&!Gn[a]&&zo(e+" effect requires "+a+" plugin.")}),fu[e]=function(a,l,c){return n(ei(a),Wn(l||{},s),c)},o&&(tn.prototype[e]=function(a,l,c){return this.add(fu[e](a,Ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=$r(e)},parseEase:function(t,e){return arguments.length?$r(t,e):oe},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new tn(t),i,s;for(n.smoothChildTiming=In(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,i=Ie._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ze&&i.vars.onComplete===i._targets[0]))&&Ai(n,i,i._start-i._delay),i=s;return Ai(Ie,n,0),n},context:function(t,e){return t?new $p(t,e):Re},matchMedia:function(t){return new ES(t)},matchMediaRefresh:function(){return Jr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Cu()},addEventListener:function(t,e){var n=dl[t]||(dl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=dl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:rS,wrapYoyo:sS,distribute:Dp,random:Up,snap:Np,normalize:iS,getUnit:nn,clamp:jM,splitColor:kp,toArray:ei,selector:Tu,mapRange:Fp,pipe:eS,unitize:nS,interpolate:oS,shuffle:Lp},install:Mp,effects:fu,ticker:Pn,updateRoot:tn.updateRoot,plugins:Rn,globalTimeline:Ie,core:{PropTween:vn,globals:Sp,Tween:ze,Timeline:tn,Animation:Ho,getCache:Sr,_removeLinkedListItem:Ml,reverting:function(){return en},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return Ru=t}}};_n("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return vl[r]=ze[r]});Pn.add(tn.updateRoot);Ys=vl.to({},{duration:0});var AS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},CS=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=AS(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},_u=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ze(s)&&(l={},_n(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}CS(a,s)}}}},ln=vl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},_u("roundProps",Eu),_u("modifiers"),_u("snap",Np))||vl;ze.version=tn.version=ln.version="3.13.0";yp=1;Pu()&&Ks();var RS=oe.Power0,PS=oe.Power1,IS=oe.Power2,LS=oe.Power3,DS=oe.Power4,NS=oe.Linear,US=oe.Quad,OS=oe.Cubic,FS=oe.Quart,BS=oe.Quint,zS=oe.Strong,kS=oe.Elastic,VS=oe.Back,HS=oe.SteppedEase,GS=oe.Bounce,WS=oe.Sine,XS=oe.Expo,YS=oe.Circ;var Jp,Tr,to,ju,is,qS,Kp,tf,ZS=function(){return typeof window<"u"},tr={},ns=180/Math.PI,eo=Math.PI/180,js=Math.atan2,Qp=1e8,ef=/([A-Z])/g,$S=/(left|right|width|margin|padding|x)/i,JS=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$u=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},KS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},QS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},jS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},om=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},am=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},tb=function(t,e,n){return t.style[e]=n},eb=function(t,e,n){return t.style.setProperty(e,n)},nb=function(t,e,n){return t._gsap[e]=n},ib=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},rb=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},sb=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Le="transform",Dn=Le+"Origin",ob=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in tr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ri[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ji(i,a)}):this.tfm[t]=o.x?o[t]:ji(i,t),t===Dn&&(this.tfm.zOrigin=o.zOrigin);else return Ri.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Le)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Dn,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},lm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ab=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ef,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=tf(),(!s||!s.isStart)&&!n[Le]&&(lm(n),i.zOrigin&&n[Dn]&&(n[Dn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},cm=function(t,e){var n={target:t,props:[],revert:ab,save:ob};return t._gsap||ln.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},hm,Ju=function(t,e){var n=Tr.createElementNS?Tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Tr.createElement(t);return n&&n.style?n:Tr.createElement(t)},ni=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ef,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,no(e)||e,1)||""},jp="O,Moz,ms,Ms,Webkit".split(","),no=function(t,e,n){var i=e||is,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(jp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?jp[o]:"")+t},Ku=function(){ZS()&&window.document&&(Jp=window,Tr=Jp.document,to=Tr.documentElement,is=Ju("div")||{style:{}},qS=Ju("div"),Le=no(Le),Dn=Le+"Origin",is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hm=!!no("perspective"),tf=ln.core.reverting,ju=1)},tm=function(t){var e=t.ownerSVGElement,n=Ju("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),to.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),to.removeChild(n),s},em=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},um=function(t){var e,n;try{e=t.getBBox()}catch{e=tm(t),n=1}return e&&(e.width||e.height)||n||(e=tm(t)),e&&!e.width&&!e.x&&!e.y?{x:+em(t,["x","cx","x1"])||0,y:+em(t,["y","cy","y1"])||0,width:0,height:0}:e},fm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&um(t))},rs=function(t,e){if(e){var n=t.style,i;e in tr&&e!==Dn&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ef,"-$1").toLowerCase())):n.removeAttribute(e)}},Er=function(t,e,n,i,s,o){var a=new vn(t._pt,e,n,0,1,o?am:om);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},nm={deg:1,rad:1,turn:1},lb={grid:1,flex:1},Ar=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=is.style,l=$S.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",_,g,m,p;if(i===o||!s||nm[i]||nm[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),p=t.getCTM&&fm(t),(d||o==="%")&&(tr[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Ue(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(u?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Tr||!g.appendChild)&&(g=Tr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Pn.time&&!m.uncache)return Ue(s/m.width*f);if(d&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=f+i,_=t[h],b?t.style[e]=b:rs(t,e)}else(d||o==="%")&&!lb[ni(g,"display")]&&(a.position=ni(t,"position")),g===t&&(a.position="static"),g.appendChild(is),_=is[h],g.removeChild(is),a.position="absolute";return l&&d&&(m=Sr(g),m.time=Pn.time,m.width=g[h]),Ue(u?_*s/f:_&&s?f/_*s:0)},ji=function(t,e,n,i){var s;return ju||Ku(),e in Ri&&e!=="transform"&&(e=Ri[e],~e.indexOf(",")&&(e=e.split(",")[0])),tr[e]&&e!=="transform"?(s=Yo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:El(ni(t,Dn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Tl[e]&&Tl[e](t,e,n)||ni(t,e)||Fu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ar(t,e,s,n)+n:s},cb=function(t,e,n,i){if(!n||n==="none"){var s=no(e,t,1),o=s&&ni(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ni(t,"borderTopColor"))}var a=new vn(this._pt,t.style,e,0,1,Xu),l=0,c=0,h,f,u,d,_,g,m,p,b,M,v,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ni(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=ni(t,e)||i,g?t.style[e]=g:rs(t,e)),h=[n,i],zu(h),n=h[0],i=h[1],u=n.match(Kr)||[],A=i.match(Kr)||[],A.length){for(;f=Kr.exec(i);)m=f[0],b=i.substring(l,f.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=u[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=Qr(d,m)+v),p=parseFloat(m),M=m.substr((p+"").length),l=Kr.lastIndex-M.length,M||(M=M||Ln.units[e]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(d=Ar(t,e,g,M)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?am:om;return Lu.test(i)&&(a.e=0),this._pt=a,a},im={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=im[n]||n,e[1]=im[i]||i,e.join(" ")},ub=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],tr[a]&&(l=1,a=a==="transformOrigin"?Dn:Le),rs(n,a);l&&(rs(n,Le),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Yo(n,1),o.uncache=1,lm(i)))}},Tl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new vn(t._pt,e,n,0,0,ub);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Xo=[1,0,0,1,0,0],dm={},pm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},rm=function(t){var e=ni(t,Le);return pm(e)?Xo:e.substr(7).match(Iu).map(Ue)},nf=function(t,e){var n=t._gsap||Sr(t),i=t.style,s=rm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xo:s):(s===Xo&&!t.offsetParent&&t!==to&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,to.appendChild(t)),s=rm(t),l?i.display=l:rs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):to.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qu=function(t,e,n,i,s,o){var a=t._gsap,l=s||nf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],b=l[5],M=e.split(" "),v=parseFloat(M[0])||0,A=parseFloat(M[1])||0,E,T,R,y;n?l!==Xo&&(T=d*m-_*g)&&(R=v*(m/T)+A*(-g/T)+(g*b-m*p)/T,y=v*(-_/T)+A*(d/T)-(d*b-_*p)/T,v=R,A=y):(E=um(t),v=E.x+(~M[0].indexOf("%")?v/100*E.width:v),A=E.y+(~(M[1]||M[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&a.smooth?(p=v-c,b=A-h,a.xOffset=f+(p*d+b*g)-p,a.yOffset=u+(p*_+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Dn]="0px 0px",o&&(Er(o,a,"xOrigin",c,v),Er(o,a,"yOrigin",h,A),Er(o,a,"xOffset",f,a.xOffset),Er(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},Yo=function(t,e){var n=t._gsap||new ku(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ni(t,Dn)||"0",h,f,u,d,_,g,m,p,b,M,v,A,E,T,R,y,x,L,N,F,P,Y,V,X,k,Q,I,st,At,Bt,q,nt;return h=f=u=g=m=p=b=M=v=0,d=_=1,n.svg=!!(t.getCTM&&fm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),T=nf(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Qu(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,E=n.yOrigin||0,T!==Xo&&(L=T[0],N=T[1],F=T[2],P=T[3],h=Y=T[4],f=V=T[5],T.length===6?(d=Math.sqrt(L*L+N*N),_=Math.sqrt(P*P+F*F),g=L||N?js(N,L)*ns:0,b=F||P?js(F,P)*ns+g:0,b&&(_*=Math.abs(Math.cos(b*eo))),n.svg&&(h-=A-(A*L+E*F),f-=E-(A*N+E*P))):(nt=T[6],Bt=T[7],I=T[8],st=T[9],At=T[10],q=T[11],h=T[12],f=T[13],u=T[14],R=js(nt,At),m=R*ns,R&&(y=Math.cos(-R),x=Math.sin(-R),X=Y*y+I*x,k=V*y+st*x,Q=nt*y+At*x,I=Y*-x+I*y,st=V*-x+st*y,At=nt*-x+At*y,q=Bt*-x+q*y,Y=X,V=k,nt=Q),R=js(-F,At),p=R*ns,R&&(y=Math.cos(-R),x=Math.sin(-R),X=L*y-I*x,k=N*y-st*x,Q=F*y-At*x,q=P*x+q*y,L=X,N=k,F=Q),R=js(N,L),g=R*ns,R&&(y=Math.cos(R),x=Math.sin(R),X=L*y+N*x,k=Y*y+V*x,N=N*y-L*x,V=V*y-Y*x,L=X,Y=k),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Ue(Math.sqrt(L*L+N*N+F*F)),_=Ue(Math.sqrt(V*V+nt*nt)),R=js(Y,V),b=Math.abs(R)>2e-4?R*ns:0,v=q?1/(q<0?-q:q):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!pm(ni(t,Le)),X&&t.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(d*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ue(d),n.scaleY=Ue(_),n.rotation=Ue(g)+a,n.rotationX=Ue(m)+a,n.rotationY=Ue(p)+a,n.skewX=b+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Dn]=El(c)),n.xOffset=n.yOffset=0,n.force3D=Ln.force3D,n.renderTransform=n.svg?db:hm?mm:fb,n.uncache=0,n},El=function(t){return(t=t.split(" "))[0]+" "+t[1]},Zu=function(t,e,n){var i=nn(e);return Ue(parseFloat(e)+parseFloat(Ar(t,"x",n+"px",i)))+i},fb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,mm(t,e)},ts="0deg",Wo="0px",es=") ",mm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,M=n.zOrigin,v="",A=p==="auto"&&t&&t!==1||p===!0;if(M&&(f!==ts||h!==ts)){var E=parseFloat(h)*eo,T=Math.sin(E),R=Math.cos(E),y;E=parseFloat(f)*eo,y=Math.cos(E),o=Zu(b,o,T*y*-M),a=Zu(b,a,-Math.sin(E)*-M),l=Zu(b,l,R*y*-M+M)}m!==Wo&&(v+="perspective("+m+es),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==Wo||a!==Wo||l!==Wo)&&(v+=l!==Wo||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+es),c!==ts&&(v+="rotate("+c+es),h!==ts&&(v+="rotateY("+h+es),f!==ts&&(v+="rotateX("+f+es),(u!==ts||d!==ts)&&(v+="skew("+u+", "+d+es),(_!==1||g!==1)&&(v+="scale("+_+", "+g+es),b.style[Le]=v||"translate(0, 0)"},db=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,M=parseFloat(o),v=parseFloat(a),A,E,T,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=eo,c*=eo,A=Math.cos(l)*f,E=Math.sin(l)*f,T=Math.sin(l-c)*-u,R=Math.cos(l-c)*u,c&&(h*=eo,y=Math.tan(c-h),y=Math.sqrt(1+y*y),T*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),A*=y,E*=y)),A=Ue(A),E=Ue(E),T=Ue(T),R=Ue(R)):(A=f,R=u,E=T=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=Ar(d,"x",o,"px"),v=Ar(d,"y",a,"px")),(_||g||m||p)&&(M=Ue(M+_-(_*A+g*T)+m),v=Ue(v+g-(_*E+g*R)+p)),(i||s)&&(y=d.getBBox(),M=Ue(M+i/100*y.width),v=Ue(v+s/100*y.height)),y="matrix("+A+","+E+","+T+","+R+","+M+","+v+")",d.setAttribute("transform",y),b&&(d.style[Le]=y)},pb=function(t,e,n,i,s){var o=360,a=Ze(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ns:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Qp)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Qp)%o-~~(c/o)*o)),t._pt=u=new vn(t._pt,e,n,i,c,KS),u.e=h,u.u="deg",t._props.push(n),u},sm=function(t,e){for(var n in e)t[n]=e[n];return t},mb=function(t,e,n){var i=sm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Le]=e,a=Yo(n,1),rs(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],o[Le]=e,a=Yo(n,1),o[Le]=c);for(l in tr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=nn(c),_=nn(h),f=d!==_?Ar(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new vn(t._pt,a,l,f,u-f,$u),t._pt.u=_||0,t._props.push(l));sm(a,i)};_n("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Tl[t>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(_){return ji(a,_,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(_,g){return d[_]=u[g]=u[g]||u[(g-1)/2|0]}),a.init(l,d,f)}});var rf={name:"css",register:Ku,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,u,d,_,g,m,p,b,M,v,A,E,T,R;ju||Ku(),this.styles=this.styles||cm(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Rn[g]&&Hu(g,e,n,i,t,s)))){if(d=typeof h,_=Tl[g],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Qs(h)),_)_(this,t,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Ki.lastIndex=0,Ki.test(c)||(m=nn(c),p=nn(h)),p?m!==p&&(c=Ar(t,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ze(c)&&~c.indexOf("random(")&&(c=Qs(c)),nn(c+"")||c==="auto"||(c+=Ln.units[g]||nn(ji(t,g))||""),(c+"").charAt(1)==="="&&(c=ji(t,g))):c=ji(t,g),u=parseFloat(c),b=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),f=parseFloat(h),g in Ri&&(g==="autoAlpha"&&(u===1&&ji(t,"visibility")==="hidden"&&f&&(u=0),R.push("visibility",0,a.visibility),Er(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ri[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in tr,M){if(this.styles.save(g),d==="string"&&h.substring(0,6)==="var(--"&&(h=ni(t,h.substring(4,h.indexOf(")"))),f=parseFloat(h)),v||(A=t._gsap,A.renderTransform&&!e.parseTransform||Yo(t,e.parseTransform),E=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new vn(this._pt,a,Le,0,1,A.renderTransform,A,0,-1),v.dep=1),g==="scale")this._pt=new vn(this._pt,A,"scaleY",A.scaleY,(b?Qr(A.scaleY,b+f):f)-A.scaleY||0,$u),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Dn,0,a[Dn]),h=hb(h),A.svg?Qu(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&Er(this,A,"zOrigin",A.zOrigin,p),Er(this,a,g,El(c),El(h)));continue}else if(g==="svgOrigin"){Qu(t,h,1,E,0,this);continue}else if(g in dm){pb(this,A,g,u,b?Qr(u,b+h):h);continue}else if(g==="smoothOrigin"){Er(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){mb(this,h,t);continue}}else g in a||(g=no(g)||g);if(M||(f||f===0)&&(u||u===0)&&!JS.test(h)&&g in a)m=(c+"").substr((u+"").length),f||(f=0),p=nn(h)||(g in Ln.units?Ln.units[g]:m),m!==p&&(u=Ar(t,g,c,p)),this._pt=new vn(this._pt,M?A:a,g,u,(b?Qr(u,b+f):f)-u,!M&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?jS:$u),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=QS);else if(g in a)cb.call(this,t,g,c,b?b+h:h);else if(g in t)this.add(t,g,c||t[g],b?b+h:h,i,s);else if(g!=="parseTransform"){yl(g,h);continue}M||(g in a?R.push(g,0,a[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),o.push(g)}}T&&qu(this)},render:function(t,e){if(e.tween._time||!tf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ji,aliases:Ri,getSetter:function(t,e,n){var i=Ri[e];return i&&i.indexOf(",")<0&&(e=i),e in tr&&e!==Dn&&(t._gsap.x||ji(t,"x"))?n&&Kp===n?e==="scale"?ib:nb:(Kp=n||{})&&(e==="scale"?rb:sb):t.style&&!xl(t.style[e])?tb:~e.indexOf("-")?eb:wl(t,e)},core:{_removeProperty:rs,_getMatrix:nf}};ln.utils.checkPrefix=no;ln.core.getStyleSaver=cm;(function(r,t,e,n){var i=_n(r+","+t+","+e,function(s){tr[s]=1});_n(t,function(s){Ln.units[s]="deg",dm[s]=1}),Ri[i[13]]=r+","+t,_n(n,function(s){var o=s.split(":");Ri[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ln.units[r]="px"});ln.registerPlugin(rf);var le=ln.registerPlugin(rf)||ln,xw=le.core.Tween;function gm(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function gb(r,t,e){return t&&gm(r.prototype,t),e&&gm(r,e),r}var rn,Rl,_b,Xn,Cr,Rr,ro,vm,ss,Zo,xm,er,_i,ym,Mm=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},Sm=1,io=[],ee=[],vi=[],$o=Date.now,sf=function(t,e){return e},vb=function(){var t=Zo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,vi),ee=n,vi=i,sf=function(o,a){return e[o](a)}},ir=function(t,e){return~vi.indexOf(t)&&vi[vi.indexOf(t)+1][e]},Jo=function(t){return!!~xm.indexOf(t)},yn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},xn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Al="scrollLeft",Cl="scrollTop",of=function(){return er&&er.isPressed||ee.cache++},Pl=function(t,e){var n=function i(s){if(s||s===0){Sm&&(Xn.history.scrollRestoration="manual");var o=er&&er.isPressed;s=i.v=Math.round(s)||(er&&er.iOS?1:0),t(s),i.cacheID=ee.cache,o&&sf("ss",s)}else(e||ee.cache!==i.cacheID||sf("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},cn={s:Al,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pl(function(r){return arguments.length?Xn.scrollTo(r,He.sc()):Xn.pageXOffset||Cr[Al]||Rr[Al]||ro[Al]||0})},He={s:Cl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:cn,sc:Pl(function(r){return arguments.length?Xn.scrollTo(cn.sc(),r):Xn.pageYOffset||Cr[Cl]||Rr[Cl]||ro[Cl]||0})},Mn=function(t,e){return(e&&e._ctx&&e._ctx.selector||rn.utils.toArray)(t)[0]||(typeof t=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},xb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},nr=function(t,e){var n=e.s,i=e.sc;Jo(t)&&(t=Cr.scrollingElement||Rr);var s=ee.indexOf(t),o=i===He.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+o]||yn(t,"scroll",of);var a=ee[s+o],l=a||(ee[s+o]=Pl(ir(t,n),!0)||(Jo(t)?i:Pl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=rn.getProperty(t,"scrollBehavior")==="smooth"),l},Il=function(t,e,n){var i=t,s=t,o=$o(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=$o();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(_){var g=a,m=s,p=$o();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:f,getVelocity:u}},qo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},_m=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},bm=function(){Zo=rn.core.globals().ScrollTrigger,Zo&&Zo.core&&vb()},wm=function(t){return rn=t||Mm(),!Rl&&rn&&typeof document<"u"&&document.body&&(Xn=window,Cr=document,Rr=Cr.documentElement,ro=Cr.body,xm=[Xn,Cr,Rr,ro],_b=rn.utils.clamp,ym=rn.core.context||function(){},ss="onpointerenter"in ro?"pointer":"mouse",vm=Oe.isTouch=Xn.matchMedia&&Xn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Xn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_i=Oe.eventTypes=("ontouchstart"in Rr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Rr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Sm=0},500),bm(),Rl=1),Rl};cn.op=He;ee.cache=0;var Oe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Rl||wm(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Zo||bm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,b=n.onDrag,M=n.onPress,v=n.onRelease,A=n.onRight,E=n.onLeft,T=n.onUp,R=n.onDown,y=n.onChangeX,x=n.onChangeY,L=n.onChange,N=n.onToggleX,F=n.onToggleY,P=n.onHover,Y=n.onHoverEnd,V=n.onMove,X=n.ignoreCheck,k=n.isNormalizer,Q=n.onGestureStart,I=n.onGestureEnd,st=n.onWheel,At=n.onEnable,Bt=n.onDisable,q=n.onClick,nt=n.scrollSpeed,gt=n.capture,rt=n.allowClicks,Mt=n.lockAxis,Ct=n.onLockAxis;this.target=a=Mn(a)||Rr,this.vars=n,d&&(d=rn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,nt=nt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Xn.getComputedStyle(ro).lineHeight)||22);var zt,tt,it,bt,U,qt,Dt,z=this,vt=0,Jt=0,Et=n.passive||!h&&n.passive!==!1,C=nr(a,cn),S=nr(a,He),G=C(),et=S(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&_i[0]==="pointerdown",J=Jo(a),dt=a.ownerDocument||Cr,ht=[0,0,0],_t=[0,0,0],Zt=0,ot=function(){return Zt=$o()},ct=function(It,Qt){return(z.event=It)&&d&&xb(It.target,d)||Qt&&j&&It.pointerType!=="touch"||X&&X(It,Qt)},Ft=function(){z._vx.reset(),z._vy.reset(),tt.pause(),f&&f(z)},Ot=function(){var It=z.deltaX=_m(ht),Qt=z.deltaY=_m(_t),xt=Math.abs(It)>=i,Wt=Math.abs(Qt)>=i;L&&(xt||Wt)&&L(z,It,Qt,ht,_t),xt&&(A&&z.deltaX>0&&A(z),E&&z.deltaX<0&&E(z),y&&y(z),N&&z.deltaX<0!=vt<0&&N(z),vt=z.deltaX,ht[0]=ht[1]=ht[2]=0),Wt&&(R&&z.deltaY>0&&R(z),T&&z.deltaY<0&&T(z),x&&x(z),F&&z.deltaY<0!=Jt<0&&F(z),Jt=z.deltaY,_t[0]=_t[1]=_t[2]=0),(bt||it)&&(V&&V(z),it&&(m&&it===1&&m(z),b&&b(z),it=0),bt=!1),qt&&!(qt=!1)&&Ct&&Ct(z),U&&(st(z),U=!1),zt=0},wt=function(It,Qt,xt){ht[xt]+=It,_t[xt]+=Qt,z._vx.update(It),z._vy.update(Qt),c?zt||(zt=requestAnimationFrame(Ot)):Ot()},Kt=function(It,Qt){Mt&&!Dt&&(z.axis=Dt=Math.abs(It)>Math.abs(Qt)?"x":"y",qt=!0),Dt!=="y"&&(ht[2]+=It,z._vx.update(It,!0)),Dt!=="x"&&(_t[2]+=Qt,z._vy.update(Qt,!0)),c?zt||(zt=requestAnimationFrame(Ot)):Ot()},kt=function(It){if(!ct(It,1)){It=qo(It,h);var Qt=It.clientX,xt=It.clientY,Wt=Qt-z.x,Lt=xt-z.y,Gt=z.isDragging;z.x=Qt,z.y=xt,(Gt||(Wt||Lt)&&(Math.abs(z.startX-Qt)>=s||Math.abs(z.startY-xt)>=s))&&(it=Gt?2:1,Gt||(z.isDragging=!0),Kt(Wt,Lt))}},ae=z.onPress=function(St){ct(St,1)||St&&St.button||(z.axis=Dt=null,tt.pause(),z.isPressed=!0,St=qo(St),vt=Jt=0,z.startX=z.x=St.clientX,z.startY=z.y=St.clientY,z._vx.reset(),z._vy.reset(),yn(k?a:dt,_i[1],kt,Et,!0),z.deltaX=z.deltaY=0,M&&M(z))},D=z.onRelease=function(St){if(!ct(St,1)){xn(k?a:dt,_i[1],kt,!0);var It=!isNaN(z.y-z.startY),Qt=z.isDragging,xt=Qt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Wt=qo(St);!xt&&It&&(z._vx.reset(),z._vy.reset(),h&&rt&&rn.delayedCall(.08,function(){if($o()-Zt>300&&!St.defaultPrevented){if(St.target.click)St.target.click();else if(dt.createEvent){var Lt=dt.createEvent("MouseEvents");Lt.initMouseEvent("click",!0,!0,Xn,1,Wt.screenX,Wt.screenY,Wt.clientX,Wt.clientY,!1,!1,!1,!1,0,null),St.target.dispatchEvent(Lt)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,f&&Qt&&!k&&tt.restart(!0),it&&Ot(),p&&Qt&&p(z),v&&v(z,xt)}},ft=function(It){return It.touches&&It.touches.length>1&&(z.isGesturing=!0)&&Q(It,z.isDragging)},$=function(){return(z.isGesturing=!1)||I(z)},K=function(It){if(!ct(It)){var Qt=C(),xt=S();wt((Qt-G)*nt,(xt-et)*nt,1),G=Qt,et=xt,f&&tt.restart(!0)}},ut=function(It){if(!ct(It)){It=qo(It,h),st&&(U=!0);var Qt=(It.deltaMode===1?l:It.deltaMode===2?Xn.innerHeight:1)*_;wt(It.deltaX*Qt,It.deltaY*Qt,0),f&&!k&&tt.restart(!0)}},pt=function(It){if(!ct(It)){var Qt=It.clientX,xt=It.clientY,Wt=Qt-z.x,Lt=xt-z.y;z.x=Qt,z.y=xt,bt=!0,f&&tt.restart(!0),(Wt||Lt)&&Kt(Wt,Lt)}},Vt=function(It){z.event=It,P(z)},ce=function(It){z.event=It,Y(z)},De=function(It){return ct(It)||qo(It,h)&&q(z)};tt=z._dc=rn.delayedCall(u||.25,Ft).pause(),z.deltaX=z.deltaY=0,z._vx=Il(0,50,!0),z._vy=Il(0,50,!0),z.scrollX=C,z.scrollY=S,z.isDragging=z.isGesturing=z.isPressed=!1,ym(this),z.enable=function(St){return z.isEnabled||(yn(J?dt:a,"scroll",of),o.indexOf("scroll")>=0&&yn(J?dt:a,"scroll",K,Et,gt),o.indexOf("wheel")>=0&&yn(a,"wheel",ut,Et,gt),(o.indexOf("touch")>=0&&vm||o.indexOf("pointer")>=0)&&(yn(a,_i[0],ae,Et,gt),yn(dt,_i[2],D),yn(dt,_i[3],D),rt&&yn(a,"click",ot,!0,!0),q&&yn(a,"click",De),Q&&yn(dt,"gesturestart",ft),I&&yn(dt,"gestureend",$),P&&yn(a,ss+"enter",Vt),Y&&yn(a,ss+"leave",ce),V&&yn(a,ss+"move",pt)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=bt=it=!1,z._vx.reset(),z._vy.reset(),G=C(),et=S(),St&&St.type&&ae(St),At&&At(z)),z},z.disable=function(){z.isEnabled&&(io.filter(function(St){return St!==z&&Jo(St.target)}).length||xn(J?dt:a,"scroll",of),z.isPressed&&(z._vx.reset(),z._vy.reset(),xn(k?a:dt,_i[1],kt,!0)),xn(J?dt:a,"scroll",K,gt),xn(a,"wheel",ut,gt),xn(a,_i[0],ae,gt),xn(dt,_i[2],D),xn(dt,_i[3],D),xn(a,"click",ot,!0),xn(a,"click",De),xn(dt,"gesturestart",ft),xn(dt,"gestureend",$),xn(a,ss+"enter",Vt),xn(a,ss+"leave",ce),xn(a,ss+"move",pt),z.isEnabled=z.isPressed=z.isDragging=!1,Bt&&Bt(z))},z.kill=z.revert=function(){z.disable();var St=io.indexOf(z);St>=0&&io.splice(St,1),er===z&&(er=0)},io.push(z),k&&Jo(a)&&(er=z),z.enable(g)},gb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Oe.version="3.13.0";Oe.create=function(r){return new Oe(r)};Oe.register=wm;Oe.getAll=function(){return io.slice()};Oe.getById=function(r){return io.filter(function(t){return t.vars.id===r})[0]};Mm()&&rn.registerPlugin(Oe);var Rt,ao,re,we,Zn,ge,Mf,ql,ca,ia,Qo,Ll,hn,Kl,pf,bn,Tm,Em,lo,Hm,af,Gm,Sn,mf,Wm,Xm,Pr,gf,Sf,co,bf,Zl,_f,lf,Dl=1,un=Date.now,cf=un(),si=0,jo=0,Am=function(t,e,n){var i=qn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Cm=function(t,e){return e&&(!qn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},yb=function r(){return jo&&requestAnimationFrame(r)},Rm=function(){return Kl=1},Pm=function(){return Kl=0},Pi=function(t){return t},ta=function(t){return Math.round(t*1e5)/1e5||0},Ym=function(){return typeof window<"u"},qm=function(){return Rt||Ym()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},us=function(t){return!!~Mf.indexOf(t)},Zm=function(t){return(t==="Height"?bf:re["inner"+t])||Zn["client"+t]||ge["client"+t]},$m=function(t){return ir(t,"getBoundingClientRect")||(us(t)?function(){return Yl.width=re.innerWidth,Yl.height=bf,Yl}:function(){return rr(t)})},Mb=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=ir(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Zm(s):t["client"+s])||0}},Sb=function(t,e){return!e||~vi.indexOf(t)?$m(t):function(){return Yl}},Ii=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=ir(t,n))?o()-$m(t)()[s]:us(t)?(Zn[n]||ge[n])-Zm(i):t[n]-t["offset"+i])},Nl=function(t,e){for(var n=0;n<lo.length;n+=3)(!e||~e.indexOf(lo[n+1]))&&t(lo[n],lo[n+1],lo[n+2])},qn=function(t){return typeof t=="string"},fn=function(t){return typeof t=="function"},ea=function(t){return typeof t=="number"},os=function(t){return typeof t=="object"},Ko=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},hf=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},so=Math.abs,Jm="left",Km="top",wf="right",Tf="bottom",ls="width",cs="height",ra="Right",sa="Left",oa="Top",aa="Bottom",Ge="padding",ii="margin",uo="Width",Ef="Height",$e="px",ri=function(t){return re.getComputedStyle(t)},bb=function(t){var e=ri(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Im=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},rr=function(t,e){var n=e&&ri(t)[pf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},$l=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Qm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},wb=function(t){return function(e){return Rt.utils.snap(Qm(t),e)}},Af=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Tb=function(t){return function(e,n){return Af(Qm(t))(e,n.direction)}},Ul=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ke=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ol=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Lm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fl={toggleActions:"play",anticipatePin:0},Jl={top:0,left:0,center:.5,bottom:1,right:1},Hl=function(t,e){if(qn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Jl?Jl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Bl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,_=we.createElement("div"),g=us(n)||ir(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?ge:n,b=t.indexOf("start")!==-1,M=b?c:h,v="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===He?wf:Tf)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=b,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=v,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Gl(_,0,i,b),_},Gl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+uo]=1,s["border"+a+uo]=0,s[n.p]=e+"px",Rt.set(t,s)},ne=[],vf={},ha,Dm=function(){return un()-si>34&&(ha||(ha=requestAnimationFrame(sr)))},oo=function(){(!Sn||!Sn.isPressed||Sn.startX>ge.clientWidth)&&(ee.cache++,Sn?ha||(ha=requestAnimationFrame(sr)):sr(),si||ds("scrollStart"),si=un())},uf=function(){Xm=re.innerWidth,Wm=re.innerHeight},na=function(t){ee.cache++,(t===!0||!hn&&!Gm&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!mf||Xm!==re.innerWidth||Math.abs(re.innerHeight-Wm)>re.innerHeight*.25))&&ql.restart(!0)},fs={},Eb=[],jm=function r(){return Ke(Xt,"scrollEnd",r)||as(!0)},ds=function(t){return fs[t]&&fs[t].map(function(e){return e()})||Eb},Yn=[],tg=function(t){for(var e=0;e<Yn.length;e+=5)(!t||Yn[e+4]&&Yn[e+4].query===t)&&(Yn[e].style.cssText=Yn[e+1],Yn[e].getBBox&&Yn[e].setAttribute("transform",Yn[e+2]||""),Yn[e+3].uncache=1)},Cf=function(t,e){var n;for(bn=0;bn<ne.length;bn++)n=ne[bn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Zl=!0,e&&tg(e),e||ds("revert")},eg=function(t,e){ee.cache++,(e||!wn)&&ee.forEach(function(n){return fn(n)&&n.cacheID++&&(n.rec=0)}),qn(t)&&(re.history.scrollRestoration=Sf=t)},wn,hs=0,Nm,Ab=function(){if(Nm!==hs){var t=Nm=hs;requestAnimationFrame(function(){return t===hs&&as(!0)})}},ng=function(){ge.appendChild(co),bf=!Sn&&co.offsetHeight||re.innerHeight,ge.removeChild(co)},Um=function(t){return ca(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},as=function(t,e){if(Zn=we.documentElement,ge=we.body,Mf=[re,we,Zn,ge],si&&!t&&!Zl){Qe(Xt,"scrollEnd",jm);return}ng(),wn=Xt.isRefreshing=!0,ee.forEach(function(i){return fn(i)&&++i.cacheID&&(i.rec=i())});var n=ds("refreshInit");Hm&&Xt.sort(),e||Cf(),ee.forEach(function(i){fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),Zl=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),_f=1,Um(!0),ne.forEach(function(i){var s=Ii(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Um(!1),_f=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),eg(Sf,1),ql.pause(),hs++,wn=2,sr(2),ne.forEach(function(i){return fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=Xt.isRefreshing=!1,ds("refresh")},xf=0,Wl=1,la,sr=function(t){if(t===2||!wn&&!Zl){Xt.isUpdating=!0,la&&la.update(0);var e=ne.length,n=un(),i=n-cf>=50,s=e&&ne[0].scroll();if(Wl=xf>s?-1:1,wn||(xf=s),i&&(si&&!Kl&&n-si>200&&(si=0,ds("scrollEnd")),Qo=cf,cf=n),Wl<0){for(bn=e;bn-- >0;)ne[bn]&&ne[bn].update(0,i);Wl=1}else for(bn=0;bn<e;bn++)ne[bn]&&ne[bn].update(0,i);Xt.isUpdating=!1}ha=0},yf=[Jm,Km,Tf,wf,ii+aa,ii+ra,ii+oa,ii+sa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Xl=yf.concat([ls,cs,"boxSizing","max"+uo,"max"+Ef,"position",ii,Ge,Ge+oa,Ge+ra,Ge+aa,Ge+sa]),Cb=function(t,e,n){ho(n);var i=t._gsap;if(i.spacerIsNative)ho(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},ff=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=yf.length,o=e.style,a=t.style,l;s--;)l=yf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Tf]=a[wf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ls]=$l(t,cn)+$e,o[cs]=$l(t,He)+$e,o[Ge]=a[ii]=a[Km]=a[Jm]="0",ho(i),a[ls]=a["max"+uo]=n[ls],a[cs]=a["max"+Ef]=n[cs],a[Ge]=n[Ge],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Rb=/([A-Z])/g,ho=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Rb,"-$1").toLowerCase())}},zl=function(t){for(var e=Xl.length,n=t.style,i=[],s=0;s<e;s++)i.push(Xl[s],n[Xl[s]]);return i.t=t,i},Pb=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Yl={left:0,top:0},Om=function(t,e,n,i,s,o,a,l,c,h,f,u,d,_){fn(t)&&(t=t(l)),qn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Hl("0"+t.substr(3),n):0));var g=d?d.time():0,m,p,b;if(d&&d.seek(0),isNaN(t)||(t=+t),ea(t))d&&(t=Rt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),a&&Gl(a,n,i,!0);else{fn(e)&&(e=e(l));var M=(t||"0").split(" "),v,A,E,T;b=Mn(e,l)||ge,v=rr(b)||{},(!v||!v.left&&!v.top)&&ri(b).display==="none"&&(T=b.style.display,b.style.display="block",v=rr(b),T?b.style.display=T:b.style.removeProperty("display")),A=Hl(M[0],v[i.d]),E=Hl(M[1]||"0",n),t=v[i.p]-c[i.p]-h+A+s-E,a&&Gl(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var R=t+n,y=o._isStart;m="scroll"+i.d2,Gl(o,R,i,y&&R>20||!y&&(f?Math.max(ge[m],Zn[m]):o.parentNode[m])<=R+1),f&&(c=rr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+$e))}return d&&b&&(m=rr(b),d.seek(u),p=rr(b),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*u),d&&d.seek(g),d?t:Math.round(t)},Ib=/(webkit|moz|length|cssText|inset)/i,Fm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ge){t._stOrig=s.cssText,a=ri(t);for(o in a)!+o&&!Ib.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},ig=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},kl=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},Bm=function(t,e){var n=nr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,_={};c=c||n();var g=ig(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&sr()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=Rt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qe(t,"wheel",n.wheelHandler),Xt.isTouch&&Qe(t,"touchmove",n.wheelHandler),s},Xt=function(){function r(e,n){ao||r.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),gf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!jo){this.update=this.refresh=this.kill=Pi;return}n=Im(qn(n)||ea(n)||n.nodeType?{trigger:n}:n,Fl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,b=s.onSnapComplete,M=s.once,v=s.snap,A=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?cn:He,L=!f&&f!==0,N=Mn(n.scroller||re),F=Rt.core.getCache(N),P=us(N),Y=("pinType"in n?n.pinType:ir(N,"pinType")||P&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=L&&n.toggleActions.split(" "),k="markers"in n?n.markers:Fl.markers,Q=P?0:parseFloat(ri(N)["border"+x.p2+uo])||0,I=this,st=n.onRefreshInit&&function(){return n.onRefreshInit(I)},At=Mb(N,P,x),Bt=Sb(N,P),q=0,nt=0,gt=0,rt=nr(N,x),Mt,Ct,zt,tt,it,bt,U,qt,Dt,z,vt,Jt,Et,C,S,G,et,j,J,dt,ht,_t,Zt,ot,ct,Ft,Ot,wt,Kt,kt,ae,D,ft,$,K,ut,pt,Vt,ce;if(I._startClamp=I._endClamp=!1,I._dir=x,m*=45,I.scroller=N,I.scroll=T?T.time.bind(T):rt,tt=rt(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Hm=1,n.refreshPriority===-9999&&(la=I)),F.tweenScroll=F.tweenScroll||{top:Bm(N,He),left:Bm(N,cn)},I.tweenTo=Mt=F.tweenScroll[x.p],I.scrubDuration=function(xt){ft=ea(xt)&&xt,ft?D?D.duration(xt):D=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ft,paused:!0,onComplete:function(){return p&&p(I)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(f),kt=0,l||(l=i.vars.id)),v&&((!os(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ge.style&&Rt.set(P?[ge,Zn]:N,{scrollBehavior:"auto"}),ee.forEach(function(xt){return fn(xt)&&xt.target===(P?we.scrollingElement||Zn:N)&&(xt.smooth=!1)}),zt=fn(v.snapTo)?v.snapTo:v.snapTo==="labels"?wb(i):v.snapTo==="labelsDirectional"?Tb(i):v.directional!==!1?function(xt,Wt){return Af(v.snapTo)(xt,un()-nt<500?0:Wt.direction)}:Rt.utils.snap(v.snapTo),$=v.duration||{min:.1,max:2},$=os($)?ia($.min,$.max):ia($,$),K=Rt.delayedCall(v.delay||ft/2||.1,function(){var xt=rt(),Wt=un()-nt<500,Lt=Mt.tween;if((Wt||Math.abs(I.getVelocity())<10)&&!Lt&&!Kl&&q!==xt){var Gt=(xt-bt)/C,Fe=i&&!L?i.totalProgress():Gt,ie=Wt?0:(Fe-ae)/(un()-Qo)*1e3||0,be=Rt.utils.clamp(-Gt,1-Gt,so(ie/2)*ie/.185),We=Gt+(v.inertia===!1?0:be),ve,xe,ue=v,Un=ue.onStart,Te=ue.onInterrupt,dn=ue.onComplete;if(ve=zt(We,I),ea(ve)||(ve=We),xe=Math.max(0,Math.round(bt+ve*C)),xt<=U&&xt>=bt&&xe!==xt){if(Lt&&!Lt._initted&&Lt.data<=so(xe-xt))return;v.inertia===!1&&(be=ve-Gt),Mt(xe,{duration:$(so(Math.max(so(We-Fe),so(ve-Fe))*.185/ie/.05||0)),ease:v.ease||"power3",data:so(xe-xt),onInterrupt:function(){return K.restart(!0)&&Te&&Te(I)},onComplete:function(){I.update(),q=rt(),i&&!L&&(D?D.resetTo("totalProgress",ve,i._tTime/i._tDur):i.progress(ve)),kt=ae=i&&!L?i.totalProgress():I.progress,b&&b(I),dn&&dn(I)}},xt,be*C,xe-xt-be*C),Un&&Un(I,Mt.tween)}}else I.isActive&&q!==xt&&K.restart(!0)}).pause()),l&&(vf[l]=I),u=I.trigger=Mn(u||d!==!0&&d),ce=u&&u._gsap&&u._gsap.stRevert,ce&&(ce=ce(I)),d=d===!0?u:Mn(d),qn(a)&&(a={targets:u,className:a}),d&&(_===!1||_===ii||(_=!_&&d.parentNode&&d.parentNode.style&&ri(d.parentNode).display==="flex"?!1:Ge),I.pin=d,Ct=Rt.core.getCache(d),Ct.spacer?S=Ct.pinState:(E&&(E=Mn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ct.spacerIsNative=!!E,E&&(Ct.spacerState=zl(E))),Ct.spacer=j=E||we.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),Ct.pinState=S=zl(d)),n.force3D!==!1&&Rt.set(d,{force3D:!0}),I.spacer=j=Ct.spacer,Kt=ri(d),ot=Kt[_+x.os2],dt=Rt.getProperty(d),ht=Rt.quickSetter(d,x.a,$e),ff(d,j,Kt),et=zl(d)),k){Jt=os(k)?Im(k,Lm):Lm,z=Bl("scroller-start",l,N,x,Jt,0),vt=Bl("scroller-end",l,N,x,Jt,0,z),J=z["offset"+x.op.d2];var De=Mn(ir(N,"content")||N);qt=this.markerStart=Bl("start",l,De,x,Jt,J,0,T),Dt=this.markerEnd=Bl("end",l,De,x,Jt,J,0,T),T&&(Vt=Rt.quickSetter([qt,Dt],x.a,$e)),!Y&&!(vi.length&&ir(N,"fixedMarkers")===!0)&&(bb(P?ge:N),Rt.set([z,vt],{force3D:!0}),Ft=Rt.quickSetter(z,x.a,$e),wt=Rt.quickSetter(vt,x.a,$e))}if(T){var St=T.vars.onUpdate,It=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){I.update(0,0,1),St&&St.apply(T,It||[])})}if(I.previous=function(){return ne[ne.indexOf(I)-1]},I.next=function(){return ne[ne.indexOf(I)+1]},I.revert=function(xt,Wt){if(!Wt)return I.kill(!0);var Lt=xt!==!1||!I.enabled,Gt=hn;Lt!==I.isReverted&&(Lt&&(ut=Math.max(rt(),I.scroll.rec||0),gt=I.progress,pt=i&&i.progress()),qt&&[qt,Dt,z,vt].forEach(function(Fe){return Fe.style.display=Lt?"none":"block"}),Lt&&(hn=I,I.update(Lt)),d&&(!A||!I.isActive)&&(Lt?Cb(d,j,S):ff(d,j,ri(d),ct)),Lt||I.update(Lt),hn=Gt,I.isReverted=Lt)},I.refresh=function(xt,Wt,Lt,Gt){if(!((hn||!I.enabled)&&!Wt)){if(d&&xt&&si){Qe(r,"scrollEnd",jm);return}!wn&&st&&st(I),hn=I,Mt.tween&&!Lt&&(Mt.tween.kill(),Mt.tween=0),D&&D.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Pe){return Pe.vars.immediateRender&&Pe.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Fe=At(),ie=Bt(),be=T?T.duration():Ii(N,x),We=C<=.01||!C,ve=0,xe=Gt||0,ue=os(Lt)?Lt.end:n.end,Un=n.endTrigger||u,Te=os(Lt)?Lt.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),dn=I.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,I),w=u&&Math.max(0,ne.indexOf(I))||0,O=w,H,W,B,at,lt,mt,Tt,Ht,Yt,Pt,$t,he,fe;for(k&&os(Lt)&&(he=Rt.getProperty(z,x.p),fe=Rt.getProperty(vt,x.p));O-- >0;)mt=ne[O],mt.end||mt.refresh(0,1)||(hn=I),Tt=mt.pin,Tt&&(Tt===u||Tt===d||Tt===dn)&&!mt.isReverted&&(Pt||(Pt=[]),Pt.unshift(mt),mt.revert(!0,!0)),mt!==ne[O]&&(w--,O--);for(fn(Te)&&(Te=Te(I)),Te=Am(Te,"start",I),bt=Om(Te,u,Fe,x,rt(),qt,z,I,ie,Q,Y,be,T,I._startClamp&&"_startClamp")||(d?-.001:0),fn(ue)&&(ue=ue(I)),qn(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(qn(Te)?Te.split(" ")[0]:"")+ue:(ve=Hl(ue.substr(2),Fe),ue=qn(Te)?Te:(T?Rt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,bt):bt)+ve,Un=u)),ue=Am(ue,"end",I),U=Math.max(bt,Om(ue||(Un?"100% 0":be),Un,Fe,x,rt()+ve,Dt,vt,I,ie,Q,Y,be,T,I._endClamp&&"_endClamp"))||-.001,ve=0,O=w;O--;)mt=ne[O],Tt=mt.pin,Tt&&mt.start-mt._pinPush<=bt&&!T&&mt.end>0&&(H=mt.end-(I._startClamp?Math.max(0,mt.start):mt.start),(Tt===u&&mt.start-mt._pinPush<bt||Tt===dn)&&isNaN(Te)&&(ve+=H*(1-mt.progress)),Tt===d&&(xe+=H));if(bt+=ve,U+=ve,I._startClamp&&(I._startClamp+=ve),I._endClamp&&!wn&&(I._endClamp=U||-.001,U=Math.min(U,Ii(N,x))),C=U-bt||(bt-=.01)&&.001,We&&(gt=Rt.utils.clamp(0,1,Rt.utils.normalize(bt,U,ut))),I._pinPush=xe,qt&&ve&&(H={},H[x.a]="+="+ve,dn&&(H[x.p]="-="+rt()),Rt.set([qt,Dt],H)),d&&!(_f&&I.end>=Ii(N,x)))H=ri(d),at=x===He,B=rt(),_t=parseFloat(dt(x.a))+xe,!be&&U>1&&($t=(P?we.scrollingElement||Zn:N).style,$t={style:$t,value:$t["overflow"+x.a.toUpperCase()]},P&&ri(ge)["overflow"+x.a.toUpperCase()]!=="scroll"&&($t.style["overflow"+x.a.toUpperCase()]="scroll")),ff(d,j,H),et=zl(d),W=rr(d,!0),Ht=Y&&nr(N,at?cn:He)(),_?(ct=[_+x.os2,C+xe+$e],ct.t=j,O=_===Ge?$l(d,x)+C+xe:0,O&&(ct.push(x.d,O+$e),j.style.flexBasis!=="auto"&&(j.style.flexBasis=O+$e)),ho(ct),dn&&ne.forEach(function(Pe){Pe.pin===dn&&Pe.vars.pinSpacing!==!1&&(Pe._subPinOffset=!0)}),Y&&rt(ut)):(O=$l(d,x),O&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=O+$e)),Y&&(lt={top:W.top+(at?B-bt:Ht)+$e,left:W.left+(at?Ht:B-bt)+$e,boxSizing:"border-box",position:"fixed"},lt[ls]=lt["max"+uo]=Math.ceil(W.width)+$e,lt[cs]=lt["max"+Ef]=Math.ceil(W.height)+$e,lt[ii]=lt[ii+oa]=lt[ii+ra]=lt[ii+aa]=lt[ii+sa]="0",lt[Ge]=H[Ge],lt[Ge+oa]=H[Ge+oa],lt[Ge+ra]=H[Ge+ra],lt[Ge+aa]=H[Ge+aa],lt[Ge+sa]=H[Ge+sa],G=Pb(S,lt,A),wn&&rt(0)),i?(Yt=i._initted,af(1),i.render(i.duration(),!0,!0),Zt=dt(x.a)-_t+C+xe,Ot=Math.abs(C-Zt)>1,Y&&Ot&&G.splice(G.length-2,2),i.render(0,!0,!0),Yt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),af(0)):Zt=C,$t&&($t.value?$t.style["overflow"+x.a.toUpperCase()]=$t.value:$t.style.removeProperty("overflow-"+x.a));else if(u&&rt()&&!T)for(W=u.parentNode;W&&W!==ge;)W._pinOffset&&(bt-=W._pinOffset,U-=W._pinOffset),W=W.parentNode;Pt&&Pt.forEach(function(Pe){return Pe.revert(!1,!0)}),I.start=bt,I.end=U,tt=it=wn?ut:rt(),!T&&!wn&&(tt<ut&&rt(ut),I.scroll.rec=0),I.revert(!1,!0),nt=un(),K&&(q=-1,K.restart(!0)),hn=0,i&&L&&(i._initted||pt)&&i.progress()!==pt&&i.progress(pt||0,!0).render(i.time(),!0,!0),(We||gt!==I.progress||T||g||i&&!i._initted)&&(i&&!L&&(i._initted||gt||i.vars.immediateRender!==!1)&&i.totalProgress(T&&bt<-.001&&!gt?Rt.utils.normalize(bt,U,0):gt,!0),I.progress=We||(tt-bt)/C===gt?0:gt),d&&_&&(j._pinOffset=Math.round(I.progress*Zt)),D&&D.invalidate(),isNaN(he)||(he-=Rt.getProperty(z,x.p),fe-=Rt.getProperty(vt,x.p),kl(z,x,he),kl(qt,x,he-(Gt||0)),kl(vt,x,fe),kl(Dt,x,fe-(Gt||0))),We&&!wn&&I.update(),h&&!wn&&!Et&&(Et=!0,h(I),Et=!1)}},I.getVelocity=function(){return(rt()-it)/(un()-Qo)*1e3||0},I.endAnimation=function(){Ko(I.callbackAnimation),i&&(D?D.progress(1):i.paused()?L||Ko(i,I.direction<0,1):Ko(i,i.reversed()))},I.labelToScroll=function(xt){return i&&i.labels&&(bt||I.refresh()||bt)+i.labels[xt]/i.duration()*C||0},I.getTrailing=function(xt){var Wt=ne.indexOf(I),Lt=I.direction>0?ne.slice(0,Wt).reverse():ne.slice(Wt+1);return(qn(xt)?Lt.filter(function(Gt){return Gt.vars.preventOverlaps===xt}):Lt).filter(function(Gt){return I.direction>0?Gt.end<=bt:Gt.start>=U})},I.update=function(xt,Wt,Lt){if(!(T&&!Lt&&!xt)){var Gt=wn===!0?ut:I.scroll(),Fe=xt?0:(Gt-bt)/C,ie=Fe<0?0:Fe>1?1:Fe||0,be=I.progress,We,ve,xe,ue,Un,Te,dn,w;if(Wt&&(it=tt,tt=T?rt():Gt,v&&(ae=kt,kt=i&&!L?i.totalProgress():ie)),m&&d&&!hn&&!Dl&&si&&(!ie&&bt<Gt+(Gt-it)/(un()-Qo)*m?ie=1e-4:ie===1&&U>Gt+(Gt-it)/(un()-Qo)*m&&(ie=.9999)),ie!==be&&I.enabled){if(We=I.isActive=!!ie&&ie<1,ve=!!be&&be<1,Te=We!==ve,Un=Te||!!ie!=!!be,I.direction=ie>be?1:-1,I.progress=ie,Un&&!hn&&(xe=ie&&!be?0:ie===1?1:be===1?2:3,L&&(ue=!Te&&X[xe+1]!=="none"&&X[xe+1]||X[xe],w=i&&(ue==="complete"||ue==="reset"||ue in i))),y&&(Te||w)&&(w||f||!i)&&(fn(y)?y(I):I.getTrailing(y).forEach(function(B){return B.endAnimation()})),L||(D&&!hn&&!Dl?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",ie,i._tTime/i._tDur):(D.vars.totalProgress=ie,D.invalidate().restart())):i&&i.totalProgress(ie,!!(hn&&(nt||xt)))),d){if(xt&&_&&(j.style[_+x.os2]=ot),!Y)ht(ta(_t+Zt*ie));else if(Un){if(dn=!xt&&ie>be&&U+1>Gt&&Gt+1>=Ii(N,x),A)if(!xt&&(We||dn)){var O=rr(d,!0),H=Gt-bt;Fm(d,ge,O.top+(x===He?H:0)+$e,O.left+(x===He?0:H)+$e)}else Fm(d,j);ho(We||dn?G:et),Ot&&ie<1&&We||ht(_t+(ie===1&&!dn?Zt:0))}}v&&!Mt.tween&&!hn&&!Dl&&K.restart(!0),a&&(Te||M&&ie&&(ie<1||!lf))&&ca(a.targets).forEach(function(B){return B.classList[We||M?"add":"remove"](a.className)}),o&&!L&&!xt&&o(I),Un&&!hn?(L&&(w&&(ue==="complete"?i.pause().totalProgress(1):ue==="reset"?i.restart(!0).pause():ue==="restart"?i.restart(!0):i[ue]()),o&&o(I)),(Te||!lf)&&(c&&Te&&hf(I,c),V[xe]&&hf(I,V[xe]),M&&(ie===1?I.kill(!1,1):V[xe]=0),Te||(xe=ie===1?1:3,V[xe]&&hf(I,V[xe]))),R&&!We&&Math.abs(I.getVelocity())>(ea(R)?R:2500)&&(Ko(I.callbackAnimation),D?D.progress(1):Ko(i,ue==="reverse"?1:!ie,1))):L&&o&&!hn&&o(I)}if(wt){var W=T?Gt/T.duration()*(T._caScrollDist||0):Gt;Ft(W+(z._isFlipped?1:0)),wt(W)}Vt&&Vt(-Gt/T.duration()*(T._caScrollDist||0))}},I.enable=function(xt,Wt){I.enabled||(I.enabled=!0,Qe(N,"resize",na),P||Qe(N,"scroll",oo),st&&Qe(r,"refreshInit",st),xt!==!1&&(I.progress=gt=0,tt=it=q=rt()),Wt!==!1&&I.refresh())},I.getTween=function(xt){return xt&&Mt?Mt.tween:D},I.setPositions=function(xt,Wt,Lt,Gt){if(T){var Fe=T.scrollTrigger,ie=T.duration(),be=Fe.end-Fe.start;xt=Fe.start+be*xt/ie,Wt=Fe.start+be*Wt/ie}I.refresh(!1,!1,{start:Cm(xt,Lt&&!!I._startClamp),end:Cm(Wt,Lt&&!!I._endClamp)},Gt),I.update()},I.adjustPinSpacing=function(xt){if(ct&&xt){var Wt=ct.indexOf(x.d)+1;ct[Wt]=parseFloat(ct[Wt])+xt+$e,ct[1]=parseFloat(ct[1])+xt+$e,ho(ct)}},I.disable=function(xt,Wt){if(I.enabled&&(xt!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Wt||D&&D.pause(),ut=0,Ct&&(Ct.uncache=1),st&&Ke(r,"refreshInit",st),K&&(K.pause(),Mt.tween&&Mt.tween.kill()&&(Mt.tween=0)),!P)){for(var Lt=ne.length;Lt--;)if(ne[Lt].scroller===N&&ne[Lt]!==I)return;Ke(N,"resize",na),P||Ke(N,"scroll",oo)}},I.kill=function(xt,Wt){I.disable(xt,Wt),D&&!Wt&&D.kill(),l&&delete vf[l];var Lt=ne.indexOf(I);Lt>=0&&ne.splice(Lt,1),Lt===bn&&Wl>0&&bn--,Lt=0,ne.forEach(function(Gt){return Gt.scroller===I.scroller&&(Lt=1)}),Lt||wn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,xt&&i.revert({kill:!1}),Wt||i.kill()),qt&&[qt,Dt,z,vt].forEach(function(Gt){return Gt.parentNode&&Gt.parentNode.removeChild(Gt)}),la===I&&(la=0),d&&(Ct&&(Ct.uncache=1),Lt=0,ne.forEach(function(Gt){return Gt.pin===d&&Lt++}),Lt||(Ct.spacer=0)),n.onKill&&n.onKill(I)},ne.push(I),I.enable(!1,!1),ce&&ce(I),i&&i.add&&!C){var Qt=I.update;I.update=function(){I.update=Qt,ee.cache++,bt||U||I.refresh()},Rt.delayedCall(.01,I.update),C=.01,bt=U=0}else I.refresh();d&&Ab()},r.register=function(n){return ao||(Rt=n||qm(),Ym()&&window.document&&r.enable(),ao=jo),ao},r.defaults=function(n){if(n)for(var i in n)Fl[i]=n[i];return Fl},r.disable=function(n,i){jo=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),Ke(re,"wheel",oo),Ke(we,"scroll",oo),clearInterval(Ll),Ke(we,"touchcancel",Pi),Ke(ge,"touchstart",Pi),Ul(Ke,we,"pointerdown,touchstart,mousedown",Rm),Ul(Ke,we,"pointerup,touchend,mouseup",Pm),ql.kill(),Nl(Ke);for(var s=0;s<ee.length;s+=3)Ol(Ke,ee[s],ee[s+1]),Ol(Ke,ee[s],ee[s+2])},r.enable=function(){if(re=window,we=document,Zn=we.documentElement,ge=we.body,Rt&&(ca=Rt.utils.toArray,ia=Rt.utils.clamp,gf=Rt.core.context||Pi,af=Rt.core.suppressOverwrites||Pi,Sf=re.history.scrollRestoration||"auto",xf=re.pageYOffset||0,Rt.core.globals("ScrollTrigger",r),ge)){jo=1,co=document.createElement("div"),co.style.height="100vh",co.style.position="absolute",ng(),yb(),Oe.register(Rt),r.isTouch=Oe.isTouch,Pr=Oe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),mf=Oe.isTouch===1,Qe(re,"wheel",oo),Mf=[re,we,Zn,ge],Rt.matchMedia?(r.matchMedia=function(c){var h=Rt.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},Rt.addEventListener("matchMediaInit",function(){return Cf()}),Rt.addEventListener("matchMediaRevert",function(){return tg()}),Rt.addEventListener("matchMedia",function(){as(0,1),ds("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return uf(),uf})):console.warn("Requires GSAP 3.11.0 or later"),uf(),Qe(we,"scroll",oo);var n=ge.hasAttribute("style"),i=ge.style,s=i.borderTopStyle,o=Rt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=rr(ge),He.m=Math.round(a.top+He.sc())||0,cn.m=Math.round(a.left+cn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ge.setAttribute("style",""),ge.removeAttribute("style")),Ll=setInterval(Dm,250),Rt.delayedCall(.5,function(){return Dl=0}),Qe(we,"touchcancel",Pi),Qe(ge,"touchstart",Pi),Ul(Qe,we,"pointerdown,touchstart,mousedown",Rm),Ul(Qe,we,"pointerup,touchend,mouseup",Pm),pf=Rt.utils.checkPrefix("transform"),Xl.push(pf),ao=un(),ql=Rt.delayedCall(.2,as).pause(),lo=[we,"visibilitychange",function(){var c=re.innerWidth,h=re.innerHeight;we.hidden?(Tm=c,Em=h):(Tm!==c||Em!==h)&&na()},we,"DOMContentLoaded",as,re,"load",as,re,"resize",na],Nl(Qe),ne.forEach(function(c){return c.enable(0,1)}),l=0;l<ee.length;l+=3)Ol(Ke,ee[l],ee[l+1]),Ol(Ke,ee[l],ee[l+2])}},r.config=function(n){"limitCallbacks"in n&&(lf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ll)||(Ll=i)&&setInterval(Dm,i),"ignoreMobileResize"in n&&(mf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Nl(Ke)||Nl(Qe,n.autoRefreshEvents||"none"),Gm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Mn(n),o=ee.indexOf(s),a=us(s);~o&&ee.splice(o,a?6:2),i&&(a?vi.unshift(re,i,ge,i,Zn,i):vi.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(qn(n)?Mn(n):n).getBoundingClientRect(),a=o[s?ls:cs]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[s?ls:cs],l=i==null?a/2:i in Jl?Jl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=fs.killAll||[];fs={},i.forEach(function(s){return s()})}},r}();Xt.version="3.13.0";Xt.saveStyles=function(r){return r?ca(r).forEach(function(t){if(t&&t.style){var e=Yn.indexOf(t);e>=0&&Yn.splice(e,5),Yn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),gf())}}):Yn};Xt.revert=function(r,t){return Cf(!r,t)};Xt.create=function(r,t){return new Xt(r,t)};Xt.refresh=function(r){return r?na(!0):(ao||Xt.register())&&as(!0)};Xt.update=function(r){return++ee.cache&&sr(r===!0?2:0)};Xt.clearScrollMemory=eg;Xt.maxScroll=function(r,t){return Ii(r,t?cn:He)};Xt.getScrollFunc=function(r,t){return nr(Mn(r),t?cn:He)};Xt.getById=function(r){return vf[r]};Xt.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Xt.isScrolling=function(){return!!si};Xt.snapDirectional=Af;Xt.addEventListener=function(r,t){var e=fs[r]||(fs[r]=[]);~e.indexOf(t)||e.push(t)};Xt.removeEventListener=function(r,t){var e=fs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Xt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],u=[],d=Rt.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),u.push(_),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&fn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return fn(s)&&(s=s(),Qe(Xt,"refresh",function(){return s=t.batchMax()})),ca(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Xt.create(c))}),e};var zm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},df=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Oe.isTouch?" pinch-zoom":""):"none",t===Zn&&r(ge,e)},Vl={auto:1,scroll:1},Lb=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Rt.core.getCache(s),a=un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ge&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Vl[(l=ri(s)).overflowY]||Vl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!us(s)&&(Vl[(l=ri(s)).overflowY]||Vl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},rg=function(t,e,n,i){return Oe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Lb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qe(we,Oe.eventTypes[0],Vm,!1,!0)},onDisable:function(){return Ke(we,Oe.eventTypes[0],Vm,!0)}})},Db=/(input|label|select|textarea)/i,km,Vm=function(t){var e=Db.test(t.target.tagName);(e||km)&&(t._gsapAllow=!0,km=e)},Nb=function(t){os(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Mn(t.target)||Zn,h=Rt.core.globals().ScrollSmoother,f=h&&h.get(),u=Pr&&(t.content&&Mn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=nr(c,He),_=nr(c,cn),g=1,m=(Oe.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,p=0,b=fn(i)?function(){return i(a)}:function(){return i||2.8},M,v,A=rg(c,t.type,!0,s),E=function(){return v=!1},T=Pi,R=Pi,y=function(){l=Ii(c,He),R=ia(Pr?1:0,l),n&&(T=ia(0,Ii(c,cn))),M=hs},x=function(){u._gsap.y=ta(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(E);var k=ta(a.deltaY/2),Q=R(d.v-k);if(u&&Q!==d.v+d.offset){d.offset=Q-d.v;var I=ta((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",u._gsap.y=I+"px",d.cacheID=ee.cache,sr()}return!0}d.offset&&x(),v=!0},N,F,P,Y,V=function(){y(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return u&&Rt.set(u,{y:"+=0"}),t.ignoreCheck=function(X){return Pr&&X.type==="touchmove"&&L(X)||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){v=!1;var X=g;g=ta((re.visualViewport&&re.visualViewport.scale||1)/m),N.pause(),X!==g&&df(c,g>1.01?!0:n?!1:"x"),F=_(),P=d(),y(),M=hs},t.onRelease=t.onGestureStart=function(X,k){if(d.offset&&x(),!k)Y.restart(!0);else{ee.cache++;var Q=b(),I,st;n&&(I=_(),st=I+Q*.05*-X.velocityX/.227,Q*=zm(_,I,st,Ii(c,cn)),N.vars.scrollX=T(st)),I=d(),st=I+Q*.05*-X.velocityY/.227,Q*=zm(d,I,st,Ii(c,He)),N.vars.scrollY=R(st),N.invalidate().duration(Q).play(.01),(Pr&&N.vars.scrollY>=l||I>=l-1)&&Rt.to({},{onUpdate:V,duration:Q})}o&&o(X)},t.onWheel=function(){N._ts&&N.pause(),un()-p>1e3&&(M=0,p=un())},t.onChange=function(X,k,Q,I,st){if(hs!==M&&y(),k&&n&&_(T(I[2]===k?F+(X.startX-X.x):_()+k-I[1])),Q){d.offset&&x();var At=st[2]===Q,Bt=At?P+X.startY-X.y:d()+Q-st[1],q=R(Bt);At&&Bt!==q&&(P+=q-Bt),d(q)}(Q||k)&&sr()},t.onEnable=function(){df(c,n?!1:"x"),Xt.addEventListener("refresh",V),Qe(re,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){df(c,!0),Ke(re,"resize",V),Xt.removeEventListener("refresh",V),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Oe(t),a.iOS=Pr,Pr&&!d()&&d(1),Pr&&Rt.ticker.add(Pi),Y=a._dc,N=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ig(d,d(),function(){return N.pause()})},onUpdate:sr,onComplete:Y.vars.onComplete}),a};Xt.sort=function(r){if(fn(r))return ne.sort(r);var t=re.pageYOffset||0;return Xt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+re.innerHeight}),ne.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Xt.observe=function(r){return new Oe(r)};Xt.normalizeScroll=function(r){if(typeof r>"u")return Sn;if(r===!0&&Sn)return Sn.enable();if(r===!1){Sn&&Sn.kill(),Sn=r;return}var t=r instanceof Oe?r:Nb(r);return Sn&&Sn.target===t.target&&Sn.kill(),us(t.target)&&(Sn=t),t};Xt.core={_getVelocityProp:Il,_inputObserver:rg,_scrollers:ee,_proxies:vi,bridge:{ss:function(){si||ds("scrollStart"),si=un()},ref:function(){return hn}}};qm()&&Rt.registerPlugin(Xt);var ua,fo,Pf,Ub=()=>Pf||fa.register(window.gsap),sg=typeof Intl<"u"?new Intl.Segmenter:0,Ql=r=>typeof r=="string"?Ql(document.querySelectorAll(r)):"length"in r?Array.from(r):[r],og=r=>Ql(r).filter(t=>t instanceof HTMLElement),If=[],Rf=function(){},Ob=/\s+/g,ag=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),lg={left:0,top:0,width:0,height:0},cg=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||If),n=r.length,i,s,o,a;if(e.size)for(;--n>-1;){s=r[n];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},hg=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),po=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),Lf=(r,t,e)=>{let n=t[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let f=document.createElement(i),u=e.length+1;return n&&(f.className=n+(l?" "+n+u:"")),o&&f.style.setProperty("--"+r,u+""),s!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=h,e.push(f),f};return l&&(n=n.replace("++","")),c.collection=e,c},Fb=(r,t,e,n)=>{let i=Lf("line",e,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},ug=(r,t,e,n,i,s,o,a,l,c)=>{var h;let f=Array.from(r.childNodes),u=0,{wordDelimiter:d,reduceWhiteSpace:_=!0,prepareText:g}=t,m=r.getBoundingClientRect(),p=m,b=!_&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",M=0,v=e.collection,A,E,T,R,y,x,L,N,F,P,Y,V,X,k,Q,I,st,At;for(typeof d=="object"?(T=d.delimiter||d,E=d.replaceWith||""):E=d===""?"":d||" ",A=E!==" ";u<f.length;u++)if(R=f[u],R.nodeType===3){for(Q=R.textContent||"",_?Q=Q.replace(Ob," "):b&&(Q=Q.replace(/\n/g,E+`
`)),g&&(Q=g(Q,r)),R.textContent=Q,y=E||T?Q.split(T||E):Q.match(a)||If,st=y[y.length-1],N=A?st.slice(-1)===" ":!st,st||y.pop(),p=m,L=A?y[0].charAt(0)===" ":!y[0],L&&po(" ",r,R),y[0]||y.shift(),cg(y,l),s&&c||(R.textContent=""),F=1;F<=y.length;F++)if(I=y[F-1],!_&&b&&I.charAt(0)===`
`&&((h=R.previousSibling)==null||h.remove(),po(document.createElement("br"),r,R),I=I.slice(1)),!_&&I==="")po(E,r,R);else if(I===" ")r.insertBefore(document.createTextNode(" "),R);else{if(A&&I.charAt(0)===" "&&po(" ",r,R),M&&F===1&&!L&&v.indexOf(M.parentNode)>-1?(x=v[v.length-1],x.appendChild(document.createTextNode(n?"":I))):(x=e(n?"":I),po(x,r,R),M&&F===1&&!L&&x.insertBefore(M,x.firstChild)),n)for(Y=sg?cg([...sg.segment(I)].map(Bt=>Bt.segment),l):I.match(a)||If,At=0;At<Y.length;At++)x.appendChild(Y[At]===" "?document.createTextNode(" "):n(Y[At]));if(s&&c){if(Q=R.textContent=Q.substring(I.length+1,Q.length),P=x.getBoundingClientRect(),P.top>p.top&&P.left<=p.left){for(V=r.cloneNode(),X=r.childNodes[0];X&&X!==x;)k=X,X=X.nextSibling,V.appendChild(k);r.parentNode.insertBefore(V,r),i&&hg(V)}p=P}(F<y.length||N)&&po(F>=y.length?" ":A&&I.slice(-1)===" "?" "+E:E,r,R)}r.removeChild(R),M=0}else R.nodeType===1&&(o&&o.indexOf(R)>-1?(v.indexOf(R.previousSibling)>-1&&v[v.length-1].appendChild(R),M=R):(ug(R,t,e,n,i,s,o,a,l,!0),M=0),i&&hg(R))},fg=class dg{constructor(t,e){this.isSplit=!1,Ub(),this.elements=og(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Rf(this),this.split(e)}split(t){this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,f=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,d=f&&!u&&!h,_=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=_?new RegExp(_.source+"|"+ag.source,"gu"):ag,m=!!t.ignore&&og(t.ignore),{orig:p,animTime:b,obs:M}=this._data,v;return(f||u||h)&&(this.elements.forEach((A,E)=>{p[E]={element:A,html:A.innerHTML,ariaL:A.getAttribute("aria-label"),ariaH:A.getAttribute("aria-hidden")},n==="auto"?A.setAttribute("aria-label",(A.textContent||"").trim()):n==="hidden"&&A.setAttribute("aria-hidden","true");let T=[],R=[],y=[],x=f?Lf("char",t,T):null,L=Lf("word",t,R),N,F,P,Y;if(ug(A,t,L,x,d,i&&(h||d),m,g,_,!1),h){let V=Ql(A.childNodes),X=Fb(A,V,t,y),k,Q=[],I=0,st=V.map(Bt=>Bt.nodeType===1?Bt.getBoundingClientRect():lg),At=lg;for(N=0;N<V.length;N++)k=V[N],k.nodeType===1&&(k.nodeName==="BR"?(Q.push(k),X(I,N+1),I=N+1,At=st[I]):(N&&st[N].top>At.top&&st[N].left<=At.left&&(X(I,N),I=N),At=st[N]));I<N&&X(I,N),Q.forEach(Bt=>{var q;return(q=Bt.parentNode)==null?void 0:q.removeChild(Bt)})}if(!u){for(N=0;N<R.length;N++)if(F=R[N],f||!F.nextSibling||F.nextSibling.nodeType!==3)if(s&&!h){for(P=document.createElement("span"),P.style.whiteSpace="nowrap";F.firstChild;)P.appendChild(F.firstChild);F.replaceWith(P)}else F.replaceWith(...F.childNodes);else Y=F.nextSibling,Y&&Y.nodeType===3&&(Y.textContent=(F.textContent||"")+(Y.textContent||""),F.remove());R.length=0,A.normalize()}this.lines.push(...y),this.words.push(...R),this.chars.push(...T)}),c&&this[c]&&this.masks.push(...this[c].map(A=>{let E=A.cloneNode();return A.replaceWith(E),E.appendChild(A),A.className&&(E.className=A.className.replace(/(\b\w+\b)/g,"$1-mask")),E.style.overflow="clip",E}))),this.isSplit=!0,fo&&(a?fo.addEventListener("loadingdone",this._split):fo.status==="loading"&&console.warn("SplitText called before fonts loaded")),(v=o&&o(this))&&v.totalTime&&(this._data.anim=b?v.totalTime(b):v),h&&a&&this.elements.forEach((A,E)=>{p[E].width=A.offsetWidth,M&&M.observe(A)}),this}revert(){var t,e;let{orig:n,anim:i,obs:s}=this._data;return s&&s.disconnect(),n.forEach(({element:o,html:a,ariaL:l,ariaH:c})=>{o.innerHTML=a,l?o.setAttribute("aria-label",l):o.removeAttribute("aria-label"),c?o.setAttribute("aria-hidden",c):o.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,fo?.removeEventListener("loadingdone",this._split),i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this),this}static create(t,e){return new dg(t,e)}static register(t){ua=ua||t||window.gsap,ua&&(Ql=ua.utils.toArray,Rf=ua.core.context||Rf),!Pf&&window.innerWidth>0&&(fo=document.fonts,Pf=!0)}};fg.version="3.13.0";var fa=fg;var Bb="1.3.4";function gg(r,t,e){return Math.max(r,Math.min(t,e))}function zb(r,t,e){return(1-e)*r+e*t}function kb(r,t,e,n){return zb(r,t,1-Math.exp(-e*n))}function Vb(r,t){return(r%t+t)%t}var Hb=class{constructor(){Nt(this,"isRunning",!1);Nt(this,"value",0);Nt(this,"from",0);Nt(this,"to",0);Nt(this,"currentTime",0);Nt(this,"lerp");Nt(this,"duration");Nt(this,"easing");Nt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=gg(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=kb(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Gb(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var Wb=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Nt(this,"width",0);Nt(this,"height",0);Nt(this,"scrollHeight",0);Nt(this,"scrollWidth",0);Nt(this,"debouncedResize");Nt(this,"wrapperResizeObserver");Nt(this,"contentResizeObserver");Nt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Nt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Nt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Gb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},_g=class{constructor(){Nt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?.push(t)||(this.events[r]=[t]),()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},pg=100/6,Ir={passive:!1},Xb=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Nt(this,"touchStart",{x:0,y:0});Nt(this,"lastDelta",{x:0,y:0});Nt(this,"window",{width:0,height:0});Nt(this,"emitter",new _g);Nt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Nt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Nt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Nt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=n===1?pg:n===2?this.window.width:1,s=n===1?pg:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Nt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ir),this.element.addEventListener("touchstart",this.onTouchStart,Ir),this.element.addEventListener("touchmove",this.onTouchMove,Ir),this.element.addEventListener("touchend",this.onTouchEnd,Ir)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Ir),this.element.removeEventListener("touchstart",this.onTouchStart,Ir),this.element.removeEventListener("touchmove",this.onTouchMove,Ir),this.element.removeEventListener("touchend",this.onTouchEnd,Ir)}},mg=r=>Math.min(1,1.001-Math.pow(2,-10*r)),vg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u="vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:b=!0,autoRaf:M=!1,anchors:v=!1,autoToggle:A=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:T=!1}={}){Nt(this,"_isScrolling",!1);Nt(this,"_isStopped",!1);Nt(this,"_isLocked",!1);Nt(this,"_preventNextNativeScrollEvent",!1);Nt(this,"_resetVelocityTimeout",null);Nt(this,"__rafID",null);Nt(this,"isTouching");Nt(this,"time",0);Nt(this,"userData",{});Nt(this,"lastVelocity",0);Nt(this,"velocity",0);Nt(this,"direction",0);Nt(this,"options");Nt(this,"targetScroll");Nt(this,"animatedScroll");Nt(this,"animate",new Hb);Nt(this,"emitter",new _g);Nt(this,"dimensions");Nt(this,"virtualScroll");Nt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Nt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Nt(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){let t=this.isHorizontal?"overflow-x":"overflow-y",e=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(e)?this.stop():this.start()}});Nt(this,"onClick",r=>{let e=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(e){let n=e.getAttribute("href");if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}});Nt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Nt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof h=="function"&&h?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let d=i&&this.options.syncTouch,g=i&&n.type==="touchend"&&Math.abs(u)>5;g&&(u=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+u,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Nt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Nt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Bb,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=mg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:b,autoRaf:M,anchors:v,autoToggle:A,allowNestedScroll:E,__experimental__naiveDimensions:T},this.dimensions=new Wb(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Xb(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let u;if(typeof r=="string"?u=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(u=r),u){if(this.options.wrapper!==window){let _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}let d=u.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite){if(h){this.targetScroll=this.animatedScroll=this.scroll;let u=r-this.animatedScroll;u>this.limit/2?r=r-this.limit:u<-this.limit/2&&(r=r+this.limit)}}else r=gg(0,r,this.limit);if(r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=mg:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(u,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=u-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=u,this.setScroll(this.scroll),h&&(this.targetScroll=u),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now(),i=r._lenis??(r._lenis={}),s,o,a,l,c,h,f,u,d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();let A=window.getComputedStyle(r);i.computedStyle=A;let E=A.overflowX,T=A.overflowY;if(s=["auto","overlay","scroll"].includes(E),o=["auto","overlay","scroll"].includes(T),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,u=r.clientHeight,a=c>f,l=h>u,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=h,i.clientWidth=f,i.clientHeight=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,u=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let _;if(d==="horizontal")_="x";else if(d==="vertical")_="y";else{let A=t!==0,E=e!==0;A&&s&&a&&(_="x"),E&&o&&l&&(_="y")}if(!_)return!1;let g,m,p,b,M;if(_==="x")g=r.scrollLeft,m=c-f,p=t,b=s,M=a;else if(_==="y")g=r.scrollTop,m=h-u,p=e,b=o,M=l;else return!1;return(p>0?g<m:g>0)&&b&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Vb(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};le.registerPlugin(Xt,fa);var Df=document.documentElement,xi=(r,t=document)=>t.querySelector(r),oi=(r,t=document)=>[...t.querySelectorAll(r)],Nf=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,Yb=()=>xi(".mast__bar")?.offsetHeight??48;function xg(r){!r||Nf()||le.fromTo(r,{yPercent:35,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:.55,ease:"power3.out",overwrite:!0})}function yg(r,t){if(!r)return;let e=s=>Math.round(s).toLocaleString("en-IN");if(Nf()){r.textContent=e(t);return}let n=Number(r.dataset.value||0);r.dataset.value=String(t);let i={v:n};le.to(i,{v:t,duration:.6,ease:"power3.out",overwrite:!0,onUpdate:()=>{r.textContent=e(i.v)}})}function qb(){let r=xi(".curtain");if(!r||r.hidden)return;try{sessionStorage.setItem("ve-intro","1")}catch{}let t=oi(".curtain__col",r),e=xi(".curtain__word",r);le.timeline({onComplete:()=>{r.hidden=!0,Xt.refresh()}}).fromTo(e,{yPercent:120},{yPercent:0,duration:.5,ease:"power4.out"},.05).to(e,{autoAlpha:0,duration:.2},.72).to(t,{yPercent:-101,duration:.7,ease:"power4.inOut",stagger:.05},.72)}function Zb(r){let t=xi(".hero");if(t){if(r&&matchMedia("(pointer: fine)").matches&&(t.addEventListener("pointermove",e=>{let n=t.getBoundingClientRect();r.setPointer((e.clientX-n.left)/n.width-.5,(e.clientY-n.top)/n.height-.5)}),t.addEventListener("pointerleave",()=>r.setPointer(0,0))),r){let e=oi('input[name="sheet-colour"]'),n=["blue","green","brown","clear","grey","orange"],i=xi(".hero__controls"),s={chosen:!1,hover:!1,seen:!0};e.forEach(a=>a.addEventListener("change",()=>{s.chosen=!0})),i?.addEventListener("pointerenter",()=>{s.hover=!0}),i?.addEventListener("pointerleave",()=>{s.hover=!1}),i?.addEventListener("focusin",()=>{s.hover=!0}),i?.addEventListener("focusout",()=>{s.hover=!1}),new IntersectionObserver(([a])=>{s.seen=a.isIntersecting}).observe(t);let o=0;setInterval(()=>{if(s.chosen||s.hover||!s.seen||r.isPaused())return;let a=n[o%n.length];o+=1;let l=e.find(c=>c.value===a);l&&(l.checked=!0,r.setTint(`--sheet-${a}`))},3200)}le.to(".hero__copy",{y:-90,autoAlpha:0,ease:"none",scrollTrigger:{trigger:t,start:"top top",end:"bottom 35%",scrub:!0}}),le.to(".hero__stage",{yPercent:10,ease:"none",scrollTrigger:{trigger:t,start:"top top",end:"bottom top",scrub:!0}}),matchMedia("(pointer: fine)").matches&&oi(".hero__actions .btn").forEach(e=>{let n=le.quickTo(e,"x",{duration:.5,ease:"power3"}),i=le.quickTo(e,"y",{duration:.5,ease:"power3"});e.addEventListener("pointermove",s=>{let o=e.getBoundingClientRect();n((s.clientX-o.left-o.width/2)*.22),i((s.clientY-o.top-o.height/2)*.3)}),e.addEventListener("pointerleave",()=>{n(0),i(0)})})}}function $b(){oi("main h2, .cat__head h1").forEach(r=>{fa.create(r,{type:"lines",mask:"lines",autoSplit:!0,onSplit:t=>le.from(t.lines,{yPercent:110,duration:.95,ease:"power4.out",stagger:.09,scrollTrigger:{trigger:r,start:"top 88%",once:!0}})})})}function Jb(){let r=oi("[data-reveal]");le.set(r,{autoAlpha:0,y:30}),Xt.batch(r,{start:"top 90%",once:!0,onEnter:t=>le.to(t,{autoAlpha:1,y:0,duration:.8,ease:"power3.out",stagger:.07,overwrite:!0})}),oi(".reel__frame, .brands__pic, .visit__map, .panel__pic, .item__pic").forEach(t=>{le.fromTo(t,{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.05,ease:"power4.inOut",clearProps:"clipPath",scrollTrigger:{trigger:t,start:"top 92%",once:!0}})})}function Kb(){oi("[data-count]").forEach(r=>{let t=Number(r.dataset.count),e=Number(r.dataset.dec||0),n={v:0};Xt.create({trigger:r,start:"top 92%",once:!0,onEnter:()=>le.to(n,{v:t,duration:1.6,ease:"power3.out",onUpdate:()=>{r.textContent=n.v.toFixed(e)}})})})}function Qb(){let r=xi(".film__frame");r&&(le.fromTo(r,{clipPath:"inset(13% 15% 13% 15%)"},{clipPath:"inset(0% 0% 0% 0%)",ease:"none",scrollTrigger:{trigger:".film",start:"top 92%",end:"top 12%",scrub:!0}}),le.fromTo(".film__frame video",{scale:1.16},{scale:1,ease:"none",scrollTrigger:{trigger:".film",start:"top 92%",end:"top 12%",scrub:!0}}))}function jb(){oi(".marquee__row").forEach((r,t)=>{le.fromTo(r,{xPercent:t%2?-22:0},{xPercent:t%2?0:-22,ease:"none",scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:.5}})})}function tw(){let r=xi(".brands__veil");r&&le.fromTo(r,{xPercent:0},{xPercent:101,ease:"none",scrollTrigger:{trigger:".brands__pic",start:"top 78%",end:"top 22%",scrub:.4}}),le.fromTo(".brands__pic img",{yPercent:-7,scale:1.18},{yPercent:7,ease:"none",scrollTrigger:{trigger:".brands__pic",start:"top bottom",end:"bottom top",scrub:!0}})}function ew(){let r=xi(".hours__open");r&&le.fromTo(r,{scaleX:0},{scaleX:1,duration:1.2,ease:"power4.inOut",transformOrigin:"left center",scrollTrigger:{trigger:r,start:"top 94%",once:!0}})}function nw(){let r=xi(".foot__mark");r&&fa.create(r,{type:"chars",mask:"chars",autoSplit:!0,onSplit:t=>le.from(t.chars,{yPercent:115,ease:"power2.out",stagger:.03,scrollTrigger:{trigger:".foot",start:"top 90%",end:"top 40%",scrub:.8}})})}function iw(){le.fromTo(".mast__progress",{scaleX:0},{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:.3}}),oi('.mast__links a[href*="#"]').forEach(r=>{let t=r.getAttribute("href").split("#")[1],e=document.getElementById(t);e&&Xt.create({trigger:e,start:"top 45%",end:"bottom 45%",onToggle:n=>n.isActive?r.setAttribute("aria-current","true"):r.removeAttribute("aria-current")})})}function rw(){le.matchMedia().add("(min-width: 60rem)",()=>{let t=xi(".range"),e=xi("[data-rail]");if(t&&e){Df.classList.add("rail-pinned");let n=()=>Math.max(0,e.scrollWidth-innerWidth),i=le.to(e,{x:()=>-n(),ease:"none",scrollTrigger:{trigger:t,start:()=>`top ${Yb()}px`,end:()=>`+=${n()*1.1}`,pin:!0,anticipatePin:1,scrub:.6,invalidateOnRefresh:!0,onUpdate:o=>s(le.utils.clamp(-4,4,o.getVelocity()/-320))}}),s=le.quickTo(e,"skewX",{duration:.6,ease:"power3"});oi(".shelf__pic img",e).forEach(o=>{le.fromTo(o,{xPercent:-7,scale:1.2},{xPercent:7,ease:"none",scrollTrigger:{containerAnimation:i,trigger:o.parentElement,start:"left right",end:"right left",scrub:!0}})}),e.addEventListener("focusin",o=>{let a=o.target.closest(".shelf"),l=i.scrollTrigger;if(!a||!l)return;let c=le.utils.clamp(0,1,(a.offsetLeft-innerWidth*.3)/Math.max(1,n()));window.scrollTo(0,l.start+(l.end-l.start)*c)})}return oi(".watch__grid .reel").forEach((n,i)=>{let s=[70,20,100,40][i%4];le.fromTo(n,{y:s},{y:-s*.6,ease:"none",scrollTrigger:{trigger:".watch__grid",start:"top bottom",end:"bottom top",scrub:!0}})}),oi(".panel__pic img").forEach(n=>{le.fromTo(n,{yPercent:-8,scale:1.2},{yPercent:8,ease:"none",scrollTrigger:{trigger:n.parentElement,start:"top bottom",end:"bottom top",scrub:!0}})}),()=>Df.classList.remove("rail-pinned")})}function Mg({heroScene:r}){if(Nf())return;Df.classList.add("motion");let t=new vg({lerp:.11,anchors:{offset:-56}});t.on("scroll",Xt.update),le.ticker.add(e=>t.raf(e*1e3)),le.ticker.lagSmoothing(0),qb(),rw(),Zb(r),Jb(),Kb(),Qb(),jb(),tw(),ew(),iw(),(document.fonts?.ready??Promise.resolve()).then(()=>{$b(),nw(),Xt.refresh()}),addEventListener("load",()=>Xt.refresh())}var oc=document.documentElement,ec=matchMedia("(prefers-reduced-motion: reduce)").matches,je=(r,t=document)=>t.querySelector(r),li=(r,t=document)=>[...t.querySelectorAll(r)],wg=oc.dataset.wa;function nc(r,t){try{if(t===void 0)return localStorage.getItem(r);localStorage.setItem(r,t)}catch{}return null}var mo=new Map,Nn="en";function Tg(r){Nn=r,oc.lang=r==="hi"?"hi":"en",li("[data-i18n]").forEach(e=>{let n=e.dataset.i18n;mo.has(n)||mo.set(n,e.innerHTML),e.innerHTML=r==="hi"&&Do[n]?Do[n]:mo.get(n)}),li("[data-i18n-label]").forEach(e=>{let n=e.dataset.i18nLabel,i=`label:${n}`;mo.has(i)||mo.set(i,e.getAttribute("aria-label")),e.setAttribute("aria-label",r==="hi"&&Do[n]?Do[n]:mo.get(i))});let t=je("[data-lang-toggle]");t&&(t.textContent=r==="hi"?"English":"\u0939\u093F\u0902\u0926\u0940",t.lang=r==="hi"?"en":"hi"),nc("ve-lang",r),Eg(),sc(),typeof rc=="function"&&rc()}je("[data-lang-toggle]")?.addEventListener("click",()=>Tg(Nn==="hi"?"en":"hi"));function sw(){let r=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",weekday:"short",hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(new Date),t=n=>r.find(i=>i.type===n).value;return{day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(t("weekday")),mins:Number(t("hour"))%24*60+Number(t("minute"))}}function Eg(){let{day:r,mins:t}=sw(),e=r!==0&&t>=630&&t<1010,n=r===6||!1,i;e?i=Nn==="hi"?"\u0905\u092D\u0940 \u0916\u0941\u0932\u093E \u0939\u0948, \u0936\u093E\u092E 6:50 \u0924\u0915":"Open now, until 6:50 pm":r!==0&&t<630?i=Nn==="hi"?"\u0906\u091C \u0938\u0941\u092C\u0939 10:30 \u092C\u091C\u0947 \u0916\u0941\u0932\u0947\u0917\u093E":"Opens today at 10:30 am":r===6||n?i=Nn==="hi"?"\u0905\u092C \u0938\u094B\u092E\u0935\u093E\u0930 \u0938\u0941\u092C\u0939 10:30 \u092C\u091C\u0947":"Opens Monday at 10:30 am":r===0?i=Nn==="hi"?"\u0906\u091C \u092C\u0902\u0926, \u0915\u0932 \u0938\u0941\u092C\u0939 10:30 \u092C\u091C\u0947":"Closed today. Opens tomorrow at 10:30 am":i=Nn==="hi"?"\u0915\u0932 \u0938\u0941\u092C\u0939 10:30 \u092C\u091C\u0947 \u0916\u0941\u0932\u0947\u0917\u093E":"Opens tomorrow at 10:30 am",li("[data-status]").forEach(s=>{s.textContent=i}),li("[data-day]").forEach(s=>s.classList.toggle("is-today",Number(s.dataset.day)===r))}var Sg=je("[data-mast-sentinel]");Sg&&new IntersectionObserver(([r])=>je(".mast")?.classList.toggle("is-stuck",!r.isIntersecting)).observe(Sg);var jl=je("[data-hero-canvas]"),Uf=lp();Uf||oc.classList.add("no-webgl");var Of=new URLSearchParams(location.search),ic=Of.has("still");ic&&document.head.insertAdjacentHTML("beforeend","<style>.mast,.hero__inner,.skip,.dock{display:none!important}.hero{min-height:100dvh!important}body{overflow:hidden}.hero__canvas{opacity:1!important;transition:none!important}</style>");var Ag=null;if(jl&&Uf){let r=Of.get("tint")||nc("ve-tint")||"orange",t=hu(jl,{type:"twin6",tint:`--sheet-${r}`,alphaScale:1,baseTurn:-.52,entrance:!ic,onFirstFrame:()=>je(".hero")?.classList.add("is-live")});Ag=t,t.setCompose((n,i,s)=>{let o=s.w/s.h;if(s.w<960)n.position.set(0,3.6,o<1.05?9.2:8),n.lookAt(0,.34,0),i.position.set(0,i.position.y,-.7);else{let a=Math.max(6.4,7.5-(o-1.5)*1.1);n.position.set(0,3.7,a+.7),n.lookAt(0,.34,0),i.position.set(Math.min(1.95,.62*o),i.position.y,-.75)}});let e=je("[data-sheet-pause]");if(e){let n=()=>{let i=t.isPaused();e.textContent=i?Nn==="hi"?"\u091A\u0932\u093E\u090F\u0901":"Play":Nn==="hi"?"\u0930\u094B\u0915\u0947\u0902":"Pause",e.setAttribute("aria-pressed",String(i))};e.addEventListener("click",()=>{t.setPaused(!t.isPaused()),n()}),ec&&(e.hidden=!0),n()}if(li('input[name="sheet-colour"]').forEach(n=>{n.value===r&&(n.checked=!0),n.addEventListener("change",()=>{t.setTint(`--sheet-${n.value}`),nc("ve-tint",n.value);let i=je("[data-tint-name]");i&&(i.textContent=n.nextElementSibling.dataset.name)})}),jl.addEventListener("keydown",n=>{n.key==="ArrowLeft"&&(t.nudge(-1),n.preventDefault()),n.key==="ArrowRight"&&(t.nudge(1),n.preventDefault())}),new IntersectionObserver(([n])=>t.setVisible(n.isIntersecting),{threshold:.01}).observe(jl),!ec){let n=!1;addEventListener("scroll",()=>{n||(n=!0,requestAnimationFrame(()=>{n=!1,t.setScrollTurn(Math.min(1.2,scrollY/innerHeight)*.55)}))},{passive:!0})}ic&&(t.setPaused(!0),window.__settle=()=>t.settleNow())}var tc=je("[data-pin-canvas]"),ps=li("[data-sheet-panel]");if(tc&&Uf&&ps.length){let r=ps[0].dataset,t=hu(tc,{ground:"--color-ink",dark:!0,type:r.type,tint:`--sheet-${r.tint}`,baseTurn:-.5,baseLean:-.14,sway:!1,entrance:!1,alphaScale:.92,sunX:.34,onFirstFrame:()=>tc.closest(".pin__stage")?.classList.add("is-live")});t.setCompose((s,o,a)=>{let l=a.w<620;s.position.set(0,3.5,l?8.8:8.2),s.lookAt(0,.4,0),o.position.set(0,o.position.y,-.6)});let e=je(".pin");new IntersectionObserver(([s])=>t.setVisible(s.isIntersecting),{threshold:0}).observe(tc);let n=s=>{ps.forEach(a=>a.classList.toggle("is-active",a===s)),t.setType(s.dataset.type),t.setTint(`--sheet-${s.dataset.tint}`);let o=je("[data-pin-figure]");o&&o.textContent!==s.dataset.figure&&(o.textContent=s.dataset.figure,xg(o))};n(ps[0]);let i=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&n(o.target)})},{rootMargin:"-45% 0px -45% 0px"});if(ps.forEach(s=>i.observe(s)),!ec){let s=!1,o=()=>{s||(s=!0,requestAnimationFrame(()=>{s=!1;let a=e.getBoundingClientRect(),l=Math.max(0,Math.min(1,-a.top/Math.max(1,a.height-innerHeight)));t.setScrollTurn(l*1.15)}))};addEventListener("scroll",o,{passive:!0}),o()}}else ps.length&&ps.forEach(r=>r.classList.add("is-active"));li("[data-rail]").forEach(r=>{let t=null;r.addEventListener("pointerdown",e=>{e.pointerType!=="mouse"||oc.classList.contains("rail-pinned")||(t={x:e.clientX,left:r.scrollLeft,moved:!1})}),addEventListener("pointermove",e=>{if(!t)return;let n=e.clientX-t.x;Math.abs(n)>4&&(t.moved=!0,r.classList.add("is-dragging")),r.scrollLeft=t.left-n}),addEventListener("pointerup",()=>{t?.moved&&(r.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation()},{capture:!0,once:!0}),setTimeout(()=>r.classList.remove("is-dragging"),60)),t=null})});function rc(){let r=je("[data-film]");if(!r)return;let t=je("video",r),e=innerWidth>=700?"wide":"tall",n=`assets/video/film-${e}-${Nn}.mp4`;t.dataset.current!==n&&(t.dataset.current=n,t.poster=e==="wide"?"assets/video/film-poster.jpg":"assets/video/film-poster-tall.jpg",t.src=n,t.removeAttribute("controls"),r.syncReel?.())}addEventListener("resize",rc);li("[data-reel]").forEach(r=>{let t=je("video",r),e=je("[data-reel-toggle]",r),n={seen:!1,held:ec},i=()=>{n.seen&&!n.held?t.play().catch(()=>{}):t.pause(),e.textContent=n.held?Nn==="hi"?"\u091A\u0932\u093E\u090F\u0901":"Play":Nn==="hi"?"\u0930\u094B\u0915\u0947\u0902":"Pause",e.setAttribute("aria-pressed",String(n.held))};e.addEventListener("click",()=>{n.held=!n.held,i()}),r.syncReel=i,new IntersectionObserver(([s])=>{n.seen=s.isIntersecting,i()},{threshold:.2}).observe(r)});var ai=je("[data-enquiry]");function sc(){if(!ai)return;let r=parseFloat(ai.elements.length.value),t=parseFloat(ai.elements.width.value),e=r>0&&t>0?Math.round(r*t):0;return yg(je("[data-area]"),e),e}ai&&(ai.addEventListener("input",sc),ai.addEventListener("submit",r=>{r.preventDefault();let t=sc(),e=ai.elements.sheet.value,n=ai.elements.colour.value,i=Nn==="hi"?["\u0928\u092E\u0938\u094D\u0924\u0947 \u0935\u0902\u0936 \u0907\u0902\u091F\u0930\u092A\u094D\u0930\u093E\u0907\u091C\u0947\u091C,",`\u092E\u0941\u091D\u0947 ${e} \u091A\u093E\u0939\u093F\u090F\u0964`,n?`\u0930\u0902\u0917: ${n}`:"",t?`\u0936\u0947\u0921: ${ai.elements.length.value} x ${ai.elements.width.value} \u092B\u0940\u091F (${t} \u0935\u0930\u094D\u0917 \u092B\u0940\u091F)`:"","\u0915\u0943\u092A\u092F\u093E \u0906\u091C \u0915\u093E \u0930\u0947\u091F \u092C\u0924\u093E\u090F\u0902\u0964"]:["Hello Vansh Enterprises,",`I need ${e}.`,n?`Colour: ${n}`:"",t?`Shed: ${ai.elements.length.value} x ${ai.elements.width.value} ft (${t} sq ft)`:"","Please share today's rate."];window.open(`https://wa.me/${wg}?text=${encodeURIComponent(i.filter(Boolean).join(`
`))}`,"_blank","noopener")}));var bg=je("[data-filter]");if(bg){let r=li("[data-group]"),t=li("button",bg),e=i=>{t.forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.id===i))),r.forEach(s=>{s.hidden=i!=="all"&&s.dataset.group!==i})};t.forEach(i=>i.addEventListener("click",()=>{e(i.dataset.id),history.replaceState(null,"",i.dataset.id==="all"?location.pathname:`#${i.dataset.id}`)}));let n=location.hash.slice(1);n&&r.some(i=>i.dataset.group===n)&&e(n)}li("[data-ask]").forEach(r=>{r.addEventListener("click",()=>{let t=r.dataset.ask,e=Nn==="hi"?`\u0928\u092E\u0938\u094D\u0924\u0947 \u0935\u0902\u0936 \u0907\u0902\u091F\u0930\u092A\u094D\u0930\u093E\u0907\u091C\u0947\u091C, ${t} \u0915\u093E \u0906\u091C \u0915\u093E \u0930\u0947\u091F \u092C\u0924\u093E\u090F\u0902\u0964`:`Hello Vansh Enterprises, please share today's rate for ${t}.`;r.href=`https://wa.me/${wg}?text=${encodeURIComponent(e)}`})});Eg();sc();(nc("ve-lang")==="hi"||Of.get("lang")==="hi")&&Tg("hi");rc();li("[data-film]").forEach(r=>r.syncReel?.());ic||Mg({heroScene:Ag});})();
