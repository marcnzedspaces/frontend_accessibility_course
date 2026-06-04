export function DataCard({ title, values }) {
  return (
    <article className="card" aria-labelledby={`${title}-title`}>
      <h2 id={`${title}-title`}>{title}</h2>
      <dl>
        {values.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

/*
Trainer notes:
- Card layouts can be accessible when each value keeps its label.
- Do not convert tabular data to visual cards if relationships are lost.
- A table is often better for comparing rows and columns.
*/
