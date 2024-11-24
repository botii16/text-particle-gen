"use client";

interface DynamicInputProps {
  text: string;
  setText: (text: string) => void;
}

export default function DynamicInput({ text, setText }: DynamicInputProps) {
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="w-64 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
      placeholder="Enter text here"
    />
  );
}
