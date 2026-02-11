/// <reference types="vite/client" />
interface Window {
  umami?: {
    track: (payload: (props: any) => any) => void;
  };
}