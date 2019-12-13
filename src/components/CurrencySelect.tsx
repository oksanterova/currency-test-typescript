import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import { Currency, useGetCurrenciesQuery } from "../generated/graphql";

interface Props {
  currency: Currency;
  setCurrency: Dispatch<SetStateAction<Currency>>;
}

const CurrencySelect: React.FC<Props> = ({ currency, setCurrency }) => {
  const { loading, error, data } = useGetCurrenciesQuery();

  if (error) return <p>Error</p>;

  const options =
    data &&
    data.currencies.map(({ symbol, name }) => ({
      label: name,
      value: symbol
    }));

  return (
    <Select
      title="Select Currency"
      value={{ value: currency.symbol, label: currency.name }}
      name="currencies"
      isLoading={loading}
      onChange={valueType => {
        const singleValue = valueType as { label: string; value: string };

        if (singleValue) {
          setCurrency({ symbol: singleValue.value, name: singleValue.label });
        }
      }}
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

export default CurrencySelect;
