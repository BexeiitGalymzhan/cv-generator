import Input from "./Input";

export default function Person({ data, onChange }) {
  function handleChange(e) {
    const { name, value } = e.target;
    onChange({ [name]: value });
  }

  return (
    <>
      <Input
        label="Full Name"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <Input
        label="Phone number"
        name="phone"
        value={data.phone}
        onChange={handleChange}
      />
      <Input
        label="Address"
        name="address"
        value={data.address}
        onChange={handleChange}
      />
    </>
  );
}
