import {
  
  InstagramLogoIcon
} from "@radix-ui/react-icons";
export type IconsProps = React.SVGAttributes<SVGSVGElement>;

export const Icons = {
  Camera: (props: IconsProps) => {
    return (
      <svg
        viewBox="0 0 15 15"
        fill="none"
        strokeWidth="1.5"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2 3C1.44772 3 1 3.44772 1 4V11C1 11.5523 1.44772 12 2 12H13C13.5523 12 14 11.5523 14 11V4C14 3.44772 13.5523 3 13 3H2ZM0 4C0 2.89543 0.895431 2 2 2H13C14.1046 2 15 2.89543 15 4V11C15 12.1046 14.1046 13 13 13H2C0.895431 13 0 12.1046 0 11V4ZM2 4.25C2 4.11193 2.11193 4 2.25 4H4.75C4.88807 4 5 4.11193 5 4.25V5.75454C5 5.89261 4.88807 6.00454 4.75 6.00454H2.25C2.11193 6.00454 2 5.89261 2 5.75454V4.25ZM12.101 7.58421C12.101 9.02073 10.9365 10.1853 9.49998 10.1853C8.06346 10.1853 6.89893 9.02073 6.89893 7.58421C6.89893 6.14769 8.06346 4.98315 9.49998 4.98315C10.9365 4.98315 12.101 6.14769 12.101 7.58421ZM13.101 7.58421C13.101 9.57302 11.4888 11.1853 9.49998 11.1853C7.51117 11.1853 5.89893 9.57302 5.89893 7.58421C5.89893 5.5954 7.51117 3.98315 9.49998 3.98315C11.4888 3.98315 13.101 5.5954 13.101 7.58421Z"
          fill="currentColor"
        />
      </svg>
    );
  },
  Facebook: (props: IconsProps) => {
    return (
      <svg
        height=""
        style={{
          strokeLinejoin: "round",
          strokeMiterlimit: "2",
        }}
        version="1.1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props} // ✅ Keep props for customization
      >
        <path
          d="M374.244,285.825l14.105,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.116,0l0,-78.291c0,0 -36.407,-6.214 -71.213,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.541 32.798,3.865 49.709,3.865c16.911,0 33.511,-1.324 49.708,-3.865l0,-222.31l74.128,0Z"
          style={{ fillRule: "nonzero", fill: "white" }}
        />
      </svg>
    );
  },

  Messenger: (props: IconsProps) => {
    return (
      <svg
        height="100%"
        style={{
          strokeLinejoin: "round",
          strokeMiterlimit: "2",
        }}
        version="1.1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props} // ✅ Keep props for customization
      >
        <path
          d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,104.795c-88.732,0 -157.5,64.997 -157.5,152.779c0,45.919 18.824,85.595 49.469,113.007c2.566,2.313 4.119,5.514 4.246,8.968l0.856,28.014c0.285,8.937 9.506,14.736 17.683,11.155l31.246,-13.785c2.662,-1.172 5.609,-1.394 8.398,-0.634c14.355,3.961 29.662,6.053 45.602,6.053c88.732,0 157.5,-64.997 157.5,-152.778c0,-87.782 -68.768,-152.779 -157.5,-152.779Zm-94.563,197.462l46.267,-73.395c7.352,-11.661 23.134,-14.577 34.162,-6.306l36.792,27.602c3.391,2.536 8.018,2.504 11.377,-0.031l49.69,-37.712c6.623,-5.038 15.307,2.916 10.838,9.951l-46.236,73.363c-7.352,11.662 -23.133,14.577 -34.161,6.306l-36.792,-27.602c-3.392,-2.536 -8.018,-2.504 -11.377,0.032l-49.722,37.743c-6.623,5.038 -15.307,-2.916 -10.838,-9.951Z"
          fill="white"
        />
      </svg>
    );
  },

  tiktok: (props: IconsProps) => {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          {...props}
        >
          <path
            d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
            fill="white"
          />
        </svg>
      </>
    );
  },
  Instagram: InstagramLogoIcon,
};
