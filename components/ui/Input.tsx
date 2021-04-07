import tw from "twin.macro";
import VisuallyHidden from "@reach/visually-hidden";

interface LabelTextProps {
  children: React.ReactNode;
  hidden?: boolean;
}

const LabelText = ({ children, hidden = false }: LabelTextProps) => {
  const text = <span tw="text-gray-700 dark:text-gray-200">{children}</span>;

  if (hidden) {
    return <VisuallyHidden>{text}</VisuallyHidden>;
  }

  return text;
};

export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  hideLabel?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputStyles = ({ withLabel = false }) => [
  tw`block w-full rounded-md bg-gray-100 border-gray-300 text-gray-800 dark:(bg-gray-900 border-gray-700 text-gray-200) shadow-sm`,
  tw`focus:(border-yellow-500 ring-2 ring-yellow-400 ring-opacity-50)`,
  withLabel && tw`mt-2`,
];

const Input = ({
  name,
  hideLabel = false,
  type = "text",
  ...props
}: IInputProps) => {
  return (
    <label tw="block">
      <LabelText hidden={hideLabel}>{name}</LabelText>
      <input
        css={inputStyles({ withLabel: !hideLabel })}
        type={type}
        {...props}
      />
    </label>
  );
};

export default Input;
