export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h1>Item {JSON.stringify(params)}</h1>
    </div>
  );
}
