interface TableProps {
  title: string;
}

export default function QualificationsTable({ title }: TableProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <button className="text-indigo-500 hover:underline">+ Add</button>
      </div>
      <table className="w-full text-sm text-gray-600">
        <thead>
          <tr>
            <th className="text-left font-medium">Name</th>
            <th className="text-left font-medium">Rate ($/hr)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vocal Contemporary</td>
            <td>$28</td>
          </tr>
          <tr>
            <td>Instrument</td>
            <td>$30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
