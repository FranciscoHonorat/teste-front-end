import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6L12 3Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
export const TruckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 6h11v10H3zM14 9h4l3 3.5V16h-7" />
    <circle cx="7" cy="17.5" r="1.5" />
    <circle cx="17" cy="17.5" r="1.5" />
  </Icon>
);
export const CardIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="M3 10h18M7 15h4" />
  </Icon>
);

export const SearchIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </Icon>
);
export const OrdersIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="4" width="17" height="16" rx="2" />
    <path d="M3.5 9h17M9 13h6" />
  </Icon>
);
export const HeartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
  </Icon>
);
export const UserIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6.5 18.5a6.5 6.5 0 0 1 11 0" />
  </Icon>
);
export const CartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 4h2.5l2.2 10.5h10.6L20.5 7H6.4" />
    <circle cx="9" cy="19" r="1.3" />
    <circle cx="17" cy="19" r="1.3" />
  </Icon>
);
export const CrownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4 8 4 4 4-6 4 6 4-4-1.5 10h-13L4 8Z" />
  </Icon>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m14.5 6-6 6 6 6" />
  </Icon>
);
export const ChevronRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m9.5 6 6 6-6 6" />
  </Icon>
);
export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const DevicesIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2.5" y="4" width="15" height="10.5" rx="1.2" />
    <path d="M7 18h6M10 14.5V18" />
    <rect x="15" y="9" width="6.5" height="11" rx="1.2" />
  </Icon>
);
export const StoreIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 9.5 5 4.5h14l1.5 5" />
    <path d="M3.5 9.5a2.8 2.8 0 0 0 5.6 0 2.9 2.9 0 0 0 5.8 0 2.8 2.8 0 0 0 5.6 0" />
    <path d="M5 12v7.5h14V12M9 19.5V15h6v4.5" />
  </Icon>
);
export const BottleIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M8 2.5h3M8.5 2.5v4L6.5 9.5v12h6v-12l-2-3v-4" />
    <path d="M6.5 13h6" />
    <rect x="15" y="12" width="5" height="9.5" rx="1" />
    <path d="M15 15h5" />
  </Icon>
);
export const ToolsIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4 20 9-9M14.5 3.5a4 4 0 0 0 5 5L17 11l-4-4 1.5-3.5Z" />
    <path d="m20 20-8.5-8.5M4.5 4.5l3-1 2 2-1 3-3-1-1-3Z" />
  </Icon>
);
export const HealthIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 12s-4-2.5-4-5.5A2.2 2.2 0 0 1 12 5.3a2.2 2.2 0 0 1 4 1.2C16 9.5 12 12 12 12Z" />
    <path d="M3 15.5h3.5l3 1.5h4a1.5 1.5 0 0 1 0 3H9" />
    <path d="m13.5 17 4.5-2.5a1.5 1.5 0 0 1 2 2.2L14 21H6.5L3 19" />
  </Icon>
);
export const FitnessIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="14" cy="4" r="1.6" />
    <path d="m11 8 3-1.5 2 3.5 3 1M13.5 7l-1.5 5 3 3v4.5M12 12l-3.5 3" />
    <path d="M3 21h18M5 21V12l4-2" />
  </Icon>
);
export const FashionIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 3c0 2 1.3 3 3 3s3-1 3-3" />
    <path d="M9 3 7.5 9l2 2-4 10h13l-4-10 2-2L15 3" />
  </Icon>
);

export const InstagramIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.6" fill="currentColor" />
  </Icon>
);
export const FacebookIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14.5 3.5h-2a3 3 0 0 0-3 3v14M7 10.5h7" />
  </Icon>
);
export const LinkedinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 9.5v10M5 5.5v.5M10 19.5v-10M10 13.5a3.5 3.5 0 0 1 7 0v6" />
  </Icon>
);
