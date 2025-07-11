type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-500">Modernized interface for teacher management.</p>
    </header>
  );
}
