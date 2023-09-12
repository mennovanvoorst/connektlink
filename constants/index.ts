import {
  PiEqualsBold,
  PiEyeBold,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkBold,
  PiPlusBold,
  PiUserCircleBold,
  PiYoutubeLogo,
} from 'react-icons/pi';

export const ICONS = {
  profile: PiUserCircleBold,
  link: PiLinkBold,
  preview: PiEyeBold,
  add: PiPlusBold,
  drag: PiEqualsBold,
  github: PiGithubLogo,
  youtube: PiYoutubeLogo,
  instagram: PiInstagramLogo,
} as const;

export const PLATFORMS: Record<string, string> = {
  github: 'GITHUB',
  youtube: 'YOUTUBE',
  instagram: 'INSTAGRAM',
} as const;

export const PLATFORM_ICONS: Record<string, keyof typeof ICONS> = {
  [PLATFORMS.github]: 'github',
  [PLATFORMS.youtube]: 'youtube',
  [PLATFORMS.instagram]: 'instagram',
} as const;
