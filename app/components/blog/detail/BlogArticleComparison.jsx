export default function BlogArticleComparison({ headers, rows }) {
  return (
    <div className="my-7 overflow-x-auto" role="region" aria-label="Subscription platform comparison" tabIndex={0}>
      <table className="w-full min-w-[580px] border-collapse text-left text-[13px] leading-[1.5]">
        <caption className="sr-only">Skio, Recharge, and Pulse: publicly listed pricing and features as of May 2026</caption>
        <thead className="bg-[#efe9d7]">
          <tr>{headers.map((heading, index) => <th key={index} scope="col" className="px-4 py-4 font-semibold first:w-[26%] last:text-[#9650ef]">{heading || "Feature"}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row[0]} className="border-b border-[#ece8f0] even:bg-[#faf8fd]">
              {row.map((cell, index) => index === 0
                ? <th key={index} scope="row" className="px-4 py-4 font-normal text-[#625d59]"><span className="mr-2 text-[#a661f2]" aria-hidden="true">◈</span>{cell}</th>
                : <td key={index} className="px-4 py-4 align-top text-[#625d59] last:font-semibold last:text-[#9650ef]">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
