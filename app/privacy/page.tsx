export default function PrivacyPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-emerald-600 text-center mb-4">Privacy Policy</h1>
        

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          At <span className="font-semibold text-emerald-500">FarmGuard</span>, we respect your privacy. Any data you upload, including crop images,
          analysis results, or personal details, are processed securely and used solely to improve our service.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-8">1. Data Usage</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Uploaded images are analyzed by our AI model for disease detection. We do not share or sell your data to third parties.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-8">2. Data Security</h2>
        <p className="text-gray-600 dark:text-gray-400">
          We employ encryption and secure storage to protect your data. Only authorized personnel can access system logs and analytics.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-8">3. Contact</h2>
        <p className="text-gray-600 dark:text-gray-400">
          For privacy-related concerns, reach us at{" "}
          <a href="mailto:privacy@farmguard.ai" className="text-emerald-600 dark:text-emerald-400 hover:underline">
            privacy@farmguard.ai
          </a>.
        </p>
      </div>
    </section>
  );
}
