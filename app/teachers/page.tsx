import TeacherCard from "../components/TeacherCard";
import teacherData from "../data/teachers.json";

export default function TeachersPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Teachers</h1>
      <p className="text-gray-600 mb-6">
        Explore the list of teachers and their qualifications.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {teacherData.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
