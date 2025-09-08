'use client';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div>
        <h1>Welcome to the Education Portal</h1>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <a href="/application" className="btn btn-thin btn-primary">Start New Form</a>
      </div>
    </div>
  );
}
