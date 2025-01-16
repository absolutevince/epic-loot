export default async function getStaticData(source, type) {
  const res = await fetch("../../../../public/staticData.json");
  const data = await res.json();

  return data[source][type];
}
