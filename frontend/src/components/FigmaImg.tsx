import { useState } from "react";

const FIGMA_EMBED_URL =
  "https://www.figma.com/embed?embed_host=storybook&url=https://www.figma.com/file/xHZMZgguFccb9Go5iT9Alj/figma-image?node-id=0-1&hide-ui=1&chrome=0";

const FigmaImg = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <button onClick={() => setShowImage(true)}>Show Figma Image</button>
      {showImage && (
        <iframe
          title="Figma Design"
          src={FIGMA_EMBED_URL}
          width="600"
          height="400"
          className="rounded-lg shadow-md border"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default FigmaImg;
