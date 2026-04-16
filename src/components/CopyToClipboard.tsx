import { useState } from "react";

const CopyToClipboard: React.FC = () => {
  const api_key = "dcdfewfewffffff";
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(api_key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log("failed to copy");
    }
  };
  return (
    <>
      <button onClick={handleClick}>{copied ? "Copied!" : "Copy"}</button>
    </>
  );
};

export default CopyToClipboard;
