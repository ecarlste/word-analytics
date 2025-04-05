type WarningProps = {
  warningText?: string;
};

function Warning({ warningText }: WarningProps) {
  return <p className="warning">{warningText}</p>;
}

export default Warning;
