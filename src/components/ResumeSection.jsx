function ResumeSection() {
  return (
    <section
      id="resume"
      className="section-padding bg-transparent dark:bg-transparent text-light-text dark:text-dark-text"
    >
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-14 text-slate-800 dark:text-slate-100">
          View My Resume
        </h2>
        <a
          href="https://drive.google.com/file/d/1GSdblg7BWDcp6NRKkau1GTjkVXpSiyUS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-sm font-medium text-white bg-aesthetic-blue rounded-lg shadow-md hover:bg-aesthetic-blue/90 focus:outline-none focus:ring-2 focus:ring-aesthetic-blue focus:ring-offset-2 transition-all"
          onClick={(e) => e.currentTarget.blur()}
        >
          View Resume
        </a>
      </div>
    </section>
  );
}

export default ResumeSection;
