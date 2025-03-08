import { Trans } from "react-i18next";

export default function DescriptionPane({ message }: { message: string }) {
  return <Trans i18key="description.header1">{`${message}`}</Trans>;
}
