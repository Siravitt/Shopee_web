export default function Input({ type, name, label, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="px-2">{label}</label>
      <input
        type={type || "text"}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border px-4 py-1"
      />
    </div>
  );
}
