const steps = [
  {
    title: "Upload Photo",
    description: "Take a photo of the affected crop or upload from gallery",
  },
  {
    title: "AI Analysis",
    description: "Our AI analyzes the image and identifies the disease",
  },
  {
    title: "Get Results",
    description: "Receive detailed diagnosis and confidence scores",
  },
  {
    title: "Treatment",
    description: "Follow treatment recommendations and track progress",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Simple, fast, and effective</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-linear-to-r from-primary/50 to-transparent" />
              )}
              <div className="glass rounded-xl p-6 backdrop-blur-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold mb-4 text-lg">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
