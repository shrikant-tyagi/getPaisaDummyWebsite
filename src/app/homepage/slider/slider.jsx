'use client';

export default function VerticalSlider() {
  return (
    <div className="overflow-hidden h-[100px]">
      <div className="animate-slide-up text-3xl text-amber-500">
        <div className="h-[100px] font-bold leading-[100px]">Personal Loans</div>
        <div className="h-[100px] font-bold leading-[100px]">Home Loans</div>
        <div className="h-[100px] font-bold leading-[100px]">Education Loans</div>
        <div className="h-[100px] font-bold leading-[100px]">Business Loans</div>
      </div>
    </div>
  );
}
