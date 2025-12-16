// import Tabs from "../tabs/tab"; // Unused
import "./contactUs.css"; // Keeping for safety, but overriding styles with Tailwind

function ContactUs() {
  return (
    <div
      className="py-24 px-4 text-center bg-surface w-full mt-12 rounded-t-3xl border-t border-border shadow-inner"
      id="contactus"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-12">
        Let’s build thoughtful products at scale.
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="mailto:salamimariam239@gmail.com"
          className="bg-primary text-btn-text px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/30"
        >
          Email Me
        </a>

        <div className="flex gap-6">
          <a
            href="https://github.com/Ehm-Ehs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-sub hover:text-text-main font-medium border-b border-transparent hover:border-text-main transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/salami-mariam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-sub hover:text-secondary font-medium border-b border-transparent hover:border-secondary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-20 text-text-sub text-sm">
        &copy; 2025 Mariam Salami
      </div>
    </div>
  );
}

export default ContactUs;
