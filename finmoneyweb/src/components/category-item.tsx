export default function CategotyItem() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
            <Book />
            <span>icone</span>
            <span>nome</span>
      </div>
      <div>
        <span>dropdown</span>
      </div>
    </div>
  );
}
