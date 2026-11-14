import { useEffect, useRef, useState } from 'react';
import { VVE_BESTUUR_EMAIL } from '../data/contact.js';
import '../styles/contactformulier.css';
const onderwerpen=['Algemene vraag','Storing of defect','Nieuws of mededeling','Activiteit voorstellen','Overig'];
export default function Contact({goTo, contactOnderwerp='Algemene vraag', contactBericht=''}) {
  const [form,setForm]=useState({name:'',apartment:'',subject:'Algemene vraag',message:'',website:''});
  const [busy,setBusy]=useState(false),[notice,setNotice]=useState(null);
  const sending=useRef(false), status=useRef(null);
  useEffect(()=>{setForm(f=>({...f,subject:onderwerpen.includes(contactOnderwerp)?contactOnderwerp:'Algemene vraag'}));},[contactOnderwerp]);
  useEffect(()=>{if(notice)status.current?.focus();},[notice]);
  useEffect(()=>{if(contactBericht)setForm(f=>({...f,message:contactBericht}));},[contactBericht]);
  const change=e=>setForm(f=>({...f,[e.target.name]:e.target.value}));
  async function submit(e) {
    e.preventDefault();if(sending.current)return;sending.current=true;setBusy(true);setNotice(null);
    try {
      const response=await fetch('/api/contact',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      const data=await response.json().catch(()=>({}));
      if(!response.ok || !data.ok)throw new Error(data.error || 'Verzending kon niet worden bevestigd. Uw tekst blijft staan.');
      setNotice({ok:true,text:data.message});setForm(f=>({...f,message:''}));
    }catch(error){setNotice({ok:false,text:error.message==='Failed to fetch'?'Geen verbinding. Verzending kon niet worden bevestigd. Uw tekst blijft staan.':error.message});}
    finally{sending.current=false;setBusy(false);}
  }
  return <>
    <div className="wrap page-head"><span className="eyebrow">Contact</span><h1>Neem contact met ons op</h1><p>Stel een vraag, meld een defect of deel een idee. U kunt uw bericht hier versturen zonder een e-mailprogramma te openen.</p></div>
    <div className="wrap section-tight contact-layout">
      <form className="card contact-form" onSubmit={submit}>
        <h2>Waar kunnen wij u mee helpen?</h2>
        <p>Het bestuur ontvangt uw bericht op <strong>{VVE_BESTUUR_EMAIL}</strong>. Een antwoord gaat naar het e-mailadres waarmee u bent ingelogd.</p>
        <fieldset disabled={busy}>
          <label htmlFor="contact-naam">Uw naam *</label><input id="contact-naam" name="name" value={form.name} onChange={change} required minLength={2} maxLength={100} autoComplete="name" />
          <label htmlFor="contact-appartement">Appartement / huisnummer <span>(optioneel)</span></label><input id="contact-appartement" name="apartment" value={form.apartment} onChange={change} maxLength={40} />
          <label htmlFor="contact-onderwerp">Onderwerp *</label><select id="contact-onderwerp" name="subject" value={form.subject} onChange={change}>{onderwerpen.map(s=><option key={s}>{s}</option>)}</select>
          <label htmlFor="contact-bericht">Uw bericht *</label><textarea id="contact-bericht" name="message" value={form.message} onChange={change} required minLength={10} maxLength={4000} rows={8} /><small>{form.message.length} / 4000 tekens</small>
          <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Laat dit veld leeg</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={change} /></div>
          <p className="contact-privacy">Uw gegevens en bericht worden per e-mail naar het bestuur gestuurd voor de behandeling van uw vraag. Vermeld alleen wat daarvoor nodig is. <button type="button" className="contact-textlink" onClick={()=>goTo('privacy')}>Privacyverklaring</button></p>
          <button type="submit" className="btn btn-navy">{busy?'Bericht wordt verstuurd…':'Verstuur bericht aan het bestuur'}</button>
        </fieldset>
        {notice && <div ref={status} tabIndex={-1} role={notice.ok?'status':'alert'} className={'contact-status '+(notice.ok?'contact-status--ok':'contact-status--error')}>{notice.text}</div>}
      </form>
      <aside className="card contact-aside"><h2>Goed om te weten</h2><p>Dit formulier wordt door het VvE-bestuur behandeld en is niet bedoeld voor spoedmeldingen.</p><p>Bij direct gevaar belt u <strong>112</strong>. Gebruik bij een urgente storing de afgesproken storingsprocedure van het gebouw.</p><h3>Lukt versturen niet?</h3><p>U kunt ook zelf mailen naar:</p><a data-direct-mail href={'mailto:'+VVE_BESTUUR_EMAIL}>{VVE_BESTUUR_EMAIL}</a><p>Er worden maximaal vijf verzendpogingen per uur toegestaan.</p></aside>
    </div>
  </>;
}
