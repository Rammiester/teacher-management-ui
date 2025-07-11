type QualificationsTableProps = {
  qualifications: string[];
  title: string;
};

export default function QualificationsTable({
  qualifications,
  title,
}: QualificationsTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      {qualifications.length > 0 ? (
        <ul className="list-disc list-inside text-gray-600">
          {qualifications.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No qualifications listed</p>
      )}
    </div>
  );
}
