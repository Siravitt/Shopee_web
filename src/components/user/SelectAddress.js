export default function SelectAddress({ value, handleOnChange, selected, closeAddress }) {
  return (
    <div className="w-full h-[auto] px-10 py-5 flex items-center gap-9">
      <input
        type="radio"
        name="address"
        value={JSON.stringify(value)}
        onChange={handleOnChange}
        onClick={closeAddress}
        checked={value.id === selected ? true : ""}
      />
      <div className="text-start flex flex-col gap-1">
        <div className="text-[12px]">
          {value.receiverName} | {value.receiverPhone}
        </div>
        <div className="text-[12px]">
          {value.address +
            ", " +
            value.subDistrict +
            ", " +
            value.district +
            ", " +
            value.province +
            ", " +
            value.postalCode}
        </div>
      </div>
    </div>
  );
}
