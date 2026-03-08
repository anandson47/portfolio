import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
}

export default function DashboardCard({ title, description, link }: Props) {
  return (
    <Link href={link}>
      <div className="p-6 rounded-2xl bg-neutral-900 hover:bg-neutral-800 transition">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-neutral-400 mt-2">{description}</p>
      </div>
    </Link>
  );
}