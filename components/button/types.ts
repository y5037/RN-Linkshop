import { useRouter } from "expo-router";

export type LinkButtonProps = {
  to: Parameters<ReturnType<typeof useRouter>["push"]>[0];
  label: string;
  style?: object;
};
