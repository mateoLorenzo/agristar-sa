export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-5 animate-pulse">
      {/* Logo Skeleton */}
      <div className="w-full h-[72px] mb-4 bg-gray-200 rounded-lg" />

      {/* Text Skeletons */}
      <div className="mb-4">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>

      {/* Button Skeleton */}
      <div className="flex justify-end">
        <div className="w-9 h-9 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}

