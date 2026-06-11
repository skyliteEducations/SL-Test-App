"use client";

export default function SmilesRenderer({ smiles, size = 300 }) {
  if (!smiles) return null;

  const imageUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${encodeURIComponent(
    smiles
  )}/PNG?image_size=large`;

  return (
    <img
      src={imageUrl}
      alt={smiles}
      width={size}
      height={size}
      style={{
        background: "white",
        borderRadius: "8px",
      }}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}