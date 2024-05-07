import { blankTiles } from '../lib/presetLayout';

export default function BlankBoard() {
  return (
    <div className="grid grid-cols-4">
      {blankTiles.map((tile, index) => (
        <div
          key={(tile, index)}
          className="p-1 "
        >
          <img
            src="/tiles/cropped/00-blank.jpg"
            // src="/public/images/istanbulTitle.png"
            className="rounded-2xl border-4 border-white"
          />
        </div>
      ))}
    </div>
  );
}
