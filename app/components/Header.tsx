interface HeaderProps {
  title: string;
  description: string;
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
