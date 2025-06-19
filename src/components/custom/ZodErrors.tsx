export function ZodErrors({ error }: { error: string[] | undefined }) {
  if (!error) return null;
  return error.map((err: string, index: number) => (
    <div key={index} className="zod-error text-red-500 text-xs italic py-1">
      {err}
    </div>
  ));
}