// Brand/social marks — lucide ships no logo icons by design, so these stay
// hand-drawn. Everything else previously here has a direct lucide-react
// equivalent and is imported straight from "lucide-react" at each call site
// instead of being re-exported through this file.

type IconProps = {
  size?: number;
  className?: string;
};

export function FacebookIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 8 14" fill="currentColor" className={className}>
      <path d="M7.027 7.875h-2.05V14H2.242V7.875H0V5.359h2.242V3.418C2.242 1.23 3.555 0 5.551 0 6.508 0 7.52.191 7.52.191v2.16H6.398c-1.093 0-1.421.657-1.421 1.368v1.64H7.41l-.383 2.516z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="currentColor" className={className}>
      <path d="M7 3.406c1.02.021 1.865.375 2.531 1.063.688.666 1.042 1.51 1.063 2.531-.021 1.02-.375 1.865-1.063 2.531-.666.688-1.51 1.042-2.531 1.063-1.02-.021-1.865-.375-2.531-1.063C3.78 8.865 3.427 8.021 3.406 7c.021-1.02.375-1.865 1.063-2.531C5.135 3.78 5.979 3.427 7 3.406zm0 5.938c.667-.021 1.219-.25 1.656-.688.438-.437.667-.99.688-1.656-.021-.667-.25-1.219-.688-1.656-.437-.438-.99-.667-1.656-.688-.667.021-1.219.25-1.656.688-.438.437-.667.99-.688 1.656.021.667.25 1.219.688 1.656.437.438.99.667 1.656.688zm4.594-6.094a1.019 1.019 0 0 0-.25-.594.872.872 0 0 0-.594-.219c-.25 0-.448.073-.594.22a.811.811 0 0 0-.25.593c.042.52.323.802.844.844.5-.042.781-.323.844-.844zm2.375.875v-.031c.02.416.031 1.01.031 1.781v2.25c0 .75-.01 1.333-.031 1.75 0 1.146-.386 2.125-1.156 2.938-.813.77-1.782 1.145-2.907 1.124-.416.021-1.01.042-1.781.063h-2.25c-.77-.02-1.354-.042-1.75-.063-1.146.021-2.125-.354-2.938-1.124C.417 12 .042 11.02.063 9.874.021 9.458 0 8.875 0 8.125v-2.25c0-.77.02-1.365.063-1.781C.041 2.969.416 2 1.188 1.187 2.02.417 3 .032 4.124.032 4.521.011 5.105 0 5.875 0h2.25c.77 0 1.365.01 1.781.031 1.125 0 2.094.386 2.906 1.157.771.812 1.157 1.791 1.157 2.937zm-1.5 7c.146-.417.229-.98.25-1.688.041-.708.052-1.354.031-1.937V7v-.5c.02-.583.01-1.23-.031-1.938-.021-.708-.104-1.27-.25-1.687a2.498 2.498 0 0 0-1.344-1.344c-.417-.146-.98-.229-1.688-.25A66.383 66.383 0 0 0 7.5 1.25h-1c-.583-.02-1.23-.01-1.938.031-.687.021-1.25.104-1.687.25a2.497 2.497 0 0 0-1.344 1.344c-.146.417-.229.98-.25 1.688-.02.708-.031 1.354-.031 1.937v1c0 .583.01 1.23.031 1.938.021.687.104 1.25.25 1.687.271.625.719 1.073 1.344 1.344.438.146 1 .229 1.688.25.708.02 1.354.031 1.937.031h1c.583 0 1.23-.01 1.938-.031.708-.021 1.27-.104 1.687-.25a2.498 2.498 0 0 0 1.344-1.344z" />
    </svg>
  );
}

export function TwitterIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 12" fill="currentColor" className={className}>
      <path d="M9.898 0h1.942L7.629 4.813l4.95 6.562H8.694L5.66 7.41l-3.473 3.965H.248l4.51-5.14L0 0h3.965l2.762 3.637L9.898 0zm-.683 10.227h1.094L3.39 1.094H2.242l6.973 9.133z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="currentColor" className={className}>
      <path d="M2.734 12.605H.191V4.43h2.543v8.175zM1.45 3.335C.656 3.336 0 2.653 0 1.833A1.45 1.45 0 0 1 2.188.574c.464.246.738.739.738 1.258 0 .82-.656 1.504-1.477 1.504zm10.774 9.27H9.707V8.641c0-.957-.027-2.16-1.34-2.16-1.312 0-1.504 1.011-1.504 2.078v4.046H4.32V4.43h2.434v1.12h.027c.356-.628 1.176-1.312 2.407-1.312 2.57 0 3.062 1.696 3.062 3.883v4.484h-.027z" />
    </svg>
  );
}

export function TikTokIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 3v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M16 3c.3 2.4 1.9 4 4.5 4.3" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 20l1.3-3.9A7.9 7.9 0 1 1 8.6 19L4 20z" />
      <path d="M8.5 8.7c0 3 2.3 6 5.7 6 .8 0 1.3-.8.9-1.5l-.6-1a.8.8 0 0 0-.9-.3l-.9.3a5.6 5.6 0 0 1-2.8-2.8l.3-.9a.8.8 0 0 0-.3-.9l-1-.6c-.7-.4-1.5.1-1.5.9z" />
    </svg>
  );
}
