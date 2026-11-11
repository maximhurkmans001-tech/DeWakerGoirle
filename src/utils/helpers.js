/* Kleine hulpfuncties voor e-maillinks en datums. */

export function mailtoHref(email, subject, body) {
  const params = [];
  if (subject) params.push("subject=" + encodeURIComponent(subject));
  if (body) params.push("body=" + encodeURIComponent(body));
  return "mailto:" + email + (params.length ? "?" + params.join("&") : "");
}

export function formatDatumLang(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

export function formatDatumKort(iso) {
  const d = new Date(iso + "T00:00:00");
  return { dag: d.getDate(), maand: d.toLocaleDateString("nl-NL", { month: "short" }).replace(".", "") };
}
