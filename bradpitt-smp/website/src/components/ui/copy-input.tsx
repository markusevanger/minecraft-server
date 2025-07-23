"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clipboard } from "lucide-react";

interface CopyInputProps {
  value: string;
  className?: string;
}

const CopyInput = ({ value, className }: CopyInputProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="flex items-center gap-2">
      <Input type="text" value={value} className="font-mono" readOnly />
      <Button type="button" size="icon" variant="outline" onClick={handleCopy}>
        <Clipboard className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default CopyInput;
