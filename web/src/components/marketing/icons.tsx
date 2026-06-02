import type { ReactNode } from "react";

type IconProps = {
  children: ReactNode;
  size?: number;
  stroke?: number;
  color?: string;
  style?: React.CSSProperties;
};

export function Icon({
  children,
  size = 22,
  stroke = 1.7,
  color = "currentColor",
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      {children}
    </svg>
  );
}

function mkIcon(render: (p: Omit<IconProps, "children">) => ReactNode) {
  return (p?: Omit<IconProps, "children">) => render(p ?? {});
}

export const I = {
  calendar: mkIcon((p) => (
    <Icon {...p}>
      <rect x="3.5" y="5" width="17" height="15" rx="3" />
      <path d="M3.5 10h17" />
      <path d="M8 3v4M16 3v4" />
    </Icon>
  )),
  spark: mkIcon((p) => (
    <Icon {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </Icon>
  )),
  rules: mkIcon((p) => (
    <Icon {...p}>
      <path d="M5 4h11l3 3v13H5z" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </Icon>
  )),
  diet: mkIcon((p) => (
    <Icon {...p}>
      <path d="M5 12c0-4 3-7 7-7 4 0 7 3 7 7s-3 7-7 7" />
      <path d="M9 17c-2 0-4-1-4-3" />
      <path d="M9 9c1-1 3-1 4 0" />
    </Icon>
  )),
  bell: mkIcon((p) => (
    <Icon {...p}>
      <path d="M6 16h12l-1.5-2V11a4.5 4.5 0 0 0-9 0v3z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </Icon>
  )),
  pin: mkIcon((p) => (
    <Icon {...p}>
      <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </Icon>
  )),
  truck: mkIcon((p) => (
    <Icon {...p}>
      <rect x="2.5" y="7" width="11" height="9" rx="1.5" />
      <path d="M13.5 10h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="1.7" />
      <circle cx="16.5" cy="17.5" r="1.7" />
    </Icon>
  )),
  history: mkIcon((p) => (
    <Icon {...p}>
      <path d="M4 12a8 8 0 1 0 2.5-5.8" />
      <path d="M3 5v3.5h3.5" />
      <path d="M12 8v4l3 2" />
    </Icon>
  )),
  budget: mkIcon((p) => (
    <Icon {...p}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <circle cx="12" cy="12.5" r="2.6" />
      <path d="M6 10v5M18 10v5" />
    </Icon>
  )),
  shield: mkIcon((p) => (
    <Icon {...p}>
      <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  )),
  link: mkIcon((p) => (
    <Icon {...p}>
      <path d="M10 14a4 4 0 0 0 5.6 0l2.8-2.8a4 4 0 0 0-5.6-5.6L11 7.5" />
      <path d="M14 10a4 4 0 0 0-5.6 0L5.6 12.8a4 4 0 0 0 5.6 5.6L13 16.5" />
    </Icon>
  )),
  users: mkIcon((p) => (
    <Icon {...p}>
      <circle cx="9" cy="9" r="3" />
      <path d="M3 19c0-3 3-5 6-5s6 2 6 5" />
      <circle cx="17" cy="8" r="2.3" />
      <path d="M15.5 13.5c2.5.4 4.5 2.2 4.5 4.5" />
    </Icon>
  )),
  gift: mkIcon((p) => (
    <Icon {...p}>
      <rect x="3.5" y="9" width="17" height="11" rx="2" />
      <path d="M3.5 13.5h17M12 9v11" />
      <path d="M9 9c-1.5 0-3-1-3-2.5S7.5 4 9 5.5C10 6.5 12 9 12 9c0 0 2-2.5 3-3.5C16.5 4 18 5 18 6.5S16.5 9 15 9" />
    </Icon>
  )),
  trophy: mkIcon((p) => (
    <Icon {...p}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path d="M5 5h3M16 5h3M5 5v2a2 2 0 0 0 2 2M19 5v2a2 2 0 0 1-2 2" />
      <path d="M10 14h4l-.5 3h-3z" />
      <path d="M8 20h8" />
    </Icon>
  )),
  rocket: mkIcon((p) => (
    <Icon {...p}>
      <path d="M14 4c4 0 6 2 6 6-2 0-3 1-4 2l-5 5-4-4 5-5c1-1 2-4 2-4z" />
      <circle cx="15" cy="9" r="1.4" />
      <path d="M7 17c-1 1-1 3-1 4 1 0 3 0 4-1" />
    </Icon>
  )),
  flag: mkIcon((p) => (
    <Icon {...p}>
      <path d="M5 4v17" />
      <path d="M5 5c4-2 8 2 12 0v9c-4 2-8-2-12 0" />
    </Icon>
  )),
  handshake: mkIcon((p) => (
    <Icon {...p}>
      <path d="M3 10l3-3 4 1 4-1 3 3" />
      <path d="M6 13l3 3 2-2 3 3 3-3" />
      <path d="M3 14h2M19 14h2" />
    </Icon>
  )),
  check: mkIcon((p) => (
    <Icon {...p}>
      <path d="M5 12.5l4 4 10-10" />
    </Icon>
  )),
  arrowR: mkIcon((p) => (
    <Icon {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  )),
  star: mkIcon((p) => (
    <Icon {...p}>
      <path d="M12 4l2.5 5.2 5.5.8-4 4 1 5.5L12 17l-5 2.5 1-5.5-4-4 5.5-.8z" />
    </Icon>
  )),
  eye: mkIcon((p) => (
    <Icon {...p}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  )),
  doc: mkIcon((p) => (
    <Icon {...p}>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </Icon>
  )),
  plug: mkIcon((p) => (
    <Icon {...p}>
      <path d="M9 3v5M15 3v5" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0z" />
      <path d="M12 17v4" />
    </Icon>
  )),
  trash: mkIcon((p) => (
    <Icon {...p}>
      <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />
    </Icon>
  )),
  lock: mkIcon((p) => (
    <Icon {...p}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </Icon>
  )),
  filter: mkIcon((p) => (
    <Icon {...p}>
      <path d="M4 5h16l-6 8v6l-4-2v-4z" />
    </Icon>
  )),
  cake: mkIcon((p) => (
    <Icon {...p}>
      <path d="M12 4v3" />
      <circle cx="12" cy="3.5" r="0.6" fill="currentColor" />
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M4 14c2 1 4 1 6 0s4-1 6 0 4 1 4 0" />
      <path d="M8 11V9M16 11V9" />
    </Icon>
  )),
  coffee: mkIcon((p) => (
    <Icon {...p}>
      <path d="M5 9h12v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" />
      <path d="M17 11h2a2 2 0 0 1 0 4h-2" />
      <path d="M8 5c0 1 1 1 1 2s-1 1-1 2M12 5c0 1 1 1 1 2s-1 1-1 2" />
    </Icon>
  )),
  card: mkIcon((p) => (
    <Icon {...p}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M7 14h5M7 11h10" />
    </Icon>
  )),
};

export type IconName = keyof typeof I;
