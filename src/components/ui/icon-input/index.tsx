import Image from "next/image";
import { Input } from "../input";
import { useDebounce } from "@/hooks/use-debounce";
import LinkedIn from "@/assets/linkedin.svg";

type IconInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const IconInput = ({ value, onChange, placeholder }: IconInputProps) => {
  const debouncedValue = useDebounce(value);

  const isLinkedin = debouncedValue?.toLowerCase() === "linkedin";

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 min-w-8 rounded-full bg-white p-1.5">
        {isLinkedin ? (
          <LinkedIn />
        ) : (
          !!debouncedValue && (
            <img
              src={`https://cdn.simpleicons.org/${debouncedValue}`}
              className="w-full h-full object-contain"
            />
          )
        )}
      </div>

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
