(function(root){
'use strict';
function fresh(){return {step:0,name:'',statements:['','',''],lieIndex:null,backstory:'',consent:false};}
function validate(s){
 if(s.step===0&&!s.name.trim())return 'Give us a name so Andre knows whose round this is.';
 if(s.step===1){if(s.statements.some(x=>!x.trim()))return 'Add all three statements: two true, one invented.';if(new Set(s.statements.map(x=>x.trim().toLowerCase())).size!==3)return 'Make each statement different so people can guess.';}
 if(s.step===2&&![0,1,2].includes(s.lieIndex))return 'Choose which statement is the lie. Only Andre gets the answer key.';
 return '';
}
function move(s,direction,skip=false){if(direction>0&&!(skip&&s.step===3)){const error=validate(s);if(error)return {state:s,error};}return {state:{...s,step:Math.max(0,Math.min(4,s.step+direction))},error:''};}
function payload(s){for(const step of [0,1,2]){const error=validate({...s,step});if(error)throw new Error(error);}if(!s.consent)throw new Error('Private-party permission required');return {schemaVersion:1,mode:'email-handoff',game:'two-truths-one-lie',guestName:s.name.trim().slice(0,60),statements:s.statements.map(x=>x.trim().slice(0,180)),privateHostKey:{lieIndex:s.lieIndex,backstory:s.backstory.trim().slice(0,500)||null},permission:{privatePartyGamesAndSlideshow:true,publicPosting:false},createdAt:new Date().toISOString()};}
function emailText(s){
 const p=payload(s);
 return ['SALINA LORE — TWO TRUTHS & A LIE','Guest: '+p.guestName,'','STATEMENTS',...p.statements.map((x,i)=>(i+1)+'. '+x),'','PRIVATE HOST ANSWER KEY','The lie is statement '+(p.privateHostKey.lieIndex+1)+': '+p.statements[p.privateHostKey.lieIndex],'Backstory: '+(p.privateHostKey.backstory||'No backstory added.'),'','PERMISSION','I am okay with Andre using these statements and my name in private birthday games or the slideshow. No public posting.','','Sent by the guest from Salina Lore.'].join('\n');
}
function emailSubject(s){return 'Salina Lore — Two Truths & a Lie — '+s.name.trim().slice(0,60);}
function mailto(s,recipient){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient))throw new Error('Email recipient unavailable');return 'mailto:'+encodeURIComponent(recipient)+'?subject='+encodeURIComponent(emailSubject(s))+'&body='+encodeURIComponent(emailText(s));}
const api={fresh,validate,move,payload,emailText,emailSubject,mailto};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.LoreGame=api;
}(typeof globalThis!=='undefined'?globalThis:this));
