export default function Input({ label, name, value, type = "text", onChange }) {
  return (
    <label>
      <p>{label}</p>
      {name === "desc" ? (
        <textarea name={name} value={value} onChange={onChange}></textarea>
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} />
      )}
    </label>
  );
}
