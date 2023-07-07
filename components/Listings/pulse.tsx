export default function ListingSkeleton() {
  return (
    <div>
      <div className="animate-pulse bg-neutral-300 h-72 rounded-xl mb-2.5 last:mb-0" />
      <div className="flex gap-[30%]">
        <div className="flex-[3_0_0]">
          <div className="animate-pulse bg-neutral-300 h-[1em] rounded-sm w-full mb-2.5 last:mb-0" />
          <div className="animate-pulse bg-neutral-300 h-[1em] rounded-sm w-[60%] mb-2.5 last:mb-0" />
          <div className="animate-pulse bg-neutral-300 h-[1em] rounded-sm w-[50%] mb-2.5 last:mb-0" />
          <div className="animate-pulse bg-neutral-300 h-[1em] rounded-sm w-[40%] mb-2.5 last:mb-0" />
        </div>
        <div className="flex-[1_0_0]">
          <div className="animate-pulse bg-neutral-300 h-[1em] rounded-sm w-full mb-2.5 last:mb-0" />
        </div>
      </div>
    </div>
  );
}
