const InputField = ({
  placeholder,
  name,
  type,
  handleChange,
  classProps = "",
}) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      step={"0.0001"}
      type={type}
      onChange={handleChange}
      className={`my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism ${classProps} placeholder:normal-case`}
    />
  );
};

export default InputField;
