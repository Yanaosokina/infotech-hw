import { Checkbox } from "shared-components/Checkbox";
import "./SneakersCard.css";

type SneakersCardProps = {
  title: string;
  onCategorySelect: (category: string, checked: boolean) => void;
  isChecked: boolean;
};

export function SneakersCard({ title, onCategorySelect, isChecked }: SneakersCardProps) {
  const handleCheckboxChange = (checked: boolean) => {
    onCategorySelect(title, checked);
  };

  return (
    <div className="sneakers-card">
      <Checkbox onChange={handleCheckboxChange} isChecked={isChecked} >{title}</Checkbox>
    </div>
  );
}
