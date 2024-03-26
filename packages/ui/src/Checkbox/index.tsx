import { AiOutlineClose } from "react-icons/ai";

export interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
  return (
    <div className="relative flex items-start m-1">
      <div className="flex items-center h-6">
        <div className="inline-block select-none">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="opacity-0 absolute h-8 w-8"
            id={id} // Ensure the id is passed here to correctly associate the label
          />
          <label
            htmlFor={id} // Use the passed id for the htmlFor attribute
            className={`cursor-pointer flex justify-center items-center w-6 h-6 bg-white border-2 rounded-md ${checked ? 'border-blue-500 bg-blue-500' : 'border-gray-400'}`}
          >
            <AiOutlineClose className={`h-5 w-5 ${checked ? '' : 'text-transparent'}`} />
            
          </label>
        </div>
      </div>
      <span className="ml-2 font-semibold text-gray-100">{label}</span>
    </div>
  );
};

export default Checkbox;
