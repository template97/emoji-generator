import Box from './Box';

interface Props {
  cssText: string;
  setCssText: (value: string) => void;
}

function CssBox({ cssText, setCssText }: Props) {
  return (
    <Box>
      <Box.title>CSS Style</Box.title>
      <Box.textarea className="preview" value={cssText} onChange={(e) => setCssText(e.target.value)} />
    </Box>
  );
}

export default CssBox;
