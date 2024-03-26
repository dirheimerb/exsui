import { useState } from 'react';

interface UseFormItemReturn {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function useFormItem(initialValue: string): UseFormItemReturn {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, handleChange };
}

export default useFormItem;
