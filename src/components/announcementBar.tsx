export default function AnnouncementBar() {
  return (
    <div className="bg-deep-blue text-white text-sm font-josefin-sans">
      <p className="px-5 py-2.5 lg:px-10 text-center tracking-wide">
        Immediate availability for in-person and virtual sessions.{" "}
        <a
          href="tel:+254722720072"
          className="underline underline-offset-2 hover:text-muted-yellow transition-colors duration-150"
        >
          Call +254 722 720 072
        </a>
      </p>
    </div>
  );
}
