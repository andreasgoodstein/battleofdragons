type DragonDropdownProps = {
  list: Dragon[];
};

export const DragonDropdown = ({ list }: DragonDropdownProps) => (
  <select>
    {list.map(({ id, name }) => (
      <option key={id.toString()} id={id.toString()}>
        {name}
      </option>
    ))}
  </select>
);
