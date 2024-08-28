import React from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";
 
export function CountriesSelect() {
  const { countries } = useCountries();
 
  return (
    <div className="w-72 bg-slate-400 flex">
    <Select
      size="lg"
      label="Select Country"
      selected={(element) =>
        element &&
        React.cloneElement(element, {
          disabled: true,
          className:
            "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
        })
      }
    ><div className="overflow-y-auto h-32">

      {countries.map(({ name, flags }) => (
          <Option key={name} value={name} className="flex items-center gap-2 ">
          <img
            src={flags.svg}
            alt={name}
            className="h-5 w-5 rounded-full object-cover"
            />
          {name}
        </Option>
      ))}
      </div>
    </Select>
  </div>
  );
}