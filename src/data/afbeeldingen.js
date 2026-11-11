/* FOTO'S — afkomstig uit de officiële documenten van De Waker
   (het logo en de gevelbeelden uit de VvE-vergaderpresentatie).
   De bestanden staan in de map public/images.
   Foto vervangen? Zet een nieuw bestand met dezelfde naam in public/images,
   of zet een nieuw bestand erbij en pas hieronder de bestandsnaam aan. */

const map = import.meta.env.BASE_URL + "images/";

export const IMG = {
  logo: map + "logo.png",
  heroHoek: map + "hero-hoek.jpg",
  gevelStraat: map + "gevel-straat.jpg",
  terrasStraat: map + "terras-straat.jpg",
  goirleLucht: map + "goirle-lucht.jpg",
  gevelOchtend: map + "gevel-ochtend.jpg",
};
