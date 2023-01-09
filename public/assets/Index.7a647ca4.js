import{G as z,n as k,A as I,a1 as N,d as h,r as c,h as _,_ as P,o as U,a2 as w,f as t,e as a,a as o,Q as $,a6 as y,c as j,a8 as T,a5 as E}from"./index.ba1a224f.js";import{c as M,Q as A,a as F,b as Q}from"./QTable.4a36ea5d.js";import{Q as G}from"./QPage.25f10e2e.js";import{A as g,Q as m}from"./Api.dfad945c.js";import{u as B,b as V,c as L,a as R}from"./use-quasar.bc44577f.js";import"./use-dark.efe23668.js";import"./QItem.ecf6e10c.js";import"./index.2cf0d985.js";const O=["top","middle","bottom"];var S=z({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>O.includes(e)}},setup(e,{slots:l}){const d=k(()=>e.align!==void 0?{verticalAlign:e.align}:null),f=k(()=>{const n=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(n!==void 0?` text-${n}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>I("div",{class:f.value,style:d.value,role:"status","aria-label":e.label},N(l.default,e.label!==void 0?[e.label]:[]))}});const H=h({name:"AgregarUsuario",setup(e,{emit:l}){const d=c({rol_id:"",nombres:"",apellidos:"",cedula:"",celular:"",email:"",password:"",confirmPassword:""}),f=c([]),n=B();(async()=>{try{const{data:{roles:u}}=await g.get("/roles");f.value=[],u.forEach(r=>{f.value.push({label:r.nombre,value:r.id})})}catch(u){alert(u)}})();const s=async()=>{if(d.value.password!==d.value.confirmPassword)return alert("Las contrase\xF1as no son iguales");try{await g.post("/usuarios",d.value),l("actualizarLista"),n.notify({color:"positive",message:"Usuario Agregado Exitosamente",icon:"done"})}catch(u){alert(u)}};return _(d.value,(u,r)=>{d.value.nombres=u.nombres.toUpperCase(),d.value.apellidos=u.apellidos.toUpperCase()}),{listRoles:f,formUsuario:d,onSubmit:s,isPwd:c(!0),isPwd2:c(!0)}}}),J=o("div",{class:"text-h6"},"Agregar Usuario",-1),K={class:"row q-gutter-sm justify-around"},W={class:"col-xs-12 col-sm-5"},X=o("label",null,"Nombres:",-1),Y={class:"col-xs-12 col-sm-5"},Z=o("label",null,"Apellidos:",-1),x={class:"col-xs-12 col-sm-5 q-my-md"},ee=o("label",null,"Cedula:",-1),le={class:"col-xs-12 col-sm-5 q-my-md"},oe=o("label",null,"Celular:",-1),se={class:"col-xs-12 col-sm-5 q-my-md"},ae=o("label",null,"Email:",-1),ie={class:"col-xs-12 col-sm-5 q-my-md"},re=o("label",null,"Rol:",-1),te={class:"col-xs-12 col-sm-5 q-my-md"},de=o("label",null,"Contrase\xF1a:",-1),ne={class:"col-xs-12 col-sm-5 q-my-md"},ue=o("label",null,"Confirmar Contrase\xF1a:",-1),me={class:"col-xs-9 col-sm-12 flex justify-center"};function ce(e,l,d,f,n,v){return U(),w(R,{style:{width:"700px","max-width":"80vw"}},{default:t(()=>[a(V,null,{default:t(()=>[J]),_:1}),a(V,null,{default:t(()=>[a(L,{onSubmit:e.onSubmit},{default:t(()=>[o("div",K,[o("div",W,[X,a(m,{modelValue:e.formUsuario.nombres,"onUpdate:modelValue":l[0]||(l[0]=s=>e.formUsuario.nombres=s),dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",Y,[Z,a(m,{modelValue:e.formUsuario.apellidos,"onUpdate:modelValue":l[1]||(l[1]=s=>e.formUsuario.apellidos=s),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",x,[ee,a(m,{modelValue:e.formUsuario.cedula,"onUpdate:modelValue":l[2]||(l[2]=s=>e.formUsuario.cedula=s),modelModifiers:{trim:!0},minlength:"10",maxlength:"10",type:"number",dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",le,[oe,a(m,{modelValue:e.formUsuario.celular,"onUpdate:modelValue":l[3]||(l[3]=s=>e.formUsuario.celular=s),modelModifiers:{trim:!0},type:"number",dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",se,[ae,a(m,{modelValue:e.formUsuario.email,"onUpdate:modelValue":l[4]||(l[4]=s=>e.formUsuario.email=s),modelModifiers:{trim:!0},type:"email",dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",ie,[re,a(M,{filled:"",required:"",dense:"","emit-value":"","map-options":"",modelValue:e.formUsuario.rol_id,"onUpdate:modelValue":l[5]||(l[5]=s=>e.formUsuario.rol_id=s),options:e.listRoles},null,8,["modelValue","options"])]),o("div",te,[de,a(m,{dense:"",filled:"",placeholder:"********",modelValue:e.formUsuario.password,"onUpdate:modelValue":l[7]||(l[7]=s=>e.formUsuario.password=s),modelModifiers:{trim:!0},type:e.isPwd?"password":"text",required:""},{append:t(()=>[a($,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[6]||(l[6]=s=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])]),o("div",ne,[ue,a(m,{dense:"",filled:"",placeholder:"********",modelValue:e.formUsuario.confirmPassword,"onUpdate:modelValue":l[9]||(l[9]=s=>e.formUsuario.confirmPassword=s),modelModifiers:{trim:!0},type:e.isPwd2?"password":"text",required:""},{append:t(()=>[a($,{name:e.isPwd2?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[8]||(l[8]=s=>e.isPwd2=!e.isPwd2)},null,8,["name"])]),_:1},8,["modelValue","type"])]),o("div",me,[a(y,{label:"Guardar",class:"q-px-xl",type:"submit",color:"green-9"})])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var fe=P(H,[["render",ce]]);const pe=h({name:"EditarUsuario",props:["userData"],setup(e,{emit:l}){const{id:d,nombres:f,apellidos:n,cedula:v,celular:s,email:u,rol_id:r}=e.userData,i=c({rol_id:"",nombres:f,apellidos:n,cedula:v,celular:s,email:u,password:"",confirmPassword:""}),p=c([]),q=B();(async()=>{try{const{data:{roles:b}}=await g.get("/roles");p.value=[],b.forEach(C=>{p.value.push({label:C.nombre,value:C.id})}),i.value.rol_id=r}catch(b){alert(b)}})();const D=async()=>{if(i.value.password.length!==0&&i.value.password!==i.value.confirmPassword)return alert("Las contrase\xF1as no son iguales");try{await g.put(`/usuarios/${d}`,i.value),l("actualizarLista"),q.notify({color:"positive",message:"Usuario Editado Exitosamente",icon:"done"})}catch(b){alert(b)}};return _(i.value,(b,C)=>{i.value.nombres=b.nombres.toUpperCase(),i.value.apellidos=b.apellidos.toUpperCase()}),{listRoles:p,formUsuario:i,onSubmit:D,isPwd:c(!0),isPwd2:c(!0)}}}),ve=o("div",{class:"text-h6"},"Editar Usuario",-1),be={class:"row q-gutter-sm justify-around"},Ue={class:"col-xs-12 col-sm-5"},ge=o("label",null,"Nombres:",-1),we={class:"col-xs-12 col-sm-5"},ye=o("label",null,"Apellidos:",-1),$e={class:"col-xs-12 col-sm-5 q-my-md"},Ve=o("label",null,"Cedula:",-1),qe={class:"col-xs-12 col-sm-5 q-my-md"},Ce=o("label",null,"Celular:",-1),he={class:"col-xs-12 col-sm-5 q-my-md"},_e=o("label",null,"Email:",-1),Pe={class:"col-xs-12 col-sm-5 q-my-md"},ke=o("label",null,"Rol:",-1),Ee={class:"col-xs-12 col-sm-5 q-my-md"},Ae=o("label",null,"Cambiar Contrase\xF1a (Opcional):",-1),Qe={class:"col-xs-12 col-sm-5 q-my-md"},Se=o("label",null,"Confirmar Contrase\xF1a:",-1),Me={class:"col-xs-9 col-sm-12 flex justify-center"};function Be(e,l,d,f,n,v){return U(),w(R,{style:{width:"700px","max-width":"80vw"}},{default:t(()=>[a(V,null,{default:t(()=>[ve]),_:1}),a(V,null,{default:t(()=>[a(L,{onSubmit:e.onSubmit},{default:t(()=>[o("div",be,[o("div",Ue,[ge,a(m,{modelValue:e.formUsuario.nombres,"onUpdate:modelValue":l[0]||(l[0]=s=>e.formUsuario.nombres=s),dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",we,[ye,a(m,{modelValue:e.formUsuario.apellidos,"onUpdate:modelValue":l[1]||(l[1]=s=>e.formUsuario.apellidos=s),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",$e,[Ve,a(m,{modelValue:e.formUsuario.cedula,"onUpdate:modelValue":l[2]||(l[2]=s=>e.formUsuario.cedula=s),modelModifiers:{trim:!0},minlength:"10",maxlength:"10",type:"number",dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",qe,[Ce,a(m,{modelValue:e.formUsuario.celular,"onUpdate:modelValue":l[3]||(l[3]=s=>e.formUsuario.celular=s),modelModifiers:{trim:!0},type:"number",dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",he,[_e,a(m,{modelValue:e.formUsuario.email,"onUpdate:modelValue":l[4]||(l[4]=s=>e.formUsuario.email=s),modelModifiers:{trim:!0},type:"email",dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",Pe,[ke,a(M,{filled:"",required:"",dense:"","emit-value":"","map-options":"",modelValue:e.formUsuario.rol_id,"onUpdate:modelValue":l[5]||(l[5]=s=>e.formUsuario.rol_id=s),options:e.listRoles},null,8,["modelValue","options"])]),o("div",Ee,[Ae,a(m,{dense:"",filled:"",placeholder:"********",modelValue:e.formUsuario.password,"onUpdate:modelValue":l[7]||(l[7]=s=>e.formUsuario.password=s),modelModifiers:{trim:!0},type:e.isPwd?"password":"text"},{append:t(()=>[a($,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[6]||(l[6]=s=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])]),o("div",Qe,[Se,a(m,{dense:"",filled:"",placeholder:"********",modelValue:e.formUsuario.confirmPassword,"onUpdate:modelValue":l[9]||(l[9]=s=>e.formUsuario.confirmPassword=s),modelModifiers:{trim:!0},type:e.isPwd2?"password":"text"},{append:t(()=>[a($,{name:e.isPwd2?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[8]||(l[8]=s=>e.isPwd2=!e.isPwd2)},null,8,["name"])]),_:1},8,["modelValue","type"])]),o("div",Me,[a(y,{label:"Editar",class:"q-px-xl",type:"submit",color:"green-9"})])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var Le=P(pe,[["render",Be]]);const Re=[{name:"usuario",label:"Usuario",align:"left",field:"usuario",sortable:!0},{name:"rol",align:"center",label:"Rol",field:"rol",sortable:!0},{name:"email",label:"Email",field:"email",align:"center"},{name:"cedula",label:"Cedula",field:"cedula",align:"center"},{name:"celular",label:"Celular",field:"celular",align:"center"},{name:"estado",label:"Estado",align:"center",field:"estado"},{name:"acciones",label:"acciones",align:"center"}],De=h({name:"IndexUsuario",components:{AgregarUsuario:fe,EditarUsuario:Le},setup(){const e=c([]),l=c(!1),d=c(!1),f=c({}),n=c({nombres:"",apellidos:"",cedula:"",celular:"",email:"",password:""}),v=async()=>{l.value=!1,d.value=!1;try{const{data:{usuarios:i}}=await g.get("/usuarios");i.map(p=>p.usuario=`${p.nombres} ${p.apellidos}`),e.value=i}catch(i){alert(i)}};v();const s=async(i,p)=>{try{await g.delete(`/usuarios/${i}/${p}`),alert("Usuario eliminado exitosamente"),v()}catch(q){alert(q)}},u=async()=>{const i=await g.post("/usuarios",n.value);console.log(i)},r=i=>{f.value=i,d.value=!0};return _(n.value,(i,p)=>{n.value.nombres=i.nombres.toUpperCase(),n.value.apellidos=i.apellidos.toUpperCase()}),{editarUsuario:r,modalCrearUsuario:l,modalEditarUsuario:d,activarDesactivarUser:s,columns:Re,formUsuario:n,getUsuarios:v,onSubmit:u,isPwd:c(!0),rows:e,userData:f}}}),ze={class:"row q-my-lg q-pl-md"},Ie=o("div",{class:"col-md-6"},[o("label",null,"Listado de Usuarios")],-1),Ne={class:"col-md-6"},je={class:"row"},Te={class:"col-md-12"},Fe={class:"q-pa-md"};function Ge(e,l,d,f,n,v){const s=E("AgregarUsuario"),u=E("EditarUsuario");return U(),j(T,null,[a(G,null,{default:t(()=>[o("div",ze,[Ie,o("div",Ne,[a(y,{color:"secondary","icon-right":"person",label:"Agregar Usuario",onClick:l[0]||(l[0]=r=>e.modalCrearUsuario=!e.modalCrearUsuario)})])]),o("div",je,[o("div",Te,[o("div",Fe,[a(F,{title:"Treats",rows:e.rows,columns:e.columns,"row-key":"name"},{"body-cell-estado":t(r=>[a(Q,{props:r},{default:t(()=>[r.value?(U(),w(S,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(U(),w(S,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":t(r=>[a(Q,{props:r},{default:t(()=>[a(y,{round:"",color:"primary",onClick:i=>e.editarUsuario(r.row),icon:"edit",class:"q-mr-sm",size:"13px"},null,8,["onClick"]),r.row.estado?(U(),w(y,{key:0,round:"",color:"deep-orange",icon:"close",onClick:i=>e.activarDesactivarUser(r.row.id,!1),size:"13px"},null,8,["onClick"])):(U(),w(y,{key:1,round:"",color:"positive",icon:"done",onClick:i=>e.activarDesactivarUser(r.row.id,!0),size:"13px"},null,8,["onClick"]))]),_:2},1032,["props"])]),_:1},8,["rows","columns"])])])])]),_:1}),a(A,{modelValue:e.modalCrearUsuario,"onUpdate:modelValue":l[1]||(l[1]=r=>e.modalCrearUsuario=r)},{default:t(()=>[a(s,{onActualizarLista:e.getUsuarios},null,8,["onActualizarLista"])]),_:1},8,["modelValue"]),a(A,{modelValue:e.modalEditarUsuario,"onUpdate:modelValue":l[2]||(l[2]=r=>e.modalEditarUsuario=r)},{default:t(()=>[a(u,{userData:e.userData,onActualizarLista:e.getUsuarios},null,8,["userData","onActualizarLista"])]),_:1},8,["modelValue"])],64)}var el=P(De,[["render",Ge]]);export{el as default};
