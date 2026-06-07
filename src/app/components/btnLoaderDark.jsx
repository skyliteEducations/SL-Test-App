export default function ButtonLoaderDark() {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="h-2 w-2 animate-bounce rounded-full bg-teal-700" />
      <div
        className="h-2 w-2 animate-bounce rounded-full bg-teal-700"
        style={{ animationDelay: "0.15s" }}
      />
      <div
        className="h-2 w-2 animate-bounce rounded-full bg-teal-700"
        style={{ animationDelay: "0.3s" }}
      />
    </div>
  );
}