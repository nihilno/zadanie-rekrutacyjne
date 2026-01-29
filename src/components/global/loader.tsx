import { Loader2Icon } from "lucide-react";

function Loader() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loader2Icon className="size-8 animate-spin" />
    </div>
  );
}

export default Loader;
