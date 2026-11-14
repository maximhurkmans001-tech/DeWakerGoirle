import Icon from './Icon.jsx';

export default function NieuwjaarsVoorstel() {
  function interesse() {
    window.dispatchEvent(new CustomEvent('waker-contactvoorstel', {detail: {
      onderwerp: 'Activiteit voorstellen',
      bericht: 'Ik heb interesse in een gezamenlijke nieuwjaarsborrel voor bewoners van De Waker in januari 2027.\n\nAantal personen (optioneel):\nVoorkeursdag of tijdstip (optioneel):\nIk wil eventueel helpen met de organisatie: ja / nee'
    }}));
  }
  return <article className="card" style={{border:'2px solid var(--gold, #c2a366)'}}>
    <span className="eyebrow">Voorstel voor bewoners</span>
    <h3>Voorstel: nieuwjaarsborrel De Waker</h3>
    <p>Lijkt het u leuk om samen met uw buren het nieuwe jaar te beginnen? Wij peilen de belangstelling voor een nieuwjaarsborrel in januari 2027.</p>
    <p><strong>Datum, tijd en locatie worden nog bepaald.</strong> De borrel is nog niet definitief georganiseerd.</p>
    <p>Via de knop opent u het contactformulier met een ingevuld bericht. Vul uw naam in, pas het bericht zo nodig aan en klik op ‘Verstuur bericht aan het bestuur’. Dan ontvangt het bestuur uw belangstelling. U zit nog nergens aan vast.</p>
    <button className="btn btn-navy" type="button" onClick={interesse} style={{alignSelf:'flex-start'}}><Icon name="mail" size={16}/>Ik heb interesse</button>
  </article>;
}
