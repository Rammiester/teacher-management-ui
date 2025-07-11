interface QualificationsTableProps {
  title: string;
}

export default function QualificationsTable({
  title,
}: QualificationsTableProps) {
  const data = [
    { name: "Vocal Contemporary", rate: "$28" },
    { name: "Instrument", rate: "$30" },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <button className="text-purple-600 hover:text-purple-800 text-sm">
          + Add
        </button>
      </div>
      <table className="w-full text-sm text-gray-600">
        <thead>
          <tr className="text-left">
            <th className="py-1">Name</th>
            <th className="py-1">Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t">
              <td className="py-1">{row.name}</td>
              <td className="py-1">{row.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
