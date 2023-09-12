import { PLATFORM_ICONS } from '@/constants';
import { Button } from '../Button';
import { SocialLink } from '@/types';

type MockupProps = {
  links: SocialLink[];
};

const Mockup = ({ links }: MockupProps) => {
  const linkButtons = links.map((link) => (
    <Button
      as="a"
      variant={link.platform}
      label={link.platform.toLowerCase()}
      icon={PLATFORM_ICONS[link.platform]}
      alwaysShowIcon
      showArrow
      fullWidth
    />
  ));

  const linkMockups =
    links.length < 5 &&
    [...new Array(4 - links.length)].map(() => (
      <div className="w-full h-[48px] rounded-md bg-gray-100" />
    ));

  return (
    <div className="w-3/4 mx-auto relative overflow-hidden">
      <div className="w-full absolute flex flex-col gap-4 items-center justify-center py-16 px-8">
        <div className="w-[112px] h-[112px] rounded-full bg-gray-100" />
        <div className="w-3/4 h-[16px] rounded-full bg-gray-100 mt-4" />
        <div className="w-1/2 h-[12px] rounded-full bg-gray-100" />

        <div className="w-full mt-8 flex flex-col gap-4">
          {linkButtons} {linkMockups}
        </div>
      </div>

      <svg
        viewBox="0 0 407 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full relative"
      >
        <path
          d="M346.39 0H60.5461C27.1614 0 0 27.1628 0 60.5461V739.453C0 772.839 27.1628 800 60.5461 800H346.402C379.786 800 406.948 772.839 406.948 739.453V60.5461C406.936 27.1628 379.773 0 346.39 0ZM60.5461 20.2003H346.402C366.911 20.2003 383.717 35.6463 386.235 55.496H20.7115C23.2169 35.6463 40.0232 20.2003 60.5461 20.2003ZM386.737 739.453C386.737 761.702 368.636 779.8 346.391 779.8H60.5461C38.2995 779.8 20.2003 761.7 20.2003 739.453V734.001H386.749V739.453H386.737ZM386.737 723.901H20.2003V65.5961H386.749V723.901H386.737Z"
          className="fill-gray-100"
        />
        <path
          d="M77.3539 48.9926C82.5751 48.9926 86.8077 44.76 86.8077 39.5388C86.8077 34.3177 82.5751 30.0851 77.3539 30.0851C72.1327 30.0851 67.9001 34.3177 67.9001 39.5388C67.9001 44.76 72.1327 48.9926 77.3539 48.9926Z"
          className="fill-gray-100"
        />
        <path
          d="M241.835 30.0851H165.642C160.994 30.0851 158.597 33.6001 160.269 37.9221L160.511 38.5277C162.194 42.8511 167.312 46.3648 171.958 46.3648H237.635C242.281 46.3648 246.981 42.7159 248.153 38.2306C249.296 33.7213 246.467 30.0851 241.835 30.0851Z"
          className="fill-gray-100"
        />
      </svg>
    </div>
  );
};

export { Mockup };
