import React, { useState } from "react";
import { updateTax } from "../api/api";

export default function EditModal({ row = {}, countries = [], onClose = () => {}, onSave = () => {} }) {
  const [name, setName] = useState(row.name ?? "");
  const [country, setCountry] = useState(row.country ?? "");
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    try {
      const payload = { ...row, name, country };
      const res = await updateTax(row.id, payload);
      onSave(res?.data ?? payload);
      onClose();
    } catch (err) {
      console.error("Save failed:", err);
      alert("Save failed — check console");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "#fff", borderRadius: 8, padding: 20, width: 360 }}>
        <h3 style={{ marginBottom: 12 }}>Edit</h3>

        <label style={{ display: "block", marginBottom: 6 }}>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", marginBottom: 12, padding: 8 }} />

        <label style={{ display: "block", marginBottom: 6 }}>Country</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)} style={{ width: "100%", marginBottom: 12, padding: 8 }}>
          <option value="">-- select --</option>
          {countries.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <div>
          <button onClick={handleSave} disabled={saving} style={{ marginRight: 8 }}>
            {saving ? "Saving..." : "Save"}
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
