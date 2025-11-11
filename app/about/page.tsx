export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-emerald-600">About FarmGuard</h1>


        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          FarmGuard is an AI-powered platform designed to help farmers detect and manage crop diseases early.
          By combining cutting-edge image recognition and machine learning models, we aim to empower growers with
          data-driven insights, reduce losses, and promote sustainable agriculture.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Our mission is simple: <span className="font-semibold text-emerald-500">Smarter Farming, Healthier Harvests.</span>
        </p>
      </div>
    </section>
  );
}
