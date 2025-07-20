import Input from "./Input";

export default function Experience({ data, onChange, index }) {
  function handleChange(e) {
    const { name, value } = e.target;
    onChange({ [name]: value }, index);
  }

  return (
    <>
      <Input
        label="Company"
        name="company"
        value={data.company}
        onChange={handleChange}
      />
      <Input
        label="Position"
        name="position"
        value={data.position}
        onChange={handleChange}
      />
      <Input
        type="date"
        label="Start Date"
        name="startDate"
        value={data.startDate}
        onChange={handleChange}
      />
      <Input
        type="date"
        label="End Date"
        name="endDate"
        value={data.endDate}
        onChange={handleChange}
      />
      <Input
        label="Location"
        name="location"
        value={data.location}
        onChange={handleChange}
      />
      <Input
        label="Description"
        name="desc"
        value={data.desc}
        onChange={handleChange}
      />
    </>
  );
}
