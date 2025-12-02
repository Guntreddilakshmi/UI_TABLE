import React from "react";
import { useEffect, useState } from "react";
import { getTaxes, getCountries } from "../api/api";
import DataTable from "../components/DataTable";

export default function Home() {
  const [rows, setRows] = useState([]);
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    async function load() {
      const [taxRes, countryRes] = await Promise.all([
        getTaxes(),
        getCountries(),
      ]);
      setRows(taxRes.data);
      setCountries(countryRes.data);
    }
    load();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 20 }}>
        Taxes Table
      </h1>

      <DataTable data={rows} setData={setRows} countries={countries} />
    </div>
  );
}
