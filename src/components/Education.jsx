import Input from "./Input";

export default function Education({ data, onChange, index }) {
  function handleChange(e) {
    const { name, value } = e.target;
    onChange({ [name]: value }, index);
  }

  return (
    <>
      <Input
        label="School"
        name="school"
        value={data.school}
        onChange={handleChange}
      />
      <Input
        label="Degree"
        name="degree"
        value={data.degree}
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
    </>
  );
}
