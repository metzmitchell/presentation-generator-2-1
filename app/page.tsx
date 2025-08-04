export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          Presentation Generator
        </h1>
        <p className="text-2xl text-secondary">
          Beautiful dark-themed visual presentations for videos and meetings
        </p>
        <div className="pt-8">
          <p className="text-muted">
            Navigate to /presentations/[filename] to view your MDX presentations
          </p>
        </div>
      </div>
    </div>
  )
}