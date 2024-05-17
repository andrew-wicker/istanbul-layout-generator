import { blankTiles } from '../lib/presetLayout';

export default function BlankBoard() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {blankTiles.map((tile, index) => (
        <div
          className="rounded-xl w-[15vw] h-auto"
          key={(tile, index)}
        >
          <img
            src="/tiles/cropped/00-blank.jpg"
            className="rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}
