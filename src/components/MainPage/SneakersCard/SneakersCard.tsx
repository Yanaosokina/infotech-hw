import { Checkbox } from "shared-components/Checkbox";
import "./SneakersCard.css";


type SneakersCardProps = {
  title: string
}

export function SneakersCard({ title }: SneakersCardProps) {
  return (
    <div className="sneakers-card">
      <Checkbox>{title}</Checkbox>
    </div>
  );
}
