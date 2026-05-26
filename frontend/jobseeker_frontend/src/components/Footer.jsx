function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white px-6 py-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm text-[var(--foreground)]/60">
          © {new Date().getFullYear()} JobSeeker AI · Built by NevaraTech
        </p>
      </div>
    </footer>
  );
}

export default Footer;