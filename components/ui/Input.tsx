type InputProps = {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export default function Input({
  value,
  placeholder,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mb-3 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
    />
  );
}