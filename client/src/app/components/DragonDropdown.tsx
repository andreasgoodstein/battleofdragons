type DragonDropdownProps = {
  disabled?: boolean;
  list: Dragon[];
  selectHandler: (dragonId?: number) => void;
  value?: number;
};

export const DragonDropdown = ({
  disabled,
  list,
  selectHandler,
  value,
}: DragonDropdownProps) => (
  <select
    disabled={disabled}
    onChange={({ currentTarget: { value } }) => {
      selectHandler(parseInt(value, 10));
    }}
    value={value}
  >
    <option key="0" value={undefined}>
      None
    </option>

    {list.map((dragon) => (
      <option key={dragon.id} value={dragon.id}>
        {dragon.name}
      </option>
    ))}
  </select>
);
