export default async function getStaticData(type) {
  const res = await fetch("../../../../public/staticData.json");
  const data = await res.json();
  return data[type];
}
