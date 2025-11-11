export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-emerald-600">Contact Us</h1>


        <p className="text-lg text-gray-600 dark:text-gray-300">
          Have a question, feedback, or partnership inquiry? We’d love to hear from you.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md max-w-md mx-auto space-y-4">
          <p className="text-gray-700 dark:text-gray-300">📧 Email us at:</p>
          <a
            href="mailto:support@farmguard.ai"
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
          >
            support@farmguard.ai
          </a>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
            Our support team is available Monday to Friday, 9 AM – 6 PM (IST).
          </p>
        </div>
      </div>
    </section>
  );
}
