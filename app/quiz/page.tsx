import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-8">
          AkiliMesh 🚀
        </h1>

        <nav className="space-y-4">
          <Link href="/" className="block font-medium text-gray-700">
            🏠 Dashboard
          </Link>

          <Link href="/tutor" className="block text-gray-600">
            🤖 AI Tutor
          </Link>

          <Link href="/peers" className="block text-gray-600">
            👥 Peer Matching
          </Link>

          <Link href="/quiz" className="block text-gray-600">
            🧪 Quiz Generator
          </Link>

          <Link href="/study" className="block text-gray-600">
            📚 Study Rooms
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">

        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to AkiliMesh
        </h2>

        <p className="text-gray-600 mt-2">
          AI-powered peer learning system for students
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">🤖 AI Tutor</h3>
            <p className="text-gray-600 text-sm mt-2">
              Ask any question and get instant AI explanations
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">👥 Peer Matching</h3>
            <p className="text-gray-600 text-sm mt-2">
              Connect with students in your course
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">🧪 Quiz Generator</h3>
            <p className="text-gray-600 text-sm mt-2">
              Generate practice tests instantly
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}