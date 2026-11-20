const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const P=[
{id:'fpa',c:'ai',k:'Featured thesis · IoT and distributed systems',t:'Adaptive Synchronization for Offline-First IoT Edge Systems (FPA-Sync)',d:'Undergraduate thesis research on resilient edge-cloud data synchronization and conflict resolution when IoT connectivity is intermittent.',g:['IoT Edge','Distributed Systems','Python','Research'],o:'IoT deployments on unreliable networks risk data loss, stale state and conflicting writes. FPA-Sync explores adaptive edge-cloud synchronization with deterministic conflict handling.',h:['Designed a local-first write queue and versioned metadata model to keep sensor events during network drops.','Evaluated adaptive batching and priority scheduling to sync efficiently once connectivity returns.','Analyzed conflict-resolution consistency and transmission overhead under simulated intermittent links.']},
{id:'bt',c:'ai',k:'AI and medical imaging · machine learning',t:'AI-Based Brain Tumor Classification Using MRI Images and Contrast Enhancement',d:'A medical image analysis workflow that uses MRI preprocessing and contrast enhancement to improve lesion visibility and automated classification.',g:['Python','MRI Processing','Contrast Enhancement','Classification'],o:'Subtle intensity differences in brain MRI scans can hide tumor boundaries. This project pairs preprocessing and contrast enhancement with machine learning classification.',h:['Applied normalization, noise reduction and contrast enhancement to highlight tissue and lesion contrast.','Extracted discriminative visual and deep features from enhanced slices for multi-class classification.','Evaluated standard classification metrics to measure the effect of contrast enhancement.']},
{id:'tf',c:'sys',k:'Systems and software development · C++',t:'Turf Management System with C++',d:'A modular C++ application for turf reservations, time-slot availability, booking records and session billing.',g:['C++','Data Structures','Scheduling','File Handling'],o:'A console application that manages sports turf bookings, scheduling, customer records and billing in a clean, maintainable workflow.',h:['Implemented slot availability checks and reservation flows that prevent overlapping bookings.','Structured modular data structures with file-based persistence for bookings, customers and billing.','Added input validation and summary reports for daily scheduling and fee calculation.']},
{id:'cg',c:'sys',k:'Web engineering · relational database portal',t:'Combat Gym Management System',d:'A full-stack portal for memberships, BDT billing and database management, with relational schema design and role-based workflows.',g:['PHP','MySQL','HTML/CSS','JavaScript'],o:'An operational portal for fitness facilities covering member enrollment, package renewals, invoicing in BDT and staff role separation.',h:['Designed a MySQL schema for members, subscription tiers, payment ledgers and attendance.','Implemented role-based access control that separates admin finance from front-desk tasks.','Built responsive server-rendered views with client-side validation for fast billing and receipts.']}];
$('#pg').innerHTML=P.map(p=>`<article class="card rv" data-c="${p.c}"><span class="kind">${p.k}</span><h3>${p.t}</h3><p>${p.d}</p><div class="tags">${p.g.map(x=>`<span class="tag">${x}</span>`).join('')}</div><button class="more" data-id="${p.id}">Read the case study</button></article>`).join('');
const E=[['Dec 2019 – present','YouTube Content Creator','Golponnash','Created 300+ audiobook videos and grew the channel to 7,500+ subscribers.'],
['Teaching and mentorship','Founder and ICT Instructor','Nafisa’s ICT Zone, Dhaka','Mentoring students in ICT fundamentals, logical problem-solving and computer basics.'],
['Dec 2023 – Feb 2024','Public Relations and Communication Coordinator','Hult Prize at IUBAT','Represented Hult Prize at university booths, assisted students and hosted events.'],
['Dec 2022 – Jul 2023','Communication Officer','WEBLANCEBD','Managed admissions communication, handled 100+ customer calls daily and supported social media promotions.'],
['Jan 2022 – Mar 2022','HR and Admin Officer','Sritrims Far East Limited','Supported recruitment, onboarding, administration and office correspondence.'],
['Campus engagement','Event Host and Master of Ceremonies','Department of CSE, IUBAT','Hosted university seminars and department sessions, including technical events.']];
$('#tl').innerHTML=E.map(e=>`<div class="ev rv"><small>${e[0]}</small><h3>${e[1]}</h3><div class="org">${e[2]}</div><p>${e[3]}</p></div>`).join('');
/* typewriter */
const R=['AI and machine learning','Software development','IoT thesis research','Storyteller and teacher'];let ri=0,ci=0,del=false;const re=$('#role');
(function tick(){const w=R[ri];re.textContent=w.slice(0,ci);if(!del&&ci===w.length){del=true;return setTimeout(tick,1600)}if(del&&ci===0){del=false;ri=(ri+1)%R.length}ci+=del?-1:1;setTimeout(tick,del?35:70)})();
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));
/* filter */
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.setAttribute('aria-selected',x===b));$$('.card').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f))});
/* modal */
let last;const md=$('#md');
function openM(id){const p=P.find(x=>x.id===id);last=document.activeElement;$('#mk').textContent=p.k;$('#mt').textContent=p.t;$('#mo').textContent=p.o;$('#mh').innerHTML=p.h.map(x=>`<li>${x}</li>`).join('');$('#mg').innerHTML=p.g.map(x=>`<span class="tag">${x}</span>`).join('');md.classList.add('show');document.body.style.overflow='hidden';$('#mx').focus()}
function closeM(){md.classList.remove('show');document.body.style.overflow='';last&&last.focus()}
document.addEventListener('click',e=>{const b=e.target.closest('.more');if(b)openM(b.dataset.id);if(e.target===md)closeM()});
$('#mx').onclick=closeM;document.addEventListener('keydown',e=>{if(e.key==='Escape'&&md.classList.contains('show'))closeM()});
/* nav, theme */
$('#burger').onclick=()=>{const o=$('#nav').classList.toggle('open');$('#burger').setAttribute('aria-expanded',o)};
$$('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
const secs=$$('main section[id]'),links=$$('#nav a:not(.cta)');
addEventListener('scroll',()=>{let cur='';secs.forEach(s=>{if(s.getBoundingClientRect().top<140)cur=s.id});links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur))},{passive:true});
$('#theme').onclick=()=>{const r=document.documentElement,d=r.dataset.theme==='dark'||(!r.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches);r.dataset.theme=d?'light':'dark'};
/* contact */
$('#cp').onclick=async()=>{const b=$('#cp');try{await navigator.clipboard.writeText($('#em').textContent.trim());b.textContent='Copied'}catch(e){b.textContent='Select and copy the address'}setTimeout(()=>b.textContent='Copy email',2200)};
$('#cf').onsubmit=e=>{e.preventDefault();const s=encodeURIComponent($('#t').value),b=encodeURIComponent($('#m').value+'\n\n'+$('#n').value+' ('+$('#e').value+')');window.open('mailto:nafisaatikneha@gmail.com?subject='+s+'&body='+b,'_blank');$('#fb').style.display='block';e.target.reset()};
