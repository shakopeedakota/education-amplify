import { getProperty, STATES_LIST } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Dropdown({
  value,
  options,
  name,
  onSelect,
  required = false,
}: {
  value: string;
  options: {
    value: string;
    title: string;
  }[],
  name: string;
  onSelect: CallableFunction;
  required?: boolean;
}) {
  const [ isVisible, setVisible ] = useState(false);
  const [ propertyName, setPropertyName ] = useState(value);
  const isVisibleClass = `open`;

  useEffect(() => {
    setPropertyName(propertyName);
  }, [propertyName]);

  return (
    <div className="dropdown" role="listbox">
      <input
        type="text"
        name={name}
        className="c-input-actual"
        defaultValue={propertyName}
        onChange={(e) => {
          setPropertyName(e.target.value);
          onSelect(e.target.value);
          setVisible(false);
        }}
        required={required}
        readOnly
      />
      <button
        type="button"
        className="dropdown-btn"
        onClick={() => setVisible(!isVisible)}
        onBlur={() => setTimeout(() => setVisible(false), 250)}
      >
        <span>{getProperty(STATES_LIST, propertyName)}</span>
      </button>
      <div className={`dropdown-wrap ${(isVisible) ? isVisibleClass : ''}`}>
        <fieldset className="dropdown-group">
          <ul>
            {options.map((option, idx) => (
              <li key={`option-${idx}`}>
                <label className="c-input">
                  <span
                    className={`c-label ${value == option.value ? 'checked' : ''}`}
                    data-value={option.value}
                    onClick={() => {
                      setPropertyName(option.value);
                      onSelect(option.title);
                      setVisible(false);
                    }}
                  >
                    {option.title}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </div>
    </div>
  );
}